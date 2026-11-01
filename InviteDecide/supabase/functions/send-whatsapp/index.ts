// Supabase Edge Function: send-whatsapp
// Securely dispatches WhatsApp template or interactive messages via Meta Cloud API
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { event_id, organization_id, recipient_phone, template_name, parameters } = await req.json();

    if (!recipient_phone) {
      return new Response(JSON.stringify({ error: "Missing recipient_phone" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const whatsappToken = Deno.env.get("WHATSAPP_ACCESS_TOKEN");
    const phoneNumberId = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID");

    // Clean phone number (must be digits only, with country code)
    const cleanPhone = recipient_phone.replace(/[^0-9]/g, "");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // If real credentials are not yet configured in secrets, record queued item and return guidance
    if (!whatsappToken || !phoneNumberId) {
      await supabase.from("whatsapp_message_queue").insert({
        organization_id,
        event_id,
        recipient_phone: cleanPhone,
        template_name: template_name || "event_invitation",
        payload: { parameters, simulation: true },
        status: "queued",
        error_message: "WhatsApp Business API credentials not yet configured in Supabase Secrets.",
      });

      return new Response(
        JSON.stringify({
          success: true,
          status: "queued",
          simulation: true,
          message: "Message queued. WhatsApp credentials required in Supabase secrets for external dispatch.",
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

    // Call official Meta Graph API v20.0
    const metaApiUrl = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;
    const response = await fetch(metaApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${whatsappToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: cleanPhone,
        type: "template",
        template: {
          name: template_name,
          language: { code: "en" },
          components: parameters || [],
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Record failure
      await supabase.from("whatsapp_message_queue").insert({
        organization_id,
        event_id,
        recipient_phone: cleanPhone,
        template_name,
        status: "failed",
        error_message: data.error?.message || "WhatsApp API error",
      });

      return new Response(JSON.stringify({ success: false, error: data.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Record success
    const messageId = data.messages?.[0]?.id;
    await supabase.from("whatsapp_message_queue").insert({
      organization_id,
      event_id,
      recipient_phone: cleanPhone,
      template_name,
      status: "submitted",
      sent_at: new Date().toISOString(),
      payload: { message_id: messageId },
    });

    return new Response(JSON.stringify({ success: true, messageId, status: "submitted" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

// Supabase Edge Function: whatsapp-webhook
// Handles Meta webhook verification (GET) and status callbacks (POST)
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

  const url = new URL(req.url);

  // 1. Meta Webhook Verification (GET)
  if (req.method === "GET") {
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");

    const expectedToken = Deno.env.get("WHATSAPP_WEBHOOK_VERIFY_TOKEN") || "invitedecide_verify_token";

    if (mode === "subscribe" && token === expectedToken) {
      console.log("WhatsApp Webhook verified successfully");
      return new Response(challenge, { status: 200 });
    }
    return new Response("Forbidden", { status: 403 });
  }

  // 2. Incoming Notification Events (POST)
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
      );

      // Process message status updates
      if (body.entry && body.entry.length > 0) {
        for (const entry of body.entry) {
          const changes = entry.changes || [];
          for (const change of changes) {
            const value = change.value;
            if (value && value.statuses) {
              for (const statusObj of value.statuses) {
                const messageId = statusObj.id;
                const status = statusObj.status; // delivered, read, sent, failed
                const timestamp = new Date(parseInt(statusObj.timestamp) * 1000).toISOString();

                // Update message queue and logs
                await supabase
                  .from("whatsapp_message_queue")
                  .update({
                    status: status,
                    delivered_at: status === "delivered" ? timestamp : undefined,
                    read_at: status === "read" ? timestamp : undefined,
                  })
                  .eq("payload->>message_id", messageId);
              }
            }
          }
        }
      }

      return new Response(JSON.stringify({ received: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    } catch (err: any) {
      console.error("Webhook processing error:", err.message);
      return new Response(JSON.stringify({ error: err.message }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }
  }

  return new Response("Method not allowed", { status: 405 });
});

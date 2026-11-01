# InviteDecide — WhatsApp Cloud API Setup Guide

InviteDecide communicates with guests exclusively through **WhatsApp**, offering both official **Meta WhatsApp Business Cloud API** automated messaging and an instant **Manual Click-to-Chat Fallback**.

---

## 1. Meta Developer Portal Setup

1. Visit [developers.facebook.com](https://developers.facebook.com/) and register as a Meta Developer.
2. Create a Business App and select the **WhatsApp** product.
3. Obtain your credentials from the WhatsApp Getting Started dashboard:
   - **Phone Number ID** (e.g., `105938204859302`)
   - **WhatsApp Business Account ID (WABA)** (e.g., `109283746592837`)
   - **User / System User Access Token** (Permanent Token with `whatsapp_business_messaging` permissions)

## 2. Supabase Secret Configuration

Set the credentials in your Supabase project vault:

```bash
# In Supabase CLI or Dashboard Secrets:
supabase secrets set WHATSAPP_ACCESS_TOKEN="EAA..."
supabase secrets set WHATSAPP_PHONE_NUMBER_ID="10593..."
supabase secrets set WHATSAPP_WEBHOOK_VERIFY_TOKEN="your_custom_secret_verify_token"
```

## 3. Webhook Configuration

1. In Meta App Dashboard, navigate to **WhatsApp > Configuration > Webhook**.
2. Set the **Callback URL**:
   `https://oruybhfodbbjpfvipoqk.supabase.co/functions/v1/whatsapp-webhook`
3. Set the **Verify Token** matching your configured `WHATSAPP_WEBHOOK_VERIFY_TOKEN`.
4. Subscribe to the `messages` event field to capture delivery updates:
   - Sent
   - Delivered
   - Read
   - Failed

## 4. Manual WhatsApp Click-to-Chat Fallback

For events where Meta Business API is not yet activated or for instant 1-on-1 organizer communications, InviteDecide automatically generates compliant `https://wa.me/<phone>?text=<encoded_invitation_message>` direct dispatch links.

Clicking "Send via WhatsApp Web/App" launches WhatsApp directly on mobile or desktop with the guest's personalized greeting, event link, and unique invitation code prefilled.

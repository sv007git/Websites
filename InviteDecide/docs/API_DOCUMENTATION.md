# InviteDecide — API & Edge Functions Documentation

This document describes the serverless Edge Functions and REST endpoints powering InviteDecide.

## 1. `POST /functions/v1/send-whatsapp`
Dispatches single or batch messages using Meta WhatsApp Cloud API.

### Request Headers
- `Authorization: Bearer <supabase_anon_or_user_jwt>`
- `Content-Type: application/json`

### Request Body
```json
{
  "organization_id": "99b0c2a8-...",
  "event_id": "4a180cf2-...",
  "recipient_phone": "+919876543210",
  "template_name": "wedding_invitation_v1",
  "parameters": [
    {
      "type": "body",
      "parameters": [
        { "type": "text", "text": "Aditya & Priya" },
        { "type": "text", "text": "https://sv007git.github.io/InviteDecide/#/invite/abc12345" }
      ]
    }
  ]
}
```

### Response
```json
{
  "success": true,
  "messageId": "wamid.HBgLM...",
  "status": "submitted"
}
```

---

## 2. `POST /functions/v1/whatsapp-webhook`
Receives delivery status notifications from Meta (sent, delivered, read).

---

## 3. Stored Procedure: `atomic_checkin`
Executes server-side QR verification and logs check-in records.

### Parameters:
- `p_qr_token_hash` (TEXT): SHA-256 hash of the presented QR token.
- `p_event_id` (UUID): Active event ID.
- `p_attendee_id` (UUID, optional): Specific family member attendee ID if individual check-in.
- `p_scanned_by` (UUID, optional): Authenticated staff profile ID.
- `p_scan_type` (TEXT): `'qr_camera'` or `'manual_search'`.

### Returns JSON:
```json
{
  "success": true,
  "guest_name": "Rajesh Sharma",
  "checked_in_count": 1,
  "max_attendees": 4
}
```

---

## 4. Stored Procedure: `reserve_time_slot_atomic`
Reserves capacity within an arrival window with race condition protection.

### Parameters:
- `p_slot_id` (UUID)
- `p_rsvp_id` (UUID)
- `p_attendee_count` (INTEGER)

### Returns JSON:
```json
{
  "success": true,
  "slot_id": "3b29c...",
  "new_booked_count": 84
}
```

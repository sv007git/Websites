# InviteDecide — Database Architecture & Schema Reference

InviteDecide's data model is designed for PostgreSQL on Supabase, featuring Row Level Security (RLS), atomic stored procedures for concurrency protection, and cryptographic token hashing.

## Key Design Principles

1. **Strict Multi-Tenancy**: Organizations encapsulate all events, staff memberships, and resources. RLS policies prevent cross-tenant data leakage.
2. **Account-Free Public Guest Experience**: Guests access their invitation via random, cryptographically secure 128-bit hex tokens (`/invite/:token`), never exposing sequential IDs or internal table primary keys.
3. **Attendee-Level Granularity**: Food selections, dietary requirements, seating allocations, and check-in statuses are recorded per individual attendee, even when submitted by a single family representative.
4. **Concurrency & Capacity Control**: Time slots and QR check-ins execute via server-side atomic transactions (`reserve_time_slot_atomic` and `atomic_checkin`) with `FOR UPDATE` row locks, preventing race conditions.
5. **Cryptographic QR Validation**: QR passes store the SHA-256 hash of the verification token. Plaintext tokens are never stored in the database.

## Schema Overview

```
organizations (Multi-Tenant Tenant Boundary)
 ├── organization_members (RBAC: Owner, Event Manager, Check-in Operator, etc.)
 ├── whatsapp_settings (Meta Cloud API credentials & tokens)
 └── events (Multi-Day Weddings, Corporate, Ceremonies)
      ├── event_days & event_functions (Mehendi, Haldi, Sangeet, Wedding, Reception)
      ├── time_slots (Arrival time windows with capacity & buffers)
      ├── menu_categories & menu_items (Dishes, allergens, dietary flags, costs)
      ├── venue_layouts & venue_tables & seats (2D visual seating coordinates)
      ├── guest_groups (Families / Households)
      ├── guests (Individuals with contact, category, VIP flags)
      │    └── invitations (Unique token, readable short code, delivery status)
      │         └── rsvps (Status, total counts, arrival slot selection)
      │              ├── attendees (Individual names, check-in state, assigned seat)
      │              │    ├── guest_food_selections (Attendee-specific dishes & quantities)
      │              │    └── seat_allocations (1:1 seat to attendee mapping)
      │              └── qr_passes (Token hash, display code, max attendees allowed)
      │                   └── checkin_logs (Scan type, timestamp, scanner ID, audit info)
      ├── catering_calculations (Aggregated quantities + configured safety buffer)
      └── vendor_access (Scoped, token-restricted view for caterers & decorators)
```

## Migration Execution

Migrations are located in `supabase/migrations/`:
- `20261031000001_initial_schema.sql`

To apply directly in Supabase:
1. Open the [Supabase SQL Editor](https://app.supabase.com/project/oruybhfodbbjpfvipoqk/editor).
2. Paste the contents of `supabase/migrations/20261031000001_initial_schema.sql`.
3. Click **Run**.

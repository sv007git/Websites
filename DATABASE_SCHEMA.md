# WEBSITES — Consolidated Supabase Database Architecture & Schema Specification

## 1. Executive Summary

The **WEBSITES** platform operates on a single, shared Supabase PostgreSQL backend instance hosting all 12 unified web applications. This document provides the complete schema specification, relational models, Row-Level Security (RLS) policies, database triggers, and storage bucket definitions located in `/supabase/migrations/`.

---

## 2. Migration Manifest

The database schema is structured into modular migration files:

| Migration File | Description | Scope / Applications |
|---|---|---|
| [`001_core_platform_schema.sql`](file:///C:/Users/HARISH%20VYAS/Project/Websites/supabase/migrations/001_core_platform_schema.sql) | Shared user profiles, preferences, website directory, activity logging, favorites, notifications | Global Platform, All 12 Websites |
| [`002_chat_couple_schema.sql`](file:///C:/Users/HARISH%20VYAS/Project/Websites/supabase/migrations/002_chat_couple_schema.sql) | Private couple spaces, end-to-end encrypted messaging, cycle tracking, watch party sync | `Chat` ("Just You & Me") |
| [`003_erp_enterprise_schema.sql`](file:///C:/Users/HARISH%20VYAS/Project/Websites/supabase/migrations/003_erp_enterprise_schema.sql) | Multi-tenant ERP: CRM, Deals workstation, Sales, Purchasing, Inventory, Support, HRM, General Ledger | `ERP` (Enterprise Suite) |
| [`004_invitedecide_events_schema.sql`](file:///C:/Users/HARISH%20VYAS/Project/Websites/supabase/migrations/004_invitedecide_events_schema.sql) | Royal invitation SaaS: Guest lists, RSVP tokens, catering buffers, 2D table seating, check-in audit | `InviteDecide` |
| [`005_auxiliary_apps_schema.sql`](file:///C:/Users/HARISH%20VYAS/Project/Websites/supabase/migrations/005_auxiliary_apps_schema.sql) | Video watchlists, recipe notes/scaling, medical consultation logs, code snippets, visual site projects | `ShortsHub`, `CookFood`, `Doctor`, `WebBuilder`, `IDE`, `Pujas` |
| [`006_seed_website_registry.sql`](file:///C:/Users/HARISH%20VYAS/Project/Websites/supabase/migrations/006_seed_website_registry.sql) | Pre-populated canonical registry rows for all 12 modules with categorization and route mapping | Platform Registry & Navigation |

---

## 3. Shared Platform Core Tables

### 3.1 `profiles`
Extends `auth.users` with user display metadata and role designations.
```sql
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE,
  full_name TEXT,
  username TEXT UNIQUE,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('guest', 'user', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

### 3.2 `user_preferences`
Stores user-level theme customization, color palettes, font scaling, and audio synthesis settings.
```sql
CREATE TABLE public.user_preferences (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  theme_mode TEXT NOT NULL DEFAULT 'black' CHECK (theme_mode IN ('black', 'white', 'rose', 'blue', 'purple', 'green', 'teal', 'orange', 'indigo')),
  audio_effects_enabled BOOLEAN NOT NULL DEFAULT true,
  audio_volume NUMERIC(3, 2) NOT NULL DEFAULT 0.70,
  language_preference TEXT NOT NULL DEFAULT 'en',
  desktop_layout_mode TEXT NOT NULL DEFAULT 'grid',
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

### 3.3 `websites` (Platform Registry)
Dynamic database registry for all platforms and apps, enabling real-time feature flags and catalog additions.
```sql
CREATE TABLE public.websites (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  route_path TEXT NOT NULL,
  category TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  thumbnail_url TEXT,
  badge TEXT,
  sort_order INT NOT NULL DEFAULT 100,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

### 3.4 `user_favorites`
User-pinned quick-launch favorites.
```sql
CREATE TABLE public.user_favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  website_id TEXT NOT NULL REFERENCES public.websites(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  UNIQUE(user_id, website_id)
);
```

### 3.5 `user_activity`
Audit trail of module access and operational events across the 12 applications.
```sql
CREATE TABLE public.user_activity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  website_id TEXT NOT NULL REFERENCES public.websites(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

---

## 4. Module-Specific Table Schemas

### 4.1 Chat ("Just You & Me")
- `chat_couples`: Pairwise relationship space linking exactly two user accounts.
- `chat_messages`: End-to-end encrypted or direct messages with read receipt timestamps.
- `chat_cycle_entries`: Private menstrual and wellness cycle tracking for intimate partners.
- `chat_sync_sessions`: Shared video watching sync state (timestamp, play/pause, media URL).

### 4.2 Enterprise ERP Suite
- `erp_companies`: Multi-tenant boundary entity.
- `erp_contacts` & `erp_accounts`: Full CRM customer and company directory.
- `erp_deals`: Deal pipeline workstation supporting dynamic stage changes (`prospecting`, `qualification`, `proposal`, `negotiation`, `closed_won`, `closed_lost`).
- `erp_purchase_orders` & `erp_sales_orders`: Transactional commercial documents.
- `erp_inventory_items`: Stock tracking with SKU, reorder points, and warehouse levels.
- `erp_employees`: HRM employee roster, department classifications, and roles.
- `erp_tickets`: Customer support ticketing system with priority escalation.
- `erp_general_ledger`: Double-entry accounting transaction records.

### 4.3 InviteDecide Royal Event Platform
- `id_events`: Event specifications, bride/groom/host identities, date/time, venue coordinates.
- `id_guests`: Guest registry with phone numbers, WhatsApp distribution flags, dietary preferences, and VIP designations.
- `id_rsvps`: Public and authenticated RSVP responses keyed by secure cryptographic tokens (`invite_token`).
- `id_catering_metrics`: Real-time calculation of confirmed headcount, adult/child counts, plus adjustable safety buffer percentages.
- `id_tables`: 2D seating chart tables with seating capacity and assigned guest IDs.

### 4.4 Auxiliary Applications
- `aux_shortshub_watchlists`: User saved video collections, YouTube Short IDs, notes, and tags.
- `aux_cookfood_bookmarks`: Favorited recipes, adjusted serving sizes, and custom cooking timer logs.
- `aux_doctor_logs`: Personal symptom lookups, selected holistic remedies, and health journal entries.
- `aux_webbuilder_projects`: Saved visual site configurations, block JSON structures, and custom CSS.
- `aux_ide_workspaces`: Antigravity IDE saved code files, virtual filesystems, and execution preferences.

---

## 5. Security & Row-Level Security (RLS) Policies

All tables have Row-Level Security (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY`) activated.

### 5.1 Public vs Authenticated Isolation
1. **Public Reading:**
   - `websites`: Readable by anonymous (`anon`) and authenticated (`authenticated`) roles.
   - `id_rsvps`: Accessible publicly only when presenting a matching `invite_token`.
2. **User Private Isolation:**
   - `profiles`, `user_preferences`, `user_favorites`, `user_activity`: Users may only select, insert, update, or delete records where `user_id = auth.uid()`.
3. **Couple Isolation (`Chat`):**
   - Access to `chat_messages` requires `auth.uid() = partner1_id OR auth.uid() = partner2_id`.
4. **Tenant Isolation (`ERP`):**
   - Records require `company_id IN (SELECT company_id FROM erp_members WHERE user_id = auth.uid())`.

---

## 6. Storage Buckets

The platform defines 4 shared Supabase Storage buckets:

1. `avatars`: Publicly readable bucket for user profile pictures and company logos.
2. `chat-media`: Private authenticated bucket for voice notes, shared photos, and video messages.
3. `event-invitations`: Publicly readable bucket for digital RSVP cards, venue maps, and QR codes.
4. `webbuilder-exports`: Authenticated bucket for generated project `.zip` archives.

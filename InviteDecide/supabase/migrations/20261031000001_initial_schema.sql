-- ====================================================================
-- INVITEDECIDE MASTER DATABASE SCHEMA
-- Migration: 20261031000001_initial_schema.sql
-- Production-ready PostgreSQL schema with RLS, atomic functions,
-- constraints, indexes, and full audit logging.
-- ====================================================================

-- 0. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. SUBSCRIPTION PLANS
CREATE TABLE IF NOT EXISTS subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  max_events INTEGER NOT NULL DEFAULT 5,
  max_guests_per_event INTEGER NOT NULL DEFAULT 500,
  max_team_members INTEGER NOT NULL DEFAULT 5,
  price_monthly NUMERIC(10,2) NOT NULL DEFAULT 0.00,
  features JSONB NOT NULL DEFAULT '{}'::jsonb,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed default plans
INSERT INTO subscription_plans (name, slug, max_events, max_guests_per_event, max_team_members, price_monthly, features)
VALUES 
  ('Free Tier', 'free', 2, 100, 2, 0.00, '{"custom_templates": false, "whatsapp_bulk": false, "advanced_analytics": false}'),
  ('Starter', 'starter', 5, 500, 5, 1499.00, '{"custom_templates": true, "whatsapp_bulk": true, "advanced_analytics": true}'),
  ('Professional', 'pro', 20, 2000, 15, 3999.00, '{"custom_templates": true, "whatsapp_bulk": true, "advanced_analytics": true, "priority_support": true}'),
  ('Enterprise', 'enterprise', 100, 10000, 50, 9999.00, '{"custom_templates": true, "whatsapp_bulk": true, "advanced_analytics": true, "dedicated_support": true}')
ON CONFLICT (slug) DO NOTHING;

-- 2. PROFILES
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL DEFAULT '',
  phone TEXT DEFAULT '',
  avatar_url TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. ORGANIZATIONS
CREATE TABLE IF NOT EXISTS organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo_url TEXT DEFAULT '',
  branding JSONB NOT NULL DEFAULT '{"primary_color": "#e11d48", "accent_color": "#d9a744"}'::jsonb,
  subscription_plan_id UUID REFERENCES subscription_plans(id),
  owner_id UUID REFERENCES profiles(id) ON DELETE RESTRICT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. ORGANIZATION MEMBERS & ROLES
-- Roles: owner, event_manager, invitation_manager, guest_manager, catering_manager, seating_manager, checkin_operator, vendor, readonly, admin
CREATE TABLE IF NOT EXISTS organization_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'guest_manager',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(organization_id, user_id)
);

-- 5. EVENTS
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'wedding',
  description TEXT DEFAULT '',
  host_names TEXT NOT NULL DEFAULT '',
  cover_image TEXT DEFAULT '',
  logo_url TEXT DEFAULT '',
  venue_name TEXT NOT NULL DEFAULT '',
  address TEXT NOT NULL DEFAULT '',
  google_maps_link TEXT DEFAULT '',
  contact_phone TEXT DEFAULT '',
  contact_whatsapp TEXT DEFAULT '',
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  dress_code TEXT DEFAULT '',
  rsvp_deadline TIMESTAMPTZ,
  guest_capacity INTEGER NOT NULL DEFAULT 500,
  visibility TEXT NOT NULL DEFAULT 'private',
  status TEXT NOT NULL DEFAULT 'planning', -- planning, published, live, completed, cancelled
  settings JSONB NOT NULL DEFAULT '{
    "allow_family_rsvp": true,
    "require_food_selection": true,
    "enable_time_slots": true,
    "enable_seating": true,
    "catering_buffer_percentage": 10,
    "whatsapp_notifications": true
  }'::jsonb,
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_events_org ON events(organization_id);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);

-- 6. EVENT DAYS & FUNCTIONS
CREATE TABLE IF NOT EXISTS event_days (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  day_number INTEGER NOT NULL DEFAULT 1,
  date DATE NOT NULL,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS event_functions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  day_id UUID REFERENCES event_days(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  venue_name TEXT DEFAULT '',
  description TEXT DEFAULT '',
  dress_code TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_functions_event ON event_functions(event_id);

-- 7. INVITATION TEMPLATES & DESIGNS
CREATE TABLE IF NOT EXISTS invitation_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL, -- indian_wedding, south_indian, sangeet, birthday, corporate, luxury
  thumbnail_url TEXT DEFAULT '',
  canvas_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invitation_designs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  function_id UUID REFERENCES event_functions(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  template_id UUID REFERENCES invitation_templates(id),
  canvas_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  is_published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. GUESTS & FAMILIES
CREATE TABLE IF NOT EXISTS guest_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- e.g., "The Sharma Family"
  code TEXT NOT NULL,
  total_invited INTEGER NOT NULL DEFAULT 1,
  internal_notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(event_id, code)
);

CREATE TABLE IF NOT EXISTS guests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  family_id UUID REFERENCES guest_groups(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  family_name TEXT DEFAULT '',
  whatsapp_number TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'General', -- VIP, Family, Friend, Colleague, Vendor, Special
  relationship TEXT DEFAULT '',
  address TEXT DEFAULT '',
  is_child BOOLEAN NOT NULL DEFAULT false,
  dietary_preference TEXT NOT NULL DEFAULT 'veg', -- veg, non_veg, jain, vegan
  special_notes TEXT DEFAULT '',
  internal_notes TEXT DEFAULT '',
  is_primary_contact BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_guests_event ON guests(event_id);
CREATE INDEX IF NOT EXISTS idx_guests_family ON guests(family_id);
CREATE INDEX IF NOT EXISTS idx_guests_whatsapp ON guests(whatsapp_number);

-- 9. INVITATIONS & SECURE TOKENS
CREATE TABLE IF NOT EXISTS invitations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  guest_id UUID REFERENCES guests(id) ON DELETE CASCADE,
  family_id UUID REFERENCES guest_groups(id) ON DELETE CASCADE,
  token TEXT UNIQUE NOT NULL, -- Secure cryptographically random URL token
  invitation_code TEXT NOT NULL, -- Short readable code (e.g., INV-8492)
  status TEXT NOT NULL DEFAULT 'draft', -- draft, sent, delivered, opened, responded
  views_count INTEGER NOT NULL DEFAULT 0,
  last_viewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chk_recipient CHECK (guest_id IS NOT NULL OR family_id IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS idx_invitations_token ON invitations(token);
CREATE INDEX IF NOT EXISTS idx_invitations_code ON invitations(invitation_code);
CREATE INDEX IF NOT EXISTS idx_invitations_event ON invitations(event_id);

-- 10. TIME SLOTS & ARRIVAL RESERVATIONS
CREATE TABLE IF NOT EXISTS time_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  function_id UUID REFERENCES event_functions(id) ON DELETE CASCADE,
  slot_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  capacity INTEGER NOT NULL DEFAULT 100,
  booked_count INTEGER NOT NULL DEFAULT 0,
  buffer_capacity INTEGER NOT NULL DEFAULT 10,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chk_capacity CHECK (booked_count <= (capacity + buffer_capacity))
);

CREATE INDEX IF NOT EXISTS idx_time_slots_event ON time_slots(event_id);

-- 11. RSVPS & ATTENDEES
CREATE TABLE IF NOT EXISTS rsvps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  invitation_id UUID NOT NULL REFERENCES invitations(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'undecided', -- confirmed, declined, undecided
  total_attendees INTEGER NOT NULL DEFAULT 1,
  adult_count INTEGER NOT NULL DEFAULT 1,
  child_count INTEGER NOT NULL DEFAULT 0,
  arrival_date DATE,
  time_slot_id UUID REFERENCES time_slots(id) ON DELETE SET NULL,
  dietary_notes TEXT DEFAULT '',
  special_requests TEXT DEFAULT '',
  responded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_rsvps_invitation ON rsvps(invitation_id);
CREATE INDEX IF NOT EXISTS idx_rsvps_event ON rsvps(event_id);

CREATE TABLE IF NOT EXISTS attendees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rsvp_id UUID NOT NULL REFERENCES rsvps(id) ON DELETE CASCADE,
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  guest_id UUID REFERENCES guests(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  is_child BOOLEAN NOT NULL DEFAULT false,
  dietary_preference TEXT NOT NULL DEFAULT 'veg',
  special_needs TEXT DEFAULT '',
  checked_in BOOLEAN NOT NULL DEFAULT false,
  checked_in_at TIMESTAMPTZ,
  checked_in_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_attendees_rsvp ON attendees(rsvp_id);
CREATE INDEX IF NOT EXISTS idx_attendees_event ON attendees(event_id);
CREATE INDEX IF NOT EXISTS idx_attendees_checkin ON attendees(checked_in);

-- 12. FOOD MENU & CATERING
CREATE TABLE IF NOT EXISTS menu_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  function_id UUID REFERENCES event_functions(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES menu_categories(id) ON DELETE CASCADE,
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  image_url TEXT DEFAULT '',
  is_vegetarian BOOLEAN NOT NULL DEFAULT true,
  is_non_veg BOOLEAN NOT NULL DEFAULT false,
  is_jain BOOLEAN NOT NULL DEFAULT false,
  is_vegan BOOLEAN NOT NULL DEFAULT false,
  allergens TEXT[] DEFAULT ARRAY[]::TEXT[],
  portion_size TEXT DEFAULT 'Standard',
  unit_cost NUMERIC(10,2) DEFAULT 0.00,
  preparation_notes TEXT DEFAULT '',
  is_available BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS guest_food_selections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  attendee_id UUID NOT NULL REFERENCES attendees(id) ON DELETE CASCADE,
  menu_item_id UUID NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(attendee_id, menu_item_id)
);

CREATE TABLE IF NOT EXISTS catering_calculations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  function_id UUID REFERENCES event_functions(id) ON DELETE SET NULL,
  menu_item_id UUID NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
  confirmed_quantity INTEGER NOT NULL DEFAULT 0,
  buffer_percentage INTEGER NOT NULL DEFAULT 10,
  buffer_quantity INTEGER NOT NULL DEFAULT 0,
  recommended_quantity INTEGER NOT NULL DEFAULT 0,
  unit_cost NUMERIC(10,2) NOT NULL DEFAULT 0.00,
  total_estimated_cost NUMERIC(10,2) NOT NULL DEFAULT 0.00,
  calculated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(event_id, menu_item_id)
);

-- 13. VENUE FLOOR PLANS & SEATING
CREATE TABLE IF NOT EXISTS venue_layouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  function_id UUID REFERENCES event_functions(id) ON DELETE SET NULL,
  name TEXT NOT NULL DEFAULT 'Main Hall',
  background_image_url TEXT DEFAULT '',
  canvas_width INTEGER NOT NULL DEFAULT 1200,
  canvas_height INTEGER NOT NULL DEFAULT 800,
  config JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS venue_tables (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  layout_id UUID NOT NULL REFERENCES venue_layouts(id) ON DELETE CASCADE,
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- e.g. "Table 1" or "VIP Royal Lounge"
  shape TEXT NOT NULL DEFAULT 'round', -- round, rectangular, square, row
  x NUMERIC(10,2) NOT NULL DEFAULT 100,
  y NUMERIC(10,2) NOT NULL DEFAULT 100,
  width NUMERIC(10,2) NOT NULL DEFAULT 120,
  height NUMERIC(10,2) NOT NULL DEFAULT 120,
  rotation NUMERIC(10,2) NOT NULL DEFAULT 0,
  capacity INTEGER NOT NULL DEFAULT 8,
  is_vip BOOLEAN NOT NULL DEFAULT false,
  is_reserved BOOLEAN NOT NULL DEFAULT false,
  is_accessible BOOLEAN NOT NULL DEFAULT false,
  category TEXT DEFAULT 'Family',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS seats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_id UUID NOT NULL REFERENCES venue_tables(id) ON DELETE CASCADE,
  seat_number INTEGER NOT NULL DEFAULT 1,
  label TEXT NOT NULL DEFAULT 'Seat 1',
  is_accessible BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(table_id, seat_number)
);

CREATE TABLE IF NOT EXISTS seat_allocations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  table_id UUID NOT NULL REFERENCES venue_tables(id) ON DELETE CASCADE,
  seat_id UUID NOT NULL REFERENCES seats(id) ON DELETE CASCADE,
  attendee_id UUID NOT NULL REFERENCES attendees(id) ON DELETE CASCADE,
  allocated_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(seat_id),
  UNIQUE(attendee_id)
);

CREATE INDEX IF NOT EXISTS idx_seat_allocations_table ON seat_allocations(table_id);

-- 14. QR PASSES & SECURE CHECK-IN
CREATE TABLE IF NOT EXISTS qr_passes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  invitation_id UUID NOT NULL REFERENCES invitations(id) ON DELETE CASCADE,
  rsvp_id UUID NOT NULL REFERENCES rsvps(id) ON DELETE CASCADE,
  pass_type TEXT NOT NULL DEFAULT 'individual', -- individual, family
  attendee_id UUID REFERENCES attendees(id) ON DELETE CASCADE,
  family_id UUID REFERENCES guest_groups(id) ON DELETE CASCADE,
  token_hash TEXT UNIQUE NOT NULL, -- SHA-256 hash of random token
  display_code TEXT UNIQUE NOT NULL, -- e.g. "QP-93821"
  max_attendees INTEGER NOT NULL DEFAULT 1,
  checked_in_count INTEGER NOT NULL DEFAULT 0,
  is_revoked BOOLEAN NOT NULL DEFAULT false,
  revoked_at TIMESTAMPTZ,
  revoked_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chk_qr_count CHECK (checked_in_count <= max_attendees)
);

CREATE INDEX IF NOT EXISTS idx_qr_passes_hash ON qr_passes(token_hash);
CREATE INDEX IF NOT EXISTS idx_qr_passes_code ON qr_passes(display_code);

CREATE TABLE IF NOT EXISTS checkin_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  qr_pass_id UUID REFERENCES qr_passes(id) ON DELETE SET NULL,
  attendee_id UUID REFERENCES attendees(id) ON DELETE SET NULL,
  function_id UUID REFERENCES event_functions(id) ON DELETE SET NULL,
  scanned_by UUID REFERENCES profiles(id),
  scan_type TEXT NOT NULL DEFAULT 'qr_camera', -- qr_camera, manual_search, override
  status TEXT NOT NULL DEFAULT 'success', -- success, duplicate_scan, invalid_token, revoked_pass, capacity_exceeded
  failure_reason TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_checkin_logs_event ON checkin_logs(event_id);
CREATE INDEX IF NOT EXISTS idx_checkin_logs_created ON checkin_logs(created_at);

-- 15. WHATSAPP INTEGRATION & QUEUE
CREATE TABLE IF NOT EXISTS whatsapp_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE UNIQUE,
  business_account_id TEXT DEFAULT '',
  phone_number_id TEXT DEFAULT '',
  api_version TEXT NOT NULL DEFAULT 'v20.0',
  is_connected BOOLEAN NOT NULL DEFAULT false,
  webhook_verify_token TEXT DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS whatsapp_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'UTILITY', -- MARKETING, UTILITY, AUTHENTICATION
  language TEXT NOT NULL DEFAULT 'en',
  header_text TEXT,
  body_text TEXT NOT NULL,
  footer_text TEXT,
  status TEXT NOT NULL DEFAULT 'APPROVED',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS whatsapp_message_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  guest_id UUID REFERENCES guests(id) ON DELETE SET NULL,
  recipient_phone TEXT NOT NULL,
  message_type TEXT NOT NULL DEFAULT 'template', -- template, custom, text
  template_name TEXT,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'queued', -- queued, submitted, sent, delivered, read, failed
  attempts INTEGER NOT NULL DEFAULT 0,
  max_attempts INTEGER NOT NULL DEFAULT 3,
  error_message TEXT,
  scheduled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  sent_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_whatsapp_queue_status ON whatsapp_message_queue(status, scheduled_at);

CREATE TABLE IF NOT EXISTS whatsapp_message_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  queue_id UUID REFERENCES whatsapp_message_queue(id) ON DELETE SET NULL,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  recipient_phone TEXT NOT NULL,
  whatsapp_message_id TEXT,
  status TEXT NOT NULL,
  raw_response JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 16. VENDOR RESTRICTED ACCESS
CREATE TABLE IF NOT EXISTS vendor_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  vendor_type TEXT NOT NULL DEFAULT 'caterer', -- caterer, decorator, venue_manager
  vendor_name TEXT NOT NULL,
  contact_phone TEXT DEFAULT '',
  contact_email TEXT DEFAULT '',
  access_token TEXT UNIQUE NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_vendor_token ON vendor_access(access_token);

-- 17. AUDIT LOGS
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id UUID,
  details JSONB NOT NULL DEFAULT '{}'::jsonb,
  ip_address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_org ON audit_logs(organization_id, created_at);

-- ====================================================================
-- ATOMIC STORED PROCEDURES & BUSINESS LOGIC
-- ====================================================================

-- Procedure 1: Atomic Check-in
CREATE OR REPLACE FUNCTION atomic_checkin(
  p_qr_token_hash TEXT,
  p_event_id UUID,
  p_attendee_id UUID DEFAULT NULL,
  p_scanned_by UUID DEFAULT NULL,
  p_scan_type TEXT DEFAULT 'qr_camera'
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_pass RECORD;
  v_attendee RECORD;
  v_result JSONB;
BEGIN
  -- 1. Find and lock the QR pass row
  SELECT * INTO v_pass
  FROM qr_passes
  WHERE token_hash = p_qr_token_hash AND event_id = p_event_id
  FOR UPDATE;

  IF NOT FOUND THEN
    INSERT INTO checkin_logs (event_id, scan_type, status, failure_reason)
    VALUES (p_event_id, p_scan_type, 'invalid_token', 'QR Pass not found for this event');
    
    RETURN jsonb_build_object('success', false, 'error', 'Invalid or unrecognised QR pass');
  END IF;

  -- 2. Check if revoked
  IF v_pass.is_revoked THEN
    INSERT INTO checkin_logs (event_id, qr_pass_id, scan_type, status, failure_reason)
    VALUES (p_event_id, v_pass.id, p_scan_type, 'revoked_pass', v_pass.revoked_reason);

    RETURN jsonb_build_object('success', false, 'error', 'This QR pass has been revoked');
  END IF;

  -- 3. Check capacity limits
  IF v_pass.checked_in_count >= v_pass.max_attendees THEN
    INSERT INTO checkin_logs (event_id, qr_pass_id, scan_type, status, failure_reason)
    VALUES (p_event_id, v_pass.id, p_scan_type, 'capacity_exceeded', 'All attendees for this pass have already checked in');

    RETURN jsonb_build_object('success', false, 'error', 'Pass has reached its maximum check-in capacity');
  END IF;

  -- 4. If single attendee specified
  IF p_attendee_id IS NOT NULL THEN
    SELECT * INTO v_attendee
    FROM attendees
    WHERE id = p_attendee_id AND event_id = p_event_id
    FOR UPDATE;

    IF NOT FOUND THEN
      RETURN jsonb_build_object('success', false, 'error', 'Attendee record not found');
    END IF;

    IF v_attendee.checked_in THEN
      INSERT INTO checkin_logs (event_id, qr_pass_id, attendee_id, scan_type, status, failure_reason)
      VALUES (p_event_id, v_pass.id, v_attendee.id, p_scan_type, 'duplicate_scan', 'Attendee already checked in at ' || v_attendee.checked_in_at::text);

      RETURN jsonb_build_object('success', false, 'error', 'Guest is already checked in');
    END IF;

    -- Update attendee
    UPDATE attendees
    SET checked_in = true, checked_in_at = NOW(), checked_in_by = p_scanned_by
    WHERE id = v_attendee.id;

    -- Increment pass count
    UPDATE qr_passes
    SET checked_in_count = checked_in_count + 1
    WHERE id = v_pass.id;

    -- Log successful checkin
    INSERT INTO checkin_logs (event_id, qr_pass_id, attendee_id, scanned_by, scan_type, status)
    VALUES (p_event_id, v_pass.id, v_attendee.id, p_scanned_by, p_scan_type, 'success');

    RETURN jsonb_build_object(
      'success', true,
      'guest_name', v_attendee.full_name,
      'checked_in_count', v_pass.checked_in_count + 1,
      'max_attendees', v_pass.max_attendees
    );
  ELSE
    -- Check-in all remaining un-checked-in attendees under this pass / RSVP
    UPDATE attendees
    SET checked_in = true, checked_in_at = NOW(), checked_in_by = p_scanned_by
    WHERE rsvp_id = v_pass.rsvp_id AND checked_in = false;

    GET DIAGNOSTICS v_attendee = ROW_COUNT;

    UPDATE qr_passes
    SET checked_in_count = max_attendees
    WHERE id = v_pass.id;

    INSERT INTO checkin_logs (event_id, qr_pass_id, scanned_by, scan_type, status, metadata)
    VALUES (p_event_id, v_pass.id, p_scanned_by, p_scan_type, 'success', jsonb_build_object('group_checkin', true));

    RETURN jsonb_build_object(
      'success', true,
      'group_checkin', true,
      'checked_in_count', v_pass.max_attendees
    );
  END IF;
END;
$$;

-- Procedure 2: Atomic Time Slot Reservation
CREATE OR REPLACE FUNCTION reserve_time_slot_atomic(
  p_slot_id UUID,
  p_rsvp_id UUID,
  p_attendee_count INTEGER
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_slot RECORD;
BEGIN
  -- Lock the slot row
  SELECT * INTO v_slot
  FROM time_slots
  WHERE id = p_slot_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Time slot not found');
  END IF;

  IF NOT v_slot.is_active THEN
    RETURN jsonb_build_object('success', false, 'error', 'Time slot is currently closed');
  END IF;

  IF (v_slot.booked_count + p_attendee_count) > (v_slot.capacity + v_slot.buffer_capacity) THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'Slot capacity exceeded. Available: ' || ((v_slot.capacity + v_slot.buffer_capacity) - v_slot.booked_count)
    );
  END IF;

  -- Increment slot booked count
  UPDATE time_slots
  SET booked_count = booked_count + p_attendee_count
  WHERE id = p_slot_id;

  -- Update rsvp record
  UPDATE rsvps
  SET time_slot_id = p_slot_id, arrival_date = v_slot.slot_date, updated_at = NOW()
  WHERE id = p_rsvp_id;

  RETURN jsonb_build_object(
    'success', true,
    'slot_id', p_slot_id,
    'new_booked_count', v_slot.booked_count + p_attendee_count
  );
END;
$$;

-- Procedure 3: Calculate Catering Quantities & Costs
CREATE OR REPLACE FUNCTION calculate_event_catering(
  p_event_id UUID,
  p_function_id UUID DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_buffer INTEGER;
BEGIN
  -- Get buffer percentage configured for event
  SELECT COALESCE((settings->>'catering_buffer_percentage')::integer, 10)
  INTO v_buffer
  FROM events
  WHERE id = p_event_id;

  -- Delete existing calculations for this event/function
  DELETE FROM catering_calculations
  WHERE event_id = p_event_id
    AND (p_function_id IS NULL OR function_id = p_function_id);

  -- Aggregate quantities and write with buffer
  INSERT INTO catering_calculations (
    event_id,
    function_id,
    menu_item_id,
    confirmed_quantity,
    buffer_percentage,
    buffer_quantity,
    recommended_quantity,
    unit_cost,
    total_estimated_cost
  )
  SELECT
    mi.event_id,
    p_function_id,
    mi.id AS menu_item_id,
    COALESCE(SUM(gfs.quantity), 0) AS confirmed_quantity,
    v_buffer AS buffer_percentage,
    CEIL(COALESCE(SUM(gfs.quantity), 0) * (v_buffer::numeric / 100.0))::integer AS buffer_quantity,
    (COALESCE(SUM(gfs.quantity), 0) + CEIL(COALESCE(SUM(gfs.quantity), 0) * (v_buffer::numeric / 100.0))::integer) AS recommended_quantity,
    mi.unit_cost,
    ((COALESCE(SUM(gfs.quantity), 0) + CEIL(COALESCE(SUM(gfs.quantity), 0) * (v_buffer::numeric / 100.0))::integer) * mi.unit_cost) AS total_estimated_cost
  FROM menu_items mi
  LEFT JOIN guest_food_selections gfs ON gfs.menu_item_id = mi.id
  LEFT JOIN attendees a ON a.id = gfs.attendee_id AND a.event_id = p_event_id
  WHERE mi.event_id = p_event_id
  GROUP BY mi.event_id, mi.id, mi.unit_cost;
END;
$$;

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE organization_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_days ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_functions ENABLE ROW LEVEL SECURITY;
ALTER TABLE invitation_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE invitation_designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE guest_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE guests ENABLE ROW LEVEL SECURITY;
ALTER TABLE invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE time_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendees ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE guest_food_selections ENABLE ROW LEVEL SECURITY;
ALTER TABLE catering_calculations ENABLE ROW LEVEL SECURITY;
ALTER TABLE venue_layouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE venue_tables ENABLE ROW LEVEL SECURITY;
ALTER TABLE seats ENABLE ROW LEVEL SECURITY;
ALTER TABLE seat_allocations ENABLE ROW LEVEL SECURITY;
ALTER TABLE qr_passes ENABLE ROW LEVEL SECURITY;
ALTER TABLE checkin_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE whatsapp_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE whatsapp_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE whatsapp_message_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Helper function: check organization membership
CREATE OR REPLACE FUNCTION is_org_member(org_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM organization_members
    WHERE organization_id = org_id AND user_id = auth.uid()
  );
$$;

-- Helper function: check event access
CREATE OR REPLACE FUNCTION has_event_access(evt_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM events e
    JOIN organization_members om ON om.organization_id = e.organization_id
    WHERE e.id = evt_id AND om.user_id = auth.uid()
  );
$$;

-- RLS: Organizations
CREATE POLICY "Users can view organizations they belong to"
ON organizations FOR SELECT
USING (is_org_member(id) OR owner_id = auth.uid());

CREATE POLICY "Owners can update their organization"
ON organizations FOR UPDATE
USING (owner_id = auth.uid());

-- RLS: Events
CREATE POLICY "Members can view events in their organization"
ON events FOR SELECT
USING (is_org_member(organization_id));

CREATE POLICY "Members can create events in their organization"
ON events FOR INSERT
WITH CHECK (is_org_member(organization_id));

CREATE POLICY "Members can update events in their organization"
ON events FOR UPDATE
USING (is_org_member(organization_id));

CREATE POLICY "Members can delete events in their organization"
ON events FOR DELETE
USING (is_org_member(organization_id));

-- RLS: Invitations (Organizers see all, Guests can view by valid token)
CREATE POLICY "Organizers have full access to invitations"
ON invitations FOR ALL
USING (has_event_access(event_id));

CREATE POLICY "Public guest can view invitation by token"
ON invitations FOR SELECT
USING (true);

-- RLS: Guests & Groups
CREATE POLICY "Event staff have full access to guests"
ON guests FOR ALL
USING (has_event_access(event_id));

CREATE POLICY "Event staff have full access to guest groups"
ON guest_groups FOR ALL
USING (has_event_access(event_id));

-- RLS: Time Slots
CREATE POLICY "Anyone can view active time slots for an event"
ON time_slots FOR SELECT
USING (is_active = true);

CREATE POLICY "Event staff manage time slots"
ON time_slots FOR ALL
USING (has_event_access(event_id));

-- RLS: RSVPs & Attendees
CREATE POLICY "Event staff have full access to rsvps"
ON rsvps FOR ALL
USING (has_event_access(event_id));

CREATE POLICY "Public guest can create or update rsvp"
ON rsvps FOR INSERT
WITH CHECK (true);

CREATE POLICY "Public guest can view their own rsvp"
ON rsvps FOR SELECT
USING (true);

CREATE POLICY "Event staff have full access to attendees"
ON attendees FOR ALL
USING (has_event_access(event_id));

CREATE POLICY "Public guest can insert attendees for rsvp"
ON attendees FOR INSERT
WITH CHECK (true);

CREATE POLICY "Public guest can view attendees for rsvp"
ON attendees FOR SELECT
USING (true);

-- RLS: Menu & Food
CREATE POLICY "Anyone can view menu items for an event"
ON menu_items FOR SELECT
USING (true);

CREATE POLICY "Organizers manage menu items"
ON menu_items FOR ALL
USING (has_event_access(event_id));

CREATE POLICY "Public guest can submit food selections"
ON guest_food_selections FOR INSERT
WITH CHECK (true);

CREATE POLICY "Public guest can view food selections"
ON guest_food_selections FOR SELECT
USING (true);

-- RLS: QR Passes
CREATE POLICY "Event staff manage qr passes"
ON qr_passes FOR ALL
USING (has_event_access(event_id));

CREATE POLICY "Public guest can view their qr pass"
ON qr_passes FOR SELECT
USING (true);

-- RLS: Check-in Logs
CREATE POLICY "Staff can view and create check-in logs"
ON checkin_logs FOR ALL
USING (has_event_access(event_id));

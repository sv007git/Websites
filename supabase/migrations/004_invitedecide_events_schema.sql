-- ================================================================================
-- MIGRATION 004: INVITEDECIDE EVENT PARTICIPATION & PLANNING SCHEMA
-- ================================================================================

-- Events
CREATE TABLE IF NOT EXISTS public.event_workspaces (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organizer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    category TEXT DEFAULT 'Wedding',
    host_names TEXT,
    venue_name TEXT,
    address TEXT,
    start_date DATE,
    end_date DATE,
    guest_capacity INT DEFAULT 350,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Event Ceremonies / Sub-Functions
CREATE TABLE IF NOT EXISTS public.event_functions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID NOT NULL REFERENCES public.event_workspaces(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    function_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    venue_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Guest Groups (Households/Families)
CREATE TABLE IF NOT EXISTS public.event_guest_groups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID NOT NULL REFERENCES public.event_workspaces(id) ON DELETE CASCADE,
    family_name TEXT NOT NULL,
    total_invited INT DEFAULT 2,
    code TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Individual Guests
CREATE TABLE IF NOT EXISTS public.event_guests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_id UUID NOT NULL REFERENCES public.event_guest_groups(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    whatsapp_number TEXT,
    is_primary_contact BOOLEAN DEFAULT FALSE,
    is_child BOOLEAN DEFAULT FALSE,
    dietary_preference TEXT DEFAULT 'vegetarian',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Invitations & Tokens
CREATE TABLE IF NOT EXISTS public.event_invitations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID NOT NULL REFERENCES public.event_workspaces(id) ON DELETE CASCADE,
    group_id UUID NOT NULL REFERENCES public.event_guest_groups(id) ON DELETE CASCADE,
    token TEXT NOT NULL UNIQUE,
    status TEXT DEFAULT 'sent' CHECK (status IN ('draft', 'sent', 'opened', 'confirmed', 'declined')),
    views_count INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RSVPs
CREATE TABLE IF NOT EXISTS public.event_rsvps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invitation_id UUID NOT NULL REFERENCES public.event_invitations(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'declined', 'tentative')),
    total_attendees INT DEFAULT 1,
    arrival_time_slot TEXT,
    dietary_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Catering Menu Items & Buffers
CREATE TABLE IF NOT EXISTS public.event_menu_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID NOT NULL REFERENCES public.event_workspaces(id) ON DELETE CASCADE,
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    is_veg BOOLEAN DEFAULT TRUE,
    is_jain BOOLEAN DEFAULT FALSE,
    portion_count INT DEFAULT 0,
    buffer_percent INT DEFAULT 10,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Venue Seating Tables
CREATE TABLE IF NOT EXISTS public.event_venue_tables (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID NOT NULL REFERENCES public.event_workspaces(id) ON DELETE CASCADE,
    table_number TEXT NOT NULL,
    table_name TEXT,
    capacity INT DEFAULT 8,
    shape TEXT DEFAULT 'round' CHECK (shape IN ('round', 'rectangular')),
    position_x INT DEFAULT 100,
    position_y INT DEFAULT 100,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gate QR Passes
CREATE TABLE IF NOT EXISTS public.event_qr_passes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invitation_id UUID NOT NULL REFERENCES public.event_invitations(id) ON DELETE CASCADE,
    display_code TEXT NOT NULL UNIQUE,
    max_attendees INT DEFAULT 1,
    checked_in_count INT DEFAULT 0,
    is_revoked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gate Check-in Logs
CREATE TABLE IF NOT EXISTS public.event_checkin_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pass_id UUID NOT NULL REFERENCES public.event_qr_passes(id) ON DELETE CASCADE,
    scan_timestamp TIMESTAMPTZ DEFAULT NOW(),
    operator_name TEXT DEFAULT 'Security Gate 1',
    status TEXT DEFAULT 'success' CHECK (status IN ('success', 'duplicate_rejected', 'revoked_rejected'))
);

-- RLS
ALTER TABLE public.event_workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_functions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_guest_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_guests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_venue_tables ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_qr_passes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_checkin_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public demo access to event_workspaces" ON public.event_workspaces FOR ALL USING (true);
CREATE POLICY "Allow public demo access to event_functions" ON public.event_functions FOR ALL USING (true);
CREATE POLICY "Allow public demo access to event_guest_groups" ON public.event_guest_groups FOR ALL USING (true);
CREATE POLICY "Allow public demo access to event_guests" ON public.event_guests FOR ALL USING (true);
CREATE POLICY "Allow public access to invitations via token" ON public.event_invitations FOR ALL USING (true);
CREATE POLICY "Allow public access to rsvps" ON public.event_rsvps FOR ALL USING (true);
CREATE POLICY "Allow public demo access to menu items" ON public.event_menu_items FOR ALL USING (true);
CREATE POLICY "Allow public demo access to venue tables" ON public.event_venue_tables FOR ALL USING (true);
CREATE POLICY "Allow public access to qr passes" ON public.event_qr_passes FOR ALL USING (true);
CREATE POLICY "Allow public access to checkin logs" ON public.event_checkin_logs FOR ALL USING (true);

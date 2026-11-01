-- ================================================================================
-- MIGRATION 002: CHAT (JUST YOU & ME) COUPLE SCHEMA
-- ================================================================================

-- Couple Spaces
CREATE TABLE IF NOT EXISTS public.couple_spaces (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL DEFAULT 'Just You & Me',
    anniversary_date DATE,
    welcome_message TEXT DEFAULT 'Forever & always 💗',
    theme_preference TEXT DEFAULT 'blush',
    metadata JSONB DEFAULT '{}'::jsonb,
    created_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Couple Members (strictly <= 2 members per space)
CREATE TABLE IF NOT EXISTS public.couple_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    couple_space_id UUID NOT NULL REFERENCES public.couple_spaces(id) ON DELETE CASCADE,
    user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'partner',
    joined_at TIMESTAMPTZ DEFAULT NOW()
);

-- Couple Invitations
CREATE TABLE IF NOT EXISTS public.couple_invitations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    couple_space_id UUID REFERENCES public.couple_spaces(id) ON DELETE CASCADE,
    code VARCHAR(32) NOT NULL UNIQUE,
    created_by UUID REFERENCES auth.users(id),
    expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days'),
    used_at TIMESTAMPTZ,
    used_by UUID
);

-- Messages
CREATE TABLE IF NOT EXISTS public.couple_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    couple_space_id UUID NOT NULL REFERENCES public.couple_spaces(id) ON DELETE CASCADE,
    sender_id UUID REFERENCES auth.users(id),
    content TEXT,
    message_type TEXT DEFAULT 'text' CHECK (message_type IN ('text', 'image', 'video', 'audio', 'gif', 'sticker')),
    media_url TEXT,
    media_metadata JSONB DEFAULT '{}'::jsonb,
    reply_to_id UUID REFERENCES public.couple_messages(id) ON DELETE SET NULL,
    is_edited BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Memories Gallery
CREATE TABLE IF NOT EXISTS public.couple_memories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    couple_space_id UUID NOT NULL REFERENCES public.couple_spaces(id) ON DELETE CASCADE,
    created_by UUID REFERENCES auth.users(id),
    title TEXT NOT NULL,
    description TEXT,
    media_url TEXT NOT NULL,
    memory_date DATE DEFAULT CURRENT_DATE,
    is_favorite BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Love Notes
CREATE TABLE IF NOT EXISTS public.couple_love_notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    couple_space_id UUID NOT NULL REFERENCES public.couple_spaces(id) ON DELETE CASCADE,
    author_id UUID REFERENCES auth.users(id),
    title TEXT,
    content TEXT NOT NULL,
    color TEXT DEFAULT 'rose',
    is_pinned BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Watch Sessions
CREATE TABLE IF NOT EXISTS public.couple_watch_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    couple_space_id UUID UNIQUE REFERENCES public.couple_spaces(id) ON DELETE CASCADE,
    video_url TEXT NOT NULL,
    video_title TEXT DEFAULT 'Movie Night',
    playback_position NUMERIC(10, 3) DEFAULT 0,
    is_playing BOOLEAN DEFAULT FALSE,
    playback_rate NUMERIC(3, 2) DEFAULT 1.0,
    last_updated_by UUID REFERENCES auth.users(id),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Helper: Check if user is a member of a couple space
CREATE OR REPLACE FUNCTION public.is_couple_member(p_user_id UUID, p_space_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.couple_members
        WHERE user_id = p_user_id AND couple_space_id = p_space_id
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger: Strictly limit each couple space to 2 members
CREATE OR REPLACE FUNCTION public.check_couple_space_capacity()
RETURNS TRIGGER AS $$
DECLARE
    member_count INT;
BEGIN
    SELECT COUNT(*) INTO member_count
    FROM public.couple_members
    WHERE couple_space_id = NEW.couple_space_id;

    IF member_count >= 2 THEN
        RAISE EXCEPTION 'This couple space already contains the maximum of 2 partners.';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_check_couple_space_capacity ON public.couple_members;
CREATE TRIGGER tr_check_couple_space_capacity
    BEFORE INSERT ON public.couple_members
    FOR EACH ROW EXECUTE FUNCTION public.check_couple_space_capacity();

-- RLS
ALTER TABLE public.couple_spaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.couple_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.couple_invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.couple_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.couple_memories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.couple_love_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.couple_watch_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Couple members can access their space" ON public.couple_spaces
    FOR ALL USING (public.is_couple_member(auth.uid(), id));

CREATE POLICY "Couple members can access memberships" ON public.couple_members
    FOR ALL USING (public.is_couple_member(auth.uid(), couple_space_id));

CREATE POLICY "Couple members can access messages" ON public.couple_messages
    FOR ALL USING (public.is_couple_member(auth.uid(), couple_space_id));

CREATE POLICY "Couple members can access memories" ON public.couple_memories
    FOR ALL USING (public.is_couple_member(auth.uid(), couple_space_id));

CREATE POLICY "Couple members can access love notes" ON public.couple_love_notes
    FOR ALL USING (public.is_couple_member(auth.uid(), couple_space_id));

CREATE POLICY "Couple members can access watch sessions" ON public.couple_watch_sessions
    FOR ALL USING (public.is_couple_member(auth.uid(), couple_space_id));

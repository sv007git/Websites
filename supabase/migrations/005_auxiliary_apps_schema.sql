-- ================================================================================
-- MIGRATION 005: AUXILIARY APPLICATIONS PERSISTENCE & DATA SCHEMA
-- ================================================================================

-- 1. COOKFOOD: Custom Recipes & Shopping Items
CREATE TABLE IF NOT EXISTS public.cookfood_custom_recipes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    slug TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    servings INT DEFAULT 4,
    prep_time INT DEFAULT 15,
    cook_time INT DEFAULT 30,
    cuisine TEXT DEFAULT 'Indian',
    ingredients JSONB DEFAULT '[]'::jsonb,
    instructions JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.cookfood_shopping_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    recipe_title TEXT,
    item_name TEXT NOT NULL,
    quantity_string TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. DOCTOR: Bookmarked Conditions & Personal Notes
CREATE TABLE IF NOT EXISTS public.doctor_bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    part_id TEXT NOT NULL,
    disease_id TEXT NOT NULL,
    disease_name TEXT NOT NULL,
    personal_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, disease_id)
);

-- 3. SANATANA PUJAS: Sankalpam Family Profiles & Checklists
CREATE TABLE IF NOT EXISTS public.pujas_sankalpam_profiles (
    user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    gotra TEXT,
    nakshatra TEXT,
    devotee_name TEXT,
    spouse_name TEXT,
    city_name TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.pujas_saved_checklists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    puja_id TEXT NOT NULL,
    checked_indices INT[] DEFAULT '{}',
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, puja_id)
);

-- 4. SHORTSHUB: User Favorites & Daily Watchlist
CREATE TABLE IF NOT EXISTS public.shortshub_favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    video_id TEXT NOT NULL,
    title TEXT,
    channel_name TEXT,
    language TEXT,
    category TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, video_id)
);

CREATE TABLE IF NOT EXISTS public.shortshub_watchlist_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    video_id TEXT NOT NULL,
    title TEXT,
    channel_name TEXT,
    language TEXT,
    category TEXT,
    date_viewed DATE DEFAULT CURRENT_DATE,
    view_count INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. NCERT CARTOON ACADEMY (STUDY): Student Progress & Quiz Scores
CREATE TABLE IF NOT EXISTS public.study_student_progress (
    user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    student_name TEXT DEFAULT 'Young Scholar',
    grade_level INT DEFAULT 5,
    completed_story_ids TEXT[] DEFAULT '{}',
    quiz_scores JSONB DEFAULT '{}'::jsonb,
    unlocked_badge_ids TEXT[] DEFAULT '{}',
    total_stars INT DEFAULT 0,
    minutes_studied INT DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. WEBFORGE STUDIO (WEBBUILDER): User Projects
CREATE TABLE IF NOT EXISTS public.webforge_saved_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    project_slug TEXT NOT NULL,
    project_name TEXT NOT NULL,
    project_data JSONB NOT NULL,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. SHAREIT: Meeting Rooms & Logs
CREATE TABLE IF NOT EXISTS public.shareit_meeting_rooms (
    id TEXT PRIMARY KEY,
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    room_name TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_active_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. IDE: User Virtual Files
CREATE TABLE IF NOT EXISTS public.ide_saved_workspaces (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    workspace_name TEXT DEFAULT 'My Workspace',
    files JSONB NOT NULL DEFAULT '[]'::jsonb,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE public.cookfood_custom_recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cookfood_shopping_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctor_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pujas_sankalpam_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pujas_saved_checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shortshub_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shortshub_watchlist_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webforge_saved_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shareit_meeting_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ide_saved_workspaces ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to manage own cookfood recipes" ON public.cookfood_custom_recipes FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Allow users to manage own shopping list" ON public.cookfood_shopping_items FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Allow users to manage own doctor bookmarks" ON public.doctor_bookmarks FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Allow users to manage own sankalpam profile" ON public.pujas_sankalpam_profiles FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Allow users to manage own pujas checklists" ON public.pujas_saved_checklists FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Allow users to manage own shortshub favorites" ON public.shortshub_favorites FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Allow users to manage own shortshub watchlist" ON public.shortshub_watchlist_entries FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Allow users to manage own study progress" ON public.study_student_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Allow users to manage own webforge projects" ON public.webforge_saved_projects FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Allow public access to active shareit rooms" ON public.shareit_meeting_rooms FOR ALL USING (true);
CREATE POLICY "Allow users to manage own ide workspace" ON public.ide_saved_workspaces FOR ALL USING (auth.uid() = user_id);

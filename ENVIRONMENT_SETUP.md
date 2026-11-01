# WEBSITES — Local Environment & Supabase Setup Guide

## 1. System Requirements

To develop, build, or deploy the unified **WEBSITES** platform locally:

- **Node.js:** v18.18.0 or v20.x+ (Recommended: Node 20 LTS or v24.x)
- **Package Manager:** npm v9.x+ or v10.x+
- **Operating System:** Windows 10/11, macOS, or Linux
- **Modern Browser:** Chrome, Edge, Firefox, or Safari with Web Audio API, WebRTC, and ES2022 support

---

## 2. Quickstart Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd "C:\Users\HARISH VYAS\Project\Websites"
   ```

2. Install all root dependencies:
   ```bash
   npm install
   ```

3. Create your local environment configuration file:
   ```bash
   cp .env.example .env
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```
   The platform will be live at `http://localhost:5173/Websites/`.

---

## 3. Environment Variables Configuration

The platform reads credentials via Vite's `import.meta.env` prefix convention:

| Variable | Description | Required in Production | Default / Mock Value |
|---|---|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes (for live cloud data) | `https://mock-supabase.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Supabase public anonymous API key | Yes (for live cloud data) | `mock-anon-key` |
| `VITE_APP_TITLE` | Application platform display title | No | `WEBSITES Super Platform` |
| `VITE_ENABLE_MOCK_FALLBACK` | Allow simulated local mock data when disconnected | No | `true` |

> [!NOTE]
> When `VITE_SUPABASE_URL` or `VITE_SUPABASE_ANON_KEY` are unset or set to mock values, the centralized client [`src/services/supabase/client.ts`](file:///C:/Users/HARISH%20VYAS/Project/Websites/src/services/supabase/client.ts) automatically operates in **Offline Prototyping Mode**. All 12 applications remain fully interactive, using client-side memory and localStorage state.

---

## 4. Supabase Cloud Setup & Migration Deployment

To connect a live PostgreSQL database:

### Step 1: Create a Supabase Project
1. Log into your account at [supabase.com](https://supabase.com).
2. Click **New Project**, choose your preferred region, and set a database password.

### Step 2: Apply Database Migrations
Run the SQL migration scripts in order via the Supabase Dashboard **SQL Editor** or Supabase CLI:

1. `supabase/migrations/001_core_platform_schema.sql` (Core profiles, preferences, website directory)
2. `supabase/migrations/002_chat_couple_schema.sql` (Intimate couple chat, cycle tracking)
3. `supabase/migrations/003_erp_enterprise_schema.sql` (Multi-tenant ERP suite)
4. `supabase/migrations/004_invitedecide_events_schema.sql` (Royal event SaaS, RSVP tokens)
5. `supabase/migrations/005_auxiliary_apps_schema.sql` (Watchlists, recipes, doctor logs, code workspaces)
6. `supabase/migrations/006_seed_website_registry.sql` (Pre-seeded registry of all 12 modules)

### Step 3: Configure Authentication Settings
1. Go to **Authentication > Providers** in the Supabase Dashboard.
2. Enable **Email / Password**.
3. (Optional) Enable **Anonymous Sign-ins** to support guest visitors seamlessly.
4. Under **Authentication > URL Configuration**:
   - Set **Site URL** to `https://sv007git.github.io/Websites/`.
   - Add `http://localhost:5173/Websites/` and `http://localhost:4173/Websites/` to **Additional Redirect URLs**.

### Step 4: Storage Buckets
Verify in **Storage** that the following 4 buckets exist:
- `avatars` (Public)
- `chat-media` (Private)
- `event-invitations` (Public)
- `webbuilder-exports` (Private)

---

## 5. Development Scripts

```bash
# Start local Vite development server
npm run dev

# Compile TypeScript and bundle for production
npm run build

# Preview production build locally on http://localhost:4173/Websites/
npm run preview

# Run automated test suites
npm test
```

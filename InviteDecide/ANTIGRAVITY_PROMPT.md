# INVITEDECIDE — Master Architectural Reference & Agent Context

**File:** `antigravity_prompt.txt` / `ANTIGRAVITY_PROMPT.md`  
**Purpose:** Authoritative project documentation, architecture, schema, state flow, and operational guidelines for Antigravity AI agents and engineers. Allows any fresh agent to immediately understand, develop, test, and extend InviteDecide **without re-analyzing the codebase or wasting tokens**.

---

## 1. Project Overview & Core Product Vision

- **Project Name:** InviteDecide
- **Repository:** [https://github.com/sv007git/InviteDecide](https://github.com/sv007git/InviteDecide)
- **Live Deployment URL:** [https://sv007git.github.io/InviteDecide/](https://sv007git.github.io/InviteDecide/)
- **Supabase Project URL:** [https://oruybhfodbbjpfvipoqk.supabase.co](https://oruybhfodbbjpfvipoqk.supabase.co)
- **Platform Type:** Multi-tenant SaaS Web Application (Desktop, Tablet, Mobile responsive)

### Central Idea
> *"An invitation should become an intelligent event participation and planning system, not merely a digital invitation card."*

### Target Events
Indian Royal Weddings, Engagements, Receptions, Sangeet/Mehendi ceremonies, Milestone Birthdays, Corporate Galas, Anniversaries, and Religious/Housewarming celebrations.

### Key Operational Rules
1. **WhatsApp Only:** Communication is strictly WhatsApp-only (No SMS, No Email).
2. **Account-Free Guests:** Guests NEVER register an account or install any mobile application. Every guest or family accesses their personalized experience via a unique, cryptographic, non-sequential invitation URL: `#/invite/:token`.
3. **Dual-Mode Architecture:**
   - **Interactive Local Mode:** localStorage + instant demo dataset.
   - **Live Supabase Cloud PostgreSQL Mode:** with RLS, auth, and automated bidirectional sync.
4. **Full-Stack Event Management Engine:**
   - Multi-day Ceremony Timelines
   - Visual Drag-and-Drop Digital Invitation Designer
   - Household & Guest Management with CSV Import/Export
   - WhatsApp Dispatch Queue
   - Personalized RSVP with Hourly Arrival Time Slot Capacity Controls
   - Catering Dish Selection & Safety Buffer Portion Calculators
   - 2D Venue Seating Studio with 1-Click Family Auto-Allocation
   - Gate Entry QR Pass Issuance (`QP-...`) & Mobile Camera Check-in Scanner
   - Live Multi-Role Operational Dashboards & CSV/PDF Reporting

---

## 2. Technology Stack & Key Dependencies

- **Frontend:** React 18.3.1, TypeScript 5.6, Vite 5.4.9, HashRouter (`react-router-dom` v6.27.0).
- **Styling & Typography:** Tailwind CSS 3.4.14 with custom luxury color palette (`gold`, `primary`, `rose`).
  - Google Fonts loaded: `Plus Jakarta Sans`, `Cormorant Garamond`, `Playfair Display`, `Cinzel`, `Great Vibes`, `Alex Brush`.
- **State Management & Persistence:** Zustand 5.0.0 (`src/stores/useAppStore.ts`), localStorage (`INVITEDECIDE_PERSISTED_STATE_V1` and `INVITEDECIDE_AUTH_USER_V1`), Supabase Sync layer (`src/services/supabaseSync.ts`).
- **Backend & Database:** Supabase Cloud (`@supabase/supabase-js` v2.45.6) with PostgreSQL, Row Level Security, Supabase Auth.
- **Specialized Engines:**
  - QR Code Generation: `qrcode` (v1.5.4)
  - QR Code Camera Scanner: `html5-qrcode` (v2.3.8)
  - Charts: `recharts` (v2.13.0)
  - Data Import/Export: `xlsx` (v0.18.5) and `papaparse` (v5.4.1)
  - PDF Generation: `jspdf` (v2.5.2) and `html2canvas` (v1.4.1)
  - Form & Validation: `zod` (v3.23.8) and `react-hook-form` (v7.53.0)
- **Testing:** Vitest 2.1.3 + JSDOM 25.0.1 (7 test suites, 21 passing unit tests).

---

## 3. Directory Tree & Architecture

```
InviteDecide/
├── antigravity_prompt.txt          # Quick-reference text documentation for AI agents
├── ANTIGRAVITY_PROMPT.md           # Formatted Markdown reference
├── .github/workflows/deploy.yml   # GitHub Actions CI/CD to GitHub Pages
├── assets/                         # Pre-compiled static assets served on GitHub Pages root
│   ├── app.js                      # Compiled JavaScript bundle
│   └── index.css                   # Compiled Tailwind CSS bundle
├── supabase/migrations/
│   └── 20261031000001_initial_schema.sql  # Master PostgreSQL DDL schema & RLS rules
├── src/
│   ├── types/index.ts              # Master TypeScript interfaces
│   ├── stores/useAppStore.ts       # Central Zustand store (state, actions, persistence)
│   ├── services/
│   │   ├── supabase.ts             # Supabase client & connection tester
│   │   ├── supabaseSync.ts         # Bidirectional DB sync & batch upserts
│   │   ├── demoData.ts             # 500-guest wedding dataset generator
│   │   └── eventGenerator.ts       # 1-click end-to-end event setup generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.tsx       # SaaS shell (Navbar, Sidebar, Modal wrapper)
│   │   │   ├── Navbar.tsx          # Top bar with role dropdown, setup wizard, gate shortcut
│   │   │   ├── Sidebar.tsx         # Left navigation bar with live workspace badge
│   │   │   └── MobileNav.tsx       # Responsive mobile navigation drawer
│   │   ├── events/
│   │   │   └── EventSetupWizardModal.tsx  # 4-step wizard to populate everything
│   │   ├── qr/
│   │   │   ├── QRCodeDisplay.tsx   # Canvas QR code generator
│   │   │   └── QRScannerModal.tsx  # Webcam QR code scanner modal
│   │   └── ui/                     # Badge, Button, Card, Dialog, Input, Tabs
│   ├── pages/
│   │   ├── landing/LandingPage.tsx
│   │   ├── auth/LoginPage.tsx
│   │   ├── dashboard/OverviewPage.tsx
│   │   ├── events/EventsListPage.tsx
│   │   ├── invitations/InvitationDesignerPage.tsx
│   │   ├── guests/GuestListPage.tsx
│   │   ├── whatsapp/WhatsAppManagerPage.tsx
│   │   ├── rsvp/
│   │   │   ├── RSVPManagerPage.tsx
│   │   │   ├── GuestInvitePortalPage.tsx   # Public `#/invite/:token`
│   │   │   └── GuestPassPage.tsx           # Public `#/pass/:token`
│   │   ├── catering/CateringPlannerPage.tsx
│   │   ├── seating/SeatingStudioPage.tsx
│   │   ├── checkin/StaffCheckInPage.tsx
│   │   ├── reports/ReportsPage.tsx
│   │   ├── admin/PlatformAdminPage.tsx
│   │   └── vendor/VendorPortalPage.tsx
│   └── test/                       # 7 Vitest test suites (21 tests)
```

---

## 4. User Roles & Dynamic Dashboard Transformation

InviteDecide supports 10 distinct roles configured in `src/types/index.ts`:

| Role | Title | Primary Focus |
|---|---|---|
| `owner` | 👑 Event Owner | Complete control over ceremonies, budgets, catering, and gate admissions |
| `event_manager` | 📋 Event Planner | Operations, vendors, invitation schedules, and on-ground logistics |
| `checkin_operator` | 🎟️ Gate Staff | Webcam QR scanner, manual token lookup, and live admission counters |
| `vendor` | 🍽️ Caterer Vendor | Live portion requirements, buffer planning, and kitchen prep schedule |
| `catering_manager` | 👨‍🍳 Food Lead | Menu dish curation, dietary portions (Veg, Non-Veg, Jain), unit costs |
| `seating_manager` | 🪑 Seating Manager | Table utilization, unseated attendees, and 1-click auto-allocation |
| `guest_manager` | 👥 Guest Manager | Household groups, WhatsApp delivery funnel, and RSVP conversion rates |
| `invitation_manager` | 💌 Invites Lead | Visual card design, typography, and WhatsApp dispatch links |
| `admin` | 🛡️ Platform Admin | SaaS subscriptions, Supabase PostgreSQL health, and multi-tenancy |
| `readonly` | 👁️ Viewer | Read-only observation across event metrics |

---

## 5. Core Workflows & How Modules Connect

### A. Event Setup Wizard ("Populate Everything")
- **Component:** `src/components/events/EventSetupWizardModal.tsx`
- **Engine:** `src/services/eventGenerator.ts`
- **Presets:** 💍 Royal Wedding (350 Guests), 🎂 Birthday Bash (80 Guests), 💼 Corporate Gala (250 Guests), 💍 Engagement (150 Guests).
- **Output:** Simultaneously generates Event & Ceremonies, Digital Card Design, Time Slots, Catering Menu, 2D Seating Tables, and Family Passes with working WhatsApp links.

### B. Guest RSVP & Pass Generation
- Guest accesses personalized token link: `#/invite/:token`.
- Guest submits dietary selections and arrival time slot.
- Engine creates confirmed `RSVP`, creates `Attendee` records, and issues a `QRPass` (`QP-7001`).
- Pass is accessible at `#/pass/:token`.

### C. Gate Check-in & Security
- Gate staff scans pass with camera via `html5-qrcode` or inputs `QP-XXXX`.
- `validateAndCheckIn(token)` performs cryptographic token hash verification, prevents duplicate admissions, and logs the check-in.

---

## 6. Database Schema (Supabase PostgreSQL)

Key tables in `supabase/migrations/20261031000001_initial_schema.sql`:
`profiles`, `organizations`, `organization_members`, `events`, `event_functions`, `time_slots`, `guest_groups`, `guests`, `invitations`, `rsvps`, `attendees`, `menu_categories`, `menu_items`, `venue_layouts`, `venue_tables`, `seats`, `qr_passes`, `checkin_logs`, `whatsapp_queue`.

**Deterministic UUID Converter:** `toValidUUID(str)` in `src/services/supabaseSync.ts` guarantees string IDs like `evt-001` or `cat-1` safely convert into standard PostgreSQL UUID format without throwing database errors.

---

## 7. Critical Bugs Solved & Lessons Learned

1. **GitHub Pages Blank Page:**
   - *Cause:* GitHub Pages deployed from `main` root, attempting to load uncompiled TypeScript files.
   - *Fix:* Configured `vite.config.ts` to output fixed asset bundles (`assets/app.js` and `assets/index.css`), added universal loader in `index.html` and `404.html`, and synchronized `dist/assets` into root `assets/`.
2. **RSVP Page Stripping Layout:**
   - *Cause:* Greedy route check `location.pathname.startsWith('/rsvp')` matched `/rsvp-manager`, treating it as a public guest route.
   - *Fix:* Narrowed check to exact `/rsvp` or `/rsvp/:token`. `/rsvp-manager` remains inside `AppLayout`.
3. **Session Resetting on Refresh:**
   - *Cause:* `loadStateFromLocalStorage` had `if (parsed.guests && parsed.guests.length > 0)` which returned `null` for real workspaces with 0 guests.
   - *Fix:* Validates `parsed && parsed.event && parsed.event.name`. Added `saveAuthSession` and auto-redirect in `LoginPage.tsx`.

---

## 8. Verification Commands

```powershell
# Run all 21 automated unit tests
npm test

# Build production bundle with TypeScript checks
npm run build

# Start local dev server
npm run dev
```

# WEBSITES — UNIFIED MULTI-WEBSITE PLATFORM
# PROJECT ANALYSIS REPORT

**Platform Name:** WEBSITES  
**Host URL:** https://sv007git.github.io/Websites/  
**Repository:** https://github.com/sv007git/Websites  
**Backend:** Unified Supabase Cloud Backend  
**Analysis Date:** November 2026  
**Document Version:** 1.0.0 (Comprehensive Pre-Integration Blueprint)  

---

## 1. EXECUTIVE SUMMARY

The **WEBSITES** platform unites 12 independent, production-grade web applications into a single, cohesive, mobile-first, multi-themed "Super Website" hosted entirely on GitHub Pages with a shared Supabase PostgreSQL backend.

Each individual project was previously engineered as a standalone repository with its own architectural rules, frameworks, state paradigms, styling tokens, and prompt specifications. This document presents a deep technical audit of all 12 source directories, categorizing their features, domain data schemas, backend/Supabase requirements, authentication boundaries, third-party integrations, and integration architecture into the consolidated WEBSITES application.

---

## 2. INVENTORY OF THE 12 SITES

| # | Website Name | Directory Location | Primary Category | Original Tech Stack |
|---|--------------|--------------------|------------------|---------------------|
| 1 | **Just You & Me** (Chat) | `C:\Users\HARISH VYAS\Project\Websites\Chat` | Communication & Lifestyle | React 18, Vite, Tailwind CSS, Supabase Realtime & Storage, WebRTC |
| 2 | **CookFood** | `C:\Users\HARISH VYAS\Project\Websites\CookFood` | Culinary & Food Tech | React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Canvas Confetti |
| 3 | **Doctor** | `C:\Users\HARISH VYAS\Project\Websites\Doctor` | Health & Holistic Medicine | Vanilla ES6+, HTML5, CSS3, Web Speech TTS, Web Audio Synthesizer |
| 4 | **ERP** | `C:\Users\HARISH VYAS\Project\Websites\ERP` | Enterprise Business Suite | React 19, TypeScript, Vite, Tailwind CSS, Supabase JS, LocalErpStore |
| 5 | **Antigravity IDE** | `C:\Users\HARISH VYAS\Project\Websites\IDE` | Developer Tools | Vanilla ES6+, CodeMirror 5, Pyodide Wasm, Node.js REST server |
| 6 | **InviteDecide** | `C:\Users\HARISH VYAS\Project\Websites\InviteDecide` | SaaS Event Planning | React 18, TypeScript, Vite, Tailwind CSS, Zustand, Supabase, QR engine |
| 7 | **Prabhata** (MyPage) | `C:\Users\HARISH VYAS\Project\Websites\MyPage` | Vedic Astrology & Morning Hub | Vanilla ES6+, HTML5, CSS3, Meeus Astronomical Math, Web Speech TTS |
| 8 | **Sanatana Pujas** (Pujas) | `C:\Users\HARISH VYAS\Project\Websites\Pujas` | Vedic Rituals & Spiritual | Vanilla ES6+, HTML5, CSS3, Web Speech TTS, Web Audio Synthesizer |
| 9 | **ShareIT** | `C:\Users\HARISH VYAS\Project\Websites\ShareIT` | WebRTC Screen Sharing & Conferencing | React 18, TypeScript, Vite, Tailwind CSS, WebRTC Mesh, MQTT Cloud Signaling |
| 10 | **ShortsHub** | `C:\Users\HARISH VYAS\Project\Websites\ShortsHub` | Media & Video Discovery | React 18, TypeScript, Vite, Tailwind CSS, Dexie IndexedDB, YouTube IFrame API |
| 11 | **NCERT Cartoon Academy** (Study) | `C:\Users\HARISH VYAS\Project\Websites\Study` | K-12 Education & EdTech | Vanilla ES6+, HTML5, CSS3, Comic SVG, Web Speech TTS, Web Audio SFX |
| 12 | **WebForge Studio** (WebBuilder) | `C:\Users\HARISH VYAS\Project\Websites\WebBuilder` | No-Code Full-Stack Builder | React 18, TypeScript, Vite, Tailwind CSS, Zustand + Immer, Zod AST, JSZip |

---

## 3. IN-DEPTH TECHNICAL AUDIT OF ALL 12 WEBSITES

### 3.1 Just You & Me (Chat)
- **Directory:** `Chat/`
- **Purpose:** A private, real-time romantic web application for couples with absolute privacy, synchronized entertainment, and daily health care tracking.
- **Key Features:**
  - 1-on-1 HD WebRTC voice & video calling with STUN/TURN, camera flipping, PiP controls, and zero-asset synthesized ringtones.
  - Real-time couple chat with reactions, media lightbox, voice notes (MediaRecorder), and romantic GIF picker.
  - Watch Together video sync engine (`normalizeVideoUrl`, drift correction within 1.5s, play/pause/seek synchronization via Supabase Realtime).
  - Photo memories gallery with favoriting and Supabase storage upload (`couple-media` bucket).
  - Multi-tab Notes view: Love Notes scratchpad, Menstrual Cycle care calculator (4-phase calculation and morning care alerts), and Birthday/Anniversary countdowns.
  - Couple Space pairing code mechanism (8-character invite code with 2-partner strict capacity trigger).
  - 7 aesthetic romantic theme palettes (`blush`, `rose`, `lavender`, `midnight`, `sunset`, `ocean`, `emerald`) with dark mode.
- **Tech Stack:** React 18.3.1, Vite 6.2.0, Tailwind CSS 3.4.17, Lucide React, Supabase JS, Canvas Confetti.
- **Current Status:** Fully implemented frontend and Supabase schema with unit tests.
- **Supabase Tables:** `profiles`, `couple_spaces`, `couple_members`, `invitations`, `messages`, `memories`, `love_notes`, `watch_sessions`.
- **Authentication:** Supabase Auth (email/password). A user belongs to at most one active couple space.
- **External APIs:** Native Web Speech / Web Audio, WebRTC STUN/TURN, Tenor/Giphy GIF feeds, Supabase Realtime.

### 3.2 CookFood
- **Directory:** `CookFood/`
- **Purpose:** Modern Indian recipe discovery and smart cooking platform inspired by Hebbar's Kitchen, offering dynamic ingredient quantity scaling.
- **Key Features:**
  - 56 curated authentic Indian recipes across 7 collections (Breakfast, Lunch, Dinner, Snacks, Sweets, Drinks, Healthy).
  - Dynamic Recipe Quantity Adapter: live recalculation of all ingredient amounts based on target serving size; formats kitchen fractions (1/4, 1/2, 1 1/3), pluralizes units, flags batch warnings when scaled > 3x.
  - Interactive cooking mode: full-screen step-by-step guidance with countdown timers, audio pulse, and confetti celebration.
  - Multi-criteria filter sidebar (meal time, cuisine, vegetarian/vegan/jain/gluten-free, cook time, difficulty).
  - Ctrl+K global search modal with fuzzy query matching and recent searches.
  - Offline shopping basket with tap-to-check and 1-click WhatsApp formatted export.
  - Trilingual UI localization: English (`en`), Telugu (`te`), and Tamil (`ta`).
  - Interactive Custom Recipe Builder modal with JSON schema export and import.
- **Tech Stack:** React 19.3.1, TypeScript 7.0.2, Vite 8.3.5, Tailwind CSS 3.4.19, React Router (HashRouter), Lucide React, Canvas Confetti.
- **Current Status:** 100% complete and verified with 15 passing Vitest tests.
- **Supabase Tables:** `user_saved_recipes`, `custom_recipes`, `shopping_list_items`.
- **Authentication:** Works anonymously with LocalStorage; synchronizes favorites and shopping lists to Supabase when logged in.
- **External APIs:** WhatsApp sharing link API.

### 3.3 Doctor
- **Directory:** `Doctor/`
- **Purpose:** Accessible high-contrast medical exploration dashboard bridging modern Allopathy with classical Ayurveda, Mudras, Yoga & Pranayama, Micronutrient Deficiencies, and Circadian Lifestyle Protocols.
- **Key Features:**
  - Dynamic vector SVG anatomy viewer across 3 demographics (Adult Male, Adult Female, Pediatric Infant) and 2 layers (Internals, Externals) with zoom/pan and hotspot hover glow.
  - 25 body parts × 10 conditions = 250 clinically researched conditions.
  - 8-pillar holistic protocol per condition: Root Causes, Prevention, Lifestyle/Diet, Allopathic Medicines, Classical Ayurveda, Therapeutic Mudras, Yoga Asanas/Pranayama, Vitamin/Mineral Deficiencies & Whole Foods, and Dawn-to-Dusk Regimen.
  - English Voice Narration Engine using Web Speech API with selectable speeds (0.8x - 1.3x) and animated CSS waveform visualizer.
  - Web Audio API dual-oscillator acoustic chimes on organ and condition selections.
  - Pure black-and-white monochrome styling with dedicated 1-page PDF/print stylesheet.
- **Tech Stack:** Vanilla HTML5, ES6+ JavaScript, CSS3 variables, Web Speech API, Web Audio API. Zero external runtime dependencies.
- **Current Status:** 100% complete with 10,238 lines of clinical data in `js/data.js`.
- **Supabase Tables:** `medical_bookmarks`, `user_health_notes`.
- **Authentication:** Publicly browseable; optional authenticated bookmarking and personal notes.
- **External APIs:** Native Web Speech API, Web Audio API.

### 3.4 ERP
- **Directory:** `ERP/`
- **Purpose:** Dual-stack production-grade enterprise business suite for CRM, Sales, Procurement, Projects, Support, HRM, Inventory, and Double-Entry General Ledger.
- **Key Features:**
  - CRM Dashboard with revenue metrics, lead acquisition pipeline, win probabilities.
  - Interactive Deals Workstation with 5-stage Chevron Pipeline (`Qualify To Buy`, `Contact Made`, `Presentation`, `Proposal Made`, `Appointment`) and 5-tab collaboration center (Activities, Notes, Calls, Files, Email).
  - Sales & Invoicing: revenue trend analytics, invoice generation, settle payment action.
  - Procurement: purchase order tracking, supplier spend analytics, ordered vs delivered counts.
  - Projects: card grid with team leaders, progress meters, deadline indicators.
  - Support: ticket queue, SLA breach breakdown, resolution workflow.
  - HRM: workforce headcount, clock-in logging, leave approval with atomic balance deduction.
  - Inventory: stock valuation, warehouse utilization, `+10 Receive` and `-5 Dispatch` transactions.
  - Finance: double-entry general ledger inspection (`sum(Debit) == sum(Credit)`), journal entries, trial balance.
  - Global search (`Cmd+K` / `Ctrl+K`), multi-tenant organization selector (`Falcon LLP`).
- **Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Supabase PostgreSQL, `LocalErpStore` fallback.
- **Current Status:** 100% complete in `variant-a-supabase` with 9 passing Vitest tests and Supabase migrations.
- **Supabase Tables:** `organizations`, `user_profiles`, `leads`, `deals`, `deal_activities`, `products`, `stock_ledger_entries`, `warehouses`, `invoices`, `payments`, `chart_of_accounts`, `gl_entries`, `employees`, `attendance_records`, `leave_requests`, `purchase_orders`, `projects`, `tickets`, `audit_logs`.
- **Authentication:** Supabase Auth (scoped to tenant `organization_id`). Public demo fallback with optimistic caching.
- **External APIs:** Supabase Cloud REST & Realtime.

### 3.5 Antigravity IDE
- **Directory:** `IDE/`
- **Purpose:** AI-first code editor and development environment engineered for mobile touch devices (Android Termux) and modern web browsers.
- **Key Features:**
  - Dual-mode operation: Native phone mode (connecting to Termux Node.js daemon executing real system bash and `agy` CLI) and Browser Sandbox mode (GitHub Pages static mode with virtual file storage, command emulator, and in-browser code execution).
  - CodeMirror 5 editor with Android touch-friendly `contenteditable` mode, multi-file tabs, auto-save, and mobile symbol accessory toolbar (`{`, `}`, `(`, `)`, `;`, `=`, `>`, `<`, `+`, `-`, `$`, `/`).
  - In-browser code execution: live HTML/CSS/JS preview in sandboxed iframe with intercepted console, plus client-side Python 3 execution via Pyodide WebAssembly.
  - Autonomous AI pair programmer assistant with natural language reasoning and "⚡ Apply to Editor" diff injection.
  - PWA manifest and service worker for offline standalone mobile installation.
- **Tech Stack:** Vanilla ES6+ JavaScript, CodeMirror 5, Pyodide Wasm, CSS3, Service Workers, Google Identity Services.
- **Current Status:** Complete standalone web client and local Termux backend server.
- **Supabase Tables:** `ide_user_projects`, `ide_virtual_files`.
- **Authentication:** Guest browser virtual filesystem (localStorage); optional Supabase cloud workspace sync.
- **External APIs:** Pyodide CDN, Google Gemini API (optional user key for cloud mode).

### 3.6 InviteDecide
- **Directory:** `InviteDecide/`
- **Purpose:** SaaS event participation and planning platform tailored for Indian Royal Weddings, Engagements, Galas, and Milestone celebrations.
- **Key Features:**
  - WhatsApp-only guest distribution (no SMS, no email, no app install required).
  - Guest invitation experience via unique cryptographic token URLs (`#/invite/:token`).
  - Personalized RSVP with arrival time slot capacity management and meal course selection.
  - 4-step Event Setup Wizard ("Populate Everything" with 1-click wedding, birthday, corporate presets).
  - Visual digital invitation card designer with luxury Indian typography (Cormorant Garamond, Cinzel, Great Vibes).
  - Catering planner with automated safety buffer calculator (+10-15%) and dietary breakdown (Veg, Non-Veg, Jain).
  - 2D venue seating studio with 1-click auto-seating algorithm keeping family households clustered at same tables.
  - Gate admission QR pass issuance (`QP-...`) and real-time webcam scanner check-in with duplicate scan prevention.
  - 10 specialized user roles (`owner`, `event_manager`, `checkin_operator`, `caterer`, `seating_manager`, etc.) with dynamic UI transformations.
- **Tech Stack:** React 18.3.1, TypeScript 5.6, Vite 5.4.9, Tailwind CSS 3.4.14, Zustand 5.0.0, Lucide React, `qrcode`, `html5-qrcode`, `recharts`, `xlsx`, `jspdf`.
- **Current Status:** 100% complete and verified with 7 Vitest suites (21 tests passing).
- **Supabase Tables:** `events`, `event_functions`, `time_slots`, `guest_groups`, `guests`, `invitations`, `rsvps`, `attendees`, `menu_categories`, `menu_items`, `venue_layouts`, `venue_tables`, `seats`, `qr_passes`, `checkin_logs`, `whatsapp_queue`.
- **Authentication:** Organizer login via Supabase Auth. Guests access without authentication via cryptographic tokens.
- **External APIs:** WhatsApp Click-to-Chat API.

### 3.7 Prabhata (MyPage)
- **Directory:** `MyPage/`
- **Purpose:** Daily morning sanctuary combining celestial Hindu Panchangam, daily Dharma worship guides, bilingual audio briefings, solar Muhurthams, and TV9 Telugu speed news.
- **Key Features:**
  - Astronomical Hindu Panchangam: real-time calculation of Moon phase, Tithi, Nakshatra, Masa, Vaara, Yoga, Karana, and Rashis using Jean Meeus celestial equations and Lahiri Ayanamsa.
  - Daily Dharma & Worship Guide (Omkaram Devi Shree Guruji format): dynamically selects the day's deity, sacred mantras, home puja steps, naivedyam, and puranic story.
  - Bilingual text-to-speech engine (English & Telugu) using Web Speech API with sentence chunking to eliminate timeouts.
  - Vedic Solar Timings & Muhurthams: Sunrise, Sunset, Brahma Muhurtham, Abhijit Muhurtham, Rahu Kalam, Yamagandam, Gulika Kalam with automatic IP geolocation and presets.
  - TV9 Telugu news hub with 4-minute speed headline bulletins and 24/7 live stream switcher.
  - Strict language separation: English mode contains exactly zero Telugu characters; Telugu mode renders authentic Telugu script.
- **Tech Stack:** Vanilla ES6+ JavaScript, HTML5, CSS3, Web Speech API, Meeus Celestial Equations.
- **Current Status:** 100% complete client-side application.
- **Supabase Tables:** `user_daily_dharma_bookmarks`, `custom_city_preferences`.
- **Authentication:** Publicly accessible; syncs user location and custom date preferences when authenticated.
- **External APIs:** YouTube IFrame API for TV9 Telugu, IP geolocation API.

### 3.8 Sanatana Pujas (Pujas)
- **Directory:** `Pujas/`
- **Purpose:** Step-by-step guidance for 21 authentic Vedic rituals categorized into Life Phase Samskaras, Vratams & Festivals, Astrological Dosha Pariharams, and Daily Observances.
- **Key Features:**
  - 21 comprehensive rituals with significance, auspicious timings, materials (Samagri), and sequential steps with Sanskrit mantras, transliteration, and meanings.
  - Bilingual interface and mantra toggling (English <-> Telugu) across all procedures.
  - Audio recitation: Priest Mode continuous recitation and per-step chanting via Web Speech API with authentic `te-IN` and `en-IN` voice detection.
  - Web Audio API synthesizer for acoustic Temple Bell (Ghanta Dhwani) and Sacred Conch (Shankham).
  - Interactive Samagri checklist with progress meter and 1-click formatted WhatsApp export.
  - Dynamic Vedic Sankalpam Generator interpolating user's Gotra, Nakshatra, Name, Spouse Name, and ongoing astronomical calendar elements into classical Vedic Sanskrit verses.
  - Screen Wake Lock API to prevent device sleep during rituals.
- **Tech Stack:** Vanilla ES6+ JavaScript, HTML5, CSS3, Web Speech API, Web Audio API.
- **Current Status:** 100% complete and self-contained.
- **Supabase Tables:** `user_pujas_bookmarks`, `user_sankalpam_profiles`, `user_pujas_checklists`.
- **Authentication:** Unrestricted public access; synchronizes Sankalpam family profiles and ritual checklists to Supabase.
- **External APIs:** WhatsApp sharing link API.

### 3.9 ShareIT
- **Directory:** `ShareIT/`
- **Purpose:** Production-grade browser-based screen sharing and conferencing platform with zero installation or account requirements.
- **Key Features:**
  - Real-time screen sharing (full desktop, window, tab) with system audio capture.
  - Interactive two-way Remote Screen Control: presenter permission prompt, remote mouse pointer with click ripples, collaborative telestrator pen, and remote keypress visualization with emergency Esc revocation.
  - Multi-peer WebRTC mesh calling with device selection (microphone, camera, speaker, front/back mobile toggle).
  - Simultaneous screen and camera streaming with floating webcam picture-in-picture.
  - In-meeting text chat (desktop docked sidebar / mobile sliding sheet) and live notification toasts with inline quick-reply.
  - Direct peer-to-peer chunked file sharing (16KB chunks over WebRTC DataChannel) with explicit Accept/Decline security prompts.
  - 3-tier signaling engine: Global Cloud Relay via secure WebSocket MQTT (`wss://broker.emqx.io:8084/mqtt`), self-hosted WebSocket, and local `BroadcastChannel`.
  - 3-way dynamic theme engine: Dark Navy, Pure B&W Monochrome, and Crisp Light.
- **Tech Stack:** React 18, TypeScript, Vite 8, Tailwind CSS, Lucide React, WebRTC, MQTT over WebSockets.
- **Current Status:** 100% complete and verified with 18 Vitest unit tests.
- **Supabase Tables:** `meeting_rooms`, `meeting_participants`, `meeting_history`.
- **Authentication:** Works without login; optionally stores room history and contact books in Supabase.
- **External APIs:** Public MQTT broker (`broker.emqx.io`), Google STUN servers.

### 3.10 ShortsHub
- **Directory:** `ShortsHub/`
- **Purpose:** Curated Tamil, English & Telugu YouTube Shorts player and daily collector designed for mobile viewing and batch downloading via SnapTube.
- **Key Features:**
  - 3 languages strictly supported: Tamil (`ta`), English (`en`), Telugu (`te`).
  - 4 family-friendly categories strictly maintained: Education, Fun and Entertainment, Family, Friends and Lifestyle (Strictly NO Games, NO Tech).
  - Full-screen 9:16 vertical player with swipe-up/down gestures, tap-to-pause, and double-tap heart favorite animation.
  - Automatic viewing capture into daily watchlist upon playback.
  - Batch export formats for SnapTube manual downloading: TXT (one URL per line), M3U (media playlist), CSV (spreadsheet with metadata), JSON, and Web Share API.
  - IndexedDB storage via Dexie.js for offline history, custom playlists, and curator content editor.
- **Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Dexie.js, YouTube IFrame API.
- **Current Status:** 100% complete with 19 passing Vitest tests.
- **Supabase Tables:** `curated_shorts`, `user_shorts_favorites`, `user_daily_watchlist`.
- **Authentication:** Local-first on-device privacy; synchronizes watchlists and custom playlists to Supabase.
- **External APIs:** YouTube IFrame Player API.

### 3.11 NCERT Cartoon Academy (Study)
- **Directory:** `Study/`
- **Purpose:** K-12 CBSE / NCERT English Medium curriculum (Class 1 to 12) reimagined as Sunday comic strips, interactive formula labs, spoken audio narrations, and checkpoint quizzes.
- **Key Features:**
  - Pure Black & White Comic / Manga visual styling with halftone ink patterns, neobrutalist 3D shadows, speech bubbles, and Inverted Noir mode.
  - English Voice Narration Engine using Web Speech API with distinctive character voice profiles (Prof. Paws, Pixel Bot, Sparky, Luna Owl, Doodler) and sequential auto-reading.
  - Procedural Web Audio cartoon SFX (boing, pop, fanfare, buzzer, page flip) with zero MP3 files.
  - Complete NCERT curriculum mapping across 5 developmental stages (Foundational, Preparatory, Middle, Secondary, Senior Secondary) for Classes 1 to 12.
  - 6 tactile interactive mini-labs: Shape Sorter, Photosynthesis Limiting Factors, Pizza Fraction Slicer, Electric Circuit Builder, Newton's Cart (F = ma), and Ohm's Law (V = IR).
  - MCQ checkpoint quizzes with instant audio feedback, score recording, and explanation cards.
  - Parent & Kid Learning Hub with dinner-table conversation prompts and printable Black & White Diploma Certificate.
- **Tech Stack:** Vanilla ES6+ JavaScript, HTML5, CSS3, SVG vector graphics, Web Speech API, Web Audio API.
- **Current Status:** Complete self-contained educational dashboard.
- **Supabase Tables:** `ncert_student_profiles`, `ncert_quiz_results`, `ncert_badges_unlocked`.
- **Authentication:** Local progress tracking; cloud sync of student progress and badges when logged in.
- **External APIs:** Web Speech API, Web Audio API.

### 3.12 WebForge Studio (WebBuilder)
- **Directory:** `WebBuilder/`
- **Purpose:** Visual website and full-stack application builder with Mobirise-style block assembly, relational database schema designer, and multi-target code generation.
- **Key Features:**
  - 55 production blocks across 16 categories (navbars, heroes, feature grids, stats, testimonials, services, pricing, forms, ecommerce, footers) with drag-and-drop reordering, inline text editing, and responsive viewports (Desktop 1280px, Tablet 768px, Mobile 375px) with 50%-150% zoom.
  - Visual Relational Database & Schema Designer: tables, columns, data types, primary/foreign keys, indexes, and PostgreSQL Row Level Security (RLS) policies.
  - 12 full-stack multi-page starter templates (Nexus Consulting, CloudScale SaaS, Kinetic Agency, DevCraft Portfolio, Artisan Bistro, LearnSphere Academy, Ink & Quill, Apex Apparel, Chronos Medical, PipelineFlow CRM, CoreLogistics ERP, UrbanNest Marketplace) with automated UUID-safe installation pipeline.
  - Multi-target code generation and 1-click ZIP export:
    - Target A: Next.js 14 App Router + TypeScript + Tailwind CSS + Supabase (PostgreSQL DDL with RLS).
    - Target B: Standalone PHP 8.x MVC + MySQL/MariaDB (PSR-4 router, PDO prepared statements, Docker).
    - Target C: Pure Static HTML5 / CSS.
  - Autonomous AI Co-Pilot for natural language layout synthesis, themes, block insertions, and database schema creation.
  - Monochrome Noir, Cyber Slate, and Clean Light theme presets.
- **Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Zustand + Immer, Zod AST, Lucide React, JSZip.
- **Current Status:** 100% complete with 22 passing Vitest tests.
- **Supabase Tables:** `webforge_projects`, `webforge_templates`.
- **Authentication:** Local project storage in browser; cloud project saving and sharing via Supabase.
- **External APIs:** GitHub API (optional export/push), JSZip client-side archiver.

---

## 4. SHARED FUNCTIONALITY & OPPORTUNITIES FOR CONSOLIDATION

| Shared Capability | Existing Implementations Across Projects | Unified Platform Solution |
|-------------------|------------------------------------------|----------------------------|
| **Supabase Client** | Multiple ad-hoc singletons (`Chat/src/lib/supabaseClient.js`, `ERP/src/lib/supabase.ts`, `InviteDecide/src/services/supabase.ts`) | Single centralized `@supabase/supabase-js` client configured from root environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) with offline fallback. |
| **Authentication** | `Chat`, `ERP`, `InviteDecide` have distinct auth modals and session tracking | Shared `AuthContext` and user profile system. Authenticate once at the platform level; session automatically cascades to all 12 modules. |
| **Theme Engine** | `Chat` has 7 palettes + dark mode; `Doctor`, `Study`, `WebBuilder`, `ShareIT` have B&W monochrome modes; others have light/dark toggles | Universal Multi-Theme Engine inspired by `Chat`'s `ThemeContext.jsx` with palettes (`blush`, `rose`, `lavender`, `midnight`, `sunset`, `ocean`, `emerald`), plus high-contrast pure black and crisp white themes. |
| **Audio Narration & SFX** | `Doctor`, `MyPage`, `Pujas`, `Study` all implement custom Web Speech TTS and Web Audio synthesizers | Centralized `AudioEngine` utility providing synthesized sound effects (chimes, bells, boings, pops) and voice narration with speed and language controls. |
| **Responsive Navigation** | Each website implements custom mobile menus, drawer bars, or bottom navigation | Unified responsive header with platform brand, search, theme switcher, auth dropdown, and website launcher. Individual modules retain their contextual sub-navigation. |
| **Client Storage & Sync** | Multiple localStorage keys (`just_you_me_*`, `cookfood_*`, `INVITEDECIDE_*`, `pujas_*`, `doctor_*`) | Retain local keys for instant zero-latency offline loading while providing automatic background synchronization to Supabase for logged-in users. |
| **WhatsApp Integration** | `CookFood`, `InviteDecide`, `Pujas` share formatted text to WhatsApp | Shared WhatsApp utility for URL building, markdown formatting, and mobile deep-linking. |

---

## 5. INTEGRATION CHALLENGES & RESOLUTION STRATEGY

1. **Diverse Technology Stacks:**
   - Five apps are React 18/19 SPAs (`Chat`, `CookFood`, `ERP`, `InviteDecide`, `ShareIT`, `ShortsHub`, `WebBuilder`).
   - Four apps are pure Vanilla ES6+ HTML5/CSS applications (`Doctor`, `MyPage`, `Pujas`, `Study`).
   - One app is a hybrid browser sandbox / Termux Node IDE (`IDE`).
   - *Resolution:* Build the unified shell as a modern React 18/19 application with Vite and React Router (HashRouter). The React applications integrate as modular page components with shared context. The Vanilla applications integrate seamlessly via encapsulated React container wrappers (`VanillaModuleWrapper`) that dynamically execute their isolated JavaScript lifecycles while preserving their exact visual styling, DOM bindings, and event handlers.

2. **CSS Namespace & Style Isolation:**
   - Different projects use Tailwind, custom CSS variables, or raw stylesheets. Unscoped CSS could cause styling collisions (e.g. `Doctor`'s monochrome styles overriding `Chat`'s romantic pinks).
   - *Resolution:* Scope module styles under dedicated wrapper classes (e.g., `.module-doctor`, `.module-chat`, `.module-study`) and leverage CSS variables mapped through the Universal Multi-Theme Engine.

3. **Routing & GitHub Pages Refresh:**
   - GitHub Pages does not support native server-side rewrites. Direct URL hits to `/site/chat` could result in HTTP 404 errors.
   - *Resolution:* Implement `HashRouter` (`/#/site/chat`, `/#/site/doctor`, etc.) paired with an SPA fallback script (`404.html`) to ensure 100% reliable direct links, bookmarks, and page reloads.

4. **Database Multi-Tenancy & RLS:**
   - 12 different domains must share a single Supabase project without table name collisions or data leakage.
   - *Resolution:* All tables reside in the standard `public` schema with clean, domain-prefixed table names where appropriate (e.g. `erp_*`, `invitedecide_*`, `chat_*`), user ID foreign keys, and Row Level Security (RLS) enforcing that users only access their own data.

---

## 6. RECOMMENDED IMPLEMENTATION ARCHITECTURE

```
Websites/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD
├── index.html                      # Entry HTML with theme tokens & fonts
├── package.json                    # Unified dependencies
├── vite.config.ts                  # Vite config (base: '/Websites/')
├── tsconfig.json
├── tailwind.config.js
├── public/
│   ├── 404.html                    # SPA routing fallback
│   └── assets/                     # Shared icons, illustrations, favicons
├── supabase/
│   ├── migrations/
│   │   ├── 001_core_platform.sql   # profiles, user_preferences, website_registry
│   │   ├── 002_chat_schema.sql     # couple_spaces, messages, memories, etc.
│   │   ├── 003_erp_schema.sql      # organizations, leads, deals, invoices, gl_entries
│   │   ├── 004_invitedecide.sql    # events, guests, rsvps, catering, seating, passes
│   │   └── 005_auxiliary_apps.sql  # bookmarks, watchlists, notes, recipes
│   └── seed/
│       └── website_registry.sql    # Seed data for all 12 applications
├── src/
│   ├── main.tsx                    # Application entry point
│   ├── App.tsx                     # Top-level HashRouter & Theme/Auth providers
│   ├── registry/
│   │   └── websiteRegistry.ts      # Metadata & routes for all 12 websites
│   ├── themes/
│   │   ├── ThemeContext.tsx        # Centralized multi-theme engine
│   │   ├── themePalettes.ts        # 7 color palettes + Black + White
│   │   └── themeTokens.css         # Dynamic CSS variables
│   ├── services/
│   │   ├── supabase/
│   │   │   └── client.ts           # Centralized Supabase client singleton
│   │   ├── auth/
│   │   │   └── AuthContext.tsx     # Unified user authentication & profile state
│   │   └── audio/
│   │       └── UnifiedAudioEngine.ts # Shared Web Speech TTS & Web Audio synthesizer
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Global header with search, theme & auth
│   │   │   ├── Footer.tsx          # Platform footer
│   │   │   └── MobileNav.tsx       # Responsive mobile navigation
│   │   ├── shared/
│   │   │   ├── ThemeSwitcher.tsx   # Global theme & dark mode picker
│   │   │   ├── SearchModal.tsx     # Ctrl+K global search across all 12 sites
│   │   │   ├── AuthModal.tsx       # Sign In / Sign Up dialog
│   │   │   └── VanillaModuleWrapper.tsx # Seamless mount wrapper for Vanilla apps
│   │   └── home/
│   │       ├── HeroBanner.tsx      # Platform introduction & stats
│   │       ├── WebsiteCard.tsx     # Interactive website card with launch & favorite
│   │       ├── CategoryFilter.tsx  # Filter by category (Productivity, Vedic, Media, etc.)
│   │       └── RecentlyVisited.tsx # Track and display user's recent websites
│   └── modules/
│       ├── chat/                   # Just You & Me module
│       ├── cookfood/               # CookFood module
│       ├── doctor/                 # Doctor module
│       ├── erp/                    # ERP module
│       ├── ide/                    # Antigravity IDE module
│       ├── invitedecide/           # InviteDecide module
│       ├── mypage/                 # Prabhata (MyPage) module
│       ├── pujas/                  # Sanatana Pujas module
│       ├── shareit/                # ShareIT module
│       ├── shortshub/              # ShortsHub module
│       ├── study/                  # NCERT Cartoon Academy module
│       └── webbuilder/             # WebForge Studio module
```

---
*End of Project Analysis Report.*

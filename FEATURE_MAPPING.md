# WEBSITES — FEATURE MAPPING DIRECTORY
# ORIGINAL SPECIFICATIONS TO UNIFIED PLATFORM MAP

**Platform Name:** WEBSITES  
**Host URL:** https://sv007git.github.io/Websites/  
**Document Version:** 1.0.0 (Comprehensive Feature Mapping)  

This document traces every feature, capability, database table, and design invariant from each original `antigravity_prompt.txt` to its exact implementation path inside the unified platform `C:\Users\HARISH VYAS\Project\Websites`.

---

## 1. WEBSITE 01: JUST YOU & ME (Chat)
**Original Directory:** `Chat/`  
**Dedicated Platform Route:** `/#/site/chat`  
**Module Location:** `src/modules/chat/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **Couple Space Pairing & Code Verification** | `Chat/src/components/Auth/PairingScreen.jsx` | `src/modules/chat/components/Auth/PairingScreen.tsx` | 8-char code generation, capacity constraint <= 2 members. |
| **Realtime Chat Feed & Message Bubbles** | `Chat/src/components/Chat/ChatView.jsx`, `MessageBubble.jsx` | `src/modules/chat/components/Chat/ChatView.tsx`, `MessageBubble.tsx` | Subscribes to Supabase Realtime channel for messages. |
| **Voice Notes & Audio Recording** | `Chat/src/components/Chat/VoiceRecorder.jsx` | `src/modules/chat/components/Chat/VoiceRecorder.tsx` | Browser MediaRecorder with audio waveform display. |
| **Romantic GIF Picker** | `Chat/src/components/Chat/GifPicker.jsx` | `src/modules/chat/components/Chat/GifPicker.tsx` | Integrated GIF selector with search and reaction categories. |
| **Media Lightbox with Zoom/Pan** | `Chat/src/components/Chat/MediaLightbox.jsx` | `src/modules/chat/components/Chat/MediaLightbox.tsx` | Fullscreen modal for images and videos with pinch/zoom. |
| **WebRTC 1-on-1 Voice & Video Calling** | `Chat/src/lib/webrtc.js`, `CallModal.jsx` | `src/modules/chat/services/webrtc.ts`, `CallModal.tsx` | STUN/TURN, SDP exchange, camera toggle, synthesized ringtones. |
| **Watch Together Video Synchronization** | `Chat/src/lib/syncEngine.js`, `WatchRoom.jsx` | `src/modules/chat/services/syncEngine.ts`, `WatchRoom.tsx` | URL normalizer, drift correction within 1.5s, play/pause sync. |
| **Shared Photo Memories Gallery** | `Chat/src/components/Memories/MemoriesView.jsx` | `src/modules/chat/components/Memories/MemoriesView.tsx` | Photo upload to Supabase storage, milestone dates, favorites. |
| **Love Notes Scratchpad** | `Chat/src/components/Notes/NotesView.jsx` | `src/modules/chat/components/Notes/NotesView.tsx` | Pinned notes, romantic color cards, local & cloud persistence. |
| **Menstrual Cycle 4-Phase Calculator** | `Chat/src/lib/cycleCalculatorHelper.js`, `CycleCalculator.jsx` | `src/modules/chat/services/cycleCalculator.ts`, `CycleCalculator.tsx` | Local date parsing, 4 phases, partner morning care advice. |
| **Shared Birthday & Anniversary Countdown** | `Chat/src/components/Notes/BirthdayCalculator.jsx` | `src/modules/chat/components/Notes/BirthdayCalculator.tsx` | Zodiac signs, countdown timers, gift ideas. |
| **7 Romantic Theme Palettes** | `Chat/src/context/ThemeContext.jsx` | `src/themes/themePalettes.ts`, `ThemeContext.tsx` | Elevated to platform-wide Universal Theme Engine! |
| **Synthesized Audio Chimes & Ringtones** | `Chat/src/lib/audioRing.js`, `notificationHelper.js` | `src/services/audio/UnifiedAudioEngine.ts` | Zero-asset Web Audio API oscillator bells and chimes. |

---

## 2. WEBSITE 02: COOKFOOD
**Original Directory:** `CookFood/`  
**Dedicated Platform Route:** `/#/site/cookfood`  
**Module Location:** `src/modules/cookfood/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **56 Curated Recipe Catalog** | `CookFood/src/data/recipes/*.ts` | `src/modules/cookfood/data/recipes/` | 7 collections: Breakfast, Lunch, Dinner, Snacks, Sweets, Drinks, Healthy. |
| **Dynamic Quantity Scaler Engine** | `CookFood/src/utils/quantityScaler.ts` | `src/modules/cookfood/utils/quantityScaler.ts` | Recalculates amounts based on servings ratio; unit pluralization. |
| **Kitchen Fraction Formatter** | `CookFood/src/utils/fractionFormatter.ts` | `src/modules/cookfood/utils/fractionFormatter.ts` | 1/2, 1/4, 3/4, mixed fractions, range preservation. |
| **Serving Size Preset & Warning Bar** | `CookFood/src/components/ServingAdapter/` | `src/modules/cookfood/components/ServingAdapter/` | Presets (1 to 20), multi-batch warning when ratio > 3x. |
| **Interactive Step-by-Step Cooking Mode** | `CookFood/src/components/CookingMode/` | `src/modules/cookfood/components/CookingMode/` | Fullscreen wizard with countdown timers & Canvas Confetti. |
| **Multi-Facet Filter Sidebar** | `CookFood/src/components/RecipeFilters/` | `src/modules/cookfood/components/RecipeFilters/` | Cuisines, meal times, diet (Veg, Vegan, Jain), cook times, difficulty. |
| **Global Ctrl+K Search Modal** | `CookFood/src/components/SearchBar/` | `src/modules/cookfood/components/SearchBar/` | Debounced fuzzy search, recent search memory. |
| **Interactive Ingredient Checklist** | `CookFood/src/components/IngredientList/` | `src/modules/cookfood/components/IngredientList/` | Tap-to-cross items grouped by recipe preparation section. |
| **Offline Shopping Basket & WhatsApp Share** | `CookFood/src/components/ShoppingList/` | `src/modules/cookfood/components/ShoppingList/` | Local basket with 1-click WhatsApp formatted export. |
| **Trilingual UI Localization (EN/TE/TA)** | `CookFood/src/utils/i18n.ts` | `src/modules/cookfood/utils/i18n.ts` | Instant language toggle across English, Telugu, and Tamil. |
| **Custom Recipe Builder Modal** | `CookFood/src/components/RecipeBuilder/` | `src/modules/cookfood/components/RecipeBuilder/` | Interactive JSON recipe creator, importer & exporter. |

---

## 3. WEBSITE 03: DOCTOR
**Original Directory:** `Doctor/`  
**Dedicated Platform Route:** `/#/site/doctor`  
**Module Location:** `src/modules/doctor/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **Interactive Vector SVG Anatomy Viewer** | `Doctor/js/anatomy-svg.js` | `src/modules/doctor/js/anatomy-svg.js` | 3 demographics (Man, Woman, Baby), 2 layers (Internals, Externals). |
| **Zoom & Pan Controls** | `Doctor/js/anatomy-svg.js` | `src/modules/doctor/js/anatomy-svg.js` | 0.75x to 2.5x zoom with reset and level indicator. |
| **25 Anatomical Body Parts** | `Doctor/js/data.js` | `src/modules/doctor/js/data.js` | 12 internals + 13 externals with clinical descriptions. |
| **250 Clinically Researched Conditions** | `Doctor/js/data.js` | `src/modules/doctor/js/data.js` | Exactly 10 conditions per body part with severity badges. |
| **8-Pillar Holistic Treatment Protocols** | `Doctor/js/data.js` | `src/modules/doctor/js/data.js` | Allopathy, Ayurveda, Mudras, Yoga, Vitamins, Circadian Diet. |
| **English Voice Speech Narration** | `Doctor/js/audio.js` | `src/modules/doctor/js/audio.js` | Web Speech TTS with speed selector (0.8x - 1.3x) & auto-speak. |
| **Web Audio Acoustic Chime Synthesizer** | `Doctor/js/audio.js` | `src/modules/doctor/js/audio.js` | Dual-oscillator sine wave chimes on part & disease selection. |
| **Animated CSS Waveform Visualizer** | `Doctor/css/styles.css`, `index.html` | `src/modules/doctor/` | 6-bar live equalizer animating while speech synthesis plays. |
| **Monochrome High-Contrast UI & Print View** | `Doctor/css/styles.css` | `src/modules/doctor/css/styles.css` | Pure black/white contrast with printable medical protocol sheets. |

---

## 4. WEBSITE 04: ERP
**Original Directory:** `ERP/`  
**Dedicated Platform Route:** `/#/site/erp`  
**Module Location:** `src/modules/erp/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **CRM Dashboard & Lead Metrics** | `ERP/variant-a-supabase/src/pages/CrmDashboard.tsx` | `src/modules/erp/pages/CrmDashboard.tsx` | Total Leads, Deals Closed, Opportunities, Revenue trends. |
| **Deals Workstation (Chevron Pipeline)** | `ERP/variant-a-supabase/src/pages/DealsPage.tsx` | `src/modules/erp/pages/DealsPage.tsx` | 5-stage interactive pipeline bar (`Qualify To Buy` .. `Appointment`). |
| **5-Tab Activity Timeline** | `ERP/variant-a-supabase/src/components/crm/ActivityTimeline.tsx` | `src/modules/erp/components/crm/ActivityTimeline.tsx` | Chronological date-grouped Activities, Notes, Calls, Files, Email. |
| **Sales & Invoice Settlement** | `ERP/variant-a-supabase/src/pages/SalesPage.tsx` | `src/modules/erp/pages/SalesPage.tsx` | Revenue charts, `+ Create Invoice`, `Settle Paid` balance actions. |
| **Procurement & PO Tracking** | `ERP/variant-a-supabase/src/pages/ProcurementPage.tsx` | `src/modules/erp/pages/ProcurementPage.tsx` | Spend metrics, top suppliers, ordered vs delivered counts. |
| **Projects Workstation** | `ERP/variant-a-supabase/src/pages/ProjectsPage.tsx` | `src/modules/erp/pages/ProjectsPage.tsx` | Project cards (#PRO0020), team leaders, progress meters. |
| **Support Tickets & SLA Compliance** | `ERP/variant-a-supabase/src/pages/SupportPage.tsx` | `src/modules/erp/pages/SupportPage.tsx` | Ticket queues, SLA breaches donut, resolution workflow. |
| **HRM & Leave Approval Engine** | `ERP/variant-a-supabase/src/pages/HrmDashboard.tsx` | `src/modules/erp/pages/HrmDashboard.tsx` | Workforce stats, clock-in, leave approval with atomic balance decrement. |
| **Inventory & Stock Movements** | `ERP/variant-a-supabase/src/pages/InventoryDashboard.tsx` | `src/modules/erp/pages/InventoryDashboard.tsx` | Valuation, warehouse meters, `+10 Receive` & `-5 Dispatch` ledger actions. |
| **Double-Entry General Ledger** | `ERP/variant-a-supabase/src/pages/FinancePage.tsx` | `src/modules/erp/pages/FinancePage.tsx` | `gl_entries` inspection, `sum(Debit) == sum(Credit)` balanced posting. |
| **LocalErpStore & Supabase Cloud Sync** | `ERP/variant-a-supabase/src/lib/supabase.ts` | `src/modules/erp/lib/supabase.ts` | Optimistic localStorage cache + background sync to Supabase. |
| **Production Image & Avatar Assets** | `ERP/variant-a-supabase/public/assets/img/` | `src/modules/erp/assets/img/` | 90+ avatars, product photos, brand badges. |

---

## 5. WEBSITE 05: ANTIGRAVITY IDE
**Original Directory:** `IDE/`  
**Dedicated Platform Route:** `/#/site/ide`  
**Module Location:** `src/modules/ide/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **Touch-Friendly CodeMirror 5 Editor** | `IDE/js/editor.js` | `src/modules/ide/js/editor.js` | `contenteditable` input mode for Android keyboards, multi-tabs. |
| **Mobile Symbol Accessory Bar** | `IDE/js/editor.js`, `css/style.css` | `src/modules/ide/` | 1-tap quick symbols: `{`, `}`, `(`, `)`, `;`, `=`, `>`, `<`, `+`, `-`, `$`. |
| **Virtual & Cloud Filesystem** | `IDE/js/files.js` | `src/modules/ide/js/files.js` | Virtual in-browser file storage with JSZip project download. |
| **Terminal Emulator** | `IDE/js/terminal.js` | `src/modules/ide/js/terminal.js` | Client-side command evaluator (`help`, `ls`, `cat`, `touch`, `rm`). |
| **Live In-Browser Code Runner** | `IDE/js/runner.js` | `src/modules/ide/js/runner.js` | Sandboxed HTML/CSS/JS preview iframe & Pyodide Python 3 Wasm. |
| **AI Pair Programmer Chat Panel** | `IDE/js/agent.js` | `src/modules/ide/js/agent.js` | Natural language chat with "⚡ Apply to Editor" code block inserter. |
| **Dual-Mode Engine Controller** | `IDE/js/app.js` | `src/modules/ide/js/app.js` | Probes for local daemon on `/api/status`, falls back to Web Sandbox. |

---

## 6. WEBSITE 06: INVITEDECIDE
**Original Directory:** `InviteDecide/`  
**Dedicated Platform Route:** `/#/site/invitedecide`  
**Module Location:** `src/modules/invitedecide/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **1-Click Event Setup Wizard** | `InviteDecide/src/components/events/EventSetupWizardModal.tsx` | `src/modules/invitedecide/components/events/EventSetupWizardModal.tsx` | 4-step wizard with Royal Wedding, Birthday, Corporate presets. |
| **Digital Invitation Card Designer** | `InviteDecide/src/pages/invitations/InvitationDesignerPage.tsx` | `src/modules/invitedecide/pages/invitations/InvitationDesignerPage.tsx` | Visual canvas with luxury royal serif typography. |
| **Public Guest RSVP Portal** | `InviteDecide/src/pages/rsvp/GuestInvitePortalPage.tsx` | `src/modules/invitedecide/pages/rsvp/GuestInvitePortalPage.tsx` | Token-based `#/invite/:token` URL without guest account creation. |
| **Time Slot Arrival Capacity Tracker** | `InviteDecide/src/pages/rsvp/RSVPManagerPage.tsx` | `src/modules/invitedecide/pages/rsvp/RSVPManagerPage.tsx` | Hourly arrival windows preventing crowd bottlenecks. |
| **Catering Safety Buffer Calculator** | `InviteDecide/src/pages/catering/CateringPlannerPage.tsx` | `src/modules/invitedecide/pages/catering/CateringPlannerPage.tsx` | Dish-by-dish confirmed portions + 10-15% safety buffer. |
| **2D Seating Studio with Auto-Allocation** | `InviteDecide/src/pages/seating/SeatingStudioPage.tsx` | `src/modules/invitedecide/pages/seating/SeatingStudioPage.tsx` | 2D canvas with 1-click household family table clustering. |
| **Gate Entry QR Pass Issuance** | `InviteDecide/src/pages/rsvp/GuestPassPage.tsx` | `src/modules/invitedecide/pages/rsvp/GuestPassPage.tsx` | Generates secure passes (`QP-...`) with QR code download. |
| **Camera Scanner & Check-in Desk** | `InviteDecide/src/pages/checkin/StaffCheckInPage.tsx` | `src/modules/invitedecide/pages/checkin/StaffCheckInPage.tsx` | `html5-qrcode` camera scanner preventing duplicate admissions. |
| **WhatsApp Dispatch Queue** | `InviteDecide/src/pages/whatsapp/WhatsAppManagerPage.tsx` | `src/modules/invitedecide/pages/whatsapp/WhatsAppManagerPage.tsx` | One-click personalized WhatsApp invitation dispatch. |
| **10 Dynamic Role Dashboards** | `InviteDecide/src/pages/dashboard/OverviewPage.tsx` | `src/modules/invitedecide/pages/dashboard/OverviewPage.tsx` | Transforms view for Owner, Caterer, Seating Manager, Gate Guard. |

---

## 7. WEBSITE 07: PRABHATA (MyPage)
**Original Directory:** `MyPage/`  
**Dedicated Platform Route:** `/#/site/mypage`  
**Module Location:** `src/modules/mypage/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **Astronomical Hindu Panchangam** | `MyPage/js/panchang.js` | `src/modules/mypage/js/panchang.js` | Meeus celestial math for Tithi, Nakshatra, Masa, Vaara, Yoga. |
| **Dynamic SVG Moon Phase Terminator** | `MyPage/js/moon-renderer.js` | `src/modules/mypage/js/moon-renderer.js` | Precision SVG rendering of waxing/waning moon with craters. |
| **Daily Dharma & Worship Guide** | `MyPage/js/dharma-guide.js` | `src/modules/mypage/js/dharma-guide.js` | Omkaram format: presiding deity, sacred mantra, home puja, story. |
| **Bilingual Web Speech TTS Briefing** | `MyPage/js/audio-player.js` | `src/modules/mypage/js/audio-player.js` | Spoken morning briefing in English & Telugu with chunking safeguards. |
| **Vedic Solar Timings & Muhurthams** | `MyPage/js/suncalc.js` | `src/modules/mypage/js/suncalc.js` | Sunrise/Sunset, Brahma Muhurtham, Rahu Kalam, Yamagandam, IP geolocation. |
| **TV9 Telugu Speed News Hub** | `MyPage/js/news.js` | `src/modules/mypage/js/news.js` | 4-minute speed bulletin switcher and 24/7 live stream player. |
| **Strict Zero-Telugu English Mode** | `MyPage/js/app.js` | `src/modules/mypage/js/app.js` | Verified zero Telugu characters in English mode via regex. |

---

## 8. WEBSITE 08: SANATANA PUJAS (Pujas)
**Original Directory:** `Pujas/`  
**Dedicated Platform Route:** `/#/site/pujas`  
**Module Location:** `src/modules/pujas/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **21 Comprehensive Vedic Rituals** | `Pujas/js/data/pujas-data.js` | `src/modules/pujas/js/data/pujas-data.js` | 9 Life Phase Samskaras, 5 Vratams, 5 Pariharams, 2 Daily rituals. |
| **Bilingual Interface & Procedure Toggle** | `Pujas/js/app.js` | `src/modules/pujas/js/app.js` | Seamless English <-> Telugu switching across all mantras and steps. |
| **Full Audio Priest Recitation Mode** | `Pujas/js/audio-player.js` | `src/modules/pujas/js/audio-player.js` | Web Speech API sequential recitation with step scroll & highlighting. |
| **Synthesized Temple Bell & Conch SFX** | `Pujas/js/audio-player.js` | `src/modules/pujas/js/audio-player.js` | Web Audio harmonic bell (640Hz-2560Hz) & conch (210Hz-245Hz). |
| **Personalized Vedic Sankalpam Generator** | `Pujas/js/sankalpam.js` | `src/modules/pujas/js/sankalpam.js` | Interpolates Gotra, Nakshatra, Name into astronomical Sanskrit verse. |
| **Interactive Samagri Checklist & WhatsApp** | `Pujas/js/app.js` | `src/modules/pujas/js/app.js` | Checklist with progress bar and formatted WhatsApp export link. |
| **Screen Wake Lock API** | `Pujas/js/app.js` | `src/modules/pujas/js/app.js` | Prevents phone screen from dimming/sleeping during rituals. |

---

## 9. WEBSITE 09: SHAREIT
**Original Directory:** `ShareIT/`  
**Dedicated Platform Route:** `/#/site/shareit`  
**Module Location:** `src/modules/shareit/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **Real-Time Screen Sharing** | `ShareIT/src/webrtc/mediaManager.ts` | `src/modules/shareit/webrtc/mediaManager.ts` | Full desktop, app window, browser tab with audio capture. |
| **Two-Way Remote Screen Control** | `ShareIT/src/components/collaboration/RemoteControlOverlay.tsx` | `src/modules/shareit/components/collaboration/RemoteControlOverlay.tsx` | Remote pointer, click ripples, telestrator pen, keypresses, Esc revoke. |
| **Multi-Peer WebRTC Audio/Video Calling** | `ShareIT/src/webrtc/peerManager.ts` | `src/modules/shareit/webrtc/peerManager.ts` | STUN/TURN traversal, device switching, camera flipping. |
| **Floating Webcam Picture-in-Picture** | `ShareIT/src/components/meeting/FloatingWebcamTile.tsx` | `src/modules/shareit/components/meeting/FloatingWebcamTile.tsx` | Floating camera overlay during active screen share. |
| **In-Meeting Chat & Live Toasts** | `ShareIT/src/components/panels/ChatPanel.tsx` | `src/modules/shareit/components/panels/ChatPanel.tsx` | Desktop side-by-side dock / mobile sliding sheet with quick reply. |
| **Direct Peer-to-Peer 16KB File Sharing** | `ShareIT/src/services/fileTransferService.ts` | `src/modules/shareit/services/fileTransferService.ts` | Chunked DataChannel transfer with explicit Accept/Reject prompts. |
| **3-Tier Signaling Client** | `ShareIT/src/signaling/signalingClient.ts` | `src/modules/shareit/signaling/signalingClient.ts` | Global WSS MQTT relay (`broker.emqx.io`), WS, BroadcastChannel. |
| **Pure Landing Page UI Purity** | `ShareIT/src/components/landing/LandingPage.tsx` | `src/modules/shareit/components/landing/LandingPage.tsx` | Exact match to specification: Start Sharing & Join Code card. |

---

## 10. WEBSITE 10: SHORTSHUB
**Original Directory:** `ShortsHub/`  
**Dedicated Platform Route:** `/#/site/shortshub`  
**Module Location:** `src/modules/shortshub/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **Strict 3 Languages Filter** | `ShortsHub/src/services/discovery/discoveryEngine.ts` | `src/modules/shortshub/services/discovery/discoveryEngine.ts` | Tamil (`ta`), English (`en`), Telugu (`te`). Any combination. |
| **Strict 4 Categories (NO Games/Tech)** | `ShortsHub/src/database/categories.json` | `src/modules/shortshub/database/categories.json` | Education, Fun & Entertainment, Family, Friends & Lifestyle. |
| **9:16 Vertical Video Player** | `ShortsHub/src/components/ShortsPlayer/ShortsPlayer.tsx` | `src/modules/shortshub/components/ShortsPlayer/ShortsPlayer.tsx` | Swipe up/down navigation, single-tap pause, double-tap favorite. |
| **Automatic Watchlist Capture** | `ShortsHub/src/services/storage/db.ts` | `src/modules/shortshub/services/storage/db.ts` | IndexedDB auto-recording on `YT.PlayerState.PLAYING`. |
| **SnapTube Multi-Format Batch Export** | `ShortsHub/src/services/sharing/exportService.ts` | `src/modules/shortshub/services/sharing/exportService.ts` | TXT, M3U playlist, CSV, JSON, and Web Share API. |
| **SnapTube Download Destination Guide** | `ShortsHub/src/components/DailyWatchlist/SnapTubeGuideModal.tsx` | `src/modules/shortshub/components/DailyWatchlist/SnapTubeGuideModal.tsx` | Step-by-step instructions for `Internal Storage/Download/YTD/`. |
| **Curator Content Editor Modal** | `ShortsHub/src/components/ContentEditor/ContentEditorModal.tsx` | `src/modules/shortshub/components/ContentEditor/ContentEditorModal.tsx` | In-app tool to add video IDs, tags, JSON import/export. |

---

## 11. WEBSITE 11: NCERT CARTOON ACADEMY (Study)
**Original Directory:** `Study/`  
**Dedicated Platform Route:** `/#/site/study`  
**Module Location:** `src/modules/study/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **NCERT Curriculum Mapping (Class 1-12)** | `Study/js/ncert-curriculum.js` | `src/modules/study/js/ncert-curriculum.js` | 5 stages: Foundational, Preparatory, Middle, Secondary, Senior. |
| **Black & White Comic Strip Stories** | `Study/js/comic-stories.js`, `comic-renderer.js` | `src/modules/study/js/` | Sunday comic panels with speech bubbles and inline vector SVG art. |
| **English Character Voice Narrator** | `Study/js/audio-narrator.js` | `src/modules/study/js/audio-narrator.js` | Web Speech TTS with profiles (Prof. Paws, Pixel Bot, Sparky). |
| **Procedural Cartoon Audio SFX** | `Study/js/audio-narrator.js` | `src/modules/study/js/audio-narrator.js` | Web Audio API boing, pop, fanfare, buzzer, page flip sounds. |
| **6 Tactile Interactive Mini-Labs** | `Study/js/interactive-labs.js` | `src/modules/study/js/interactive-labs.js` | Shape Sorter, Photosynthesis, Pizza Fractions, Circuits, F=ma, Ohm's Law. |
| **MCQ Checkpoint Quiz Engine** | `Study/js/quiz-engine.js` | `src/modules/study/js/quiz-engine.js` | Spoken question button, immediate audio feedback, NCERT explanations. |
| **Parent Learning Hub & Dinner Prompts** | `Study/js/parent-dashboard.js` | `src/modules/study/js/parent-dashboard.js` | Progress metrics, conversation starters, badges catalog. |
| **Printable Black & White Diploma** | `Study/js/parent-dashboard.js`, `css/comic-theme.css` | `src/modules/study/` | Personalized certificate with academy seal and character signatures. |

---

## 12. WEBSITE 12: WEBFORGE STUDIO (WebBuilder)
**Original Directory:** `WebBuilder/`  
**Dedicated Platform Route:** `/#/site/webbuilder`  
**Module Location:** `src/modules/webbuilder/`  

| Feature / Subsystem from Original Prompt | Original Implementation File | Unified Platform Implementation Path | Status & Notes |
|------------------------------------------|------------------------------|--------------------------------------|----------------|
| **55 Production Block Registry** | `WebBuilder/packages/block-registry/` | `src/modules/webbuilder/packages/block-registry/` | 16 categories: Navbars, Heroes, Features, Pricing, Forms, etc. |
| **Visual Canvas & Viewport Switcher** | `WebBuilder/apps/studio/src/components/canvas/` | `src/modules/webbuilder/components/canvas/` | Desktop (1280px), Tablet (768px), Mobile (375px) with 50-150% zoom. |
| **Relational Database & Schema Designer** | `WebBuilder/apps/studio/src/components/panels/DatabasePanel.tsx` | `src/modules/webbuilder/components/panels/DatabasePanel.tsx` | Tables, columns, foreign keys, and PostgreSQL RLS policies. |
| **12 Full-Stack Starter Templates** | `WebBuilder/packages/template-registry/` | `src/modules/webbuilder/packages/template-registry/` | Consulting, SaaS, Agency, Portfolio, Bistro, Academy, ERP, CRM, etc. |
| **UUID-Safe Template Installer** | `WebBuilder/packages/template-registry/src/installer.ts` | `src/modules/webbuilder/packages/template-registry/installer.ts` | Deep clone with fresh UUID generation for all entities and foreign keys. |
| **Multi-Target Code Generation** | `WebBuilder/packages/codegen/` | `src/modules/webbuilder/packages/codegen/` | Target A (Next.js 14 + Supabase), Target B (PHP 8 + MySQL), Target C (Static). |
| **1-Click JSZip Project Packaging** | `WebBuilder/packages/codegen/src/packager/zip-packager.ts` | `src/modules/webbuilder/packages/codegen/zip-packager.ts` | Packages generated files into client-side downloadable ZIP blob. |
| **Autonomous AI Co-Pilot Assistant** | `WebBuilder/apps/studio/src/ai/ai-generator.ts` | `src/modules/webbuilder/ai/ai-generator.ts` | Natural language theme transformer, block injector, and DB modeler. |
| **Monochrome Noir & Cyber Slate Presets** | `WebBuilder/packages/schema/src/theme.ts` | `src/modules/webbuilder/packages/schema/theme.ts` | Dual theme engine compatible with the platform's multi-theme system. |

---
*End of Feature Mapping Document.*

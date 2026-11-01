# ShortsHub 🎬

[![Deploy to GitHub Pages](https://github.com/sv007git/ShortsHub/actions/workflows/deploy.yml/badge.svg)](https://github.com/sv007git/ShortsHub/actions/workflows/deploy.yml)

A high-performance, mobile-first, installable Progressive Web App (PWA) designed for viewing and collecting curated YouTube Shorts exclusively in **Tamil (தமிழ்)**, **English**, and **Telugu (తెలుగు)**.

- **GitHub Repository**: [https://github.com/sv007git/ShortsHub](https://github.com/sv007git/ShortsHub)
- **Live Deployment URL**: [https://sv007git.github.io/ShortsHub/](https://sv007git.github.io/ShortsHub/)

---

## 🌟 Key Highlights & Philosophy

- **Zero Accounts / Zero Trackers**: No Google sign-in or mandatory accounts.
- **Strictly Curated Content**: Only family-friendly, educational, entertaining, and inspirational Shorts.
- **Strict Category Boundaries**: Includes Education, Fun & Entertainment, Family, and Friends & Lifestyle. **Strictly NO Games and NO Technology sections**.
- **100% Client-Side Privacy**: Watch history, daily playlists, custom collections, and preferences are stored securely on-device using IndexedDB (Dexie.js).
- **Daily Watchlist & SnapTube Workflow**: Collects URLs of all watched videos throughout the day for manual batch downloading or sharing into SnapTube.

---

## 📱 User Journey

```
Open ShortsHub
  └──> Select Language(s) [Tamil, English, Telugu]
        └──> Watch Curated Vertical Shorts (Swipe Up/Down)
              └──> ShortsHub Automatically Saves Played URLs to Daily Playlist
                    └──> Open "Daily Watchlist"
                          └──> Select Videos (or Select All)
                                └──> Tap "Share to SnapTube" or "Copy URLs" or Export (TXT/M3U/CSV/JSON)
                                      └──> Complete Downloads Manually in SnapTube
```

---

## 🚀 Features Breakdown

### 1. Language Management
- **3 Languages Supported**:
  - Tamil (`தமிழ்`)
  - English (`English`)
  - Telugu (`తెలుగు`)
- **Flexible First-Launch Onboarding**: Choose any single language, combinations (e.g. Tamil + English), or all three.
- **Instant Filtering**: Language changes apply immediately without reloading the application.
- **Visual Indicators**: Color-coded badges and native script titles for all videos.

### 2. Curated Categories (No Games / No Tech)
1. **Education (`கல்வி` / `విద్య`)**:
   - General Knowledge, Science, Mathematics, History, Geography, Language Learning (English/Tamil/Telugu), Quiz Questions, Exam Knowledge, Brain Development, Moral Lessons.
2. **Fun and Entertainment (`நகைச்சுவை` / `హాస్యం`)**:
   - Comedy, Memes, Amazing Facts, Magic Tricks, Puzzles, Riddles, Brain Teasers, Challenges, Animations, Short Stories.
3. **Family (`குடும்பம்` / `కుటుంబం`)**:
   - Parenting, Children-Friendly Content, Cooking & Traditional Recipes, Home Tips, Life Lessons, Traditional Culture, Festivals.
4. **Friends and Lifestyle (`நட்பு` / `స్నేహం`)**:
   - Friendship, School & College Life, Travel, Motivation, Positive Thinking, Personal Development, Human Interest Stories.

### 3. Professional Full-Screen Shorts Player
- **9:16 Vertical presentation** optimized for Android smartphones.
- **Gestures**:
  - Swipe Up: Next video.
  - Swipe Down: Previous video.
  - Single Tap: Play / Pause.
  - Double Tap: Animated heart like effect + added to Favorites.
  - Desktop: Up/Down arrow keys or mouse wheel.
- **Playback Controls**:
  - Audio Mute / Unmute toggle.
  - Single active player instance to prevent audio overlaps.
  - Error and embed restriction handling (graceful fallback to YouTube link if creator disabled embedding).
  - Automatically records successfully played videos to the Daily Watchlist.

### 4. Daily Viewed Shorts Playlist (Core Mandatory Feature)
- Automatically records every short that starts playing:
  - Video ID, original YouTube URL (`https://www.youtube.com/shorts/{id}`), title, thumbnail, channel name, language, category, watch duration, timestamp.
- **Duplicate Handling**: By default, re-watching a video on the same day updates its last-viewed time and increments its view count while preserving the original view timestamp. (Configurable in settings to record separate sessions if preferred).
- **Date-Based Organization**: Easily navigate between Today's Shorts, Yesterday's Shorts, and previous historical dates.
- **Dashboard Stats**: Real-time counter of total watched videos, breakdown by language (Tamil, English, Telugu), and category counts.

### 5. SnapTube Manual Download Workflow
- **"DOWNLOAD TODAY'S SHORTS"** prominent action buttons.
- **Android Sharesheet**: Integrates with `navigator.share` allowing users to tap SnapTube directly from the native Android share dialog.
- **1-Click Copy**: Copies all selected video URLs to clipboard (SnapTube auto-detects clipboard links on Android).
- **Export Formats**:
  - **TXT**: `ShortsHub_YYYY-MM-DD.txt` (One video URL per line).
  - **M3U**: `ShortsHub_YYYY-MM-DD.m3u` (Playlist format with `#EXTM3U` and `#EXTINF` metadata).
  - **CSV**: `ShortsHub_YYYY-MM-DD.csv` (Spreadsheet with date, time, title, language, category, channel, and URL).
  - **JSON**: `ShortsHub_YYYY-MM-DD.json` (Structured JSON representation).
- **Recommended SnapTube Storage**:
  - `Internal Storage/Download/YTD/`
- *Note: ShortsHub operates strictly in compliance with web security guidelines and does not automate or force downloads.*

### 6. Search, Library & Personalization
- **Instant Search**: Filter by keyword across titles, channels, tags, categories, subcategories, and languages.
- **Favorites**: Quickly access liked Shorts.
- **Custom Playlists**: Create, reorder, and manage personalized playlists.
- **Data Export & Restore**: Complete offline JSON backup and restore functionality.
- **Daily Reminder**: Optional 9:00 PM reminder (Web Notifications API) reminding users to review and download today's playlist.

### 7. Progressive Web App (PWA)
- Installable on Android via Chrome's *Add to Home Screen / Install App*.
- Offline application shell caching via Service Worker (Workbox).
- Custom icons (192px, 512px, maskable 512px).
- Standalone display with portrait orientation lock.

---

## 🛠️ Technical Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Tooling**: Vite 6
- **Styling**: Tailwind CSS with custom dark mode palette
- **Icons**: Lucide React
- **Local Storage**: IndexedDB (Dexie.js)
- **PWA & Caching**: `vite-plugin-pwa` with Workbox
- **Player API**: Official YouTube IFrame Player API
- **Testing**: Vitest with React Testing Library and `fake-indexeddb`
- **CI/CD**: GitHub Actions deploying to GitHub Pages

---

## 📂 Project Structure

```
ShortsHub/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated CI/CD
├── public/
│   ├── icons/
│   │   ├── icon.svg
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── icon-maskable-512.png
│   ├── 404.html                # Single Page App routing fallback
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── BottomNavigation/   # 5-tab responsive navigation
│   │   ├── ContentEditor/      # Local curator & JSON importer/exporter
│   │   ├── DailyWatchlist/     # SnapTube guide modal & exports
│   │   ├── LanguageSelector/   # 3-language selector & presets
│   │   ├── ShortsPlayer/       # Fullscreen vertical gesture player
│   │   └── VideoCard/          # 9:16 aspect preview cards
│   ├── database/
│   │   ├── categories.json     # 4 categories + subcategories (NO Games/Tech)
│   │   └── curated-videos.json # Curated Tamil, English & Telugu Shorts
│   ├── pages/
│   │   ├── Categories/         # Category browsing & subtopic explorer
│   │   ├── DailyWatchlist/     # Daily playlist, stats, and download actions
│   │   ├── Explore/            # Search & multi-parameter filtering
│   │   ├── Home/               # Top shortcuts, For You, & categorized feeds
│   │   └── Library/            # Favorites, custom playlists, settings
│   ├── services/
│   │   ├── discovery/          # Filtering & personalized recommendations
│   │   ├── sharing/            # TXT, M3U, CSV, JSON export & Web Share
│   │   ├── storage/            # IndexedDB schema & duplicate manager
│   │   └── youtube/            # YouTube IFrame API loader
│   ├── test/                   # Automated Vitest test suites
│   ├── types/                  # TypeScript data interfaces
│   ├── App.tsx                 # Core coordinator component
│   ├── index.css               # Tailwind CSS & safe-area directives
│   └── main.tsx                # React root mount
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts              # Configured base: '/ShortsHub/'
```

---

## 💻 Local Development & Testing

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Run Automated Tests
```bash
npm run test
```

### 4. Build Production Bundle
```bash
npm run build
```

---

## 🌐 GitHub Pages Deployment Instructions

1. Push all code to the `main` branch of `https://github.com/sv007git/ShortsHub`:
   ```bash
   git add .
   git commit -m "feat: complete ShortsHub curated player implementation"
   git push origin main
   ```
2. In the GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The `.github/workflows/deploy.yml` workflow will automatically run tests, build the application with base path `/ShortsHub/`, and publish the site to:
   **`https://sv007git.github.io/ShortsHub/`**

---

## ⚖️ License & Disclaimer

ShortsHub is an educational and curated viewer interface designed to respect creator content and user privacy. All embedded videos stream directly from YouTube's official player in accordance with YouTube Terms of Service. Downloads via SnapTube are performed manually by the user outside the application.

# InviteDecide — Setup Guide

This guide walks through cloning, configuring, and running InviteDecide locally and connecting it to Supabase.

## 1. Prerequisites

- **Node.js**: v18+ (v20+ recommended)
- **npm**: v9+
- **Git**
- Modern web browser (Chrome, Safari, Edge, Firefox) with camera access for QR scanning.

## 2. Local Installation

```bash
# Clone the repository
git clone https://github.com/sv007git/InviteDecide.git
cd InviteDecide

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
```

## 3. Environment Variables Configuration

Open `.env` and configure:

```env
VITE_SUPABASE_URL=https://oruybhfodbbjpfvipoqk.supabase.co
VITE_SUPABASE_ANON_KEY=<your_supabase_anon_public_key>
VITE_APP_URL=http://localhost:5173
```

> **Note on Demo Mode**: InviteDecide includes an intelligent dual-mode backend layer. If `VITE_SUPABASE_ANON_KEY` is not yet populated, the application runs seamlessly in **Interactive Enterprise Demo Mode**, initialized with the complete **"InviteDecide Wedding Demo"** (500 families, 1,000+ attendees, menus, time slots, floor plan, and QR passes) so all UI, calculations, check-ins, and exports can be verified immediately!

## 4. Running the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 5. Running Automated Tests

```bash
# Run unit & integration test suites
npm test

# Run tests in watch mode
npm run test:watch
```

## 6. Building for Production

```bash
npm run build
```

The compiled assets will be output to `dist/`, ready for static deployment to GitHub Pages or any CDN.

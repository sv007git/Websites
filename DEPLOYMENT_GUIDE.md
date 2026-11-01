# WEBSITES — GitHub Pages & Production Deployment Guide

## 1. Overview

The **WEBSITES** platform is engineered specifically for automated continuous delivery to **GitHub Pages** using GitHub Actions, backed by a unified **Supabase** cloud backend.

- **Repository:** `https://github.com/sv007git/Websites`
- **Production URL:** `https://sv007git.github.io/Websites/`
- **Hosting Tier:** GitHub Pages (Static Web Hosting with client-side SPA routing)
- **Database / Auth:** Shared Supabase Managed PostgreSQL Instance

---

## 2. GitHub Pages Deployment Architecture

GitHub Pages is a static file host. To support single-page application (SPA) routing, deep module links, and theme persistence without server-side routing software (like Nginx or Apache), the platform implements a dual-layer strategy:

1. **Hash-Based Router (`HashRouter`):**
   - URL schema: `https://sv007git.github.io/Websites/#/site/<module-id>`
   - Hash changes are strictly client-side, preventing GitHub Pages 404 errors during page refreshes or bookmarking.
2. **SPA Redirect Fallback (`404.html`):**
   - In [`public/404.html`](file:///C:/Users/HARISH%20VYAS/Project/Websites/public/404.html), direct non-hash hits to paths like `/Websites/site/chat` are immediately intercepted and rewritten into `https://sv007git.github.io/Websites/#/site/chat`.
3. **Base Path Configuration:**
   - [`vite.config.ts`](file:///C:/Users/HARISH%20VYAS/Project/Websites/vite.config.ts) sets `base: '/Websites/'`, guaranteeing all JavaScript chunks, CSS assets, fonts, and module images are resolved correctly relative to the repository slug.

---

## 3. GitHub Actions Workflow

The automated deployment pipeline is defined in [`.github/workflows/deploy.yml`](file:///C:/Users/HARISH%20VYAS/Project/Websites/.github/workflows/deploy.yml).

### Workflow Trigger
- Automatically executes on every push to the `main` branch.
- Can be manually triggered via `workflow_dispatch` in the GitHub Actions tab.

### Step-by-Step Build Pipeline
1. **Source Checkout:** Fetches the latest commit from `main`.
2. **Node.js Setup:** Installs Node.js 20.x with npm caching enabled.
3. **Dependency Installation:** Runs `npm ci` for deterministic, clean package installation.
4. **Vite Production Build:** Executes `npm run build`, producing an optimized production bundle in `/dist`.
5. **Artifact Upload & Deployment:** Uses official GitHub actions `configure-pages`, `upload-pages-artifact`, and `deploy-pages` to publish `/dist` to the GitHub Pages environment.

---

## 4. GitHub Repository Configuration

To complete the production setup on GitHub:

### Step 1: Enable GitHub Pages in Repository Settings
1. Navigate to `https://github.com/sv007git/Websites/settings/pages`.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Save changes.

### Step 2: Configure Supabase Secrets (Optional but Recommended)
To connect your production Supabase database:
1. Navigate to `https://github.com/sv007git/Websites/settings/secrets/actions`.
2. Click **New repository secret**.
3. Add the following secrets:
   - `VITE_SUPABASE_URL`: Your Supabase Project URL (e.g., `https://xyzproject.supabase.co`).
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase public anonymous API key (`anon` key).
4. If secrets are not configured, the platform automatically defaults to mock/local offline demo mode with complete client-side functionality.

---

## 5. Local Verification Prior to Pushing

Before committing changes to `main`, verify the production build locally:

```bash
# 1. Install dependencies
npm install

# 2. Compile TypeScript and build production bundle
npm run build

# 3. Preview production bundle locally
npm run preview
```
Visit the local preview URL provided by Vite (typically `http://localhost:4173/Websites/`) to confirm smooth navigation across all 12 modules.

---

## 6. Troubleshooting Common Deployment Issues

| Symptom | Cause | Solution |
|---|---|---|
| Blank page with 404 in DevTools console | Vite base path mismatch | Ensure `base: '/Websites/'` is set in `vite.config.ts`. |
| 404 when directly opening deep links | GitHub Pages lacks dynamic URL rewriting | Rely on HashRouter routes (`/#/site/...`) or verify `public/404.html` is deployed in the site root. |
| Supabase Auth redirect fails | Redirect URL not whitelisted in Supabase | In Supabase Dashboard > Authentication > URL Configuration, add `https://sv007git.github.io/Websites/` to Additional Redirect URLs. |
| Asset 404 inside vanilla JS modules | Absolute `/` asset paths used instead of relative | Verify that vanilla modules (`Doctor`, `MyPage`, `Pujas`, `Study`) load assets from `modules/<module>/` relative paths. |
| Mixed content errors with WebRTC | Insecure HTTP signaling on an HTTPS origin | All WebRTC signaling (in `ShareIT` and `Chat`) uses secure WebSocket (`wss://`) and HTTPS endpoints. |

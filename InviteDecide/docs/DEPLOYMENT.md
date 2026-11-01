# InviteDecide — GitHub Pages Deployment Guide

InviteDecide is architected as a Client-Side Single Page Application (SPA) compatible with GitHub Pages hosting, utilizing `HashRouter` to prevent 404 navigation errors on page refreshes.

---

## 1. Automated GitHub Actions CI/CD Pipeline

The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml` which triggers automatically on every push to `main`.

### Every build run:
1. Checks out repository code.
2. Installs dependencies (`npm ci`).
3. Runs all 4 automated test suites (`npm test`).
4. Compiles the production bundle with base path `/InviteDecide/` (`npm run build`).
5. Generates `404.html` SPA routing fallback.
6. Automatically publishes the compiled bundle to the **`gh-pages`** branch.
7. Uploads the deployment artifact for GitHub Actions Pages engine.

---

## 2. One-Time GitHub Pages Activation in Repository Settings

For a newly created GitHub repository, GitHub requires the owner to activate Pages once:

1. Navigate to your repository settings:
   👉 **[https://github.com/sv007git/InviteDecide/settings/pages](https://github.com/sv007git/InviteDecide/settings/pages)**
2. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **`gh-pages`** and folder **`/ (root)`**
   - Click **Save**.
   *(Alternatively, if you prefer native GitHub Actions deployment, select **GitHub Actions** as the Source).*
3. Within 60 seconds, your site will be live at:
   👉 **[https://sv007git.github.io/InviteDecide/](https://sv007git.github.io/InviteDecide/)**

---

## 3. Optional Environment Secrets

In GitHub repository settings under **Settings > Secrets and variables > Actions**:
- `VITE_SUPABASE_URL`: `https://oruybhfodbbjpfvipoqk.supabase.co`
- `VITE_SUPABASE_ANON_KEY`: `<Your Supabase Public Anon Key>`

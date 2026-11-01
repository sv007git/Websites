# WebForge Studio: Deploying Next.js 14 + Supabase Applications (Target A)

This guide provides step-by-step production deployment instructions for applications exported with **Target A (Next.js 14 App Router + Supabase / PostgreSQL)**.

---

## 1. Prerequisites
* A [Vercel](https://vercel.com) or [Netlify](https://netlify.com) account
* A [Supabase](https://supabase.com) project (Free tier or Pro)
* The exported application `.zip` archive from WebForge Studio

---

## 2. Deploying to Vercel

### Step 1: Connect GitHub
1. Unzip the exported archive and push to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit from WebForge Studio"
   git remote add origin https://github.com/your-username/your-app.git
   git push -u origin main
   ```
2. Log in to Vercel, click **Add New... -> Project**, and import the repository.

### Step 2: Configure Environment Variables
In the Vercel project configuration, add:
* `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL (`https://your-project.supabase.co`)
* `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase public anonymous key
* `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: (Optional) Your Stripe publishable key

### Step 3: Database Migrations
1. In the Supabase Web Dashboard, go to **SQL Editor**.
2. Run the generated script: `supabase/migrations/00001_initial_schema.sql`.
3. Verify your tables are created and Row Level Security is active.

### Step 4: Click Deploy
Vercel will build the Next.js App Router application and assign a production URL (e.g., `https://your-app.vercel.app`).

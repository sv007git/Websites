# WebForge Studio: Database Setup & Migrations Guide

## Database Architecture Overview

WebForge Studio provides a visual data modeling workspace that compiles directly into standard SQL migration scripts. It supports two primary relational database engines:
1. **PostgreSQL 15+** (Supabase native target with Row Level Security)
2. **MySQL 8.0+ / MariaDB 10.5+** (Self-hosted PHP PDO target)

---

## 1. Setting Up Supabase (PostgreSQL)

When you export a project targeting **Next.js + Supabase**, the compiler generates:
* `supabase/migrations/00001_initial_schema.sql`
* `supabase/seed.sql`

### Option A: Via Supabase Web Dashboard
1. Log in to [supabase.com](https://supabase.com) and create a project.
2. Navigate to **SQL Editor** in the left sidebar.
3. Open `supabase/migrations/00001_initial_schema.sql`, paste the contents, and click **Run**.
4. (Optional) Open `supabase/seed.sql` and run it to populate sample records.
5. In **Project Settings -> API**, copy your **Project URL** and **anon public key** into your `.env.local` file.

### Option B: Via Supabase CLI
```bash
# Initialize local Supabase
npx supabase init

# Start local Dockerized Postgres, Auth, and Studio
npx supabase start

# Apply generated migrations
npx supabase db reset
```

---

## 2. Row Level Security (RLS) Policy Design

WebForge Studio enforces Row Level Security by default. For example, for a `subscriptions` table:

```sql
-- Enable RLS
ALTER TABLE public."subscriptions" ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to view only their own records
CREATE POLICY "Owner Read Only"
  ON public."subscriptions"
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Allow administrative users full access
CREATE POLICY "Admin Full Access"
  ON public."subscriptions"
  FOR ALL
  TO admin
  USING (true);
```

---

## 3. Setting Up MySQL / MariaDB (Target B)

When compiling to **PHP 8.x + MySQL**, the compiler generates:
* `database/schema.sql`
* `database/seed.sql`

### Quick Start via Docker
```bash
docker compose up -d
```
The MySQL container automatically mounts `database/schema.sql` into `/docker-entrypoint-initdb.d/` on initialization, bootstrapping the tables and sample seed records automatically.

### Manual Import via CLI
```bash
mysql -u root -p -h 127.0.0.1 webforge_app < database/schema.sql
mysql -u root -p -h 127.0.0.1 webforge_app < database/seed.sql
```

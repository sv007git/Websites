# WebForge Studio: Code Generation Engine Design

## Overview

A core architectural tenet of WebForge Studio is **Zero Vendor Lock-in**. Exported projects must be 100% standalone software deliverables that compile and run independently without depending on private WebForge APIs or proprietary cloud subscriptions.

---

## Dual Compilation Targets

```mermaid
flowchart TD
    AST[Canonical Project AST] --> Engine[@webforge/codegen]
    Engine --> TargetA[Target A: Next.js + Supabase]
    Engine --> TargetB[Target B: PHP 8.x + MySQL]
    Engine --> TargetC[Target C: Static HTML]

    TargetA --> NextFiles[app/page.tsx, components, tailwind]
    TargetA --> SupaFiles[supabase/migrations/00001.sql with RLS]
    TargetA --> SupaClient[lib/supabase/client.ts]

    TargetB --> PhpRouter[public/index.php & Router.php]
    TargetB --> PhpDB[src/Database.php with PDO]
    TargetB --> MySqlDDL[database/schema.sql]
    TargetB --> DockerCompose[docker-compose.yml]

    TargetC --> StaticPages[index.html, about.html, etc.]
```

### Target A: Modern Next.js 14 App Router + Supabase

* **Framework**: Next.js 14+ (App Router architecture with React Server Components)
* **Language**: TypeScript with strict mode
* **Styling**: Tailwind CSS configured with the project's global design tokens
* **Database & BaaS**: Supabase / PostgreSQL:
  * Generates native SQL migrations in `supabase/migrations/00001_initial_schema.sql`
  * Strict Row Level Security policies created for all tables
  * Typed Supabase client in `lib/supabase/client.ts`
  * API route handlers in `app/api/[table]/route.ts`
* **Artifact**: Complete repository ready for Vercel, Netlify, or Docker deployment.

### Target B: Self-Hosted PHP 8.x + MySQL / MariaDB

* **Architecture**: Clean, dependency-free MVC / Front-Controller architecture:
  * `public/index.php`: Unified entry point and route dispatcher
  * `public/.htaccess`: Apache rewrite rules for clean URLs
  * `src/Router.php`: Lightweight, performant HTTP request router
  * `src/Database.php`: PDO prepared statement executor with UTF8MB4 encoding and error mode exception handling
  * `src/Auth.php`: Bcrypt password hashing (`PASSWORD_BCRYPT`), secure HTTP-only session cookies, and CSRF token verification
* **Database**: Native MySQL 8.x DDL in `database/schema.sql` with foreign keys, indexes, and sample seeds in `database/seed.sql`
* **Docker Containerization**: Includes a production-ready `docker-compose.yml` linking PHP 8.2 Apache to MySQL 8.0.
* **Compatibility**: Runs out-of-the-box on standard cPanel, shared hosting, Apache/Nginx VPS, or Docker.

### Target C: Pure Static HTML / CSS

* **Use Case**: Informational brochures, portfolios, and static marketing landing pages.
* **Architecture**: Zero server dependencies. Generates static `index.html` and sub-pages styled with Tailwind CSS, ready to deploy to GitHub Pages, AWS S3, or Cloudflare Pages.

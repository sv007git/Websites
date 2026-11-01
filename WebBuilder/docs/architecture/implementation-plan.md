# WebForge Studio: Master Implementation Plan

## 1. Project Overview & Architecture Blueprint

**WebForge Studio** is a production-grade, Mobirise-style visual website and full-stack application builder. It allows users to build multi-page websites and data-driven web applications through an intuitive drag-and-drop interface, visually model databases and APIs, customize styles, and export 100% standalone production-ready codebases targeting either:
* **Target A**: Next.js 14+ / TypeScript / Tailwind CSS / Supabase (PostgreSQL with RLS)
* **Target B**: Modern PHP 8.x / MySQL / MariaDB (Clean MVC, PDO, CSRF/Auth)

### Monorepo Structure

```
WebBuilder/
├── apps/
│   ├── studio/                 # Main visual builder application (React + Vite + Tailwind)
│   ├── preview/                # Isolated project preview runtime
│   └── api/                    # Builder backend, project persistence, AI proxy & export engine
├── packages/
│   ├── schema/                 # Canonical project AST, component definitions, database models
│   ├── editor-core/            # Drag-and-drop engine, undo/redo history, selection & canvas state
│   ├── block-registry/         # 50+ fully customizable blocks across 16 categories
│   ├── template-registry/      # 12 complete full-stack multi-page templates
│   ├── design-system/          # Shared tokens, themes, Radix/Lucide icons & UI components
│   ├── codegen/                # Code generation engines for Next.js/Supabase and PHP/MySQL
│   ├── backend-adapters/       # Supabase client, SQL generator, MySQL generator, PDO engine
│   ├── integrations/           # GitHub, S3/storage, email, payment mock/test adapters
│   └── testing/                # Shared test fixtures, mock projects, assertion helpers
├── templates/                  # Template raw assets and metadata manifests
│   ├── business/
│   ├── saas/
│   ├── agency/
│   ├── portfolio/
│   ├── restaurant/
│   ├── education/
│   ├── blog/
│   ├── ecommerce/
│   ├── booking/
│   ├── crm/
│   ├── erp/
│   └── directory/
├── docs/                       # Architecture, setup, deployment, template authoring
└── package.json                # Root npm workspace configuration
```

---

## 2. Milestone Breakdown & Concrete Deliverables

### Milestone 1: Workspace Foundation & Canonical Project Schema
- Initialize root monorepo using npm workspaces with pinned, stable dependencies.
- Implement `@webforge/schema`:
  - `Project`, `Page`, `BlockInstance`, `ComponentProp`, `StyleRule`, `ResponsiveBreakpoints`
  - `DatabaseSchema`, `Table`, `Field`, `Relationship`, `RLSPolicy`, `ApiRoute`
  - Zod validation schemas and TypeScript type declarations.
- Implement `@webforge/design-system`:
  - Theme tokens (primary, secondary, accent, neutral, typography, spacing, radius)
  - Color palettes and dark/light mode configurations.
  - Core UI primitives (Button, Input, Select, Dialog, Tabs, Dropdown, Slider, Switch, Tooltip).
- Implement `@webforge/editor-core`:
  - State manager (Zustand + Immer) handling selection, active page, zoom, device mode (Desktop, Tablet, Mobile), undo/redo history stack, and autosave.

### Milestone 2: Professional Visual Editor Canvas & Inspector
- Build `apps/studio`:
  - Desktop-first application shell with left sidebar, central canvas, right inspector, and top toolbar.
  - Left navigation tabs: Projects, Templates, Pages & Navigation, Blocks & Components, Layers Tree, Media Assets, Database Designer, API Designer, Authentication & Permissions, Integrations, Settings.
  - Central canvas:
    - Responsive viewport toggle (Desktop: 1280px, Tablet: 768px, Mobile: 375px) with zoom (50% - 150%).
    - Drag-and-drop block placement, reordering, and drop-indicator feedback.
    - Inline text editing with immediate schema synchronization.
    - Component action overlay (Move Up, Move Down, Duplicate, Settings, Delete, Lock).
  - Right inspector tabs:
    - Content (dynamic prop inputs per block type)
    - Layout & Flex/Grid controls
    - Typography (font family, weight, size, line-height, alignment)
    - Colors & Backgrounds (solid, gradients, background image)
    - Spacing (margins, padding visual box-model editor)
    - Borders, Radii, Shadows
    - SEO & Accessibility metadata (alt tags, aria attributes, meta tags)
  - Top toolbar:
    - Project selector, page dropdown, undo/redo buttons, save status badge, preview trigger, AI assistant toggle, code view drawer, export modal, publish dialog.

### Milestone 3: 50+ Block Library & 12 Multi-Page Templates
- Implement `@webforge/block-registry`:
  - 50+ production-grade, responsive blocks across 16 categories:
    1. Navigation: Classic Navbar, Sticky Header, Mega Menu, Centered Brand Nav
    2. Hero Sections: Split Hero with Form, Video Hero, Minimalist SaaS Hero, App Showcase Hero
    3. Features & Grid: 3-Column Cards, Icon Grid, Alternating Media/Text, Bento Grid
    4. Statistics & Metrics: Counter Grid, KPI Badges, Metric Comparison
    5. Social Proof: Logo Cloud, Trust Badges, Press Mentions
    6. Testimonials: Card Carousel, Grid with Avatars, Quote Spotlight
    7. Team: Executive Grid, Bios with Socials, Compact Avatar List
    8. Services: Service Tier Cards, Interactive Tabbed Services
    9. Media & Gallery: Masonry Grid, Filterable Portfolio, Video Player Embed
    10. Pricing Tables: Tiered Switch (Monthly/Annual), Feature Comparison Matrix
    11. Calls to Action: Banner CTA, Floating Action Card, Split Conversion Section
    12. Forms: Multi-step Contact Form, Lead Capture, Newsletter Subscription
    13. Interactive: FAQs & Accordion, Tabbed Content, Milestone Timeline, Google Maps Embed
    14. Ecommerce & Booking: Product Card Grid, Shopping Cart Drawer, Checkout Summary, Booking Calendar
    15. Dynamic & Admin: Data Table with Pagination & Filtering, Account Profile Form, Analytics Overview Panel
    16. Footers: Multi-column Sitemap, Minimal Copyright Footer, Newsletter Footer
- Implement `@webforge/template-registry`:
  - 12 comprehensive multi-page templates:
    1. Business Services (Home, About, Services, Case Studies, Contact)
    2. SaaS Product (Home, Features, Pricing, Docs, Login, Sign Up)
    3. Digital Agency (Home, Work/Portfolio, Services, Agency Culture, Contact)
    4. Personal Portfolio (Home, Projects, Resume/Bio, Blog, Contact)
    5. Restaurant & Hospitality (Home, Menu, Reservation/Booking, Story, Location)
    6. Education & Online Courses (Home, Courses Catalog, Course Detail, Instructors, Enroll)
    7. Blog & Editorial Publishing (Home, Magazine Feed, Article Post, Author Bio, Categories)
    8. Ecommerce Storefront (Home, Shop Catalog, Product Detail, Cart/Checkout, Order Success)
    9. Appointment Booking (Home, Services, Calendar Scheduler, Confirmation, Contact)
    10. CRM Application (Dashboard, Contacts, Deals Pipeline, Activity Log, Settings)
    11. ERP & Administration (Overview, Inventory/Catalog, Invoices, Team Management, Audit Logs)
    12. Directory & Marketplace (Search Home, Listings Grid, Item Detail, Vendor Profile, Submit Listing)
  - Full template installation pipeline: deep clone, fresh UUID generation, asset remapping, editable in canvas.

### Milestone 4: Visual Database, API & Authentication Designer
- Visual Database Designer:
  - Table manager: add/edit/delete tables.
  - Column types: UUID, Text, Varchar, Integer, Float, Boolean, Date, Timestamp, JSONB, ForeignKey.
  - Constraints: Primary Key, Unique, Not Null, Default values.
  - Relationships: One-to-Many (1:N), Many-to-Many (N:M), One-to-One (1:1).
  - Row Level Security (RLS) Policy Editor: Select/Insert/Update/Delete rules for `anon` vs `authenticated`.
  - Visual Entity-Relationship (ER) diagram renderer.
- Visual API Designer:
  - Route builder (e.g. `/api/products`, `/api/bookings`, `/api/leads`).
  - Methods: GET, POST, PUT, DELETE.
  - Query parameters, request body schemas, and response status codes.
  - Auth protection flags (Public, Authenticated, Admin Only).
- Authentication & Roles:
  - User roles: Admin, Editor, Member, Customer.
  - Role-based route guard definitions.
  - Dynamic CRUD screen generator: instantly generates data table, filter bar, create modal, and edit form for any database model.

### Milestone 5: Dual Code Generation & Export Engine
- Implement `@webforge/codegen`:
  - **Target A Generator (Next.js 14 App Router + Supabase)**:
    - Generates complete repository with `package.json`, `tsconfig.json`, `tailwind.config.js`.
    - Generates `app/page.tsx`, `app/[route]/page.tsx`, `components/blocks/*.tsx`.
    - Generates `supabase/migrations/00001_initial_schema.sql` with full DDL, foreign keys, indexes, and RLS policies.
    - Generates `supabase/seed.sql` with realistic sample data.
    - Generates `lib/supabase/client.ts` and `lib/supabase/server.ts`.
    - Generates API route handlers `app/api/[route]/route.ts`.
  - **Target B Generator (PHP 8.x + MySQL/MariaDB)**:
    - Generates complete standalone PHP application:
      - `public/index.php` (Front controller & clean router)
      - `src/Controllers/`, `src/Models/`, `src/Views/` (Clean MVC structure)
      - `src/Database.php` (PDO with secure prepared statements)
      - `database/schema.sql` and `database/seed.sql`
      - `src/Auth.php` (Bcrypt password hashing, secure session management, CSRF tokens)
      - Tailwind / Bootstrap responsive views.
  - Static HTML/CSS/JS export for purely static informational sites.
  - ZIP packager using JSZip for one-click downloading of entire project source.

### Milestone 6: AI-Assisted Generation & Natural Language Editing
- Implement AI Generation Engine:
  - Provider-neutral AI interface supporting OpenAI, Gemini, Claude, and local mock/heuristic generators.
  - Prompt workflows:
    - Generate complete site from prompt ("Build a modern real estate agency site with property listings and inquiry form")
    - Add or replace sections ("Add a 3-tier pricing table with annual discount badge")
    - Style & Theme transformation ("Change palette to modern dark cyber with neon cyan accent")
    - Database model synthesis ("Create an appointments table with client_name, service, date, status, and notes")
  - Structured schema validation ensuring AI output adheres strictly to the canonical project schema.
  - Preview diff and confirmation step before applying changes to the live project.

### Milestone 7: Testing, Documentation & Production Verification
- Automated unit and integration tests with Vitest:
  - Schema validation and serialization
  - Block registration and property mapping
  - Undo/redo history operations
  - Code generation outputs for both Target A and Target B
  - Template instantiation and UUID remapping
- Comprehensive documentation:
  - `README.md`
  - `docs/architecture/`
  - `docs/setup/local-development.md`
  - `docs/deployment/supabase-nextjs.md`
  - `docs/deployment/php-mysql.md`
  - `docs/template-authoring/guide.md`
- End-to-end operational verification:
  - Build checks, type-checking, live editor execution, export verification.

# WebForge Studio 🛠️🚀

> **Production-Grade Visual Website & Full-Stack Application Builder**  
> *Combining the speed of Mobirise-style block assembly with the architectural power of a modern full-stack IDE.*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tests-21%20Passed-brightgreen?logo=vitest)](https://vitest.dev/)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=github)](https://sv007git.github.io/WebBuilder/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🌐 **Live Demo Hosted at**: [https://sv007git.github.io/WebBuilder/](https://sv007git.github.io/WebBuilder/)  
📦 **Repository**: [https://github.com/sv007git/WebBuilder](https://github.com/sv007git/WebBuilder)

---

## 🌟 Executive Overview

**WebForge Studio** is a complete, self-contained, open-source visual application builder designed to bridge the gap between simple static website generators and complex, code-heavy developer tools.

Inspired by visual builders like Mobirise, modern UI frameworks, and enterprise low-code platforms, WebForge Studio is built from the ground up as a **100% original, clean-room TypeScript monorepo**. Exported applications feature **zero vendor lock-in**, requiring no proprietary runtime libraries or paid subscriptions.

```
┌────────────────────────────────────────────────────────────────────────┐
│                          WEBFORGE STUDIO SHELL                         │
├─────────────────┬───────────────────────────────────┬──────────────────┤
│  LEFT SIDEBAR   │         CENTRAL CANVAS            │  RIGHT INSPECTOR │
│  ─────────────  │  ───────────────────────────────  │  ─────────────── │
│  • Pages (12)   │  • Desktop / Tablet / Mobile View │  • Content Props │
│  • Blocks (55)  │  • Drag-and-Drop Reordering       │  • Layout & Flex │
│  • Templates(12)│  • Inline Direct Text Editing     │  • Typography    │
│  • Database (DB)│  • Hover Selection Outlines       │  • Colors & BG   │
│  • APIs & Auth  │  • Insertion Indicators           │  • Spacing & Gap │
│  • AI Co-Pilot  │  • Live Viewport Scaler (50-150%) │  • RLS Policies  │
└─────────────────┴───────────────────────────────────┴──────────────────┘
                                   │
               ┌───────────────────┴───────────────────┐
               ▼                                       ▼
  Target A: Next.js 14 App Router        Target B: PHP 8.x + MySQL
  • TypeScript + Tailwind CSS            • Clean PSR-4 MVC Architecture
  • Supabase / PostgreSQL DDL            • PDO Prepared Statements
  • Row Level Security (RLS) Policies    • Docker Compose & Apache runtime
```

---

## 🏗️ Monorepo Architecture

The repository is organized as a modular TypeScript monorepo using standard **npm workspaces**:

```
WebBuilder/
├── apps/
│   ├── studio/              # Main desktop-first visual builder application (React + Vite)
│   ├── preview/             # Isolated, sandboxed project preview frame
│   └── api/                 # Builder backend service (Health, Schema Validation, ZIP Export)
├── packages/
│   ├── schema/              # Canonical AST schemas (Zod + TypeScript interfaces)
│   ├── design-system/       # Shared UI primitives, design tokens, and theme CSS injector
│   ├── editor-core/         # Reactive editor state management (Zustand + Immer)
│   ├── block-registry/      # 55 production blocks across 16 categories
│   ├── template-registry/   # 12 complete full-stack website templates + installer
│   ├── backend-adapters/    # PostgreSQL/Supabase DDL/RLS & MySQL/PHP MVC generators
│   ├── codegen/             # Dual code-generation engine (Next.js, PHP, Static HTML, JSZip)
│   ├── integrations/        # GitHub, Stripe Checkout, and Resend/SMTP email adapters
│   └── testing/             # Shared automated test suites (Vitest)
├── templates/               # Serialized multi-page starter templates with seed data
└── docs/                    # Exhaustive architectural, operational, and deployment manuals
```

---

## ⚡ Key Capabilities

### 1. Visual Block Editor
- **55 Built-in Production Blocks**: Spanning 16 categories (Navigation, Hero, Features, Statistics, Social Proof, Testimonials, Team, Services, Media & Sliders, Pricing, Calls to Action, Contact & Lead Forms, Interactive Tabs & FAQs, Ecommerce, Admin Panels, and Footers).
- **Responsive Viewport Simulator**: Seamlessly toggle between Desktop (`1280px`), Tablet (`768px`), and Mobile (`375px`) modes with an interactive zoom scale slider (`50%` to `150%`).
- **Direct Canvas Editing**: Inline click-to-edit for text headers and paragraphs, block insertion markers, and visual element reordering.
- **Deep Property Inspector**: Granular control over content fields, typography scales, color hex/token overrides, flexbox alignments, padding/margin dimensions, and border radius.
- **Undo / Redo & State Persistence**: Full history stack with automatic local storage persistence and versioned snapshots.

### 2. Visual Database & API Designer
- **Relational Schema Modeling**: Visually define tables, primary keys (`UUID`, `SERIAL`), foreign keys, constraints, and data types (`TEXT`, `INTEGER`, `BOOLEAN`, `JSONB`, `TIMESTAMP`).
- **Row Level Security (RLS)**: Configure enterprise-grade security policies (`SELECT`, `INSERT`, `UPDATE`, `DELETE`) with role-based restrictions directly in the UI.
- **REST API Endpoint Designer**: Construct API routes, methods (`GET`, `POST`, `PUT`, `DELETE`), authentication requirements, and mock responses.
- **Sample Seed Generation**: Automatic mock record creation for rapid frontend prototyping.

### 3. Complete Multi-Page Full-Stack Templates (12 Included)
Every starter includes cohesive global design tokens, responsive multi-page flows, working internal links, and full backend schemas with seed records:

| # | Template Name | Pages Included | Database Schema Included |
|---|---|---|---|
| 1 | **Business Services** | Home, About, Services, Contact | Inquiries, ServiceCatalog |
| 2 | **SaaS Product** | Home, Features, Pricing, Login, Signup | Users, Subscriptions, Features |
| 3 | **Digital Agency** | Home, Portfolio, Case Studies, Contact | Projects, Clients, Leads |
| 4 | **Personal Portfolio** | Home, Projects, Resume, Contact | Works, Testimonials, Messages |
| 5 | **Restaurant & Café** | Home, Menu, Reservations, Contact | MenuItems, Reservations, Orders |
| 6 | **Education & Courses**| Home, Courses, Syllabus, Enroll | Courses, Lessons, Enrollments |
| 7 | **Editorial & Blog** | Home, Articles, Categories, Author | Posts, Categories, Authors, Comments |
| 8 | **Ecommerce Storefront**| Home, Shop, Product Detail, Cart | Products, Categories, Orders, CartItems |
| 9 | **Appointment Booking**| Home, Schedule, Confirmation, Account | Services, Staff, Bookings |
| 10 | **CRM Application** | Dashboard, Contacts, Deals, Pipeline | Contacts, Companies, Deals, Activities |
| 11 | **ERP Administration** | Dashboard, Inventory, Vendors, Finance | InventoryItems, Suppliers, Transactions |
| 12 | **Marketplace / Directory**| Home, Listings, Detail, Post Listing | Listings, Categories, Reviews, Sellers |

### 4. Dual Target Code Generation & Export
Generate clean, production-grade source code with zero proprietary lock-in:

- **Target A: Next.js 14 App Router + Supabase**
  - Modern React Server/Client Components with TypeScript.
  - Tailwind CSS styling using project theme tokens.
  - Complete PostgreSQL DDL with Row Level Security (`auth.uid() = user_id`) policies.
  - Ready for instant deployment on Vercel, Netlify, or Docker.

- **Target B: Standalone PHP 8.x + MySQL / MariaDB**
  - Clean, secure MVC architecture following PSR-4 conventions.
  - Zero framework dependencies; runs out of the box on standard LAMP/LEMP stacks or cPanel.
  - Secure PDO database abstraction with parameterized SQL queries.
  - Bundled `Dockerfile` and `docker-compose.yml` for single-command local spin-up.

- **Target C: Static HTML / CSS**
  - Standalone, zero-dependency HTML files with compiled Tailwind utility styling.

- **Direct ZIP Export**: Single-click packaging via `JSZip` executed entirely in the client or backend API.

### 5. Autonomous AI Co-Pilot
- Integrated prompt-driven site generator capable of synthesizing complete multi-page wireframes, block hierarchies, and relational database schemas from natural language briefs.
- Generates valid, schema-compliant JSON structures ready for immediate canvas rendering and code generation.

---

## 📊 14-Repository Architecture & Licensing Review

Prior to implementation, an exhaustive evaluation of 14 leading visual builders and CMS frameworks was conducted to analyze architectural patterns, AST design, licensing constraints, and vendor risks.

| Repository | Primary License | Architecture Style | Strategy for WebForge Studio |
|---|---|---|---|
| **GrapesJS** | BSD-3-Clause | Canvas + Plugins | Adopted clean plugin-based registry concept; avoided its DOM-as-AST state model. |
| **Puck** | MIT | React Declarative Schema | **Core Influence**: Adopted component definition schema (`render` + `fields`). |
| **Webstudio** | AGPL-3.0 | CSS-first Visual Builder | Analyzed CSS AST token mapping; avoided AGPL licensing constraints. |
| **Silex** | GPL-3.0 | Static Site Builder | Reviewed drag-and-drop mechanics; avoided copyleft codebase contamination. |
| **Craft.js** | MIT | React Drag & Drop Canvas | Studied node hierarchy and component wrapping mechanisms. |
| **Appsmith** | Apache-2.0 | Low-code Internal Tool | Analyzed reactive entity binding and query runner architecture. |
| **Budibase** | AGPL-3.0 | Internal App Platform | Examined relational schema designer; avoided AGPL restrictions. |
| **ToolJet** | AGPL-3.0 | Internal Tool Builder | Reviewed plugin system and data connectors; avoided AGPL restrictions. |
| **Directus** | BSL-1.1 / MSCL | Database-as-API Headless CMS | Examined SQL introspection patterns; avoided non-compete commercial licenses. |
| **Supabase** | Apache-2.0 / MIT | Postgres BaaS + Auth | **Core Influence**: Adopted PostgreSQL DDL and RLS security model for Target A. |
| **Strapi** | Community (MIT/EE) | Headless Content Engine | Reviewed content-type builder schemas and REST controller generation. |
| **WordPress Gutenberg** | GPL-2.0 | Block-based Editor | Examined block grammar (`core/paragraph`); maintained clean MIT independence. |
| **Payload CMS** | MIT | Code-first Headless CMS | Examined TypeScript-first schema definitions and Next.js App Router pairing. |
| **VvvebJs** | Apache-2.0 | Standalone HTML Builder | Reviewed iframe synchronization and DOM mutation event bus. |

> 📖 **Full 32KB Architectural Report**: Consult [docs/architecture/repository-architecture-review.md](file:///c:/Users/HARISH%20VYAS/Projects/WebBuilder/docs/architecture/repository-architecture-review.md) for the exhaustive comparative study.

---

## 🚀 Quickstart & Local Development

### Prerequisites
- **Node.js**: `v20.x` or `v24.x` (tested on Node v24.20.0)
- **npm**: `v10.x` or `v11.x`

### Installation & Verification

```bash
# 1. Clone the repository
git clone https://github.com/your-org/webforge-studio.git
cd webforge-studio

# 2. Install workspace dependencies
npm install

# 3. Run the automated test suite (21 unit & integration tests)
npm test

# 4. Build all workspaces for production
npm run build

# 5. Launch the Visual Builder Studio
npm run dev
```

The studio will be available at: **`http://localhost:5173`**  
The isolated preview frame will run at: **`http://localhost:5174`**

---

## 🧪 Automated Test Verification

WebForge Studio includes a comprehensive test suite powered by **Vitest**:

```bash
$ npm test

 ✓ packages/testing/tests/schema.test.ts        (3 tests)
 ✓ packages/testing/tests/codegen.test.ts       (4 tests)
 ✓ packages/testing/tests/e2e-workflow.test.ts (6 tests)
 ✓ packages/testing/tests/templates.test.ts    (3 tests)
 ✓ packages/testing/tests/ai.test.ts           (2 tests)
 ✓ packages/testing/tests/blocks.test.ts       (3 tests)

 Test Files  6 passed (6)
      Tests  21 passed (21)
   Duration  1.48s
```

---

## 📚 Complete Documentation Index

Exhaustive guides and architectural specifications are located in the `docs/` directory:

| Section | Document | Description |
|---|---|---|
| **Architecture** | [repository-architecture-review.md](docs/architecture/repository-architecture-review.md) | 14-repo deep-dive, licensing matrix, and architectural decisions. |
| | [implementation-plan.md](docs/architecture/implementation-plan.md) | Master development roadmap and execution milestones. |
| | [er-diagram-and-schema.md](docs/architecture/er-diagram-and-schema.md) | Relational schema definitions, AST contracts, and RLS specifications. |
| | [code-generation-design.md](docs/architecture/code-generation-design.md) | AST compilation pipeline for Next.js 14 and PHP 8.x runtimes. |
| **Setup** | [local-development.md](docs/setup/local-development.md) | Step-by-step developer onboarding and environment configuration. |
| | [environment-variables.md](docs/setup/environment-variables.md) | Complete environment configuration matrix. |
| | [database-migrations.md](docs/setup/database-migrations.md) | Supabase/Postgres and MySQL migration workflows. |
| **Authoring** | [block-guide.md](docs/template-authoring/block-guide.md) | How to create, register, and theme custom visual blocks. |
| | [template-guide.md](docs/template-authoring/template-guide.md) | Authoring multi-page starter templates with relational seed schemas. |
| **Deployment** | [supabase-nextjs.md](docs/deployment/supabase-nextjs.md) | Production deployment guide for Next.js 14 + Supabase on Vercel. |
| | [php-mysql.md](docs/deployment/php-mysql.md) | Production deployment guide for PHP 8.x + MySQL on Apache/Docker. |
| | [security-guide.md](docs/deployment/security-guide.md) | OWASP top 10 safeguards, RLS hardening, and input sanitization. |
| **Testing** | [testing-guide.md](docs/testing/testing-guide.md) | Unit, integration, and E2E test execution instructions. |
| **Operations** | [troubleshooting-and-limitations.md](docs/troubleshooting-and-limitations.md) | Known operational constraints and troubleshooting steps. |

---

## 📄 License & Attribution

WebForge Studio is released under the **MIT License**.  
All schemas, blocks, templates, and code generation routines are original, clean-room implementations created specifically for this platform. Zero proprietary source code, trademarks, or copyrighted assets from evaluated reference tools are used.

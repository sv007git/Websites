# WebForge Studio: Comprehensive Architectural Review of 14 Reference Repositories

This document presents a repository-by-repository architectural analysis across 14 leading open-source page builders, low-code platforms, CMS engines, and BaaS systems. Each system is evaluated to extract architectural best practices, component serialization patterns, licensing boundaries, and strategic technical recommendations for **WebForge Studio**.

---

## 1. Repository-by-Repository Architectural Analysis

### 1.1 GrapesJS (`GrapesJS/grapesjs`)
* **Main Purpose & Architecture**: A client-side, extensible web builder framework designed to build HTML/CSS templates without server dependencies. Operates as an MVC-style engine managing an in-memory Abstract Syntax Tree (AST) representing DOM elements and CSS rules.
* **Frontend & Backend Technologies**: Core written in TypeScript/JavaScript (historically built with Backbone.js event-driven primitives). Client-side only; backend agnostic (connects via standard HTTP/JSON storage adapters).
* **Relevant Features & Implementation Locations**:
  * Canvas rendering in an isolated `iframe` (`src/canvas`)
  * Component and DOM Model manager (`src/dom_components`)
  * CSS Rule and Style manager with media query breakpoints (`src/style_manager`)
  * Drag-and-drop block library (`src/block_manager`)
  * Storage and persistence plugins (`src/storage_manager`)
* **Component & Template Systems**: Blocks produce HTML strings or component definitions (`{ tagName, attributes, components, styles }`). Templates are composite component trees serialized to HTML + CSS strings or JSON component models.
* **Data Storage & Project Serialization**: Dual serialization format:
  1. Lossless JSON model (`projectData: { pages, styles, symbols, assets }`).
  2. Lossy static export (`getHtml()`, `getCss()`).
* **Build & Deployment Approach**: Bundled via Webpack/Rollup; published as an npm library (`grapesjs`) embeddable into any frontend application.
* **Reusable Packages & Extension Points**: Rich plugin ecosystem (`grapesjs-preset-webpage`, `grapesjs-blocks-basic`, `grapesjs-plugin-forms`). Plugin API exposes hook points: `editor.Panels`, `editor.BlockManager`, `editor.Commands`.
* **License & Redistribution Implications**: **BSD-3-Clause**. Highly permissive; permits commercial use, redistribution, and modification provided copyright notice is preserved.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: Breakpoint-aware CSS cascading model and isolated `iframe` canvas rendering.
  * *Reimplement independently*: Component model in modern React state (Zustand/Immer) rather than Backbone-style observables to enable React component rendering.
  * *Avoid*: Direct raw HTML/CSS string storage as the canonical state; modern builders must maintain a strictly typed, framework-agnostic AST.

---

### 1.2 Puck (`puckeditor/puck`)
* **Main Purpose & Architecture**: A modern React-first visual editor for headless and component-driven CMS architectures. Directly maps visual drag-and-drop components to actual React components.
* **Frontend & Backend Technologies**: React 18/19, TypeScript, Tailwind CSS / modern CSS modules. Fully headless frontend component; can run on Next.js, Remix, Vite, or Astro.
* **Relevant Features & Implementation Locations**:
  * Component configuration contract `ComponentConfig<Props>` (`packages/core/types/Config.ts`)
  * DropZone and Slot-based nesting (`packages/core/components/DropZone`)
  * Centralized reducer-based state machine (`packages/core/reducer`)
  * Dynamic prop inspector derived from component field definitions (`packages/core/components/AutoField`)
* **Component & Template Systems**: Components are defined as pure TypeScript objects pairing a React render function with an input field schema (`fields: { title: { type: "text" }, items: { type: "array" } }`).
* **Data Storage & Project Serialization**: Clean, structured JSON document:
  ```json
  {
    "root": { "props": { "title": "Home" } },
    "content": [
      { "type": "Hero", "props": { "heading": "Welcome" } },
      { "type": "Features", "props": { "items": [] } }
    ],
    "zones": {}
  }
  ```
* **Build & Deployment Approach**: Monorepo managed with Turborepo and pnpm; published as `@measured/puck` on npm.
* **Reusable Packages & Extension Points**: `@measured/puck` (core editor UI and runtime renderer). Pluggable plugins via `plugins` prop for custom headers, viewports, and custom field inputs.
* **License & Redistribution Implications**: **MIT License**. Highly permissive, free for commercial use.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt*: The declarative component configuration pattern (`render` + `fields`), structured JSON schema, and slot/zone nesting.
  * *Reimplement independently*: Multi-page routing, global theme token management, and full-stack backend integrations (which Puck deliberately leaves out of scope).
  * *Avoid*: Heavy reliance on client-only state without native database persistence.

---

### 1.3 Webstudio (`webstudio-is/webstudio`)
* **Main Purpose & Architecture**: Open-source, production-grade visual website builder competing directly with Webflow. Compiles visual layout directly to standard CSS layout engine and modern web standards.
* **Frontend & Backend Technologies**: Remix (React), Radix UI, TypeScript, Prisma ORM, PostgreSQL, Tailwind CSS, custom CSS-in-JS style engine.
* **Relevant Features & Implementation Locations**:
  * CSS AST engine supporting cascade, pseudo-classes, and responsive breakpoints (`packages/css-engine`)
  * Canvas synchronizer via postMessage/broadcast (`packages/project-canvas`)
  * Radix-driven precision design inspector (`packages/design-system`, `apps/builder`)
  * Headless SDK for rendering (`packages/sdk`)
* **Component & Template Systems**: Component tree built on primitive HTML/Radix nodes with attached style rules and properties. Templates are serialized project snapshots containing assets, styles, instances, and pages.
* **Data Storage & Project Serialization**: Granular relational entity storage in PostgreSQL (Projects, Pages, Breakpoints, StyleSources, Instances) serialized to normalized JSON.
* **Build & Deployment Approach**: Turborepo, pnpm workspaces, Docker deployment, deployable to Vercel, Netlify, or self-hosted Docker containers.
* **Reusable Packages & Extension Points**: Granular packages: `@webstudio-is/sdk`, `@webstudio-is/css-engine`, `@webstudio-is/design-system`.
* **License & Redistribution Implications**: **AGPL-3.0** for application code; select utility packages under **MIT**. AGPL-3.0 requires derivative hosted network software to open-source its modifications.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: The rigorous CSS style tree model (box model, flex, grid, responsive styles) and separation of canvas from inspector.
  * *Reimplement independently*: A cleaner, permissively licensed (MIT) token and style schema without AGPL contamination.
  * *Avoid*: Extremely heavy monorepo complexity and tight coupling to Remix and Prisma internals.

---

### 1.4 Silex (`silexlabs/Silex`)
* **Main Purpose & Architecture**: Free, open-source static website builder ("the alternative to Wix/Squarespace") focusing on open standards, static site export, and multi-provider hosting.
* **Frontend & Backend Technologies**: Browser-based JavaScript/TypeScript, Node.js/Express backend server, ProseMirror for inline rich-text editing, static hosting connectors (FTP, GitHub, GitLab).
* **Relevant Features & Implementation Locations**:
  * Absolute and flex layout options (`src/client/js/view/stage`)
  * Rich-text editor integration (`src/client/js/view/text-editor`)
  * Multi-target hosting and publisher system (`src/server/publishers`)
* **Component & Template Systems**: HTML/DOM-based templates with semantic sections, CSS classes, and inline styles.
* **Data Storage & Project Serialization**: Saved directly as standard HTML documents with embedded metadata (`<script type="application/json" id="silex-data">`), making raw pages inspectable in standard browsers.
* **Build & Deployment Approach**: Node.js microservice architecture, npm scripts, deployable on Cloud hosting or self-hosted Docker.
* **Reusable Packages & Extension Points**: Extension system for third-party hosting connectors, widgets, and form handlers.
* **License & Redistribution Implications**: **GPL-3.0**. Restricts closed-source commercial redistribution of the builder itself.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: Flexible hosting provider export adapters (GitHub, zip export, static hosting).
  * *Reimplement independently*: Modern block-based modular JSON schema instead of embedding JSON state into static HTML files.
  * *Avoid*: Absolute positioning paradigms (which break responsive layouts) and GPL copyleft code.

---

### 1.5 Craft.js (`prevwong/craft.js`)
* **Main Purpose & Architecture**: A headless React framework for building drag-and-drop page builders. Decouples editor state management and drag-and-drop event handling from the visual presentation.
* **Frontend & Backend Technologies**: Pure React, TypeScript, Immer, custom use-methods reactive state store. Backend agnostic.
* **Relevant Features & Implementation Locations**:
  * Node tree state management (`packages/core/src/nodes`)
  * Drag-and-drop orchestration (`packages/core/src/events`)
  * Component decorator contract (`UserComponent.craft = { rules, related }`)
  * `<Canvas>` and `<Frame>` rendering boundaries (`packages/core/src/editor`)
* **Component & Template Systems**: Any React component is turned into an editable component by attaching a `.craft` configuration object defining drop rules and settings panels.
* **Data Storage & Project Serialization**: Serializes to a normalized node dictionary:
  ```json
  {
    "ROOT": { "type": "Container", "nodes": ["node-1", "node-2"], "props": {} },
    "node-1": { "type": "Text", "parent": "ROOT", "props": { "text": "Hello" } }
  }
  ```
* **Build & Deployment Approach**: Lerna/npm monorepo; distributed as `@craftjs/core` and `@craftjs/utils`.
* **Reusable Packages & Extension Points**: Core library provides hooks: `useNode()`, `useEditor()`.
* **License & Redistribution Implications**: **MIT License**. Permissive and commercial-friendly.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: Headless design pattern separating state from UI; normalized Node map serialization.
  * *Reimplement independently*: Modern HTML5 / Pointer Drag-and-Drop system with accessible keyboard alternatives.
  * *Avoid*: Direct reliance on Craft.js's aging drag-and-drop internals (which can suffer from performance degradation on large DOM trees).

---

### 1.6 Appsmith (`appsmithorg/appsmith`)
* **Main Purpose & Architecture**: Enterprise low-code platform for building internal tools, database GUIs, and operational dashboards.
* **Frontend & Backend Technologies**:
  * Frontend: React, Redux, Redux-Saga, TypeScript, Blueprint UI, Tailwind CSS, Web Workers (for safe sandboxed JS evaluation).
  * Backend: Java (Spring Boot), Reactive Streams (Project Reactor), PostgreSQL, MongoDB, Redis.
* **Relevant Features & Implementation Locations**:
  * Visual query builder and database connector suite (`app/client/src/PluginActionForm`)
  * Dependency graph and real-time reactive JS evaluation engine (`app/client/src/workers/Evaluation`)
  * Auto-generated CRUD applications from database schemas (`app/client/src/pages/Editor/GeneratePage`)
  * Role-Based Access Control (RBAC) and workspace isolation (`app/server/reactive-stack`)
* **Component & Template Systems**: Prebuilt widget library (Tables, Forms, Charts, Modals, JSON viewers). Templates configure pages, queries, and widget property bindings.
* **Data Storage & Project Serialization**: Projects serialized as declarative JSON files (`application.json`, `pages/*.json`) with Git-sync support.
* **Build & Deployment Approach**: Docker Compose, Kubernetes Helm charts, AWS AMI, Maven/Gradle for backend, Webpack for frontend.
* **Reusable Packages & Extension Points**: Pluggable datasource plugins (REST, GraphQL, Postgres, MySQL, Mongo, S3).
* **License & Redistribution Implications**: **Apache-2.0** (Community Edition) with commercial enterprise licensing. Apache-2.0 is commercial-friendly.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: Auto-CRUD page generation from database schemas, SQL query builder, and granular field-level data binding.
  * *Reimplement independently*: Lightweight TypeScript/Node API layer instead of heavyweight Java Spring Boot backend.
  * *Avoid*: Heavyweight Java/JVM backend dependencies for a modern, lightweight developer-first studio.

---

### 1.7 Budibase (`Budibase/budibase`)
* **Main Purpose & Architecture**: Open-source low-code platform focused on turning data into business applications, forms, and workflows in minutes.
* **Frontend & Backend Technologies**:
  * Frontend: Svelte, TypeScript, Spectrum CSS.
  * Backend: Node.js, Koa, CouchDB (for internal metadata), Redis, Knex.js (for external SQL connectors: PostgreSQL, MySQL, MSSQL).
* **Relevant Features & Implementation Locations**:
  * Internal database and external SQL schema introspection (`packages/backend-core/src/db`)
  * Visual query builder and relationship visualizer (`packages/builder/src/components/backend`)
  * Automated CRUD screen generator from table definitions (`packages/builder/src/components/design`)
  * Automation workflow engine (triggers, actions, webhooks) (`packages/server/src/automations`)
* **Component & Template Systems**: Components authored in Svelte, grouped into layout blocks, data tables, and forms.
* **Data Storage & Project Serialization**: Document-based metadata stored in CouchDB; app definitions exportable to JSON/YAML tarballs.
* **Build & Deployment Approach**: Lerna/Yarn workspaces, Docker, Kubernetes, DigitalOcean 1-Click.
* **Reusable Packages & Extension Points**: Plugin system for custom components and datasources.
* **License & Redistribution Implications**: **AGPL-3.0** with commercial enterprise tier.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: Intuitive Data -> Screen workflow generator, relationship modeling (1:N, N:N), and automated form generation.
  * *Reimplement independently*: React/TypeScript data modeling workspace and code-generation engine producing clean TypeScript and PHP code.
  * *Avoid*: CouchDB dependency and AGPL licensing constraints.

---

### 1.8 ToolJet (`ToolJet/ToolJet`)
* **Main Purpose & Architecture**: Open-source low-code framework for building business tools, admin panels, and database integrations.
* **Frontend & Backend Technologies**:
  * Frontend: React, Redux, Bootstrap / custom Tailwind components, TypeScript.
  * Backend: Node.js (NestJS), TypeORM, PostgreSQL.
* **Relevant Features & Implementation Locations**:
  * Visual component drag-and-drop canvas (`frontend/src/AppBuilder`)
  * Data source connection manager (PostgreSQL, MySQL, Stripe, Airtable, REST) (`server/src/services/data-sources`)
  * Role-based permissions & multi-tenant organization workspaces (`server/src/modules/organization-users`)
  * Visual query editor and transformer (`frontend/src/AppBuilder/QueryManager`)
* **Component & Template Systems**: 40+ configurable React widgets. Apps exportable as JSON definitions.
* **Data Storage & Project Serialization**: PostgreSQL backend via TypeORM. Apps serialized as structured JSON trees.
* **Build & Deployment Approach**: Monorepo using npm workspaces, Docker, Kubernetes, Helm.
* **Reusable Packages & Extension Points**: Extensible marketplace plugins for third-party APIs.
* **License & Redistribution Implications**: **AGPL-3.0** with enterprise extensions.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: Clean NestJS/TypeORM multi-database query integration patterns and role-based route protection.
  * *Reimplement independently*: Modular TypeScript adapters for Supabase (Target A) and PHP/PDO (Target B).
  * *Avoid*: Monolithic NestJS/TypeORM runtime requirements for generated client projects.

---

### 1.9 Directus (`directus/directus`)
* **Main Purpose & Architecture**: Headless Data Platform and Backend-as-a-Service that sits on top of any SQL database, instantly providing dynamic REST and GraphQL APIs and an intuitive data studio.
* **Frontend & Backend Technologies**:
  * Frontend: Vue 3, Pinia, TypeScript, Vite.
  * Backend: Node.js, Express, Knex.js (database abstraction), Redis, PostgreSQL/MySQL/SQLite/Oracle support.
* **Relevant Features & Implementation Locations**:
  * Database schema reflection engine (`api/src/database/system-data`)
  * Visual Data Model and Field Studio (`app/src/modules/settings/routes/data-model`)
  * Granular Role-Based Permissions by collection, field, and row condition (`api/src/services/permissions`)
  * Visual Flows automation builder (`app/src/modules/flows`)
* **Component & Template Systems**: Standardized Displays, Interfaces, and Layouts for viewing and modifying relational data.
* **Data Storage & Project Serialization**: Direct SQL database tables with a thin metadata layer (`directus_collections`, `directus_fields`). Schema snapshot/migration format in YAML/JSON.
* **Build & Deployment Approach**: pnpm workspaces, Turborepo, Docker, npm packages (`@directus/api`, `@directus/sdk`).
* **Reusable Packages & Extension Points**: Deep extension system (custom endpoints, displays, interfaces, hooks, modules).
* **License & Redistribution Implications**: **Monospace Sustainable Core License (MSCL 1.0)** / Fair Core; previously BSL 1.1. Core converts to GPLv3 after 4 years. Free tier under $5M revenue. Official SDK is MIT.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: Real-time database schema reflection, zero-lock-in SQL design, declarative permission rules, and schema snapshot generation.
  * *Reimplement independently*: Visual Database Designer that outputs standard SQL migrations for PostgreSQL/Supabase and MySQL.
  * *Avoid*: Heavy multi-database runtime overhead in the visual builder itself.

---

### 1.10 Supabase (`supabase/supabase`)
* **Main Purpose & Architecture**: Open-source Firebase alternative providing a fully managed PostgreSQL database, authentication (GoTrue), instant REST APIs (PostgREST), Storage, Realtime, and Edge Functions.
* **Frontend & Backend Technologies**:
  * Studio (Dashboard): Next.js, React, TypeScript, Tailwind CSS, Monaco Editor.
  * Backend Services: PostgreSQL 15+, Go (GoTrue Auth, Storage, PostgREST), Elixir (Realtime), Deno (Edge Functions).
* **Relevant Features & Implementation Locations**:
  * Studio Table Editor, SQL Editor, and Schema Visualizer (`apps/studio/components/interfaces/TableGrid`, `apps/studio/components/interfaces/Database`)
  * Row Level Security (RLS) Policy Editor (`apps/studio/components/interfaces/Auth/Policies`)
  * Role and permission system leveraging native Postgres roles (`postgres`, `anon`, `authenticated`, `service_role`)
  * Storage bucket policy management (`apps/studio/components/interfaces/Storage`)
* **Component & Template Systems**: Supabase Studio UI components (built with `@supabase/ui` and Radix UI); starter project templates with SQL seeds.
* **Data Storage & Project Serialization**: Native PostgreSQL schemas, tables, views, and migrations (`supabase/migrations/*.sql`).
* **Build & Deployment Approach**: Monorepo using Turborepo and npm/pnpm; distributed as self-hosted Docker Compose or Supabase Cloud.
* **Reusable Packages & Extension Points**: `@supabase/supabase-js`, `@supabase/postgrest-js`, Supabase CLI.
* **License & Redistribution Implications**: **Apache-2.0** for client libraries, Studio, and CLI. PostgreSQL license for core DB extensions. Fully commercial-friendly.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Direct Target*: Primary production target (Target A) for WebForge Studio: native RLS policies, clean PostgreSQL SQL migration generation, Supabase Auth integration, and client SDK generation.
  * *Reimplement independently*: Visual table and RLS policy editor inside WebForge Studio designed specifically for site builders.
  * *Avoid*: Reliance on service-role keys in client bundles; always enforce RLS with `authenticated` and `anon` roles.

---

### 1.11 Strapi (`strapi/strapi`)
* **Main Purpose & Architecture**: Open-source headless Content Management System (CMS) enabling developers to define schemas and consume APIs via REST and GraphQL.
* **Frontend & Backend Technologies**:
  * Frontend: React, Styled Components / Design System, TypeScript.
  * Backend: Node.js, Koa framework, dynamic database abstraction layer, SQLite/PostgreSQL/MySQL.
* **Relevant Features & Implementation Locations**:
  * Content-Type Builder (visual schema definition for Collections, Singles, Components) (`packages/core/content-type-builder`)
  * Media Library with responsive image manipulation (`packages/core/upload`)
  * Role-Based Access Control and API Token management (`packages/core/admin`)
  * Internationalization (i18n) and draft/publish workflows
* **Component & Template Systems**: Schema-defined components and repeatable dynamic zones. Content exported as structured JSON.
* **Data Storage & Project Serialization**: Schema definitions stored as declarative JSON schema files (`schema.json`) in the project codebase; content in SQL database.
* **Build & Deployment Approach**: Monorepo with Yarn workspaces; self-hosted via Node.js or Strapi Cloud.
* **Reusable Packages & Extension Points**: `@strapi/strapi`, `@strapi/plugin-users-permissions`, custom plugin ecosystem.
* **License & Redistribution Implications**: **MIT License** for Community Edition; Enterprise features under proprietary license.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: The clean file-based schema definition model (`schema.json`) for defining data collections, fields, and validations.
  * *Reimplement independently*: Direct TypeScript type generation and migration scripts from schema models.
  * *Avoid*: Heavy server startup reflection and bulky runtime plugin overhead.

---

### 1.12 WordPress Gutenberg (`WordPress/gutenberg`)
* **Main Purpose & Architecture**: The modern block editor project for the WordPress ecosystem. Standardized web publishing around self-contained, modular "blocks".
* **Frontend & Backend Technologies**:
  * Frontend: React (wrapped in `@wordpress/element`), Redux-inspired state (`@wordpress/data`), TypeScript/JavaScript, SASS/CSS.
  * Backend: PHP (WordPress Core REST APIs).
* **Relevant Features & Implementation Locations**:
  * Block registration API: `registerBlockType()` (`packages/blocks`)
  * Editor canvas with rich inline typography and block transforms (`packages/block-editor`)
  * Global Styles and Theme Tokens (`theme.json`) (`packages/block-editor/src/components/global-styles`)
  * Template Hierarchy and Full Site Editing (FSE) engine (`packages/edit-site`)
* **Component & Template Systems**: Atomic block system. Templates are HTML/block files (`templates/index.html`) using HTML comment markup.
* **Data Storage & Project Serialization**: Block markup serialized as valid HTML with embedded JSON comments:
  ```html
  <!-- wp:paragraph {"fontSize":"large"} -->
  <p class="has-large-font-size">Hello World</p>
  <!-- /wp:paragraph -->
  ```
* **Build & Deployment Approach**: Lerna/npm monorepo; compiled assets distributed with WordPress Core and npm packages (`@wordpress/*`).
* **Reusable Packages & Extension Points**: Modular packages on npm (`@wordpress/components`, `@wordpress/block-editor`, `@wordpress/data`).
* **License & Redistribution Implications**: **GPL-2.0-or-later**. Strict copyleft; derivative works must be GPL.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: The `theme.json` concept for global design tokens (typography, colors, spacing) and block category hierarchies.
  * *Reimplement independently*: Standard clean JSON serialization rather than HTML comment delimiters.
  * *Avoid*: HTML comment syntax serialization and GPL copyleft code contamination.

---

### 1.13 Payload CMS (`payloadcms/payload`)
* **Main Purpose & Architecture**: A code-first, TypeScript-native headless CMS and application framework that compiles directly into Next.js App Router applications.
* **Frontend & Backend Technologies**:
  * Frontend & Backend: Next.js (App Router), React, TypeScript, Tailwind CSS, Monaco Editor.
  * Database Adapters: Drizzle ORM (PostgreSQL, SQLite) and Mongoose (MongoDB).
* **Relevant Features & Implementation Locations**:
  * Declarative TypeScript configuration `payload.config.ts` (`packages/payload/src/config`)
  * Unified Next.js integration running in the same process/runtime (`packages/next`)
  * Dynamic auto-generated Admin UI based on TypeScript collections (`packages/ui`)
  * Field types: blocks, relationship, upload, rich text (Lexical)
* **Component & Template Systems**: Block arrays allowing users to compose arbitrary pages from strongly typed block components.
* **Data Storage & Project Serialization**: Direct SQL/MongoDB tables managed via Drizzle or Mongoose; migrations generated automatically.
* **Build & Deployment Approach**: pnpm workspaces with Turborepo; deploys seamlessly to Vercel, Node.js, Docker, or serverless runtimes.
* **Reusable Packages & Extension Points**: Modular npm packages (`payload`, `@payloadcms/db-postgres`, `@payloadcms/richtext-lexical`).
* **License & Redistribution Implications**: **MIT License**. Completely open-source and commercial-friendly.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: The TypeScript-first schema definition architecture, direct Next.js App Router code generation, clean Drizzle-style SQL migrations, and unified Next.js + DB layout.
  * *Reimplement independently*: A visual editor UI that emits both modern Next.js/TypeScript code AND standalone PHP 8.x/MySQL code.
  * *Avoid*: Requiring users to hand-code TypeScript config files; WebForge Studio provides a visual builder for everything.

---

### 1.14 VvvebJs (`givanz/VvvebJs`)
* **Main Purpose & Architecture**: A lightweight, dependency-free vanilla JavaScript drag-and-drop website builder that manipulates HTML directly inside an `iframe`.
* **Frontend & Backend Technologies**: Vanilla JavaScript (ES6+), HTML5, CSS3, optional PHP backend for file management and CMS capabilities.
* **Relevant Features & Implementation Locations**:
  * Direct DOM tree manipulation (`vvvebjs/editor.js`)
  * Breadcrumb navigation and element hierarchy tree (`vvvebjs/builder.js`)
  * CSS selector style inspector (`vvvebjs/components.js`)
  * PHP-based asset management and site publishing (`editor.php`)
* **Component & Template Systems**: HTML snippets categorized into sections (headers, heroes, content, footers).
* **Data Storage & Project Serialization**: Raw HTML and CSS files stored directly on the filesystem.
* **Build & Deployment Approach**: No build step required; static asset distribution.
* **Reusable Packages & Extension Points**: Component and block definitions registered via JS objects with HTML strings.
* **License & Redistribution Implications**: **Apache-2.0**. Permissive and commercial-friendly.
* **Features to Adopt, Reimplement, or Avoid**:
  * *Adopt/Learn from*: The PHP backend architecture and lightweight asset manager for Target B (PHP/MySQL export).
  * *Reimplement independently*: Modern reactive component model instead of raw direct DOM manipulation.
  * *Avoid*: Unstructured raw HTML string mutation without a versioned canonical JSON AST.

---

## 2. Feature Comparison Matrix

| Repository | Primary Focus | License | Serialization Format | Target Tech Stack | Visual Editor Type | DB / Backend Designer | Code Gen Target |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GrapesJS** | Web page builder | BSD-3 | JSON AST + HTML/CSS | Browser / HTML | Canvas iframe | None | Static HTML/CSS |
| **Puck** | React component editor | MIT | Structured JSON | React / Next.js | Direct React DOM | None | React Component tree |
| **Webstudio** | Webflow alternative | AGPL-3 | Relational DB + JSON | Remix / React | Canvas iframe | External | Remix / Cloudflare |
| **Silex** | Static website builder | GPL-3 | HTML with embedded JSON | Static HTML | Direct Stage | None | Static HTML/CSS |
| **Craft.js** | Headless editor core | MIT | Normalized Node map | React | Direct React DOM | None | None (in-memory) |
| **Appsmith** | Internal tools / DB GUI | Apache-2 | JSON App Manifest | Java + React | Widget canvas | Query Builder | Internal Appsmith runtime |
| **Budibase** | Business apps / CRUD | AGPL-3 | JSON App Tarball | Svelte + Node | Svelte canvas | Auto-CRUD / SQL | Internal Budibase runtime |
| **ToolJet** | Low-code DB builder | AGPL-3 | JSON tree | NestJS + React | Widget canvas | Visual Queries | Internal ToolJet runtime |
| **Directus** | Data platform / BaaS | MSCL/Fair | Direct SQL + YAML | Vue 3 + Express | None (Data Studio) | Full SQL Schema | Headless REST/GraphQL |
| **Supabase** | BaaS / PostgreSQL | Apache-2 | SQL Migrations + RLS | Next.js + Postgres | None (DB Studio) | Postgres Table & RLS | Client SDK + REST |
| **Strapi** | Headless CMS | MIT | JSON Schema (`schema.json`)| React + Koa | None (Admin Studio)| Content Type Builder | Headless REST/GraphQL |
| **Gutenberg** | WP Content/Site editor | GPL-2 | HTML with `<!-- wp -->` | React + PHP | Block canvas | Custom Post Types | WordPress PHP/Block |
| **Payload CMS** | Next.js native CMS | MIT | TypeScript config + DB | Next.js + React | Block list | Drizzle / DB Schema | Next.js App Router |
| **VvvebJs** | Vanilla web builder | Apache-2 | Raw HTML files | Vanilla JS + PHP | Canvas iframe | Simple PHP Storage | Static HTML / PHP |
| **WebForge Studio (Target)** | **Full-Stack Site & App Builder** | **MIT (Original)** | **Canonical JSON Project AST** | **React + TS + Node / PHP** | **Interactive Responsive Canvas** | **Full Schema, RLS, API & CRUD Designer** | **Next.js + Supabase AND PHP 8.x + MySQL** |

---

## 3. Recommended Implementation Strategy for WebForge Studio

Based on this comprehensive architectural review, WebForge Studio will synthesize the best architectural patterns while completely avoiding copyleft licensing traps and runtime lock-in:

### 3.1 Architecture Synthesis
1. **Editor Core & Canvas**:
   * Adopt the clean declarative component schema and slot system inspired by **Puck** (`render` + `fields` + typed props) and **Craft.js** (normalized node hierarchy).
   * Implement an isolated, responsive canvas with standard CSS cascading inspired by **Webstudio** and **GrapesJS**, supporting Desktop (1280px), Tablet (768px), and Mobile (375px) breakpoints.
   * Maintain a canonical, versioned JSON AST (`WebForgeProjectSchema v1.0.0`) as the single source of truth for the editor, preview engine, undo/redo history, and code generators.

2. **Full-Stack Data Modeling**:
   * Synthesize the visual schema designer of **Supabase Studio** and the automatic CRUD generator of **Appsmith/Budibase**.
   * Model tables, fields, data types, primary/foreign key relationships, indexes, default values, and Row Level Security (RLS) policies.
   * Provide an API designer for endpoints, HTTP methods, validation rules, and authorization levels.

3. **Dual Code-Generation Architecture**:
   * **Target A (Modern Stack)**: Generates production-ready **Next.js (App Router) + TypeScript + Tailwind CSS + Supabase / PostgreSQL**, complete with SQL migrations (`supabase/migrations/*.sql`), RLS policies, typed API routes, and responsive React page layouts.
   * **Target B (Self-Hosted Stack)**: Generates production-ready **PHP 8.x + MySQL/MariaDB**, utilizing a clean modern MVC/router architecture, PDO prepared statements, migration scripts, session-based auth, and responsive Tailwind/Bootstrap templates suitable for standard LAMP/LEMP hosting.

4. **AI-Assisted Site & App Generator**:
   * Provider-neutral AI engine supporting structured JSON tool calling (Gemini, Claude, GPT-4, or local Ollama).
   * Capable of transforming natural language prompts ("Create a 4-page SaaS site with Stripe pricing and user feedback table") into valid canonical project ASTs, modifying sections, altering design tokens, or synthesizing database tables and CRUD screens.

5. **Licensing & Code Independence**:
   * 100% original implementation with permissive **MIT** architecture. Zero AGPL/GPL dependencies in runtime or generated deliverables.
   * Generated applications are completely standalone and have zero runtime dependency on WebForge Studio builder APIs.

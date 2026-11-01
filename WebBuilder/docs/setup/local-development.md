# WebForge Studio: Local Development Guide

## Prerequisites

* **Node.js**: v18.x, v20.x, or v24.x
* **npm**: v9+ (npm workspaces are natively supported)
* **Git**: v2.30+

## 1. Repository Setup

Clone the repository and install all workspace dependencies:

```bash
# Clone repository
git clone https://github.com/webforge-studio/webforge.git
cd webforge

# Install monorepo dependencies across all packages and apps
npm install
```

## 2. Running WebForge Studio (Visual Builder)

Start the studio development server with instant Hot Module Replacement:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the visual builder application shell.

## 3. Running Workspace Test Suites

Execute the comprehensive Vitest test suites covering schema validation, block registry, template instantiation, code generation, and AI prompt processing:

```bash
npm test
```

## 4. Production Build

Verify that the studio and all packages compile cleanly to static production assets:

```bash
npm run build
```

The production bundle will be emitted to `apps/studio/dist/`.

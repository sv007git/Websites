# WebForge Studio: Template Authoring Guide

## Overview

A WebForge Studio template is a complete, multi-page web application blueprint that includes pages, block compositions, global design tokens, relational database tables, Row Level Security policies, seed data, and API routes.

---

## 1. Template Structure Contract

Every template implements the `TemplateDefinition` TypeScript interface:

```typescript
export interface TemplateDefinition {
  id: string;                      // e.g. 'template-saas-product'
  name: string;                    // e.g. 'Vortex Cloud Monitoring'
  category: string;                // e.g. 'SaaS product'
  description: string;             // Detailed technical summary
  thumbnail: string;               // 16:9 Unsplash preview asset
  previewUrl?: string;             // Optional live demo URL
  pagesCount: number;              // Total pages (must be >= 3)
  tags: string[];                  // Filter keywords
  features: string[];              // Key capabilities highlighted
  setupGuide: string;              // Step-by-step onboarding
  backendCapabilities: {
    requiresDatabase: boolean;
    requiresAuth: boolean;
    supportedRoles: string[];
    tables: string[];
    apiEndpoints: string[];
  };
  project: Project;                // The complete canonical AST
}
```

---

## 2. Best Practices for Full-Stack Templates

1. **Multi-Page Collections**: Ensure internal links (`href="/"`, `href="/features"`, `href="/pricing"`, `href="/contact"`) accurately reflect the page routes defined in `project.pages`.
2. **Normalized Data Modeling**:
   * Always provide UUID primary keys (`id UUID PRIMARY KEY DEFAULT gen_random_uuid()`).
   * Include `created_at TIMESTAMPTZ DEFAULT now()`.
   * Enforce Row Level Security with sensible default roles (`anon` for public forms, `authenticated` for user records, `admin` for management).
3. **Realistic Seed Data**: Seed data should provide realistic sample rows so that newly installed templates look complete immediately.
4. **Registration**: Export the template and register it in `packages/template-registry/src/installer.ts`.

export * from './theme';
export * from './database';
export * from './blocks';
export * from './project';

import { Project, ProjectSchema } from './project';

export function validateProject(data: unknown): { success: boolean; data?: Project; error?: string } {
  const result = ProjectSchema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return {
    success: false,
    error: result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', '),
  };
}

export function createEmptyProject(id: string, name: string): Project {
  const now = new Date().toISOString();
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  return {
    version: '1.0.0',
    id,
    name,
    slug: slug || 'my-project',
    description: 'A new project built with WebForge Studio',
    createdAt: now,
    updatedAt: now,
    author: 'WebForge Creator',
    theme: {
      mode: 'light',
      colors: {
        primary: '#3b82f6',
        primaryHover: '#2563eb',
        primaryForeground: '#ffffff',
        secondary: '#64748b',
        secondaryForeground: '#ffffff',
        accent: '#f59e0b',
        accentForeground: '#ffffff',
        background: '#ffffff',
        surface: '#f8fafc',
        surfaceBorder: '#e2e8f0',
        text: '#0f172a',
        textMuted: '#64748b',
        destructive: '#ef4444',
        destructiveForeground: '#ffffff',
        success: '#10b981',
      },
      typography: {
        headingFont: 'Inter, sans-serif',
        bodyFont: 'Inter, sans-serif',
        baseSize: '16px',
        scaleRatio: 1.25,
      },
      layout: {
        containerMaxWidth: '1200px',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      },
    },
    seo: {
      siteName: name,
      titleTemplate: `%s | ${name}`,
      defaultDescription: `Welcome to ${name}`,
      favicon: '/favicon.ico',
    },
    pages: [
      {
        id: 'page-home',
        name: 'Home',
        slug: '/',
        isHome: true,
        layout: 'default',
        seo: {
          title: 'Home',
          description: `Welcome to ${name}`,
          keywords: 'webforge, website',
        },
        blocks: [],
      },
    ],
    database: {
      tables: [],
      apis: [],
      auth: {
        enabled: true,
        provider: 'supabase',
        roles: ['admin', 'editor', 'member', 'customer'],
        defaultRole: 'member',
        requireEmailVerification: false,
      },
    },
    integrations: {
      github: { enabled: false, repo: '', branch: 'main' },
      stripe: { enabled: false, testMode: true, publishableKey: '' },
      email: { enabled: false, provider: 'resend', fromAddress: 'noreply@example.com' },
    },
    exportConfig: {
      defaultTarget: 'nextjs',
      includeSeedData: true,
      includeTests: true,
    },
  };
}

import { z } from 'zod';
import { ThemeTokensSchema, defaultThemeTokens } from './theme';
import { DatabaseSchemaDefinitionSchema } from './database';
import { PageDefinitionSchema } from './blocks';

export const ProjectSchema = z.object({
  version: z.string().default('1.0.0'),
  id: z.string(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().default(''),
  createdAt: z.string(),
  updatedAt: z.string(),
  author: z.string().default('WebForge User'),
  theme: ThemeTokensSchema.default(defaultThemeTokens),
  seo: z.object({
    siteName: z.string().default('My WebForge Site'),
    titleTemplate: z.string().default('%s | WebForge Studio'),
    defaultDescription: z.string().default('Created with WebForge Studio'),
    favicon: z.string().optional(),
    ogImage: z.string().optional(),
  }).default({
    siteName: 'My WebForge Site',
    titleTemplate: '%s | WebForge Studio',
    defaultDescription: 'Created with WebForge Studio',
    favicon: '/favicon.ico',
  }),
  pages: z.array(PageDefinitionSchema).min(1),
  database: DatabaseSchemaDefinitionSchema.default({}),
  integrations: z.object({
    github: z.object({
      enabled: z.boolean().default(false),
      repo: z.string().default(''),
      branch: z.string().default('main'),
    }).default({}),
    stripe: z.object({
      enabled: z.boolean().default(false),
      testMode: z.boolean().default(true),
      publishableKey: z.string().default(''),
    }).default({}),
    email: z.object({
      enabled: z.boolean().default(false),
      provider: z.enum(['smtp', 'resend', 'sendgrid']).default('resend'),
      fromAddress: z.string().default('noreply@example.com'),
    }).default({}),
  }).default({}),
  exportConfig: z.object({
    defaultTarget: z.enum(['nextjs', 'php', 'static']).default('nextjs'),
    includeSeedData: z.boolean().default(true),
    includeTests: z.boolean().default(true),
  }).default({}),
});

export type Project = z.infer<typeof ProjectSchema>;

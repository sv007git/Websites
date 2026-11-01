import { z } from 'zod';

export const ResponsiveDeviceSchema = z.enum(['desktop', 'tablet', 'mobile']);
export type ResponsiveDevice = z.infer<typeof ResponsiveDeviceSchema>;

export const BlockStylesSchema = z.object({
  paddingTop: z.string().optional(),
  paddingBottom: z.string().optional(),
  paddingLeft: z.string().optional(),
  paddingRight: z.string().optional(),
  marginTop: z.string().optional(),
  marginBottom: z.string().optional(),
  backgroundColor: z.string().optional(),
  textColor: z.string().optional(),
  textAlign: z.enum(['left', 'center', 'right', 'justify']).optional(),
  borderRadius: z.string().optional(),
  boxShadow: z.string().optional(),
  customClasses: z.string().optional(),
});

export type BlockStyles = z.infer<typeof BlockStylesSchema>;

export const BlockInstanceSchema = z.object({
  id: z.string(),
  type: z.string().min(1),
  name: z.string().default('Block'),
  props: z.record(z.any()).default({}),
  styles: BlockStylesSchema.default({}),
  hidden: z.boolean().default(false),
  locked: z.boolean().default(false),
});

export type BlockInstance = z.infer<typeof BlockInstanceSchema>;

export const PageDefinitionSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  slug: z.string().min(1),
  isHome: z.boolean().default(false),
  layout: z.enum(['default', 'blank', 'admin', 'sidebar']).default('default'),
  seo: z.object({
    title: z.string().default(''),
    description: z.string().default(''),
    keywords: z.string().default(''),
    ogImage: z.string().optional(),
  }).default({}),
  blocks: z.array(BlockInstanceSchema).default([]),
});

export type PageDefinition = z.infer<typeof PageDefinitionSchema>;

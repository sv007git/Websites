import { z } from 'zod';

export const defaultThemeTokens = {
  mode: 'light' as const,
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
};

// Built-in Theme Presets
export const monochromeDarkPreset = {
  mode: 'dark' as const,
  colors: {
    primary: '#ffffff',
    primaryHover: '#e4e4e7',
    primaryForeground: '#000000',
    secondary: '#27272a',
    secondaryForeground: '#ffffff',
    accent: '#ffffff',
    accentForeground: '#000000',
    background: '#000000',
    surface: '#09090b',
    surfaceBorder: '#27272a',
    text: '#ffffff',
    textMuted: '#a1a1aa',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    success: '#ffffff',
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
    boxShadow: '0 4px 20px -2px rgba(255, 255, 255, 0.05)',
  },
};

export const monochromeLightPreset = {
  mode: 'light' as const,
  colors: {
    primary: '#000000',
    primaryHover: '#27272a',
    primaryForeground: '#ffffff',
    secondary: '#f4f4f5',
    secondaryForeground: '#09090b',
    accent: '#000000',
    accentForeground: '#ffffff',
    background: '#ffffff',
    surface: '#fafafa',
    surfaceBorder: '#e4e4e7',
    text: '#09090b',
    textMuted: '#71717a',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    success: '#000000',
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
    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
  },
};

export const cyberSlatePreset = defaultThemeTokens;

export const ThemeTokensSchema = z.object({
  mode: z.enum(['light', 'dark', 'system']).default('light'),
  colors: z.object({
    primary: z.string().default('#3b82f6'),
    primaryHover: z.string().default('#2563eb'),
    primaryForeground: z.string().default('#ffffff'),
    secondary: z.string().default('#64748b'),
    secondaryForeground: z.string().default('#ffffff'),
    accent: z.string().default('#f59e0b'),
    accentForeground: z.string().default('#ffffff'),
    background: z.string().default('#ffffff'),
    surface: z.string().default('#f8fafc'),
    surfaceBorder: z.string().default('#e2e8f0'),
    text: z.string().default('#0f172a'),
    textMuted: z.string().default('#64748b'),
    destructive: z.string().default('#ef4444'),
    destructiveForeground: z.string().default('#ffffff'),
    success: z.string().default('#10b981'),
  }).default(defaultThemeTokens.colors),
  typography: z.object({
    headingFont: z.string().default('Inter, sans-serif'),
    bodyFont: z.string().default('Inter, sans-serif'),
    baseSize: z.string().default('16px'),
    scaleRatio: z.number().default(1.25),
  }).default(defaultThemeTokens.typography),
  layout: z.object({
    containerMaxWidth: z.string().default('1200px'),
    borderRadius: z.string().default('0.5rem'),
    boxShadow: z.string().default('0 4px 6px -1px rgb(0 0 0 / 0.1)'),
  }).default(defaultThemeTokens.layout),
});

export type ThemeTokens = z.infer<typeof ThemeTokensSchema>;

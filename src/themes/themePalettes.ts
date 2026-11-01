// ================================================================================
// WEBSITES — UNIVERSAL MULTI-THEME ENGINE PALETTES
// Derived from the aesthetic design system of Chat, You and Me
// ================================================================================

export interface ThemePalette {
  id: string;
  name: string;
  category: 'color' | 'monochrome';
  primaryGradient: string;
  accent: string;
  previewColors: string[];
  themeColorLight: string;
  themeColorDark: string;
  // Tokens
  tokens: {
    bgLight: string;
    bgDark: string;
    surfaceLight: string;
    surfaceDark: string;
    borderLight: string;
    borderDark: string;
    textLight: string;
    textDark: string;
    textMutedLight: string;
    textMutedDark: string;
    primaryLight: string;
    primaryDark: string;
    accentLight: string;
    accentDark: string;
    badgeBg: string;
    buttonGradient: string;
  };
}

export const THEME_PALETTES: Record<string, ThemePalette> = {
  // 1. Black / Dark (Monochrome Dark)
  black: {
    id: 'black',
    name: 'Monochrome Noir',
    category: 'monochrome',
    primaryGradient: 'from-neutral-200 to-white',
    accent: '#ffffff',
    previewColors: ['#000000', '#18181b', '#ffffff'],
    themeColorLight: '#f4f4f5',
    themeColorDark: '#000000',
    tokens: {
      bgLight: '#ffffff',
      bgDark: '#000000',
      surfaceLight: '#f4f4f5',
      surfaceDark: '#09090b',
      borderLight: '#e4e4e7',
      borderDark: '#27272a',
      textLight: '#09090b',
      textDark: '#fafafa',
      textMutedLight: '#71717a',
      textMutedDark: '#a1a1aa',
      primaryLight: '#09090b',
      primaryDark: '#ffffff',
      accentLight: '#18181b',
      accentDark: '#f4f4f5',
      badgeBg: 'bg-neutral-900 text-white dark:bg-white dark:text-black',
      buttonGradient: 'bg-neutral-900 text-white dark:bg-white dark:text-black',
    },
  },

  // 2. White / Light (Monochrome Light)
  white: {
    id: 'white',
    name: 'Pure Canvas',
    category: 'monochrome',
    primaryGradient: 'from-slate-800 to-slate-950',
    accent: '#0f172a',
    previewColors: ['#ffffff', '#f8fafc', '#0f172a'],
    themeColorLight: '#ffffff',
    themeColorDark: '#0f172a',
    tokens: {
      bgLight: '#ffffff',
      bgDark: '#0b0f19',
      surfaceLight: '#f8fafc',
      surfaceDark: '#111827',
      borderLight: '#e2e8f0',
      borderDark: '#1f2937',
      textLight: '#0f172a',
      textDark: '#f8fafc',
      textMutedLight: '#64748b',
      textMutedDark: '#94a3b8',
      primaryLight: '#0f172a',
      primaryDark: '#38bdf8',
      accentLight: '#2563eb',
      accentDark: '#60a5fa',
      badgeBg: 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900',
      buttonGradient: 'bg-slate-900 text-white hover:bg-slate-800',
    },
  },

  // 3. Rose / Blush (From Chat "Blush Pink" & "Deep Velvet Rose")
  rose: {
    id: 'rose',
    name: 'Velvet Rose & Blush',
    category: 'color',
    primaryGradient: 'from-rose-500 to-pink-600',
    accent: '#f43f5e',
    previewColors: ['#f43f5e', '#ec4899', '#fda4af'],
    themeColorLight: '#fff1f2',
    themeColorDark: '#180a12',
    tokens: {
      bgLight: '#fff5f7',
      bgDark: '#14080e',
      surfaceLight: '#ffffff',
      surfaceDark: '#1e0c15',
      borderLight: '#fecdd3',
      borderDark: '#4c0519',
      textLight: '#881337',
      textDark: '#ffe4e6',
      textMutedLight: '#be123c',
      textMutedDark: '#fda4af',
      primaryLight: '#e11d48',
      primaryDark: '#fb7185',
      accentLight: '#f43f5e',
      accentDark: '#fda4af',
      badgeBg: 'bg-rose-500 text-white',
      buttonGradient: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white',
    },
  },

  // 4. Blue (From Chat "Starry Midnight" / Azure)
  blue: {
    id: 'blue',
    name: 'Starry Midnight Blue',
    category: 'color',
    primaryGradient: 'from-blue-600 to-indigo-600',
    accent: '#2563eb',
    previewColors: ['#2563eb', '#3b82f6', '#93c5fd'],
    themeColorLight: '#eff6ff',
    themeColorDark: '#08101e',
    tokens: {
      bgLight: '#f0f7ff',
      bgDark: '#070d19',
      surfaceLight: '#ffffff',
      surfaceDark: '#0f172a',
      borderLight: '#bfdbfe',
      borderDark: '#1e3a8a',
      textLight: '#1e3a8a',
      textDark: '#dbeafe',
      textMutedLight: '#3b82f6',
      textMutedDark: '#93c5fd',
      primaryLight: '#2563eb',
      primaryDark: '#60a5fa',
      accentLight: '#3b82f6',
      accentDark: '#93c5fd',
      badgeBg: 'bg-blue-600 text-white',
      buttonGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
    },
  },

  // 5. Purple (From Chat "Velvet Lavender")
  purple: {
    id: 'purple',
    name: 'Velvet Lavender',
    category: 'color',
    primaryGradient: 'from-purple-600 to-fuchsia-600',
    accent: '#9333ea',
    previewColors: ['#9333ea', '#c084fc', '#f3e8ff'],
    themeColorLight: '#faf5ff',
    themeColorDark: '#130a1c',
    tokens: {
      bgLight: '#faf5ff',
      bgDark: '#12071a',
      surfaceLight: '#ffffff',
      surfaceDark: '#1b0d27',
      borderLight: '#e9d5ff',
      borderDark: '#581c87',
      textLight: '#581c87',
      textDark: '#f3e8ff',
      textMutedLight: '#7e22ce',
      textMutedDark: '#d8b4fe',
      primaryLight: '#9333ea',
      primaryDark: '#c084fc',
      accentLight: '#a855f7',
      accentDark: '#e9d5ff',
      badgeBg: 'bg-purple-600 text-white',
      buttonGradient: 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white',
    },
  },

  // 6. Green (From Chat "Emerald Garden & Mint")
  green: {
    id: 'green',
    name: 'Emerald Garden & Mint',
    category: 'color',
    primaryGradient: 'from-emerald-500 to-teal-600',
    accent: '#10b981',
    previewColors: ['#10b981', '#34d399', '#a7f3d0'],
    themeColorLight: '#ecfdf5',
    themeColorDark: '#061711',
    tokens: {
      bgLight: '#f0fdf4',
      bgDark: '#05140e',
      surfaceLight: '#ffffff',
      surfaceDark: '#0b241a',
      borderLight: '#a7f3d0',
      borderDark: '#064e3b',
      textLight: '#064e3b',
      textDark: '#d1fae5',
      textMutedLight: '#059669',
      textMutedDark: '#6ee7b7',
      primaryLight: '#10b981',
      primaryDark: '#34d399',
      accentLight: '#059669',
      accentDark: '#a7f3d0',
      badgeBg: 'bg-emerald-600 text-white',
      buttonGradient: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white',
    },
  },

  // 7. Teal (From Chat "Ocean Breeze & Teal")
  teal: {
    id: 'teal',
    name: 'Ocean Breeze & Teal',
    category: 'color',
    primaryGradient: 'from-cyan-500 to-teal-500',
    accent: '#06b6d4',
    previewColors: ['#06b6d4', '#14b8a6', '#a5f3fc'],
    themeColorLight: '#cffafe',
    themeColorDark: '#06141a',
    tokens: {
      bgLight: '#ecfeff',
      bgDark: '#041217',
      surfaceLight: '#ffffff',
      surfaceDark: '#071f26',
      borderLight: '#a5f3fc',
      borderDark: '#164e63',
      textLight: '#164e63',
      textDark: '#cffafe',
      textMutedLight: '#0891b2',
      textMutedDark: '#67e8f9',
      primaryLight: '#06b6d4',
      primaryDark: '#22d3ee',
      accentLight: '#0891b2',
      accentDark: '#a5f3fc',
      badgeBg: 'bg-cyan-600 text-white',
      buttonGradient: 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white',
    },
  },

  // 8. Orange (From Chat "Sunset Glow & Peach")
  orange: {
    id: 'orange',
    name: 'Sunset Glow & Peach',
    category: 'color',
    primaryGradient: 'from-amber-500 to-orange-600',
    accent: '#f97316',
    previewColors: ['#f97316', '#fb923c', '#fed7aa'],
    themeColorLight: '#fff7ed',
    themeColorDark: '#1c1008',
    tokens: {
      bgLight: '#fffaf5',
      bgDark: '#170c06',
      surfaceLight: '#ffffff',
      surfaceDark: '#231309',
      borderLight: '#fed7aa',
      borderDark: '#7c2d12',
      textLight: '#7c2d12',
      textDark: '#ffedd5',
      textMutedLight: '#ea580c',
      textMutedDark: '#fdba74',
      primaryLight: '#f97316',
      primaryDark: '#fb923c',
      accentLight: '#ea580c',
      accentDark: '#fed7aa',
      badgeBg: 'bg-orange-600 text-white',
      buttonGradient: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white',
    },
  },

  // 9. Indigo (Deep Royal Indigo)
  indigo: {
    id: 'indigo',
    name: 'Royal Indigo',
    category: 'color',
    primaryGradient: 'from-indigo-600 to-blue-700',
    accent: '#4f46e5',
    previewColors: ['#4f46e5', '#818cf8', '#c7d2fe'],
    themeColorLight: '#eef2ff',
    themeColorDark: '#0b0e1e',
    tokens: {
      bgLight: '#f5f7ff',
      bgDark: '#090c19',
      surfaceLight: '#ffffff',
      surfaceDark: '#11162d',
      borderLight: '#c7d2fe',
      borderDark: '#312e81',
      textLight: '#312e81',
      textDark: '#e0e7ff',
      textMutedLight: '#4f46e5',
      textMutedDark: '#a5b4fc',
      primaryLight: '#4f46e5',
      primaryDark: '#818cf8',
      accentLight: '#4338ca',
      accentDark: '#c7d2fe',
      badgeBg: 'bg-indigo-600 text-white',
      buttonGradient: 'bg-gradient-to-r from-indigo-600 to-blue-700 text-white',
    },
  },
};

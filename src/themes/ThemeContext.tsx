import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { THEME_PALETTES, ThemePalette } from './themePalettes';

interface ThemeContextType {
  isDarkMode: boolean;
  palette: string;
  currentPalette: ThemePalette;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
  setPalette: (paletteId: string) => void;
  palettes: Record<string, ThemePalette>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const STORAGE_KEY_DARK = 'websites_theme_dark_mode';
const STORAGE_KEY_PALETTE = 'websites_theme_palette';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof localStorage === 'undefined') return false;
    const saved = localStorage.getItem(STORAGE_KEY_DARK);
    if (saved !== null) return saved === 'true';
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [palette, setPaletteState] = useState<string>(() => {
    if (typeof localStorage === 'undefined') return 'rose';
    return localStorage.getItem(STORAGE_KEY_PALETTE) || 'rose';
  });

  // Apply dark mode class to <html> and <body>
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_DARK, String(isDarkMode));
    }
    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  // Apply palette data-theme attribute to <html> and <body>
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_PALETTE, palette);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', palette);
      document.body.setAttribute('data-theme', palette);
    }
  }, [palette]);

  const currentPalette = THEME_PALETTES[palette] || THEME_PALETTES.rose;

  // Sync mobile browser address bar theme-color
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const color = isDarkMode ? currentPalette.themeColorDark : currentPalette.themeColorLight;
    if (!color) return;

    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', color);
  }, [isDarkMode, palette, currentPalette]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const setDarkMode = (val: boolean) => setIsDarkMode(val);
  const setPalette = (id: string) => {
    if (THEME_PALETTES[id]) {
      setPaletteState(id);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        palette,
        currentPalette,
        toggleDarkMode,
        setDarkMode,
        setPalette,
        palettes: THEME_PALETTES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

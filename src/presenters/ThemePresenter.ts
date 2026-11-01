// ================================================================================
// PRESENTER LAYER: Theme Presenter
// Orchestrates theme switching, DOM attribute synchronization, and styling logic
// ================================================================================

import { THEME_PALETTES_REPOSITORY, ThemePaletteModel } from '../models/theme.model';
import { audioPresenter } from './AudioPresenter';

export class ThemePresenter {
  private static instance: ThemePresenter;

  private constructor() {}

  public static getInstance(): ThemePresenter {
    if (!ThemePresenter.instance) {
      ThemePresenter.instance = new ThemePresenter();
    }
    return ThemePresenter.instance;
  }

  public applyDarkMode(isDark: boolean): void {
    if (typeof document === 'undefined') return;
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }

  public applyPalette(paletteId: string): void {
    if (typeof document === 'undefined') return;
    const palette = THEME_PALETTES_REPOSITORY[paletteId] || THEME_PALETTES_REPOSITORY.rose;

    document.documentElement.setAttribute('data-theme', palette.id);
    document.body.setAttribute('data-theme', palette.id);

    // Dynamic address bar color
    const isDark = document.documentElement.classList.contains('dark');
    const color = isDark ? palette.themeColorDark : palette.themeColorLight;

    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', color);
  }

  public onThemeToggle(newDarkMode: boolean): void {
    this.applyDarkMode(newDarkMode);
    audioPresenter.onToggle();
  }

  public onPaletteSelect(paletteId: string): void {
    this.applyPalette(paletteId);
    audioPresenter.onButtonClick();
  }

  public getPalette(paletteId: string): ThemePaletteModel {
    return THEME_PALETTES_REPOSITORY[paletteId] || THEME_PALETTES_REPOSITORY.rose;
  }

  public getAllPalettes(): ThemePaletteModel[] {
    return Object.values(THEME_PALETTES_REPOSITORY);
  }
}

export const themePresenter = ThemePresenter.getInstance();

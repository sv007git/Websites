// ================================================================================
// MODEL LAYER: Theme Domain Model & Token Definitions
// ================================================================================

import { THEME_PALETTES, ThemePalette } from '../themes/themePalettes';

export type ThemePaletteModel = ThemePalette;
export type ThemeMode = 'light' | 'dark';

export const THEME_PALETTES_REPOSITORY = THEME_PALETTES;
export { THEME_PALETTES };
export type { ThemePalette };

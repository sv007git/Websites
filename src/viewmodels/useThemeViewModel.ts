// ================================================================================
// VIEWMODEL LAYER: Theme ViewModel
// Manages theme palettes, light/dark mode state, and triggers theme presenter
// ================================================================================

import { useState, useCallback, useRef, useEffect } from 'react';
import { useTheme } from '../themes/ThemeContext';
import { themePresenter } from '../presenters/ThemePresenter';
import { ThemePaletteModel } from '../models/theme.model';

export interface ThemeViewModelState {
  isDarkMode: boolean;
  palette: string;
  currentPalette: ThemePaletteModel;
  palettes: Record<string, ThemePaletteModel>;
  isOpen: boolean;
}

export interface ThemeViewModelActions {
  toggleDarkMode: () => void;
  setPalette: (paletteId: string) => void;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

export type ThemeViewModel = ThemeViewModelState & ThemeViewModelActions;

export function useThemeViewModel(): ThemeViewModel {
  const { isDarkMode, toggleDarkMode, palette, setPalette, palettes, currentPalette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDarkMode = useCallback(() => {
    themePresenter.onThemeToggle(!isDarkMode);
    toggleDarkMode();
  }, [isDarkMode, toggleDarkMode]);

  const handleSetPalette = useCallback(
    (paletteId: string) => {
      themePresenter.onPaletteSelect(paletteId);
      setPalette(paletteId);
      setIsOpen(false);
    },
    [setPalette]
  );

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isDarkMode,
    palette,
    currentPalette,
    palettes,
    isOpen,
    toggleDarkMode: handleToggleDarkMode,
    setPalette: handleSetPalette,
    toggleDropdown,
    closeDropdown,
  };
}

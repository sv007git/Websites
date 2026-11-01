import { ShoppingItem, SupportedLanguage } from '../types/recipe';

const FAVORITES_KEY = 'cookfood_favorites';
const RECENT_KEY = 'cookfood_recently_viewed';
const SHOPPING_KEY = 'cookfood_shopping_list';
const THEME_KEY = 'cookfood_theme';
const LANG_KEY = 'cookfood_language';

export function getStoredFavorites(): string[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleFavoriteInStorage(recipeId: string): string[] {
  const current = getStoredFavorites();
  const index = current.indexOf(recipeId);
  let updated: string[];
  if (index >= 0) {
    updated = current.filter((id) => id !== recipeId);
  } else {
    updated = [recipeId, ...current];
  }
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save favorite', e);
  }
  return updated;
}

export function getRecentlyViewed(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addRecentlyViewed(recipeId: string): string[] {
  const current = getRecentlyViewed().filter((id) => id !== recipeId);
  const updated = [recipeId, ...current].slice(0, 10);
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save recently viewed', e);
  }
  return updated;
}

export function getStoredShoppingList(): ShoppingItem[] {
  try {
    const raw = localStorage.getItem(SHOPPING_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveShoppingList(items: ShoppingItem[]): void {
  try {
    localStorage.setItem(SHOPPING_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save shopping list', e);
  }
}

export function getStoredTheme(): 'light' | 'dark' {
  try {
    const raw = localStorage.getItem(THEME_KEY);
    if (raw === 'dark' || raw === 'light') return raw;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function saveTheme(theme: 'light' | 'dark'): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    console.error('Failed to set theme', e);
  }
}

export function getStoredLanguage(): SupportedLanguage {
  try {
    const raw = localStorage.getItem(LANG_KEY);
    if (raw === 'te' || raw === 'ta' || raw === 'en') return raw as SupportedLanguage;
    return 'en';
  } catch {
    return 'en';
  }
}

export function saveLanguage(lang: SupportedLanguage): void {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    console.error('Failed to save language', e);
  }
}

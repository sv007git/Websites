import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ShoppingItem,
  SupportedLanguage,
  Recipe,
} from '../types/recipe';
import {
  getStoredFavorites,
  toggleFavoriteInStorage,
  getStoredShoppingList,
  saveShoppingList,
  getStoredTheme,
  saveTheme,
  getStoredLanguage,
  saveLanguage,
  getRecentlyViewed,
  addRecentlyViewed as saveRecentlyViewed,
} from '../utils/storage';
import { translations, Translations } from '../utils/i18n';
import { ScaledIngredient } from '../utils/quantityScaler';

interface AppContextType {
  favorites: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  shoppingList: ShoppingItem[];
  addIngredientsToShoppingList: (recipe: Recipe, scaledIngredients: ScaledIngredient[]) => void;
  addCustomShoppingItem: (name: string, quantityString?: string) => void;
  toggleShoppingItem: (id: string) => void;
  removeShoppingItem: (id: string) => void;
  clearShoppingList: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: Translations;
  recentlyViewedIds: string[];
  markRecipeViewed: (id: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isShoppingListOpen: boolean;
  setIsShoppingListOpen: (open: boolean) => void;
  isRecipeBuilderOpen: boolean;
  setIsRecipeBuilderOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguageState] = useState<SupportedLanguage>('en');
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShoppingListOpen, setIsShoppingListOpen] = useState(false);
  const [isRecipeBuilderOpen, setIsRecipeBuilderOpen] = useState(false);

  useEffect(() => {
    setFavorites(getStoredFavorites());
    setShoppingList(getStoredShoppingList());
    const initialTheme = getStoredTheme();
    setTheme(initialTheme);
    saveTheme(initialTheme);
    setLanguageState(getStoredLanguage());
    setRecentlyViewedIds(getRecentlyViewed());
  }, []);

  const toggleFavorite = (id: string) => {
    const updated = toggleFavoriteInStorage(id);
    setFavorites([...updated]);
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const addIngredientsToShoppingList = (recipe: Recipe, scaledIngredients: ScaledIngredient[]) => {
    const newItems: ShoppingItem[] = scaledIngredients.map((ing) => ({
      id: `${recipe.id}_${ing.name}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      recipeId: recipe.id,
      recipeTitle: recipe.title,
      name: ing.name,
      quantityString: `${ing.formattedQuantity} ${ing.displayUnit}`.trim(),
      completed: false,
      addedAt: Date.now(),
    }));

    const updated = [...newItems, ...shoppingList];
    setShoppingList(updated);
    saveShoppingList(updated);
  };

  const addCustomShoppingItem = (name: string, quantityString = '') => {
    if (!name.trim()) return;
    const item: ShoppingItem = {
      id: `custom_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: name.trim(),
      quantityString: quantityString.trim(),
      completed: false,
      addedAt: Date.now(),
    };
    const updated = [item, ...shoppingList];
    setShoppingList(updated);
    saveShoppingList(updated);
  };

  const toggleShoppingItem = (id: string) => {
    const updated = shoppingList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setShoppingList(updated);
    saveShoppingList(updated);
  };

  const removeShoppingItem = (id: string) => {
    const updated = shoppingList.filter((item) => item.id !== id);
    setShoppingList(updated);
    saveShoppingList(updated);
  };

  const clearShoppingList = () => {
    setShoppingList([]);
    saveShoppingList([]);
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    saveTheme(next);
  };

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    saveLanguage(lang);
  };

  const markRecipeViewed = (id: string) => {
    const updated = saveRecentlyViewed(id);
    setRecentlyViewedIds([...updated]);
  };

  const t = translations[language];

  return (
    <AppContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        shoppingList,
        addIngredientsToShoppingList,
        addCustomShoppingItem,
        toggleShoppingItem,
        removeShoppingItem,
        clearShoppingList,
        theme,
        toggleTheme,
        language,
        setLanguage,
        t,
        recentlyViewedIds,
        markRecipeViewed,
        isSearchOpen,
        setIsSearchOpen,
        isShoppingListOpen,
        setIsShoppingListOpen,
        isRecipeBuilderOpen,
        setIsRecipeBuilderOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};

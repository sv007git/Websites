import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Heart,
  ShoppingCart,
  Moon,
  Sun,
  Menu,
  X,
  CookingPot,
  Sparkles,
  FileCode2,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SupportedLanguage } from '../../types/recipe';

export const Header: React.FC = () => {
  const {
    favorites,
    shoppingList,
    theme,
    toggleTheme,
    language,
    setLanguage,
    t,
    setIsSearchOpen,
    setIsShoppingListOpen,
    setIsRecipeBuilderOpen,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'All Recipes', path: '/recipes' },
    { label: t.breakfast, path: '/category/breakfast' },
    { label: t.lunch, path: '/category/lunch' },
    { label: t.dinner, path: '/category/dinner' },
    { label: t.snacks, path: '/category/snacks' },
    { label: t.sweets, path: '/category/sweets' },
    { label: t.drinks, path: '/category/drinks' },
    { label: t.healthy, path: '/category/healthy' },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as SupportedLanguage);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#181614]/95 backdrop-blur-md border-b border-[#ebdcca] dark:border-[#2e2a24] transition-colors duration-200">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-saffron-600 via-amber-600 to-orange-600 text-white text-xs py-1 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span>Try our <strong>Dynamic Recipe Quantity Adapter</strong> — scale any recipe for 1 to 20+ people instantly!</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-gray-900 dark:text-white group focus:outline-none"
            aria-label="CookFood Homepage"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-saffron-500/20 group-hover:scale-105 transition-transform">
              <CookingPot className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-300 bg-clip-text text-transparent">
                CookFood
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 -mt-1">
                Indian Recipes & Smart Scale
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-saffron-100 dark:bg-saffron-900/40 text-saffron-700 dark:text-saffron-300 font-semibold shadow-sm'
                      : 'text-gray-700 dark:text-gray-200 hover:text-saffron-600 dark:hover:text-saffron-400 hover:bg-amber-50/60 dark:hover:bg-neutral-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 md:gap-2">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 md:p-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-amber-100/60 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
              title="Search Recipes (Ctrl+K)"
              aria-label="Search recipes"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping List Button */}
            <button
              onClick={() => setIsShoppingListOpen(true)}
              className="relative p-2 md:p-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-amber-100/60 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
              title="Shopping List"
              aria-label="Shopping List"
            >
              <ShoppingCart className="w-5 h-5" />
              {shoppingList.length > 0 && (
                <span className="absolute top-1 right-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center shadow">
                  {shoppingList.length}
                </span>
              )}
            </button>

            {/* Favorites Button */}
            <Link
              to="/favorites"
              className="relative p-2 md:p-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-amber-100/60 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
              title="Favorite Recipes"
              aria-label="Favorite Recipes"
            >
              <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'text-red-500 fill-red-500' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center shadow">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Recipe Builder / JSON Importer */}
            <button
              onClick={() => setIsRecipeBuilderOpen(true)}
              className="hidden lg:flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-amber-300 dark:border-neutral-700 text-amber-800 dark:text-amber-200 hover:bg-amber-50 dark:hover:bg-neutral-800 transition"
              title="Recipe Importer / Schema Editor"
            >
              <FileCode2 className="w-4 h-4 text-saffron-600 dark:text-saffron-400" />
              <span>Recipe Editor</span>
            </button>

            {/* Language Dropdown */}
            <div className="relative">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="text-xs font-medium bg-amber-50 dark:bg-neutral-800 border border-amber-200 dark:border-neutral-700 rounded-md px-2 py-1.5 text-gray-800 dark:text-gray-200 cursor-pointer focus:outline-none"
                aria-label="Select Language"
              >
                <option value="en">EN</option>
                <option value="te">తెలుగు</option>
                <option value="ta">தமிழ்</option>
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 md:p-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-amber-100/60 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-amber-100/60 dark:hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-[#181614] border-b border-[#ebdcca] dark:border-[#2e2a24] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    active
                      ? 'bg-saffron-100 dark:bg-saffron-950/60 text-saffron-800 dark:text-saffron-300 font-semibold'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-amber-50 dark:hover:bg-neutral-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-amber-100 dark:border-neutral-800 flex justify-between items-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsRecipeBuilderOpen(true);
              }}
              className="flex items-center gap-2 text-xs font-medium text-amber-800 dark:text-amber-300 py-1"
            >
              <FileCode2 className="w-4 h-4 text-saffron-600" />
              <span>Recipe JSON Importer / Builder</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Search, Heart, ShoppingCart } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { favorites, shoppingList, setIsSearchOpen, setIsShoppingListOpen } = useApp();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="xl:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#181614]/95 backdrop-blur-md border-t border-[#ebdcca] dark:border-[#2e2a24] px-3 py-1.5 flex items-center justify-around no-print"
      aria-label="Mobile Bottom Navigation"
    >
      {/* Home */}
      <Link
        to="/"
        className={`flex flex-col items-center py-1 px-2 rounded-xl transition ${
          isActive('/') ? 'text-saffron-600 dark:text-saffron-400 font-bold' : 'text-gray-500 dark:text-gray-400'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">Home</span>
      </Link>

      {/* Explore */}
      <Link
        to="/recipes"
        className={`flex flex-col items-center py-1 px-2 rounded-xl transition ${
          isActive('/recipes') ? 'text-saffron-600 dark:text-saffron-400 font-bold' : 'text-gray-500 dark:text-gray-400'
        }`}
      >
        <Compass className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">Explore</span>
      </Link>

      {/* Search */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="flex flex-col items-center py-1 px-2 text-gray-500 dark:text-gray-400 rounded-xl transition"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">Search</span>
      </button>

      {/* Favorites */}
      <Link
        to="/favorites"
        className={`relative flex flex-col items-center py-1 px-2 rounded-xl transition ${
          isActive('/favorites') ? 'text-saffron-600 dark:text-saffron-400 font-bold' : 'text-gray-500 dark:text-gray-400'
        }`}
      >
        <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'text-red-500 fill-red-500' : ''}`} />
        <span className="text-[10px] mt-0.5">Favorites</span>
        {favorites.length > 0 && (
          <span className="absolute top-0.5 right-1.5 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
            {favorites.length}
          </span>
        )}
      </Link>

      {/* Shopping List */}
      <button
        onClick={() => setIsShoppingListOpen(true)}
        className="relative flex flex-col items-center py-1 px-2 text-gray-500 dark:text-gray-400 rounded-xl transition"
        aria-label="Shopping List"
      >
        <ShoppingCart className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">List</span>
        {shoppingList.length > 0 && (
          <span className="absolute top-0.5 right-1.5 w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center">
            {shoppingList.length}
          </span>
        )}
      </button>
    </nav>
  );
};

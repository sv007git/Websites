import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { allRecipes } from '../../data/recipes';
import { getSearchSuggestions } from '../../utils/searchEngine';

const POPULAR_SEARCHES = ['Dosa', 'Paneer Butter Masala', 'Biryani', 'Chana Masala', 'Samosa', 'Filter Coffee', 'Gulab Jamun', 'Poha'];

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, t } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const suggestions = getSearchSuggestions(allRecipes, query);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelectRecipe = (slug: string) => {
    setIsSearchOpen(false);
    navigate(`/recipe/${slug}`);
  };

  const handleSelectQuickTag = (tag: string) => {
    setIsSearchOpen(false);
    navigate(`/search?q=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24">
      <div className="bg-white dark:bg-[#1a1715] rounded-3xl w-full max-w-2xl shadow-2xl border border-amber-200 dark:border-neutral-800 overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-5 border-b border-amber-100 dark:border-neutral-800 flex items-center gap-3">
          <Search className="w-6 h-6 text-saffron-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="flex-1 text-base sm:text-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300"
          >
            Esc
          </button>
        </form>

        {/* Suggestions or Quick Search Tags */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {query.trim().length >= 2 ? (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-wider mb-3">
                <span>Instant Suggestions ({suggestions.length})</span>
                <button
                  onClick={handleSubmit}
                  className="text-saffron-600 hover:underline flex items-center gap-1 font-semibold normal-case"
                >
                  <span>See all results for "{query}"</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {suggestions.length > 0 ? (
                <div className="space-y-2">
                  {suggestions.map((item) => (
                    <div
                      key={item.slug}
                      onClick={() => handleSelectRecipe(item.slug)}
                      className="group flex items-center justify-between p-2.5 rounded-2xl hover:bg-amber-50 dark:hover:bg-neutral-800/80 cursor-pointer transition border border-transparent hover:border-amber-200 dark:hover:border-neutral-700"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded-xl object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition truncate">
                            {item.title}
                          </h4>
                          <span className="text-xs text-saffron-600 dark:text-saffron-400 font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 dark:text-neutral-600 group-hover:text-saffron-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p className="text-sm font-medium">No recipes found matching "{query}"</p>
                  <p className="text-xs mt-1 text-gray-400">Try searching for ingredients like "paneer", "potato", or dishes like "dosa"</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
                <span>Popular Discoveries</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleSelectQuickTag(tag)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 dark:bg-neutral-800 border border-amber-200/80 dark:border-neutral-700 text-gray-800 dark:text-gray-200 hover:bg-saffron-500 hover:text-white hover:border-saffron-500 transition shadow-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, Sparkles } from 'lucide-react';
import { allRecipes } from '../../data/recipes';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { filterRecipes } from '../../utils/searchEngine';
import { RecipeFilterState } from '../../types/recipe';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCuisine = searchParams.get('cuisine') || 'all';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [filters, setFilters] = useState<RecipeFilterState>({
    searchQuery: initialQuery,
    mealTime: 'all',
    cuisine: initialCuisine,
    category: 'all',
    diet: 'all',
    maxTime: null,
    difficulty: 'all',
    sortBy: 'popular',
  });

  useEffect(() => {
    const q = searchParams.get('q') || '';
    const cuisine = searchParams.get('cuisine') || 'all';
    setSearchTerm(q);
    setFilters((prev) => ({
      ...prev,
      searchQuery: q,
      cuisine,
    }));
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
    setFilters((prev) => ({ ...prev, searchQuery: searchTerm }));
  };

  const results = filterRecipes(allRecipes, filters);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Search Header Bar */}
      <div className="bg-white dark:bg-[#1a1715] rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-neutral-800 shadow-sm space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 dark:text-saffron-400">
          Recipe Discovery Engine
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Search Indian Recipes
        </h1>

        <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-2xl">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by recipe name, ingredient (e.g. paneer, potato, dosa)..."
              className="w-full pl-11 pr-10 py-3 text-sm sm:text-base rounded-2xl border border-amber-200 dark:border-neutral-700 bg-amber-50/40 dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-saffron-500"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-saffron-600 hover:bg-saffron-500 text-white font-bold text-sm shadow-md transition"
          >
            Search
          </button>
        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Showing <strong>{results.length} recipes</strong> matching{' '}
          {filters.searchQuery ? `"${filters.searchQuery}"` : 'all criteria'}
        </p>
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} variant="standard" />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-[#1a1715] rounded-3xl border border-amber-200 dark:border-neutral-800 p-8 space-y-3">
          <p className="text-base font-bold text-gray-700 dark:text-gray-300">
            No recipes found matching your query
          </p>
          <p className="text-xs text-gray-400">
            Try checking for spelling or searching broader terms like "dal", "paneer", or "breakfast".
          </p>
        </div>
      )}
    </div>
  );
};

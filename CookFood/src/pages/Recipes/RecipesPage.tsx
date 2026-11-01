import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  LayoutGrid,
  List,
  Filter,
  X,
  Sparkles,
} from 'lucide-react';
import { allRecipes } from '../../data/recipes';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { RecipeFilters } from '../../components/RecipeFilters/RecipeFilters';
import { filterRecipes } from '../../utils/searchEngine';
import { RecipeFilterState, MealTime } from '../../types/recipe';

export const RecipesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Initialize filters from query params
  const [filters, setFilters] = useState<RecipeFilterState>({
    searchQuery: searchParams.get('q') || '',
    mealTime: (searchParams.get('meal') as MealTime) || 'all',
    cuisine: searchParams.get('cuisine') || 'all',
    category: searchParams.get('category') || 'all',
    diet: searchParams.get('diet') || 'all',
    maxTime: searchParams.get('maxTime') ? Number(searchParams.get('maxTime')) : null,
    difficulty: searchParams.get('difficulty') || 'all',
    sortBy: 'popular',
  });

  // Keep state in sync with URL
  useEffect(() => {
    const q = searchParams.get('q') || '';
    const meal = (searchParams.get('meal') as MealTime) || 'all';
    const cuisine = searchParams.get('cuisine') || 'all';
    setFilters((prev) => ({
      ...prev,
      searchQuery: q,
      mealTime: meal,
      cuisine,
    }));
  }, [searchParams]);

  const filteredRecipes = filterRecipes(allRecipes, filters);

  const removeFilter = (key: keyof RecipeFilterState) => {
    setFilters((prev) => ({
      ...prev,
      [key]: key === 'maxTime' ? null : key === 'sortBy' ? 'popular' : 'all',
      ...(key === 'searchQuery' ? { searchQuery: '' } : {}),
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-200/80 dark:border-neutral-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 dark:text-saffron-400">
            CookFood Recipe Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            Discover & Scale Recipes
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl">
            Filter through authentic Indian home recipes by meal time, cuisine, ingredients, and total cook duration.
          </p>
        </div>

        {/* View Mode & Mobile Filter Trigger */}
        <div className="flex items-center gap-2">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-1.5 px-4 py-2 rounded-xl bg-saffron-600 text-white font-bold text-xs shadow-sm"
          >
            <Filter className="w-4 h-4" />
            <span>Filters ({filteredRecipes.length})</span>
          </button>

          {/* Grid / List View Toggle */}
          <div className="flex items-center bg-white dark:bg-neutral-800 rounded-xl p-1 border border-amber-200 dark:border-neutral-700 shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition ${
                viewMode === 'grid'
                  ? 'bg-saffron-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition ${
                viewMode === 'list'
                  ? 'bg-saffron-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Filters Sidebar + Results */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <div className="hidden lg:block lg:col-span-1 sticky top-24">
          <RecipeFilters
            filters={filters}
            onFilterChange={setFilters}
            totalResults={filteredRecipes.length}
          />
        </div>

        {/* Results Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Active Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-neutral-800 text-amber-900 dark:text-amber-200">
                <span>Keyword: "{filters.searchQuery}"</span>
                <button onClick={() => removeFilter('searchQuery')}>
                  <X className="w-3.5 h-3.5 hover:text-red-500" />
                </button>
              </span>
            )}
            {filters.mealTime !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-saffron-100 dark:bg-neutral-800 text-saffron-900 dark:text-saffron-200">
                <span>Meal: {filters.mealTime}</span>
                <button onClick={() => removeFilter('mealTime')}>
                  <X className="w-3.5 h-3.5 hover:text-red-500" />
                </button>
              </span>
            )}
            {filters.cuisine !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-neutral-800 text-amber-900 dark:text-amber-200">
                <span>Cuisine: {filters.cuisine}</span>
                <button onClick={() => removeFilter('cuisine')}>
                  <X className="w-3.5 h-3.5 hover:text-red-500" />
                </button>
              </span>
            )}
            {filters.diet !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-neutral-800 text-emerald-900 dark:text-emerald-200">
                <span>Diet: {filters.diet}</span>
                <button onClick={() => removeFilter('diet')}>
                  <X className="w-3.5 h-3.5 hover:text-red-500" />
                </button>
              </span>
            )}
            {filters.maxTime && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-neutral-800 text-amber-900 dark:text-amber-200">
                <span>≤ {filters.maxTime} mins</span>
                <button onClick={() => removeFilter('maxTime')}>
                  <X className="w-3.5 h-3.5 hover:text-red-500" />
                </button>
              </span>
            )}
          </div>

          {/* Recipes Listing */}
          {filteredRecipes.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} variant="standard" />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} variant="horizontal" />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-16 bg-white dark:bg-[#1a1715] rounded-3xl border border-amber-200 dark:border-neutral-800 p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-neutral-800 mx-auto flex items-center justify-center text-saffron-600">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                No matching recipes found
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Try loosening your filters or clearing your search term to explore all delicious recipes.
              </p>
              <button
                onClick={() =>
                  setFilters({
                    searchQuery: '',
                    mealTime: 'all',
                    cuisine: 'all',
                    category: 'all',
                    diet: 'all',
                    maxTime: null,
                    difficulty: 'all',
                    sortBy: 'popular',
                  })
                }
                className="px-5 py-2.5 rounded-xl bg-saffron-600 text-white font-bold text-xs shadow-md"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Drawer Modal */}
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="bg-white dark:bg-[#1a1715] w-full max-w-sm h-full overflow-y-auto p-5 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-amber-100 dark:border-neutral-800">
              <h3 className="font-serif text-lg font-bold">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <RecipeFilters
              filters={filters}
              onFilterChange={(f) => {
                setFilters(f);
                setMobileFilterOpen(false);
              }}
              totalResults={filteredRecipes.length}
            />
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Filter, RotateCcw, Clock, Sparkles } from 'lucide-react';
import { RecipeFilterState, MealTime } from '../../types/recipe';
import { allCuisines } from '../../data/recipes';

interface RecipeFiltersProps {
  filters: RecipeFilterState;
  onFilterChange: (filters: RecipeFilterState) => void;
  totalResults: number;
}

const MEAL_TIMES: { label: string; value: MealTime | 'all' }[] = [
  { label: 'All Meals', value: 'all' },
  { label: 'Breakfast', value: 'breakfast' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Dinner', value: 'dinner' },
  { label: 'Evening Snacks', value: 'evening-snack' },
  { label: 'Sweets & Desserts', value: 'sweets' },
  { label: 'Drinks & Beverages', value: 'drinks' },
  { label: 'Healthy & Light', value: 'healthy' },
];

const DIET_OPTIONS = [
  { label: 'All Diets', value: 'all' },
  { label: 'Pure Vegetarian', value: 'vegetarian' },
  { label: 'Vegan', value: 'vegan' },
  { label: 'Gluten-Free', value: 'gluten-free' },
  { label: 'Jain Friendly', value: 'jain' },
];

const TIME_OPTIONS = [
  { label: 'Any Duration', value: null },
  { label: 'Under 15 mins', value: 15 },
  { label: 'Under 30 mins', value: 30 },
  { label: 'Under 45 mins', value: 45 },
  { label: 'Under 60 mins', value: 60 },
];

const DIFFICULTY_OPTIONS = [
  { label: 'All Levels', value: 'all' },
  { label: 'Easy', value: 'Easy' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Hard', value: 'Hard' },
];

export const RecipeFilters: React.FC<RecipeFiltersProps> = ({
  filters,
  onFilterChange,
  totalResults,
}) => {
  const handleReset = () => {
    onFilterChange({
      searchQuery: '',
      mealTime: 'all',
      cuisine: 'all',
      category: 'all',
      diet: 'all',
      maxTime: null,
      difficulty: 'all',
      sortBy: 'popular',
    });
  };

  const hasActiveFilters =
    filters.mealTime !== 'all' ||
    filters.cuisine !== 'all' ||
    filters.diet !== 'all' ||
    filters.maxTime !== null ||
    filters.difficulty !== 'all' ||
    filters.searchQuery !== '';

  return (
    <div className="bg-white dark:bg-[#1a1715] rounded-3xl p-5 sm:p-6 border border-[#ebdcca] dark:border-[#2e2a24] shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-amber-100 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-saffron-600" />
          <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">
            Filters
          </h3>
          <span className="text-xs bg-saffron-100 dark:bg-saffron-950/60 text-saffron-800 dark:text-saffron-300 font-bold px-2 py-0.5 rounded-full">
            {totalResults} recipes
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="text-xs text-saffron-600 dark:text-saffron-400 font-bold hover:underline flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
          Sort Recipes
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) =>
            onFilterChange({ ...filters, sortBy: e.target.value as RecipeFilterState['sortBy'] })
          }
          className="w-full text-xs sm:text-sm font-semibold rounded-xl border border-amber-200 dark:border-neutral-700 bg-amber-50/50 dark:bg-neutral-800 p-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-saffron-500"
        >
          <option value="popular">Most Popular & Top Rated</option>
          <option value="fastest">Fastest Total Cooking Time</option>
          <option value="alphabetical">Alphabetical (A to Z)</option>
          <option value="newest">Most Reviewed</option>
        </select>
      </div>

      {/* Meal Time Selector */}
      <div>
        <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2.5">
          Meal Time
        </label>
        <div className="flex flex-wrap gap-1.5">
          {MEAL_TIMES.map((m) => {
            const active = filters.mealTime === m.value;
            return (
              <button
                key={m.value}
                onClick={() => onFilterChange({ ...filters, mealTime: m.value })}
                className={`text-xs px-3 py-1.5 rounded-xl font-medium transition ${
                  active
                    ? 'bg-saffron-600 text-white font-bold shadow-sm'
                    : 'bg-amber-50/60 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100'
                }`}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cuisine Selector */}
      <div>
        <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
          Regional Cuisine
        </label>
        <select
          value={filters.cuisine}
          onChange={(e) => onFilterChange({ ...filters, cuisine: e.target.value })}
          className="w-full text-xs sm:text-sm font-semibold rounded-xl border border-amber-200 dark:border-neutral-700 bg-amber-50/50 dark:bg-neutral-800 p-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-saffron-500"
        >
          <option value="all">All Regional Cuisines</option>
          {allCuisines.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Dietary Preference */}
      <div>
        <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2.5">
          Dietary Preference
        </label>
        <div className="flex flex-wrap gap-1.5">
          {DIET_OPTIONS.map((d) => {
            const active = filters.diet === d.value;
            return (
              <button
                key={d.value}
                onClick={() => onFilterChange({ ...filters, diet: d.value })}
                className={`text-xs px-3 py-1.5 rounded-xl font-medium transition ${
                  active
                    ? 'bg-emerald-600 text-white font-bold shadow-sm'
                    : 'bg-amber-50/60 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100'
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Maximum Total Time */}
      <div>
        <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-saffron-600" />
          <span>Max Preparation & Cooking Time</span>
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {TIME_OPTIONS.map((opt) => {
            const active = filters.maxTime === opt.value;
            return (
              <button
                key={opt.label}
                onClick={() => onFilterChange({ ...filters, maxTime: opt.value })}
                className={`text-xs p-2 rounded-xl text-center font-medium transition ${
                  active
                    ? 'bg-saffron-600 text-white font-bold shadow-sm'
                    : 'bg-amber-50/60 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
          Difficulty Level
        </label>
        <div className="flex gap-2">
          {DIFFICULTY_OPTIONS.map((diff) => {
            const active = filters.difficulty === diff.value;
            return (
              <button
                key={diff.value}
                onClick={() => onFilterChange({ ...filters, difficulty: diff.value })}
                className={`flex-1 text-xs py-2 rounded-xl font-medium transition text-center ${
                  active
                    ? 'bg-saffron-600 text-white font-bold shadow-sm'
                    : 'bg-amber-50/60 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100'
                }`}
              >
                {diff.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

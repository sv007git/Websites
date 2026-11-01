import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass, ChefHat } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { allRecipes } from '../../data/recipes';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';

export const FavoritesPage: React.FC = () => {
  const { favorites, t } = useApp();

  const favoriteRecipes = allRecipes.filter((r) => favorites.includes(r.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-amber-200/80 dark:border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider mb-1">
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>Saved Recipes</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t.favorites}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            {favoriteRecipes.length} recipes bookmarked for quick kitchen access
          </p>
        </div>
      </div>

      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} variant="standard" />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-[#1a1715] rounded-3xl border border-amber-200 dark:border-neutral-800 p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/40 mx-auto flex items-center justify-center text-red-500">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
            {t.noFavorites}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Click the heart icon on any recipe card to save your favorite dishes here for quick access while cooking.
          </p>
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-saffron-600 hover:bg-saffron-500 text-white font-bold text-xs sm:text-sm shadow-md transition"
          >
            <Compass className="w-4 h-4" />
            <span>{t.exploreRecipes}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

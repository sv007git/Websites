import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Users,
  Flame,
  Heart,
  Star,
  ChefHat,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Recipe } from '../../types/recipe';
import { useApp } from '../../context/AppContext';

export type RecipeCardVariant = 'standard' | 'featured' | 'horizontal' | 'compact' | 'trending';

interface RecipeCardProps {
  recipe: Recipe;
  variant?: RecipeCardVariant;
  trendingRank?: number;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  variant = 'standard',
  trendingRank,
}) => {
  const { isFavorite, toggleFavorite, t } = useApp();
  const [imageLoaded, setImageLoaded] = useState(false);
  const favorite = isFavorite(recipe.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  // 1. COMPACT VARIANT (Great for carousels, sidebars, mobile quick picks)
  if (variant === 'compact') {
    return (
      <Link
        to={`/recipe/${recipe.slug}`}
        className="group flex items-center gap-3 p-2 rounded-xl bg-white dark:bg-[#1c1917] border border-[#ebdcca] dark:border-[#2e2a24] hover:shadow-md transition duration-200"
      >
        <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-amber-100 dark:bg-neutral-800">
          <img
            src={recipe.image}
            alt={recipe.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-saffron-600 dark:text-saffron-400">
            <span>{recipe.cuisine[0]}</span>
            <span>•</span>
            <span>{recipe.totalTime} mins</span>
          </div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors truncate mt-0.5">
            {recipe.title}
          </h4>
          <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mt-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{recipe.rating.toFixed(1)}</span>
            <span className="text-gray-400 font-normal">({recipe.reviewCount})</span>
          </div>
        </div>
      </Link>
    );
  }

  // 2. HORIZONTAL VARIANT (Great for search results & list view)
  if (variant === 'horizontal') {
    return (
      <div className="group relative flex flex-col sm:flex-row bg-white dark:bg-[#1a1715] rounded-2xl overflow-hidden border border-[#ebdcca] dark:border-[#2e2a24] shadow-card hover:shadow-card-hover transition-all duration-300">
        <Link to={`/recipe/${recipe.slug}`} className="sm:w-2/5 relative aspect-[16/10] sm:aspect-auto overflow-hidden bg-amber-100 dark:bg-neutral-800">
          <img
            src={recipe.image}
            alt={recipe.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {/* Veg Indicator Badge */}
          <div className="absolute top-3 left-3 bg-white/95 dark:bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Veg</span>
          </div>
        </Link>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-white shadow-md transition-all focus:outline-none"
          title={favorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-label="Toggle Favorite"
        >
          <Heart className={`w-4 h-4 transition-colors ${favorite ? 'text-red-500 fill-red-500' : ''}`} />
        </button>

        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-saffron-600 dark:text-saffron-400 mb-1.5 flex-wrap">
              <span className="bg-saffron-50 dark:bg-saffron-950/60 px-2 py-0.5 rounded-md border border-saffron-200 dark:border-saffron-900/50">
                {recipe.cuisine.join(', ')}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 dark:text-gray-400 capitalize">{recipe.difficulty}</span>
            </div>

            <Link to={`/recipe/${recipe.slug}`}>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors line-clamp-1">
                {recipe.title}
              </h3>
            </Link>
            {recipe.hindiTitle && (
              <p className="text-xs text-amber-700/80 dark:text-amber-400/80 font-medium -mt-0.5 mb-1.5">
                {recipe.hindiTitle}
              </p>
            )}

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
              {recipe.description}
            </p>
          </div>

          <div className="pt-3 border-t border-amber-100 dark:border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-saffron-600" />
                {recipe.totalTime}m
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Users className="w-3.5 h-3.5 text-saffron-600" />
                {recipe.servings}p
              </span>
              <span className="flex items-center gap-1 font-semibold text-amber-600">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {recipe.rating.toFixed(1)}
              </span>
            </div>

            <Link
              to={`/recipe/${recipe.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-saffron-600 dark:text-saffron-400 group-hover:translate-x-0.5 transition-transform"
            >
              <span>{t.viewRecipe}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. FEATURED HERO VARIANT
  if (variant === 'featured') {
    return (
      <div className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#1a1715] border border-[#ebdcca] dark:border-[#2e2a24] shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
        <Link to={`/recipe/${recipe.slug}`} className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-amber-100 dark:bg-neutral-800 min-h-[300px]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-saffron-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chef's Choice</span>
            </span>
            <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
              100% Pure Veg
            </span>
          </div>
        </Link>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-white shadow-lg transition-all focus:outline-none"
          title="Save Recipe"
          aria-label="Toggle Favorite"
        >
          <Heart className={`w-5 h-5 ${favorite ? 'text-red-500 fill-red-500' : ''}`} />
        </button>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-saffron-600 dark:text-saffron-400 mb-2 uppercase tracking-wider">
              <span>{recipe.cuisine.join(' • ')}</span>
              <span>•</span>
              <span>{recipe.difficulty}</span>
            </div>

            <Link to={`/recipe/${recipe.slug}`}>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors leading-tight mb-2">
                {recipe.title}
              </h2>
            </Link>

            {recipe.hindiTitle && (
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3">
                {recipe.hindiTitle}
              </p>
            )}

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {recipe.description}
            </p>

            <div className="grid grid-cols-3 gap-3 p-3 bg-warmcream-100 dark:bg-neutral-900/60 rounded-xl border border-amber-200/60 dark:border-neutral-800 mb-6 text-center">
              <div>
                <span className="block text-[11px] uppercase font-semibold text-gray-500 dark:text-gray-400">Prep Time</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{recipe.prepTime} mins</span>
              </div>
              <div className="border-x border-amber-200 dark:border-neutral-800">
                <span className="block text-[11px] uppercase font-semibold text-gray-500 dark:text-gray-400">Cook Time</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{recipe.cookTime} mins</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase font-semibold text-gray-500 dark:text-gray-400">Servings</span>
                <span className="text-sm font-bold text-saffron-600 dark:text-saffron-400">{recipe.servings} people</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{recipe.rating.toFixed(1)}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">({recipe.reviewCount} reviews)</span>
            </div>

            <Link
              to={`/recipe/${recipe.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-saffron-600 to-amber-600 text-white font-bold text-sm shadow-md hover:from-saffron-500 hover:to-amber-500 transition-all"
            >
              <span>{t.viewRecipe}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 4. TRENDING VARIANT (Includes flame icon and ranking number)
  if (variant === 'trending') {
    return (
      <div className="group relative bg-white dark:bg-[#1a1715] rounded-2xl overflow-hidden border border-[#ebdcca] dark:border-[#2e2a24] shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
        <Link to={`/recipe/${recipe.slug}`} className="relative aspect-[4/3] overflow-hidden bg-amber-100 dark:bg-neutral-800">
          <img
            src={recipe.image}
            alt={recipe.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {trendingRank && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-black text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
              <Flame className="w-3.5 h-3.5 fill-white text-white" />
              <span>#{trendingRank} Trending</span>
            </div>
          )}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-white shadow-md transition-all focus:outline-none"
            title="Favorite"
            aria-label="Toggle Favorite"
          >
            <Heart className={`w-4 h-4 ${favorite ? 'text-red-500 fill-red-500' : ''}`} />
          </button>
        </Link>

        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-saffron-600 dark:text-saffron-400 font-semibold mb-1">
              <span>{recipe.cuisine[0]}</span>
              <span>•</span>
              <span className="capitalize">{recipe.categories[0]}</span>
            </div>
            <Link to={`/recipe/${recipe.slug}`}>
              <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors line-clamp-1">
                {recipe.title}
              </h3>
            </Link>
          </div>

          <div className="pt-3 mt-3 border-t border-amber-100 dark:border-neutral-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-saffron-600" />
              {recipe.totalTime} mins
            </span>
            <span className="flex items-center gap-1 font-bold text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {recipe.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 5. STANDARD CARD VARIANT (Default Hebbar's Kitchen-inspired card)
  return (
    <div className="group relative bg-white dark:bg-[#1a1715] rounded-2xl overflow-hidden border border-[#ebdcca] dark:border-[#2e2a24] shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail */}
      <Link to={`/recipe/${recipe.slug}`} className="relative aspect-[4/3] overflow-hidden bg-amber-100 dark:bg-neutral-800 block">
        <img
          src={recipe.image}
          alt={recipe.title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="bg-white/95 dark:bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Veg</span>
          </span>
          {recipe.difficulty && (
            <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
              {recipe.difficulty}
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-white shadow-md transition-all focus:outline-none"
          title={favorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-label="Toggle Favorite"
        >
          <Heart className={`w-4 h-4 transition-colors ${favorite ? 'text-red-500 fill-red-500' : ''}`} />
        </button>
      </Link>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Cuisine / Category Pill */}
          <div className="flex items-center gap-1.5 text-xs text-saffron-600 dark:text-saffron-400 font-semibold mb-1">
            <span>{recipe.cuisine[0]}</span>
            <span>•</span>
            <span className="capitalize">{recipe.mealTimes[0]}</span>
          </div>

          {/* Title */}
          <Link to={`/recipe/${recipe.slug}`} className="block">
            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors line-clamp-1 mb-1">
              {recipe.title}
            </h3>
          </Link>

          {/* Hindi/Regional Title */}
          {recipe.hindiTitle && (
            <p className="text-xs text-amber-700/80 dark:text-amber-400/80 font-medium -mt-0.5 mb-2">
              {recipe.hindiTitle}
            </p>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
            {recipe.description}
          </p>
        </div>

        {/* Metadata & Actions */}
        <div className="pt-3 border-t border-amber-100 dark:border-neutral-800">
          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-3">
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-saffron-600" />
              {recipe.totalTime} mins
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Users className="w-3.5 h-3.5 text-saffron-600" />
              {recipe.servings} servings
            </span>
            <span className="flex items-center gap-1 font-bold text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {recipe.rating.toFixed(1)}
            </span>
          </div>

          <Link
            to={`/recipe/${recipe.slug}`}
            className="w-full py-2 px-3 rounded-xl bg-amber-50 dark:bg-neutral-800 text-saffron-700 dark:text-saffron-400 hover:bg-saffron-600 hover:text-white dark:hover:bg-saffron-600 dark:hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-amber-200/60 dark:border-neutral-700"
          >
            <ChefHat className="w-3.5 h-3.5" />
            <span>{t.viewRecipe}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

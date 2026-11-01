import React, { useState } from 'react';
import {
  Minus,
  Plus,
  RotateCcw,
  Copy,
  Check,
  Printer,
  ShoppingCart,
  Info,
  Sparkles,
} from 'lucide-react';
import { Recipe } from '../../types/recipe';
import {
  scaleIngredientsList,
  getScalingGuidance,
  formatIngredientsAsText,
  ScaledIngredient,
} from '../../utils/quantityScaler';
import { useApp } from '../../context/AppContext';

interface ServingAdapterProps {
  recipe: Recipe;
  servings: number;
  onServingsChange: (newServings: number) => void;
  scaledIngredients: ScaledIngredient[];
}

const PRESET_SERVINGS = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20];

export const ServingAdapter: React.FC<ServingAdapterProps> = ({
  recipe,
  servings,
  onServingsChange,
  scaledIngredients,
}) => {
  const { addIngredientsToShoppingList, t } = useApp();
  const [copied, setCopied] = useState(false);
  const [addedToList, setAddedToList] = useState(false);

  const originalServings = recipe.servings;
  const guidance = getScalingGuidance(originalServings, servings);
  const scalingRatio = (servings / originalServings).toFixed(2);

  const handleDecrement = () => {
    if (servings > 1) {
      onServingsChange(servings - 1);
    }
  };

  const handleIncrement = () => {
    if (servings < 100) {
      onServingsChange(servings + 1);
    }
  };

  const handleReset = () => {
    onServingsChange(originalServings);
  };

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= 100) {
      onServingsChange(val);
    } else if (e.target.value === '') {
      // allow typing
    }
  };

  const handleCopyIngredients = () => {
    const text = formatIngredientsAsText(recipe.title, servings, scaledIngredients);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddToShoppingList = () => {
    addIngredientsToShoppingList(recipe, scaledIngredients);
    setAddedToList(true);
    setTimeout(() => setAddedToList(false), 2500);
  };

  return (
    <div className="bg-gradient-to-br from-amber-50/80 via-warmcream-50 to-orange-50/50 dark:from-neutral-900 dark:via-[#1c1917] dark:to-neutral-900 rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-saffron-300 dark:border-saffron-900/60 shadow-lg mb-8 transition-colors">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-amber-200/80 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-600 dark:text-saffron-400 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>{t.dynamicServing}</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
            {t.adjustServings}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
            Original recipe: <strong>{originalServings} people</strong>. Current scale:{' '}
            <strong className="text-saffron-600 dark:text-saffron-400">{servings} people</strong> ({scalingRatio}x ratio)
          </p>
        </div>

        {servings !== originalServings && (
          <button
            onClick={handleReset}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 border border-amber-300 dark:border-neutral-700 hover:bg-amber-100/50 transition shadow-sm"
            title="Reset to author's default servings"
          >
            <RotateCcw className="w-3.5 h-3.5 text-saffron-600" />
            <span>{t.resetOriginal}</span>
          </button>
        )}
      </div>

      {/* Main Counter & Quick Selectors */}
      <div className="py-6 space-y-4">
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          {/* Decrement Button */}
          <button
            onClick={handleDecrement}
            disabled={servings <= 1}
            className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-800 border-2 border-saffron-400 dark:border-saffron-700 text-gray-800 dark:text-white flex items-center justify-center shadow-md hover:bg-saffron-50 dark:hover:bg-neutral-700 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            aria-label="Decrease servings"
          >
            <Minus className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Direct Input & Label */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="1"
                max="100"
                value={servings}
                onChange={handleCustomInput}
                className="w-20 sm:w-24 h-12 sm:h-14 text-center font-serif text-3xl sm:text-4xl font-black bg-white dark:bg-neutral-800 border-2 border-saffron-500 rounded-2xl text-gray-900 dark:text-white shadow-inner focus:outline-none focus:ring-4 focus:ring-saffron-400/30"
                aria-label="Custom serving count"
              />
              <span className="font-serif text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-300 ml-1">
                {servings === 1 ? t.person : t.people}
              </span>
            </div>
            <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium mt-1">
              Tap or type any number
            </span>
          </div>

          {/* Increment Button */}
          <button
            onClick={handleIncrement}
            disabled={servings >= 100}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-saffron-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-saffron-500/30 hover:from-saffron-600 hover:to-orange-700 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            aria-label="Increase servings"
          >
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Quick Serving Preset Buttons */}
        <div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap max-w-xl mx-auto">
            {PRESET_SERVINGS.map((count) => {
              const isSelected = servings === count;
              const isDefault = count === originalServings;
              return (
                <button
                  key={count}
                  onClick={() => onServingsChange(count)}
                  className={`min-w-[36px] sm:min-w-[42px] h-9 sm:h-10 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative ${
                    isSelected
                      ? 'bg-saffron-600 text-white shadow-md shadow-saffron-600/30 scale-105'
                      : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border border-amber-200 dark:border-neutral-700 hover:border-saffron-400 hover:bg-amber-50/80 dark:hover:bg-neutral-700'
                  }`}
                >
                  <span>{count}</span>
                  {isDefault && (
                    <span
                      className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-neutral-900"
                      title="Author's original default"
                    />
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-[11px] text-center text-gray-500 dark:text-gray-400 mt-2">
            Green dot indicates the recipe author's original base serving ({originalServings} people).
          </p>
        </div>
      </div>

      {/* Culinary Guidance Callout for Non-Linear Batch Scaling */}
      {guidance && (
        <div className="mt-2 mb-4 p-3.5 rounded-2xl bg-amber-100/90 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{guidance}</p>
        </div>
      )}

      {/* Action Toolbar: Copy, Print, Add to Shopping List */}
      <div className="pt-4 border-t border-amber-200/80 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Copy Ingredients */}
          <button
            onClick={handleCopyIngredients}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-neutral-800 border border-amber-200 dark:border-neutral-700 text-gray-800 dark:text-gray-200 hover:bg-amber-50 dark:hover:bg-neutral-700 shadow-sm transition active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-saffron-600" />}
            <span>{copied ? t.copied : t.copyIngredients}</span>
          </button>

          {/* Print Recipe */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-neutral-800 border border-amber-200 dark:border-neutral-700 text-gray-800 dark:text-gray-200 hover:bg-amber-50 dark:hover:bg-neutral-700 shadow-sm transition active:scale-95 no-print"
          >
            <Printer className="w-4 h-4 text-saffron-600" />
            <span>{t.printRecipe}</span>
          </button>
        </div>

        {/* Add Scaled to Shopping List */}
        <button
          onClick={handleAddToShoppingList}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-md transition active:scale-95"
        >
          {addedToList ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
          <span>{addedToList ? t.addedToShoppingList : t.addToShoppingList}</span>
        </button>
      </div>
    </div>
  );
};

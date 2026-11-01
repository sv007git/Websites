import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  Users,
  Flame,
  Heart,
  Star,
  ChefHat,
  Share2,
  Printer,
  ChevronRight,
  Sparkles,
  Play,
  Lightbulb,
  RefreshCw,
  Box,
  Check,
  Activity,
  MessageCircle,
} from 'lucide-react';
import { getRecipeBySlug, getRelatedRecipes } from '../../data/recipes';
import { scaleIngredientsList } from '../../utils/quantityScaler';
import { ServingAdapter } from '../../components/ServingAdapter/ServingAdapter';
import { IngredientList } from '../../components/IngredientList/IngredientList';
import { CookingSteps } from '../../components/CookingSteps/CookingSteps';
import { CookingMode } from '../../components/CookingMode/CookingMode';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { useApp } from '../../context/AppContext';

export const RecipeDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, markRecipeViewed, t } = useApp();

  const recipe = getRecipeBySlug(slug || '');

  // Dynamic servings state (default to recipe author's servings)
  const [servings, setServings] = useState<number>(recipe?.servings || 4);
  const [isCookingMode, setIsCookingMode] = useState<boolean>(false);
  const [shareCopied, setShareCopied] = useState<boolean>(false);

  useEffect(() => {
    if (recipe) {
      setServings(recipe.servings);
      markRecipeViewed(recipe.id);
      window.scrollTo(0, 0);

      // Dynamic page title update
      document.title = `${recipe.title} Recipe — Scalable Servings | CookFood`;
    }
  }, [slug, recipe]);

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold">Recipe Not Found</h2>
        <p className="text-gray-500">The recipe you are looking for doesn't exist or was moved.</p>
        <Link
          to="/recipes"
          className="inline-block px-6 py-2.5 rounded-xl bg-saffron-600 text-white font-bold text-sm"
        >
          Browse All Recipes
        </Link>
      </div>
    );
  }

  const favorite = isFavorite(recipe.id);
  const scaledIngredients = scaleIngredientsList(recipe.ingredients, recipe.servings, servings);
  const related = getRelatedRecipes(recipe, 4);

  // Web Share API or copy link
  const handleShare = async () => {
    const shareData = {
      title: `${recipe.title} Recipe — CookFood`,
      text: `Check out this delicious ${recipe.title} recipe on CookFood! You can scale all ingredient quantities automatically.`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  const handleWhatsAppShare = () => {
    const text = `🍽️ *${recipe.title}* on CookFood\n${recipe.description}\n\n👉 View & scale ingredients here: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  // Schema.org Recipe JSON-LD for rich snippet SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: [recipe.image],
    author: {
      '@type': 'Person',
      name: recipe.author || 'CookFood',
    },
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${recipe.totalTime}M`,
    recipeYield: `${servings} servings`,
    recipeCategory: recipe.categories[0] || 'Main',
    recipeCuisine: recipe.cuisine[0] || 'Indian',
    recipeIngredient: scaledIngredients.map((i) => i.displayText),
    recipeInstructions: recipe.instructions.map((step) => ({
      '@type': 'HowToStep',
      text: step.instruction,
      name: step.title || `Step ${step.stepNumber}`,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: recipe.rating,
      reviewCount: recipe.reviewCount,
    },
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BREADCRUMBS */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-semibold no-print" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-saffron-600 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/category/${recipe.mealTimes[0]}`} className="hover:text-saffron-600 transition capitalize">
          {recipe.mealTimes[0]}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-900 dark:text-white truncate max-w-xs">{recipe.title}</span>
      </nav>

      {/* 2. TITLE & HEADER METADATA */}
      <div className="space-y-4">
        {/* Badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>100% Vegetarian</span>
          </span>
          {recipe.cuisine.map((c) => (
            <span
              key={c}
              className="bg-saffron-50 dark:bg-saffron-950/60 text-saffron-800 dark:text-saffron-300 border border-saffron-200 dark:border-saffron-800 px-2.5 py-0.5 rounded-full text-xs font-bold"
            >
              {c}
            </span>
          ))}
          <span className="bg-amber-100 dark:bg-neutral-800 text-amber-900 dark:text-amber-200 px-2.5 py-0.5 rounded-full text-xs font-bold capitalize">
            {recipe.difficulty}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
          {recipe.title}
        </h1>

        {/* Hindi / Regional Title */}
        {recipe.hindiTitle && (
          <p className="font-serif text-lg sm:text-xl font-bold text-saffron-700 dark:text-saffron-400">
            {recipe.hindiTitle} {recipe.regionalTitle ? `• ${recipe.regionalTitle}` : ''}
          </p>
        )}

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
          {recipe.description}
        </p>

        {/* Actions Bar */}
        <div className="flex items-center justify-between gap-3 pt-2 border-y border-amber-200/80 dark:border-neutral-800 py-3 flex-wrap no-print">
          <div className="flex items-center gap-3">
            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(recipe.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition ${
                favorite
                  ? 'bg-red-50 dark:bg-red-950/40 text-red-600 border-red-300 dark:border-red-800'
                  : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border-amber-200 dark:border-neutral-700 hover:bg-amber-50'
              }`}
            >
              <Heart className={`w-4 h-4 ${favorite ? 'fill-red-500 text-red-500' : ''}`} />
              <span>{favorite ? 'Saved to Favorites' : 'Add to Favorites'}</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border border-amber-200 dark:border-neutral-700 hover:bg-amber-50 transition"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* WhatsApp Share */}
            <button
              onClick={handleWhatsAppShare}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-sm"
              title="Share on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* General Share */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-saffron-50 dark:bg-neutral-800 text-saffron-700 dark:text-saffron-300 border border-saffron-200 dark:border-neutral-700 hover:bg-saffron-100 transition"
            >
              {shareCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span>{shareCopied ? 'Link Copied!' : 'Share'}</span>
            </button>

            {/* Hands-Free Cooking Mode Button */}
            <button
              onClick={() => setIsCookingMode(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-saffron-600 to-orange-600 hover:from-saffron-500 hover:to-orange-500 text-white font-bold text-xs shadow-md active:scale-95 transition"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Start Cooking Mode</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. HERO IMAGE & METADATA GRID */}
      <div className="space-y-6">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border border-amber-200 dark:border-neutral-800 bg-amber-100 dark:bg-neutral-800">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Cooking Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-white dark:bg-[#1a1715] p-4 rounded-2xl border border-amber-200/80 dark:border-neutral-800 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
              Prep Time
            </span>
            <div className="font-serif text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center justify-center gap-1">
              <Clock className="w-4 h-4 text-saffron-600" />
              <span>{recipe.prepTime}m</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1715] p-4 rounded-2xl border border-amber-200/80 dark:border-neutral-800 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
              Cook Time
            </span>
            <div className="font-serif text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 text-orange-600" />
              <span>{recipe.cookTime}m</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1715] p-4 rounded-2xl border border-amber-200/80 dark:border-neutral-800 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
              Total Time
            </span>
            <div className="font-serif text-xl sm:text-2xl font-black text-saffron-600 dark:text-saffron-400">
              {recipe.totalTime} mins
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1715] p-4 rounded-2xl border border-amber-200/80 dark:border-neutral-800 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
              Community Rating
            </span>
            <div className="font-serif text-xl sm:text-2xl font-black text-amber-500 flex items-center justify-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{recipe.rating.toFixed(1)}</span>
              <span className="text-xs font-normal text-gray-400">({recipe.reviewCount})</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. DYNAMIC SERVING QUANTITY ADAPTER (THE MASTER SIGNATURE FEATURE) */}
      <section aria-label="Dynamic Recipe Quantity Adapter">
        <ServingAdapter
          recipe={recipe}
          servings={servings}
          onServingsChange={setServings}
          scaledIngredients={scaledIngredients}
        />
      </section>

      {/* 5. INGREDIENTS LIST */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-amber-200/80 dark:border-neutral-800 pb-3">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              {t.ingredients}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Quantities scaled for <strong>{servings} {servings === 1 ? 'person' : 'people'}</strong>. Tap items as you prep.
            </p>
          </div>
          <span className="text-xs bg-saffron-100 dark:bg-saffron-950/60 text-saffron-800 dark:text-saffron-300 font-bold px-2.5 py-1 rounded-full">
            {scaledIngredients.length} Items
          </span>
        </div>

        <IngredientList ingredients={scaledIngredients} recipeTitle={recipe.title} />
      </section>

      {/* 6. STEP-BY-STEP COOKING INSTRUCTIONS */}
      <section className="space-y-6 pt-6">
        <div className="border-b border-amber-200/80 dark:border-neutral-800 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            {t.instructions}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Follow our tested step-by-step method with built-in timers.
          </p>
        </div>

        <CookingSteps steps={recipe.instructions} />
      </section>

      {/* 7. CHEF TIPS & CULINARY NOTES */}
      {recipe.tips && recipe.tips.length > 0 && (
        <section className="bg-amber-50/70 dark:bg-[#1c1917] rounded-3xl p-6 sm:p-8 border border-amber-200 dark:border-neutral-800 space-y-4">
          <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-saffron-600" />
            <span>{t.chefTips}</span>
          </h3>
          <ul className="space-y-2.5 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {recipe.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-2.5 shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 8. SUBSTITUTIONS, STORAGE & NUTRITION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Storage Advice */}
        {recipe.storage && (
          <div className="bg-white dark:bg-[#1a1715] rounded-3xl p-6 border border-amber-200 dark:border-neutral-800 space-y-2">
            <h4 className="font-serif text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Box className="w-4 h-4 text-saffron-600" />
              <span>{t.storageTips}</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {recipe.storage}
            </p>
          </div>
        )}

        {/* Nutritional Estimate */}
        {recipe.nutrition && (
          <div className="bg-white dark:bg-[#1a1715] rounded-3xl p-6 border border-amber-200 dark:border-neutral-800 space-y-3">
            <h4 className="font-serif text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>Verified Nutrition Estimate (per serving)</span>
            </h4>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-neutral-800">
                <span className="block text-gray-400">Calories</span>
                <span className="font-bold text-gray-900 dark:text-white text-sm">{recipe.nutrition.calories}</span>
              </div>
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-neutral-800">
                <span className="block text-gray-400">Protein</span>
                <span className="font-bold text-emerald-600 text-sm">{recipe.nutrition.protein}</span>
              </div>
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-neutral-800">
                <span className="block text-gray-400">Carbs</span>
                <span className="font-bold text-gray-900 dark:text-white text-sm">{recipe.nutrition.carbs}</span>
              </div>
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-neutral-800">
                <span className="block text-gray-400">Fat</span>
                <span className="font-bold text-gray-900 dark:text-white text-sm">{recipe.nutrition.fat}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 9. YOU MAY ALSO LIKE (RELATED RECIPES) */}
      {related.length > 0 && (
        <section className="space-y-6 pt-8 border-t border-amber-200/80 dark:border-neutral-800 no-print">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
              {t.relatedRecipes}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Dishes with complementary spices, meal times, and textures
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((rel) => (
              <RecipeCard key={rel.id} recipe={rel} variant="standard" />
            ))}
          </div>
        </section>
      )}

      {/* 10. COOKING MODE OVERLAY (FULL SCREEN DISTRACTION-FREE) */}
      {isCookingMode && (
        <CookingMode
          recipe={recipe}
          servings={servings}
          scaledIngredients={scaledIngredients}
          onClose={() => setIsCookingMode(false)}
        />
      )}
    </article>
  );
};

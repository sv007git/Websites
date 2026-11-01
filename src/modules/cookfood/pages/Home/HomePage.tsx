import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  Heart,
  Flame,
  Award,
  Coffee,
  UtensilsCrossed,
  Sun,
  Moon,
  Cookie,
  Salad,
  Wine,
  Scale,
} from 'lucide-react';
import {
  allRecipes,
  getFeaturedRecipes,
  getTrendingRecipes,
  getLatestRecipes,
  getRecipesByMealTime,
} from '../../data/recipes';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { MealTime } from '../../types/recipe';
import { useApp } from '../../context/AppContext';

export const HomePage: React.FC = () => {
  const { t } = useApp();
  const navigate = useNavigate();
  const [heroSearch, setHeroSearch] = useState('');
  const [activeMealTab, setActiveMealTab] = useState<MealTime>('breakfast');

  const featured = getFeaturedRecipes();
  const heroFeatured = featured[0] || allRecipes[0];
  const secondaryFeatured = featured.slice(1, 3);
  const trending = getTrendingRecipes().slice(0, 4);
  const latest = getLatestRecipes(8);
  const mealTimeRecipes = getRecipesByMealTime(activeMealTab).slice(0, 6);
  const sweets = getRecipesByMealTime('sweets').slice(0, 4);
  const drinks = getRecipesByMealTime('drinks').slice(0, 4);
  const healthy = getRecipesByMealTime('healthy').slice(0, 4);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(heroSearch.trim())}`);
    }
  };

  const quickCategories = [
    { label: t.breakfast, path: '/category/breakfast', icon: Sun, color: 'from-amber-400 to-orange-500', count: '10 recipes' },
    { label: t.lunch, path: '/category/lunch', icon: UtensilsCrossed, color: 'from-orange-500 to-red-500', count: '10 recipes' },
    { label: t.dinner, path: '/category/dinner', icon: Moon, color: 'from-purple-600 to-indigo-600', count: '8 recipes' },
    { label: t.snacks, path: '/category/snacks', icon: Cookie, color: 'from-yellow-500 to-amber-600', count: '8 recipes' },
    { label: t.sweets, path: '/category/sweets', icon: Award, color: 'from-pink-500 to-rose-600', count: '8 recipes' },
    { label: t.drinks, path: '/category/drinks', icon: Coffee, color: 'from-cyan-500 to-blue-600', count: '6 recipes' },
    { label: t.healthy, path: '/category/healthy', icon: Salad, color: 'from-emerald-500 to-teal-600', count: '6 recipes' },
  ];

  const regionalHubs = [
    { name: 'South Indian', desc: 'Idlis, crispy dosas, filter coffee & tangy sambars', count: 18, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80' },
    { name: 'Punjabi & North', desc: 'Dal makhani, paneer butter masala & tandoori rotis', count: 16, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80' },
    { name: 'Karnataka Flavors', desc: 'Bisi bele bath, Mysore pak & authentic rava upma', count: 8, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80' },
    { name: 'Kerala Coconut', desc: 'Soft appams, vegetable stew & traditional avial', count: 6, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-warmcream-50 to-white dark:from-[#1c1815] dark:via-[#141210] dark:to-[#121110] border-b border-[#ebdcca] dark:border-[#2a2622] pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading & Search */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-100 dark:bg-saffron-950/70 text-saffron-800 dark:text-saffron-300 text-xs font-bold border border-saffron-200 dark:border-saffron-900/50 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Smart Indian Cooking Platform</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.12]">
                Discover Something{' '}
                <span className="bg-gradient-to-r from-saffron-600 via-amber-600 to-orange-600 dark:from-saffron-400 dark:to-amber-300 bg-clip-text text-transparent">
                  Delicious
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                {t.tagline} Powered by our unique <strong>Dynamic Quantity Adapter</strong> that automatically recalculates exact ingredients for any family size.
              </p>

              {/* Instant Hero Search Box */}
              <form
                onSubmit={handleSearchSubmit}
                className="relative max-w-lg mx-auto lg:mx-0 flex items-center shadow-lg rounded-2xl bg-white dark:bg-[#1f1c19] border-2 border-saffron-400/80 p-1.5 focus-within:ring-4 focus-within:ring-saffron-500/20 transition-all"
              >
                <Search className="w-5 h-5 text-saffron-500 ml-3 shrink-0" />
                <input
                  type="text"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  placeholder="Search recipes, ingredients (e.g. dosa, paneer, biryani)..."
                  className="w-full px-3 py-2 text-sm sm:text-base bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-saffron-600 to-orange-600 hover:from-saffron-500 hover:to-orange-500 text-white font-bold text-xs sm:text-sm shadow-md transition shrink-0"
                >
                  Search
                </button>
              </form>

              {/* Highlights Chips */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-gray-500 dark:text-gray-400 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-saffron-600" />
                  <span>Instant Ingredient Scaler</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-saffron-600" />
                  <span>Interactive Cooking Timers</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>50+ Tested Recipes</span>
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Food Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-r from-saffron-400 to-orange-500 rounded-3xl blur-xl opacity-20" />
                <div className="relative bg-white dark:bg-[#1a1715] rounded-3xl p-3 shadow-2xl border border-amber-200 dark:border-neutral-800">
                  <RecipeCard recipe={heroFeatured} variant="standard" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK CATEGORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Browse by Meal & Course
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              Select what you want to cook right now
            </p>
          </div>
          <Link
            to="/recipes"
            className="text-xs sm:text-sm font-bold text-saffron-600 dark:text-saffron-400 hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.label}
                to={cat.path}
                className="group relative p-4 rounded-2xl bg-white dark:bg-[#1a1715] border border-amber-200/70 dark:border-neutral-800 hover:border-saffron-400 shadow-card hover:shadow-card-hover transition-all text-center flex flex-col items-center justify-between"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-gray-900 dark:text-white group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors">
                    {cat.label}
                  </h3>
                  <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 block">
                    {cat.count}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED CHEF RECIPE BANNER */}
      {secondaryFeatured[0] && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RecipeCard recipe={secondaryFeatured[0]} variant="featured" />
        </section>
      )}

      {/* 4. TODAY'S TRENDING PICKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600">
              <Flame className="w-5 h-5 fill-orange-500" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                Trending Right Now
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Most cooked dishes across Indian kitchens this week
              </p>
            </div>
          </div>
          <Link
            to="/recipes"
            className="text-xs sm:text-sm font-bold text-saffron-600 dark:text-saffron-400 hover:underline flex items-center gap-1"
          >
            <span>Explore All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              variant="trending"
              trendingRank={index + 1}
            />
          ))}
        </div>
      </section>

      {/* 5. RECIPES BY MEAL TIME TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warmcream-100/60 dark:bg-[#1a1715] rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                What's for the Table?
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Filter dishes tailored for exact hours of the day
              </p>
            </div>

            {/* Meal Time Tab Switches */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {(['breakfast', 'lunch', 'dinner', 'evening-snack'] as MealTime[]).map((tab) => {
                const active = activeMealTab === tab;
                const labels: Record<string, string> = {
                  breakfast: 'Breakfast',
                  lunch: 'Lunch',
                  dinner: 'Dinner',
                  'evening-snack': 'Snacks',
                };
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveMealTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                      active
                        ? 'bg-saffron-600 text-white shadow-md'
                        : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {labels[tab]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mealTimeRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} variant="standard" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. REGIONAL INDIAN FLAVORS HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Explore Regional Indian Cuisines
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            From fiery Andhra spices to royal Awadhi gravies and coastal Kerala coconut curries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regionalHubs.map((hub) => (
            <Link
              key={hub.name}
              to={`/search?cuisine=${encodeURIComponent(hub.name.split(' ')[0])}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition-all"
            >
              <img
                src={hub.image}
                alt={hub.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-400">
                  {hub.count} Recipes
                </span>
                <h3 className="font-serif text-xl font-bold group-hover:text-saffron-300 transition-colors">
                  {hub.name}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5">
                  {hub.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. SWEETS & DESSERTS COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Traditional Sweets & Mithai
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Celebration desserts with authentic halwai techniques
            </p>
          </div>
          <Link
            to="/category/sweets"
            className="text-xs sm:text-sm font-bold text-saffron-600 dark:text-saffron-400 hover:underline flex items-center gap-1"
          >
            <span>View All Sweets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sweets.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} variant="standard" />
          ))}
        </div>
      </section>

      {/* 8. DRINKS & BEVERAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Coolers, Teas & Beverages
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Authentic filter coffee, lassis, chaas, and spiced kadak chai
            </p>
          </div>
          <Link
            to="/category/drinks"
            className="text-xs sm:text-sm font-bold text-saffron-600 dark:text-saffron-400 hover:underline flex items-center gap-1"
          >
            <span>View All Drinks</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinks.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} variant="standard" />
          ))}
        </div>
      </section>

      {/* 9. HEALTHY & QUICK MEALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Healthy & Diabetic-Friendly
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              High-protein, millet-based, and wholesome Ayurvedic cooking
            </p>
          </div>
          <Link
            to="/category/healthy"
            className="text-xs sm:text-sm font-bold text-saffron-600 dark:text-saffron-400 hover:underline flex items-center gap-1"
          >
            <span>View All Healthy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthy.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} variant="standard" />
          ))}
        </div>
      </section>

      {/* 10. SIGNATURE FEATURE CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-saffron-600 via-amber-600 to-orange-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Smart Kitchen Technology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">
              Cooking for 2? Or Hosting 15?
            </h2>
            <p className="text-sm sm:text-base text-amber-100 leading-relaxed">
              Never guess how many spoons of salt or cups of dal you need. Open any recipe on CookFood, tap your guest count, and watch all ingredients recalculate with culinary accuracy instantly.
            </p>
          </div>

          <Link
            to="/recipe/masala-dosa"
            className="px-8 py-4 rounded-2xl bg-white text-saffron-700 font-extrabold text-sm sm:text-base shadow-xl hover:bg-amber-50 hover:scale-105 transition-all shrink-0"
          >
            Try Adapter on Masala Dosa
          </Link>
        </div>
      </section>
    </div>
  );
};

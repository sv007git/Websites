import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Sun,
  UtensilsCrossed,
  Moon,
  Cookie,
  Award,
  Coffee,
  Salad,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { getRecipesByMealTime } from '../../data/recipes';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { MealTime } from '../../types/recipe';

const CATEGORY_META: Record<
  string,
  { title: string; subtitle: string; icon: any; color: string; banner: string }
> = {
  breakfast: {
    title: 'Morning Breakfast & Tiffin',
    subtitle: 'Crispy dosas, fluffy idlis, soft pooris, and healthy morning bowls',
    icon: Sun,
    color: 'from-amber-400 to-orange-500',
    banner: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1200&auto=format&fit=crop&q=80',
  },
  lunch: {
    title: 'Afternoon Lunch & Thali',
    subtitle: 'Aromatic biryanis, slow-cooked dals, paneer curries, and rasam',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-red-500',
    banner: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&auto=format&fit=crop&q=80',
  },
  dinner: {
    title: 'Night Food & Dinner',
    subtitle: 'Soft puffed phulkas, kadai paneer, soothing khichdi, and mild gravies',
    icon: Moon,
    color: 'from-purple-600 to-indigo-600',
    banner: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1200&auto=format&fit=crop&q=80',
  },
  snacks: {
    title: 'Tea-Time Snacks & Chaats',
    subtitle: 'Crispy samosas, crunchy pakodas, Mumbai sev puri, and aloo tikki',
    icon: Cookie,
    color: 'from-yellow-500 to-amber-600',
    banner: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&auto=format&fit=crop&q=80',
  },
  sweets: {
    title: 'Sweets, Mithai & Desserts',
    subtitle: 'Royal gulab jamun, soft rasmalai, Mysore pak, and fragrant kheer',
    icon: Award,
    color: 'from-pink-500 to-rose-600',
    banner: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=1200&auto=format&fit=crop&q=80',
  },
  drinks: {
    title: 'Drinks, Coolers & Beverages',
    subtitle: 'Filter coffee, mango lassi, spiced chaas, and cutting masala chai',
    icon: Coffee,
    color: 'from-cyan-500 to-blue-600',
    banner: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&auto=format&fit=crop&q=80',
  },
  healthy: {
    title: 'Healthy, High-Protein & Diet Meals',
    subtitle: 'Iron-rich ragi dosas, quinoa khichdi, sprouts salads, and oats upma',
    icon: Salad,
    color: 'from-emerald-500 to-teal-600',
    banner: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&auto=format&fit=crop&q=80',
  },
};

export const CategoryPage: React.FC = () => {
  const { category = 'breakfast' } = useParams<{ category: string }>();
  const meta = CATEGORY_META[category] || CATEGORY_META['breakfast'];
  const recipes = getRecipesByMealTime(category as MealTime);
  const Icon = meta.icon;

  return (
    <div className="space-y-12 pb-20">
      {/* Category Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/30">
        <div className="absolute inset-0 opacity-20">
          <img src={meta.banner} alt={meta.title} className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto space-y-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold" aria-label="Breadcrumb">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link to="/recipes" className="hover:underline">Categories</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white capitalize">{category}</span>
          </nav>

          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.color} text-white flex items-center justify-center shadow-lg`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight">
                {meta.title}
              </h1>
              <p className="text-xs sm:text-base text-neutral-300 mt-1 max-w-2xl font-sans">
                {meta.subtitle} • <strong>{recipes.length} authentic recipes</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} variant="standard" />
          ))}
        </div>
      </div>
    </div>
  );
};

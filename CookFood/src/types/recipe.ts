export type MealTime =
  | 'breakfast'
  | 'morning-snack'
  | 'lunch'
  | 'evening-snack'
  | 'dinner'
  | 'night'
  | 'sweets'
  | 'dessert'
  | 'drinks'
  | 'healthy'
  | 'snacks'
  | 'starters'
  | 'festival-special'
  | 'summer-special';

export type DietType =
  | 'vegetarian'
  | 'vegan'
  | 'jain'
  | 'no-onion-garlic'
  | 'gluten-free';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface Ingredient {
  name: string;
  quantity: number | null;
  unit: string;
  scalable: boolean;
  notes?: string;
  isRange?: boolean;
  rangeMax?: number;
  approximate?: boolean;
  optional?: boolean;
  section?: string;
}

export interface CookingStep {
  stepNumber: number;
  title?: string;
  instruction: string;
  timerSeconds?: number;
  tip?: string;
  image?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber?: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  hindiTitle?: string;
  regionalTitle?: string;
  description: string;
  image: string;
  cuisine: string[];
  mealTimes: MealTime[];
  categories: string[];
  diet: DietType[];
  servings: number;
  prepTime: number; // minutes
  cookTime: number; // minutes
  totalTime: number; // minutes
  difficulty: DifficultyLevel;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  trending?: boolean;
  isFestivalSpecial?: boolean;
  festivalName?: string;
  ingredients: Ingredient[];
  instructions: CookingStep[];
  tips: string[];
  substitutions?: string[];
  storage?: string;
  scalingNotes?: string;
  tags: string[];
  author?: string;
  nutrition?: NutritionInfo;
  videoUrl?: string;
}

export interface ShoppingItem {
  id: string;
  recipeId?: string;
  recipeTitle?: string;
  name: string;
  quantityString: string;
  completed: boolean;
  addedAt: number;
}

export interface RecipeFilterState {
  searchQuery: string;
  mealTime: MealTime | 'all';
  cuisine: string;
  category: string;
  diet: string;
  maxTime: number | null;
  difficulty: string;
  sortBy: 'popular' | 'newest' | 'fastest' | 'alphabetical';
}

export type SupportedLanguage = 'en' | 'te' | 'ta';

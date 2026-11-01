import { Recipe, MealTime } from '../../types/recipe';
import { breakfastRecipes } from './breakfast';
import { lunchRecipes } from './lunch';
import { dinnerRecipes } from './dinner';
import { snackRecipes } from './snacks';
import { sweetRecipes } from './sweets';
import { drinkRecipes } from './drinks';
import { healthyRecipes } from './healthy';

export const allRecipes: Recipe[] = [
  ...breakfastRecipes,
  ...lunchRecipes,
  ...dinnerRecipes,
  ...snackRecipes,
  ...sweetRecipes,
  ...drinkRecipes,
  ...healthyRecipes,
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find((r) => r.slug === slug || r.id === slug);
}

export function getRecipesByMealTime(mealTime: MealTime): Recipe[] {
  return allRecipes.filter((r) => r.mealTimes.includes(mealTime));
}

export function getFeaturedRecipes(): Recipe[] {
  return allRecipes.filter((r) => r.featured);
}

export function getTrendingRecipes(): Recipe[] {
  return allRecipes.filter((r) => r.trending);
}

export function getLatestRecipes(limit: number = 8): Recipe[] {
  // Returns popular/high-rated as latest
  return [...allRecipes].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, limit);
}

export function getRelatedRecipes(currentRecipe: Recipe, limit: number = 4): Recipe[] {
  return allRecipes
    .filter((r) => r.id !== currentRecipe.id)
    .filter((r) => {
      const matchCuisine = r.cuisine.some((c) => currentRecipe.cuisine.includes(c));
      const matchMeal = r.mealTimes.some((m) => currentRecipe.mealTimes.includes(m));
      const matchCategory = r.categories.some((cat) => currentRecipe.categories.includes(cat));
      return matchCuisine || matchMeal || matchCategory;
    })
    .slice(0, limit);
}

export const allCuisines = Array.from(
  new Set(allRecipes.flatMap((r) => r.cuisine))
).sort();

export const allCategories = Array.from(
  new Set(allRecipes.flatMap((r) => r.categories))
).sort();

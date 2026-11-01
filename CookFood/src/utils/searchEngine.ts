import { Recipe, RecipeFilterState } from '../types/recipe';

export function filterRecipes(recipes: Recipe[], filters: RecipeFilterState): Recipe[] {
  return recipes.filter((recipe) => {
    // Search query
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim();
      const matchTitle = recipe.title.toLowerCase().includes(q);
      const matchHindi = recipe.hindiTitle?.toLowerCase().includes(q);
      const matchDesc = recipe.description.toLowerCase().includes(q);
      const matchCuisine = recipe.cuisine.some((c) => c.toLowerCase().includes(q));
      const matchCategory = recipe.categories.some((cat) => cat.toLowerCase().includes(q));
      const matchTags = recipe.tags.some((t) => t.toLowerCase().includes(q));
      const matchIngredients = recipe.ingredients.some((ing) => ing.name.toLowerCase().includes(q));

      if (
        !matchTitle &&
        !matchHindi &&
        !matchDesc &&
        !matchCuisine &&
        !matchCategory &&
        !matchTags &&
        !matchIngredients
      ) {
        return false;
      }
    }

    // Meal Time
    if (filters.mealTime !== 'all') {
      if (!recipe.mealTimes.includes(filters.mealTime)) {
        return false;
      }
    }

    // Cuisine
    if (filters.cuisine && filters.cuisine !== 'all') {
      const targetCuisine = filters.cuisine.toLowerCase();
      const hasCuisine = recipe.cuisine.some((c) => c.toLowerCase().includes(targetCuisine));
      if (!hasCuisine) return false;
    }

    // Category
    if (filters.category && filters.category !== 'all') {
      const targetCategory = filters.category.toLowerCase();
      const hasCategory = recipe.categories.some((c) => c.toLowerCase().includes(targetCategory));
      if (!hasCategory) return false;
    }

    // Diet
    if (filters.diet && filters.diet !== 'all') {
      const targetDiet = filters.diet.toLowerCase();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const hasDiet = recipe.diet.some((d) => d.toLowerCase() === targetDiet);
      if (!hasDiet) return false;
    }

    // Max Time
    if (filters.maxTime !== null && filters.maxTime > 0) {
      if (recipe.totalTime > filters.maxTime) {
        return false;
      }
    }

    // Difficulty
    if (filters.difficulty && filters.difficulty !== 'all') {
      if (recipe.difficulty.toLowerCase() !== filters.difficulty.toLowerCase()) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'fastest':
        return a.totalTime - b.totalTime;
      case 'popular':
        return b.rating * b.reviewCount - a.rating * a.reviewCount;
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      case 'newest':
      default:
        return b.reviewCount - a.reviewCount;
    }
  });
}

export function getSearchSuggestions(recipes: Recipe[], query: string): { title: string; slug: string; image: string; category: string }[] {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const matches: { title: string; slug: string; image: string; category: string }[] = [];

  for (const recipe of recipes) {
    if (
      recipe.title.toLowerCase().includes(q) ||
      recipe.ingredients.some((ing) => ing.name.toLowerCase().includes(q)) ||
      recipe.cuisine.some((c) => c.toLowerCase().includes(q))
    ) {
      matches.push({
        title: recipe.title,
        slug: recipe.slug,
        image: recipe.image,
        category: recipe.categories[0] || recipe.cuisine[0] || 'Recipe',
      });
      if (matches.length >= 6) break;
    }
  }

  return matches;
}

import { Ingredient } from '../types/recipe';
import { formatKitchenFraction } from './fractionFormatter';

export interface ScaledIngredient extends Ingredient {
  scaledQuantity: number | null;
  scaledRangeMax?: number;
  formattedQuantity: string;
  displayUnit: string;
  displayText: string;
}

/**
 * Pluralize units sensibly for kitchen measurements
 */
export function getPluralizedUnit(unit: string, quantity: number | null): string {
  if (!unit) return '';
  const trimmed = unit.trim().toLowerCase();
  const q = quantity ?? 1;

  // Invariant units that shouldn't have 's' added
  const invariables = ['g', 'kg', 'ml', 'l', 'liter', 'litres', 'pinch', 'to taste', 'as needed', 'sprig'];
  if (invariables.includes(trimmed)) {
    return unit;
  }

  // Units that pluralize with 's' if quantity > 1
  if (q > 1) {
    if (trimmed === 'pinch') return 'pinches';
    if (trimmed === 'clove') return 'cloves';
    if (trimmed === 'cup') return 'cups';
    if (trimmed === 'tablespoon' || trimmed === 'tbsp') return trimmed === 'tbsp' ? 'tbsp' : 'tablespoons';
    if (trimmed === 'teaspoon' || trimmed === 'tsp') return trimmed === 'tsp' ? 'tsp' : 'teaspoons';
    if (trimmed === 'piece') return 'pieces';
    if (trimmed === 'inch') return 'inches';
    if (trimmed === 'leaf') return 'leaves';
  }

  return unit;
}

/**
 * Scales an individual ingredient according to target servings vs original servings
 */
export function scaleIngredient(
  ingredient: Ingredient,
  originalServings: number,
  targetServings: number
): ScaledIngredient {
  const orig = Math.max(1, originalServings || 1);
  const target = Math.max(1, targetServings || 1);
  const ratio = target / orig;

  if (!ingredient.scalable || ingredient.quantity === null || ingredient.quantity === undefined) {
    // Non-scalable or qualitative ingredient (e.g. "Salt to taste", "Oil for frying")
    const formattedQty = ingredient.quantity !== null && ingredient.quantity !== undefined
      ? formatKitchenFraction(ingredient.quantity)
      : '';
    const displayUnit = getPluralizedUnit(ingredient.unit, ingredient.quantity);
    const prefix = ingredient.approximate ? 'approx. ' : '';
    const opt = ingredient.optional ? ' (optional)' : '';
    const note = ingredient.notes ? `, ${ingredient.notes}` : '';

    const parts = [prefix + formattedQty, displayUnit, ingredient.name].filter(Boolean).join(' ');
    const displayText = `${parts}${note}${opt}`.trim();

    return {
      ...ingredient,
      scaledQuantity: ingredient.quantity,
      scaledRangeMax: ingredient.rangeMax,
      formattedQuantity: formattedQty,
      displayUnit,
      displayText,
    };
  }

  // Calculate scaled quantity
  const scaledQty = ingredient.quantity * ratio;
  let scaledMax: number | undefined = undefined;
  let formattedQty = '';

  if (ingredient.isRange && ingredient.rangeMax) {
    scaledMax = ingredient.rangeMax * ratio;
    formattedQty = `${formatKitchenFraction(scaledQty)}–${formatKitchenFraction(scaledMax)}`;
  } else {
    formattedQty = formatKitchenFraction(scaledQty);
  }

  const displayUnit = getPluralizedUnit(ingredient.unit, scaledQty);
  const prefix = ingredient.approximate ? 'approx. ' : '';
  const opt = ingredient.optional ? ' (optional)' : '';
  const note = ingredient.notes ? `, ${ingredient.notes}` : '';

  const parts = [prefix + formattedQty, displayUnit, ingredient.name].filter(Boolean).join(' ');
  const displayText = `${parts}${note}${opt}`.trim();

  return {
    ...ingredient,
    scaledQuantity: scaledQty,
    scaledRangeMax: scaledMax,
    formattedQuantity: formattedQty,
    displayUnit,
    displayText,
  };
}

/**
 * Scale an array of ingredients
 */
export function scaleIngredientsList(
  ingredients: Ingredient[],
  originalServings: number,
  targetServings: number
): ScaledIngredient[] {
  return ingredients.map((ing) => scaleIngredient(ing, originalServings, targetServings));
}

/**
 * Generates culinary advice when recipes are scaled up or down significantly
 */
export function getScalingGuidance(originalServings: number, targetServings: number): string | null {
  const ratio = targetServings / originalServings;
  if (ratio >= 3.0) {
    return 'Batch Scaling Tip: When cooking for large groups (3x+), whole spices, salt, and chillies often do best scaled at ~75%–80% of direct calculation. Taste before final seasoning.';
  }
  if (ratio <= 0.4) {
    return 'Small Batch Tip: Simmering in smaller pans causes faster evaporation. Keep an eye on liquid levels and consider reducing flame slightly.';
  }
  return null;
}

/**
 * Formats full ingredient list into clean text for copying or sharing
 */
export function formatIngredientsAsText(
  recipeTitle: string,
  servings: number,
  scaledIngredients: ScaledIngredient[]
): string {
  const lines: string[] = [];
  lines.push(`🍽️ ${recipeTitle} — Ingredients for ${servings} ${servings === 1 ? 'person' : 'people'}`);
  lines.push('──────────────────────────────');

  // Group by section if present
  let currentSection = '';
  scaledIngredients.forEach((item) => {
    if (item.section && item.section !== currentSection) {
      currentSection = item.section;
      lines.push(`\n[${currentSection}]`);
    }
    lines.push(`• ${item.displayText}`);
  });

  lines.push('──────────────────────────────');
  lines.push('Scaled with CookFood (https://sv007git.github.io/CookFood/)');
  return lines.join('\n');
}

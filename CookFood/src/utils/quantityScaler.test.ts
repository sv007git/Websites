import { describe, it, expect } from 'vitest';
import { scaleIngredient, scaleIngredientsList, getScalingGuidance } from './quantityScaler';
import { formatKitchenFraction } from './fractionFormatter';
import { Ingredient } from '../types/recipe';

describe('Kitchen Fraction Formatter', () => {
  it('formats whole numbers cleanly', () => {
    expect(formatKitchenFraction(1)).toBe('1');
    expect(formatKitchenFraction(4)).toBe('4');
    expect(formatKitchenFraction(0)).toBe('0');
  });

  it('formats basic fractions correctly', () => {
    expect(formatKitchenFraction(0.5)).toBe('½');
    expect(formatKitchenFraction(0.25)).toBe('¼');
    expect(formatKitchenFraction(0.75)).toBe('¾');
    expect(formatKitchenFraction(0.333)).toBe('⅓');
    expect(formatKitchenFraction(0.666)).toBe('⅔');
    expect(formatKitchenFraction(0.125)).toBe('⅛');
  });

  it('formats mixed fractions correctly', () => {
    expect(formatKitchenFraction(1.5)).toBe('1 ½');
    expect(formatKitchenFraction(1.25)).toBe('1 ¼');
    expect(formatKitchenFraction(2.75)).toBe('2 ¾');
    expect(formatKitchenFraction(5.333)).toBe('5 ⅓');
  });
});

describe('Dynamic Recipe Quantity Adapter — Mandatory Prompt Tests', () => {
  const originalServings = 4;
  const rice: Ingredient = {
    name: 'Rice',
    quantity: 2,
    unit: 'cup',
    scalable: true,
  };
  const uradDal: Ingredient = {
    name: 'Urad dal',
    quantity: 0.5,
    unit: 'cup',
    scalable: true,
  };

  it('Scales for 8 servings (doubled): Rice: 4 cups, Urad dal: 1 cup', () => {
    const scaledRice = scaleIngredient(rice, originalServings, 8);
    const scaledUrad = scaleIngredient(uradDal, originalServings, 8);

    expect(scaledRice.scaledQuantity).toBe(4);
    expect(scaledRice.formattedQuantity).toBe('4');
    expect(scaledRice.displayUnit).toBe('cups');
    expect(scaledRice.displayText).toBe('4 cups Rice');

    expect(scaledUrad.scaledQuantity).toBe(1);
    expect(scaledUrad.formattedQuantity).toBe('1');
    expect(scaledUrad.displayUnit).toBe('cup');
    expect(scaledUrad.displayText).toBe('1 cup Urad dal');
  });

  it('Scales for 2 servings (halved): Rice: 1 cup, Urad dal: 0.25 cup (¼ cup)', () => {
    const scaledRice = scaleIngredient(rice, originalServings, 2);
    const scaledUrad = scaleIngredient(uradDal, originalServings, 2);

    expect(scaledRice.scaledQuantity).toBe(1);
    expect(scaledRice.formattedQuantity).toBe('1');
    expect(scaledRice.displayUnit).toBe('cup');
    expect(scaledRice.displayText).toBe('1 cup Rice');

    expect(scaledUrad.scaledQuantity).toBe(0.25);
    expect(scaledUrad.formattedQuantity).toBe('¼');
    expect(scaledUrad.displayUnit).toBe('cup');
    expect(scaledUrad.displayText).toBe('¼ cup Urad dal');
  });

  it('Scales for 10 servings (2.5x): Rice: 5 cups, Urad dal: 1.25 cups (1 ¼ cups)', () => {
    const scaledRice = scaleIngredient(rice, originalServings, 10);
    const scaledUrad = scaleIngredient(uradDal, originalServings, 10);

    expect(scaledRice.scaledQuantity).toBe(5);
    expect(scaledRice.formattedQuantity).toBe('5');
    expect(scaledRice.displayUnit).toBe('cups');
    expect(scaledRice.displayText).toBe('5 cups Rice');

    expect(scaledUrad.scaledQuantity).toBe(1.25);
    expect(scaledUrad.formattedQuantity).toBe('1 ¼');
    expect(scaledUrad.displayUnit).toBe('cups');
    expect(scaledUrad.displayText).toBe('1 ¼ cups Urad dal');
  });

  it('Preserves non-scalable ingredients without multiplying', () => {
    const salt: Ingredient = {
      name: 'Salt',
      quantity: 1,
      unit: 'teaspoon',
      scalable: false,
      notes: 'to taste',
    };
    const scaled = scaleIngredient(salt, 4, 12);
    expect(scaled.scaledQuantity).toBe(1);
    expect(scaled.displayText).toContain('to taste');
  });

  it('Handles qualitative ingredients with null quantity', () => {
    const oil: Ingredient = {
      name: 'Oil',
      quantity: null,
      unit: 'for deep frying',
      scalable: false,
    };
    const scaled = scaleIngredient(oil, 4, 10);
    expect(scaled.scaledQuantity).toBeNull();
    expect(scaled.displayText).toBe('for deep frying Oil');
  });

  it('Handles ingredient ranges properly', () => {
    const greenChillies: Ingredient = {
      name: 'Green chillies',
      quantity: 2,
      rangeMax: 3,
      isRange: true,
      unit: 'piece',
      scalable: true,
      notes: 'slit',
    };
    const scaled = scaleIngredient(greenChillies, 4, 8);
    expect(scaled.scaledQuantity).toBe(4);
    expect(scaled.scaledRangeMax).toBe(6);
    expect(scaled.formattedQuantity).toBe('4–6');
    expect(scaled.displayText).toBe('4–6 pieces Green chillies, slit');
  });

  it('Provides helpful batch scaling guidance for large servings', () => {
    const guidance = getScalingGuidance(4, 16);
    expect(guidance).not.toBeNull();
    expect(guidance).toContain('Batch Scaling Tip');
  });
});

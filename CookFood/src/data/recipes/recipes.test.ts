import { describe, it, expect } from 'vitest';
import { allRecipes, getRecipeBySlug, getRecipesByMealTime } from './index';

describe('Recipe Database Integrity', () => {
  it('contains at least 50 recipes as required by prompt', () => {
    expect(allRecipes.length).toBeGreaterThanOrEqual(50);
  });

  it('every recipe has unique id and slug', () => {
    const ids = new Set<string>();
    const slugs = new Set<string>();

    for (const r of allRecipes) {
      expect(ids.has(r.id), `Duplicate ID found: ${r.id}`).toBe(false);
      expect(slugs.has(r.slug), `Duplicate Slug found: ${r.slug}`).toBe(false);
      ids.add(r.id);
      slugs.add(r.slug);
    }
  });

  it('every recipe has title, description, valid cuisine, servings, and times', () => {
    for (const r of allRecipes) {
      expect(r.title.length).toBeGreaterThan(3);
      expect(r.description.length).toBeGreaterThan(10);
      expect(r.cuisine.length).toBeGreaterThan(0);
      expect(r.servings).toBeGreaterThan(0);
      expect(r.prepTime).toBeGreaterThanOrEqual(0);
      expect(r.cookTime).toBeGreaterThanOrEqual(0);
      expect(r.totalTime).toBeGreaterThan(0);
      expect(r.image).toMatch(/^https?:\/\//);
    }
  });

  it('every recipe has valid ingredients and instructions', () => {
    for (const r of allRecipes) {
      expect(r.ingredients.length).toBeGreaterThanOrEqual(3);
      expect(r.instructions.length).toBeGreaterThanOrEqual(2);

      for (const ing of r.ingredients) {
        expect(ing.name.length).toBeGreaterThan(1);
        expect(typeof ing.scalable).toBe('boolean');
      }

      for (const step of r.instructions) {
        expect(step.stepNumber).toBeGreaterThan(0);
        expect(step.instruction.length).toBeGreaterThan(10);
      }
    }
  });

  it('lookups work correctly', () => {
    const dosa = getRecipeBySlug('masala-dosa');
    expect(dosa).toBeDefined();
    expect(dosa?.title).toContain('Dosa');

    const breakfastList = getRecipesByMealTime('breakfast');
    expect(breakfastList.length).toBeGreaterThanOrEqual(5);
  });
});

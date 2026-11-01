import { describe, it, expect } from 'vitest';
import { allBlocks, getBlockDefinition, getBlocksByCategory, blockCategoryLabels } from '@webforge/block-registry';

describe('Block Registry Suite', () => {
  it('contains over 50 genuinely distinct and usable blocks', () => {
    expect(allBlocks.length).toBeGreaterThanOrEqual(50);
  });

  it('registers all 16 designated block categories', () => {
    const categories = Object.keys(blockCategoryLabels);
    expect(categories.length).toBe(16);

    categories.forEach((cat) => {
      const blocksInCat = getBlocksByCategory(cat as any);
      expect(blocksInCat.length).toBeGreaterThan(0);
    });
  });

  it('every block provides default props and a render function', () => {
    allBlocks.forEach((block) => {
      expect(block.type).toBeDefined();
      expect(block.name).toBeDefined();
      expect(block.defaultProps).toBeDefined();
      expect(typeof block.render).toBe('function');
      
      const lookup = getBlockDefinition(block.type);
      expect(lookup).toBeDefined();
      expect(lookup?.type).toBe(block.type);
    });
  });
});

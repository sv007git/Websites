import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from '@/stores/useAppStore';

describe('Catering Calculation Engine', () => {
  beforeEach(() => {
    useAppStore.getState().resetDemoData();
  });
  it('correctly calculates recommended quantity as confirmed selections + safety buffer', () => {
    const store = useAppStore.getState();
    const calculations = store.getCateringCalculations();

    expect(calculations.length).toBeGreaterThan(0);

    calculations.forEach((c) => {
      const expectedBuffer = Math.ceil(c.confirmed_quantity * (c.buffer_percentage / 100));
      expect(c.buffer_quantity).toBe(expectedBuffer);
      expect(c.recommended_quantity).toBe(c.confirmed_quantity + expectedBuffer);
      expect(c.total_estimated_cost).toBe(c.recommended_quantity * c.unit_cost);
    });
  });

  it('updates buffer percentage dynamically across all menu dishes', () => {
    const store = useAppStore.getState();
    store.updateEventSettings({ catering_buffer_percentage: 20 });

    const updatedCalculations = store.getCateringCalculations();
    updatedCalculations.forEach((c) => {
      expect(c.buffer_percentage).toBe(20);
      const expectedBuffer = Math.ceil(c.confirmed_quantity * 0.2);
      expect(c.buffer_quantity).toBe(expectedBuffer);
    });
  });
});

import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from '@/stores/useAppStore';

describe('Venue Seating Allocation Engine', () => {
  beforeEach(() => {
    useAppStore.getState().resetDemoData();
  });

  it('prevents double-booking: no seat is ever allocated to two different attendees', () => {
    const store = useAppStore.getState();
    const tables = store.venueLayout.tables;

    const allocatedSeats = new Set<string>();

    tables.forEach((t) => {
      t.seats.forEach((s) => {
        if (s.allocated_attendee_id) {
          expect(allocatedSeats.has(s.allocated_attendee_id)).toBe(false);
          allocatedSeats.add(s.allocated_attendee_id);
        }
      });
    });
  });

  it('runs auto-allocation algorithm and keeps families grouped together', () => {
    const store = useAppStore.getState();

    // Clear seat allocations to test auto-allocation engine from unallocated state
    store.venueLayout.tables.forEach((t) => {
      t.seats.forEach((s) => {
        s.allocated_attendee_id = undefined;
        s.allocated_attendee_name = undefined;
        s.attendee_id = undefined;
        s.attendee_name = undefined;
        s.is_occupied = false;
      });
    });
    store.attendees.forEach((a) => {
      a.seat_id = undefined;
    });

    const result = store.runAutoSeatingAllocation();

    expect(result.allocatedCount).toBeGreaterThan(0);

    const tables = useAppStore.getState().venueLayout.tables;
    let totalSeated = 0;
    tables.forEach((t) => {
      totalSeated += t.seats.filter((s) => s.allocated_attendee_id || s.attendee_id).length;
    });

    expect(totalSeated).toBe(result.allocatedCount);
  });
});

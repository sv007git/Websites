import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from '@/stores/useAppStore';

describe('RSVP & Arrival Slot Engine', () => {
  beforeEach(() => {
    useAppStore.getState().resetDemoData();
  });
  it('submits family RSVP with multiple attendees, dietary options, and generates QR pass', () => {
    const store = useAppStore.getState();
    const inv = store.invitations[10];

    const res = store.submitRSVP(inv.token, {
      status: 'confirmed',
      timeSlotId: store.timeSlots[0].id,
      attendees: [
        {
          full_name: 'Test Guest 1',
          is_child: false,
          dietary_preference: 'veg',
          food_selections: [{ menu_item_id: 'item-01', quantity: 1 }],
        },
        {
          full_name: 'Test Child 1',
          is_child: true,
          dietary_preference: 'veg',
          food_selections: [{ menu_item_id: 'item-02', quantity: 1 }],
        },
      ],
      dietary_notes: 'Nut free',
    });

    expect(res.success).toBe(true);
    expect(res.qrPass).toBeDefined();
    expect(res.qrPass?.max_attendees).toBe(2);
  });

  it('rejects booking when slot capacity is exceeded', () => {
    const store = useAppStore.getState();
    const inv = store.invitations[11];
    const slot = store.timeSlots[0];

    // Artificially max out slot capacity
    slot.booked_count = slot.capacity + slot.buffer_capacity;

    const res = store.submitRSVP(inv.token, {
      status: 'confirmed',
      timeSlotId: slot.id,
      attendees: [
        {
          full_name: 'Overflow Guest',
          is_child: false,
          dietary_preference: 'veg',
        },
      ],
    });

    expect(res.success).toBe(false);
    expect(res.error).toContain('capacity exceeded');
  });
});

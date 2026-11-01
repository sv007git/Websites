import { describe, it, expect, beforeEach } from 'vitest';
import { generateCompleteEventFromInput, EventSetupFormData } from '@/services/eventGenerator';
import { useAppStore } from '@/stores/useAppStore';

describe('Event Setup Wizard & Comprehensive Population Engine', () => {
  beforeEach(() => {
    useAppStore.setState({ isDemoMode: true });
  });

  it('generates a complete event workspace from user input with realistic sample families', () => {
    const input: EventSetupFormData = {
      eventName: "Rohan & Sneha's Royal Wedding",
      category: 'wedding',
      hostNames: 'Mr. & Mrs. Deepak Mehta',
      venueName: 'The Oberoi Rajvilas',
      address: 'Goner Road, Jaipur, Rajasthan 302031',
      googleMapsLink: 'https://maps.google.com/?q=Oberoi+Rajvilas',
      contactPhone: '+91 98290 12345',
      contactWhatsApp: '+919829012345',
      startDate: '2026-12-10',
      endDate: '2026-12-12',
      dressCode: 'Royal Rajasthani Poshak / Silk Kurta',
      guestCapacity: 240,
      cateringBufferPercentage: 15,
      dietaryPreferences: ['veg', 'non_veg', 'jain'],
      cuisineStyle: 'north_indian',
      starterGuestsOption: 'realistic_sample',
      functions: [
        {
          name: 'Mehendi by the Pool',
          date: '2026-12-10',
          start_time: '12:00',
          end_time: '16:00',
          venue_name: 'Lotus Poolside',
          dress_code: 'Yellow Festive',
        },
        {
          name: 'Sangeet Night',
          date: '2026-12-10',
          start_time: '19:00',
          end_time: '23:30',
          venue_name: 'Mughal Pavilion',
          dress_code: 'Indo-Western',
        },
        {
          name: 'Sacred Wedding Pheras',
          date: '2026-12-11',
          start_time: '16:30',
          end_time: '20:30',
          venue_name: 'Heritage Courtyard',
          dress_code: 'Traditional Poshak & Sherwani',
        },
        {
          name: 'Grand Royal Banquet',
          date: '2026-12-12',
          start_time: '19:30',
          end_time: '23:30',
          venue_name: 'Royal Durbar Hall',
          dress_code: 'Black Tie Formal',
        },
      ],
    };

    const result = generateCompleteEventFromInput(input, 'org-test-001');

    // 1. Verify Event details
    expect(result.event.name).toBe("Rohan & Sneha's Royal Wedding");
    expect(result.event.host_names).toBe('Mr. & Mrs. Deepak Mehta');
    expect(result.event.venue_name).toBe('The Oberoi Rajvilas');
    expect(result.event.guest_capacity).toBe(240);
    expect(result.event.settings.catering_buffer_percentage).toBe(15);
    expect(result.event.functions).toHaveLength(4);
    expect(result.event.functions[0].name).toBe('Mehendi by the Pool');

    // 2. Verify Time Slots
    expect(result.timeSlots.length).toBeGreaterThanOrEqual(3);
    const totalSlotCapacity = result.timeSlots.reduce((acc, s) => acc + s.capacity, 0);
    expect(totalSlotCapacity).toBeGreaterThanOrEqual(240);

    // 3. Verify Catering Menu
    expect(result.menuCategories).toHaveLength(3);
    expect(result.menuItems.length).toBeGreaterThanOrEqual(6);
    const hasJain = result.menuItems.some((m) => m.is_jain);
    const hasNonVeg = result.menuItems.some((m) => m.is_non_veg);
    expect(hasJain).toBe(true);
    expect(hasNonVeg).toBe(true);

    // 4. Verify Seating Tables
    expect(result.venueLayout.tables.length).toBeGreaterThanOrEqual(4);
    const totalSeats = result.venueLayout.tables.reduce((acc, t) => acc + t.seats.length, 0);
    expect(totalSeats).toBeGreaterThan(0);
    // Table 1 should be VIP
    expect(result.venueLayout.tables[0].is_vip).toBe(true);

    // 5. Verify Digital Card Design
    expect(result.invitationDesign.name).toContain("Rohan & Sneha's Royal Wedding");
    const titleElement = result.invitationDesign.elements.find((el) => el.content === "Rohan & Sneha's Royal Wedding");
    expect(titleElement).toBeDefined();

    // 6. Verify Starter Guests & QR Passes
    expect(result.guests.length).toBeGreaterThan(10);
    expect(result.guestGroups.length).toBe(8);
    expect(result.qrPasses.length).toBeGreaterThan(0);
    expect(result.rsvps.length).toBeGreaterThan(0);
    expect(result.whatsappQueue.length).toBe(8);
  });

  it('supports generating a clean workspace with 0 starter guests when selected', () => {
    const input: EventSetupFormData = {
      eventName: "Apex Corporate Global Gala 2026",
      category: 'corporate',
      hostNames: 'Board of Directors',
      venueName: 'World Trade Center',
      address: 'Cuffe Parade, Mumbai',
      contactPhone: '+91 99000 11223',
      contactWhatsApp: '+919900011223',
      startDate: '2026-11-15',
      endDate: '2026-11-15',
      guestCapacity: 150,
      dietaryPreferences: ['veg', 'non_veg'],
      cuisineStyle: 'continental',
      starterGuestsOption: 'empty',
      functions: [
        {
          name: 'Keynote & Awards Dinner',
          date: '2026-11-15',
          start_time: '18:00',
          end_time: '23:00',
          venue_name: 'Main Ballroom',
        },
      ],
    };

    const result = generateCompleteEventFromInput(input);
    expect(result.event.name).toBe('Apex Corporate Global Gala 2026');
    expect(result.guests).toHaveLength(0);
    expect(result.guestGroups).toHaveLength(0);
    expect(result.invitations).toHaveLength(0);
    expect(result.rsvps).toHaveLength(0);
    expect(result.qrPasses).toHaveLength(0);
  });

  it('integrates seamlessly with useAppStore populateEventFromUserInput action', () => {
    const store = useAppStore.getState();

    const input: EventSetupFormData = {
      eventName: "Ritu's Milestone Birthday Bash",
      category: 'birthday',
      hostNames: 'Kunal Kapoor & Friends',
      venueName: 'Grand Hyatt Rooftop',
      address: 'Santacruz East, Mumbai',
      contactPhone: '+91 98111 22334',
      contactWhatsApp: '+919811122334',
      startDate: '2026-11-25',
      endDate: '2026-11-25',
      guestCapacity: 80,
      dietaryPreferences: ['veg', 'non_veg'],
      cuisineStyle: 'multi_cuisine',
      starterGuestsOption: 'realistic_sample',
      functions: [
        {
          name: 'Cocktails & Cake Cutting',
          date: '2026-11-25',
          start_time: '19:00',
          end_time: '23:30',
          venue_name: 'Rooftop Lawn',
        },
      ],
    };

    const populateRes = store.populateEventFromUserInput(input);
    expect(populateRes.success).toBe(true);

    const updated = useAppStore.getState();
    expect(updated.isDemoMode).toBe(false);
    expect(updated.event.name).toBe("Ritu's Milestone Birthday Bash");
    expect(updated.event.host_names).toBe('Kunal Kapoor & Friends');
    expect(updated.guests.length).toBeGreaterThan(0);

    // Verify gate scanning works on the generated passes
    const uncheckedPass = updated.qrPasses.find((p) => p.checked_in_count < p.max_attendees);
    expect(uncheckedPass).toBeDefined();

    const checkinRes = updated.validateAndCheckIn(uncheckedPass!.token_hash, undefined, 'Gate Scanner Test');
    expect(checkinRes.success).toBe(true);

    // Verify already checked-in pass returns duplicate/already checked in warning
    const checkedPass = updated.qrPasses.find((p) => p.checked_in_count >= p.max_attendees);
    if (checkedPass) {
      const dupRes = updated.validateAndCheckIn(checkedPass.token_hash);
      expect(dupRes.success).toBe(false);
      expect(dupRes.alreadyCheckedIn).toBe(true);
    }

    // Verify catering calculations work on the new menu
    const cateringCalcs = updated.getCateringCalculations();
    expect(cateringCalcs.length).toBeGreaterThan(0);
  });
});

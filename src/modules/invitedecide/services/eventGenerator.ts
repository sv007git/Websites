// Service to generate a complete, coherent, production-ready event configuration
// from user input (or presets), populating:
// 1. Event & multi-day ceremonies
// 2. Arrival time slots
// 3. Catering menu categories & dishes with portion calculators
// 4. 2D venue floor plan with tables & seats
// 5. Digital invitation designer card
// 6. Family guest list with unique WhatsApp invitation links and gate QR passes

import {
  EventItem,
  EventFunction,
  TimeSlot,
  MenuCategory,
  MenuItem,
  VenueLayout,
  VenueTable,
  InvitationDesign,
  GuestGroup,
  Guest,
  Invitation,
  RSVP,
  Attendee,
  QRPass,
  CheckinLog,
  WhatsAppMessageQueueItem,
} from '@/modules/invitedecide/types';

export interface EventFunctionInput {
  name: string;
  date: string;
  start_time: string;
  end_time: string;
  venue_name: string;
  dress_code?: string;
  description?: string;
}

export interface EventSetupFormData {
  eventName: string;
  category: 'wedding' | 'engagement' | 'reception' | 'birthday' | 'anniversary' | 'corporate' | 'religious' | 'other';
  hostNames: string;
  venueName: string;
  address: string;
  googleMapsLink?: string;
  contactPhone: string;
  contactWhatsApp: string;
  startDate: string;
  endDate: string;
  dressCode?: string;
  guestCapacity: number;
  cateringBufferPercentage?: number;
  dietaryPreferences: Array<'veg' | 'non_veg' | 'jain' | 'vegan'>;
  cuisineStyle: 'north_indian' | 'south_indian' | 'multi_cuisine' | 'continental';
  functions: EventFunctionInput[];
  starterGuestsOption: 'realistic_sample' | 'empty';
}

export interface GeneratedEventWorkspace {
  event: EventItem;
  timeSlots: TimeSlot[];
  menuCategories: MenuCategory[];
  menuItems: MenuItem[];
  venueLayout: VenueLayout;
  invitationDesign: InvitationDesign;
  guestGroups: GuestGroup[];
  guests: Guest[];
  invitations: Invitation[];
  rsvps: RSVP[];
  attendees: Attendee[];
  qrPasses: QRPass[];
  checkinLogs: CheckinLog[];
  whatsappQueue: WhatsAppMessageQueueItem[];
}

// Curated high-resolution covers matching categories
function getCoverImageForCategory(category: string): string {
  switch (category) {
    case 'wedding':
    case 'reception':
    case 'engagement':
      return 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80';
    case 'birthday':
      return 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=80';
    case 'corporate':
      return 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80';
    case 'anniversary':
      return 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1600&q=80';
    default:
      return 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80';
  }
}

export function generateCompleteEventFromInput(
  formData: EventSetupFormData,
  existingOrgId?: string
): GeneratedEventWorkspace {
  const timestamp = Date.now();
  const eventId = `evt-${timestamp}`;
  const orgId = existingOrgId || `org-${timestamp}`;
  const bufferPercentage = formData.cateringBufferPercentage ?? 10;
  const capacity = Math.max(10, Number(formData.guestCapacity) || 150);

  // 1. Process Functions
  const rawFunctions = formData.functions.length > 0
    ? formData.functions
    : [
        {
          name: `${formData.eventName} Celebration`,
          date: formData.startDate,
          start_time: '18:00',
          end_time: '23:00',
          venue_name: formData.venueName,
          dress_code: formData.dressCode || 'Festive Formal',
          description: 'Main celebration ceremony and feast.',
        },
      ];

  const processedFunctions: EventFunction[] = rawFunctions.map((fn, idx) => ({
    id: `fn-${timestamp}-${idx + 1}`,
    event_id: eventId,
    name: fn.name.trim() || `Ceremony ${idx + 1}`,
    date: fn.date || formData.startDate,
    start_time: fn.start_time || '18:00',
    end_time: fn.end_time || '22:00',
    venue_name: fn.venue_name?.trim() || formData.venueName,
    dress_code: fn.dress_code?.trim() || formData.dressCode || 'Festive Traditional',
    description: fn.description || undefined,
  }));

  // 2. Event Object
  const slug = formData.eventName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'my-event';

  const event: EventItem = {
    id: eventId,
    organization_id: orgId,
    name: formData.eventName.trim(),
    slug,
    category: formData.category,
    description: `Welcome to ${formData.eventName.trim()} hosted by ${formData.hostNames.trim()} at ${formData.venueName.trim()}.`,
    host_names: formData.hostNames.trim(),
    cover_image: getCoverImageForCategory(formData.category),
    venue_name: formData.venueName.trim(),
    address: formData.address.trim(),
    google_maps_link: formData.googleMapsLink?.trim() || `https://maps.google.com/?q=${encodeURIComponent(formData.venueName + ' ' + formData.address)}`,
    contact_phone: formData.contactPhone.trim(),
    contact_whatsapp: formData.contactWhatsApp.trim(),
    start_date: formData.startDate,
    end_date: formData.endDate || formData.startDate,
    dress_code: formData.dressCode?.trim() || 'Festive Traditional',
    guest_capacity: capacity,
    status: 'published',
    created_at: new Date().toISOString(),
    functions: processedFunctions,
    settings: {
      allow_family_rsvp: true,
      require_food_selection: true,
      enable_time_slots: true,
      enable_seating: true,
      catering_buffer_percentage: bufferPercentage,
      whatsapp_notifications: true,
    },
  };

  // 3. Generate Time Slots
  // Partition capacity across 3 arrival windows on primary celebration date
  const primaryDate = processedFunctions[0]?.date || formData.startDate;
  const slotCapacity = Math.ceil(capacity / 3);
  const timeSlots: TimeSlot[] = [
    {
      id: `slot-${timestamp}-1`,
      event_id: eventId,
      function_id: processedFunctions[0]?.id,
      slot_date: primaryDate,
      start_time: '18:00',
      end_time: '19:30',
      capacity: slotCapacity,
      booked_count: 0,
      buffer_capacity: Math.ceil(slotCapacity * 0.15),
      is_active: true,
    },
    {
      id: `slot-${timestamp}-2`,
      event_id: eventId,
      function_id: processedFunctions[0]?.id,
      slot_date: primaryDate,
      start_time: '19:30',
      end_time: '21:00',
      capacity: slotCapacity,
      booked_count: 0,
      buffer_capacity: Math.ceil(slotCapacity * 0.15),
      is_active: true,
    },
    {
      id: `slot-${timestamp}-3`,
      event_id: eventId,
      function_id: processedFunctions[0]?.id,
      slot_date: primaryDate,
      start_time: '21:00',
      end_time: '22:30',
      capacity: slotCapacity,
      booked_count: 0,
      buffer_capacity: Math.ceil(slotCapacity * 0.15),
      is_active: true,
    },
  ];

  // 4. Generate Menu Categories & Items
  const menuCategories: MenuCategory[] = [
    { id: `cat-${timestamp}-1`, event_id: eventId, name: 'Welcome Beverages & Starters', display_order: 1 },
    { id: `cat-${timestamp}-2`, event_id: eventId, name: 'Royal Main Course & Accompaniments', display_order: 2 },
    { id: `cat-${timestamp}-3`, event_id: eventId, name: 'Artisanal Desserts & Sweets', display_order: 3 },
  ];

  const wantsNonVeg = formData.dietaryPreferences.includes('non_veg');
  const wantsJain = formData.dietaryPreferences.includes('jain');
  const wantsVegan = formData.dietaryPreferences.includes('vegan');
  const cuisine = formData.cuisineStyle || 'north_indian';

  const menuItems: MenuItem[] = [];

  // Category 1: Starters & Drinks
  if (cuisine === 'north_indian' || cuisine === 'multi_cuisine') {
    menuItems.push({
      id: `item-${timestamp}-1`,
      category_id: `cat-${timestamp}-1`,
      event_id: eventId,
      name: wantsJain ? 'Paneer Tikka Angara (Jain Option Available)' : 'Paneer Tikka Angara',
      description: 'Charcoal-grilled cottage cheese cubes marinated in smoked Kashmiri spices with mint dip.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: wantsJain,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: '3 skewers',
      unit_cost: 160,
      is_available: true,
    });

    menuItems.push({
      id: `item-${timestamp}-2`,
      category_id: `cat-${timestamp}-1`,
      event_id: eventId,
      name: 'Crispy Corn & Lotus Stem Salt & Pepper',
      description: 'Golden fried sweet corn kernels and lotus stem tossed with cracked peppercorns and spring onions.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: false,
      is_vegan: true,
      allergens: ['Gluten'],
      portion_size: '1 bowl',
      unit_cost: 130,
      is_available: true,
    });

    if (wantsNonVeg) {
      menuItems.push({
        id: `item-${timestamp}-3`,
        category_id: `cat-${timestamp}-1`,
        event_id: eventId,
        name: 'Bhatti Da Murgh Tikka & Kebabs',
        description: 'Tender chicken morsels roasted in authentic clay tandoor with aromatic garam masala.',
        is_vegetarian: false,
        is_non_veg: true,
        is_jain: false,
        is_vegan: false,
        allergens: ['Dairy'],
        portion_size: '4 pieces',
        unit_cost: 210,
        is_available: true,
      });
    }
  } else if (cuisine === 'south_indian') {
    menuItems.push({
      id: `item-${timestamp}-1`,
      category_id: `cat-${timestamp}-1`,
      event_id: eventId,
      name: 'Mini Medu Vada Canapés with Chutney Trio',
      description: 'Crispy golden lentil fritters served with fresh coconut, mint-coriander, and tomato chutneys.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: wantsJain,
      is_vegan: true,
      allergens: [],
      portion_size: '4 pieces',
      unit_cost: 120,
      is_available: true,
    });
    menuItems.push({
      id: `item-${timestamp}-2`,
      category_id: `cat-${timestamp}-1`,
      event_id: eventId,
      name: 'Guntur Paneer Pepper Fry',
      description: 'Spiced cottage cheese cubes tossed with crushed pepper, curry leaves, and shallots.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: false,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: '1 bowl',
      unit_cost: 150,
      is_available: true,
    });
    if (wantsNonVeg) {
      menuItems.push({
        id: `item-${timestamp}-3`,
        category_id: `cat-${timestamp}-1`,
        event_id: eventId,
        name: 'Kozhi Varuval (Crispy Spiced Chicken)',
        description: 'Traditional Chettinad-style pan-seared chicken with fennel and whole red chilies.',
        is_vegetarian: false,
        is_non_veg: true,
        is_jain: false,
        is_vegan: false,
        allergens: [],
        portion_size: '4 pieces',
        unit_cost: 200,
        is_available: true,
      });
    }
  } else {
    // Continental
    menuItems.push({
      id: `item-${timestamp}-1`,
      category_id: `cat-${timestamp}-1`,
      event_id: eventId,
      name: 'Tuscan Bruschetta with Balsamic Glaze',
      description: 'Toasted sourdough topped with heirloom tomatoes, basil, garlic, and aged balsamic.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: false,
      is_vegan: true,
      allergens: ['Gluten'],
      portion_size: '3 slices',
      unit_cost: 140,
      is_available: true,
    });
    if (wantsNonVeg) {
      menuItems.push({
        id: `item-${timestamp}-3`,
        category_id: `cat-${timestamp}-1`,
        event_id: eventId,
        name: 'Herb Grilled Chicken Skewers',
        description: 'Lemon rosemary marinated chicken skewers with creamy garlic aioli.',
        is_vegetarian: false,
        is_non_veg: true,
        is_jain: false,
        is_vegan: false,
        allergens: ['Dairy'],
        portion_size: '3 skewers',
        unit_cost: 220,
        is_available: true,
      });
    }
  }

  // Category 2: Main Course
  if (cuisine === 'north_indian' || cuisine === 'multi_cuisine') {
    menuItems.push({
      id: `item-${timestamp}-4`,
      category_id: `cat-${timestamp}-2`,
      event_id: eventId,
      name: wantsJain ? 'Shahi Paneer Lababdar (Jain Friendly)' : 'Shahi Paneer Lababdar',
      description: 'Velvety cottage cheese cubes in rich cashew-tomato gravy infused with cardamom.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: wantsJain,
      is_vegan: false,
      allergens: ['Dairy', 'Nuts'],
      portion_size: 'Bowl (220g)',
      unit_cost: 180,
      is_available: true,
    });
    menuItems.push({
      id: `item-${timestamp}-5`,
      category_id: `cat-${timestamp}-2`,
      event_id: eventId,
      name: 'Dal Makhani Overnight Slow-Cooked',
      description: 'Black lentils slow cooked for 16 hours with churned white butter and rich cream.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: 'Bowl (200g)',
      unit_cost: 140,
      is_available: true,
    });
    menuItems.push({
      id: `item-${timestamp}-6`,
      category_id: `cat-${timestamp}-2`,
      event_id: eventId,
      name: 'Subz Dum Handi Biryani with Burani Raita',
      description: 'Fragrant basmati rice layered with garden fresh vegetables, saffron, and caramelised onions.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: wantsJain,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: 'Plate (250g)',
      unit_cost: 160,
      is_available: true,
    });
    if (wantsNonVeg) {
      menuItems.push({
        id: `item-${timestamp}-7`,
        category_id: `cat-${timestamp}-2`,
        event_id: eventId,
        name: 'Awadhi Dum Mutton / Chicken Biryani',
        description: 'Royal sealed pot biryani with tender cuts of meat, long-grain basmati, and saffron.',
        is_vegetarian: false,
        is_non_veg: true,
        is_jain: false,
        is_vegan: false,
        allergens: ['Dairy'],
        portion_size: 'Plate (300g)',
        unit_cost: 280,
        is_available: true,
      });
    }
  } else if (cuisine === 'south_indian') {
    menuItems.push({
      id: `item-${timestamp}-4`,
      category_id: `cat-${timestamp}-2`,
      event_id: eventId,
      name: 'Bisi Bele Bath with Spiced Boondi & Appalam',
      description: 'Traditional Karnataka spiced rice and lentil pot with tamarind, jaggery, and roasted spices.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: wantsJain,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: 'Plate (250g)',
      unit_cost: 150,
      is_available: true,
    });
    menuItems.push({
      id: `item-${timestamp}-5`,
      category_id: `cat-${timestamp}-2`,
      event_id: eventId,
      name: 'Malabar Parotta & Vegetable Stew',
      description: 'Flaky layered Kerala parotta served with aromatic coconut milk vegetable stew.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: wantsJain,
      is_vegan: true,
      allergens: ['Gluten'],
      portion_size: '2 parottas + stew',
      unit_cost: 170,
      is_available: true,
    });
    if (wantsNonVeg) {
      menuItems.push({
        id: `item-${timestamp}-7`,
        category_id: `cat-${timestamp}-2`,
        event_id: eventId,
        name: 'Thalassery Chicken Biryani with Pickle & Pappad',
        description: 'Authentic Kerala coastal fragrant rice biryani with succulent chicken and fried cashews.',
        is_vegetarian: false,
        is_non_veg: true,
        is_jain: false,
        is_vegan: false,
        allergens: ['Dairy', 'Nuts'],
        portion_size: 'Plate (300g)',
        unit_cost: 260,
        is_available: true,
      });
    }
  } else {
    // Continental Main
    menuItems.push({
      id: `item-${timestamp}-4`,
      category_id: `cat-${timestamp}-2`,
      event_id: eventId,
      name: 'Wild Mushroom Risotto with Truffle Oil',
      description: 'Arborio rice slowly simmered with porcini mushrooms, parmesan, and white truffle oil.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: false,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: 'Bowl (220g)',
      unit_cost: 240,
      is_available: true,
    });
    menuItems.push({
      id: `item-${timestamp}-5`,
      category_id: `cat-${timestamp}-2`,
      event_id: eventId,
      name: 'Penne All Arrabiata with Basil',
      description: 'Al dente penne pasta in a spicy tomato garlic sauce with fresh basil.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: false,
      is_vegan: true,
      allergens: ['Gluten'],
      portion_size: 'Bowl (200g)',
      unit_cost: 180,
      is_available: true,
    });
    if (wantsNonVeg) {
      menuItems.push({
        id: `item-${timestamp}-7`,
        category_id: `cat-${timestamp}-2`,
        event_id: eventId,
        name: 'Grilled Herb Crusted Atlantic Salmon / Chicken Breast',
        description: 'Served with mashed potatoes and seasonal butter glazed vegetables.',
        is_vegetarian: false,
        is_non_veg: true,
        is_jain: false,
        is_vegan: false,
        allergens: ['Dairy', 'Fish'],
        portion_size: 'Plate (250g)',
        unit_cost: 320,
        is_available: true,
      });
    }
  }

  // Category 3: Desserts
  menuItems.push({
    id: `item-${timestamp}-8`,
    category_id: `cat-${timestamp}-3`,
    event_id: eventId,
    name: 'Warm Gulab Jamun with Saffron Rabdi',
    description: 'Soft milk solids dumplings soaked in rose sugar syrup, topped with thick saffron rabdi.',
    is_vegetarian: true,
    is_non_veg: false,
    is_jain: true,
    is_vegan: false,
    allergens: ['Dairy', 'Gluten', 'Nuts'],
    portion_size: '2 pieces + rabdi',
    unit_cost: 120,
    is_available: true,
  });
  menuItems.push({
    id: `item-${timestamp}-9`,
    category_id: `cat-${timestamp}-3`,
    event_id: eventId,
    name: 'Shahi Kesar Pista Kulfi Falooda',
    description: 'Traditional slow-reduced milk kulfi topped with rose syrup, basil seeds, and pistachio silvers.',
    is_vegetarian: true,
    is_non_veg: false,
    is_jain: true,
    is_vegan: false,
    allergens: ['Dairy', 'Nuts'],
    portion_size: '1 cup',
    unit_cost: 130,
    is_available: true,
  });

  // 5. Generate Venue Seating Layout
  const tableCount = Math.max(4, Math.min(16, Math.ceil(capacity / 8)));
  const venueTables: VenueTable[] = [];
  const tableCategories = ['VIP', 'Family', 'Friends', 'Colleagues', 'Dignitaries', 'General'];

  for (let idx = 0; idx < tableCount; idx++) {
    const isVip = idx < 2;
    const tableCapacity = isVip ? 10 : 8;
    const row = Math.floor(idx / 4);
    const col = idx % 4;

    const seats = Array.from({ length: tableCapacity }, (_, sIdx) => ({
      id: `seat-${timestamp}-${idx + 1}-${sIdx + 1}`,
      table_id: `tbl-${timestamp}-${idx + 1}`,
      seat_number: sIdx + 1,
      label: `Seat ${sIdx + 1}`,
      is_accessible: sIdx === 0,
    }));

    venueTables.push({
      id: `tbl-${timestamp}-${idx + 1}`,
      layout_id: `layout-${timestamp}`,
      name: isVip ? `Table ${idx + 1} (VIP Dais)` : `Table ${idx + 1} (${tableCategories[(idx % (tableCategories.length - 1)) + 1]})`,
      shape: isVip ? 'rectangular' : 'round',
      x: 100 + col * 260,
      y: 120 + row * 220,
      width: isVip ? 200 : 130,
      height: isVip ? 100 : 130,
      rotation: 0,
      capacity: tableCapacity,
      is_vip: isVip,
      is_reserved: isVip,
      is_accessible: isVip || idx % 3 === 0,
      category: isVip ? 'VIP' : 'Family',
      seats,
    });
  }

  const venueLayout: VenueLayout = {
    id: `layout-${timestamp}`,
    event_id: eventId,
    function_id: processedFunctions[0]?.id,
    name: `${formData.venueName} Main Seating Hall`,
    canvas_width: 1200,
    canvas_height: 900,
    tables: venueTables,
  };

  // 6. Generate Digital Invitation Design
  const invitationDesign: InvitationDesign = {
    id: `inv-des-${timestamp}`,
    event_id: eventId,
    name: `${formData.eventName} Official Invitation`,
    template_category: formData.category === 'wedding' ? 'royal' : 'modern',
    canvas_width: 800,
    canvas_height: 1200,
    background_color: formData.category === 'wedding' ? '#18181b' : '#090d16',
    background_image: getCoverImageForCategory(formData.category),
    is_published: true,
    elements: [
      {
        id: `el-header-${timestamp}`,
        type: 'text',
        x: 80,
        y: 100,
        width: 640,
        height: 40,
        rotation: 0,
        zIndex: 2,
        content: formData.category === 'wedding' ? 'TOGETHER WITH THEIR FAMILIES' : 'CORDIALLY INVITE YOU TO CELEBRATE',
        style: {
          fontFamily: 'Montserrat',
          fontSize: 13,
          color: '#f6eed0',
          textAlign: 'center',
          letterSpacing: 4,
          fontWeight: '600',
        },
      },
      {
        id: `el-hosts-${timestamp}`,
        type: 'text',
        x: 50,
        y: 145,
        width: 700,
        height: 45,
        rotation: 0,
        zIndex: 2,
        content: formData.hostNames,
        style: {
          fontFamily: 'Playfair Display',
          fontSize: 22,
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: '700',
        },
      },
      {
        id: `el-title-${timestamp}`,
        type: 'text',
        x: 50,
        y: 215,
        width: 700,
        height: 85,
        rotation: 0,
        zIndex: 3,
        content: formData.eventName,
        style: {
          fontFamily: 'Playfair Display',
          fontSize: 34,
          color: '#e3c270',
          textAlign: 'center',
          fontWeight: '700',
        },
      },
      {
        id: `el-date-${timestamp}`,
        type: 'text',
        x: 80,
        y: 320,
        width: 640,
        height: 40,
        rotation: 0,
        zIndex: 2,
        content: `${formData.startDate} ${processedFunctions[0]?.start_time ? `• ${processedFunctions[0].start_time} ONWARDS` : ''}`,
        style: {
          fontFamily: 'Montserrat',
          fontSize: 15,
          color: '#ffffff',
          textAlign: 'center',
          letterSpacing: 2,
          fontWeight: '600',
        },
      },
      {
        id: `el-venue-${timestamp}`,
        type: 'text',
        x: 80,
        y: 375,
        width: 640,
        height: 60,
        rotation: 0,
        zIndex: 2,
        content: `${formData.venueName.toUpperCase()} — ${formData.address.toUpperCase()}`,
        style: {
          fontFamily: 'Montserrat',
          fontSize: 14,
          color: '#f6eed0',
          textAlign: 'center',
          letterSpacing: 1.5,
          fontWeight: '500',
        },
      },
      {
        id: `el-greeting-${timestamp}`,
        type: 'text',
        x: 60,
        y: 460,
        width: 680,
        height: 80,
        rotation: 0,
        zIndex: 2,
        content: 'Warmly invites {{guest_name}} & Family to grace this special celebration and celebrate moments of joy together.',
        style: {
          fontFamily: 'Playfair Display',
          fontSize: 18,
          color: '#eddaa3',
          textAlign: 'center',
          lineHeight: 1.6,
        },
      },
      {
        id: `el-dress-${timestamp}`,
        type: 'text',
        x: 80,
        y: 560,
        width: 640,
        height: 35,
        rotation: 0,
        zIndex: 2,
        content: `Dress Code: ${formData.dressCode || 'Festive Traditional'}`,
        style: {
          fontFamily: 'Montserrat',
          fontSize: 12,
          color: '#d4d4d8',
          textAlign: 'center',
          letterSpacing: 1,
        },
      },
      {
        id: `el-rsvp-${timestamp}`,
        type: 'text',
        x: 80,
        y: 610,
        width: 640,
        height: 35,
        rotation: 0,
        zIndex: 2,
        content: `RSVP & Inquiries via WhatsApp: ${formData.contactWhatsApp}`,
        style: {
          fontFamily: 'Montserrat',
          fontSize: 12,
          color: '#e3c270',
          textAlign: 'center',
          fontWeight: '600',
        },
      },
    ],
  };

  // 7. Guests, Invitations, RSVPs, QR Passes
  const guestGroups: GuestGroup[] = [];
  const guests: Guest[] = [];
  const invitations: Invitation[] = [];
  const rsvps: RSVP[] = [];
  const attendees: Attendee[] = [];
  const qrPasses: QRPass[] = [];
  const checkinLogs: CheckinLog[] = [];
  const whatsappQueue: WhatsAppMessageQueueItem[] = [];

  if (formData.starterGuestsOption === 'realistic_sample') {
    const sampleFamilies = [
      {
        name: 'The Sharma Family',
        head: 'Rajesh Sharma',
        spouse: 'Sunita Sharma',
        child: 'Aarav Sharma',
        category: 'VIP' as const,
        phone: '+919811100001',
        diet: 'veg' as const,
        confirmed: true,
      },
      {
        name: 'The Verma Household',
        head: 'Vikram Verma',
        spouse: 'Anita Verma',
        child: 'Rohan Verma',
        category: 'VIP' as const,
        phone: '+919811100002',
        diet: wantsNonVeg ? ('non_veg' as const) : ('veg' as const),
        confirmed: true,
      },
      {
        name: 'The Kapoor Family',
        head: 'Amit Kapoor',
        spouse: 'Pooja Kapoor',
        child: 'Ananya Kapoor',
        category: 'Family' as const,
        phone: '+919811100003',
        diet: wantsJain ? ('jain' as const) : ('veg' as const),
        confirmed: true,
      },
      {
        name: 'The Patel Household',
        head: 'Sanjay Patel',
        spouse: 'Neeta Patel',
        child: undefined,
        category: 'Family' as const,
        phone: '+919811100004',
        diet: 'veg' as const,
        confirmed: true,
      },
      {
        name: 'The Mehta Family',
        head: 'Deepak Mehta',
        spouse: 'Kavita Mehta',
        child: 'Vihaan Mehta',
        category: 'Friend' as const,
        phone: '+919811100005',
        diet: wantsNonVeg ? ('non_veg' as const) : ('veg' as const),
        confirmed: true,
      },
      {
        name: 'The Singhania Group',
        head: 'Alok Singhania',
        spouse: 'Ritu Singhania',
        child: undefined,
        category: 'Colleague' as const,
        phone: '+919811100006',
        diet: 'veg' as const,
        confirmed: false,
      },
      {
        name: 'The Rao Family',
        head: 'Dr. Arvind Rao',
        spouse: 'Shweta Rao',
        child: 'Ishaan Rao',
        category: 'Special' as const,
        phone: '+919811100007',
        diet: 'veg' as const,
        confirmed: true,
      },
      {
        name: 'The Malhotra Circle',
        head: 'Gaurav Malhotra',
        spouse: 'Simran Malhotra',
        child: undefined,
        category: 'Friend' as const,
        phone: '+919811100008',
        diet: wantsNonVeg ? ('non_veg' as const) : ('veg' as const),
        confirmed: false,
      },
    ];

    sampleFamilies.forEach((fam, fIdx) => {
      const famId = `grp-${timestamp}-${fIdx + 1}`;
      const famCode = `FAM-${100 + fIdx + 1}`;
      const invCode = `INV-${1000 + fIdx + 1}`;
      const token = `tok_${famCode.toLowerCase()}_${Math.random().toString(36).substring(2, 9)}`;
      const memberCount = fam.child ? 3 : 2;

      // Group
      guestGroups.push({
        id: famId,
        event_id: eventId,
        name: fam.name,
        code: famCode,
        total_invited: memberCount,
        internal_notes: fam.category === 'VIP' ? 'Key guest dignitary' : '',
      });

      // Invitation
      const invitation: Invitation = {
        id: `inv-${timestamp}-${fIdx + 1}`,
        event_id: eventId,
        family_id: famId,
        token,
        invitation_code: invCode,
        status: fam.confirmed ? 'responded' : 'sent',
        views_count: fam.confirmed ? 4 : 1,
        last_viewed_at: new Date(Date.now() - 3600000 * (fIdx + 1)).toISOString(),
        created_at: new Date().toISOString(),
      };
      invitations.push(invitation);

      // Primary Guest
      const primaryGuest: Guest = {
        id: `gst-${timestamp}-${fIdx + 1}-1`,
        event_id: eventId,
        organization_id: orgId,
        family_id: famId,
        family_name: fam.name,
        full_name: fam.head,
        whatsapp_number: fam.phone,
        category: fam.category,
        relationship: fam.category === 'VIP' ? 'Close Family Friend' : 'Relative',
        is_child: false,
        dietary_preference: fam.diet,
        is_primary_contact: true,
        invitation_code: invCode,
        invitation_token: token,
        invitation_status: invitation.status,
        created_at: new Date().toISOString(),
      };
      guests.push(primaryGuest);

      // Spouse Guest
      const spouseGuest: Guest = {
        id: `gst-${timestamp}-${fIdx + 1}-2`,
        event_id: eventId,
        organization_id: orgId,
        family_id: famId,
        family_name: fam.name,
        full_name: fam.spouse,
        whatsapp_number: fam.phone,
        category: fam.category,
        is_child: false,
        dietary_preference: fam.diet,
        is_primary_contact: false,
        created_at: new Date().toISOString(),
      };
      guests.push(spouseGuest);

      // Child Guest if any
      let childGuest: Guest | null = null;
      if (fam.child) {
        childGuest = {
          id: `gst-${timestamp}-${fIdx + 1}-3`,
          event_id: eventId,
          organization_id: orgId,
          family_id: famId,
          family_name: fam.name,
          full_name: fam.child,
          whatsapp_number: fam.phone,
          category: fam.category,
          is_child: true,
          dietary_preference: 'veg',
          is_primary_contact: false,
          created_at: new Date().toISOString(),
        };
        guests.push(childGuest);
      }

      // WhatsApp Queue Item
      whatsappQueue.push({
        id: `wq-${timestamp}-${fIdx + 1}`,
        organization_id: orgId,
        event_id: eventId,
        guest_id: primaryGuest.id,
        recipient_name: primaryGuest.full_name,
        recipient_phone: primaryGuest.whatsapp_number,
        template_name: 'official_event_invitation',
        status: fam.confirmed ? 'delivered' : 'queued',
        attempts: 1,
        scheduled_at: new Date().toISOString(),
        delivered_at: fam.confirmed ? new Date(Date.now() - 7200000).toISOString() : undefined,
        invitation_url: `${window.location.origin}${window.location.pathname}#/invite/${token}`,
      });

      // RSVP & QR Pass if confirmed
      if (fam.confirmed) {
        const rsvpId = `rsvp-${timestamp}-${fIdx + 1}`;
        const famAttendees: Attendee[] = [];
        const isAlreadyCheckedIn = fIdx < 2; // First 2 families already checked in for live gate stats

        // Attendee 1 (Head)
        famAttendees.push({
          id: `att-${timestamp}-${fIdx + 1}-1`,
          rsvp_id: rsvpId,
          event_id: eventId,
          guest_id: primaryGuest.id,
          full_name: primaryGuest.full_name,
          is_child: false,
          dietary_preference: primaryGuest.dietary_preference,
          checked_in: isAlreadyCheckedIn,
          checked_in_at: isAlreadyCheckedIn ? new Date(Date.now() - 3600000).toISOString() : undefined,
          food_selections: [
            { attendee_id: `att-${timestamp}-${fIdx + 1}-1`, menu_item_id: menuItems[0]?.id || 'item-1', quantity: 1 },
            { attendee_id: `att-${timestamp}-${fIdx + 1}-1`, menu_item_id: menuItems[3]?.id || 'item-4', quantity: 1 },
            { attendee_id: `att-${timestamp}-${fIdx + 1}-1`, menu_item_id: menuItems[menuItems.length - 1]?.id || 'item-8', quantity: 1 },
          ],
        });

        // Attendee 2 (Spouse)
        famAttendees.push({
          id: `att-${timestamp}-${fIdx + 1}-2`,
          rsvp_id: rsvpId,
          event_id: eventId,
          guest_id: spouseGuest.id,
          full_name: spouseGuest.full_name,
          is_child: false,
          dietary_preference: spouseGuest.dietary_preference,
          checked_in: isAlreadyCheckedIn,
          checked_in_at: isAlreadyCheckedIn ? new Date(Date.now() - 3500000).toISOString() : undefined,
          food_selections: [
            { attendee_id: `att-${timestamp}-${fIdx + 1}-2`, menu_item_id: menuItems[1]?.id || 'item-2', quantity: 1 },
            { attendee_id: `att-${timestamp}-${fIdx + 1}-2`, menu_item_id: menuItems[4]?.id || 'item-5', quantity: 1 },
          ],
        });

        // Attendee 3 (Child)
        if (childGuest) {
          famAttendees.push({
            id: `att-${timestamp}-${fIdx + 1}-3`,
            rsvp_id: rsvpId,
            event_id: eventId,
            guest_id: childGuest.id,
            full_name: childGuest.full_name,
            is_child: true,
            dietary_preference: 'veg',
            checked_in: isAlreadyCheckedIn,
            checked_in_at: isAlreadyCheckedIn ? new Date(Date.now() - 3400000).toISOString() : undefined,
            food_selections: [
              { attendee_id: `att-${timestamp}-${fIdx + 1}-3`, menu_item_id: menuItems[0]?.id || 'item-1', quantity: 1 },
            ],
          });
        }

        attendees.push(...famAttendees);

        // RSVP
        rsvps.push({
          id: rsvpId,
          event_id: eventId,
          invitation_id: invitation.id,
          status: 'confirmed',
          total_attendees: famAttendees.length,
          adult_count: famAttendees.filter((a) => !a.is_child).length,
          child_count: famAttendees.filter((a) => a.is_child).length,
          arrival_date: primaryDate,
          time_slot_id: timeSlots[fIdx % timeSlots.length]?.id,
          responded_at: new Date(Date.now() - 86400000).toISOString(),
          attendees: famAttendees,
        });

        // QR Pass
        const qrPass: QRPass = {
          id: `qr-${timestamp}-${fIdx + 1}`,
          event_id: eventId,
          invitation_id: invitation.id,
          rsvp_id: rsvpId,
          pass_type: 'family',
          family_id: famId,
          token_hash: `sha256_${token}_pass`,
          token_plaintext: `PASS:${famCode}:${token.substring(0, 10)}`,
          display_code: `QP-${7000 + fIdx + 1}`,
          max_attendees: famAttendees.length,
          checked_in_count: isAlreadyCheckedIn ? famAttendees.length : 0,
          is_revoked: false,
          created_at: new Date().toISOString(),
        };
        qrPasses.push(qrPass);

        // Checkin Logs for already checked in attendees
        if (isAlreadyCheckedIn) {
          famAttendees.forEach((att) => {
            checkinLogs.push({
              id: `log-${timestamp}-${att.id}`,
              event_id: eventId,
              qr_pass_id: qrPass.id,
              attendee_id: att.id,
              attendee_name: att.full_name,
              function_id: processedFunctions[0]?.id,
              scanned_by: 'Gate Staff Operator (Scanner #1)',
              scan_type: 'qr_camera',
              status: 'success',
              timestamp: new Date(Date.now() - 1800000).toISOString(),
            });
          });
        }
      }
    });
  }

  return {
    event,
    timeSlots,
    menuCategories,
    menuItems,
    venueLayout,
    invitationDesign,
    guestGroups,
    guests,
    invitations,
    rsvps,
    attendees,
    qrPasses,
    checkinLogs,
    whatsappQueue,
  };
}

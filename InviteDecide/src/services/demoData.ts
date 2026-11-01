// Comprehensive Seed Data Generator for "InviteDecide Wedding Demo"
// Creates 500 family groups, 1,000+ individual attendees, 4 wedding functions,
// menus, time slots, tables, seats, QR passes, and check-in logs.

import {
  EventItem,
  GuestGroup,
  Guest,
  Invitation,
  TimeSlot,
  RSVP,
  Attendee,
  MenuCategory,
  MenuItem,
  VenueLayout,
  VenueTable,
  QRPass,
  CheckinLog,
  WhatsAppMessageQueueItem,
  InvitationDesign,
} from '@/types';

export function generateWeddingDemoData() {
  const eventId = 'evt-wedding-demo-001';
  const orgId = 'org-demo-001';

  // 1. Event Definition with multiple functions
  const event: EventItem = {
    id: eventId,
    organization_id: orgId,
    name: 'InviteDecide Wedding Demo — Aditya & Priya',
    slug: 'aditya-and-priya',
    category: 'wedding',
    description: 'Celebrate the grand union of Aditya Sharma and Priya Verma across three days of traditional rituals, music, and royal feast.',
    host_names: 'Dr. Ramesh & Sunita Sharma & Mr. Rajesh & Anita Verma',
    cover_image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    venue_name: 'The Leela Palace & Royal Heritage Lawns',
    address: 'Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110023',
    google_maps_link: 'https://maps.google.com/?q=The+Leela+Palace+New+Delhi',
    contact_phone: '+91 98765 43210',
    contact_whatsapp: '+919876543210',
    start_date: '2026-11-20',
    end_date: '2026-11-22',
    dress_code: 'Traditional Indian / Royal Festive',
    rsvp_deadline: '2026-11-10T23:59:59Z',
    guest_capacity: 1500,
    status: 'published',
    functions: [
      {
        id: 'fn-01',
        event_id: eventId,
        name: 'Mehendi & Haldi Ceremony',
        date: '2026-11-20',
        start_time: '11:00',
        end_time: '15:00',
        venue_name: 'Poolside Verandah & Lawns',
        dress_code: 'Yellow & Floral Festive',
        description: 'Vibrant daytime ceremony with live folk musicians, henna artists, and high tea snacks.',
      },
      {
        id: 'fn-02',
        event_id: eventId,
        name: 'Sangeet & Cocktail Night',
        date: '2026-11-20',
        start_time: '19:00',
        end_time: '23:30',
        venue_name: 'Grand Ballroom',
        dress_code: 'Glitz & Glamour / Indo-Western',
        description: 'An evening of dance performances, music, and cocktail dinner.',
      },
      {
        id: 'fn-03',
        event_id: eventId,
        name: 'Traditional Wedding Ceremony (Pheras)',
        date: '2026-11-21',
        start_time: '16:00',
        end_time: '20:30',
        venue_name: 'Royal Heritage Mandap Lawns',
        dress_code: 'Traditional Silk Sarees & Sherwanis',
        description: 'Vedic rituals, Baraat procession, and sacred Pheras at sunset.',
      },
      {
        id: 'fn-04',
        event_id: eventId,
        name: 'Grand Royal Reception Feast',
        date: '2026-11-22',
        start_time: '19:30',
        end_time: '23:30',
        venue_name: 'Palace Courtyard & Banquets',
        dress_code: 'Black Tie / Royal Formal',
        description: 'Celebratory gala dinner welcoming the newlyweds.',
      },
    ],
    settings: {
      allow_family_rsvp: true,
      require_food_selection: true,
      enable_time_slots: true,
      enable_seating: true,
      catering_buffer_percentage: 12,
      whatsapp_notifications: true,
    },
    created_at: new Date('2026-10-01').toISOString(),
  };

  // 2. Arrival Time Slots
  const timeSlots: TimeSlot[] = [
    {
      id: 'ts-01',
      event_id: eventId,
      function_id: 'fn-04',
      slot_date: '2026-11-22',
      start_time: '19:00',
      end_time: '20:00',
      capacity: 350,
      booked_count: 240,
      buffer_capacity: 50,
      is_active: true,
    },
    {
      id: 'ts-02',
      event_id: eventId,
      function_id: 'fn-04',
      slot_date: '2026-11-22',
      start_time: '20:00',
      end_time: '21:00',
      capacity: 450,
      booked_count: 380,
      buffer_capacity: 50,
      is_active: true,
    },
    {
      id: 'ts-03',
      event_id: eventId,
      function_id: 'fn-04',
      slot_date: '2026-11-22',
      start_time: '21:00',
      end_time: '22:00',
      capacity: 400,
      booked_count: 310,
      buffer_capacity: 50,
      is_active: true,
    },
    {
      id: 'ts-04',
      event_id: eventId,
      function_id: 'fn-04',
      slot_date: '2026-11-22',
      start_time: '22:00',
      end_time: '23:30',
      capacity: 250,
      booked_count: 95,
      buffer_capacity: 40,
      is_active: true,
    },
  ];

  // 3. Menu Categories & Menu Items
  const menuCategories: MenuCategory[] = [
    { id: 'cat-01', event_id: eventId, name: 'Welcome Drinks & Mocktails', display_order: 1 },
    { id: 'cat-02', event_id: eventId, name: 'Royal Starters (Veg & Non-Veg)', display_order: 2 },
    { id: 'cat-03', event_id: eventId, name: 'Main Course Delicacies', display_order: 3 },
    { id: 'cat-04', event_id: eventId, name: 'Breads & Fragrant Rices', display_order: 4 },
    { id: 'cat-05', event_id: eventId, name: 'Artisanal Desserts & Mithai', display_order: 5 },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 'item-01',
      category_id: 'cat-01',
      event_id: eventId,
      name: 'Kesar Pista Badam Thandai',
      description: 'Chilled saffron almond milk infused with cardamom, rose petals and pistachio.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: false,
      allergens: ['Nuts', 'Dairy'],
      portion_size: '250 ml glass',
      unit_cost: 65,
      is_available: true,
    },
    {
      id: 'item-02',
      category_id: 'cat-01',
      event_id: eventId,
      name: 'Fresh Lychee Lemongrass Cooler',
      description: 'Refreshing tropical lychee drink with fresh lemongrass and mint leaves.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: true,
      allergens: [],
      portion_size: '250 ml glass',
      unit_cost: 55,
      is_available: true,
    },
    {
      id: 'item-03',
      category_id: 'cat-02',
      event_id: eventId,
      name: 'Paneer Tikka Angara (Jain Option Available)',
      description: 'Charcoal-grilled cottage cheese cubes marinated in smoked Kashmiri spices.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: '3 skewers',
      unit_cost: 140,
      is_available: true,
    },
    {
      id: 'item-04',
      category_id: 'cat-02',
      event_id: eventId,
      name: 'Bhatti Da Murgh Tikka',
      description: 'Tender chicken morsels roasted in authentic clay oven with crushed black pepper.',
      is_vegetarian: false,
      is_non_veg: true,
      is_jain: false,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: '4 pcs',
      unit_cost: 195,
      is_available: true,
    },
    {
      id: 'item-05',
      category_id: 'cat-02',
      event_id: eventId,
      name: 'Dahi Ke Kebab',
      description: 'Melt-in-mouth spiced hung curd patties with a crunchy golden crust.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: false,
      is_vegan: false,
      allergens: ['Dairy', 'Gluten'],
      portion_size: '3 pcs',
      unit_cost: 125,
      is_available: true,
    },
    {
      id: 'item-06',
      category_id: 'cat-03',
      event_id: eventId,
      name: 'Dal Bukhara Overnight Slow-Cooked',
      description: 'Creamy black lentils simmered for 18 hours with vine-ripened tomatoes and white butter.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: 'Bowl (200g)',
      unit_cost: 130,
      is_available: true,
    },
    {
      id: 'item-07',
      category_id: 'cat-03',
      event_id: eventId,
      name: 'Dum Pukht Awadhi Biryani (Mutton / Chicken)',
      description: 'Fragrant Basmati rice sealed in earthen handis with succulent marinated meat and saffron.',
      is_vegetarian: false,
      is_non_veg: true,
      is_jain: false,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: 'Plate (300g)',
      unit_cost: 260,
      is_available: true,
    },
    {
      id: 'item-08',
      category_id: 'cat-03',
      event_id: eventId,
      name: 'Subz Miloni Paneer Makhani',
      description: 'Assorted seasonal vegetables and soft cottage cheese in rich cashew-tomato gravy.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: false,
      allergens: ['Dairy', 'Nuts'],
      portion_size: 'Bowl (220g)',
      unit_cost: 175,
      is_available: true,
    },
    {
      id: 'item-09',
      category_id: 'cat-05',
      event_id: eventId,
      name: 'Warm Shahi Moong Dal Halwa with Almonds',
      description: 'Classic Rajasthani festive dessert slow roasted with pure desi ghee and roasted nuts.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: false,
      allergens: ['Dairy', 'Nuts'],
      portion_size: 'Cup (120g)',
      unit_cost: 110,
      is_available: true,
    },
    {
      id: 'item-10',
      category_id: 'cat-05',
      event_id: eventId,
      name: 'Saffron Angoori Rasmalai',
      description: 'Delicate cottage cheese dumplings soaked in saffron infused clotted milk.',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: false,
      allergens: ['Dairy', 'Nuts'],
      portion_size: '2 pcs',
      unit_cost: 95,
      is_available: true,
    },
  ];

  // 4. Invitation Design Preset
  const invitationDesign: InvitationDesign = {
    id: 'des-01',
    event_id: eventId,
    name: 'Royal Heritage Golden Wedding Invitation',
    template_category: 'royal',
    canvas_width: 800,
    canvas_height: 1150,
    background_color: '#30080f',
    background_image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    is_published: true,
    elements: [
      {
        id: 'el-motif-top',
        type: 'motif',
        x: 350,
        y: 40,
        width: 100,
        height: 60,
        rotation: 0,
        zIndex: 2,
        content: '🕉️ || श्री गणेशाय नमः ||',
        style: {
          fontFamily: 'Cinzel',
          fontSize: 16,
          color: '#d9a744',
          textAlign: 'center',
          fontWeight: '600',
        },
      },
      {
        id: 'el-title',
        type: 'text',
        x: 80,
        y: 110,
        width: 640,
        height: 50,
        rotation: 0,
        zIndex: 2,
        content: 'TOGETHER WITH THEIR FAMILIES',
        style: {
          fontFamily: 'Montserrat',
          fontSize: 13,
          color: '#f6eed0',
          textAlign: 'center',
          letterSpacing: 4,
          fontWeight: '500',
        },
      },
      {
        id: 'el-hosts',
        type: 'text',
        x: 50,
        y: 155,
        width: 700,
        height: 45,
        rotation: 0,
        zIndex: 2,
        content: 'Dr. Ramesh & Mrs. Sunita Sharma',
        style: {
          fontFamily: 'Playfair Display',
          fontSize: 20,
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: '600',
        },
      },
      {
        id: 'el-couple',
        type: 'text',
        x: 50,
        y: 220,
        width: 700,
        height: 90,
        rotation: 0,
        zIndex: 3,
        content: 'Aditya & Priya',
        style: {
          fontFamily: 'Great Vibes',
          fontSize: 64,
          color: '#e3c270',
          textAlign: 'center',
        },
      },
      {
        id: 'el-date-time',
        type: 'text',
        x: 80,
        y: 330,
        width: 640,
        height: 40,
        rotation: 0,
        zIndex: 2,
        content: 'SUNDAY, NOVEMBER 22, 2026 • 7:00 PM ONWARDS',
        style: {
          fontFamily: 'Montserrat',
          fontSize: 14,
          color: '#ffffff',
          textAlign: 'center',
          letterSpacing: 2,
          fontWeight: '600',
        },
      },
      {
        id: 'el-venue',
        type: 'text',
        x: 80,
        y: 380,
        width: 640,
        height: 60,
        rotation: 0,
        zIndex: 2,
        content: 'THE LEELA PALACE, CHANAKYAPURI, NEW DELHI',
        style: {
          fontFamily: 'Cinzel',
          fontSize: 15,
          color: '#f6eed0',
          textAlign: 'center',
          letterSpacing: 2,
          fontWeight: '600',
        },
      },
      {
        id: 'el-personal-greeting',
        type: 'text',
        x: 60,
        y: 470,
        width: 680,
        height: 80,
        rotation: 0,
        zIndex: 2,
        content: 'Cordially invites {{guest_name}} & Family to grace this auspicious occasion and bestow their blessings upon the couple.',
        style: {
          fontFamily: 'Playfair Display',
          fontSize: 18,
          color: '#eddaa3',
          textAlign: 'center',
          lineHeight: 1.6,
        },
      },
    ],
  };

  // 5. Venue Layout & Tables (Round, Rectangular, VIP Lounges)
  const venueTables: VenueTable[] = [];
  const tableShapes: Array<'round' | 'rectangular' | 'square'> = ['round', 'rectangular'];
  const tableNames = [
    'VIP Royal Dais (Sharma Family)',
    'VIP Royal Dais (Verma Family)',
    'Table 1 - Grandparents & Elders',
    'Table 2 - Maternal Uncle Family (Mami/Mama)',
    'Table 3 - Paternal Chacha / Bua Family',
    'Table 4 - College Batchmates & Groom Friends',
    'Table 5 - Bride School & College Friends',
    'Table 6 - Overseas Relatives (USA & UK)',
    'Table 7 - Corporate Executives & Dignitaries',
    'Table 8 - Medical Faculty & Doctors',
    'Table 9 - Neighbors & Society Friends',
    'Table 10 - Youth & Cousins Pavilion',
    'Table 11 - South Delhi Family Circle',
    'Table 12 - Friends from Bangalore & Mumbai',
    'Table 13 - Relatives from Jaipur & Udaipur',
    'Table 14 - Relatives from Chandigarh & Punjab',
    'Table 15 - Harmony Dining Hall A',
    'Table 16 - Harmony Dining Hall B',
    'Table 17 - Garden Gazebo Table 1',
    'Table 18 - Garden Gazebo Table 2',
    'Table 19 - Pavilion Table 3',
    'Table 20 - Royal Terrace Table 4',
  ];

  tableNames.forEach((tblName, idx) => {
    const isVip = idx < 2;
    const capacity = isVip ? 10 : 8;
    const seats = Array.from({ length: capacity }, (_, sIdx) => ({
      id: `seat-${idx + 1}-${sIdx + 1}`,
      table_id: `tbl-${idx + 1}`,
      seat_number: sIdx + 1,
      label: `Seat ${sIdx + 1}`,
      is_accessible: sIdx === 0,
    }));

    const row = Math.floor(idx / 4);
    const col = idx % 4;

    venueTables.push({
      id: `tbl-${idx + 1}`,
      layout_id: 'layout-01',
      name: tblName,
      shape: isVip ? 'rectangular' : tableShapes[idx % 2],
      x: 100 + col * 260,
      y: 120 + row * 220,
      width: isVip ? 200 : 130,
      height: isVip ? 100 : 130,
      rotation: 0,
      capacity,
      is_vip: isVip,
      is_reserved: isVip,
      is_accessible: idx === 2 || idx === 8,
      category: isVip ? 'VIP' : idx < 7 ? 'Family' : 'Friends',
      seats,
    });
  });

  const venueLayout: VenueLayout = {
    id: 'layout-01',
    event_id: eventId,
    function_id: 'fn-04',
    name: 'Grand Royal Banquet Hall & Terrace',
    canvas_width: 1200,
    canvas_height: 1200,
    tables: venueTables,
  };

  // 6. Generate 500 Families, 1000+ Guests, RSVPs, Attendees, QR Passes, & WhatsApp Queue
  const indianLastNames = [
    'Sharma', 'Verma', 'Gupta', 'Malhotra', 'Kapoor', 'Mehta', 'Singhania', 'Chopra', 'Saxena', 'Bansal',
    'Agarwal', 'Reddy', 'Patel', 'Joshi', 'Bhatia', 'Iyer', 'Nair', 'Menon', 'Rao', 'Kulkarni',
    'Deshmukh', 'Mishra', 'Pandey', 'Dubey', 'Trivedi', 'Chatterjee', 'Mukherjee', 'Banerjee', 'Ghosh', 'Sen',
    'Chauhan', 'Rathore', 'Shekhawat', 'Choudhary', 'Yadav', 'Sethi', 'Bahl', 'Soni', 'Khurana', 'Arora',
    'Kohli', 'Dhawan', 'Bhasin', 'Trehan', 'Khanna', 'Ahluwalia', 'Sandhu', 'Gill', 'Bajwa', 'Grewal',
  ];

  const firstNamesMale = [
    'Rajesh', 'Vikram', 'Suresh', 'Amit', 'Sunil', 'Anil', 'Alok', 'Manoj', 'Rakesh', 'Sanjay',
    'Deepak', 'Naveen', 'Rahul', 'Rohit', 'Gaurav', 'Manish', 'Kunal', 'Abhishek', 'Prashant', 'Siddharth',
    'Arun', 'Pankaj', 'Sachin', 'Mohit', 'Vivek', 'Harish', 'Vikas', 'Ashish', 'Dinesh', 'Hemant',
  ];

  const firstNamesFemale = [
    'Sunita', 'Anita', 'Kavita', 'Suman', 'Meena', 'Pooja', 'Neeta', 'Rekha', 'Sneha', 'Ritu',
    'Anjali', 'Divya', 'Priyanka', 'Neha', 'Shweta', 'Nidhi', 'Swati', 'Tanvi', 'Richa', 'Simran',
    'Bhavna', 'Roshni', 'Komal', 'Pallavi', 'Garima', 'Aarti', 'Geeta', 'Shalini', 'Preeti', 'Jyoti',
  ];

  const childNames = ['Aarav', 'Vihaan', 'Advik', 'Kabir', 'Reyansh', 'Ananya', 'Diya', 'Myra', 'Aadhya', 'Saanvi'];

  const guestGroups: GuestGroup[] = [];
  const guests: Guest[] = [];
  const invitations: Invitation[] = [];
  const rsvps: RSVP[] = [];
  const allAttendees: Attendee[] = [];
  const qrPasses: QRPass[] = [];
  const checkinLogs: CheckinLog[] = [];
  const whatsappQueue: WhatsAppMessageQueueItem[] = [];

  // 500 Family invitations
  for (let i = 1; i <= 500; i++) {
    const familyLastName = indianLastNames[(i - 1) % indianLastNames.length];
    const familyCode = `FAM-${String(i).padStart(4, '0')}`;
    const familyGroupId = `grp-${i}`;
    const headFirstName = firstNamesMale[(i - 1) % firstNamesMale.length];
    const spouseFirstName = firstNamesFemale[(i - 1) % firstNamesFemale.length];
    const headName = `${headFirstName} ${familyLastName}`;
    const familyTitle = `The ${familyLastName} Family (${headName})`;

    // Determining family size (between 2 to 4 members = 1000+ total attendees)
    const hasChildren = i % 3 === 0;
    const hasElder = i % 5 === 0;
    const totalMembers = 2 + (hasChildren ? 1 : 0) + (hasElder ? 1 : 0);

    const isVip = i <= 25;
    const isSpecial = i > 25 && i <= 80;
    const category = isVip ? 'VIP' : isSpecial ? 'Special' : i % 4 === 0 ? 'Friend' : 'Family';

    const group: GuestGroup = {
      id: familyGroupId,
      event_id: eventId,
      name: familyTitle,
      code: familyCode,
      total_invited: totalMembers,
      internal_notes: isVip ? 'Close family dignitary / High priority' : '',
    };
    guestGroups.push(group);

    // Secure cryptographic token for this family invitation
    const tokenHex = `inv_${familyCode.toLowerCase()}_${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 8)}`;
    const invCode = `INV-${9000 + i}`;

    const invitation: Invitation = {
      id: `inv-${i}`,
      event_id: eventId,
      family_id: familyGroupId,
      token: tokenHex,
      invitation_code: invCode,
      status: i <= 440 ? 'responded' : i <= 480 ? 'opened' : 'sent',
      views_count: Math.floor(Math.random() * 5) + 1,
      last_viewed_at: new Date(Date.now() - (500 - i) * 60000).toISOString(),
      created_at: new Date('2026-10-15').toISOString(),
    };
    invitations.push(invitation);

    // Primary Guest (Household head)
    const primaryPhone = `+9198${String(10000000 + i).substring(0, 8)}`;
    const primaryGuest: Guest = {
      id: `gst-${i}-1`,
      event_id: eventId,
      organization_id: orgId,
      family_id: familyGroupId,
      family_name: familyTitle,
      full_name: headName,
      whatsapp_number: primaryPhone,
      category,
      relationship: isVip ? 'Paternal Relative' : 'Family Friend',
      is_child: false,
      dietary_preference: i % 4 === 0 ? 'jain' : i % 3 === 0 ? 'non_veg' : 'veg',
      is_primary_contact: true,
      invitation_code: invCode,
      invitation_token: tokenHex,
      invitation_status: invitation.status,
      created_at: new Date('2026-10-15').toISOString(),
    };
    guests.push(primaryGuest);

    // Secondary Guest (Spouse)
    const spouseGuest: Guest = {
      id: `gst-${i}-2`,
      event_id: eventId,
      organization_id: orgId,
      family_id: familyGroupId,
      family_name: familyTitle,
      full_name: `${spouseFirstName} ${familyLastName}`,
      whatsapp_number: primaryPhone,
      category,
      is_child: false,
      dietary_preference: primaryGuest.dietary_preference,
      is_primary_contact: false,
      created_at: new Date('2026-10-15').toISOString(),
    };
    guests.push(spouseGuest);

    // Optional child / elder
    if (hasChildren) {
      const childGuest: Guest = {
        id: `gst-${i}-3`,
        event_id: eventId,
        organization_id: orgId,
        family_id: familyGroupId,
        family_name: familyTitle,
        full_name: `${childNames[i % childNames.length]} ${familyLastName}`,
        whatsapp_number: primaryPhone,
        category,
        is_child: true,
        dietary_preference: 'veg',
        is_primary_contact: false,
        created_at: new Date('2026-10-15').toISOString(),
      };
      guests.push(childGuest);
    }

    if (hasElder) {
      const elderGuest: Guest = {
        id: `gst-${i}-4`,
        event_id: eventId,
        organization_id: orgId,
        family_id: familyGroupId,
        family_name: familyTitle,
        full_name: `Smt. Shanti ${familyLastName}`,
        whatsapp_number: primaryPhone,
        category,
        is_child: false,
        dietary_preference: 'jain',
        special_notes: 'Requires ground-floor accessible wheelchair seating.',
        is_primary_contact: false,
        created_at: new Date('2026-10-15').toISOString(),
      };
      guests.push(elderGuest);
    }

    // RSVP creation for responded families (e.g. 440 responded out of 500)
    if (i <= 440) {
      const isConfirmed = i <= 410; // 410 confirmed, 25 declined, 5 undecided
      const rsvpStatus = isConfirmed ? 'confirmed' : i <= 435 ? 'declined' : 'undecided';
      const slotIndex = i % timeSlots.length;
      const selectedSlot = isConfirmed ? timeSlots[slotIndex] : undefined;

      const familyAttendees: Attendee[] = [];

      if (isConfirmed) {
        // Add attending members
        familyAttendees.push({
          id: `att-${i}-1`,
          rsvp_id: `rsvp-${i}`,
          event_id: eventId,
          guest_id: primaryGuest.id,
          full_name: primaryGuest.full_name,
          is_child: false,
          dietary_preference: primaryGuest.dietary_preference,
          checked_in: i <= 210, // 210 checked-in for demo live statistics
          checked_in_at: i <= 210 ? new Date(Date.now() - (220 - i) * 120000).toISOString() : undefined,
          food_selections: [
            { attendee_id: `att-${i}-1`, menu_item_id: 'item-01', quantity: 1 },
            { attendee_id: `att-${i}-1`, menu_item_id: primaryGuest.dietary_preference === 'non_veg' ? 'item-04' : 'item-03', quantity: 1 },
            { attendee_id: `att-${i}-1`, menu_item_id: primaryGuest.dietary_preference === 'non_veg' ? 'item-07' : 'item-06', quantity: 1 },
            { attendee_id: `att-${i}-1`, menu_item_id: 'item-09', quantity: 1 },
          ],
        });

        familyAttendees.push({
          id: `att-${i}-2`,
          rsvp_id: `rsvp-${i}`,
          event_id: eventId,
          guest_id: spouseGuest.id,
          full_name: spouseGuest.full_name,
          is_child: false,
          dietary_preference: spouseGuest.dietary_preference,
          checked_in: i <= 195,
          checked_in_at: i <= 195 ? new Date(Date.now() - (210 - i) * 120000).toISOString() : undefined,
          food_selections: [
            { attendee_id: `att-${i}-2`, menu_item_id: 'item-02', quantity: 1 },
            { attendee_id: `att-${i}-2`, menu_item_id: 'item-05', quantity: 1 },
            { attendee_id: `att-${i}-2`, menu_item_id: 'item-08', quantity: 1 },
            { attendee_id: `att-${i}-2`, menu_item_id: 'item-10', quantity: 1 },
          ],
        });

        if (hasChildren) {
          familyAttendees.push({
            id: `att-${i}-3`,
            rsvp_id: `rsvp-${i}`,
            event_id: eventId,
            full_name: `${childNames[i % childNames.length]} ${familyLastName}`,
            is_child: true,
            dietary_preference: 'veg',
            checked_in: i <= 180,
            checked_in_at: i <= 180 ? new Date(Date.now() - (200 - i) * 120000).toISOString() : undefined,
            food_selections: [
              { attendee_id: `att-${i}-3`, menu_item_id: 'item-01', quantity: 1 },
              { attendee_id: `att-${i}-3`, menu_item_id: 'item-03', quantity: 1 },
              { attendee_id: `att-${i}-3`, menu_item_id: 'item-10', quantity: 1 },
            ],
          });
        }

        allAttendees.push(...familyAttendees);

        // QR Pass for Family (Hashed token)
        const qrPass: QRPass = {
          id: `qr-${i}`,
          event_id: eventId,
          invitation_id: invitation.id,
          rsvp_id: `rsvp-${i}`,
          pass_type: 'family',
          family_id: familyGroupId,
          token_hash: `sha256_${tokenHex}_pass`,
          token_plaintext: `PASS:${familyCode}:${tokenHex.substring(0, 10)}`,
          display_code: `QP-${8000 + i}`,
          max_attendees: familyAttendees.length,
          checked_in_count: familyAttendees.filter(a => a.checked_in).length,
          is_revoked: false,
          created_at: new Date('2026-10-20').toISOString(),
        };
        qrPasses.push(qrPass);

        // If attendees are checked in, add CheckinLog
        familyAttendees.forEach(att => {
          if (att.checked_in) {
            checkinLogs.push({
              id: `log-${att.id}`,
              event_id: eventId,
              qr_pass_id: qrPass.id,
              attendee_id: att.id,
              attendee_name: att.full_name,
              function_id: 'fn-04',
              scanned_by: 'staff-operator-01',
              scan_type: 'qr_camera',
              status: 'success',
              timestamp: att.checked_in_at || new Date().toISOString(),
            });
          }
        });
      }

      const rsvp: RSVP = {
        id: `rsvp-${i}`,
        event_id: eventId,
        invitation_id: invitation.id,
        status: rsvpStatus,
        total_attendees: isConfirmed ? familyAttendees.length : 0,
        adult_count: isConfirmed ? (hasElder ? 3 : 2) : 0,
        child_count: isConfirmed && hasChildren ? 1 : 0,
        arrival_date: selectedSlot?.slot_date,
        time_slot_id: selectedSlot?.id,
        dietary_notes: primaryGuest.dietary_preference === 'jain' ? 'Strict Jain food for all members' : '',
        special_requests: hasElder ? 'Wheelchair assistance requested at porch.' : '',
        responded_at: new Date('2026-10-20').toISOString(),
        attendees: familyAttendees,
      };
      rsvps.push(rsvp);
    }

    // WhatsApp Message Queue Entry
    const waItem: WhatsAppMessageQueueItem = {
      id: `wa-q-${i}`,
      organization_id: orgId,
      event_id: eventId,
      guest_id: primaryGuest.id,
      recipient_name: headName,
      recipient_phone: primaryPhone,
      template_name: 'wedding_invitation_v1',
      status: i <= 400 ? 'delivered' : i <= 450 ? 'sent' : 'submitted',
      attempts: 1,
      scheduled_at: new Date('2026-10-18T10:00:00Z').toISOString(),
      sent_at: new Date('2026-10-18T10:05:00Z').toISOString(),
      delivered_at: i <= 400 ? new Date('2026-10-18T10:06:00Z').toISOString() : undefined,
      read_at: i <= 320 ? new Date('2026-10-18T10:15:00Z').toISOString() : undefined,
      invitation_url: `${window.location.origin}${window.location.pathname}#/invite/${tokenHex}`,
    };
    whatsappQueue.push(waItem);
  }

  // 7. Allocate initial seats to attendees
  let seatCounter = 0;
  venueTables.forEach(table => {
    table.seats.forEach(seat => {
      if (seatCounter < allAttendees.length) {
        const attendee = allAttendees[seatCounter];
        seat.allocated_attendee_id = attendee.id;
        seat.allocated_attendee_name = attendee.full_name;
        attendee.table_id = table.id;
        attendee.seat_id = seat.id;
        seatCounter++;
      }
    });
  });

  return {
    event,
    timeSlots,
    menuCategories,
    menuItems,
    invitationDesign,
    venueLayout,
    guestGroups,
    guests,
    invitations,
    rsvps,
    attendees: allAttendees,
    qrPasses,
    checkinLogs,
    whatsappQueue,
  };
}

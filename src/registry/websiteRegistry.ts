// ================================================================================
// WEBSITES — CENTRAL WEBSITE REGISTRY
// Dynamic registry driving homepage cards, search, categories, and routing
// ================================================================================

export interface WebsiteEntry {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  routePath: string;
  category: string;
  iconName: string;
  accentColor: string;
  isActive: boolean;
  isFeatured: boolean;
  sortOrder: number;
  moduleKey: string;
  tags: string[];
  statsBadge?: string;
  techStack: string;
}

export const WEBSITE_CATEGORIES = [
  'All',
  'Social & Relationships',
  'Food & Culinary',
  'Health & Medicine',
  'Business & Productivity',
  'Events & Hospitality',
  'Spirituality & Culture',
  'Communication & Tools',
  'Media & Entertainment',
  'Education & Learning',
] as const;

export type WebsiteCategory = typeof WEBSITE_CATEGORIES[number];

export const WEBSITES_REGISTRY: WebsiteEntry[] = [
  {
    id: 'chat',
    name: 'Just You & Me',
    shortDescription: 'Private romantic sanctuary for two with HD calls, watch together, love notes & cycle tracking.',
    longDescription: 'Engineered exclusively for couples. Features peer-to-peer WebRTC video calling, real-time message feed, synchronized movie watching, memories gallery, and daily 4-phase menstrual cycle care advice.',
    routePath: '/site/chat',
    category: 'Social & Relationships',
    iconName: 'Heart',
    accentColor: '#f43f5e',
    isActive: true,
    isFeatured: true,
    sortOrder: 1,
    moduleKey: 'chat',
    tags: ['couple', 'chat', 'webrtc', 'calling', 'watch-party', 'romance', 'cycle-care'],
    statsBadge: 'Realtime Space',
    techStack: 'React 18 • Supabase • WebRTC',
  },
  {
    id: 'cookfood',
    name: 'CookFood',
    shortDescription: 'Modern Indian recipe discovery & cooking assistant with dynamic quantity scaling.',
    longDescription: 'Explore 56 authentic recipes across 7 collections. Features real-time kitchen fraction quantity recalculation, fullscreen step-by-step cooking timers with confetti, and WhatsApp shopping export.',
    routePath: '/site/cookfood',
    category: 'Food & Culinary',
    iconName: 'UtensilsCrossed',
    accentColor: '#f97316',
    isActive: true,
    isFeatured: true,
    sortOrder: 2,
    moduleKey: 'cookfood',
    tags: ['recipes', 'cooking', 'scaling', 'indian-cuisine', 'timers', 'shopping-list'],
    statsBadge: '56 Recipes',
    techStack: 'React 19 • TypeScript • Tailwind',
  },
  {
    id: 'doctor',
    name: 'Doctor',
    shortDescription: 'Holistic medical anatomy visualizer & 250 disease intelligence database with audio narration.',
    longDescription: 'Interactive vector SVG anatomy explorer (Man, Woman, Baby) across 25 body parts with 250 conditions. Bridges Allopathy with Ayurveda, Mudras, Yoga Asanas, and Vitamin deficiencies with Web Speech narration.',
    routePath: '/site/doctor',
    category: 'Health & Medicine',
    iconName: 'Activity',
    accentColor: '#06b6d4',
    isActive: true,
    isFeatured: true,
    sortOrder: 3,
    moduleKey: 'doctor',
    tags: ['anatomy', 'ayurveda', 'mudras', 'yoga', 'vitamins', 'audio-narration'],
    statsBadge: '250 Conditions',
    techStack: 'Vanilla ES6+ • SVG • Web Speech',
  },
  {
    id: 'erp',
    name: 'ERP Enterprise Suite',
    shortDescription: 'Dual-stack enterprise business suite with CRM, Deals pipeline, Sales, Inventory & General Ledger.',
    longDescription: 'Production-ready enterprise workstation with 5-stage Chevron deal pipeline, chronological collaboration timeline, multi-currency invoicing, purchase orders, leave management, and double-entry accounting.',
    routePath: '/site/erp',
    category: 'Business & Productivity',
    iconName: 'Briefcase',
    accentColor: '#3b82f6',
    isActive: true,
    isFeatured: true,
    sortOrder: 4,
    moduleKey: 'erp',
    tags: ['erp', 'crm', 'deals', 'invoicing', 'ledger', 'inventory', 'hrm'],
    statsBadge: '9 Modules',
    techStack: 'React 19 • TypeScript • Supabase',
  },
  {
    id: 'invitedecide',
    name: 'InviteDecide',
    shortDescription: 'Royal event participation SaaS with WhatsApp invitations, catering buffer & QR gate scanner.',
    longDescription: 'Complete Indian wedding and gala planning suite. Includes token-based guest RSVP portals, arrival time slot capacity management, catering portion safety buffer calculator, 2D family auto-seating, and gate QR pass scanner.',
    routePath: '/site/invitedecide',
    category: 'Events & Hospitality',
    iconName: 'Crown',
    accentColor: '#eab308',
    isActive: true,
    isFeatured: true,
    sortOrder: 5,
    moduleKey: 'invitedecide',
    tags: ['events', 'wedding', 'rsvp', 'seating-plan', 'catering', 'qr-scanner', 'whatsapp'],
    statsBadge: '10 Roles',
    techStack: 'React 18 • Zustand • QR Engine',
  },
  {
    id: 'mypage',
    name: 'Prabhata Sanctuary',
    shortDescription: 'Daily morning Hindu Panchangam, Omkaram Dharma worship guide, Muhurthams & TV9 news.',
    longDescription: 'Astronomical celestial calculations (Tithi, Nakshatra, Masa) using Meeus equations, daily presiding deity guide, bilingual Web Speech audio morning briefings, solar Muhurthams with IP geolocation, and TV9 Telugu news hub.',
    routePath: '/site/mypage',
    category: 'Spirituality & Culture',
    iconName: 'Sunrise',
    accentColor: '#d97706',
    isActive: true,
    isFeatured: false,
    sortOrder: 6,
    moduleKey: 'mypage',
    tags: ['panchang', 'hindu-calendar', 'dharma', 'muhurtham', 'telugu-news', 'astronomy'],
    statsBadge: 'Daily Astromath',
    techStack: 'Vanilla ES6+ • Meeus Celestial Math',
  },
  {
    id: 'pujas',
    name: 'Sanatana Pujas',
    shortDescription: '21 authentic Vedic rituals with Priest Mode audio chanting, temple bells & Sankalpam generator.',
    longDescription: 'Comprehensive guidance for 21 Shodasha Samskaras, Vratams, and Astrological remedies. Features bilingual English/Telugu procedures, synthesized bronze temple bell and conch sounds, personalized Sankalpam, and WhatsApp checklist.',
    routePath: '/site/pujas',
    category: 'Spirituality & Culture',
    iconName: 'Flame',
    accentColor: '#ea580c',
    isActive: true,
    isFeatured: false,
    sortOrder: 7,
    moduleKey: 'pujas',
    tags: ['pujas', 'vedic', 'mantras', 'sankalpam', 'samagri', 'temple-bell', 'telugu'],
    statsBadge: '21 Rituals',
    techStack: 'Vanilla ES6+ • Web Audio API',
  },
  {
    id: 'shareit',
    name: 'ShareIT',
    shortDescription: 'Encrypted browser screen sharing, multi-peer video conferencing & collaborative telestrator control.',
    longDescription: 'Zero-install conferencing with desktop/tab sharing, remote cursor and telestrator markup, floating webcam picture-in-picture, side-by-side in-meeting chat, direct P2P 16KB chunked file sharing, and MQTT cloud signaling.',
    routePath: '/site/shareit',
    category: 'Communication & Tools',
    iconName: 'MonitorPlay',
    accentColor: '#6366f1',
    isActive: true,
    isFeatured: true,
    sortOrder: 8,
    moduleKey: 'shareit',
    tags: ['webrtc', 'screenshare', 'video-call', 'file-transfer', 'remote-control', 'mqtt'],
    statsBadge: 'Mesh WebRTC',
    techStack: 'React 18 • TypeScript • MQTT WSS',
  },
  {
    id: 'shortshub',
    name: 'ShortsHub',
    shortDescription: 'Curated Tamil, English & Telugu vertical YouTube Shorts player with daily collector & SnapTube export.',
    longDescription: 'Mobile-first 9:16 Shorts player across 4 family-friendly categories (strictly NO Games/Tech) with swipe gestures, auto-capture into daily watchlist, and multi-format export for batch downloading via SnapTube.',
    routePath: '/site/shortshub',
    category: 'Media & Entertainment',
    iconName: 'PlaySquare',
    accentColor: '#ef4444',
    isActive: true,
    isFeatured: false,
    sortOrder: 9,
    moduleKey: 'shortshub',
    tags: ['shorts', 'youtube', 'tamil', 'telugu', 'snaptube', 'video-player'],
    statsBadge: '3 Languages',
    techStack: 'React 18 • Dexie.js • YouTube API',
  },
  {
    id: 'study',
    name: 'NCERT Cartoon Academy',
    shortDescription: 'Class 1 to 12 CBSE curriculum transformed into comic strips, formula labs & spoken audio.',
    longDescription: 'Makes academic textbooks joyful through black & white Sunday comic strips, character voice narrations (Prof. Paws, Pixel Bot), procedural cartoon sound effects, 6 interactive physics/math simulators, and printable diplomas.',
    routePath: '/site/study',
    category: 'Education & Learning',
    iconName: 'BookOpen',
    accentColor: '#8b5cf6',
    isActive: true,
    isFeatured: true,
    sortOrder: 10,
    moduleKey: 'study',
    tags: ['ncert', 'cbse', 'comics', 'physics-labs', 'quizzes', 'audio-narration'],
    statsBadge: 'Class 1-12',
    techStack: 'Vanilla ES6+ • Comic SVG • Web Speech',
  },
];

// Helper functions for easy querying and future expansion
export const getAllWebsites = (): WebsiteEntry[] => {
  return [...WEBSITES_REGISTRY].sort((a, b) => a.sortOrder - b.sortOrder);
};

export const getWebsiteById = (id: string): WebsiteEntry | undefined => {
  return WEBSITES_REGISTRY.find((site) => site.id === id || site.moduleKey === id);
};

export const getFeaturedWebsites = (): WebsiteEntry[] => {
  return WEBSITES_REGISTRY.filter((site) => site.isFeatured);
};

export const searchWebsites = (query: string): WebsiteEntry[] => {
  const clean = query.trim().toLowerCase();
  if (!clean) return getAllWebsites();
  return WEBSITES_REGISTRY.filter((site) => {
    return (
      site.name.toLowerCase().includes(clean) ||
      site.shortDescription.toLowerCase().includes(clean) ||
      site.category.toLowerCase().includes(clean) ||
      site.techStack.toLowerCase().includes(clean) ||
      site.tags.some((tag) => tag.toLowerCase().includes(clean))
    );
  });
};

export const getWebsitesByCategory = (category: string): WebsiteEntry[] => {
  if (category === 'All') return getAllWebsites();
  return WEBSITES_REGISTRY.filter((site) => site.category === category);
};

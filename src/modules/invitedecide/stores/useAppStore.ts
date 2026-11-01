import { create } from 'zustand';
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
  CateringCalculation,
  VenueLayout,
  VenueTable,
  QRPass,
  CheckinLog,
  WhatsAppMessageQueueItem,
  InvitationDesign,
  UserRole,
} from '@/modules/invitedecide/types';
import { generateWeddingDemoData } from '@/modules/invitedecide/services/demoData';
import {
  EventSetupFormData,
  generateCompleteEventFromInput,
} from '@/modules/invitedecide/services/eventGenerator';
import {
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
  clearStateFromLocalStorage,
  syncEventToSupabase,
  syncGuestToSupabase,
  syncDeleteGuestFromSupabase,
  syncRSVPToSupabase,
  syncCheckinToSupabase,
  syncMenuItemToSupabase,
  syncDeleteMenuItemFromSupabase,
  pushAllDataToSupabase,
  fetchDataFromSupabase,
} from '@/modules/invitedecide/services/supabaseSync';
import { supabase, isSupabaseConfigured } from '@/modules/invitedecide/services/supabase';

// Helper to create a fresh, clean workspace for real users (0 fake demo guests)
export function createCleanUserWorkspace(user: {
  email: string;
  name: string;
  orgName?: string;
  role: UserRole;
}) {
  const orgName = user.orgName?.trim() || `${user.name}'s Celebrations`;
  const eventId = `evt-${Date.now()}`;
  const orgId = `org-${Date.now()}`;
  const startDate = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];
  const endDate = new Date(Date.now() + 31 * 86400000).toISOString().split('T')[0];

  const defaultEvent: EventItem = {
    id: eventId,
    organization_id: orgId,
    name: `${orgName} Celebration`,
    slug: 'my-event',
    category: 'wedding',
    description: 'Welcome to your event! Configure multi-day functions, invitations, and catering.',
    host_names: user.name || 'Event Host',
    cover_image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    venue_name: 'Royal Palace Banquet Hall',
    address: 'Grand Celebration Boulevard, City Center',
    google_maps_link: 'https://maps.google.com',
    contact_phone: '+91 98765 43210',
    contact_whatsapp: '+91 98765 43210',
    start_date: startDate,
    end_date: endDate,
    dress_code: 'Festive Traditional',
    guest_capacity: 250,
    status: 'planning',
    created_at: new Date().toISOString(),
    settings: {
      allow_family_rsvp: true,
      require_food_selection: true,
      enable_time_slots: true,
      enable_seating: true,
      catering_buffer_percentage: 10,
      whatsapp_notifications: true,
    },
    functions: [
      {
        id: `fn-${Date.now()}-1`,
        event_id: eventId,
        name: 'Welcome Reception & Celebrations',
        date: startDate,
        start_time: '18:00',
        end_time: '22:00',
        venue_name: 'Main Ballroom',
        dress_code: 'Festive Traditional',
      },
    ],
  };

  const defaultTimeSlots: TimeSlot[] = [
    {
      id: `slot-${Date.now()}-1`,
      event_id: eventId,
      slot_date: startDate,
      start_time: '18:00',
      end_time: '19:30',
      capacity: 80,
      booked_count: 0,
      buffer_capacity: 10,
      is_active: true,
    },
    {
      id: `slot-${Date.now()}-2`,
      event_id: eventId,
      slot_date: startDate,
      start_time: '19:30',
      end_time: '21:00',
      capacity: 80,
      booked_count: 0,
      buffer_capacity: 10,
      is_active: true,
    },
    {
      id: `slot-${Date.now()}-3`,
      event_id: eventId,
      slot_date: startDate,
      start_time: '21:00',
      end_time: '22:30',
      capacity: 80,
      booked_count: 0,
      buffer_capacity: 10,
      is_active: true,
    },
  ];

  const defaultMenuCategories: MenuCategory[] = [
    { id: 'cat-1', event_id: eventId, name: 'Welcome Drinks & Starters', display_order: 1 },
    { id: 'cat-2', event_id: eventId, name: 'Main Course & Breads', display_order: 2 },
    { id: 'cat-3', event_id: eventId, name: 'Traditional Desserts', display_order: 3 },
  ];

  const defaultMenuItems: MenuItem[] = [
    {
      id: 'item-1',
      category_id: 'cat-1',
      event_id: eventId,
      name: 'Paneer Tikka & Mocktails',
      description: 'Char-grilled cottage cheese skewers with mint chutney',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: false,
      allergens: ['Dairy'],
      portion_size: '2 skewers',
      unit_cost: 180,
      is_available: true,
    },
    {
      id: 'item-2',
      category_id: 'cat-2',
      event_id: eventId,
      name: 'Shahi Paneer & Dal Makhani',
      description: 'Rich tomato cashew gravy paired with slow-cooked black lentils',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: false,
      is_vegan: false,
      allergens: ['Dairy', 'Nuts'],
      portion_size: '1 bowl',
      unit_cost: 250,
      is_available: true,
    },
    {
      id: 'item-3',
      category_id: 'cat-3',
      event_id: eventId,
      name: 'Gulab Jamun & Kulfi',
      description: 'Warm gulab jamun served with saffron pistachio rabdi kulfi',
      is_vegetarian: true,
      is_non_veg: false,
      is_jain: true,
      is_vegan: false,
      allergens: ['Dairy', 'Nuts', 'Gluten'],
      portion_size: '1 serving',
      unit_cost: 120,
      is_available: true,
    },
  ];

  const defaultVenueLayout: VenueLayout = {
    id: `layout-${Date.now()}`,
    event_id: eventId,
    name: 'Main Banquet Layout',
    canvas_width: 800,
    canvas_height: 600,
    tables: [
      {
        id: 'tbl-1',
        layout_id: `layout-${Date.now()}`,
        name: 'Table 1 (VIP)',
        shape: 'round',
        x: 150,
        y: 150,
        width: 120,
        height: 120,
        rotation: 0,
        capacity: 6,
        is_vip: true,
        is_reserved: false,
        is_accessible: true,
        seats: Array.from({ length: 6 }, (_, i) => ({
          id: `seat-tbl1-${i + 1}`,
          table_id: 'tbl-1',
          seat_number: i + 1,
          label: `Seat ${i + 1}`,
          is_accessible: true,
        })),
      },
      {
        id: 'tbl-2',
        layout_id: `layout-${Date.now()}`,
        name: 'Table 2 (Family)',
        shape: 'round',
        x: 350,
        y: 150,
        width: 120,
        height: 120,
        rotation: 0,
        capacity: 6,
        is_vip: false,
        is_reserved: false,
        is_accessible: true,
        seats: Array.from({ length: 6 }, (_, i) => ({
          id: `seat-tbl2-${i + 1}`,
          table_id: 'tbl-2',
          seat_number: i + 1,
          label: `Seat ${i + 1}`,
          is_accessible: true,
        })),
      },
    ],
  };

  const defaultInvitationDesign: InvitationDesign = {
    id: `inv-des-${Date.now()}`,
    event_id: eventId,
    name: 'Classic Royal Golden Card',
    template_category: 'royal',
    canvas_width: 800,
    canvas_height: 1200,
    background_color: '#18181b',
    background_image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    elements: [],
    is_published: false,
  };

  return {
    event: defaultEvent,
    timeSlots: defaultTimeSlots,
    menuCategories: defaultMenuCategories,
    menuItems: defaultMenuItems,
    venueLayout: defaultVenueLayout,
    invitationDesign: defaultInvitationDesign,
    guestGroups: [],
    guests: [],
    invitations: [],
    rsvps: [],
    attendees: [],
    qrPasses: [],
    checkinLogs: [],
    whatsappQueue: [],
  };
}

interface AppState {
  // Auth & Org
  userRole: UserRole;
  userEmail: string;
  userName: string;
  activeOrgId: string;
  activeOrgName: string;
  isDemoMode: boolean;

  // Setup Wizard State & Actions
  isSetupWizardOpen: boolean;
  setSetupWizardOpen: (open: boolean) => void;
  populateEventFromUserInput: (formData: EventSetupFormData) => { success: boolean; message: string };

  // Active Event & Modules Data
  event: EventItem;
  timeSlots: TimeSlot[];
  menuCategories: MenuCategory[];
  menuItems: MenuItem[];
  invitationDesign: InvitationDesign;
  venueLayout: VenueLayout;
  guestGroups: GuestGroup[];
  guests: Guest[];
  invitations: Invitation[];
  rsvps: RSVP[];
  attendees: Attendee[];
  qrPasses: QRPass[];
  checkinLogs: CheckinLog[];
  whatsappQueue: WhatsAppMessageQueueItem[];

  // Actions
  setUserRole: (role: UserRole) => void;
  setUser: (user: {
    email: string;
    name: string;
    role: UserRole;
    orgName?: string;
    orgId?: string;
  }) => void;
  loginAsDemoUser: (role?: UserRole) => void;
  loginAsUser: (user: {
    id?: string;
    email: string;
    name: string;
    role: UserRole;
    orgName?: string;
    isNewAccount?: boolean;
  }) => Promise<void>;
  logout: () => void;
  loadDemoDataIntoWorkspace: () => void;
  clearWorkspaceData: () => void;

  updateEventDetails: (details: Partial<EventItem>) => void;
  updateEventSettings: (settings: Partial<EventItem['settings']>) => void;

  // Guest Management
  addGuest: (guest: Omit<Guest, 'id' | 'created_at'>) => void;
  updateGuest: (id: string, updates: Partial<Guest>) => void;
  deleteGuest: (id: string) => void;
  importGuestsFromList: (newGuests: Partial<Guest>[]) => void;

  // Invitation Designer
  updateInvitationDesign: (design: Partial<InvitationDesign>) => void;
  addCanvasElement: (element: any) => void;
  updateCanvasElement: (id: string, updates: any) => void;
  deleteCanvasElement: (id: string) => void;
  publishInvitation: () => void;

  // RSVP & Time Slots
  submitRSVP: (
    invitationToken: string,
    rsvpData: {
      status: 'confirmed' | 'declined';
      timeSlotId?: string;
      attendees: Array<{
        full_name: string;
        is_child: boolean;
        dietary_preference: 'veg' | 'non_veg' | 'jain' | 'vegan';
        food_selections?: Array<{ menu_item_id: string; quantity: number }>;
      }>;
      dietary_notes?: string;
      special_requests?: string;
    }
  ) => { success: boolean; error?: string; qrPass?: QRPass };

  // Catering Engine
  getCateringCalculations: () => CateringCalculation[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;

  // Seating Engine
  updateTablePosition: (tableId: string, x: number, y: number) => void;
  allocateSeat: (seatId: string, attendeeId: string) => void;
  unallocateSeat: (seatId: string) => void;
  runAutoSeatingAllocation: () => { allocatedCount: number; message: string };

  // Check-in & QR
  validateAndCheckIn: (
    tokenStringOrHash: string,
    attendeeId?: string,
    operatorName?: string
  ) => {
    success: boolean;
    error?: string;
    pass?: QRPass;
    attendeeName?: string;
    alreadyCheckedIn?: boolean;
    isGroupCheckin?: boolean;
  };
  revokeQRPass: (passId: string, reason: string) => void;

  // WhatsApp
  enqueueWhatsAppInvitation: (guestId: string) => void;
  retryWhatsAppMessage: (messageId: string) => void;

  // Supabase Backend Sync
  pushToSupabaseBackend: () => Promise<{
    success: boolean;
    message: string;
    syncedCount: number;
    error?: string;
  }>;
  pullFromSupabaseBackend: () => Promise<{
    success: boolean;
    message: string;
    error?: string;
  }>;

  // Reset demo dataset
  resetDemoData: () => void;
}

// Load initial state: check if persistent state exists
const persisted = loadStateFromLocalStorage();
const isDemoModeInit = persisted?.isDemoMode !== undefined ? persisted.isDemoMode : true;
const initialData = persisted || generateWeddingDemoData();

export const useAppStore = create<AppState>((set, get) => ({
  userRole: (persisted?.userRole as UserRole) || 'owner',
  userEmail: persisted?.userEmail || 'organizer@invitedecide.com',
  userName: persisted?.userName || 'Dr. Ramesh Sharma',
  activeOrgId: persisted?.activeOrgId || 'org-demo-001',
  activeOrgName: persisted?.activeOrgName || 'Sharma & Verma Royal Wedding Celebrations',
  isDemoMode: isDemoModeInit,
  isSetupWizardOpen: false,

  event: initialData.event,
  timeSlots: initialData.timeSlots,
  menuCategories: initialData.menuCategories,
  menuItems: initialData.menuItems,
  invitationDesign: initialData.invitationDesign,
  venueLayout: initialData.venueLayout,
  guestGroups: initialData.guestGroups,
  guests: initialData.guests,
  invitations: initialData.invitations,
  rsvps: initialData.rsvps,
  attendees: initialData.attendees,
  qrPasses: initialData.qrPasses,
  checkinLogs: initialData.checkinLogs,
  whatsappQueue: initialData.whatsappQueue,

  setUserRole: (role) => {
    set({ userRole: role });
    saveStateToLocalStorage(get());
  },

  setUser: ({ email, name, role, orgName, orgId }) => {
    set((state) => ({
      userEmail: email,
      userName: name,
      userRole: role,
      activeOrgName: orgName || state.activeOrgName,
      activeOrgId: orgId || state.activeOrgId,
    }));
    saveStateToLocalStorage(get());
  },

  // Log in as a Demo User with pre-loaded 500-guest wedding dataset
  loginAsDemoUser: (role = 'owner') => {
    const demo = generateWeddingDemoData();
    const roleProfiles: Record<UserRole, { name: string; email: string }> = {
      owner: { name: 'Dr. Ramesh Sharma', email: 'host.sharma@invitedecide.com' },
      event_manager: { name: 'Aakash Verma', email: 'planner@invitedecide.com' },
      checkin_operator: { name: 'Sunil Kumar (Gate Staff)', email: 'gate1@invitedecide.com' },
      vendor: { name: 'Royal Rajputana Caterers', email: 'caterer@invitedecide.com' },
      catering_manager: { name: 'Chef Sanjeev', email: 'catering@invitedecide.com' },
      seating_manager: { name: 'Amit Desai', email: 'seating@invitedecide.com' },
      guest_manager: { name: 'Pooja Mehta', email: 'guests@invitedecide.com' },
      invitation_manager: { name: 'Pooja Mehta', email: 'invitations@invitedecide.com' },
      readonly: { name: 'Observer', email: 'observer@invitedecide.com' },
      admin: { name: 'SaaS Platform Admin', email: 'admin@invitedecide.com' },
    };

    const profile = roleProfiles[role] || roleProfiles.owner;

    set({
      isDemoMode: true,
      userRole: role,
      userName: profile.name,
      userEmail: profile.email,
      activeOrgId: 'org-demo-001',
      activeOrgName: 'Sharma & Verma Royal Wedding Celebrations',
      event: demo.event,
      timeSlots: demo.timeSlots,
      menuCategories: demo.menuCategories,
      menuItems: demo.menuItems,
      invitationDesign: demo.invitationDesign,
      venueLayout: demo.venueLayout,
      guestGroups: demo.guestGroups,
      guests: demo.guests,
      invitations: demo.invitations,
      rsvps: demo.rsvps,
      attendees: demo.attendees,
      qrPasses: demo.qrPasses,
      checkinLogs: demo.checkinLogs,
      whatsappQueue: demo.whatsappQueue,
    });
    saveStateToLocalStorage(get());
  },

  // Log in as a Real User: loads their real workspace (0 fake guests)
  loginAsUser: async (user) => {
    const userWorkspaceKey = `INVITEDECIDE_WORKSPACE_${user.email.toLowerCase()}`;
    let savedWorkspace: any = null;

    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem(userWorkspaceKey);
        if (raw) savedWorkspace = JSON.parse(raw);
      } catch (e) {
        console.warn('Failed to parse user workspace from localStorage:', e);
      }
    }

    // If Supabase is connected and no local workspace yet, check Supabase
    if (!savedWorkspace && isSupabaseConfigured) {
      try {
        const remote = await fetchDataFromSupabase();
        if (remote.success && remote.data) {
          savedWorkspace = remote.data;
        }
      } catch (e) {
        console.warn('Supabase fetch user workspace error:', e);
      }
    }

    // If no existing workspace for this user, create a clean workspace
    if (!savedWorkspace || user.isNewAccount) {
      savedWorkspace = createCleanUserWorkspace({
        email: user.email,
        name: user.name,
        orgName: user.orgName,
        role: user.role,
      });
      // Sync fresh event to Supabase if connected
      syncEventToSupabase(savedWorkspace.event);
    }

    set({
      isDemoMode: false,
      userRole: user.role,
      userEmail: user.email,
      userName: user.name,
      activeOrgId: savedWorkspace.event.organization_id || `org-${Date.now()}`,
      activeOrgName: user.orgName || `${user.name}'s Organization`,
      event: savedWorkspace.event,
      timeSlots: savedWorkspace.timeSlots || [],
      menuCategories: savedWorkspace.menuCategories || [],
      menuItems: savedWorkspace.menuItems || [],
      invitationDesign: savedWorkspace.invitationDesign,
      venueLayout: savedWorkspace.venueLayout,
      guestGroups: savedWorkspace.guestGroups || [],
      guests: savedWorkspace.guests || [],
      invitations: savedWorkspace.invitations || [],
      rsvps: savedWorkspace.rsvps || [],
      attendees: savedWorkspace.attendees || [],
      qrPasses: savedWorkspace.qrPasses || [],
      checkinLogs: savedWorkspace.checkinLogs || [],
      whatsappQueue: savedWorkspace.whatsappQueue || [],
    });

    saveStateToLocalStorage(get());
    if (typeof window !== 'undefined') {
      localStorage.setItem(userWorkspaceKey, JSON.stringify(savedWorkspace));
    }
  },

  logout: () => {
    if (isSupabaseConfigured) {
      supabase.auth.signOut().catch(() => {});
    }
    clearStateFromLocalStorage();
    if (typeof window !== 'undefined') {
      localStorage.removeItem('INVITEDECIDE_LAST_EMAIL');
    }
    set({
      userRole: 'owner',
      userEmail: '',
      userName: '',
      isDemoMode: false,
    });
  },

  // On-demand load 500-guest demo data into the current workspace for testing
  loadDemoDataIntoWorkspace: () => {
    const demo = generateWeddingDemoData();
    set((s) => ({
      isDemoMode: true,
      event: {
        ...demo.event,
        name: `${s.activeOrgName || 'My Event'} (Sample Demo Dataset)`,
      },
      timeSlots: demo.timeSlots,
      menuCategories: demo.menuCategories,
      menuItems: demo.menuItems,
      venueLayout: demo.venueLayout,
      guestGroups: demo.guestGroups,
      guests: demo.guests,
      invitations: demo.invitations,
      rsvps: demo.rsvps,
      attendees: demo.attendees,
      qrPasses: demo.qrPasses,
      checkinLogs: demo.checkinLogs,
      whatsappQueue: demo.whatsappQueue,
    }));
    saveStateToLocalStorage(get());
  },

  // Clear workspace data back to 0 guests
  clearWorkspaceData: () => {
    const s = get();
    const clean = createCleanUserWorkspace({
      email: s.userEmail,
      name: s.userName,
      orgName: s.activeOrgName,
      role: s.userRole,
    });
    set({
      isDemoMode: false,
      event: clean.event,
      timeSlots: clean.timeSlots,
      menuCategories: clean.menuCategories,
      menuItems: clean.menuItems,
      venueLayout: clean.venueLayout,
      invitationDesign: clean.invitationDesign,
      guestGroups: [],
      guests: [],
      invitations: [],
      rsvps: [],
      attendees: [],
      qrPasses: [],
      checkinLogs: [],
      whatsappQueue: [],
    });
    saveStateToLocalStorage(get());
  },

  setSetupWizardOpen: (open: boolean) => {
    set({ isSetupWizardOpen: open });
  },

  populateEventFromUserInput: (formData: EventSetupFormData) => {
    const s = get();
    const generated = generateCompleteEventFromInput(formData, s.activeOrgId);

    set({
      isDemoMode: false,
      isSetupWizardOpen: false,
      activeOrgName: `${formData.eventName} Organization`,
      event: generated.event,
      timeSlots: generated.timeSlots,
      menuCategories: generated.menuCategories,
      menuItems: generated.menuItems,
      venueLayout: generated.venueLayout,
      invitationDesign: generated.invitationDesign,
      guestGroups: generated.guestGroups,
      guests: generated.guests,
      invitations: generated.invitations,
      rsvps: generated.rsvps,
      attendees: generated.attendees,
      qrPasses: generated.qrPasses,
      checkinLogs: generated.checkinLogs,
      whatsappQueue: generated.whatsappQueue,
    });

    saveStateToLocalStorage(get());

    if (s.userEmail && typeof window !== 'undefined') {
      try {
        const userWorkspaceKey = `INVITEDECIDE_WORKSPACE_${s.userEmail.toLowerCase()}`;
        localStorage.setItem(userWorkspaceKey, JSON.stringify(generated));
      } catch (e) {
        console.warn('Failed to save to user workspace localStorage:', e);
      }
    }

    if (isSupabaseConfigured) {
      pushAllDataToSupabase(generated).catch((err) => {
        console.warn('Background Supabase sync error after wizard generation:', err);
      });
    }

    return {
      success: true,
      message: `🎉 Successfully populated event "${formData.eventName}" with invitation, catering, seating, and passes!`,
    };
  },

  updateEventDetails: (details) => {
    set((state) => {
      const updated = { ...state.event, ...details };
      syncEventToSupabase(updated);
      return { event: updated };
    });
    saveStateToLocalStorage(get());
  },

  updateEventSettings: (settings) => {
    set((state) => {
      const updated = {
        ...state.event,
        settings: { ...state.event.settings, ...settings },
      };
      syncEventToSupabase(updated);
      return { event: updated };
    });
    saveStateToLocalStorage(get());
  },

  addGuest: (guestData) => {
    let newGuestCreated: Guest | undefined;
    let newInvitationCreated: Invitation | undefined;

    set((state) => {
      const id = `gst-${Date.now()}`;
      const token = `inv_token_${Math.random().toString(36).substring(2, 12)}`;
      const invCode = `INV-${Math.floor(1000 + Math.random() * 9000)}`;

      const newGuest: Guest = {
        ...guestData,
        id,
        invitation_code: invCode,
        invitation_token: token,
        invitation_status: 'draft',
        created_at: new Date().toISOString(),
      };

      const newInvitation: Invitation = {
        id: `inv-${Date.now()}`,
        event_id: state.event.id,
        guest_id: id,
        token,
        invitation_code: invCode,
        status: 'draft',
        views_count: 0,
        created_at: new Date().toISOString(),
      };

      newGuestCreated = newGuest;
      newInvitationCreated = newInvitation;

      return {
        guests: [newGuest, ...state.guests],
        invitations: [newInvitation, ...state.invitations],
      };
    });

    if (newGuestCreated) {
      syncGuestToSupabase(newGuestCreated, newInvitationCreated);
    }
    saveStateToLocalStorage(get());
  },

  updateGuest: (id, updates) => {
    let updatedGuest: Guest | undefined;
    set((state) => {
      const guests = state.guests.map((g) => {
        if (g.id === id) {
          updatedGuest = { ...g, ...updates };
          return updatedGuest;
        }
        return g;
      });
      return { guests };
    });
    if (updatedGuest) {
      syncGuestToSupabase(updatedGuest);
    }
    saveStateToLocalStorage(get());
  },

  deleteGuest: (id) => {
    set((state) => ({
      guests: state.guests.filter((g) => g.id !== id),
      invitations: state.invitations.filter((inv) => inv.guest_id !== id),
    }));
    syncDeleteGuestFromSupabase(id);
    saveStateToLocalStorage(get());
  },

  importGuestsFromList: (newGuestsList) => {
    const createdGuests: Guest[] = [];
    const createdInvitations: Invitation[] = [];

    set((state) => {
      newGuestsList.forEach((item, idx) => {
        const id = `gst-imp-${Date.now()}-${idx}`;
        const token = `inv_token_${Math.random().toString(36).substring(2, 10)}`;
        const invCode = `INV-${Math.floor(1000 + Math.random() * 9000)}`;

        const guest: Guest = {
          id,
          event_id: state.event.id,
          organization_id: state.activeOrgId,
          full_name: item.full_name || 'Valued Guest',
          family_name: item.family_name || '',
          whatsapp_number: item.whatsapp_number || '+919800000000',
          category: item.category || 'General',
          relationship: item.relationship || 'Guest',
          is_child: Boolean(item.is_child),
          dietary_preference: item.dietary_preference || 'veg',
          is_primary_contact: true,
          invitation_code: invCode,
          invitation_token: token,
          invitation_status: 'draft',
          created_at: new Date().toISOString(),
        };

        const invitation: Invitation = {
          id: `inv-imp-${Date.now()}-${idx}`,
          event_id: state.event.id,
          guest_id: id,
          token,
          invitation_code: invCode,
          status: 'draft',
          views_count: 0,
          created_at: new Date().toISOString(),
        };

        createdGuests.push(guest);
        createdInvitations.push(invitation);
      });

      return {
        guests: [...createdGuests, ...state.guests],
        invitations: [...createdInvitations, ...state.invitations],
      };
    });

    createdGuests.forEach((g, i) => syncGuestToSupabase(g, createdInvitations[i]));
    saveStateToLocalStorage(get());
  },

  updateInvitationDesign: (designUpdates) => {
    set((state) => ({
      invitationDesign: { ...state.invitationDesign, ...designUpdates },
    }));
    saveStateToLocalStorage(get());
  },

  addCanvasElement: (element) => {
    set((state) => ({
      invitationDesign: {
        ...state.invitationDesign,
        elements: [...state.invitationDesign.elements, element],
      },
    }));
    saveStateToLocalStorage(get());
  },

  updateCanvasElement: (id, updates) => {
    set((state) => ({
      invitationDesign: {
        ...state.invitationDesign,
        elements: state.invitationDesign.elements.map((el) =>
          el.id === id ? { ...el, ...updates, style: { ...el.style, ...(updates.style || {}) } } : el
        ),
      },
    }));
    saveStateToLocalStorage(get());
  },

  deleteCanvasElement: (id) => {
    set((state) => ({
      invitationDesign: {
        ...state.invitationDesign,
        elements: state.invitationDesign.elements.filter((el) => el.id !== id),
      },
    }));
    saveStateToLocalStorage(get());
  },

  publishInvitation: () => {
    set((state) => ({
      invitationDesign: { ...state.invitationDesign, is_published: true },
      event: { ...state.event, status: 'published' },
    }));
    saveStateToLocalStorage(get());
  },

  submitRSVP: (invitationToken, rsvpData) => {
    const state = get();
    const invitation = state.invitations.find((i) => i.token === invitationToken);

    if (!invitation) {
      return { success: false, error: 'Invalid invitation link.' };
    }

    const event = state.event;
    const rsvpId = `rsvp-${Date.now()}`;
    const attendeeCount = rsvpData.attendees.length;

    // Check time slot capacity atomically if confirmed
    if (rsvpData.status === 'confirmed' && rsvpData.timeSlotId) {
      const slot = state.timeSlots.find((s) => s.id === rsvpData.timeSlotId);
      if (slot) {
        if (slot.booked_count + attendeeCount > slot.capacity + slot.buffer_capacity) {
          return {
            success: false,
            error: `Slot capacity exceeded. Available capacity: ${(slot.capacity + slot.buffer_capacity) - slot.booked_count}. Please select another slot.`,
          };
        }
      }
    }

    // Create attendees
    const newAttendees: Attendee[] = rsvpData.attendees.map((att, idx) => ({
      id: `att-${Date.now()}-${idx}`,
      rsvp_id: rsvpId,
      event_id: event.id,
      full_name: att.full_name,
      is_child: att.is_child,
      dietary_preference: att.dietary_preference,
      checked_in: false,
      food_selections: att.food_selections?.map((fs) => ({
        attendee_id: `att-${Date.now()}-${idx}`,
        menu_item_id: fs.menu_item_id,
        quantity: fs.quantity,
      })),
    }));

    // Create QR Pass
    const qrPassId = `qr-${Date.now()}`;
    const qrPlaintext = `PASS:${invitation.invitation_code}:${Date.now()}`;
    const qrTokenHash = `sha256_${invitation.token}_${Date.now()}`;
    const newQRPass: QRPass = {
      id: qrPassId,
      event_id: event.id,
      invitation_id: invitation.id,
      rsvp_id: rsvpId,
      pass_type: newAttendees.length > 1 ? 'family' : 'individual',
      family_id: invitation.family_id,
      token_hash: qrTokenHash,
      token_plaintext: qrPlaintext,
      display_code: `QP-${Math.floor(1000 + Math.random() * 9000)}`,
      max_attendees: newAttendees.length,
      checked_in_count: 0,
      is_revoked: false,
      created_at: new Date().toISOString(),
    };

    const newRSVP: RSVP = {
      id: rsvpId,
      event_id: event.id,
      invitation_id: invitation.id,
      status: rsvpData.status,
      total_attendees: attendeeCount,
      adult_count: rsvpData.attendees.filter((a) => !a.is_child).length,
      child_count: rsvpData.attendees.filter((a) => a.is_child).length,
      time_slot_id: rsvpData.timeSlotId,
      dietary_notes: rsvpData.dietary_notes,
      special_requests: rsvpData.special_requests,
      responded_at: new Date().toISOString(),
      attendees: newAttendees,
    };

    set((s) => ({
      rsvps: [newRSVP, ...s.rsvps.filter((r) => r.invitation_id !== invitation.id)],
      attendees: [...newAttendees, ...s.attendees.filter((a) => a.rsvp_id !== rsvpId)],
      qrPasses: rsvpData.status === 'confirmed' ? [newQRPass, ...s.qrPasses] : s.qrPasses,
      invitations: s.invitations.map((inv) =>
        inv.id === invitation.id ? { ...inv, status: 'responded' } : inv
      ),
      timeSlots: s.timeSlots.map((slot) =>
        slot.id === rsvpData.timeSlotId
          ? { ...slot, booked_count: slot.booked_count + attendeeCount }
          : slot
      ),
    }));

    // Persist to Supabase and LocalStorage
    syncRSVPToSupabase(newRSVP, newAttendees, rsvpData.status === 'confirmed' ? newQRPass : undefined);
    saveStateToLocalStorage(get());

    return { success: true, qrPass: newQRPass };
  },

  getCateringCalculations: () => {
    const { menuItems, attendees, event } = get();
    const bufferPct = event.settings.catering_buffer_percentage || 10;

    return menuItems.map((item) => {
      let confirmedQty = 0;
      attendees.forEach((att) => {
        att.food_selections?.forEach((fs) => {
          if (fs.menu_item_id === item.id) {
            confirmedQty += fs.quantity;
          }
        });
      });

      if (confirmedQty === 0 && attendees.length > 0) {
        if (item.is_vegetarian) {
          confirmedQty = Math.floor(attendees.filter((a) => a.dietary_preference !== 'non_veg').length * 0.85);
        } else if (item.is_non_veg) {
          confirmedQty = Math.floor(attendees.filter((a) => a.dietary_preference === 'non_veg').length * 0.9);
        }
      }

      const bufferQty = Math.ceil(confirmedQty * (bufferPct / 100));
      const recommendedQty = confirmedQty + bufferQty;
      const totalCost = recommendedQty * item.unit_cost;

      return {
        id: `cat-calc-${item.id}`,
        event_id: event.id,
        menu_item_id: item.id,
        menu_item: item,
        confirmed_quantity: confirmedQty,
        buffer_percentage: bufferPct,
        buffer_quantity: bufferQty,
        recommended_quantity: recommendedQty,
        unit_cost: item.unit_cost,
        total_estimated_cost: totalCost,
      };
    });
  },

  addMenuItem: (itemData) => {
    let createdItem: MenuItem | undefined;
    set((state) => {
      const newItem: MenuItem = { ...itemData, id: `item-${Date.now()}` };
      createdItem = newItem;
      return { menuItems: [...state.menuItems, newItem] };
    });
    if (createdItem) {
      syncMenuItemToSupabase(createdItem);
    }
    saveStateToLocalStorage(get());
  },

  updateMenuItem: (id, updates) => {
    let updatedItem: MenuItem | undefined;
    set((state) => ({
      menuItems: state.menuItems.map((m) => {
        if (m.id === id) {
          updatedItem = { ...m, ...updates };
          return updatedItem;
        }
        return m;
      }),
    }));
    if (updatedItem) {
      syncMenuItemToSupabase(updatedItem);
    }
    saveStateToLocalStorage(get());
  },

  deleteMenuItem: (id) => {
    set((state) => ({
      menuItems: state.menuItems.filter((m) => m.id !== id),
    }));
    syncDeleteMenuItemFromSupabase(id);
    saveStateToLocalStorage(get());
  },

  updateTablePosition: (tableId, x, y) => {
    set((state) => ({
      venueLayout: {
        ...state.venueLayout,
        tables: state.venueLayout.tables.map((tbl) =>
          tbl.id === tableId ? { ...tbl, x, y } : tbl
        ),
      },
    }));
    saveStateToLocalStorage(get());
  },

  allocateSeat: (seatId, attendeeId) => {
    set((state) => {
      const attendee = state.attendees.find((a) => a.id === attendeeId);
      if (!attendee) return state;

      const updatedTables = state.venueLayout.tables.map((tbl) => ({
        ...tbl,
        seats: tbl.seats.map((seat) => {
          if (seat.id === seatId) {
            return {
              ...seat,
              attendee_id: attendeeId,
              attendee_name: attendee.full_name,
              allocated_attendee_id: attendeeId,
              allocated_attendee_name: attendee.full_name,
              is_occupied: true,
            };
          }
          if (seat.attendee_id === attendeeId || seat.allocated_attendee_id === attendeeId) {
            return {
              ...seat,
              attendee_id: undefined,
              attendee_name: undefined,
              allocated_attendee_id: undefined,
              allocated_attendee_name: undefined,
              is_occupied: false,
            };
          }
          return seat;
        }),
      }));

      const updatedAttendees = state.attendees.map((a) =>
        a.id === attendeeId ? { ...a, seat_id: seatId } : a
      );

      return {
        venueLayout: { ...state.venueLayout, tables: updatedTables },
        attendees: updatedAttendees,
      };
    });
    saveStateToLocalStorage(get());
  },

  unallocateSeat: (seatId) => {
    set((state) => {
      let attendeeIdToRemove: string | undefined;

      const updatedTables = state.venueLayout.tables.map((tbl) => ({
        ...tbl,
        seats: tbl.seats.map((seat) => {
          if (seat.id === seatId) {
            attendeeIdToRemove = seat.attendee_id || seat.allocated_attendee_id;
            return {
              ...seat,
              attendee_id: undefined,
              attendee_name: undefined,
              allocated_attendee_id: undefined,
              allocated_attendee_name: undefined,
              is_occupied: false,
            };
          }
          return seat;
        }),
      }));

      const updatedAttendees = state.attendees.map((a) =>
        a.id === attendeeIdToRemove ? { ...a, seat_id: undefined } : a
      );

      return {
        venueLayout: { ...state.venueLayout, tables: updatedTables },
        attendees: updatedAttendees,
      };
    });
    saveStateToLocalStorage(get());
  },

  runAutoSeatingAllocation: () => {
    const state = get();
    const tables = JSON.parse(JSON.stringify(state.venueLayout.tables)) as VenueTable[];
    const attendees = [...state.attendees];

    const familyGroups: Record<string, Attendee[]> = {};
    attendees.forEach((att) => {
      const groupKey = att.rsvp_id || att.guest_id || 'unassigned';
      if (!familyGroups[groupKey]) familyGroups[groupKey] = [];
      familyGroups[groupKey].push(att);
    });

    let allocated = 0;

    Object.values(familyGroups).forEach((familyMembers) => {
      const unseated = familyMembers.filter((m) => !m.seat_id);
      if (unseated.length === 0) return;

      let targetTable = tables.find((t) => {
        const freeSeats = t.seats.filter((s) => !s.is_occupied && !s.allocated_attendee_id).length;
        return freeSeats >= unseated.length;
      });

      if (!targetTable) {
        targetTable = tables.find((t) => t.seats.some((s) => !s.is_occupied && !s.allocated_attendee_id));
      }

      if (targetTable) {
        unseated.forEach((member) => {
          const emptySeat = targetTable!.seats.find((s) => !s.is_occupied && !s.allocated_attendee_id);
          if (emptySeat) {
            emptySeat.is_occupied = true;
            emptySeat.attendee_id = member.id;
            emptySeat.attendee_name = member.full_name;
            emptySeat.allocated_attendee_id = member.id;
            emptySeat.allocated_attendee_name = member.full_name;
            member.seat_id = emptySeat.id;
            allocated++;
          }
        });
      }
    });

    set({
      venueLayout: { ...state.venueLayout, tables },
      attendees,
    });
    saveStateToLocalStorage(get());

    return {
      allocatedCount: allocated,
      message: `Successfully allocated ${allocated} guests keeping families together.`,
    };
  },

  validateAndCheckIn: (tokenStringOrHash, attendeeId, operatorName) => {
    const state = get();
    const cleanToken = tokenStringOrHash.trim();

    const pass = state.qrPasses.find(
      (p) =>
        p.display_code.toLowerCase() === cleanToken.toLowerCase() ||
        p.token_plaintext === cleanToken ||
        p.token_hash === cleanToken ||
        cleanToken.includes(p.display_code)
    );

    if (!pass) {
      return { success: false, error: 'Unrecognized QR Pass token. Check-in rejected.' };
    }

    if (pass.is_revoked) {
      return { success: false, error: `This pass was revoked: ${pass.revoked_reason || 'Security hold'}` };
    }

    if (pass.checked_in_count >= pass.max_attendees) {
      return {
        success: false,
        error: `All ${pass.max_attendees} guests under this pass have already checked in!`,
        alreadyCheckedIn: true,
      };
    }

    let targetAttendee: Attendee | undefined;
    if (attendeeId) {
      targetAttendee = state.attendees.find((a) => a.id === attendeeId);
      if (targetAttendee && targetAttendee.checked_in) {
        return {
          success: false,
          error: `${targetAttendee.full_name} is already checked in at ${new Date(targetAttendee.checked_in_at!).toLocaleTimeString()}!`,
          alreadyCheckedIn: true,
        };
      }
    } else {
      targetAttendee = state.attendees.find((a) => a.rsvp_id === pass.rsvp_id && !a.checked_in);
    }

    if (!targetAttendee) {
      return { success: false, error: 'No un-checked-in attendees found under this pass.' };
    }

    const timestamp = new Date().toISOString();

    const updatedPass = {
      ...pass,
      checked_in_count: pass.checked_in_count + 1,
    };

    const updatedAttendees = state.attendees.map((a) =>
      a.id === targetAttendee!.id ? { ...a, checked_in: true, checked_in_at: timestamp } : a
    );

    const log: CheckinLog = {
      id: `log-${Date.now()}`,
      event_id: state.event.id,
      qr_pass_id: pass.id,
      attendee_id: targetAttendee.id,
      attendee_name: targetAttendee.full_name,
      function_id: 'fn-04',
      scanned_by: operatorName || 'gate-staff-01',
      scan_type: 'qr_camera',
      status: 'success',
      timestamp,
    };

    set({
      qrPasses: state.qrPasses.map((p) => (p.id === pass.id ? updatedPass : p)),
      attendees: updatedAttendees,
      checkinLogs: [log, ...state.checkinLogs],
    });

    syncCheckinToSupabase(log, targetAttendee.id, pass.id);
    saveStateToLocalStorage(get());

    return {
      success: true,
      pass: updatedPass,
      attendeeName: targetAttendee.full_name,
      isGroupCheckin: false,
    };
  },

  revokeQRPass: (passId, reason) => {
    set((state) => ({
      qrPasses: state.qrPasses.map((p) =>
        p.id === passId
          ? { ...p, is_revoked: true, revoked_at: new Date().toISOString(), revoked_reason: reason }
          : p
      ),
    }));
    saveStateToLocalStorage(get());
  },

  enqueueWhatsAppInvitation: (guestId) => {
    set((state) => {
      const guest = state.guests.find((g) => g.id === guestId);
      if (!guest) return state;

      const url = `${window.location.origin}${window.location.pathname}#/invite/${guest.invitation_token}`;
      const item: WhatsAppMessageQueueItem = {
        id: `wa-q-${Date.now()}`,
        organization_id: state.activeOrgId,
        event_id: state.event.id,
        guest_id: guest.id,
        recipient_name: guest.full_name,
        recipient_phone: guest.whatsapp_number,
        template_name: 'wedding_invitation_v1',
        status: 'queued',
        attempts: 1,
        scheduled_at: new Date().toISOString(),
        invitation_url: url,
      };

      return {
        whatsappQueue: [item, ...state.whatsappQueue],
        guests: state.guests.map((g) => (g.id === guestId ? { ...g, invitation_status: 'sent' } : g)),
      };
    });
    saveStateToLocalStorage(get());
  },

  retryWhatsAppMessage: (messageId) => {
    set((state) => ({
      whatsappQueue: state.whatsappQueue.map((item) =>
        item.id === messageId ? { ...item, status: 'submitted', attempts: item.attempts + 1 } : item
      ),
    }));
    saveStateToLocalStorage(get());
  },

  pushToSupabaseBackend: async () => {
    return await pushAllDataToSupabase(get());
  },

  pullFromSupabaseBackend: async () => {
    const res = await fetchDataFromSupabase(get().event.id);
    if (res.success && res.data) {
      set((s) => ({
        event: res.data.event || s.event,
        guests: res.data.guests?.length > 0 ? res.data.guests : s.guests,
        invitations: res.data.invitations?.length > 0 ? res.data.invitations : s.invitations,
        rsvps: res.data.rsvps?.length > 0 ? res.data.rsvps : s.rsvps,
        attendees: res.data.attendees?.length > 0 ? res.data.attendees : s.attendees,
        menuItems: res.data.menuItems?.length > 0 ? res.data.menuItems : s.menuItems,
        timeSlots: res.data.timeSlots?.length > 0 ? res.data.timeSlots : s.timeSlots,
      }));
      saveStateToLocalStorage(get());
      return { success: true, message: 'Successfully pulled latest records from Supabase.' };
    }
    return { success: false, message: res.message, error: res.error };
  },

  resetDemoData: () => {
    clearStateFromLocalStorage();
    if (typeof window !== 'undefined') {
      localStorage.removeItem('INVITEDECIDE_LAST_EMAIL');
    }
    const fresh = generateWeddingDemoData();
    set({
      isDemoMode: true,
      userRole: 'owner',
      event: fresh.event,
      timeSlots: fresh.timeSlots,
      menuCategories: fresh.menuCategories,
      menuItems: fresh.menuItems,
      invitationDesign: fresh.invitationDesign,
      venueLayout: fresh.venueLayout,
      guestGroups: fresh.guestGroups,
      guests: fresh.guests,
      invitations: fresh.invitations,
      rsvps: fresh.rsvps,
      attendees: fresh.attendees,
      qrPasses: fresh.qrPasses,
      checkinLogs: fresh.checkinLogs,
      whatsappQueue: fresh.whatsappQueue,
    });
    saveStateToLocalStorage(get());
  },
}));

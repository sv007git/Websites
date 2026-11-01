// InviteDecide Comprehensive TypeScript Type Definitions

export type UserRole =
  | 'admin'
  | 'owner'
  | 'event_manager'
  | 'invitation_manager'
  | 'guest_manager'
  | 'catering_manager'
  | 'seating_manager'
  | 'checkin_operator'
  | 'vendor'
  | 'readonly';

export interface UserProfile {
  id: string;
  full_name: string;
  email?: string;
  phone?: string;
  avatar_url?: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  logo_url?: string;
  owner_id: string;
  branding?: {
    primary_color: string;
    accent_color: string;
  };
  subscription_plan: 'free' | 'starter' | 'pro' | 'enterprise';
  created_at: string;
}

export interface EventFunction {
  id: string;
  event_id: string;
  name: string; // e.g. "Mehendi", "Sangeet", "Wedding", "Reception"
  date: string;
  start_time: string;
  end_time: string;
  venue_name: string;
  description?: string;
  dress_code?: string;
}

export interface EventDay {
  id: string;
  event_id: string;
  day_number: number;
  date: string;
  title: string;
  description?: string;
}

export interface EventItem {
  id: string;
  organization_id: string;
  name: string;
  slug: string;
  category: 'wedding' | 'engagement' | 'reception' | 'birthday' | 'anniversary' | 'corporate' | 'religious' | 'other';
  description: string;
  host_names: string;
  cover_image: string;
  logo_url?: string;
  venue_name: string;
  address: string;
  google_maps_link?: string;
  contact_phone: string;
  contact_whatsapp: string;
  start_date: string;
  end_date: string;
  dress_code?: string;
  rsvp_deadline?: string;
  guest_capacity: number;
  status: 'planning' | 'published' | 'live' | 'completed' | 'cancelled';
  functions: EventFunction[];
  settings: {
    allow_family_rsvp: boolean;
    require_food_selection: boolean;
    enable_time_slots: boolean;
    enable_seating: boolean;
    catering_buffer_percentage: number;
    whatsapp_notifications: boolean;
  };
  created_at: string;
}

export interface GuestGroup {
  id: string;
  event_id: string;
  name: string; // e.g. "The Sharma Family"
  code: string;
  total_invited: number;
  internal_notes?: string;
}

export interface Guest {
  id: string;
  event_id: string;
  organization_id: string;
  family_id?: string;
  family_name?: string;
  full_name: string;
  whatsapp_number: string;
  category: 'VIP' | 'Family' | 'Friend' | 'Colleague' | 'Special' | 'General';
  relationship?: string;
  address?: string;
  is_child: boolean;
  dietary_preference: 'veg' | 'non_veg' | 'jain' | 'vegan';
  special_notes?: string;
  internal_notes?: string;
  is_primary_contact: boolean;
  invitation_code?: string;
  invitation_token?: string;
  invitation_status?: 'draft' | 'sent' | 'delivered' | 'opened' | 'responded';
  created_at: string;
}

export interface Invitation {
  id: string;
  event_id: string;
  guest_id?: string;
  family_id?: string;
  token: string;
  invitation_code: string;
  status: 'draft' | 'sent' | 'delivered' | 'opened' | 'responded';
  views_count: number;
  last_viewed_at?: string;
  created_at: string;
}

export interface TimeSlot {
  id: string;
  event_id: string;
  function_id?: string;
  slot_date: string;
  start_time: string;
  end_time: string;
  capacity: number;
  booked_count: number;
  buffer_capacity: number;
  is_active: boolean;
}

export interface RSVP {
  id: string;
  event_id: string;
  invitation_id: string;
  status: 'confirmed' | 'declined' | 'undecided';
  total_attendees: number;
  adult_count: number;
  child_count: number;
  arrival_date?: string;
  time_slot_id?: string;
  dietary_notes?: string;
  special_requests?: string;
  responded_at: string;
  attendees: Attendee[];
}

export interface Attendee {
  id: string;
  rsvp_id: string;
  event_id: string;
  guest_id?: string;
  full_name: string;
  is_child: boolean;
  dietary_preference: 'veg' | 'non_veg' | 'jain' | 'vegan';
  special_needs?: string;
  table_id?: string;
  seat_id?: string;
  checked_in: boolean;
  checked_in_at?: string;
  food_selections?: GuestFoodSelection[];
}

export interface MenuCategory {
  id: string;
  event_id: string;
  function_id?: string;
  name: string;
  display_order: number;
}

export interface MenuItem {
  id: string;
  category_id: string;
  event_id: string;
  name: string;
  description: string;
  image_url?: string;
  is_vegetarian: boolean;
  is_non_veg: boolean;
  is_jain: boolean;
  is_vegan: boolean;
  allergens: string[];
  portion_size: string;
  unit_cost: number;
  preparation_notes?: string;
  is_available: boolean;
}

export interface GuestFoodSelection {
  attendee_id: string;
  menu_item_id: string;
  quantity: number;
  notes?: string;
}

export interface CateringCalculation {
  id: string;
  event_id: string;
  function_id?: string;
  menu_item_id: string;
  menu_item?: MenuItem;
  confirmed_quantity: number;
  buffer_percentage: number;
  buffer_quantity: number;
  recommended_quantity: number;
  unit_cost: number;
  total_estimated_cost: number;
}

export interface VenueLayout {
  id: string;
  event_id: string;
  function_id?: string;
  name: string;
  background_image_url?: string;
  canvas_width: number;
  canvas_height: number;
  tables: VenueTable[];
}

export interface VenueTable {
  id: string;
  layout_id: string;
  name: string;
  shape: 'round' | 'rectangular' | 'square' | 'row';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  capacity: number;
  is_vip: boolean;
  is_reserved: boolean;
  is_accessible: boolean;
  category?: string;
  seats: Seat[];
}

export interface Seat {
  id: string;
  table_id: string;
  seat_number: number;
  label: string;
  is_accessible: boolean;
  allocated_attendee_id?: string;
  allocated_attendee_name?: string;
  attendee_id?: string;
  attendee_name?: string;
  is_occupied?: boolean;
}

export interface QRPass {
  id: string;
  event_id: string;
  invitation_id: string;
  rsvp_id: string;
  pass_type: 'individual' | 'family';
  attendee_id?: string;
  family_id?: string;
  token_hash: string;
  token_plaintext?: string; // Only presented during generation for QR payload
  display_code: string;
  max_attendees: number;
  checked_in_count: number;
  is_revoked: boolean;
  revoked_at?: string;
  revoked_reason?: string;
  created_at: string;
}

export interface CheckinLog {
  id: string;
  event_id: string;
  qr_pass_id?: string;
  attendee_id?: string;
  attendee_name?: string;
  function_id?: string;
  scanned_by?: string;
  scan_type: 'qr_camera' | 'manual_search' | 'override';
  status: 'success' | 'duplicate_scan' | 'invalid_token' | 'revoked_pass' | 'capacity_exceeded';
  failure_reason?: string;
  timestamp: string;
}

export interface WhatsAppMessageQueueItem {
  id: string;
  organization_id: string;
  event_id: string;
  guest_id?: string;
  recipient_name: string;
  recipient_phone: string;
  template_name: string;
  status: 'queued' | 'submitted' | 'sent' | 'delivered' | 'read' | 'failed';
  attempts: number;
  error_message?: string;
  scheduled_at: string;
  sent_at?: string;
  delivered_at?: string;
  read_at?: string;
  invitation_url: string;
}

export interface InvitationCanvasElement {
  id: string;
  type: 'text' | 'image' | 'shape' | 'motif' | 'divider';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  zIndex: number;
  content: string; // text string or image URL
  style: {
    fontFamily?: string;
    fontSize?: number;
    color?: string;
    fontWeight?: string;
    fontStyle?: string;
    textAlign?: 'left' | 'center' | 'right';
    letterSpacing?: number;
    lineHeight?: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    opacity?: number;
  };
}

export interface InvitationDesign {
  id: string;
  event_id: string;
  function_id?: string;
  name: string;
  template_category: 'indian_wedding' | 'south_indian' | 'royal' | 'modern' | 'minimal' | 'luxury';
  canvas_width: number;
  canvas_height: number;
  background_color: string;
  background_image?: string;
  elements: InvitationCanvasElement[];
  is_published: boolean;
}

// Supabase Database Persistence & Synchronization Layer
// Saves events, guests, invitations, RSVPs, menu items, seating, and check-ins
// directly to Supabase PostgreSQL tables, with fallback to persistent localStorage.

import { supabase, isSupabaseConfigured } from './supabase';
import {
  EventItem,
  Guest,
  Invitation,
  RSVP,
  Attendee,
  MenuItem,
  VenueTable,
  QRPass,
  CheckinLog,
  TimeSlot,
  MenuCategory,
} from '@/modules/invitedecide/types';

const LOCAL_STORAGE_KEY = 'INVITEDECIDE_PERSISTED_STATE_V1';

export const saveStateToLocalStorage = (data: any) => {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify({
      userRole: data.userRole,
      userEmail: data.userEmail,
      userName: data.userName,
      activeOrgId: data.activeOrgId,
      activeOrgName: data.activeOrgName,
      isDemoMode: data.isDemoMode ?? false,
      event: data.event,
      timeSlots: data.timeSlots,
      menuCategories: data.menuCategories,
      menuItems: data.menuItems,
      invitationDesign: data.invitationDesign,
      venueLayout: data.venueLayout,
      guestGroups: data.guestGroups,
      guests: data.guests,
      invitations: data.invitations,
      rsvps: data.rsvps,
      attendees: data.attendees,
      qrPasses: data.qrPasses,
      checkinLogs: data.checkinLogs,
      whatsappQueue: data.whatsappQueue,
      _savedAt: new Date().toISOString(),
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, serialized);
  } catch (err) {
    console.warn('Failed to save state to localStorage:', err);
  }
};

export const loadStateFromLocalStorage = (): any | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.event && parsed.event.name) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Failed to load state from localStorage:', err);
  }
  return null;
};

export const clearStateFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
};

// Deterministic UUID converter so string IDs like "evt-001" conform to PostgreSQL UUID type
export const toValidUUID = (str: string): string => {
  if (!str) return '00000000-0000-4000-8000-000000000000';
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str)) {
    return str.toLowerCase();
  }
  let hash1 = 0;
  let hash2 = 0;
  for (let i = 0; i < str.length; i++) {
    hash1 = (hash1 << 5) - hash1 + str.charCodeAt(i);
    hash1 |= 0;
    hash2 = (hash2 << 7) - hash2 + str.charCodeAt(i);
    hash2 |= 0;
  }
  const h1 = Math.abs(hash1).toString(16).padStart(8, '0');
  const h2 = Math.abs(hash2).toString(16).padStart(8, '0');
  const h3 = Math.abs(hash1 ^ hash2).toString(16).padStart(8, '0');
  const h4 = Math.abs((hash1 * 31) ^ hash2).toString(16).padStart(8, '0');
  const raw = (h1 + h2 + h3 + h4).slice(0, 32);
  return `${raw.slice(0, 8)}-${raw.slice(8, 12)}-4${raw.slice(13, 16)}-a${raw.slice(17, 20)}-${raw.slice(20, 32)}`.toLowerCase();
};

// 1. Persist Event to Supabase
export const syncEventToSupabase = async (event: EventItem) => {
  if (!isSupabaseConfigured) return;
  try {
    const payload = {
      id: toValidUUID(event.id),
      organization_id: toValidUUID(event.organization_id),
      name: event.name,
      slug: event.slug,
      category: event.category || 'wedding',
      description: event.description || '',
      host_names: event.host_names || '',
      cover_image: event.cover_image || '',
      venue_name: event.venue_name || '',
      address: event.address || '',
      google_maps_link: event.google_maps_link || '',
      contact_phone: event.contact_phone || '',
      contact_whatsapp: event.contact_whatsapp || '',
      start_date: event.start_date,
      end_date: event.end_date,
      dress_code: event.dress_code || '',
      guest_capacity: event.guest_capacity || 500,
      status: event.status || 'planning',
      settings: event.settings || {},
      updated_at: new Date().toISOString(),
    };
    await supabase.from('events').upsert(payload);
  } catch (err) {
    console.warn('Supabase sync event error:', err);
  }
};

// 2. Persist Guest & Invitation to Supabase
export const syncGuestToSupabase = async (guest: Guest, invitation?: Invitation) => {
  if (!isSupabaseConfigured) return;
  try {
    await supabase.from('guests').upsert({
      id: toValidUUID(guest.id),
      event_id: toValidUUID(guest.event_id),
      organization_id: toValidUUID(guest.organization_id),
      family_id: guest.family_id ? toValidUUID(guest.family_id) : null,
      full_name: guest.full_name,
      family_name: guest.family_name || '',
      whatsapp_number: guest.whatsapp_number,
      category: guest.category || 'General',
      relationship: guest.relationship || 'Guest',
      is_child: Boolean(guest.is_child),
      dietary_preference: guest.dietary_preference || 'veg',
      is_primary_contact: Boolean(guest.is_primary_contact),
      updated_at: new Date().toISOString(),
    });

    if (invitation) {
      await supabase.from('invitations').upsert({
        id: toValidUUID(invitation.id),
        event_id: toValidUUID(guest.event_id),
        guest_id: toValidUUID(guest.id),
        token: invitation.token,
        invitation_code: invitation.invitation_code,
        status: invitation.status || 'draft',
        views_count: invitation.views_count || 0,
        updated_at: new Date().toISOString(),
      });
    }
  } catch (err) {
    console.warn('Supabase sync guest error:', err);
  }
};

// 3. Delete Guest from Supabase
export const syncDeleteGuestFromSupabase = async (guestId: string) => {
  if (!isSupabaseConfigured) return;
  try {
    const uuid = toValidUUID(guestId);
    await supabase.from('invitations').delete().eq('guest_id', uuid);
    await supabase.from('guests').delete().eq('id', uuid);
  } catch (err) {
    console.warn('Supabase delete guest error:', err);
  }
};

// 4. Persist RSVP, Attendees, & QR Pass to Supabase
export const syncRSVPToSupabase = async (
  rsvp: RSVP,
  attendees: Attendee[],
  qrPass?: QRPass
) => {
  if (!isSupabaseConfigured) return;
  try {
    const rsvpUuid = toValidUUID(rsvp.id);
    const eventUuid = toValidUUID(rsvp.event_id);
    const invitationUuid = toValidUUID(rsvp.invitation_id);

    await supabase.from('rsvps').upsert({
      id: rsvpUuid,
      event_id: eventUuid,
      invitation_id: invitationUuid,
      status: rsvp.status,
      total_attendees: rsvp.total_attendees,
      adult_count: rsvp.adult_count,
      child_count: rsvp.child_count,
      time_slot_id: rsvp.time_slot_id ? toValidUUID(rsvp.time_slot_id) : null,
      dietary_notes: rsvp.dietary_notes || '',
      special_requests: rsvp.special_requests || '',
      responded_at: rsvp.responded_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    if (attendees.length > 0) {
      const attendeesData = attendees.map((att) => ({
        id: toValidUUID(att.id),
        rsvp_id: rsvpUuid,
        event_id: eventUuid,
        full_name: att.full_name,
        is_child: Boolean(att.is_child),
        dietary_preference: att.dietary_preference || 'veg',
        checked_in: Boolean(att.checked_in),
        checked_in_at: att.checked_in_at || null,
      }));
      await supabase.from('attendees').upsert(attendeesData);
    }

    if (qrPass) {
      await supabase.from('qr_passes').upsert({
        id: toValidUUID(qrPass.id),
        event_id: eventUuid,
        invitation_id: invitationUuid,
        rsvp_id: rsvpUuid,
        pass_type: qrPass.pass_type || 'individual',
        token_hash: qrPass.token_hash,
        display_code: qrPass.display_code,
        max_attendees: qrPass.max_attendees,
        checked_in_count: qrPass.checked_in_count || 0,
        is_revoked: Boolean(qrPass.is_revoked),
      });
    }

    if (rsvp.time_slot_id) {
      const slotUuid = toValidUUID(rsvp.time_slot_id);
      const { data: slot } = await supabase
        .from('time_slots')
        .select('booked_count')
        .eq('id', slotUuid)
        .single();
      if (slot) {
        await supabase
          .from('time_slots')
          .update({ booked_count: (slot.booked_count || 0) + rsvp.total_attendees })
          .eq('id', slotUuid);
      }
    }
  } catch (err) {
    console.warn('Supabase sync RSVP error:', err);
  }
};

// 5. Persist Gate Check-in to Supabase
export const syncCheckinToSupabase = async (
  log: CheckinLog,
  attendeeId: string,
  qrPassId?: string
) => {
  if (!isSupabaseConfigured) return;
  try {
    const logUuid = toValidUUID(log.id);
    const eventUuid = toValidUUID(log.event_id);
    const passUuid = qrPassId ? toValidUUID(qrPassId) : null;
    const attUuid = toValidUUID(attendeeId);

    await supabase.from('checkin_logs').insert({
      id: logUuid,
      event_id: eventUuid,
      qr_pass_id: passUuid,
      attendee_id: attUuid,
      scanned_by: log.scanned_by,
      scan_type: log.scan_type || 'qr_scan',
      status: log.status || 'success',
      created_at: log.timestamp,
    });

    await supabase
      .from('attendees')
      .update({ checked_in: true, checked_in_at: log.timestamp })
      .eq('id', attUuid);

    if (passUuid) {
      const { data: pass } = await supabase
        .from('qr_passes')
        .select('checked_in_count')
        .eq('id', passUuid)
        .single();
      if (pass) {
        await supabase
          .from('qr_passes')
          .update({ checked_in_count: (pass.checked_in_count || 0) + 1 })
          .eq('id', passUuid);
      }
    }
  } catch (err) {
    console.warn('Supabase sync checkin error:', err);
  }
};

// 6. Persist Menu Items to Supabase
export const syncMenuItemToSupabase = async (item: MenuItem) => {
  if (!isSupabaseConfigured) return;
  try {
    await supabase.from('menu_items').upsert({
      id: toValidUUID(item.id),
      category_id: toValidUUID(item.category_id),
      event_id: toValidUUID(item.event_id),
      name: item.name,
      description: item.description || '',
      is_vegetarian: Boolean(item.is_vegetarian),
      is_non_veg: Boolean(item.is_non_veg),
      is_jain: Boolean(item.is_jain),
      portion_size: item.portion_size || '1 portion',
      unit_cost: item.unit_cost || 0,
      is_available: item.is_available !== false,
    });
  } catch (err) {
    console.warn('Supabase sync menu item error:', err);
  }
};

export const syncDeleteMenuItemFromSupabase = async (itemId: string) => {
  if (!isSupabaseConfigured) return;
  try {
    await supabase.from('menu_items').delete().eq('id', toValidUUID(itemId));
  } catch (err) {
    console.warn('Supabase delete menu item error:', err);
  }
};

// Helper to batch upsert records in chunks
async function batchUpsert(tableName: string, records: any[], chunkSize = 40) {
  for (let i = 0; i < records.length; i += chunkSize) {
    const chunk = records.slice(i, i + chunkSize);
    const { error } = await supabase.from(tableName).upsert(chunk);
    if (error) {
      console.warn(`Batch upsert error on ${tableName} (offset ${i}):`, error.message);
    }
  }
}

// 7. Push ALL in-memory/demo data to live Supabase PostgreSQL tables
export const pushAllDataToSupabase = async (
  state: any
): Promise<{ success: boolean; message: string; syncedCount: number; error?: string }> => {
  if (!isSupabaseConfigured) {
    return {
      success: false,
      syncedCount: 0,
      message: 'Supabase Anon Key is not configured. Please enter your credentials in Settings.',
    };
  }

  try {
    const eventUuid = toValidUUID(state.event.id);
    const orgUuid = toValidUUID(state.activeOrgId);

    // Upsert Organization
    await supabase.from('organizations').upsert({
      id: orgUuid,
      name: state.activeOrgName || 'Sharma & Verma Celebrations',
      slug: 'org-sharma-verma',
      branding: { primary_color: '#e11d48', accent_color: '#d9a744' },
      updated_at: new Date().toISOString(),
    });

    // Upsert Event
    await supabase.from('events').upsert({
      id: eventUuid,
      organization_id: orgUuid,
      name: state.event.name,
      slug: state.event.slug,
      category: state.event.category,
      description: state.event.description,
      host_names: state.event.host_names,
      cover_image: state.event.cover_image,
      venue_name: state.event.venue_name,
      address: state.event.address,
      google_maps_link: state.event.google_maps_link,
      contact_phone: state.event.contact_phone,
      contact_whatsapp: state.event.contact_whatsapp,
      start_date: state.event.start_date,
      end_date: state.event.end_date,
      dress_code: state.event.dress_code,
      guest_capacity: state.event.guest_capacity,
      status: state.event.status,
      settings: state.event.settings,
      updated_at: new Date().toISOString(),
    });

    // Upsert Functions
    if (state.event.functions && state.event.functions.length > 0) {
      const fns = state.event.functions.map((fn: any) => ({
        id: toValidUUID(fn.id),
        event_id: eventUuid,
        name: fn.name,
        date: fn.date,
        start_time: fn.start_time,
        end_time: fn.end_time,
        venue_name: fn.venue_name,
        dress_code: fn.dress_code || '',
        order_index: fn.order_index || 1,
      }));
      await supabase.from('event_functions').upsert(fns);
    }

    // Upsert Time Slots
    if (state.timeSlots && state.timeSlots.length > 0) {
      const slots = state.timeSlots.map((ts: any) => ({
        id: toValidUUID(ts.id),
        event_id: eventUuid,
        function_id: ts.function_id ? toValidUUID(ts.function_id) : null,
        slot_date: ts.slot_date,
        start_time: ts.start_time,
        end_time: ts.end_time,
        capacity: ts.capacity,
        booked_count: ts.booked_count,
        buffer_capacity: ts.buffer_capacity,
        is_active: ts.is_active !== false,
      }));
      await supabase.from('time_slots').upsert(slots);
    }

    // Upsert Menu Categories
    if (state.menuCategories && state.menuCategories.length > 0) {
      const cats = state.menuCategories.map((c: any) => ({
        id: toValidUUID(c.id),
        event_id: eventUuid,
        name: c.name,
        order_index: c.order_index || 1,
      }));
      await supabase.from('menu_categories').upsert(cats);
    }

    // Upsert Menu Items
    if (state.menuItems && state.menuItems.length > 0) {
      const items = state.menuItems.map((m: any) => ({
        id: toValidUUID(m.id),
        category_id: toValidUUID(m.category_id),
        event_id: eventUuid,
        name: m.name,
        description: m.description || '',
        is_vegetarian: Boolean(m.is_vegetarian),
        is_non_veg: Boolean(m.is_non_veg),
        is_jain: Boolean(m.is_jain),
        portion_size: m.portion_size,
        unit_cost: m.unit_cost,
        is_available: m.is_available !== false,
      }));
      await supabase.from('menu_items').upsert(items);
    }

    // Upsert Guest Groups / Families
    if (state.guestGroups && state.guestGroups.length > 0) {
      const groups = state.guestGroups.map((g: any) => ({
        id: toValidUUID(g.id),
        event_id: eventUuid,
        name: g.name,
        code: g.code,
        total_invited: g.total_invited || 2,
      }));
      await supabase.from('guest_groups').upsert(groups);
    }

    // Upsert Guests in Batches
    if (state.guests && state.guests.length > 0) {
      const guestRows = state.guests.map((g: any) => ({
        id: toValidUUID(g.id),
        event_id: eventUuid,
        organization_id: orgUuid,
        family_id: g.family_id ? toValidUUID(g.family_id) : null,
        full_name: g.full_name,
        family_name: g.family_name || '',
        whatsapp_number: g.whatsapp_number,
        category: g.category || 'General',
        relationship: g.relationship || 'Guest',
        is_child: Boolean(g.is_child),
        dietary_preference: g.dietary_preference || 'veg',
        is_primary_contact: Boolean(g.is_primary_contact),
        updated_at: new Date().toISOString(),
      }));
      await batchUpsert('guests', guestRows, 50);
    }

    // Upsert Invitations in Batches
    if (state.invitations && state.invitations.length > 0) {
      const invRows = state.invitations.map((i: any) => ({
        id: toValidUUID(i.id),
        event_id: eventUuid,
        guest_id: toValidUUID(i.guest_id),
        token: i.token,
        invitation_code: i.invitation_code,
        status: i.status || 'draft',
        views_count: i.views_count || 0,
        updated_at: new Date().toISOString(),
      }));
      await batchUpsert('invitations', invRows, 50);
    }

    // Upsert RSVPs in Batches
    if (state.rsvps && state.rsvps.length > 0) {
      const rsvpRows = state.rsvps.map((r: any) => ({
        id: toValidUUID(r.id),
        event_id: eventUuid,
        invitation_id: toValidUUID(r.invitation_id),
        status: r.status,
        total_attendees: r.total_attendees,
        adult_count: r.adult_count,
        child_count: r.child_count,
        time_slot_id: r.time_slot_id ? toValidUUID(r.time_slot_id) : null,
        dietary_notes: r.dietary_notes || '',
        special_requests: r.special_requests || '',
        responded_at: r.responded_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }));
      await batchUpsert('rsvps', rsvpRows, 50);
    }

    // Upsert Attendees in Batches
    if (state.attendees && state.attendees.length > 0) {
      const attRows = state.attendees.map((a: any) => ({
        id: toValidUUID(a.id),
        rsvp_id: toValidUUID(a.rsvp_id),
        event_id: eventUuid,
        full_name: a.full_name,
        is_child: Boolean(a.is_child),
        dietary_preference: a.dietary_preference || 'veg',
        checked_in: Boolean(a.checked_in),
        checked_in_at: a.checked_in_at || null,
      }));
      await batchUpsert('attendees', attRows, 50);
    }

    // Upsert QR Passes in Batches
    if (state.qrPasses && state.qrPasses.length > 0) {
      const passRows = state.qrPasses.map((p: any) => ({
        id: toValidUUID(p.id),
        event_id: eventUuid,
        invitation_id: toValidUUID(p.invitation_id),
        rsvp_id: toValidUUID(p.rsvp_id),
        pass_type: p.pass_type || 'individual',
        token_hash: p.token_hash,
        display_code: p.display_code,
        max_attendees: p.max_attendees,
        checked_in_count: p.checked_in_count || 0,
        is_revoked: Boolean(p.is_revoked),
      }));
      await batchUpsert('qr_passes', passRows, 50);
    }

    const totalSynced =
      1 +
      (state.guests?.length || 0) +
      (state.invitations?.length || 0) +
      (state.rsvps?.length || 0) +
      (state.attendees?.length || 0) +
      (state.menuItems?.length || 0);

    return {
      success: true,
      syncedCount: totalSynced,
      message: `Successfully synchronized ${totalSynced.toLocaleString()} records directly with Supabase PostgreSQL!`,
    };
  } catch (err: any) {
    console.error('pushAllDataToSupabase error:', err);
    return {
      success: false,
      syncedCount: 0,
      message: 'Failed to synchronize with Supabase PostgreSQL.',
      error: err?.message || String(err),
    };
  }
};

// 8. Fetch remote data from Supabase
export const fetchDataFromSupabase = async (
  eventId?: string
): Promise<{
  success: boolean;
  data?: any;
  message: string;
  error?: string;
}> => {
  if (!isSupabaseConfigured) {
    return { success: false, message: 'Supabase is not configured.' };
  }

  try {
    const { data: events, error: eventErr } = await supabase
      .from('events')
      .select('*')
      .limit(1);

    if (eventErr) throw eventErr;
    if (!events || events.length === 0) {
      return { success: false, message: 'No events found in Supabase database.' };
    }

    const ev = events[0];
    const evUuid = ev.id;

    const [
      { data: guests },
      { data: invitations },
      { data: rsvps },
      { data: attendees },
      { data: menuItems },
      { data: timeSlots },
    ] = await Promise.all([
      supabase.from('guests').select('*').eq('event_id', evUuid),
      supabase.from('invitations').select('*').eq('event_id', evUuid),
      supabase.from('rsvps').select('*').eq('event_id', evUuid),
      supabase.from('attendees').select('*').eq('event_id', evUuid),
      supabase.from('menu_items').select('*').eq('event_id', evUuid),
      supabase.from('time_slots').select('*').eq('event_id', evUuid),
    ]);

    return {
      success: true,
      message: 'Remote Supabase data fetched successfully.',
      data: {
        event: ev,
        guests: guests || [],
        invitations: invitations || [],
        rsvps: rsvps || [],
        attendees: attendees || [],
        menuItems: menuItems || [],
        timeSlots: timeSlots || [],
      },
    };
  } catch (err: any) {
    console.warn('fetchDataFromSupabase error:', err);
    return {
      success: false,
      message: 'Failed to fetch data from Supabase.',
      error: err?.message || String(err),
    };
  }
};

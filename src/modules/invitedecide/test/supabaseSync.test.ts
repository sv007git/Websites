import { describe, it, expect, beforeEach } from 'vitest';
import {
  toValidUUID,
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
  clearStateFromLocalStorage,
} from '@/modules/invitedecide/services/supabaseSync';
import { useAppStore, createCleanUserWorkspace } from '@/modules/invitedecide/stores/useAppStore';

describe('Supabase Persistence and Sync Layer', () => {
  beforeEach(() => {
    clearStateFromLocalStorage();
  });

  it('generates valid UUIDs from arbitrary string IDs for PostgreSQL compliance', () => {
    const eventId = 'evt-sharma-wedding-2026';
    const uuid1 = toValidUUID(eventId);
    const uuid2 = toValidUUID(eventId);

    // Must match PostgreSQL UUID standard regex
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    expect(uuid1).toMatch(uuidRegex);
    // Deterministic: same input must yield exact same UUID
    expect(uuid1).toBe(uuid2);

    // Pre-existing valid UUID should be returned unchanged
    const valid = '12345678-1234-4234-8234-123456789abc';
    expect(toValidUUID(valid)).toBe(valid);
  });

  it('persists and hydrates store state to and from localStorage', () => {
    const store = useAppStore.getState();
    expect(store.event.name).toBeDefined();

    saveStateToLocalStorage(store);
    const loaded = loadStateFromLocalStorage();

    expect(loaded).not.toBeNull();
    expect(loaded.event.name).toBe(store.event.name);
    expect(loaded.guests.length).toBe(store.guests.length);
  });

  it('creates a clean workspace with 0 fake guests when a new account is registered', async () => {
    const store = useAppStore.getState();
    await store.loginAsUser({
      email: 'newuser@celebrations.com',
      name: 'Vikas Gupta',
      role: 'owner',
      orgName: 'Gupta Family Weddings',
      isNewAccount: true,
    });

    const updated = useAppStore.getState();
    expect(updated.isDemoMode).toBe(false);
    expect(updated.userEmail).toBe('newuser@celebrations.com');
    expect(updated.userName).toBe('Vikas Gupta');
    expect(updated.activeOrgName).toBe('Gupta Family Weddings');
    // Crucial requirement: No fake demo guests shown for real account
    expect(updated.guests.length).toBe(0);
    expect(updated.invitations.length).toBe(0);
    expect(updated.rsvps.length).toBe(0);
    expect(updated.event.name).toContain('Gupta');
  });

  it('updates dashboard role dynamically when switching in dropdown', () => {
    const store = useAppStore.getState();

    store.setUserRole('checkin_operator');
    expect(useAppStore.getState().userRole).toBe('checkin_operator');

    store.setUserRole('vendor');
    expect(useAppStore.getState().userRole).toBe('vendor');

    store.setUserRole('seating_manager');
    expect(useAppStore.getState().userRole).toBe('seating_manager');

    store.setUserRole('owner');
    expect(useAppStore.getState().userRole).toBe('owner');
  });

  it('can load 500-guest demo dataset on demand and clear back to empty', () => {
    const store = useAppStore.getState();

    store.loadDemoDataIntoWorkspace();
    const demoLoaded = useAppStore.getState();
    expect(demoLoaded.isDemoMode).toBe(true);
    expect(demoLoaded.guests.length).toBeGreaterThanOrEqual(100);

    store.clearWorkspaceData();
    const cleanState = useAppStore.getState();
    expect(cleanState.isDemoMode).toBe(false);
    expect(cleanState.guests.length).toBe(0);
  });
});

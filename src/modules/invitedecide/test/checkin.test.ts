import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from '@/modules/invitedecide/stores/useAppStore';

describe('Gate Check-in & Security Engine', () => {
  beforeEach(() => {
    useAppStore.getState().resetDemoData();
  });

  it('validates authentic QR pass and marks attendance atomically', () => {
    const store = useAppStore.getState();
    // Find a pass with un-checked-in members
    const pass = store.qrPasses.find((p) => p.checked_in_count < p.max_attendees);
    expect(pass).toBeDefined();

    const initialCheckedIn = pass!.checked_in_count;
    const res = store.validateAndCheckIn(pass!.display_code, undefined, 'Gate Staff Test');

    expect(res.success).toBe(true);
    expect(res.pass?.checked_in_count).toBe(initialCheckedIn + 1);
  });

  it('rejects duplicate check-in when all members of the pass have checked in', () => {
    const store = useAppStore.getState();
    const pass = store.qrPasses[0];

    // Force pass to maximum capacity
    pass.checked_in_count = pass.max_attendees;

    const res = store.validateAndCheckIn(pass.display_code, undefined, 'Gate Staff Test');
    expect(res.success).toBe(false);
    expect(res.alreadyCheckedIn).toBe(true);
  });

  it('rejects revoked QR pass with clear audit reason', () => {
    const store = useAppStore.getState();
    const pass = store.qrPasses[1];

    store.revokeQRPass(pass.id, 'Pass reported lost');

    const res = store.validateAndCheckIn(pass.display_code, undefined, 'Gate Staff Test');
    expect(res.success).toBe(false);
    expect(res.error).toContain('revoked');
  });
});

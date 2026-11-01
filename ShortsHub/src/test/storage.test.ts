import { describe, it, expect, beforeEach } from 'vitest';
import {
  db,
  recordViewedShort,
  getViewedShortsByDate,
  getTodayDateString,
  toggleFavorite,
  isFavorite,
  savePreferences,
  getPreferences,
  exportAllDataAsJson,
  importAllDataFromJson,
} from '../services/storage/db';
import { VideoItem } from '../types';

describe('ShortsHub IndexedDB Persistence & Duplicate Management', () => {
  beforeEach(async () => {
    await db.viewedShorts.clear();
    await db.favorites.clear();
    await db.preferences.clear();
  });

  const testVideo: VideoItem = {
    id: 'test-1',
    platform: 'youtube',
    videoId: 'abc123xyz',
    title: 'Test Tamil Short',
    language: 'Tamil',
    category: 'Education',
    subcategory: 'Science',
    tags: ['tamil', 'science'],
    duration: 45,
    thumbnail: 'https://i.ytimg.com/vi/abc123xyz/hqdefault.jpg',
    channelName: 'Test Channel',
    isFamilyFriendly: true,
    isApproved: true,
  };

  it('records viewed short in daily playlist', async () => {
    await recordViewedShort(testVideo, 40, true);
    const today = getTodayDateString();
    const records = await getViewedShortsByDate(today);

    expect(records.length).toBe(1);
    expect(records[0].videoId).toBe('abc123xyz');
    expect(records[0].language).toBe('Tamil');
    expect(records[0].viewCount).toBe(1);
    expect(records[0].originalUrl).toBe('https://www.youtube.com/shorts/abc123xyz');
  });

  it('handles duplicate views by incrementing viewCount and updating lastViewedAt', async () => {
    await recordViewedShort(testVideo, 30, false);
    const today = getTodayDateString();

    let records = await getViewedShortsByDate(today);
    expect(records.length).toBe(1);
    expect(records[0].viewCount).toBe(1);
    const firstTimestamp = records[0].firstViewedAt;

    // View again
    await new Promise(r => setTimeout(r, 50));
    await recordViewedShort(testVideo, 45, true);

    records = await getViewedShortsByDate(today);
    expect(records.length).toBe(1); // One entry preserved
    expect(records[0].viewCount).toBe(2);
    expect(records[0].firstViewedAt).toBe(firstTimestamp);
    expect(records[0].completed).toBe(true);
  });

  it('toggles favorites correctly', async () => {
    expect(await isFavorite('abc123xyz')).toBe(false);

    const added = await toggleFavorite('abc123xyz');
    expect(added).toBe(true);
    expect(await isFavorite('abc123xyz')).toBe(true);

    const removed = await toggleFavorite('abc123xyz');
    expect(removed).toBe(false);
    expect(await isFavorite('abc123xyz')).toBe(false);
  });

  it('saves and restores user preferences', async () => {
    await savePreferences({
      selectedLanguages: ['Tamil', 'Telugu'],
      selectedCategories: ['Education', 'Family'],
      dailyReminderEnabled: true,
      reminderTime: '20:30',
      separateViewSessions: false,
      theme: 'dark',
      autoPlayNext: true,
      audioMutedByDefault: false,
      hasCompletedOnboarding: true,
    });

    const prefs = await getPreferences();
    expect(prefs.selectedLanguages).toEqual(['Tamil', 'Telugu']);
    expect(prefs.reminderTime).toBe('20:30');
    expect(prefs.hasCompletedOnboarding).toBe(true);
  });

  it('exports and imports complete JSON backup', async () => {
    await recordViewedShort(testVideo, 45, true);
    await toggleFavorite('abc123xyz');

    const backupJson = await exportAllDataAsJson();
    expect(backupJson).toContain('ShortsHub');
    expect(backupJson).toContain('abc123xyz');

    // Clear db
    await db.viewedShorts.clear();
    await db.favorites.clear();

    const today = getTodayDateString();
    expect((await getViewedShortsByDate(today)).length).toBe(0);

    // Import
    const res = await importAllDataFromJson(backupJson);
    expect(res.success).toBe(true);

    const restoredRecords = await getViewedShortsByDate(today);
    expect(restoredRecords.length).toBe(1);
    expect(restoredRecords[0].videoId).toBe('abc123xyz');
    expect(await isFavorite('abc123xyz')).toBe(true);
  });
});

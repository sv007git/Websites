import Dexie, { Table } from 'dexie';
import { ViewedShortRecord, UserPreferences, CustomPlaylist, VideoItem } from '../../types';

export class ShortsHubDatabase extends Dexie {
  viewedShorts!: Table<ViewedShortRecord, number>;
  favorites!: Table<{ videoId: string; addedAt: number }, string>;
  customPlaylists!: Table<CustomPlaylist, string>;
  preferences!: Table<{ key: string; value: any }, string>;
  customVideos!: Table<VideoItem, string>;

  constructor() {
    super('ShortsHubDB');
    this.version(1).stores({
      viewedShorts: '++id, videoId, dateViewed, lastViewedAt, language, category, [dateViewed+videoId]',
      favorites: 'videoId, addedAt',
      customPlaylists: 'id, title, updatedAt',
      preferences: 'key',
      customVideos: 'id, videoId, language, category, isApproved'
    });
  }
}

export const db = new ShortsHubDatabase();

export const DEFAULT_PREFERENCES: UserPreferences = {
  selectedLanguages: ['Tamil', 'English', 'Telugu'],
  selectedCategories: ['Education', 'Fun and Entertainment', 'Family', 'Friends and Lifestyle'],
  dailyReminderEnabled: false,
  reminderTime: '21:00',
  separateViewSessions: false,
  theme: 'dark',
  autoPlayNext: true,
  audioMutedByDefault: false,
  hasCompletedOnboarding: false,
};

// Storage helper functions
export async function getPreferences(): Promise<UserPreferences> {
  try {
    const record = await db.preferences.get('user_prefs');
    if (record && record.value) {
      return { ...DEFAULT_PREFERENCES, ...record.value };
    }
  } catch (e) {
    console.error('Error loading preferences from IndexedDB:', e);
  }
  
  // Fallback to localStorage if IndexedDB had an issue
  try {
    const local = localStorage.getItem('shortshub_user_prefs');
    if (local) {
      return { ...DEFAULT_PREFERENCES, ...JSON.parse(local) };
    }
  } catch (e) {
    // ignore
  }

  return DEFAULT_PREFERENCES;
}

export async function savePreferences(prefs: UserPreferences): Promise<void> {
  try {
    await db.preferences.put({ key: 'user_prefs', value: prefs });
  } catch (e) {
    console.error('Error saving preferences to IndexedDB:', e);
  }
  try {
    localStorage.setItem('shortshub_user_prefs', JSON.stringify(prefs));
  } catch (e) {
    // ignore
  }
}

export function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getCurrentTimeString(): string {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * Record a successfully played Short in the Daily Viewed database
 */
export async function recordViewedShort(
  video: VideoItem,
  watchDurationSeconds: number = 0,
  completed: boolean = false
): Promise<void> {
  const today = getTodayDateString();
  const currentTime = getCurrentTimeString();
  const now = Date.now();
  const prefs = await getPreferences();

  try {
    if (!prefs.separateViewSessions) {
      // Find existing entry for today + videoId
      const existing = await db.viewedShorts
        .where(['dateViewed', 'videoId'])
        .equals([today, video.videoId])
        .first();

      if (existing && existing.id) {
        await db.viewedShorts.update(existing.id, {
          lastViewedAt: now,
          timeViewed: currentTime,
          viewCount: (existing.viewCount || 1) + 1,
          watchDurationSeconds: Math.max(existing.watchDurationSeconds || 0, watchDurationSeconds),
          completed: existing.completed || completed,
        });
        return;
      }
    }

    // Add new record
    const record: ViewedShortRecord = {
      videoId: video.videoId,
      originalUrl: `https://www.youtube.com/shorts/${video.videoId}`,
      title: video.title,
      thumbnailUrl: video.thumbnail || `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
      channelName: video.channelName,
      language: video.language,
      category: video.category,
      subcategory: video.subcategory,
      dateViewed: today,
      timeViewed: currentTime,
      firstViewedAt: now,
      lastViewedAt: now,
      watchDurationSeconds,
      completed,
      viewCount: 1,
    };

    await db.viewedShorts.add(record);
  } catch (error) {
    console.error('Failed to record viewed short:', error);
  }
}

/**
 * Get distinct dates with viewed Shorts
 */
export async function getViewedDates(): Promise<string[]> {
  try {
    const dates = await db.viewedShorts.orderBy('dateViewed').uniqueKeys();
    return (dates as string[]).reverse();
  } catch (e) {
    console.error('Error fetching viewed dates:', e);
    return [];
  }
}

/**
 * Get all viewed shorts for a specific date
 */
export async function getViewedShortsByDate(date: string): Promise<ViewedShortRecord[]> {
  try {
    return await db.viewedShorts
      .where('dateViewed')
      .equals(date)
      .reverse()
      .sortBy('lastViewedAt');
  } catch (e) {
    console.error(`Error fetching shorts for date ${date}:`, e);
    return [];
  }
}

/**
 * Favorites helper
 */
export async function toggleFavorite(videoId: string): Promise<boolean> {
  const existing = await db.favorites.get(videoId);
  if (existing) {
    await db.favorites.delete(videoId);
    return false;
  } else {
    await db.favorites.put({ videoId, addedAt: Date.now() });
    return true;
  }
}

export async function isFavorite(videoId: string): Promise<boolean> {
  const existing = await db.favorites.get(videoId);
  return !!existing;
}

export async function getAllFavorites(): Promise<string[]> {
  const records = await db.favorites.orderBy('addedAt').reverse().toArray();
  return records.map(r => r.videoId);
}

/**
 * Export and Import full database backup
 */
export async function exportAllDataAsJson(): Promise<string> {
  const viewedShorts = await db.viewedShorts.toArray();
  const favorites = await db.favorites.toArray();
  const customPlaylists = await db.customPlaylists.toArray();
  const preferences = await db.preferences.toArray();
  const customVideos = await db.customVideos.toArray();

  const backup = {
    app: 'ShortsHub',
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    data: {
      viewedShorts,
      favorites,
      customPlaylists,
      preferences,
      customVideos
    }
  };

  return JSON.stringify(backup, null, 2);
}

export async function importAllDataFromJson(jsonString: string): Promise<{ success: boolean; message: string }> {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || parsed.app !== 'ShortsHub' || !parsed.data) {
      return { success: false, message: 'Invalid ShortsHub backup file.' };
    }

    const { viewedShorts, favorites, customPlaylists, preferences, customVideos } = parsed.data;

    await db.transaction('rw', [db.viewedShorts, db.favorites, db.customPlaylists, db.preferences, db.customVideos], async () => {
      if (Array.isArray(viewedShorts) && viewedShorts.length > 0) {
        await db.viewedShorts.bulkPut(viewedShorts);
      }
      if (Array.isArray(favorites) && favorites.length > 0) {
        await db.favorites.bulkPut(favorites);
      }
      if (Array.isArray(customPlaylists) && customPlaylists.length > 0) {
        await db.customPlaylists.bulkPut(customPlaylists);
      }
      if (Array.isArray(preferences) && preferences.length > 0) {
        await db.preferences.bulkPut(preferences);
      }
      if (Array.isArray(customVideos) && customVideos.length > 0) {
        await db.customVideos.bulkPut(customVideos);
      }
    });

    return { success: true, message: 'Data imported successfully!' };
  } catch (err: any) {
    return { success: false, message: err?.message || 'Failed to parse JSON backup.' };
  }
}

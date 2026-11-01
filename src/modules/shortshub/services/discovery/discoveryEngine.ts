import curatedVideosData from '../../database/curated-videos.json';
import { db, getPreferences } from '../storage/db';
import { VideoItem, ContentLanguage, MainCategory } from '../../types';

export class DiscoveryEngine {
  private static cache: VideoItem[] | null = null;

  /**
   * Loads all curated + custom videos
   */
  static async getAllVideos(): Promise<VideoItem[]> {
    if (this.cache) return this.cache;

    const baseVideos = curatedVideosData as VideoItem[];
    try {
      const customVideos = await db.customVideos.toArray();
      const combined = [...baseVideos, ...customVideos];
      
      // Strict sanity filter: Approved only, Valid language only, Valid categories only (NO Games/Tech)
      const allowedCategories: MainCategory[] = [
        'Education',
        'Fun and Entertainment',
        'Family',
        'Friends and Lifestyle'
      ];
      const allowedLanguages: ContentLanguage[] = ['Tamil', 'English', 'Telugu'];

      const sanitized = combined.filter(v => 
        v.isApproved &&
        allowedLanguages.includes(v.language) &&
        allowedCategories.includes(v.category) &&
        !v.category.toLowerCase().includes('game') &&
        !v.category.toLowerCase().includes('tech')
      );

      this.cache = sanitized;
      return sanitized;
    } catch (e) {
      console.warn('Could not read custom videos from IndexedDB, using base curated videos:', e);
      this.cache = baseVideos;
      return baseVideos;
    }
  }

  static clearCache(): void {
    this.cache = null;
  }

  /**
   * Filter videos based on active user preferences
   */
  static async getFilteredVideos(
    preferredLanguages?: ContentLanguage[],
    preferredCategories?: MainCategory[]
  ): Promise<VideoItem[]> {
    const all = await this.getAllVideos();
    const prefs = await getPreferences();

    const activeLangs = preferredLanguages || prefs.selectedLanguages;
    const activeCats = preferredCategories || prefs.selectedCategories;

    return all.filter(video => 
      activeLangs.includes(video.language) &&
      activeCats.includes(video.category)
    );
  }

  /**
   * Search videos by keyword, category, language, and sorting
   */
  static async searchVideos(query: {
    keyword?: string;
    languages?: ContentLanguage[];
    categories?: MainCategory[];
    subcategories?: string[];
    sortBy?: 'recent' | 'views' | 'alpha' | 'duration';
  }): Promise<VideoItem[]> {
    const all = await this.getAllVideos();
    const prefs = await getPreferences();
    const activeLangs = query.languages && query.languages.length > 0 ? query.languages : prefs.selectedLanguages;
    const activeCats = query.categories && query.categories.length > 0 ? query.categories : prefs.selectedCategories;

    let results = all.filter(video => 
      activeLangs.includes(video.language) &&
      activeCats.includes(video.category)
    );

    if (query.subcategories && query.subcategories.length > 0) {
      results = results.filter(v => query.subcategories?.includes(v.subcategory));
    }

    if (query.keyword && query.keyword.trim().length > 0) {
      const kw = query.keyword.trim().toLowerCase();
      results = results.filter(v => {
        const titleMatch = v.title.toLowerCase().includes(kw);
        const nativeTitleMatch = v.titleNative ? v.titleNative.toLowerCase().includes(kw) : false;
        const channelMatch = v.channelName.toLowerCase().includes(kw);
        const catMatch = v.category.toLowerCase().includes(kw);
        const subMatch = v.subcategory.toLowerCase().includes(kw);
        const tagMatch = v.tags.some(t => t.toLowerCase().includes(kw));

        return titleMatch || nativeTitleMatch || channelMatch || catMatch || subMatch || tagMatch;
      });
    }

    // Sorting
    switch (query.sortBy) {
      case 'alpha':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'duration':
        results.sort((a, b) => (b.duration || 0) - (a.duration || 0));
        break;
      case 'views':
        results.sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0));
        break;
      case 'recent':
      default:
        // Keep order or sort by ID
        break;
    }

    return results;
  }

  /**
   * Generates a personalized "For You" feed
   */
  static async getForYouRecommendations(limit: number = 20): Promise<VideoItem[]> {
    const all = await this.getFilteredVideos();
    if (all.length === 0) return [];

    try {
      // Fetch recent watch history to weight categories
      const recentHistory = await db.viewedShorts.orderBy('lastViewedAt').reverse().limit(30).toArray();
      const favoriteIds = new Set((await db.favorites.toArray()).map(f => f.videoId));

      const categoryWeights: Record<string, number> = {};
      const languageWeights: Record<string, number> = {};

      for (const item of recentHistory) {
        categoryWeights[item.category] = (categoryWeights[item.category] || 1) + 1;
        languageWeights[item.language] = (languageWeights[item.language] || 1) + 1;
      }

      // Score each video
      const scored = all.map(video => {
        let score = Math.random() * 5; // Base exploration jitter
        if (categoryWeights[video.category]) {
          score += categoryWeights[video.category] * 2;
        }
        if (languageWeights[video.language]) {
          score += languageWeights[video.language] * 2;
        }
        if (favoriteIds.has(video.videoId)) {
          score += 5; // User loved this creator/video
        }
        return { video, score };
      });

      scored.sort((a, b) => b.score - a.score);
      return scored.slice(0, limit).map(s => s.video);
    } catch (e) {
      // Fallback: shuffle
      return [...all].sort(() => Math.random() - 0.5).slice(0, limit);
    }
  }
}

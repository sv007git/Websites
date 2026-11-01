import { describe, it, expect, beforeEach } from 'vitest';
import { DiscoveryEngine } from '../services/discovery/discoveryEngine';
import { savePreferences, DEFAULT_PREFERENCES } from '../services/storage/db';

describe('Discovery Engine & Content Filtering', () => {
  beforeEach(async () => {
    DiscoveryEngine.clearCache();
    await savePreferences(DEFAULT_PREFERENCES);
  });

  it('contains curated videos only in Tamil, English, and Telugu', async () => {
    const all = await DiscoveryEngine.getAllVideos();
    expect(all.length).toBeGreaterThan(0);

    for (const v of all) {
      expect(['Tamil', 'English', 'Telugu']).toContain(v.language);
    }
  });

  it('strictly contains NO Games and NO Technology categories', async () => {
    const all = await DiscoveryEngine.getAllVideos();
    const allowedCategories = [
      'Education',
      'Fun and Entertainment',
      'Family',
      'Friends and Lifestyle'
    ];

    for (const v of all) {
      expect(allowedCategories).toContain(v.category);
      expect(v.category.toLowerCase()).not.toContain('game');
      expect(v.category.toLowerCase()).not.toContain('tech');
    }
  });

  it('filters videos by selected language preference', async () => {
    // Only Tamil
    const tamilOnly = await DiscoveryEngine.getFilteredVideos(['Tamil'], undefined);
    expect(tamilOnly.length).toBeGreaterThan(0);
    for (const v of tamilOnly) {
      expect(v.language).toBe('Tamil');
    }

    // Only Telugu
    const teluguOnly = await DiscoveryEngine.getFilteredVideos(['Telugu'], undefined);
    expect(teluguOnly.length).toBeGreaterThan(0);
    for (const v of teluguOnly) {
      expect(v.language).toBe('Telugu');
    }

    // Tamil + English
    const multi = await DiscoveryEngine.getFilteredVideos(['Tamil', 'English'], undefined);
    for (const v of multi) {
      expect(['Tamil', 'English']).toContain(v.language);
      expect(v.language).not.toBe('Telugu');
    }
  });

  it('searches videos by keyword', async () => {
    const results = await DiscoveryEngine.searchVideos({
      keyword: 'science',
      languages: ['Tamil', 'English', 'Telugu'],
    });

    expect(results.length).toBeGreaterThan(0);
    for (const v of results) {
      const match =
        v.title.toLowerCase().includes('science') ||
        v.subcategory.toLowerCase().includes('science') ||
        v.tags.some(t => t.toLowerCase().includes('science'));
      expect(match).toBe(true);
    }
  });
});

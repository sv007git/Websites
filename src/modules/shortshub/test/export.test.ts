import { describe, it, expect, vi } from 'vitest';
import {
  generateTxtExport,
  generateM3uExport,
  generateCsvExport,
  generateJsonExport,
  shareUrls,
} from '../services/sharing/exportService';
import { ViewedShortRecord } from '../types';

describe('SnapTube Export & Sharing Service', () => {
  const mockVideos: ViewedShortRecord[] = [
    {
      id: 1,
      videoId: 'vid123',
      originalUrl: 'https://www.youtube.com/shorts/vid123',
      title: 'Science Experiment Tamil',
      thumbnailUrl: 'https://i.ytimg.com/vi/vid123/hqdefault.jpg',
      channelName: 'Science Lab',
      language: 'Tamil',
      category: 'Education',
      subcategory: 'Educational Experiments',
      dateViewed: '2026-11-01',
      timeViewed: '10:30:00',
      firstViewedAt: 1730437200000,
      lastViewedAt: 1730437200000,
      watchDurationSeconds: 48,
      completed: true,
      viewCount: 1,
    },
    {
      id: 2,
      videoId: 'vid456',
      originalUrl: 'https://www.youtube.com/shorts/vid456',
      title: 'Funny Dog Reacts Telugu',
      thumbnailUrl: 'https://i.ytimg.com/vi/vid456/hqdefault.jpg',
      channelName: 'Funny Pets',
      language: 'Telugu',
      category: 'Fun and Entertainment',
      subcategory: 'Comedy',
      dateViewed: '2026-11-01',
      timeViewed: '11:15:00',
      firstViewedAt: 1730439900000,
      lastViewedAt: 1730439900000,
      watchDurationSeconds: 35,
      completed: true,
      viewCount: 2,
    },
  ];

  it('generates TXT export with one URL per line for SnapTube', () => {
    const txt = generateTxtExport(mockVideos);
    const lines = txt.split('\n');
    expect(lines.length).toBe(2);
    expect(lines[0]).toBe('https://www.youtube.com/shorts/vid123');
    expect(lines[1]).toBe('https://www.youtube.com/shorts/vid456');
  });

  it('generates M3U playlist export', () => {
    const m3u = generateM3uExport(mockVideos);
    expect(m3u).toContain('#EXTM3U');
    expect(m3u).toContain('#EXTINF:-1,Science Experiment Tamil - Science Lab');
    expect(m3u).toContain('https://www.youtube.com/shorts/vid123');
    expect(m3u).toContain('https://www.youtube.com/shorts/vid456');
  });

  it('generates CSV export with headers and correct values', () => {
    const csv = generateCsvExport(mockVideos);
    const lines = csv.split('\n');
    expect(lines[0]).toContain('Date,Time,Title,Language,Category');
    expect(lines[1]).toContain('"2026-11-01"');
    expect(lines[1]).toContain('"Science Experiment Tamil"');
    expect(lines[1]).toContain('"Tamil"');
    expect(lines[2]).toContain('"Telugu"');
  });

  it('generates valid JSON export with metadata', () => {
    const jsonStr = generateJsonExport(mockVideos, '2026-11-01');
    const parsed = JSON.parse(jsonStr);
    expect(parsed.source).toBe('ShortsHub');
    expect(parsed.date).toBe('2026-11-01');
    expect(parsed.totalVideos).toBe(2);
    expect(parsed.videos[0].videoId).toBe('vid123');
    expect(parsed.videos[1].language).toBe('Telugu');
  });

  it('handles clipboard copy when navigator.share is unavailable', async () => {
    const originalClipboard = navigator.clipboard;
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: { writeText: writeTextMock },
    });

    const result = await shareUrls(['https://www.youtube.com/shorts/abc']);
    expect(result.success).toBe(true);
    expect(result.method).toBe('clipboard');
    expect(writeTextMock).toHaveBeenCalledWith('https://www.youtube.com/shorts/abc');

    Object.assign(navigator, { clipboard: originalClipboard });
  });
});

import { ViewedShortRecord } from '../../types';

/**
 * Generates plain text export with one video URL per line
 */
export function generateTxtExport(videos: ViewedShortRecord[]): string {
  return videos.map(v => v.originalUrl).join('\n');
}

/**
 * Generates standard M3U playlist format
 */
export function generateM3uExport(videos: ViewedShortRecord[]): string {
  const lines = ['#EXTM3U'];
  for (const v of videos) {
    const cleanTitle = (v.title || 'YouTube Short').replace(/[\r\n]/g, ' ');
    lines.push(`#EXTINF:-1,${cleanTitle} - ${v.channelName || 'YouTube'}`);
    lines.push(v.originalUrl);
  }
  return lines.join('\n');
}

/**
 * Generates CSV export with header
 */
export function generateCsvExport(videos: ViewedShortRecord[]): string {
  const headers = ['Date', 'Time', 'Title', 'Language', 'Category', 'Subcategory', 'Channel', 'Video URL', 'Duration(s)', 'View Count'];
  const rows = videos.map(v => [
    `"${v.dateViewed}"`,
    `"${v.timeViewed}"`,
    `"${(v.title || '').replace(/"/g, '""')}"`,
    `"${v.language}"`,
    `"${v.category}"`,
    `"${v.subcategory || ''}"`,
    `"${(v.channelName || '').replace(/"/g, '""')}"`,
    `"${v.originalUrl}"`,
    v.watchDurationSeconds || 0,
    v.viewCount || 1
  ]);

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

/**
 * Generates structured JSON export
 */
export function generateJsonExport(videos: ViewedShortRecord[], dateStr: string): string {
  const exportPayload = {
    source: 'ShortsHub',
    date: dateStr,
    totalVideos: videos.length,
    exportedAt: new Date().toISOString(),
    videos: videos.map(v => ({
      videoId: v.videoId,
      originalUrl: v.originalUrl,
      title: v.title,
      channelName: v.channelName,
      language: v.language,
      category: v.category,
      subcategory: v.subcategory,
      dateViewed: v.dateViewed,
      timeViewed: v.timeViewed,
      watchDurationSeconds: v.watchDurationSeconds,
      completed: v.completed,
      viewCount: v.viewCount,
      thumbnailUrl: v.thumbnailUrl
    }))
  };

  return JSON.stringify(exportPayload, null, 2);
}

/**
 * Triggers a client-side file download
 */
export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Shares via navigator.share if available or falls back to clipboard
 */
export async function shareUrls(
  urls: string[],
  title: string = "Today's ShortsHub Playlist"
): Promise<{ success: boolean; method: 'share' | 'clipboard' }> {
  const shareText = urls.join('\n');

  if (navigator.share && navigator.canShare && navigator.canShare({ text: shareText })) {
    try {
      await navigator.share({
        title,
        text: shareText
      });
      return { success: true, method: 'share' };
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return { success: false, method: 'share' };
      }
      // Fallback to clipboard if share threw
    }
  }

  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(shareText);
    return { success: true, method: 'clipboard' };
  } catch (err) {
    // Legacy fallback
    const textarea = document.createElement('textarea');
    textarea.value = shareText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return { success: true, method: 'clipboard' };
  }
}

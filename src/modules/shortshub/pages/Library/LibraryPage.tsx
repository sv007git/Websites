import React, { useState, useEffect } from 'react';
import { VideoItem, UserPreferences, CustomPlaylist } from '../../types';
import {
  db,
  getPreferences,
  savePreferences,
  getAllFavorites,
  exportAllDataAsJson,
  importAllDataFromJson,
  DEFAULT_PREFERENCES,
} from '../../services/storage/db';
import { DiscoveryEngine } from '../../services/discovery/discoveryEngine';
import { VideoCard } from '../../components/VideoCard/VideoCard';
import {
  Heart,
  ListPlus,
  History,
  Bell,
  Download,
  Upload,
  RotateCcw,
  Trash2,
  Check,
  AlertCircle,
  Sparkles,
  Smartphone,
  Info,
  ChevronRight,
  Plus,
  Play
} from 'lucide-react';

interface LibraryPageProps {
  onPlayVideo: (video: VideoItem, playlist: VideoItem[]) => void;
  deferredPrompt?: any;
  onInstallApp?: () => void;
}

export const LibraryPage: React.FC<LibraryPageProps> = ({
  onPlayVideo,
  deferredPrompt,
  onInstallApp,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'favorites' | 'playlists' | 'history' | 'settings'>('favorites');
  const [favoriteVideos, setFavoriteVideos] = useState<VideoItem[]>([]);
  const [historyVideos, setHistoryVideos] = useState<VideoItem[]>([]);
  const [customPlaylists, setCustomPlaylists] = useState<CustomPlaylist[]>([]);
  const [prefs, setPrefs] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [newPlaylistTitle, setNewPlaylistTitle] = useState('');
  const [showNewPlaylistModal, setShowNewPlaylistModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 2500);
  };

  const loadData = async () => {
    try {
      const userPrefs = await getPreferences();
      setPrefs(userPrefs);

      const allVideos = await DiscoveryEngine.getAllVideos();
      const videoMap = new Map<string, VideoItem>();
      allVideos.forEach(v => videoMap.set(v.videoId, v));

      // Favorites
      const favIds = await getAllFavorites();
      const favs: VideoItem[] = [];
      favIds.forEach(id => {
        const v = videoMap.get(id);
        if (v) favs.push(v);
      });
      setFavoriteVideos(favs);

      // Playlists
      const playlists = await db.customPlaylists.toArray();
      setCustomPlaylists(playlists);

      // History
      const hist = await db.viewedShorts.orderBy('lastViewedAt').reverse().limit(50).toArray();
      const histVideos: VideoItem[] = hist.map(h => ({
        id: h.videoId,
        platform: 'youtube',
        videoId: h.videoId,
        title: h.title,
        language: h.language,
        category: h.category,
        subcategory: h.subcategory,
        tags: [],
        duration: h.watchDurationSeconds || 50,
        thumbnail: h.thumbnailUrl,
        channelName: h.channelName,
        isFamilyFriendly: true,
        isApproved: true,
      }));
      setHistoryVideos(histVideos);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadData();
  }, [activeSubTab]);

  const handleUpdatePrefs = async (newPrefs: Partial<UserPreferences>) => {
    const updated = { ...prefs, ...newPrefs };
    setPrefs(updated);
    await savePreferences(updated);
    showToast('Settings updated');
  };

  const handleRequestNotification = async () => {
    if (!('Notification' in window)) {
      showToast('Notifications are not supported in this browser.');
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      await handleUpdatePrefs({ dailyReminderEnabled: true });
      new Notification('ShortsHub Reminder Active', {
        body: `Daily watchlist reminder set for ${prefs.reminderTime}. Review and download with SnapTube!`,
        icon: 'icons/icon-192.png'
      });
      showToast('Notification permission granted!');
    } else {
      showToast('Notification permission was not granted.');
    }
  };

  const handleCreatePlaylist = async () => {
    if (!newPlaylistTitle.trim()) return;
    const newPl: CustomPlaylist = {
      id: `pl-${Date.now()}`,
      title: newPlaylistTitle.trim(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      videoIds: []
    };
    await db.customPlaylists.put(newPl);
    setNewPlaylistTitle('');
    setShowNewPlaylistModal(false);
    await loadData();
    showToast('Playlist created!');
  };

  const handleDeletePlaylist = async (id: string) => {
    if (window.confirm('Delete this playlist?')) {
      await db.customPlaylists.delete(id);
      await loadData();
      showToast('Playlist deleted');
    }
  };

  const handleBackupExport = async () => {
    const json = await exportAllDataAsJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ShortsHub_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Full backup exported!');
  };

  const handleBackupImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const res = await importAllDataFromJson(event.target?.result as string);
      showToast(res.message);
      if (res.success) {
        await loadData();
      }
    };
    reader.readAsText(file);
  };

  const handleResetHistory = async () => {
    if (window.confirm('Clear all viewing history across all dates?')) {
      await db.viewedShorts.clear();
      await loadData();
      showToast('Watch history cleared');
    }
  };

  const handleResetRecommendations = async () => {
    await db.viewedShorts.clear();
    showToast('Recommendation profile reset to default!');
  };

  return (
    <div className="min-h-screen pb-24 text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-dark-900/95 text-white text-xs font-semibold rounded-full border border-slate-700 shadow-2xl backdrop-blur-md animate-fade-in flex items-center gap-2">
          <Sparkles size={14} className="text-brand-400" />
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 bg-dark-950/90 backdrop-blur-xl border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-md mx-auto">
          <h1 className="text-base font-bold tracking-tight">Library & Settings</h1>
          <p className="text-xs text-slate-400">Manage favorites, custom playlists, and preferences</p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4 space-y-4">
        {/* Sub-navigation Tabs */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-dark-900 border border-slate-800/90 rounded-2xl text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('favorites')}
            className={`py-2 rounded-xl transition-all ${
              activeSubTab === 'favorites' ? 'bg-brand-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveSubTab('playlists')}
            className={`py-2 rounded-xl transition-all ${
              activeSubTab === 'playlists' ? 'bg-brand-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Playlists
          </button>
          <button
            onClick={() => setActiveSubTab('history')}
            className={`py-2 rounded-xl transition-all ${
              activeSubTab === 'history' ? 'bg-brand-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            History
          </button>
          <button
            onClick={() => setActiveSubTab('settings')}
            className={`py-2 rounded-xl transition-all ${
              activeSubTab === 'settings' ? 'bg-brand-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Settings
          </button>
        </div>

        {/* Tab 1: Favorites */}
        {activeSubTab === 'favorites' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-300">
                Favorite Shorts ({favoriteVideos.length})
              </span>
              {favoriteVideos.length > 0 && (
                <button
                  onClick={() => onPlayVideo(favoriteVideos[0], favoriteVideos)}
                  className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
                >
                  <Play size={12} className="fill-brand-400" /> Play All
                </button>
              )}
            </div>

            {favoriteVideos.length === 0 ? (
              <div className="p-8 text-center bg-dark-900 border border-slate-800 rounded-3xl">
                <Heart size={28} className="text-slate-600 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white">No Favorites Yet</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Double tap any video while watching to add it to your favorites.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {favoriteVideos.map(video => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onPlay={v => onPlayVideo(v, favoriteVideos)}
                    onFavoriteChanged={loadData}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Custom Playlists */}
        {activeSubTab === 'playlists' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-300">
                Custom Collections ({customPlaylists.length})
              </span>
              <button
                onClick={() => setShowNewPlaylistModal(true)}
                className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1 bg-brand-500/10 px-2.5 py-1 rounded-xl border border-brand-500/20"
              >
                <Plus size={14} /> New Playlist
              </button>
            </div>

            {/* Create Playlist Modal */}
            {showNewPlaylistModal && (
              <div className="p-4 bg-dark-900 border border-brand-500/30 rounded-2xl space-y-3">
                <h3 className="text-xs font-bold text-white">Create New Playlist</h3>
                <input
                  type="text"
                  placeholder="e.g. My Learning Shorts or Tamil Comedy"
                  value={newPlaylistTitle}
                  onChange={e => setNewPlaylistTitle(e.target.value)}
                  className="w-full bg-dark-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowNewPlaylistModal(false)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs text-slate-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreatePlaylist}
                    className="px-3 py-1.5 rounded-xl bg-brand-500 font-bold text-xs text-white"
                  >
                    Create
                  </button>
                </div>
              </div>
            )}

            {customPlaylists.length === 0 ? (
              <div className="p-8 text-center bg-dark-900 border border-slate-800 rounded-3xl">
                <ListPlus size={28} className="text-slate-600 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white">No Custom Playlists</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Organize your favorite Tamil, English, and Telugu Shorts into custom lists.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {customPlaylists.map(pl => (
                  <div
                    key={pl.id}
                    className="p-3 bg-dark-900 border border-slate-800 rounded-2xl flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white">{pl.title}</h4>
                      <span className="text-[10px] text-slate-400">
                        {pl.videoIds.length} videos • Created {new Date(pl.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeletePlaylist(pl.id)}
                      className="p-2 text-slate-400 hover:text-rose-400"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: History */}
        {activeSubTab === 'history' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-300">
                Recent Watch History ({historyVideos.length})
              </span>
              {historyVideos.length > 0 && (
                <button
                  onClick={handleResetHistory}
                  className="text-xs text-rose-400 hover:text-rose-300 font-medium"
                >
                  Clear All
                </button>
              )}
            </div>

            {historyVideos.length === 0 ? (
              <div className="p-8 text-center bg-dark-900 border border-slate-800 rounded-3xl">
                <History size={28} className="text-slate-600 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-white">No Watch History</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Videos you watch will appear here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {historyVideos.slice(0, 20).map(video => (
                  <VideoCard
                    key={`hist-${video.id}`}
                    video={video}
                    onPlay={v => onPlayVideo(v, historyVideos)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Settings & Backup */}
        {activeSubTab === 'settings' && (
          <div className="space-y-4">
            {/* PWA Install Promotion */}
            {deferredPrompt && (
              <div className="p-4 bg-gradient-to-r from-brand-600/30 to-rose-600/20 border border-brand-500/40 rounded-3xl flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Smartphone size={16} className="text-brand-400" />
                    Install ShortsHub PWA
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Add to home screen for fullscreen mobile experience
                  </p>
                </div>
                <button
                  onClick={onInstallApp}
                  className="px-3 py-1.5 bg-brand-500 text-white rounded-xl text-xs font-bold shadow-md shadow-brand-500/30"
                >
                  Install
                </button>
              </div>
            )}

            {/* Daily Reminder Setting */}
            <div className="p-4 bg-dark-900 border border-slate-800 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Bell size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Daily SnapTube Reminder</h3>
                    <p className="text-[10px] text-slate-400">
                      Alerts you to review and download today's playlist
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={prefs.dailyReminderEnabled}
                    onChange={e => {
                      if (e.target.checked) {
                        handleRequestNotification();
                      } else {
                        handleUpdatePrefs({ dailyReminderEnabled: false });
                      }
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-dark-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-500"></div>
                </label>
              </div>

              {prefs.dailyReminderEnabled && (
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Reminder Time:</span>
                  <input
                    type="time"
                    value={prefs.reminderTime}
                    onChange={e => handleUpdatePrefs({ reminderTime: e.target.value })}
                    className="bg-dark-950 border border-slate-700 rounded-lg px-2 py-1 text-white text-xs font-mono"
                  />
                </div>
              )}

              <p className="text-[10px] text-slate-400 leading-tight">
                * Note: In web browsers, notifications are delivered when the browser or app tab is open or running in the background.
              </p>
            </div>

            {/* Playback & Duplicate Behavior */}
            <div className="p-4 bg-dark-900 border border-slate-800 rounded-3xl space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Playback & Tracking
              </h3>

              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-white font-medium block">Record Separate Sessions</span>
                  <span className="text-[10px] text-slate-400">
                    If off, re-watching updates the view count on existing daily entry
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.separateViewSessions}
                  onChange={e => handleUpdatePrefs({ separateViewSessions: e.target.checked })}
                  className="rounded border-slate-700 text-brand-500 focus:ring-0"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                <div>
                  <span className="text-white font-medium block">Auto-Play Next Short</span>
                  <span className="text-[10px] text-slate-400">
                    Continuously advance when a video finishes
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.autoPlayNext}
                  onChange={e => handleUpdatePrefs({ autoPlayNext: e.target.checked })}
                  className="rounded border-slate-700 text-brand-500 focus:ring-0"
                />
              </div>
            </div>

            {/* Backup & Restore */}
            <div className="p-4 bg-dark-900 border border-slate-800 rounded-3xl space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Data Backup & Restore
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                All watch records, favorites, and playlists are stored directly inside IndexedDB on this device. No account or cloud server is required.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handleBackupExport}
                  className="py-2.5 px-3 bg-dark-850 hover:bg-dark-800 border border-slate-700 text-xs font-semibold text-slate-200 rounded-xl flex items-center justify-center gap-1.5 transition"
                >
                  <Download size={14} className="text-brand-400" />
                  Export Backup
                </button>

                <label className="py-2.5 px-3 bg-dark-850 hover:bg-dark-800 border border-slate-700 text-xs font-semibold text-slate-200 rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer">
                  <Upload size={14} className="text-blue-400" />
                  Restore Backup
                  <input type="file" accept=".json" onChange={handleBackupImport} className="hidden" />
                </label>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={handleResetRecommendations}
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
                >
                  <RotateCcw size={13} />
                  Reset Recommendations
                </button>

                <button
                  onClick={handleResetHistory}
                  className="text-xs text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1"
                >
                  <Trash2 size={13} />
                  Clear All History
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

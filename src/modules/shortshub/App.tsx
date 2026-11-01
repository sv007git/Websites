import React, { useState, useEffect, useCallback } from 'react';
import { VideoItem, ContentLanguage, MainCategory, UserPreferences } from './types';
import {
  db,
  getPreferences,
  savePreferences,
  getTodayDateString,
  DEFAULT_PREFERENCES,
} from './services/storage/db';
import { BottomNavigation, TabType } from './components/BottomNavigation/BottomNavigation';
import { LanguageModal } from './components/LanguageSelector/LanguageModal';
import { ContentEditorModal } from './components/ContentEditor/ContentEditorModal';
import { ShortsPlayer } from './components/ShortsPlayer/ShortsPlayer';
import { HomePage } from './pages/Home/HomePage';
import { ExplorePage } from './pages/Explore/ExplorePage';
import { CategoriesPage } from './pages/Categories/CategoriesPage';
import { DailyWatchlistPage } from './pages/DailyWatchlist/DailyWatchlistPage';
import { LibraryPage } from './pages/Library/LibraryPage';
import { WifiOff } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isContentEditorOpen, setIsContentEditorOpen] = useState(false);
  const [todayWatchedCount, setTodayWatchedCount] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Shorts Player State
  const [activePlayerVideo, setActivePlayerVideo] = useState<VideoItem | null>(null);
  const [activePlayerPlaylist, setActivePlayerPlaylist] = useState<VideoItem[]>([]);
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);

  // Category navigation state
  const [exploreInitialCategory, setExploreInitialCategory] = useState<MainCategory | undefined>(undefined);

  // PWA Install prompt
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // Refresh today's count
  const refreshTodayCount = useCallback(async () => {
    try {
      const today = getTodayDateString();
      const count = await db.viewedShorts.where('dateViewed').equals(today).count();
      setTodayWatchedCount(count);
    } catch (e) {
      // ignore
    }
  }, []);

  // Initialize Preferences & Onboarding
  useEffect(() => {
    const init = async () => {
      const prefs = await getPreferences();
      setPreferences(prefs);
      if (!prefs.hasCompletedOnboarding) {
        setIsFirstLaunch(true);
        setIsLanguageModalOpen(true);
      }
      await refreshTodayCount();
    };
    init();
  }, [refreshTodayCount]);

  // Online / Offline tracking
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // PWA beforeinstallprompt
  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
      });
    }
  };

  const handleSaveLanguages = async (languages: ContentLanguage[]) => {
    const updated: UserPreferences = {
      ...preferences,
      selectedLanguages: languages,
      hasCompletedOnboarding: true,
    };
    setPreferences(updated);
    await savePreferences(updated);
    setIsLanguageModalOpen(false);
    setIsFirstLaunch(false);
  };

  const handlePlayVideo = (video: VideoItem, playlist: VideoItem[]) => {
    const index = playlist.findIndex(v => v.videoId === video.videoId);
    setActivePlayerVideo(video);
    setActivePlayerPlaylist(playlist);
    setActivePlayerIndex(index >= 0 ? index : 0);
  };

  const handleClosePlayer = async () => {
    setActivePlayerVideo(null);
    setActivePlayerPlaylist([]);
    await refreshTodayCount();
  };

  const handleSelectCategoryFromCategoriesPage = (category: MainCategory) => {
    setExploreInitialCategory(category);
    setActiveTab('explore');
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 font-sans antialiased selection:bg-brand-500 selection:text-white">
      {/* Offline Alert Banner */}
      {!isOnline && (
        <div className="bg-amber-600 text-white text-xs px-4 py-1.5 flex items-center justify-center gap-2 font-medium z-50 sticky top-0">
          <WifiOff size={14} />
          <span>You are offline. Cached playlists and app shell are available, but YouTube playback requires internet.</span>
        </div>
      )}

      {/* Primary Page Views */}
      {activeTab === 'home' && (
        <HomePage
          onPlayVideo={handlePlayVideo}
          onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
          onOpenContentEditor={() => setIsContentEditorOpen(true)}
          onNavigateToWatchlist={() => setActiveTab('watchlist')}
          onNavigateToExplore={(cat) => {
            setExploreInitialCategory(cat);
            setActiveTab('explore');
          }}
          selectedLanguages={preferences.selectedLanguages}
          todayWatchedCount={todayWatchedCount}
        />
      )}

      {activeTab === 'explore' && (
        <ExplorePage
          onPlayVideo={handlePlayVideo}
          initialCategory={exploreInitialCategory}
          selectedLanguages={preferences.selectedLanguages}
        />
      )}

      {activeTab === 'categories' && (
        <CategoriesPage
          onSelectCategory={handleSelectCategoryFromCategoriesPage}
        />
      )}

      {activeTab === 'watchlist' && (
        <DailyWatchlistPage
          onPlayVideo={handlePlayVideo}
        />
      )}

      {activeTab === 'library' && (
        <LibraryPage
          onPlayVideo={handlePlayVideo}
          deferredPrompt={deferredPrompt}
          onInstallApp={handleInstallApp}
        />
      )}

      {/* Global Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          refreshTodayCount();
        }}
        todayWatchedCount={todayWatchedCount}
      />

      {/* Fullscreen Shorts Player Overlay */}
      {activePlayerVideo && activePlayerPlaylist.length > 0 && (
        <ShortsPlayer
          videos={activePlayerPlaylist}
          initialIndex={activePlayerIndex}
          onClose={handleClosePlayer}
          onVideoChange={() => {
            refreshTodayCount();
          }}
        />
      )}

      {/* Language Selection Modal */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={isFirstLaunch ? undefined : () => setIsLanguageModalOpen(false)}
        currentLanguages={preferences.selectedLanguages}
        onSave={handleSaveLanguages}
        isFirstLaunch={isFirstLaunch}
      />

      {/* Content Editor Modal */}
      <ContentEditorModal
        isOpen={isContentEditorOpen}
        onClose={() => setIsContentEditorOpen(false)}
        onDataChanged={refreshTodayCount}
      />
    </div>
  );
}

export default App;

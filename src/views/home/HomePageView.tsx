// ================================================================================
// VIEW LAYER: HomePageView
// Pure presentational component for the entire central homepage
// ================================================================================

import React from 'react';
import {
  Search,
  X,
  Sparkles,
  Grid,
  Layers,
  Volume2,
  VolumeX,
  User,
  LogOut,
} from 'lucide-react';
import { HomeViewModel } from '../../viewmodels/useHomeViewModel';
import { CategoryFilterView } from './CategoryFilterView';
import { WebsiteCardView } from './WebsiteCardView';
import { FavoritesSectionView } from './FavoritesSectionView';
import { ThemeSwitcherView } from '../shared/ThemeSwitcherView';
import { AuthModalView } from '../shared/AuthModalView';

export interface HomePageViewProps {
  viewModel: HomeViewModel;
}

export const HomePageView: React.FC<HomePageViewProps> = ({ viewModel }) => {
  const {
    searchQuery,
    selectedCategory,
    favoriteIds,
    filteredWebsites,
    favoriteWebsites,
    categoryCounts,
    totalWebsitesCount,
    isAuthOpen,
    isMuted,
    isAuthenticated,
    isGuest,
    userDisplayName,
    userAvatarUrl,
    setSearchQuery,
    setSelectedCategory,
    toggleFavorite,
    openWebsite,
    clearSearch,
    openAuth,
    closeAuth,
    toggleAudioMute,
    signOut,
  } = viewModel;

  return (
    <div className="min-h-screen pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Top Control Bar: Title, Count Badge, Search, Theme Picker & Sign In */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  WEBSITES
                </h1>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-midnight-800 text-slate-700 dark:text-slate-300">
                  {totalWebsitesCount} Apps
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Independent super platforms unified with shared Supabase backend
              </p>
            </div>
          </div>

          {/* Controls: Compact Search, Theme Picker, Sound & Sign In */}
          <div className="flex items-center flex-wrap gap-2.5">
            {/* Search Input Bar */}
            <div className="relative flex-1 sm:w-64 md:w-72">
              <div className="relative flex items-center rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 p-1.5 shadow-xs focus-within:border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20 transition-all">
                <Search className="w-4 h-4 text-slate-400 ml-2.5 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search platforms..."
                  className="w-full bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none pr-2"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-1"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Audio Mute Toggle */}
            <button
              onClick={toggleAudioMute}
              title={isMuted ? 'Unmute sound FX' : 'Mute sound FX'}
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors focus:outline-none"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-rose-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              )}
            </button>

            {/* Universal Multi-Theme Engine Switcher */}
            <ThemeSwitcherView />

            {/* Sign In / User Profile */}
            {isAuthenticated ? (
              <div className="flex items-center gap-1.5 pl-1">
                <button
                  onClick={openAuth}
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors focus:outline-none"
                  title="View Profile"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-rose-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold overflow-hidden shadow-xs">
                    {userAvatarUrl ? (
                      <img
                        src={userAvatarUrl}
                        alt={userDisplayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      userDisplayName.charAt(0).toUpperCase()
                    )}
                  </div>
                  <span className="hidden md:inline text-xs font-semibold text-slate-700 dark:text-slate-300 max-w-[90px] truncate">
                    {userDisplayName}
                  </span>
                </button>

                <button
                  onClick={() => signOut()}
                  title="Sign Out"
                  className="p-1.5 rounded-full text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={openAuth}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm hover:scale-105 transition-all focus:outline-none"
              >
                <User className="w-3.5 h-3.5" />
                <span>{isGuest ? 'Guest Active' : 'Sign In'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filters Bar */}
        <CategoryFilterView
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
        />

        {/* User Bookmarks / Favorites Section */}
        {favoriteWebsites.length > 0 && !searchQuery && selectedCategory === 'All' && (
          <FavoritesSectionView
            favoriteWebsites={favoriteWebsites}
            onToggleFavorite={toggleFavorite}
            onOpenWebsite={openWebsite}
          />
        )}

        {/* Main Grid Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Grid className="w-4 h-4 text-slate-500" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              {selectedCategory === 'All' ? 'All Super Platforms' : selectedCategory}
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            Showing {filteredWebsites.length} of {totalWebsitesCount}
          </span>
        </div>

        {/* Main Grid of Website Cards */}
        {filteredWebsites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {filteredWebsites.map((site) => (
              <WebsiteCardView
                key={site.id}
                website={site}
                isFavorite={favoriteIds.includes(site.id)}
                onToggleFavorite={toggleFavorite}
                onOpenWebsite={openWebsite}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 px-4 rounded-3xl bg-slate-50 dark:bg-midnight-900/50 border border-dashed border-slate-300 dark:border-midnight-700">
            <Sparkles className="w-12 h-12 text-slate-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
              No matching websites found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              We couldn't find any websites matching &ldquo;{searchQuery}&rdquo;. Try another
              keyword, check spelling, or reset filters.
            </p>
            <button
              onClick={clearSearch}
              className="px-5 py-2 rounded-xl text-sm font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm hover:scale-105 transition-all"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </main>

      {/* Shared Auth Modal */}
      <AuthModalView isOpen={isAuthOpen} onClose={closeAuth} />
    </div>
  );
};

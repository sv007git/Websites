// ================================================================================
// VIEW LAYER: HomePageView
// Pure presentational component for the entire central homepage
// ================================================================================

import React from 'react';
import { Sparkles, Grid } from 'lucide-react';
import { HomeViewModel } from '../../viewmodels/useHomeViewModel';
import { HeroBannerView } from './HeroBannerView';
import { CategoryFilterView } from './CategoryFilterView';
import { WebsiteCardView } from './WebsiteCardView';
import { RecentlyVisitedView } from './RecentlyVisitedView';
import { FavoritesSectionView } from './FavoritesSectionView';

export interface HomePageViewProps {
  viewModel: HomeViewModel;
}

export const HomePageView: React.FC<HomePageViewProps> = ({ viewModel }) => {
  const {
    searchQuery,
    selectedCategory,
    favoriteIds,
    filteredWebsites,
    recentWebsites,
    favoriteWebsites,
    categoryCounts,
    totalWebsitesCount,
    setSearchQuery,
    setSelectedCategory,
    toggleFavorite,
    openWebsite,
    clearSearch,
  } = viewModel;

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Banner */}
      <HeroBannerView
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClearSearch={clearSearch}
        totalWebsites={totalWebsitesCount}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Recently Visited Section */}
        {recentWebsites.length > 0 && !searchQuery && (
          <RecentlyVisitedView
            recentWebsites={recentWebsites}
            onOpenWebsite={openWebsite}
          />
        )}

        {/* User Bookmarks / Favorites Section */}
        {favoriteWebsites.length > 0 && !searchQuery && selectedCategory === 'All' && (
          <FavoritesSectionView
            favoriteWebsites={favoriteWebsites}
            onToggleFavorite={toggleFavorite}
            onOpenWebsite={openWebsite}
          />
        )}

        {/* Category Filters Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Grid className="w-5 h-5 text-slate-500" />
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Explore All Websites
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            Showing {filteredWebsites.length} of {totalWebsitesCount}
          </span>
        </div>

        <CategoryFilterView
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
        />

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
    </div>
  );
};

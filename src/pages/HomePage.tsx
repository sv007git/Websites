import React, { useState, useEffect } from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryFilter } from '../components/home/CategoryFilter';
import { WebsiteCard } from '../components/home/WebsiteCard';
import { RecentlyVisited } from '../components/home/RecentlyVisited';
import { FavoritesSection } from '../components/home/FavoritesSection';
import {
  getAllWebsites,
  getFeaturedWebsites,
  searchWebsites,
  WEBSITE_CATEGORIES,
} from '../registry/websiteRegistry';
import { Sparkles, Grid } from 'lucide-react';

const STORAGE_KEY_FAVS = 'websites_user_favorites';
const STORAGE_KEY_RECENT = 'websites_user_recent_visits';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    if (typeof localStorage === 'undefined') return ['chat', 'cookfood', 'doctor'];
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVS);
      return saved ? JSON.parse(saved) : ['chat', 'cookfood', 'doctor'];
    } catch {
      return ['chat', 'cookfood', 'doctor'];
    }
  });

  const [recentIds, setRecentIds] = useState<string[]>(() => {
    if (typeof localStorage === 'undefined') return [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RECENT);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save favorites to localStorage
  const handleToggleFavorite = (id: string) => {
    setFavoriteIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(updated));
      return updated;
    });
  };

  // Record visit
  const handleOpenWebsite = (id: string) => {
    setRecentIds((prev) => {
      const updated = [id, ...prev.filter((item) => item !== id)].slice(0, 8);
      localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(updated));
      return updated;
    });
  };

  // Calculate category counts
  const allWebsites = getAllWebsites();
  const categoryCounts: Record<string, number> = { All: allWebsites.length };
  allWebsites.forEach((site) => {
    categoryCounts[site.category] = (categoryCounts[site.category] || 0) + 1;
  });

  // Filtered websites
  const filteredWebsites = allWebsites.filter((site) => {
    const matchesCategory = selectedCategory === 'All' || site.category === selectedCategory;
    if (!searchQuery.trim()) return matchesCategory;

    const clean = searchQuery.toLowerCase();
    const matchesQuery =
      site.name.toLowerCase().includes(clean) ||
      site.shortDescription.toLowerCase().includes(clean) ||
      site.category.toLowerCase().includes(clean) ||
      site.tags.some((tag) => tag.toLowerCase().includes(clean)) ||
      site.techStack.toLowerCase().includes(clean);

    return matchesCategory && matchesQuery;
  });

  const featuredWebsites = getFeaturedWebsites();

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Banner */}
      <HeroBanner
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalWebsites={allWebsites.length}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Recently Visited Section */}
        {recentIds.length > 0 && !searchQuery && (
          <RecentlyVisited recentIds={recentIds} />
        )}

        {/* User Bookmarks / Favorites Section */}
        {favoriteIds.length > 0 && !searchQuery && selectedCategory === 'All' && (
          <FavoritesSection
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
            onOpenWebsite={handleOpenWebsite}
          />
        )}

        {/* Directory Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Grid className="w-5 h-5 text-rose-500" />
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All 12 Super Platforms'}
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-slate-200 dark:bg-midnight-800 text-slate-700 dark:text-slate-300">
              {filteredWebsites.length}
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
        />

        {/* Website Cards Grid */}
        {filteredWebsites.length === 0 ? (
          <div className="py-20 text-center bg-white dark:bg-midnight-900 rounded-3xl border border-slate-200 dark:border-midnight-800">
            <Sparkles className="w-10 h-10 text-slate-400 mx-auto mb-3 opacity-40" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No websites match your filter</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              Try switching categories or clearing your search term to view all 12 platform applications.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredWebsites.map((site) => (
              <WebsiteCard
                key={site.id}
                website={site}
                isFavorite={favoriteIds.includes(site.id)}
                onToggleFavorite={handleToggleFavorite}
                onOpenWebsite={handleOpenWebsite}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

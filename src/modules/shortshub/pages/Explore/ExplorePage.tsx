import React, { useState, useEffect } from 'react';
import { VideoItem, MainCategory, ContentLanguage } from '../../types';
import { DiscoveryEngine } from '../../services/discovery/discoveryEngine';
import { VideoCard } from '../../components/VideoCard/VideoCard';
import categoriesData from '../../database/categories.json';
import { Search, SlidersHorizontal, X, Sparkles, Filter } from 'lucide-react';

interface ExplorePageProps {
  onPlayVideo: (video: VideoItem, playlist: VideoItem[]) => void;
  initialCategory?: MainCategory;
  selectedLanguages: ContentLanguage[];
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  onPlayVideo,
  initialCategory,
  selectedLanguages,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<MainCategory | 'All'>(initialCategory || 'All');
  const [activeLanguage, setActiveLanguage] = useState<ContentLanguage | 'All'>('All');
  const [sortBy, setSortBy] = useState<'recent' | 'alpha' | 'duration'>('recent');
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const results = await DiscoveryEngine.searchVideos({
          keyword: searchTerm,
          languages: activeLanguage === 'All' ? selectedLanguages : [activeLanguage],
          categories: activeCategory === 'All' ? undefined : [activeCategory],
          sortBy,
        });
        setVideos(results);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchVideos, 150);
    return () => clearTimeout(debounce);
  }, [searchTerm, activeCategory, activeLanguage, sortBy, selectedLanguages]);

  const categoriesList: (MainCategory | 'All')[] = [
    'All',
    'Education',
    'Fun and Entertainment',
    'Family',
    'Friends and Lifestyle'
  ];

  return (
    <div className="min-h-screen pb-24 text-white">
      {/* Sticky Header with Search */}
      <header className="sticky top-0 z-30 bg-dark-950/90 backdrop-blur-xl border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-md mx-auto space-y-3">
          <div className="relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search Tamil, English & Telugu Shorts..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-dark-850 border border-slate-700/80 rounded-2xl pl-10 pr-9 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Horizontal Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs font-semibold">
            {categoriesList.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                      : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Secondary Language & Sort Filter Row */}
          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/40">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-400 font-medium">Language:</span>
              <div className="flex gap-1">
                {(['All', ...selectedLanguages] as (ContentLanguage | 'All')[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => setActiveLanguage(lang)}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      activeLanguage === lang
                        ? 'bg-slate-200 text-dark-950'
                        : 'bg-dark-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {lang === 'Tamil' ? 'தமிழ்' : lang === 'Telugu' ? 'తెలుగు' : lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[11px] text-slate-400 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-dark-850 border border-slate-700/80 rounded-lg px-2 py-0.5 text-[10px] text-slate-200 focus:outline-none"
              >
                <option value="recent">Recently Added</option>
                <option value="alpha">Alphabetical</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Results Grid */}
      <main className="max-w-md mx-auto px-4 pt-4">
        <div className="flex items-center justify-between mb-3 px-1 text-xs text-slate-400">
          <span>Found {videos.length} Shorts</span>
          {activeCategory !== 'All' && (
            <span className="text-brand-400 font-semibold">{activeCategory}</span>
          )}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <div className="w-8 h-8 rounded-full border-2 border-brand-500/20 border-t-brand-500 animate-spin mb-3"></div>
            <p className="text-xs">Finding matching Shorts...</p>
          </div>
        ) : videos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            <div className="w-12 h-12 rounded-2xl bg-dark-850 flex items-center justify-center text-slate-500 mb-3 border border-slate-800">
              <Search size={24} />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">No Shorts Found</h3>
            <p className="text-xs text-slate-400 max-w-xs">
              Try adjusting your search query, language filters, or selecting a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {videos.map(video => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={v => onPlayVideo(v, videos)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

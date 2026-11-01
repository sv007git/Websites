import React from 'react';
import { Layers, Sparkles, Search, Compass, ShieldCheck } from 'lucide-react';

interface HeroBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalWebsites: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  searchQuery,
  onSearchChange,
  totalWebsites,
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-16 bg-gradient-to-b from-slate-100/60 via-transparent to-transparent dark:from-midnight-900/40">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-r from-rose-500/10 via-indigo-500/10 to-cyan-500/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 shadow-sm text-slate-800 dark:text-slate-100 mb-5 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>Unified Super Website Platform</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-slate-400 font-normal">{totalWebsites} Applications Live</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
          One Central Platform.{' '}
          <span className="bg-gradient-to-r from-rose-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Ten Super Websites.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8">
          Explore independent applications across social relationships, health, culinary arts, business ERP,
          and Vedic traditions — unified under one domain with shared Supabase cloud and multi-theme styling.
        </p>

        {/* Search Bar Input */}
        <div className="max-w-xl mx-auto relative mb-6">
          <div className="relative flex items-center shadow-lg rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 p-1.5 focus-within:border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-3 mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Filter by name, feature, or tech (e.g. recipes, doctor, crm)..."
              className="w-full bg-transparent text-sm md:text-base text-slate-900 dark:text-white placeholder-slate-400 outline-none pr-3"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs px-2.5 py-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Quick Highlights Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Shared Supabase Cloud</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-rose-500" />
            <span>Zero Cross-App Collision</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-cyan-500" />
            <span>100% Mobile Responsive</span>
          </span>
        </div>
      </div>
    </section>
  );
};

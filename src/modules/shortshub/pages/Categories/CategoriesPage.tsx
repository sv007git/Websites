import React, { useState } from 'react';
import { MainCategory, VideoItem } from '../../types';
import categoriesData from '../../database/categories.json';
import {
  GraduationCap,
  Smile,
  HeartHandshake,
  Users,
  ChevronRight,
  Sparkles,
  BookOpen,
  ArrowLeft
} from 'lucide-react';

interface CategoriesPageProps {
  onSelectCategory: (category: MainCategory, subcategory?: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ onSelectCategory }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const icons: Record<string, any> = {
    'Education': GraduationCap,
    'Fun and Entertainment': Smile,
    'Family': HeartHandshake,
    'Friends and Lifestyle': Users,
  };

  return (
    <div className="min-h-screen pb-24 text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-dark-950/90 backdrop-blur-xl border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-md mx-auto">
          <h1 className="text-base font-bold tracking-tight">Curated Categories</h1>
          <p className="text-xs text-slate-400">Discover tailored Shorts by topics and interests</p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4 space-y-4">
        {categoriesData.map(cat => {
          const Icon = icons[cat.name] || Sparkles;
          const isExpanded = expandedCategory === cat.name;

          return (
            <div
              key={cat.id}
              className="rounded-3xl bg-dark-900 border border-slate-800/90 overflow-hidden shadow-lg transition-all"
            >
              {/* Category Main Card */}
              <div
                className={`p-4 bg-gradient-to-r ${cat.color} bg-opacity-25 border-b border-white/5 cursor-pointer flex items-center justify-between`}
                onClick={() => onSelectCategory(cat.name as MainCategory)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white leading-tight">{cat.name}</h2>
                    <p className="text-xs text-slate-200/90 font-medium">{cat.nameTamil} • {cat.nameTelugu}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCategory(cat.name as MainCategory);
                    }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition flex items-center gap-1"
                  >
                    View All
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Description & Subcategories Toggle */}
              <div className="p-4">
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Subtopics ({cat.subcategories.length})
                  </span>
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : cat.name)}
                    className="text-xs text-brand-400 hover:text-brand-300 font-semibold"
                  >
                    {isExpanded ? 'Collapse' : 'Show All Subtopics'}
                  </button>
                </div>

                {/* Subcategory Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {(isExpanded ? cat.subcategories : cat.subcategories.slice(0, 6)).map(sub => (
                    <button
                      key={sub}
                      onClick={() => onSelectCategory(cat.name as MainCategory, sub)}
                      className="px-2.5 py-1 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-800 hover:border-slate-700 text-[11px] font-medium text-slate-300 hover:text-white transition active:scale-95"
                    >
                      {sub}
                    </button>
                  ))}
                  {!isExpanded && cat.subcategories.length > 6 && (
                    <button
                      onClick={() => setExpandedCategory(cat.name)}
                      className="px-2 py-1 rounded-xl bg-slate-800/40 text-[11px] font-semibold text-brand-400"
                    >
                      +{cat.subcategories.length - 6} more
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

// ================================================================================
// VIEW LAYER: CategoryFilterView
// Pure presentational component for category pill tabs
// ================================================================================

import React from 'react';
import { WEBSITE_CATEGORIES } from '../../models/website.model';

export interface CategoryFilterViewProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
}

export const CategoryFilterView: React.FC<CategoryFilterViewProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none mb-6">
      <div className="flex items-center gap-1.5 min-w-max px-1">
        {WEBSITE_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = categoryCounts[cat] ?? 0;
          if (cat !== 'All' && count === 0) return null;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all focus:outline-none ${
                isSelected
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm scale-102'
                  : 'bg-white dark:bg-midnight-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-midnight-800 hover:border-slate-300 dark:hover:border-midnight-700'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected
                    ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black font-bold'
                    : 'bg-slate-100 dark:bg-midnight-800 text-slate-500'
                }`}
              >
                {cat === 'All' ? categoryCounts['All'] || 10 : count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

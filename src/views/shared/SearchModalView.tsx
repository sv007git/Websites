// ================================================================================
// VIEW LAYER: SearchModalView
// Pure presentational component for global search dialog
// ================================================================================

import React, { useRef, useEffect } from 'react';
import { Search, X, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { useSearchViewModel } from '../../viewmodels/useSearchViewModel';
import { WebsiteModel } from '../../models/website.model';

export interface SearchModalViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModalView: React.FC<SearchModalViewProps> = ({ isOpen, onClose }) => {
  const vm = useSearchViewModel(isOpen, onClose);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onKeyDown={(e) => vm.handleKeyDown(e, onClose)}
    >
      <div className="w-full max-w-2xl bg-white dark:bg-midnight-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-midnight-800 overflow-hidden">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-midnight-800">
          <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={vm.query}
            onChange={(e) => vm.setQuery(e.target.value)}
            placeholder="Search all 10 websites, features, or technologies..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm md:text-base outline-none"
          />
          {vm.query && (
            <button
              onClick={vm.clearQuery}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-midnight-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-midnight-700"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-midnight-800/50">
          {vm.results.length > 0 ? (
            vm.results.map((site, index) => {
              const isSelected = index === vm.selectedIndex;
              return (
                <div
                  key={site.id}
                  onClick={() => vm.selectWebsite(site, onClose)}
                  onMouseEnter={() => vm.setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100'
                      : 'hover:bg-slate-50 dark:hover:bg-midnight-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                      style={{ backgroundColor: site.accentColor }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm truncate">{site.name}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-midnight-800 text-slate-500">
                          {site.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-md">
                        {site.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[11px] text-slate-400 hidden sm:inline">
                      {site.techStack}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ${
                        isSelected ? 'text-rose-600 dark:text-rose-400' : 'text-slate-300'
                      }`}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-500">
              <p className="text-sm">No websites found matching &ldquo;{vm.query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching by category, feature, or tool.</p>
            </div>
          )}
        </div>

        {/* Modal Footer Key Hints */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-midnight-950/60 border-t border-slate-200 dark:border-midnight-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 font-mono">
                ↑↓
              </kbd>{' '}
              Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 font-mono">
                ↵
              </kbd>{' '}
              Select
            </span>
          </div>
          <span>10 Super Websites indexed</span>
        </div>
      </div>
    </div>
  );
};

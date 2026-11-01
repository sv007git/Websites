import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { searchWebsites, WebsiteEntry } from '../../registry/websiteRegistry';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<WebsiteEntry[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults(searchWebsites(''));
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setResults(searchWebsites(query));
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleSelect = (site: WebsiteEntry) => {
    onClose();
    navigate(site.routePath);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white dark:bg-midnight-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-midnight-800 overflow-hidden">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-midnight-800">
          <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 12 websites, features, or technologies..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm md:text-base outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-mono font-medium text-slate-400 bg-slate-100 dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 rounded-md">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-midnight-800/60">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-400 dark:text-slate-500">
              <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">No matching websites found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for recipe, doctor, panchang, crm, ide, or webrtc.</p>
            </div>
          ) : (
            results.map((site, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={site.id}
                  onClick={() => handleSelect(site)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-start gap-3.5 p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-100 dark:bg-midnight-800/90 text-slate-900 dark:text-white shadow-xs'
                      : 'hover:bg-slate-50 dark:hover:bg-midnight-800/50 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-white shadow-xs"
                    style={{ backgroundColor: site.accentColor }}
                  >
                    {site.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold truncate text-slate-900 dark:text-white">{site.name}</h4>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-medium bg-slate-200/70 dark:bg-midnight-700 text-slate-700 dark:text-slate-300">
                        {site.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                      {site.shortDescription}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                      {site.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-midnight-950 text-slate-500 dark:text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 self-center shrink-0 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">
                    <span className="text-xs hidden sm:inline font-medium">Launch</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-midnight-950 border-t border-slate-200 dark:border-midnight-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>12 Unified Websites</span>
        </div>
      </div>
    </div>
  );
};

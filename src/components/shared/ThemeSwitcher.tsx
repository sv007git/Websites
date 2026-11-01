import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../themes/ThemeContext';
import { Palette, Moon, Sun, Check, ChevronDown } from 'lucide-react';

export const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, toggleDarkMode, palette, setPalette, palettes, currentPalette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-midnight-900 border border-slate-200 dark:border-midnight-800 rounded-full shadow-sm">
        {/* Dark / Light Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="p-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-full transition-colors hover:bg-white dark:hover:bg-midnight-800 focus:outline-none"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
        </button>

        {/* Palette Dropdown Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-white dark:bg-midnight-800 text-slate-800 dark:text-slate-100 border border-slate-200/70 dark:border-midnight-700 hover:border-slate-300 transition-all shadow-xs"
        >
          <span
            className="w-2.5 h-2.5 rounded-full inline-block shadow-xs"
            style={{ backgroundColor: currentPalette.accent }}
          />
          <span className="hidden sm:inline max-w-[90px] truncate">{currentPalette.name}</span>
          <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Palette Picker Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 p-3 bg-white dark:bg-midnight-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-midnight-800 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-midnight-800">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Palette className="w-3.5 h-3.5" />
              <span>Platform Theme</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:underline flex items-center gap-1"
            >
              {isDarkMode ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          {/* Monochrome Section */}
          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-1.5 uppercase tracking-wider">
            High Contrast
          </div>
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {['black', 'white'].map((id) => {
              const pal = palettes[id];
              if (!pal) return null;
              const isSelected = palette === id;
              return (
                <button
                  key={id}
                  onClick={() => {
                    setPalette(id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between p-2 rounded-xl text-left border text-xs font-medium transition-all ${
                    isSelected
                      ? 'border-slate-900 dark:border-white bg-slate-100 dark:bg-midnight-800 text-slate-900 dark:text-white shadow-xs'
                      : 'border-slate-200 dark:border-midnight-800 hover:bg-slate-50 dark:hover:bg-midnight-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {pal.previewColors.map((color, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full border border-white dark:border-midnight-900"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="truncate">{pal.name}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Multi-Color Palettes Section */}
          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-1.5 uppercase tracking-wider">
            Vibrant Colors
          </div>
          <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
            {Object.keys(palettes)
              .filter((id) => id !== 'black' && id !== 'white')
              .map((id) => {
                const pal = palettes[id];
                const isSelected = palette === id;
                return (
                  <button
                    key={id}
                    onClick={() => {
                      setPalette(id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left border text-xs font-medium transition-all ${
                      isSelected
                        ? 'border-rose-400 dark:border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-slate-900 dark:text-white'
                        : 'border-slate-100 dark:border-midnight-800/80 hover:bg-slate-50 dark:hover:bg-midnight-800/60 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex -space-x-1">
                        {pal.previewColors.map((color, i) => (
                          <div
                            key={i}
                            className="w-3.5 h-3.5 rounded-full border border-white dark:border-midnight-900 shadow-xs"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="truncate">{pal.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-rose-500 shrink-0" />}
                  </button>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

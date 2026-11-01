// ================================================================================
// VIEW LAYER: ThemeSwitcherView
// Pure presentational component for theme switcher dropdown and dark mode toggle
// ================================================================================

import React, { useRef, useEffect } from 'react';
import { Palette, Moon, Sun, Check, ChevronDown } from 'lucide-react';
import { useThemeViewModel } from '../../viewmodels/useThemeViewModel';

export interface ThemeSwitcherViewProps {
  viewModel?: ReturnType<typeof useThemeViewModel>;
}

export const ThemeSwitcherView: React.FC<ThemeSwitcherViewProps> = ({ viewModel: propVm }) => {
  const localVm = useThemeViewModel();
  const vm = propVm || localVm;
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        vm.closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [vm]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-midnight-900 border border-slate-200 dark:border-midnight-800 rounded-full shadow-sm">
        {/* Dark / Light Mode Toggle Button */}
        <button
          onClick={vm.toggleDarkMode}
          title={vm.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="p-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-full transition-colors hover:bg-white dark:hover:bg-midnight-800 focus:outline-none"
        >
          {vm.isDarkMode ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </button>

        {/* Palette Dropdown Trigger */}
        <button
          onClick={vm.toggleDropdown}
          className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-white dark:bg-midnight-800 text-slate-800 dark:text-slate-100 border border-slate-200/70 dark:border-midnight-700 hover:border-slate-300 transition-all shadow-xs"
        >
          <span
            className="w-2.5 h-2.5 rounded-full inline-block shadow-xs"
            style={{ backgroundColor: vm.currentPalette.accent }}
          />
          <span className="hidden sm:inline max-w-[90px] truncate">
            {vm.currentPalette.name}
          </span>
          <ChevronDown
            className={`w-3 h-3 text-slate-400 transition-transform ${
              vm.isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Palette Picker Dropdown Panel */}
      {vm.isOpen && (
        <div className="absolute right-0 mt-2 w-72 p-3 bg-white dark:bg-midnight-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-midnight-800 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-midnight-800">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Palette className="w-3.5 h-3.5" />
              <span>Platform Theme</span>
            </div>
            <button
              onClick={vm.toggleDarkMode}
              className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:underline flex items-center gap-1"
            >
              {vm.isDarkMode ? (
                <Sun className="w-3 h-3 text-amber-400" />
              ) : (
                <Moon className="w-3 h-3" />
              )}
              {vm.isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1.5 max-h-72 overflow-y-auto pr-1">
            {Object.values(vm.palettes).map((p) => {
              const isSelected = vm.palette === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => vm.setPalette(p.id)}
                  className={`flex items-center justify-between w-full p-2 rounded-xl text-left text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-slate-100 dark:bg-midnight-800 text-slate-900 dark:text-white ring-1 ring-slate-300 dark:ring-midnight-700'
                      : 'hover:bg-slate-50 dark:hover:bg-midnight-800/50 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Swatch Previews */}
                    <div className="flex items-center -space-x-1 shrink-0">
                      {p.previewColors.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full border border-white dark:border-midnight-900 shadow-xs"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div>
                      <span className="block">{p.name}</span>
                      <span className="block text-[10px] font-normal text-slate-400 capitalize">
                        {p.category} palette
                      </span>
                    </div>
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

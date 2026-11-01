import React from 'react';
import { Home, Compass, Grid, ListVideo, Library } from 'lucide-react';

export type TabType = 'home' | 'explore' | 'categories' | 'watchlist' | 'library';

interface BottomNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  todayWatchedCount?: number;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
  todayWatchedCount = 0,
}) => {
  const tabs = [
    { id: 'home' as TabType, label: 'Home', icon: Home },
    { id: 'explore' as TabType, label: 'Explore', icon: Compass },
    { id: 'categories' as TabType, label: 'Categories', icon: Grid },
    {
      id: 'watchlist' as TabType,
      label: 'Watchlist',
      icon: ListVideo,
      badge: todayWatchedCount > 0 ? (todayWatchedCount > 99 ? '99+' : todayWatchedCount) : undefined
    },
    { id: 'library' as TabType, label: 'Library', icon: Library },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-dark-900/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-2 safe-area-bottom">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 active:scale-95 ${
                isActive ? 'text-brand-500 font-bold' : 'text-slate-400 hover:text-slate-200 font-medium'
              }`}
            >
              <div className="relative">
                <Icon
                  size={22}
                  className={`transition-transform duration-200 ${isActive ? 'scale-110 stroke-[2.5]' : 'stroke-[1.8]'}`}
                />
                {tab.badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2.5 min-w-[18px] h-[18px] px-1 text-[10px] font-black rounded-full bg-brand-500 text-white flex items-center justify-center border-2 border-dark-900 shadow-sm animate-pulse-subtle">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">{tab.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

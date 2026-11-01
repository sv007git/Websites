// ================================================================================
// VIEW LAYER: HeaderView
// Pure presentational component for module navigation & back breadcrumbs
// (Does not render on homepage; homepage uses inline controls)
// ================================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  User,
  LogOut,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { HeaderViewModel } from '../../viewmodels/useHeaderViewModel';
import { ThemeSwitcherView } from '../shared/ThemeSwitcherView';
import { SearchModalView } from '../shared/SearchModalView';
import { AuthModalView } from '../shared/AuthModalView';

export interface HeaderViewProps {
  viewModel: HeaderViewModel;
}

export const HeaderView: React.FC<HeaderViewProps> = ({ viewModel }) => {
  const {
    isSearchOpen,
    isAuthOpen,
    isMuted,
    activeWebsite,
    isInsideModule,
    isAuthenticated,
    isGuest,
    userDisplayName,
    userAvatarUrl,
    closeSearch,
    openAuth,
    closeAuth,
    toggleAudioMute,
    signOut,
    onNavigateHome,
  } = viewModel;

  // On homepage, do not render header — controls are inline on the homepage
  if (!isInsideModule) {
    return null;
  }

  return (
    <>
      <nav className="w-full bg-white dark:bg-midnight-950 border-b border-slate-200/80 dark:border-midnight-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between gap-3">
          {/* Left: Quick Return to Homepage */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to="/"
              onClick={onNavigateHome}
              className="flex items-center gap-2 px-2.5 py-1 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-midnight-800 transition-all group shrink-0"
              title="Return to WEBSITES Central Homepage"
            >
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-0.5 transition-transform" />
              <span>All Websites</span>
            </Link>

            {/* Active Website Breadcrumb */}
            {activeWebsite && (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-midnight-800 min-w-0">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: activeWebsite.accentColor }}
                />
                <span className="text-xs sm:text-sm font-bold truncate text-slate-900 dark:text-slate-100">
                  {activeWebsite.name}
                </span>
                <span className="hidden md:inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-midnight-800 text-slate-600 dark:text-slate-400">
                  {activeWebsite.category}
                </span>
              </div>
            )}
          </div>

          {/* Right: Controls & Profile */}
          <div className="flex items-center gap-2">
            {/* Audio Procedural Synthesizer Mute Toggle */}
            <button
              onClick={toggleAudioMute}
              title={isMuted ? 'Unmute procedural sound FX' : 'Mute procedural sound FX'}
              className="p-1.5 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors focus:outline-none"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-rose-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              )}
            </button>

            {/* Universal Multi-Theme Engine Switcher */}
            <ThemeSwitcherView />

            {/* User Profile or Sign In */}
            {isAuthenticated ? (
              <div className="flex items-center gap-1.5 pl-1">
                <button
                  onClick={openAuth}
                  className="flex items-center gap-1.5 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors focus:outline-none"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold overflow-hidden shadow-xs">
                    {userAvatarUrl ? (
                      <img
                        src={userAvatarUrl}
                        alt={userDisplayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      userDisplayName.charAt(0).toUpperCase()
                    )}
                  </div>
                  <span className="hidden sm:inline text-xs font-semibold text-slate-700 dark:text-slate-300 max-w-[80px] truncate">
                    {userDisplayName}
                  </span>
                </button>

                <button
                  onClick={() => signOut()}
                  title="Sign Out"
                  className="p-1.5 rounded-full text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={openAuth}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm hover:scale-105 transition-all focus:outline-none"
              >
                <User className="w-3 h-3" />
                <span className="hidden sm:inline">
                  {isGuest ? 'Guest' : 'Sign In'}
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Shared Modals */}
      <SearchModalView isOpen={isSearchOpen} onClose={closeSearch} />
      <AuthModalView isOpen={isAuthOpen} onClose={closeAuth} />
    </>
  );
};

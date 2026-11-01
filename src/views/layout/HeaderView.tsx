// ================================================================================
// VIEW LAYER: HeaderView
// Pure presentational component for global header, navigation, and mobile menu
// ================================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Search,
  Volume2,
  VolumeX,
  User,
  LogOut,
  Sparkles,
  ChevronRight,
  Menu,
  X,
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
    isMobileMenuOpen,
    activeWebsite,
    isAuthenticated,
    isGuest,
    userDisplayName,
    userAvatarUrl,
    allWebsites,
    openSearch,
    closeSearch,
    openAuth,
    closeAuth,
    toggleMobileMenu,
    closeMobileMenu,
    toggleAudioMute,
    signOut,
    onNavigateHome,
    onNavigateSite,
  } = viewModel;

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-midnight-950/80 border-b border-slate-200/80 dark:border-midnight-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* Left: Brand & Breadcrumb */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to="/"
              onClick={onNavigateHome}
              className="flex items-center gap-2 group shrink-0 focus:outline-none"
              title="Return to WEBSITES Central Homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-black tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 dark:from-white dark:via-rose-200 dark:to-cyan-200 bg-clip-text text-transparent">
                  WEBSITES
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 -mt-1">
                  10 Super Platforms
                </span>
              </div>
            </Link>

            {/* Breadcrumb if inside an individual website */}
            {activeWebsite && (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-midnight-800 min-w-0">
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: activeWebsite.accentColor }}
                  />
                  <span className="text-xs sm:text-sm font-bold truncate text-slate-800 dark:text-slate-100">
                    {activeWebsite.name}
                  </span>
                  <span className="hidden md:inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-midnight-800 text-slate-600 dark:text-slate-400">
                    {activeWebsite.category}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Center: Global Search Bar trigger */}
          <button
            onClick={openSearch}
            className="hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-midnight-900 border border-slate-200 dark:border-midnight-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-xs w-64 lg:w-80 transition-all focus:outline-none"
          >
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">Search 10 websites & features...</span>
            <kbd className="ml-auto px-1.5 py-0.5 rounded bg-white dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 text-[10px] font-mono text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Right: Controls & Profile */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Audio Procedural Synthesizer Mute Toggle */}
            <button
              onClick={toggleAudioMute}
              title={isMuted ? 'Unmute procedural sound FX' : 'Mute procedural sound FX'}
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors focus:outline-none"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-rose-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              )}
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={openSearch}
              className="md:hidden p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-midnight-800 focus:outline-none"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Universal Multi-Theme Engine Switcher */}
            <ThemeSwitcherView />

            {/* User Profile or Sign In */}
            {isAuthenticated ? (
              <div className="flex items-center gap-2 pl-1">
                <button
                  onClick={openAuth}
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors focus:outline-none"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-rose-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold overflow-hidden shadow-xs">
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
                  <span className="hidden lg:inline text-xs font-semibold text-slate-700 dark:text-slate-300 max-w-[100px] truncate">
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm hover:scale-105 transition-all focus:outline-none"
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {isGuest ? 'Guest Active' : 'Sign In'}
                </span>
              </button>
            )}

            {/* Mobile Navigation Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-midnight-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs top-16 animate-in fade-in duration-150">
          <div className="bg-white dark:bg-midnight-900 border-b border-slate-200 dark:border-midnight-800 p-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-midnight-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Direct Application Launch
              </span>
              <span className="text-xs font-semibold text-rose-500">
                {allWebsites.length} Active Platforms
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {allWebsites.map((site) => (
                <Link
                  key={site.id}
                  to={site.routePath}
                  onClick={() => onNavigateSite(site)}
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-100 dark:border-midnight-800 hover:bg-slate-50 dark:hover:bg-midnight-800/60 transition-all text-left"
                >
                  <span
                    className="w-3 h-3 rounded-full shrink-0 shadow-xs"
                    style={{ backgroundColor: site.accentColor }}
                  />
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                      {site.name}
                    </span>
                    <span className="block text-[10px] text-slate-400 truncate">
                      {site.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-midnight-800 flex items-center justify-between">
              <Link
                to="/"
                onClick={onNavigateHome}
                className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:underline flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>Return to Central Home</span>
              </Link>
              <button
                onClick={closeMobileMenu}
                className="text-xs font-medium text-slate-400 hover:text-slate-600"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Shared Modals */}
      <SearchModalView isOpen={isSearchOpen} onClose={closeSearch} />
      <AuthModalView isOpen={isAuthOpen} onClose={closeAuth} />
    </>
  );
};

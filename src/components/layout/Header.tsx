import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSwitcher } from '../shared/ThemeSwitcher';
import { SearchModal } from '../shared/SearchModal';
import { AuthModal } from '../shared/AuthModal';
import { useAuth } from '../../services/auth/AuthContext';
import { unifiedAudio } from '../../services/audio/UnifiedAudioEngine';
import { getWebsiteById } from '../../registry/websiteRegistry';
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
  Compass,
} from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();
  const { user, profile, isAuthenticated, isGuest, signOut } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(unifiedAudio.getMuted());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if inside an individual website module
  const pathParts = location.pathname.split('/').filter(Boolean);
  const isInsideModule = pathParts[0] === 'site' && Boolean(pathParts[1]);
  const activeWebsite = isInsideModule ? getWebsiteById(pathParts[1]) : null;

  const handleAudioToggle = () => {
    const muted = unifiedAudio.toggleMute();
    setIsMuted(muted);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-midnight-950/80 border-b border-slate-200/80 dark:border-midnight-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* Left: Brand & Breadcrumb */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to="/"
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
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-midnight-900 border border-slate-200 dark:border-midnight-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-xs w-64 lg:w-80 transition-all focus:outline-none"
          >
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">Search all 12 websites...</span>
            <span className="ml-auto font-mono text-[10px] px-1.5 py-0.5 bg-white dark:bg-midnight-800 rounded border border-slate-200 dark:border-midnight-700">
              ⌘K
            </span>
          </button>

          {/* Right: Controls & Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Mobile Search Icon Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-midnight-800"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Audio SFX Mute/Unmute */}
            <button
              onClick={handleAudioToggle}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors"
              title={isMuted ? 'Unmute Audio & SFX' : 'Mute Audio & SFX'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />}
            </button>

            {/* Universal Multi-Theme Switcher */}
            <ThemeSwitcher />

            {/* Auth Profile / Login Button */}
            {isAuthenticated ? (
              <div className="flex items-center gap-2 pl-1 border-l border-slate-200 dark:border-midnight-800">
                <div
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  title={profile?.display_name || user?.email || 'User'}
                >
                  {profile?.display_name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <button
                  onClick={() => signOut()}
                  className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400"
                  title="Sign Out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : isGuest ? (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-midnight-900 border border-slate-200 dark:border-midnight-800 text-slate-700 dark:text-slate-200 hover:border-slate-300 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">Guest</span>
                <span className="text-slate-400">·</span>
                <span className="text-rose-500 font-bold">Sign In</span>
              </button>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 shadow-sm transition-all"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-midnight-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-midnight-800 bg-white dark:bg-midnight-950 p-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>Quick Navigation</span>
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-rose-500 hover:underline flex items-center gap-1"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>All 12 Websites</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                to="/site/chat"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Just You & Me</span>
              </Link>
              <Link
                to="/site/cookfood"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>CookFood</span>
              </Link>
              <Link
                to="/site/doctor"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>Doctor</span>
              </Link>
              <Link
                to="/site/erp"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>ERP Suite</span>
              </Link>
              <Link
                to="/site/invitedecide"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>InviteDecide</span>
              </Link>
              <Link
                to="/site/mypage"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                <span>Prabhata</span>
              </Link>
              <Link
                to="/site/pujas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-orange-600" />
                <span>Sanatana Pujas</span>
              </Link>
              <Link
                to="/site/shareit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>ShareIT</span>
              </Link>
              <Link
                to="/site/shortshub"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>ShortsHub</span>
              </Link>
              <Link
                to="/site/study"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-midnight-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-midnight-900"
              >
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Cartoon Study</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

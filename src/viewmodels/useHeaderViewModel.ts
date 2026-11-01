// ================================================================================
// VIEWMODEL LAYER: Header ViewModel
// Manages navigation state, search/auth/theme triggers, audio mute & route tracking
// ================================================================================

import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WebsiteModel, WebsiteModelRepository } from '../models/website.model';
import { audioPresenter } from '../presenters/AudioPresenter';
import { platformPresenter } from '../presenters/PlatformPresenter';
import { useAuth } from '../services/auth/AuthContext';

export interface HeaderViewModelState {
  isSearchOpen: boolean;
  isAuthOpen: boolean;
  isMuted: boolean;
  isMobileMenuOpen: boolean;
  activeWebsite: WebsiteModel | null;
  isInsideModule: boolean;
  isAuthenticated: boolean;
  isGuest: boolean;
  userDisplayName: string;
  userAvatarUrl?: string;
  allWebsites: WebsiteModel[];
}

export interface HeaderViewModelActions {
  openSearch: () => void;
  closeSearch: () => void;
  openAuth: () => void;
  closeAuth: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleAudioMute: () => void;
  signOut: () => Promise<void>;
  onNavigateHome: () => void;
  onNavigateSite: (site: WebsiteModel) => void;
}

export type HeaderViewModel = HeaderViewModelState & HeaderViewModelActions;

export function useHeaderViewModel(): HeaderViewModel {
  const location = useLocation();
  const { user, profile, isAuthenticated, isGuest, signOut } = useAuth();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => audioPresenter.isMuted());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine active website from current URL route
  const pathParts = location.pathname.split('/').filter(Boolean);
  const isInsideModule = pathParts[0] === 'site' && Boolean(pathParts[1]);
  const activeWebsite = isInsideModule
    ? WebsiteModelRepository.getById(pathParts[1]) || null
    : null;

  // Setup global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const cleanup = platformPresenter.setupGlobalShortcuts(() => {
      setIsSearchOpen(true);
      audioPresenter.playSound('whoosh');
    });
    return cleanup;
  }, []);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
    audioPresenter.playSound('whoosh');
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const openAuth = useCallback(() => {
    setIsAuthOpen(true);
    audioPresenter.playSound('pop');
  }, []);

  const closeAuth = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    audioPresenter.playSound('tap');
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleAudioMute = useCallback(() => {
    const muted = audioPresenter.toggleMute();
    setIsMuted(muted);
  }, []);

  const handleNavigateHome = useCallback(() => {
    audioPresenter.onNavigation();
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavigateSite = useCallback((site: WebsiteModel) => {
    audioPresenter.onNavigation();
    setIsMobileMenuOpen(false);
  }, []);

  return {
    isSearchOpen,
    isAuthOpen,
    isMuted,
    isMobileMenuOpen,
    activeWebsite,
    isInsideModule,
    isAuthenticated,
    isGuest,
    userDisplayName: profile?.display_name || user?.email || 'Guest',
    userAvatarUrl: profile?.avatar_url,
    allWebsites: WebsiteModelRepository.getAll(),
    openSearch,
    closeSearch,
    openAuth,
    closeAuth,
    toggleMobileMenu,
    closeMobileMenu,
    toggleAudioMute,
    signOut,
    onNavigateHome: handleNavigateHome,
    onNavigateSite: handleNavigateSite,
  };
}

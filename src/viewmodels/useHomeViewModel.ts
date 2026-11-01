// ================================================================================
// VIEWMODEL LAYER: Home ViewModel
// Manages reactive state, queries, categorization & user actions for the homepage
// ================================================================================

import { useState, useMemo, useEffect, useCallback } from 'react';
import { WebsiteModel, WebsiteModelRepository } from '../models/website.model';
import { platformPresenter } from '../presenters/PlatformPresenter';
import { audioPresenter } from '../presenters/AudioPresenter';

export interface HomeViewModelState {
  searchQuery: string;
  selectedCategory: string;
  favoriteIds: string[];
  recentIds: string[];
  allWebsites: WebsiteModel[];
  featuredWebsites: WebsiteModel[];
  filteredWebsites: WebsiteModel[];
  recentWebsites: WebsiteModel[];
  favoriteWebsites: WebsiteModel[];
  categoryCounts: Record<string, number>;
  totalWebsitesCount: number;
}

export interface HomeViewModelActions {
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  toggleFavorite: (id: string) => void;
  openWebsite: (id: string) => void;
  clearSearch: () => void;
}

export type HomeViewModel = HomeViewModelState & HomeViewModelActions;

export function useHomeViewModel(): HomeViewModel {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() =>
    platformPresenter.getFavorites()
  );
  const [recentIds, setRecentIds] = useState<string[]>(() =>
    platformPresenter.getRecentVisits()
  );

  const allWebsites = useMemo(() => WebsiteModelRepository.getAll(), []);
  const featuredWebsites = useMemo(() => WebsiteModelRepository.getFeatured(), []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allWebsites.length };
    allWebsites.forEach((site) => {
      counts[site.category] = (counts[site.category] || 0) + 1;
    });
    return counts;
  }, [allWebsites]);

  // Compute filtered websites based on category & query
  const filteredWebsites = useMemo(() => {
    return platformPresenter.searchWebsites(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  // Compute recently visited models
  const recentWebsites = useMemo(() => {
    return platformPresenter.getWebsitesByIds(recentIds);
  }, [recentIds]);

  // Compute favorited models
  const favoriteWebsites = useMemo(() => {
    return platformPresenter.getWebsitesByIds(favoriteIds);
  }, [favoriteIds]);

  // Actions
  const handleSetSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleSetCategory = useCallback((category: string) => {
    setSelectedCategory(category);
    audioPresenter.playSound('tap');
  }, []);

  const handleToggleFavorite = useCallback(
    (id: string) => {
      const updated = platformPresenter.toggleFavorite(id, favoriteIds);
      setFavoriteIds(updated);
    },
    [favoriteIds]
  );

  const handleOpenWebsite = useCallback(
    (id: string) => {
      const updated = platformPresenter.recordVisit(id, recentIds);
      setRecentIds(updated);
    },
    [recentIds]
  );

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    audioPresenter.playSound('tap');
  }, []);

  return {
    searchQuery,
    selectedCategory,
    favoriteIds,
    recentIds,
    allWebsites,
    featuredWebsites,
    filteredWebsites,
    recentWebsites,
    favoriteWebsites,
    categoryCounts,
    totalWebsitesCount: allWebsites.length,
    setSearchQuery: handleSetSearchQuery,
    setSelectedCategory: handleSetCategory,
    toggleFavorite: handleToggleFavorite,
    openWebsite: handleOpenWebsite,
    clearSearch: handleClearSearch,
  };
}

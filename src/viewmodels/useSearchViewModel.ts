// ================================================================================
// VIEWMODEL LAYER: Search ViewModel
// Manages search query, results filtering, keyboard navigation, and selection
// ================================================================================

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebsiteModel } from '../models/website.model';
import { platformPresenter } from '../presenters/PlatformPresenter';
import { audioPresenter } from '../presenters/AudioPresenter';

export interface SearchViewModelState {
  query: string;
  results: WebsiteModel[];
  selectedIndex: number;
}

export interface SearchViewModelActions {
  setQuery: (query: string) => void;
  clearQuery: () => void;
  selectWebsite: (site: WebsiteModel, onClose?: () => void) => void;
  handleKeyDown: (e: React.KeyboardEvent, onClose?: () => void) => void;
  setSelectedIndex: (idx: number) => void;
}

export type SearchViewModel = SearchViewModelState & SearchViewModelActions;

export function useSearchViewModel(isOpen: boolean, onClose?: () => void): SearchViewModel {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const results = useMemo(() => {
    return platformPresenter.searchWebsites(query);
  }, [query]);

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const selectWebsite = useCallback(
    (site: WebsiteModel, closeCallback?: () => void) => {
      audioPresenter.onNavigation();
      if (closeCallback) closeCallback();
      else if (onClose) onClose();
      navigate(site.routePath);
    },
    [navigate, onClose]
  );

  const clearQuery = useCallback(() => {
    setQuery('');
    audioPresenter.playSound('tap');
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, closeCallback?: () => void) => {
      if (e.key === 'Escape') {
        if (closeCallback) closeCallback();
        else if (onClose) onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        audioPresenter.playSound('tap');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        audioPresenter.playSound('tap');
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        selectWebsite(results[selectedIndex], closeCallback || onClose);
      }
    },
    [results, selectedIndex, selectWebsite, onClose]
  );

  return {
    query,
    results,
    selectedIndex,
    setQuery,
    clearQuery,
    selectWebsite,
    handleKeyDown,
    setSelectedIndex,
  };
}

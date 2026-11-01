// ================================================================================
// PRESENTER LAYER: Platform Presenter
// Orchestrates global platform interactions, favorites, recents & shortcuts
// ================================================================================

import { audioPresenter } from './AudioPresenter';
import { WebsiteModel, WebsiteModelRepository } from '../models/website.model';

const STORAGE_KEY_FAVS = 'websites_user_favorites';
const STORAGE_KEY_RECENT = 'websites_user_recent_visits';

export class PlatformPresenter {
  private static instance: PlatformPresenter;

  private constructor() {}

  public static getInstance(): PlatformPresenter {
    if (!PlatformPresenter.instance) {
      PlatformPresenter.instance = new PlatformPresenter();
    }
    return PlatformPresenter.instance;
  }

  // --- Favorites Management ---
  public getFavorites(): string[] {
    if (typeof localStorage === 'undefined') return ['chat', 'cookfood', 'doctor'];
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVS);
      return saved ? JSON.parse(saved) : ['chat', 'cookfood', 'doctor'];
    } catch {
      return ['chat', 'cookfood', 'doctor'];
    }
  }

  public toggleFavorite(id: string, currentFavs: string[]): string[] {
    const isAdding = !currentFavs.includes(id);
    const updated = isAdding
      ? [...currentFavs, id]
      : currentFavs.filter((item) => item !== id);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(updated));
    }

    if (isAdding) {
      audioPresenter.onSuccess();
    } else {
      audioPresenter.playSound('tap');
    }

    return updated;
  }

  // --- Recently Visited Tracking ---
  public getRecentVisits(): string[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RECENT);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  public recordVisit(id: string, currentRecents: string[]): string[] {
    const updated = [id, ...currentRecents.filter((item) => item !== id)].slice(0, 8);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(updated));
    }
    audioPresenter.onNavigation();
    return updated;
  }

  // --- Website Discovery ---
  public getWebsiteById(id: string): WebsiteModel | undefined {
    return WebsiteModelRepository.getById(id);
  }

  public getWebsitesByIds(ids: string[]): WebsiteModel[] {
    return ids
      .map((id) => this.getWebsiteById(id))
      .filter((w): w is WebsiteModel => Boolean(w));
  }

  public searchWebsites(query: string, category?: string): WebsiteModel[] {
    let results = WebsiteModelRepository.getAll();
    if (category && category !== 'All') {
      results = results.filter((site) => site.category === category);
    }
    if (!query.trim()) return results;

    const clean = query.toLowerCase().trim();
    return results.filter(
      (site) =>
        site.name.toLowerCase().includes(clean) ||
        site.shortDescription.toLowerCase().includes(clean) ||
        site.category.toLowerCase().includes(clean) ||
        site.tags.some((t) => t.toLowerCase().includes(clean)) ||
        site.techStack.toLowerCase().includes(clean)
    );
  }

  // --- Keyboard Shortcuts Register ---
  public setupGlobalShortcuts(onSearchTrigger: () => void): () => void {
    if (typeof window === 'undefined') return () => {};

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onSearchTrigger();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }
}

export const platformPresenter = PlatformPresenter.getInstance();

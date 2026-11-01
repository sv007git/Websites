// ================================================================================
// WEBSITES — Favorites Section Component (MVVP View Wrapper)
// ================================================================================

import React from 'react';
import { FavoritesSectionView } from '../../views/home/FavoritesSectionView';
import { WebsiteModelRepository } from '../../models/website.model';

export interface FavoritesSectionProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onOpenWebsite?: (id: string) => void;
}

export const FavoritesSection: React.FC<FavoritesSectionProps> = ({
  favoriteIds,
  onToggleFavorite,
  onOpenWebsite,
}) => {
  const websites = favoriteIds
    .map((id) => WebsiteModelRepository.getById(id))
    .filter((w): w is NonNullable<typeof w> => Boolean(w));

  return (
    <FavoritesSectionView
      favoriteWebsites={websites}
      onToggleFavorite={onToggleFavorite}
      onOpenWebsite={onOpenWebsite}
    />
  );
};

export default FavoritesSection;

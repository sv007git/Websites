import React from 'react';
import { Star } from 'lucide-react';
import { WebsiteEntry, getWebsiteById } from '../../registry/websiteRegistry';
import { WebsiteCard } from './WebsiteCard';

interface FavoritesSectionProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onOpenWebsite?: (id: string) => void;
}

export const FavoritesSection: React.FC<FavoritesSectionProps> = ({
  favoriteIds,
  onToggleFavorite,
  onOpenWebsite,
}) => {
  const favoriteWebsites = favoriteIds
    .map((id) => getWebsiteById(id))
    .filter((site): site is WebsiteEntry => site !== undefined);

  if (favoriteWebsites.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Your Bookmarked Websites
        </h2>
        <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400">
          {favoriteWebsites.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteWebsites.map((site) => (
          <WebsiteCard
            key={site.id}
            website={site}
            isFavorite={true}
            onToggleFavorite={onToggleFavorite}
            onOpenWebsite={onOpenWebsite}
          />
        ))}
      </div>
    </section>
  );
};

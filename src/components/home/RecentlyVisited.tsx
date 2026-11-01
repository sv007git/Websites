// ================================================================================
// WEBSITES — Recently Visited Component (MVVP View Wrapper)
// ================================================================================

import React from 'react';
import { RecentlyVisitedView } from '../../views/home/RecentlyVisitedView';
import { WebsiteModelRepository } from '../../models/website.model';

export interface RecentlyVisitedProps {
  recentIds: string[];
  onOpenWebsite?: (id: string) => void;
}

export const RecentlyVisited: React.FC<RecentlyVisitedProps> = ({ recentIds, onOpenWebsite }) => {
  const websites = recentIds
    .map((id) => WebsiteModelRepository.getById(id))
    .filter((w): w is NonNullable<typeof w> => Boolean(w));

  return <RecentlyVisitedView recentWebsites={websites} onOpenWebsite={onOpenWebsite} />;
};

export default RecentlyVisited;

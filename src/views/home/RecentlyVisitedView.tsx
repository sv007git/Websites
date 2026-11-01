// ================================================================================
// VIEW LAYER: RecentlyVisitedView
// Pure presentational component for recent apps carousel
// ================================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { History } from 'lucide-react';
import { WebsiteModel } from '../../models/website.model';

export interface RecentlyVisitedViewProps {
  recentWebsites: WebsiteModel[];
  onOpenWebsite?: (id: string) => void;
}

export const RecentlyVisitedView: React.FC<RecentlyVisitedViewProps> = ({
  recentWebsites,
  onOpenWebsite,
}) => {
  if (recentWebsites.length === 0) return null;

  return (
    <div className="mb-8 p-4 sm:p-5 rounded-3xl bg-slate-100/70 dark:bg-midnight-900/60 border border-slate-200/80 dark:border-midnight-800">
      <div className="flex items-center gap-2 mb-3">
        <History className="w-4 h-4 text-slate-500" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Recently Visited Websites
        </h3>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
        {recentWebsites.slice(0, 6).map((site) => (
          <Link
            key={site.id}
            to={site.routePath}
            onClick={() => onOpenWebsite?.(site.id)}
            className="flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-white dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 shadow-xs hover:border-rose-400 dark:hover:border-rose-500 transition-all shrink-0 group"
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-xs"
              style={{ backgroundColor: site.accentColor }}
            >
              {site.name.charAt(0)}
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 truncate max-w-[120px]">
                {site.name}
              </span>
              <span className="block text-[10px] text-slate-400 truncate max-w-[120px]">
                {site.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

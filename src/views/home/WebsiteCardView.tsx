// ================================================================================
// VIEW LAYER: WebsiteCardView
// Pure presentational component rendering an individual super website card
// ================================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  UtensilsCrossed,
  Activity,
  Briefcase,
  Code,
  Crown,
  Sunrise,
  Flame,
  MonitorPlay,
  PlaySquare,
  BookOpen,
  Layers,
  Star,
  ArrowRight,
} from 'lucide-react';
import { WebsiteModel } from '../../models/website.model';

export interface WebsiteCardViewProps {
  website: WebsiteModel;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenWebsite?: (id: string) => void;
}

const renderIcon = (name: string, className: string = 'w-6 h-6') => {
  switch (name) {
    case 'Heart':
      return <Heart className={className} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Code':
      return <Code className={className} />;
    case 'Crown':
      return <Crown className={className} />;
    case 'Sunrise':
      return <Sunrise className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'MonitorPlay':
      return <MonitorPlay className={className} />;
    case 'PlaySquare':
      return <PlaySquare className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Layers':
    default:
      return <Layers className={className} />;
  }
};

export const WebsiteCardView: React.FC<WebsiteCardViewProps> = ({
  website,
  isFavorite,
  onToggleFavorite,
  onOpenWebsite,
}) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(website.id);
  };

  const handleLaunch = () => {
    if (onOpenWebsite) {
      onOpenWebsite(website.id);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200/90 dark:border-midnight-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-midnight-700 transition-all duration-200 hover:-translate-y-1">
      {/* Top Bar: Icon, Category & Star */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
            style={{ backgroundColor: website.accentColor }}
          >
            {renderIcon(website.iconName, 'w-6 h-6')}
          </div>

          <div className="flex items-center gap-1.5">
            {website.statsBadge && (
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-midnight-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-midnight-700">
                {website.statsBadge}
              </span>
            )}
            <button
              onClick={handleFavoriteClick}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              className={`p-1.5 rounded-full transition-colors ${
                isFavorite
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
                  : 'text-slate-300 hover:text-amber-400 dark:text-slate-600 dark:hover:text-amber-300'
              }`}
            >
              <Star
                className="w-4 h-4"
                fill={isFavorite ? 'currentColor' : 'none'}
              />
            </button>
          </div>
        </div>

        <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-1">
          {website.category}
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
          {website.name}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
          {website.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {website.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-midnight-800 text-slate-600 dark:text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / CTA Launch Button */}
      <div className="pt-3 border-t border-slate-100 dark:border-midnight-800 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 dark:text-slate-500 truncate max-w-[150px]">
          {website.techStack}
        </span>

        <Link
          to={website.routePath}
          onClick={handleLaunch}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white shadow-sm hover:shadow transition-all group-hover:gap-2"
          style={{ backgroundColor: website.accentColor }}
        >
          <span>Open</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

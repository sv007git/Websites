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
  ExternalLink,
} from 'lucide-react';
import { WebsiteEntry } from '../../registry/websiteRegistry';
import { unifiedAudio } from '../../services/audio/UnifiedAudioEngine';

interface WebsiteCardProps {
  website: WebsiteEntry;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenWebsite?: (id: string) => void;
}

// Icon mapping helper
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

export const WebsiteCard: React.FC<WebsiteCardProps> = ({
  website,
  isFavorite,
  onToggleFavorite,
  onOpenWebsite,
}) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    unifiedAudio.playPop();
    onToggleFavorite(website.id);
  };

  const handleLaunch = () => {
    unifiedAudio.playPop();
    if (onOpenWebsite) {
      onOpenWebsite(website.id);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200/90 dark:border-midnight-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-midnight-700 transition-all duration-200 hover:-translate-y-1">
      {/* Top Bar: Icon, Category & Star */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Brand Icon Box */}
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
            {/* Star Favorite Button */}
            <button
              onClick={handleFavoriteClick}
              title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              className="p-1.5 rounded-full text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors focus:outline-none"
            >
              <Star
                className={`w-4 h-4 transition-all ${
                  isFavorite ? 'fill-amber-400 text-amber-500 scale-110' : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Category Label */}
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 block">
          {website.category}
        </span>

        {/* Website Title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors mb-2">
          {website.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
          {website.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mb-5">
          {website.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-midnight-950 text-slate-600 dark:text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Tech Stack & Launch Button */}
      <div className="pt-4 border-t border-slate-100 dark:border-midnight-800 flex items-center justify-between gap-3">
        <span className="text-[11px] font-medium text-slate-400 truncate max-w-[150px]">
          {website.techStack}
        </span>

        <Link
          to={website.routePath}
          onClick={handleLaunch}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 shadow-sm transition-all focus:outline-none shrink-0"
        >
          <span>Open</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

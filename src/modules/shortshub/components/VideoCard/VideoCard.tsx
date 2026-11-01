import React, { useState, useEffect } from 'react';
import { VideoItem } from '../../types';
import { Play, Heart, Clock } from 'lucide-react';
import { isFavorite, toggleFavorite } from '../../services/storage/db';

interface VideoCardProps {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
  onFavoriteChanged?: () => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay, onFavoriteChanged }) => {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    let mounted = true;
    isFavorite(video.videoId).then(f => {
      if (mounted) setFav(f);
    });
    return () => {
      mounted = false;
    };
  }, [video.videoId]);

  const handleToggleFav = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = await toggleFavorite(video.videoId);
    setFav(updated);
    if (onFavoriteChanged) onFavoriteChanged();
  };

  const getLanguageBadge = (lang: string) => {
    switch (lang) {
      case 'Tamil':
        return { text: 'தமிழ்', bg: 'bg-orange-500/80 text-white' };
      case 'English':
        return { text: 'English', bg: 'bg-blue-500/80 text-white' };
      case 'Telugu':
        return { text: 'తెలుగు', bg: 'bg-rose-500/80 text-white' };
      default:
        return { text: lang, bg: 'bg-slate-700 text-white' };
    }
  };

  const langBadge = getLanguageBadge(video.language);

  return (
    <div
      onClick={() => onPlay(video)}
      className="group relative flex flex-col rounded-2xl bg-dark-900 border border-slate-800/80 overflow-hidden shadow-lg hover:border-slate-700 hover:shadow-brand-500/5 transition-all duration-300 cursor-pointer"
    >
      {/* 9:16 Aspect Ratio Thumbnail Container */}
      <div className="relative aspect-[9/16] w-full bg-dark-950 overflow-hidden">
        <img
          src={video.thumbnail || `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm backdrop-blur-md ${langBadge.bg}`}>
            {langBadge.text}
          </span>

          <button
            onClick={handleToggleFav}
            className="p-1.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white transition pointer-events-auto"
            aria-label="Favorite"
          >
            <Heart size={14} className={fav ? 'fill-brand-500 text-brand-500' : 'text-white'} />
          </button>
        </div>

        {/* Center Play Icon Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-brand-500/90 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 transform scale-75 group-hover:scale-100 transition-transform">
            <Play size={20} className="fill-white ml-0.5" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2.5 right-2.5 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-semibold text-slate-200 flex items-center gap-1">
          <Clock size={10} />
          <span>{video.duration}s</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-3 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-brand-400 block mb-1">
            {video.subcategory || video.category}
          </span>
          <h3 className="text-xs font-semibold text-white line-clamp-2 leading-snug group-hover:text-brand-300 transition-colors">
            {video.title}
          </h3>
          {video.titleNative && (
            <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-medium">
              {video.titleNative}
            </p>
          )}
        </div>

        <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
          <span className="truncate max-w-[120px] font-medium text-slate-300">
            {video.channelName}
          </span>
          <span className="text-[10px] text-slate-500">Shorts</span>
        </div>
      </div>
    </div>
  );
};

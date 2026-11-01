import React, { useEffect, useState } from 'react';
import { VideoItem, MainCategory, ContentLanguage } from '../../types';
import { DiscoveryEngine } from '../../services/discovery/discoveryEngine';
import { VideoCard } from '../../components/VideoCard/VideoCard';
import categoriesData from '../../database/categories.json';
import {
  Sparkles,
  Flame,
  Globe2,
  GraduationCap,
  Smile,
  HeartHandshake,
  Users,
  Search,
  Download,
  CheckCircle2,
  SlidersHorizontal,
  PlusCircle,
  Play
} from 'lucide-react';

interface HomePageProps {
  onPlayVideo: (video: VideoItem, playlist: VideoItem[]) => void;
  onOpenLanguageModal: () => void;
  onOpenContentEditor: () => void;
  onNavigateToWatchlist: () => void;
  onNavigateToExplore: (category?: MainCategory) => void;
  selectedLanguages: ContentLanguage[];
  todayWatchedCount: number;
}

export const HomePage: React.FC<HomePageProps> = ({
  onPlayVideo,
  onOpenLanguageModal,
  onOpenContentEditor,
  onNavigateToWatchlist,
  onNavigateToExplore,
  selectedLanguages,
  todayWatchedCount,
}) => {
  const [forYouVideos, setForYouVideos] = useState<VideoItem[]>([]);
  const [eduVideos, setEduVideos] = useState<VideoItem[]>([]);
  const [funVideos, setFunVideos] = useState<VideoItem[]>([]);
  const [famVideos, setFamVideos] = useState<VideoItem[]>([]);
  const [lifeVideos, setLifeVideos] = useState<VideoItem[]>([]);
  const [tamilVideos, setTamilVideos] = useState<VideoItem[]>([]);
  const [englishVideos, setEnglishVideos] = useState<VideoItem[]>([]);
  const [teluguVideos, setTeluguVideos] = useState<VideoItem[]>([]);
  const [allFiltered, setAllFiltered] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadFeeds = async () => {
    setLoading(true);
    try {
      const filtered = await DiscoveryEngine.getFilteredVideos();
      setAllFiltered(filtered);

      const forYou = await DiscoveryEngine.getForYouRecommendations(12);
      setForYouVideos(forYou);

      setEduVideos(filtered.filter(v => v.category === 'Education').slice(0, 8));
      setFunVideos(filtered.filter(v => v.category === 'Fun and Entertainment').slice(0, 8));
      setFamVideos(filtered.filter(v => v.category === 'Family').slice(0, 8));
      setLifeVideos(filtered.filter(v => v.category === 'Friends and Lifestyle').slice(0, 8));

      setTamilVideos(filtered.filter(v => v.language === 'Tamil').slice(0, 8));
      setEnglishVideos(filtered.filter(v => v.language === 'English').slice(0, 8));
      setTeluguVideos(filtered.filter(v => v.language === 'Telugu').slice(0, 8));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeeds();
  }, [selectedLanguages]);

  const getLanguageLabel = () => {
    if (selectedLanguages.length === 3) return 'தமிழ் • Eng • తెలుగు';
    return selectedLanguages.map(l => (l === 'Tamil' ? 'தமிழ்' : l === 'Telugu' ? 'తెలుగు' : 'Eng')).join(' + ');
  };

  const categoryIcons: Record<string, any> = {
    'Education': GraduationCap,
    'Fun and Entertainment': Smile,
    'Family': HeartHandshake,
    'Friends and Lifestyle': Users,
  };

  return (
    <div className="min-h-screen pb-24 text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-dark-950/90 backdrop-blur-xl border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-brand-600 via-rose-500 to-brand-coral flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
              <Play size={18} className="fill-white ml-0.5" />
            </div>
            <div>
              <h1 className="text-base font-black tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                ShortsHub
              </h1>
              <span className="text-[10px] text-brand-400 font-semibold tracking-wider uppercase">
                Curated Player
              </span>
            </div>
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-2">
            {/* Language Selector Pill */}
            <button
              onClick={onOpenLanguageModal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-dark-850 hover:bg-dark-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition active:scale-95 shadow-sm"
              title="Change content languages"
            >
              <Globe2 size={13} className="text-brand-400" />
              <span className="max-w-[110px] truncate text-[11px]">{getLanguageLabel()}</span>
            </button>

            {/* Quick Content Editor */}
            <button
              onClick={onOpenContentEditor}
              className="p-2 rounded-full bg-dark-850 hover:bg-dark-800 border border-slate-700/80 text-slate-300 hover:text-white transition active:scale-95"
              title="Add or edit curated videos"
            >
              <PlusCircle size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4 space-y-6">
        {/* Prominent Daily Download & Watchlist Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900/60 via-dark-900 to-dark-850 border border-brand-500/30 p-4 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Today's Daily Watchlist
              </span>
            </div>
            <div className="px-2.5 py-0.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-xs font-black text-brand-300">
              {todayWatchedCount} Watched
            </div>
          </div>

          <p className="text-xs text-slate-300 mb-4 leading-relaxed">
            Every Short you play is saved locally. Download them anytime with your SnapTube workflow!
          </p>

          <button
            onClick={onNavigateToWatchlist}
            className="w-full py-3 px-4 bg-gradient-to-r from-brand-600 via-rose-500 to-brand-coral hover:opacity-95 active:scale-[0.99] text-white text-xs font-bold rounded-2xl shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 transition"
          >
            <Download size={16} />
            DOWNLOAD TODAY'S SHORTS
          </button>
        </section>

        {/* Category Shortcuts */}
        <section>
          <div className="flex items-center justify-between mb-2.5 px-0.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Curated Categories
            </h2>
            <button
              onClick={() => onNavigateToExplore()}
              className="text-xs text-brand-400 hover:text-brand-300 font-semibold"
            >
              See All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {categoriesData.map(cat => {
              const Icon = categoryIcons[cat.name] || Sparkles;
              return (
                <div
                  key={cat.id}
                  onClick={() => onNavigateToExplore(cat.name as MainCategory)}
                  className={`relative p-3 rounded-2xl bg-gradient-to-br ${cat.color} bg-opacity-20 border border-white/10 hover:border-white/25 cursor-pointer shadow-md transition-all active:scale-95 group overflow-hidden`}
                >
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="w-8 h-8 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center text-white mb-2">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white group-hover:text-slate-100 transition leading-snug">
                        {cat.name}
                      </h3>
                      <p className="text-[10px] text-white/80 truncate mt-0.5 font-medium">
                        {cat.nameTamil}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* For You Section */}
        {forYouVideos.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3 px-0.5">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-brand-400" />
                <h2 className="text-sm font-bold text-white tracking-tight">For You</h2>
              </div>
              <button
                onClick={() => onPlayVideo(forYouVideos[0], forYouVideos)}
                className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
              >
                <Play size={12} className="fill-brand-400" /> Play All
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {forYouVideos.slice(0, 4).map(video => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={v => onPlayVideo(v, forYouVideos)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Education Feed */}
        {eduVideos.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3 px-0.5">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-blue-400" />
                <h2 className="text-sm font-bold text-white tracking-tight">Education & Learning</h2>
              </div>
              <button
                onClick={() => onNavigateToExplore('Education')}
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
              >
                Explore More
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {eduVideos.slice(0, 4).map(video => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={v => onPlayVideo(v, eduVideos)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Fun & Entertainment Feed */}
        {funVideos.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3 px-0.5">
              <div className="flex items-center gap-2">
                <Smile size={16} className="text-pink-400" />
                <h2 className="text-sm font-bold text-white tracking-tight">Fun & Comedy</h2>
              </div>
              <button
                onClick={() => onNavigateToExplore('Fun and Entertainment')}
                className="text-xs text-pink-400 hover:text-pink-300 font-semibold"
              >
                Explore More
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {funVideos.slice(0, 4).map(video => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={v => onPlayVideo(v, funVideos)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Family Feed */}
        {famVideos.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3 px-0.5">
              <div className="flex items-center gap-2">
                <HeartHandshake size={16} className="text-amber-400" />
                <h2 className="text-sm font-bold text-white tracking-tight">Family & Cooking</h2>
              </div>
              <button
                onClick={() => onNavigateToExplore('Family')}
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
              >
                Explore More
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {famVideos.slice(0, 4).map(video => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={v => onPlayVideo(v, famVideos)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Friends & Lifestyle Feed */}
        {lifeVideos.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3 px-0.5">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-teal-400" />
                <h2 className="text-sm font-bold text-white tracking-tight">Lifestyle & Motivation</h2>
              </div>
              <button
                onClick={() => onNavigateToExplore('Friends and Lifestyle')}
                className="text-xs text-teal-400 hover:text-teal-300 font-semibold"
              >
                Explore More
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {lifeVideos.slice(0, 4).map(video => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={v => onPlayVideo(v, lifeVideos)}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

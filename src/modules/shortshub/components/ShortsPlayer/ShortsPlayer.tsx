import React, { useEffect, useRef, useState, useCallback } from 'react';
import { VideoItem } from '../../types';
import { loadYouTubeIframeApi } from '../../services/youtube/youtubeApi';
import { recordViewedShort, toggleFavorite, isFavorite } from '../../services/storage/db';
import {
  Heart,
  Volume2,
  VolumeX,
  Share2,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  X,
  AlertTriangle,
  RotateCcw,
  Clock,
  CheckCircle2,
  Sparkles,
  Download
} from 'lucide-react';

interface ShortsPlayerProps {
  videos: VideoItem[];
  initialIndex?: number;
  onClose: () => void;
  onVideoChange?: (video: VideoItem, index: number) => void;
}

export const ShortsPlayer: React.FC<ShortsPlayerProps> = ({
  videos,
  initialIndex = 0,
  onClose,
  onVideoChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playerError, setPlayerError] = useState<string | null>(null);
  const [showHeartAnim, setShowHeartAnim] = useState(false);
  const [heartAnimPos, setHeartAnimPos] = useState({ x: 0, y: 0 });
  const [isRecorded, setIsRecorded] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const lastTapRef = useRef<number>(0);
  const playStartTimeRef = useRef<number>(0);

  const currentVideo = videos[currentIndex];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 2500);
  };

  // Check favorite status for current video
  useEffect(() => {
    if (!currentVideo) return;
    let isMounted = true;
    isFavorite(currentVideo.videoId).then(fav => {
      if (isMounted) setIsFav(fav);
    });
    return () => {
      isMounted = false;
    };
  }, [currentVideo]);

  // Clean up player on unmount
  const destroyPlayer = useCallback(() => {
    if (playerRef.current) {
      try {
        if (typeof playerRef.current.destroy === 'function') {
          playerRef.current.destroy();
        }
      } catch (e) {
        // ignore
      }
      playerRef.current = null;
    }
  }, []);

  // Initialize YouTube Player for current video
  useEffect(() => {
    if (!currentVideo) return;

    let isCancelled = false;
    setIsLoading(true);
    setPlayerError(null);
    setIsRecorded(false);
    playStartTimeRef.current = Date.now();

    if (onVideoChange) {
      onVideoChange(currentVideo, currentIndex);
    }

    destroyPlayer();

    loadYouTubeIframeApi().then(() => {
      if (isCancelled || !iframeContainerRef.current) return;

      const playerDivId = `yt-player-${currentVideo.videoId}-${Date.now()}`;
      iframeContainerRef.current.innerHTML = `<div id="${playerDivId}" class="w-full h-full"></div>`;

      try {
        playerRef.current = new window.YT.Player(playerDivId, {
          videoId: currentVideo.videoId,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            loop: 1,
            playsinline: 1,
            playlist: currentVideo.videoId,
            origin: window.location.origin
          },
          events: {
            onReady: (event: any) => {
              if (isCancelled) return;
              setIsLoading(false);
              if (isMuted) {
                event.target.mute();
              } else {
                event.target.unMute();
              }
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              if (isCancelled) return;
              // YT.PlayerState.PLAYING is 1
              if (event.data === 1) {
                setIsPlaying(true);
                setIsLoading(false);
                // Record to daily viewed database on successful playback
                if (!isRecorded) {
                  setIsRecorded(true);
                  const duration = typeof event.target.getDuration === 'function' ? event.target.getDuration() : currentVideo.duration;
                  recordViewedShort(currentVideo, Math.round(duration || 0), false);
                }
              } else if (event.data === 2) {
                // YT.PlayerState.PAUSED
                setIsPlaying(false);
              } else if (event.data === 0) {
                // YT.PlayerState.ENDED
                recordViewedShort(currentVideo, currentVideo.duration, true);
              }
            },
            onError: (event: any) => {
              if (isCancelled) return;
              setIsLoading(false);
              const code = event.data;
              if (code === 101 || code === 150) {
                setPlayerError('Embedding is disabled by the creator for this video. You can open it directly in YouTube.');
              } else if (code === 100) {
                setPlayerError('Video not found or has been made private.');
              } else {
                setPlayerError('Unable to load video playback. Please check your internet connection.');
              }
            }
          }
        });
      } catch (err: any) {
        if (!isCancelled) {
          setIsLoading(false);
          setPlayerError('Failed to initialize YouTube player.');
        }
      }
    });

    return () => {
      isCancelled = true;
      destroyPlayer();
    };
  }, [currentIndex, currentVideo, destroyPlayer]);

  // Navigate to next or previous video
  const goToNext = useCallback(() => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      showToast("You've reached the end of the feed!");
    }
  }, [currentIndex, videos.length]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Handle Swipe Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndY.current = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY.current;
    if (diff > 55) {
      // Swiped Up -> Next video
      goToNext();
    } else if (diff < -55) {
      // Swiped Down -> Previous video
      goToPrev();
    }
  };

  // Handle Tap and Double Tap
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    const timeDiff = now - lastTapRef.current;
    lastTapRef.current = now;

    if (timeDiff < 300) {
      // Double tap -> Like
      handleDoubleTapLike(e);
    }
  };

  const handleDoubleTapLike = async (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setHeartAnimPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setShowHeartAnim(true);
      setTimeout(() => setShowHeartAnim(false), 800);
    }
    if (!isFav && currentVideo) {
      await toggleFavorite(currentVideo.videoId);
      setIsFav(true);
      showToast('Added to Favorites ❤️');
    }
  };

  const handleToggleFavorite = async () => {
    if (!currentVideo) return;
    const newState = await toggleFavorite(currentVideo.videoId);
    setIsFav(newState);
    showToast(newState ? 'Added to Favorites ❤️' : 'Removed from Favorites');
  };

  const handleToggleMute = () => {
    if (playerRef.current && typeof playerRef.current.isMuted === 'function') {
      if (playerRef.current.isMuted()) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } else {
      setIsMuted(prev => !prev);
    }
  };

  const handleShare = async () => {
    if (!currentVideo) return;
    const url = `https://www.youtube.com/shorts/${currentVideo.videoId}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentVideo.title,
          text: `Check out this ${currentVideo.language} short: "${currentVideo.title}"`,
          url
        });
        showToast('Shared successfully!');
      } catch (e) {
        // user cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(url);
      showToast('Video URL copied to clipboard! (Ready for SnapTube)');
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        goToNext();
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        goToPrev();
      } else if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'm') {
        handleToggleMute();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, onClose]);

  if (!currentVideo) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center text-white">
        <p>No video available in this feed.</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-brand-500 rounded-xl">Back</button>
      </div>
    );
  }

  const getLanguageTagClass = (lang: string) => {
    switch (lang) {
      case 'Tamil': return 'bg-orange-500/20 text-orange-300 border-orange-500/40';
      case 'English': return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'Telugu': return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      default: return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleContainerClick}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center select-none overflow-hidden"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="absolute top-16 z-50 px-4 py-2 bg-dark-900/90 text-white text-xs font-semibold rounded-full border border-slate-700 shadow-xl backdrop-blur-md animate-fade-in flex items-center gap-2">
          <Sparkles size={14} className="text-brand-400" />
          {toastMessage}
        </div>
      )}

      {/* Main 9:16 Video Player Card */}
      <div className="relative w-full h-full max-w-md sm:h-[95vh] sm:rounded-3xl sm:border sm:border-slate-800 bg-black overflow-hidden flex flex-col justify-between shadow-2xl">

        {/* Top Header Controls */}
        <div className="absolute top-0 left-0 right-0 z-30 p-4 pt-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-auto">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10 transition active:scale-95"
            aria-label="Back"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-xs px-2.5 py-1 rounded-full font-bold tracking-wide border backdrop-blur-md ${getLanguageTagClass(currentVideo.language)}`}>
              {currentVideo.language === 'Tamil' ? 'தமிழ்' : currentVideo.language === 'Telugu' ? 'తెలుగు' : 'English'}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-black/40 text-slate-200 border border-white/10 backdrop-blur-md">
              {currentVideo.category}
            </span>
          </div>

          <button
            onClick={handleToggleMute}
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10 transition active:scale-95"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>

        {/* Center Video Player Area */}
        <div className="relative w-full h-full flex items-center justify-center bg-dark-950">
          <div ref={iframeContainerRef} className="w-full h-full pointer-events-auto" />

          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-950/90 z-20 pointer-events-none">
              <div className="w-12 h-12 rounded-full border-4 border-brand-500/20 border-t-brand-500 animate-spin mb-3"></div>
              <p className="text-xs font-medium text-slate-300">Loading YouTube Short...</p>
            </div>
          )}

          {/* Error / Restriction Fallback */}
          {playerError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-950/95 z-30 p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <AlertTriangle size={28} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Video Unavailable for Embedding</h3>
              <p className="text-xs text-slate-400 mb-6 max-w-xs leading-relaxed">{playerError}</p>
              <div className="flex flex-col gap-2.5 w-full max-w-xs">
                <a
                  href={`https://www.youtube.com/shorts/${currentVideo.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition"
                >
                  <ExternalLink size={16} />
                  Open in YouTube App / Web
                </a>
                <button
                  onClick={goToNext}
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition"
                >
                  Skip to Next Video
                </button>
              </div>
            </div>
          )}

          {/* Animated Heart on Double Tap */}
          {showHeartAnim && (
            <div
              className="absolute pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 animate-like-bounce"
              style={{ left: heartAnimPos.x, top: heartAnimPos.y }}
            >
              <Heart size={72} className="fill-brand-500 text-brand-500 filter drop-shadow-lg" />
            </div>
          )}
        </div>

        {/* Right Floating Actions Column */}
        <div className="absolute right-3 bottom-24 z-30 flex flex-col items-center gap-4 pointer-events-auto">
          {/* Favorite Button */}
          <button
            onClick={handleToggleFavorite}
            className="flex flex-col items-center group active:scale-90 transition"
            aria-label="Like"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition ${
              isFav
                ? 'bg-brand-500 text-white border-brand-400 shadow-lg shadow-brand-500/40'
                : 'bg-black/50 text-white border-white/15 hover:bg-black/70'
            }`}>
              <Heart size={22} className={isFav ? 'fill-white' : ''} />
            </div>
            <span className="text-[11px] font-semibold text-white mt-1 shadow-sm">
              {isFav ? 'Saved' : 'Like'}
            </span>
          </button>

          {/* Watchlist Recorded Indicator */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center backdrop-blur-md">
              <CheckCircle2 size={22} />
            </div>
            <span className="text-[10px] font-semibold text-emerald-400 mt-1 text-center leading-tight">
              In Daily<br />Watchlist
            </span>
          </div>

          {/* Share / SnapTube Button */}
          <button
            onClick={handleShare}
            className="flex flex-col items-center group active:scale-90 transition"
            aria-label="Share"
          >
            <div className="w-12 h-12 rounded-full bg-black/50 text-white border border-white/15 hover:bg-black/70 flex items-center justify-center backdrop-blur-md">
              <Share2 size={22} />
            </div>
            <span className="text-[11px] font-semibold text-white mt-1">
              Share
            </span>
          </button>

          {/* Open Original YouTube */}
          <a
            href={`https://www.youtube.com/shorts/${currentVideo.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center group active:scale-90 transition"
            aria-label="Open in YouTube"
          >
            <div className="w-12 h-12 rounded-full bg-black/50 text-red-400 border border-white/15 hover:bg-black/70 flex items-center justify-center backdrop-blur-md">
              <ExternalLink size={20} />
            </div>
            <span className="text-[11px] font-semibold text-white mt-1">
              YouTube
            </span>
          </a>
        </div>

        {/* Bottom Video Metadata Info */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 pb-6 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-auto pr-20">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-semibold text-xs text-white bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
              @{currentVideo.channelName}
            </span>
            <span className="text-[11px] text-slate-300">
              #{currentVideo.subcategory}
            </span>
          </div>

          <h2 className="text-sm font-bold text-white line-clamp-2 leading-snug drop-shadow-md">
            {currentVideo.title}
          </h2>

          {currentVideo.titleNative && (
            <p className="text-xs text-slate-300 font-medium mt-1 line-clamp-1 drop-shadow-sm">
              {currentVideo.titleNative}
            </p>
          )}

          {/* Navigation Hints */}
          <div className="flex items-center gap-3 mt-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ChevronUp size={14} /> Swipe up for next
            </span>
            <span>•</span>
            <span>{currentIndex + 1} of {videos.length}</span>
          </div>
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-30 pointer-events-auto">
          {currentIndex > 0 && (
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition backdrop-blur-md"
              title="Previous Video (Up Arrow)"
            >
              <ChevronUp size={20} />
            </button>
          )}
          {currentIndex < videos.length - 1 && (
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition backdrop-blur-md"
              title="Next Video (Down Arrow)"
            >
              <ChevronDown size={20} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

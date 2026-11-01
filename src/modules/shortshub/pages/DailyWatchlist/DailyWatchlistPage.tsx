import React, { useState, useEffect, useMemo } from 'react';
import { ViewedShortRecord, ContentLanguage, MainCategory, VideoItem } from '../../types';
import {
  db,
  getTodayDateString,
  getViewedDates,
  getViewedShortsByDate,
} from '../../services/storage/db';
import {
  generateTxtExport,
  generateM3uExport,
  generateCsvExport,
  generateJsonExport,
  downloadFile,
  shareUrls,
} from '../../services/sharing/exportService';
import { SnapTubeGuideModal } from '../../components/DailyWatchlist/SnapTubeGuideModal';
import {
  Download,
  Share2,
  Copy,
  Trash2,
  Calendar,
  CheckSquare,
  Square,
  FileText,
  HelpCircle,
  ExternalLink,
  Sparkles,
  Play,
  CheckCircle2,
  Filter
} from 'lucide-react';

interface DailyWatchlistPageProps {
  onPlayVideo: (video: VideoItem, playlist: VideoItem[]) => void;
}

export const DailyWatchlistPage: React.FC<DailyWatchlistPageProps> = ({ onPlayVideo }) => {
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(getTodayDateString());
  const [videos, setVideos] = useState<ViewedShortRecord[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [filterLang, setFilterLang] = useState<ContentLanguage | 'All'>('All');
  const [filterCat, setFilterCat] = useState<MainCategory | 'All'>('All');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 2500);
  };

  const loadData = async () => {
    try {
      const dates = await getViewedDates();
      const today = getTodayDateString();
      if (!dates.includes(today)) {
        setAvailableDates([today, ...dates]);
      } else {
        setAvailableDates(dates);
      }

      const list = await getViewedShortsByDate(selectedDate);
      setVideos(list);
      // Select all by default
      setSelectedIds(list.map(v => v.id!).filter(Boolean));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadData();
  }, [selectedDate]);

  // Filtered view
  const filteredVideos = useMemo(() => {
    return videos.filter(v => {
      const matchLang = filterLang === 'All' || v.language === filterLang;
      const matchCat = filterCat === 'All' || v.category === filterCat;
      return matchLang && matchCat;
    });
  }, [videos, filterLang, filterCat]);

  // Statistics Calculation
  const stats = useMemo(() => {
    let tamilCount = 0;
    let englishCount = 0;
    let teluguCount = 0;
    let educationCount = 0;
    let funCount = 0;
    let familyCount = 0;
    let friendsCount = 0;

    for (const v of videos) {
      if (v.language === 'Tamil') tamilCount++;
      if (v.language === 'English') englishCount++;
      if (v.language === 'Telugu') teluguCount++;

      if (v.category === 'Education') educationCount++;
      if (v.category === 'Fun and Entertainment') funCount++;
      if (v.category === 'Family') familyCount++;
      if (v.category === 'Friends and Lifestyle') friendsCount++;
    }

    return {
      total: videos.length,
      tamilCount,
      englishCount,
      teluguCount,
      educationCount,
      funCount,
      familyCount,
      friendsCount,
    };
  }, [videos]);

  const toggleSelectVideo = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedIds.length === filteredVideos.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredVideos.map(v => v.id!).filter(Boolean));
    }
  };

  const getSelectedVideosList = (): ViewedShortRecord[] => {
    return videos.filter(v => v.id && selectedIds.includes(v.id));
  };

  // Actions
  const handleCopyUrls = async () => {
    const targets = getSelectedVideosList();
    if (targets.length === 0) {
      showToast('Please select at least one video to copy.');
      return;
    }
    const urls = targets.map(v => v.originalUrl);
    const result = await shareUrls(urls);
    showToast(`Copied ${urls.length} URLs to clipboard! SnapTube will detect them.`);
  };

  const handleShareUrls = async () => {
    const targets = getSelectedVideosList();
    if (targets.length === 0) {
      showToast('Please select at least one video to share.');
      return;
    }
    const urls = targets.map(v => v.originalUrl);
    const result = await shareUrls(urls, `ShortsHub Playlist - ${selectedDate}`);
    if (result.method === 'share') {
      showToast('Shared to Android Sharesheet!');
    } else {
      showToast(`Copied ${urls.length} URLs to clipboard for SnapTube!`);
    }
  };

  const handleExportTxt = () => {
    const targets = getSelectedVideosList();
    if (targets.length === 0) return showToast('No videos selected.');
    const content = generateTxtExport(targets);
    downloadFile(content, `ShortsHub_${selectedDate}.txt`, 'text/plain');
    showToast('TXT export downloaded!');
  };

  const handleExportM3u = () => {
    const targets = getSelectedVideosList();
    if (targets.length === 0) return showToast('No videos selected.');
    const content = generateM3uExport(targets);
    downloadFile(content, `ShortsHub_${selectedDate}.m3u`, 'audio/x-mpegurl');
    showToast('M3U playlist downloaded!');
  };

  const handleExportCsv = () => {
    const targets = getSelectedVideosList();
    if (targets.length === 0) return showToast('No videos selected.');
    const content = generateCsvExport(targets);
    downloadFile(content, `ShortsHub_${selectedDate}.csv`, 'text/csv');
    showToast('CSV export downloaded!');
  };

  const handleExportJson = () => {
    const targets = getSelectedVideosList();
    if (targets.length === 0) return showToast('No videos selected.');
    const content = generateJsonExport(targets, selectedDate);
    downloadFile(content, `ShortsHub_${selectedDate}.json`, 'application/json');
    showToast('JSON export downloaded!');
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await db.viewedShorts.delete(id);
      await loadData();
      showToast('Removed from daily playlist.');
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearDay = async () => {
    if (window.confirm(`Are you sure you want to clear all watched shorts for ${selectedDate}?`)) {
      try {
        await db.viewedShorts.where('dateViewed').equals(selectedDate).delete();
        await loadData();
        showToast('Daily playlist cleared.');
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handlePlaySelected = (record: ViewedShortRecord) => {
    const videoItem: VideoItem = {
      id: record.videoId,
      platform: 'youtube',
      videoId: record.videoId,
      title: record.title,
      language: record.language,
      category: record.category,
      subcategory: record.subcategory,
      tags: [],
      duration: record.watchDurationSeconds || 50,
      thumbnail: record.thumbnailUrl,
      channelName: record.channelName,
      isFamilyFriendly: true,
      isApproved: true,
    };

    const playlistItems: VideoItem[] = videos.map(v => ({
      id: v.videoId,
      platform: 'youtube',
      videoId: v.videoId,
      title: v.title,
      language: v.language,
      category: v.category,
      subcategory: v.subcategory,
      tags: [],
      duration: v.watchDurationSeconds || 50,
      thumbnail: v.thumbnailUrl,
      channelName: v.channelName,
      isFamilyFriendly: true,
      isApproved: true,
    }));

    onPlayVideo(videoItem, playlistItems);
  };

  const isToday = selectedDate === getTodayDateString();

  return (
    <div className="min-h-screen pb-24 text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-dark-900/95 text-white text-xs font-semibold rounded-full border border-slate-700 shadow-2xl backdrop-blur-md animate-fade-in flex items-center gap-2">
          <Sparkles size={14} className="text-brand-400" />
          {toastMessage}
        </div>
      )}

      {/* SnapTube Workflow Modal */}
      <SnapTubeGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />

      {/* Header */}
      <header className="sticky top-0 z-30 bg-dark-950/90 backdrop-blur-xl border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-base font-bold tracking-tight">Daily Viewed Shorts</h1>
            <p className="text-xs text-slate-400">
              {isToday ? "Today's Collection" : `Archive: ${selectedDate}`}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsGuideOpen(true)}
              className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold flex items-center gap-1 hover:bg-amber-500/20 transition active:scale-95"
              title="SnapTube Guide"
            >
              <HelpCircle size={15} />
              <span>SnapTube Guide</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4 space-y-4">
        {/* Date Selector Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs">
          <Calendar size={16} className="text-slate-400 shrink-0" />
          {availableDates.map(d => {
            const isSelected = d === selectedDate;
            const isCurrentToday = d === getTodayDateString();
            return (
              <button
                key={d}
                onClick={() => setSelectedDate(d)}
                className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                    : 'bg-dark-850 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {isCurrentToday ? `Today (${d.slice(5)})` : d}
              </button>
            );
          })}
        </div>

        {/* Daily Stats Dashboard */}
        <section className="bg-dark-900 border border-slate-800/90 rounded-3xl p-4 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Daily Overview
              </span>
              <div className="text-2xl font-black text-white mt-0.5">
                {stats.total}{' '}
                <span className="text-xs font-normal text-slate-400">Shorts Played</span>
              </div>
            </div>
            {videos.length > 0 && (
              <button
                onClick={handleClearDay}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium transition"
              >
                <Trash2 size={13} />
                Clear Day
              </button>
            )}
          </div>

          {/* Language Breakdown */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block">
                தமிழ்
              </span>
              <span className="text-base font-black text-white">{stats.tamilCount}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">
                English
              </span>
              <span className="text-base font-black text-white">{stats.englishCount}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block">
                తెలుగు
              </span>
              <span className="text-base font-black text-white">{stats.teluguCount}</span>
            </div>
          </div>

          {/* Category Breakdown Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-400">
            <span className="px-2 py-0.5 rounded-md bg-dark-850 border border-slate-800">
              Education: <strong className="text-white">{stats.educationCount}</strong>
            </span>
            <span className="px-2 py-0.5 rounded-md bg-dark-850 border border-slate-800">
              Fun: <strong className="text-white">{stats.funCount}</strong>
            </span>
            <span className="px-2 py-0.5 rounded-md bg-dark-850 border border-slate-800">
              Family: <strong className="text-white">{stats.familyCount}</strong>
            </span>
            <span className="px-2 py-0.5 rounded-md bg-dark-850 border border-slate-800">
              Lifestyle: <strong className="text-white">{stats.friendsCount}</strong>
            </span>
          </div>
        </section>

        {/* Download & Export Action Panel */}
        {videos.length > 0 && (
          <section className="bg-dark-900 border border-slate-800/90 rounded-3xl p-4 shadow-lg space-y-3">
            <div className="flex items-center justify-between text-xs">
              <button
                onClick={handleSelectAll}
                className="flex items-center gap-1.5 font-bold text-slate-300 hover:text-white"
              >
                {selectedIds.length === filteredVideos.length ? (
                  <CheckSquare size={16} className="text-brand-500" />
                ) : (
                  <Square size={16} className="text-slate-500" />
                )}
                <span>
                  {selectedIds.length === filteredVideos.length ? 'Deselect All' : 'Select All'} ({selectedIds.length}/{filteredVideos.length})
                </span>
              </button>

              <span className="text-slate-400 text-[11px]">
                Ready for SnapTube Download
              </span>
            </div>

            {/* Main Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={handleShareUrls}
                className="py-3 px-3 bg-gradient-to-r from-brand-600 to-rose-500 hover:opacity-95 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md shadow-brand-500/20 active:scale-95 transition"
              >
                <Share2 size={15} />
                Share to SnapTube
              </button>

              <button
                onClick={handleCopyUrls}
                className="py-3 px-3 bg-dark-800 hover:bg-dark-750 text-white font-bold rounded-2xl text-xs border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition"
              >
                <Copy size={15} className="text-brand-400" />
                Copy URLs ({selectedIds.length})
              </button>
            </div>

            {/* File Export Formats */}
            <div className="pt-2 border-t border-slate-800/60">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Export File Formats:
              </span>
              <div className="grid grid-cols-4 gap-1.5 text-[11px]">
                <button
                  onClick={handleExportTxt}
                  className="py-1.5 px-2 bg-dark-850 hover:bg-dark-800 border border-slate-800 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-1 transition"
                  title="Plain Text format - 1 URL per line"
                >
                  <FileText size={12} className="text-amber-400" />
                  TXT
                </button>
                <button
                  onClick={handleExportM3u}
                  className="py-1.5 px-2 bg-dark-850 hover:bg-dark-800 border border-slate-800 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-1 transition"
                  title="M3U media playlist format"
                >
                  <FileText size={12} className="text-blue-400" />
                  M3U
                </button>
                <button
                  onClick={handleExportCsv}
                  className="py-1.5 px-2 bg-dark-850 hover:bg-dark-800 border border-slate-800 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-1 transition"
                  title="CSV spreadsheet with metadata"
                >
                  <FileText size={12} className="text-emerald-400" />
                  CSV
                </button>
                <button
                  onClick={handleExportJson}
                  className="py-1.5 px-2 bg-dark-850 hover:bg-dark-800 border border-slate-800 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-1 transition"
                  title="Complete JSON format"
                >
                  <FileText size={12} className="text-purple-400" />
                  JSON
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Video List */}
        <section className="space-y-2">
          {videos.length === 0 ? (
            <div className="p-8 text-center bg-dark-900 border border-slate-800/80 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-dark-850 text-slate-500 mx-auto flex items-center justify-center mb-3">
                <Play size={20} />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">No Shorts Played Yet</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                As you watch curated Shorts on the Home or Explore feeds, their URLs will automatically be collected here for your end-of-day SnapTube download!
              </p>
            </div>
          ) : (
            filteredVideos.map(item => {
              const isSelected = item.id ? selectedIds.includes(item.id) : false;

              return (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-dark-900/90 border-brand-500/40 shadow-sm'
                      : 'bg-dark-900/40 border-slate-800/80'
                  }`}
                >
                  {/* Checkbox */}
                  <button
                    onClick={() => item.id && toggleSelectVideo(item.id)}
                    className="p-1 text-slate-400 hover:text-white transition shrink-0"
                  >
                    {isSelected ? (
                      <CheckSquare size={18} className="text-brand-500" />
                    ) : (
                      <Square size={18} className="text-slate-600" />
                    )}
                  </button>

                  {/* Thumbnail */}
                  <div
                    onClick={() => handlePlaySelected(item)}
                    className="relative w-14 h-20 rounded-xl overflow-hidden bg-dark-950 shrink-0 cursor-pointer group"
                  >
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition">
                      <Play size={16} className="fill-white text-white opacity-80" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-dark-800 border border-slate-700 text-slate-300">
                        {item.language}
                      </span>
                      <span className="text-[9px] text-slate-400 truncate">
                        {item.category}
                      </span>
                    </div>

                    <h4
                      onClick={() => handlePlaySelected(item)}
                      className="text-xs font-semibold text-white line-clamp-2 leading-snug cursor-pointer hover:text-brand-400 transition"
                    >
                      {item.title}
                    </h4>

                    <div className="flex items-center justify-between mt-1 text-[10px] text-slate-400">
                      <span className="truncate max-w-[110px] text-slate-400">
                        {item.channelName}
                      </span>
                      <span>{item.timeViewed}</span>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex flex-col gap-1 shrink-0">
                    <a
                      href={item.originalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      title="Open in YouTube"
                    >
                      <ExternalLink size={14} />
                    </a>
                    <button
                      onClick={() => item.id && handleDeleteItem(item.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
                      title="Remove"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
};

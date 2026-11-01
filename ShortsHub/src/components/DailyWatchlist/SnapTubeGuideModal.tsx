import React from 'react';
import { X, Download, Share2, FolderCheck, AlertCircle, ExternalLink, Copy } from 'lucide-react';

interface SnapTubeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SnapTubeGuideModal: React.FC<SnapTubeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-dark-950 font-black shadow-lg shadow-amber-500/20">
            <Download size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight">SnapTube Download Guide</h2>
            <p className="text-xs text-amber-400/90 font-medium">End-of-Day Manual Download Workflow</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-300">
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
            <AlertCircle className="text-amber-400 shrink-0 mt-0.5" size={18} />
            <div className="text-xs text-amber-200/90 leading-relaxed">
              <strong>Notice:</strong> ShortsHub automatically collects URLs of all videos you watch during the day. In compliance with browser and platform security standards, downloads are completed manually in SnapTube. ShortsHub never scrapes or initiates automatic downloads.
            </div>
          </div>

          <div className="border border-slate-800 rounded-2xl p-4 bg-dark-850/80">
            <h3 className="font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">1</span>
              Watch Shorts Seamlessly
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every short video that plays successfully is automatically added to your Daily Watchlist with title, channel, and direct URL.
            </p>
          </div>

          <div className="border border-slate-800 rounded-2xl p-4 bg-dark-850/80">
            <h3 className="font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">2</span>
              Select Videos in Daily Watchlist
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open the <strong>Daily Watchlist</strong> tab. You can filter by language (Tamil, English, Telugu) or category, then tick individual videos or tap <strong>Select All</strong>.
            </p>
          </div>

          <div className="border border-slate-800 rounded-2xl p-4 bg-dark-850/80">
            <h3 className="font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center font-bold">3</span>
              Share to SnapTube or Copy URLs
            </h3>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Share2 size={16} className="text-brand-400 shrink-0 mt-0.5" />
                <span><strong>Share button:</strong> Taps into the Android Sharesheet. If SnapTube is installed on your phone, choose SnapTube to download.</span>
              </div>
              <div className="flex items-start gap-2">
                <Copy size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Copy URLs:</strong> Copies all selected links to clipboard. When you switch to SnapTube, it automatically detects the copied link and prompts you to download.</span>
              </div>
              <div className="flex items-start gap-2">
                <Download size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Export as TXT / M3U:</strong> Generates a clean text or playlist file with all URLs ready for batch import or archiving.</span>
              </div>
            </div>
          </div>

          <div className="border border-emerald-500/20 rounded-2xl p-4 bg-emerald-500/5">
            <h3 className="font-semibold text-emerald-400 text-sm mb-2 flex items-center gap-2">
              <FolderCheck size={18} />
              Recommended SnapTube Storage Path
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              For clean organization on Android, configure SnapTube's destination directory to:
            </p>
            <div className="bg-dark-950 p-2.5 rounded-xl font-mono text-xs text-emerald-300 border border-emerald-500/30 select-all">
              Internal Storage/Download/YTD/
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

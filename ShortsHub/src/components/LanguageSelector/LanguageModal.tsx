import React, { useState } from 'react';
import { ContentLanguage } from '../../types';
import { Check, Globe2, Sparkles, X } from 'lucide-react';

interface LanguageModalProps {
  isOpen: boolean;
  onClose?: () => void;
  currentLanguages: ContentLanguage[];
  onSave: (languages: ContentLanguage[]) => void;
  isFirstLaunch?: boolean;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  onClose,
  currentLanguages,
  onSave,
  isFirstLaunch = false,
}) => {
  const [selected, setSelected] = useState<ContentLanguage[]>(currentLanguages.length > 0 ? currentLanguages : ['Tamil', 'English', 'Telugu']);

  if (!isOpen) return null;

  const toggleLanguage = (lang: ContentLanguage) => {
    if (selected.includes(lang)) {
      if (selected.length === 1) {
        // Prevent deselecting all
        return;
      }
      setSelected(selected.filter(l => l !== lang));
    } else {
      setSelected([...selected, lang]);
    }
  };

  const handleSelectAll = () => {
    setSelected(['Tamil', 'English', 'Telugu']);
  };

  const handleSave = () => {
    onSave(selected);
    if (onClose) onClose();
  };

  const languageOptions: { lang: ContentLanguage; native: string; subtitle: string; color: string }[] = [
    {
      lang: 'Tamil',
      native: 'தமிழ்',
      subtitle: 'Tamil Curated Content',
      color: 'from-amber-500/20 to-orange-500/10 border-orange-500/30 text-orange-400'
    },
    {
      lang: 'English',
      native: 'English',
      subtitle: 'Global & Indian English Content',
      color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400'
    },
    {
      lang: 'Telugu',
      native: 'తెలుగు',
      subtitle: 'Telugu Curated Content',
      color: 'from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-400'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl text-white">
        {!isFirstLaunch && onClose && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        )}

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-coral flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
            <Globe2 size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight">Select Content Languages</h2>
            <p className="text-xs text-slate-400">மொழியை தேர்ந்தெடுக்கவும் / భాషను ఎంచుకోండి</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 mt-2 mb-4 leading-relaxed">
          ShortsHub displays curated Shorts strictly in your selected languages. Choose one, two, or all three:
        </p>

        {/* Options list */}
        <div className="space-y-3 my-4">
          {languageOptions.map((opt) => {
            const isChecked = selected.includes(opt.lang);
            return (
              <div
                key={opt.lang}
                onClick={() => toggleLanguage(opt.lang)}
                className={`relative flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                  isChecked
                    ? `bg-gradient-to-r ${opt.color} border-slate-700 shadow-md`
                    : 'bg-dark-850/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center border transition ${
                      isChecked
                        ? 'bg-brand-500 border-brand-500 text-white'
                        : 'border-slate-600 bg-slate-800/50'
                    }`}
                  >
                    {isChecked && <Check size={14} className="stroke-[3]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-white">{opt.native}</span>
                      <span className="text-xs text-slate-400">({opt.lang})</span>
                    </div>
                    <span className="text-xs text-slate-400 block">{opt.subtitle}</span>
                  </div>
                </div>
                {isChecked && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    Active
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick presets */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <button
            onClick={handleSelectAll}
            className="flex items-center gap-1.5 text-brand-400 hover:text-brand-300 transition py-1 font-medium"
          >
            <Sparkles size={14} />
            Select All 3 Languages
          </button>
          <span>{selected.length} of 3 selected</span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleSave}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-brand-600 via-rose-500 to-brand-coral hover:opacity-95 active:scale-[0.99] text-white font-bold rounded-2xl shadow-lg shadow-brand-500/25 transition flex items-center justify-center gap-2"
        >
          {isFirstLaunch ? 'Start Watching Shorts' : 'Save Language Preferences'}
        </button>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { VideoItem, ContentLanguage, MainCategory } from '../../types';
import { db } from '../../services/storage/db';
import { DiscoveryEngine } from '../../services/discovery/discoveryEngine';
import categoriesData from '../../database/categories.json';
import { X, Plus, Trash2, Download, Upload, Check, AlertCircle, Save } from 'lucide-react';

interface ContentEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataChanged?: () => void;
}

export const ContentEditorModal: React.FC<ContentEditorModalProps> = ({
  isOpen,
  onClose,
  onDataChanged,
}) => {
  const [customList, setCustomList] = useState<VideoItem[]>([]);
  const [videoIdInput, setVideoIdInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [titleNativeInput, setTitleNativeInput] = useState('');
  const [languageInput, setLanguageInput] = useState<ContentLanguage>('English');
  const [categoryInput, setCategoryInput] = useState<MainCategory>('Education');
  const [subcategoryInput, setSubcategoryInput] = useState('');
  const [channelInput, setChannelInput] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [isFamilyFriendly, setIsFamilyFriendly] = useState(true);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadCustomVideos();
    }
  }, [isOpen]);

  const loadCustomVideos = async () => {
    try {
      const records = await db.customVideos.toArray();
      setCustomList(records);
    } catch (e) {
      console.error(e);
    }
  };

  if (!isOpen) return null;

  const currentCategoryObj = categoriesData.find(c => c.name === categoryInput);
  const availableSubcategories = currentCategoryObj ? currentCategoryObj.subcategories : [];

  const extractVideoId = (input: string): string => {
    const trimmed = input.trim();
    if (trimmed.includes('shorts/')) {
      const parts = trimmed.split('shorts/');
      return parts[1].split('?')[0].split('&')[0];
    }
    if (trimmed.includes('v=')) {
      const match = trimmed.match(/v=([a-zA-Z0-9_-]+)/);
      return match ? match[1] : trimmed;
    }
    if (trimmed.includes('youtu.be/')) {
      const match = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      return match ? match[1] : trimmed;
    }
    return trimmed;
  };

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = extractVideoId(videoIdInput);

    if (!cleanId || cleanId.length < 5) {
      setMessage({ text: 'Please enter a valid YouTube video ID or Shorts URL.', type: 'error' });
      return;
    }

    if (!titleInput.trim()) {
      setMessage({ text: 'Title is required.', type: 'error' });
      return;
    }

    const subcategory = subcategoryInput || (availableSubcategories.length > 0 ? availableSubcategories[0] : 'General');
    const tags = tagsInput
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(t => t.length > 0);

    const newVideo: VideoItem = {
      id: `custom-${cleanId}-${Date.now()}`,
      platform: 'youtube',
      videoId: cleanId,
      title: titleInput.trim(),
      titleNative: titleNativeInput.trim() || undefined,
      language: languageInput,
      category: categoryInput,
      subcategory,
      tags: tags.length > 0 ? tags : [languageInput.toLowerCase(), categoryInput.toLowerCase()],
      duration: 50,
      thumbnail: `https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg`,
      channelName: channelInput.trim() || 'Curated Shorts Creator',
      isFamilyFriendly,
      isApproved: true,
    };

    try {
      await db.customVideos.put(newVideo);
      DiscoveryEngine.clearCache();
      setMessage({ text: `Video added successfully (${cleanId})!`, type: 'success' });
      setVideoIdInput('');
      setTitleInput('');
      setTitleNativeInput('');
      setTagsInput('');
      setChannelInput('');
      await loadCustomVideos();
      if (onDataChanged) onDataChanged();
    } catch (e: any) {
      setMessage({ text: e?.message || 'Failed to add video.', type: 'error' });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await db.customVideos.delete(id);
      DiscoveryEngine.clearCache();
      await loadCustomVideos();
      if (onDataChanged) onDataChanged();
      setMessage({ text: 'Video removed from editor list.', type: 'success' });
    } catch (e) {
      console.error(e);
    }
  };

  const handleExportJson = async () => {
    const all = await DiscoveryEngine.getAllVideos();
    const jsonStr = JSON.stringify(all, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ShortsHub_Curated_Database_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            if (item.videoId && item.language && item.category) {
              await db.customVideos.put(item);
            }
          }
          DiscoveryEngine.clearCache();
          await loadCustomVideos();
          if (onDataChanged) onDataChanged();
          setMessage({ text: `Imported ${parsed.length} curated videos successfully!`, type: 'success' });
        } else {
          setMessage({ text: 'File must contain a valid JSON array of videos.', type: 'error' });
        }
      } catch (err: any) {
        setMessage({ text: 'Failed to read JSON: ' + err?.message, type: 'error' });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex items-center justify-between mb-4 pr-10">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Content Editor & Curator</h2>
            <p className="text-xs text-slate-400">Curate Tamil, English, and Telugu Shorts database</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJson}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition"
              title="Export database as JSON"
            >
              <Download size={14} />
              Export
            </button>
            <label className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition cursor-pointer">
              <Upload size={14} />
              Import
              <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
            </label>
          </div>
        </div>

        {message && (
          <div
            className={`p-3 rounded-xl mb-4 text-xs font-medium flex items-center gap-2 ${
              message.type === 'success'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
            }`}
          >
            {message.type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
            {message.text}
          </div>
        )}

        {/* Add Video Form */}
        <form onSubmit={handleAddVideo} className="bg-dark-850 p-4 rounded-2xl border border-slate-800 space-y-3 mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400">Add Curated Short</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">YouTube Video ID / URL *</label>
              <input
                type="text"
                placeholder="e.g. dQw4w9WgXcQ or youtube.com/shorts/..."
                value={videoIdInput}
                onChange={e => setVideoIdInput(e.target.value)}
                className="w-full bg-dark-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
                required
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Channel Name</label>
              <input
                type="text"
                placeholder="e.g. Science Hub Tamil"
                value={channelInput}
                onChange={e => setChannelInput(e.target.value)}
                className="w-full bg-dark-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Title (English / Romanized) *</label>
              <input
                type="text"
                placeholder="Short video title"
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
                className="w-full bg-dark-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
                required
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Native Title (தமிழ் / తెలుగు)</label>
              <input
                type="text"
                placeholder="விளக்க தலைப்பு / తెలుగు శీర్షిక"
                value={titleNativeInput}
                onChange={e => setTitleNativeInput(e.target.value)}
                className="w-full bg-dark-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Language *</label>
              <select
                value={languageInput}
                onChange={e => setLanguageInput(e.target.value as ContentLanguage)}
                className="w-full bg-dark-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
              >
                <option value="Tamil">Tamil (தமிழ்)</option>
                <option value="English">English</option>
                <option value="Telugu">Telugu (తెలుగు)</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Category * (No Games/Tech)</label>
              <select
                value={categoryInput}
                onChange={e => setCategoryInput(e.target.value as MainCategory)}
                className="w-full bg-dark-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
              >
                <option value="Education">Education</option>
                <option value="Fun and Entertainment">Fun and Entertainment</option>
                <option value="Family">Family</option>
                <option value="Friends and Lifestyle">Friends and Lifestyle</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Subcategory</label>
              <select
                value={subcategoryInput}
                onChange={e => setSubcategoryInput(e.target.value)}
                className="w-full bg-dark-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
              >
                {availableSubcategories.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-300 block mb-1">Tags (comma separated)</label>
            <input
              type="text"
              placeholder="e.g. science, experiment, kids, tamil"
              value={tagsInput}
              onChange={e => setTagsInput(e.target.value)}
              className="w-full bg-dark-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={isFamilyFriendly}
                onChange={e => setIsFamilyFriendly(e.target.checked)}
                className="rounded border-slate-700 text-brand-500 focus:ring-0"
              />
              Family-Friendly Content
            </label>

            <button
              type="submit"
              className="py-2.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 transition active:scale-95 shadow-md shadow-brand-500/20"
            >
              <Plus size={16} />
              Add Curated Video
            </button>
          </div>
        </form>

        {/* Existing Custom / Curated List */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Locally Added Videos ({customList.length})
          </h3>
          {customList.length === 0 ? (
            <p className="text-xs text-slate-500 py-4 text-center bg-dark-850 rounded-xl">
              No custom videos added yet. Add YouTube Short IDs above to expand the catalog!
            </p>
          ) : (
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {customList.map(item => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-dark-850 rounded-xl border border-slate-800 text-xs"
                >
                  <div className="flex items-center gap-3 truncate pr-2">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-10 h-10 object-cover rounded-lg shrink-0 bg-dark-950"
                    />
                    <div className="truncate">
                      <div className="font-semibold text-white truncate">{item.title}</div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-2">
                        <span>{item.language}</span>
                        <span>•</span>
                        <span>{item.category} ({item.subcategory})</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

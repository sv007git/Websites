import React, { useState } from 'react';
import {
  useEditorStore,
  DeviceMode,
} from '@webforge/editor-core';
import {
  Monitor,
  Tablet,
  Smartphone,
  Undo2,
  Redo2,
  Play,
  Eye,
  EyeOff,
  Code,
  Download,
  Share2,
  Sparkles,
  Save,
  Check,
  ChevronDown,
  Plus,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';
import { Button } from '@webforge/design-system';

export interface AppHeaderProps {
  onOpenNewPageModal: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ onOpenNewPageModal }) => {
  const {
    project,
    activePageId,
    selectPage,
    deviceMode,
    setDeviceMode,
    zoom,
    setZoom,
    previewMode,
    setPreviewMode,
    undo,
    redo,
    canUndo,
    canRedo,
    isDirty,
    saveProject,
    isAiDrawerOpen,
    setAiDrawerOpen,
    isCodeViewOpen,
    setCodeViewOpen,
    isExportModalOpen,
    setExportModalOpen,
    isPublishModalOpen,
    setPublishModalOpen,
    updateProjectMeta,
    uiTheme,
    setUiTheme,
  } = useEditorStore();

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(project.name);

  const activePage = project.pages.find((p) => p.id === activePageId) || project.pages[0];

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
    if (titleInput.trim()) {
      updateProjectMeta({ name: titleInput.trim() });
    } else {
      setTitleInput(project.name);
    }
  };

  return (
    <header className="h-14 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between z-30 select-none">
      {/* Brand & Project Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md">
            W
          </div>
          <span className="font-extrabold text-sm tracking-tight text-white hidden sm:inline">
            WebForge <span className="text-blue-500 font-mono text-xs">STUDIO</span>
          </span>
        </div>

        <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block" />

        {/* Project Name editable */}
        {isEditingTitle ? (
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            onBlur={handleTitleBlur}
            onKeyDown={(e) => e.key === 'Enter' && handleTitleBlur()}
            autoFocus
            className="px-2 py-1 text-xs font-semibold bg-slate-950 border border-blue-500 rounded text-white focus:outline-none"
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setTitleInput(project.name);
              setIsEditingTitle(true);
            }}
            className="text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 px-2 py-1 rounded transition-colors flex items-center gap-1 max-w-[160px] sm:max-w-xs truncate"
            title="Click to rename project"
          >
            <span className="truncate">{project.name}</span>
          </button>
        )}

        {/* Page Selector dropdown */}
        <div className="relative">
          <select
            value={activePageId}
            onChange={(e) => {
              if (e.target.value === '__NEW__') {
                onOpenNewPageModal();
              } else {
                selectPage(e.target.value);
              }
            }}
            className="px-2.5 py-1 text-xs font-medium bg-slate-800 border border-slate-700/80 rounded-md text-slate-200 hover:border-slate-600 focus:outline-none cursor-pointer"
          >
            {project.pages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.slug})
              </option>
            ))}
            <option value="__NEW__">+ New Page...</option>
          </select>
        </div>
      </div>

      {/* Center Controls: Undo/Redo & Viewport Modes & Zoom */}
      <div className="flex items-center gap-2">
        {/* Undo / Redo */}
        <div className="flex items-center bg-slate-950/80 rounded-lg p-0.5 border border-slate-800">
          <button
            type="button"
            onClick={() => undo()}
            disabled={!canUndo()}
            title="Undo (Ctrl+Z)"
            className="p-1.5 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <Undo2 className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => redo()}
            disabled={!canRedo()}
            title="Redo (Ctrl+Y)"
            className="p-1.5 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <Redo2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Viewport device buttons */}
        <div className="flex items-center bg-slate-950/80 rounded-lg p-0.5 border border-slate-800">
          <button
            type="button"
            onClick={() => setDeviceMode('desktop')}
            title="Desktop (1280px)"
            className={`p-1.5 rounded transition-colors ${
              deviceMode === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setDeviceMode('tablet')}
            title="Tablet (768px)"
            className={`p-1.5 rounded transition-colors ${
              deviceMode === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setDeviceMode('mobile')}
            title="Mobile (375px)"
            className={`p-1.5 rounded transition-colors ${
              deviceMode === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Zoom */}
        <div className="hidden lg:flex items-center bg-slate-950/80 rounded-lg px-2 py-0.5 border border-slate-800 text-xs text-slate-400 gap-1">
          <button
            type="button"
            onClick={() => setZoom(zoom - 10)}
            className="hover:text-white p-1"
            title="Zoom out"
          >
            <ZoomOut className="w-3 h-3" />
          </button>
          <span className="font-mono text-[11px] w-9 text-center">{zoom}%</span>
          <button
            type="button"
            onClick={() => setZoom(zoom + 10)}
            className="hover:text-white p-1"
            title="Zoom in"
          >
            <ZoomIn className="w-3 h-3" />
          </button>
          <button
            type="button"
            onClick={() => setZoom(100)}
            className="hover:text-white p-1 ml-0.5"
            title="Reset zoom to 100%"
          >
            <RotateCcw className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Studio Theme Switcher: B&W / Slate / Light */}
        <div className="flex items-center bg-slate-950/80 rounded-lg p-0.5 border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setUiTheme('monochrome')}
            title="Monochrome Theme (Black & White Noir)"
            className={`px-2 py-1 rounded text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
              uiTheme === 'monochrome'
                ? 'bg-white text-black shadow-sm font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-white border border-black inline-block" />
            <span className="hidden sm:inline">B&W</span>
          </button>
          <button
            type="button"
            onClick={() => setUiTheme('dark')}
            title="Cyber Slate Dark Theme"
            className={`px-2 py-1 rounded text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
              uiTheme === 'dark'
                ? 'bg-blue-600 text-white shadow-sm font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
            <span className="hidden sm:inline">Slate</span>
          </button>
          <button
            type="button"
            onClick={() => setUiTheme('light')}
            title="Clean Light Theme"
            className={`px-2 py-1 rounded text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
              uiTheme === 'light'
                ? 'bg-zinc-200 text-zinc-900 shadow-sm font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-zinc-300 border border-zinc-500 inline-block" />
            <span className="hidden sm:inline">Light</span>
          </button>
        </div>
      </div>

      {/* Right Action Tools: Preview, AI, Code, Export, Publish, Save */}
      <div className="flex items-center gap-2">
        {/* Preview mode toggle */}
        <button
          type="button"
          onClick={() => setPreviewMode(!previewMode)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${
            previewMode
              ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
          title="Toggle preview without editor outlines"
        >
          {previewMode ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{previewMode ? 'Exit Preview' : 'Preview'}</span>
        </button>

        {/* AI Assistant button */}
        <button
          type="button"
          onClick={() => setAiDrawerOpen(!isAiDrawerOpen)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            isAiDrawerOpen
              ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
              : 'bg-indigo-950/60 text-indigo-300 border-indigo-800/80 hover:bg-indigo-900/60'
          }`}
          title="Open AI Generation & Modification Assistant"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-300 animate-pulse" />
          <span className="hidden md:inline">AI Co-Pilot</span>
        </button>

        {/* Code View */}
        <button
          type="button"
          onClick={() => setCodeViewOpen(!isCodeViewOpen)}
          className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"
          title="View Generated Code (Next.js & PHP)"
        >
          <Code className="w-3.5 h-3.5" />
          <span className="hidden lg:inline">Code</span>
        </button>

        {/* Save button */}
        <button
          type="button"
          onClick={() => saveProject()}
          className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
            isDirty
              ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500'
              : 'bg-slate-800/80 text-slate-400 border-slate-700/60'
          }`}
          title={isDirty ? 'Save changes (Ctrl+S)' : 'All changes saved'}
        >
          {isDirty ? <Save className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5 text-emerald-400" />}
          <span className="hidden md:inline">{isDirty ? 'Save' : 'Saved'}</span>
        </button>

        {/* Export ZIP */}
        <button
          type="button"
          onClick={() => setExportModalOpen(true)}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 shadow transition-colors flex items-center gap-1.5"
          title="Export Source Code as ZIP (Next.js, Supabase, PHP 8)"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Export</span>
        </button>

        {/* Publish / Deploy */}
        <button
          type="button"
          onClick={() => setPublishModalOpen(true)}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow transition-colors"
          title="Publish & GitHub Integration"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Publish</span>
        </button>
      </div>
    </header>
  );
};

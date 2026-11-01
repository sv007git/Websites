import React from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { monochromeDarkPreset, monochromeLightPreset, cyberSlatePreset } from '@webforge/schema';
import { Settings, Palette, Type, Sliders, Globe, Sparkles } from 'lucide-react';

export const SettingsPanel: React.FC = () => {
  const { project, updateProjectMeta, updateTheme, uiTheme, setUiTheme } = useEditorStore();
  const theme = project.theme;

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
          <Settings className="w-3.5 h-3.5 text-blue-400" />
          <span>Project & Design Tokens</span>
        </h3>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Global theme tokens, fonts, spacing, and compilation defaults.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
        {/* Project Meta */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 flex items-center gap-1">
            <Globe className="w-3 h-3 text-blue-400" />
            <span>General Properties</span>
          </span>
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400">Project Name</label>
            <input
              type="text"
              value={project.name}
              onChange={(e) => updateProjectMeta({ name: e.target.value })}
              className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400">Project Slug</label>
            <input
              type="text"
              value={project.slug}
              onChange={(e) => updateProjectMeta({ slug: e.target.value })}
              className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white font-mono"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400">Default Target</label>
            <select
              value={project.exportConfig.defaultTarget}
              onChange={(e) =>
                updateProjectMeta({
                  exportConfig: { ...project.exportConfig, defaultTarget: e.target.value as any },
                })
              }
              className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white cursor-pointer font-mono"
            >
              <option value="nextjs">Target A: Next.js 14 + Supabase</option>
              <option value="php">Target B: Modern PHP 8.x + MySQL</option>
              <option value="static">Target C: Pure Static HTML/CSS</option>
            </select>
          </div>
        </div>

        {/* Theme Palette Tokens & Presets */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 flex items-center gap-1">
              <Palette className="w-3 h-3 text-pink-400" />
              <span>Theme Color Presets</span>
            </span>
          </div>

          {/* 1-Click Black & White / Palette Presets */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => updateTheme(monochromeDarkPreset)}
              className="px-2 py-2 rounded-lg bg-black text-white border border-zinc-700 hover:border-white transition-all text-left flex flex-col gap-1 group shadow-sm"
              title="Apply Black & White Noir Dark Theme"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white border border-black inline-block" />
                <span className="text-[10px] font-bold text-white group-hover:text-white">B&W Noir</span>
              </div>
              <span className="text-[9px] text-zinc-400">Pure Black</span>
            </button>

            <button
              type="button"
              onClick={() => updateTheme(monochromeLightPreset)}
              className="px-2 py-2 rounded-lg bg-white text-zinc-900 border border-zinc-300 hover:border-black transition-all text-left flex flex-col gap-1 group shadow-sm"
              title="Apply Black & White Minimal Light Theme"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black inline-block" />
                <span className="text-[10px] font-bold text-zinc-900">B&W Light</span>
              </div>
              <span className="text-[9px] text-zinc-500">Pure White</span>
            </button>

            <button
              type="button"
              onClick={() => updateTheme(cyberSlatePreset)}
              className="px-2 py-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 hover:border-blue-500 transition-all text-left flex flex-col gap-1 group shadow-sm"
              title="Apply Cyber Slate Theme"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                <span className="text-[10px] font-bold text-slate-200">Slate</span>
              </div>
              <span className="text-[9px] text-slate-400">Cyber Tech</span>
            </button>
          </div>

          <div className="h-px bg-slate-800/80 my-2" />

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] text-slate-400">Primary Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={theme.colors.primary}
                  onChange={(e) => updateTheme({ colors: { ...theme.colors, primary: e.target.value } })}
                  className="w-6 h-6 rounded border-0 cursor-pointer p-0 bg-transparent"
                />
                <input
                  type="text"
                  value={theme.colors.primary}
                  onChange={(e) => updateTheme({ colors: { ...theme.colors, primary: e.target.value } })}
                  className="w-full px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 border border-slate-700 text-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-slate-400">Accent Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={theme.colors.accent}
                  onChange={(e) => updateTheme({ colors: { ...theme.colors, accent: e.target.value } })}
                  className="w-6 h-6 rounded border-0 cursor-pointer p-0 bg-transparent"
                />
                <input
                  type="text"
                  value={theme.colors.accent}
                  onChange={(e) => updateTheme({ colors: { ...theme.colors, accent: e.target.value } })}
                  className="w-full px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 border border-slate-700 text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 flex items-center gap-1">
            <Type className="w-3 h-3 text-blue-400" />
            <span>Typography</span>
          </span>
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400">Heading Font</label>
            <select
              value={theme.typography.headingFont}
              onChange={(e) => updateTheme({ typography: { ...theme.typography, headingFont: e.target.value } })}
              className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white cursor-pointer"
            >
              <option value="Inter, sans-serif">Inter (Clean Modern Sans)</option>
              <option value="Georgia, serif">Georgia (Editorial Serif)</option>
              <option value="'JetBrains Mono', monospace">JetBrains Mono (Developer)</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400">Body Font</label>
            <select
              value={theme.typography.bodyFont}
              onChange={(e) => updateTheme({ typography: { ...theme.typography, bodyFont: e.target.value } })}
              className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white cursor-pointer"
            >
              <option value="Inter, sans-serif">Inter (Default)</option>
              <option value="-apple-system, BlinkMacSystemFont, sans-serif">System Native Sans</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

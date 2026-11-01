import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { allTemplates, installTemplate } from '@webforge/template-registry';
import { Search, Download, Check, Sparkles, Layers, Database, ShieldCheck } from 'lucide-react';

export const TemplatesPanel: React.FC = () => {
  const { loadProject, createSnapshot } = useEditorStore();
  const [search, setSearch] = useState('');
  const [installingId, setInstallingId] = useState<string | null>(null);

  const filtered = allTemplates.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase()) ||
    t.description.toLowerCase().includes(search.toLowerCase()) ||
    t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const handleInstall = (templateId: string) => {
    setInstallingId(templateId);
    // Take a snapshot of current project before switching
    createSnapshot('Before Template Install');

    setTimeout(() => {
      const result = installTemplate(templateId);
      if (result.success && result.project) {
        loadProject(result.project);
      } else {
        alert(result.error || 'Failed to install template');
      }
      setInstallingId(null);
    }, 200);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800 space-y-2">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search 12 multi-page templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <p className="text-[11px] text-slate-400">
          Each template is complete with multi-page navigation, database schemas, and clean code generation.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {filtered.map((tpl) => (
          <div
            key={tpl.id}
            className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all shadow-md group"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-slate-900">
              <img
                src={tpl.thumbnail}
                alt={tpl.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur border border-slate-700 text-[10px] font-bold text-white flex items-center gap-1">
                <Layers className="w-3 h-3 text-blue-400" />
                <span>{tpl.pagesCount} Pages</span>
              </div>
              {tpl.backendCapabilities.requiresDatabase && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-blue-950/80 backdrop-blur border border-blue-700 text-[10px] font-bold text-blue-300 flex items-center gap-1">
                  <Database className="w-3 h-3" />
                  <span>Full-Stack DB</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-3.5 space-y-2.5">
              <div>
                <span className="text-[10px] font-mono uppercase text-blue-400 font-bold">{tpl.category}</span>
                <h4 className="text-xs font-bold text-white mt-0.5">{tpl.name}</h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {tpl.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {tpl.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Install Button */}
              <button
                type="button"
                onClick={() => handleInstall(tpl.id)}
                disabled={installingId === tpl.id}
                className="w-full py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                {installingId === tpl.id ? (
                  <span>Cloning Project...</span>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Use This Template</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

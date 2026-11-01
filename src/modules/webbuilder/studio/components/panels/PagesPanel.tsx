import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { FileText, Plus, Copy, Trash2, Home, ArrowUp, ArrowDown } from 'lucide-react';

export interface PagesPanelProps {
  onOpenNewPageModal: () => void;
}

export const PagesPanel: React.FC<PagesPanelProps> = ({ onOpenNewPageModal }) => {
  const {
    project,
    activePageId,
    selectPage,
    duplicatePage,
    deletePage,
    reorderPages,
  } = useEditorStore();

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">Pages & Routing</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">{project.pages.length} Pages in Project</p>
        </div>
        <button
          type="button"
          onClick={onOpenNewPageModal}
          className="p-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 shadow flex items-center gap-1 text-xs font-semibold"
          title="Create New Page"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Page</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {project.pages.map((page, index) => {
          const isActive = page.id === activePageId;
          return (
            <div
              key={page.id}
              onClick={() => selectPage(page.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                isActive
                  ? 'bg-blue-600/10 border-blue-500 shadow-sm'
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
              }`}
            >
              <div className="space-y-0.5 truncate pr-2">
                <div className="flex items-center gap-1.5">
                  {page.isHome ? (
                    <Home className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  ) : (
                    <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                  <h4 className={`text-xs font-bold truncate ${isActive ? 'text-blue-400' : 'text-slate-200'}`}>
                    {page.name}
                  </h4>
                  {page.isHome && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-blue-900/40 text-blue-300 border border-blue-800">
                      Home
                    </span>
                  )}
                </div>
                <p className="text-[10px] font-mono text-slate-500 truncate">{page.slug}</p>
                <p className="text-[10px] text-slate-400">{page.blocks.length} Blocks</p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      reorderPages(index, index - 1);
                    }}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                    title="Move Up"
                  >
                    <ArrowUp className="w-3 h-3" />
                  </button>
                )}
                {index < project.pages.length - 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      reorderPages(index, index + 1);
                    }}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                    title="Move Down"
                  >
                    <ArrowDown className="w-3 h-3" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    duplicatePage(page.id);
                  }}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                  title="Duplicate Page"
                >
                  <Copy className="w-3 h-3" />
                </button>
                {project.pages.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`Delete page "${page.name}"?`)) {
                        deletePage(page.id);
                      }
                    }}
                    className="p-1 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800"
                    title="Delete Page"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

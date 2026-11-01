import React from 'react';
import { useEditorStore } from '@webforge/editor-core';
import {
  Layers,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Copy,
  Trash2,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';

export const LayersPanel: React.FC = () => {
  const {
    project,
    activePageId,
    selectedBlockId,
    selectBlock,
    moveBlock,
    duplicateBlock,
    deleteBlock,
    setBlockLocked,
    setBlockHidden,
  } = useEditorStore();

  const activePage = project.pages.find((p) => p.id === activePageId) || project.pages[0];
  const blocks = activePage ? activePage.blocks : [];

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">Layers & Hierarchy</h3>
        <p className="text-[11px] text-slate-400 mt-0.5">
          {blocks.length} Components on {activePage?.name || 'Page'}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
        {blocks.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-xs">
            <Layers className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <p>No blocks on this page yet.</p>
            <p className="text-[11px] mt-1 text-slate-600">Open Blocks panel to add one.</p>
          </div>
        ) : (
          blocks.map((block, idx) => {
            const isSelected = block.id === selectedBlockId;
            return (
              <div
                key={block.id}
                onClick={() => selectBlock(block.id)}
                className={`p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all cursor-pointer group ${
                  isSelected
                    ? 'bg-blue-600/15 border-blue-500 shadow-sm'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-950'
                }`}
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="font-mono text-[10px] text-slate-500 w-4">{idx + 1}</span>
                  <div className="truncate">
                    <h5 className={`font-semibold truncate ${isSelected ? 'text-blue-400' : 'text-slate-200'}`}>
                      {block.name}
                    </h5>
                    <span className="text-[10px] font-mono text-slate-500 block truncate">{block.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100">
                  {idx > 0 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        moveBlock(activePageId, idx, idx - 1);
                      }}
                      className="p-1 rounded text-slate-400 hover:text-white"
                      title="Move Up"
                    >
                      <ArrowUp className="w-3 h-3" />
                    </button>
                  )}
                  {idx < blocks.length - 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        moveBlock(activePageId, idx, idx + 1);
                      }}
                      className="p-1 rounded text-slate-400 hover:text-white"
                      title="Move Down"
                    >
                      <ArrowDown className="w-3 h-3" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setBlockHidden(activePageId, block.id, !block.hidden);
                    }}
                    className={`p-1 rounded ${block.hidden ? 'text-amber-400' : 'text-slate-400 hover:text-white'}`}
                    title={block.hidden ? 'Unhide' : 'Hide'}
                  >
                    {block.hidden ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setBlockLocked(activePageId, block.id, !block.locked);
                    }}
                    className={`p-1 rounded ${block.locked ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
                    title={block.locked ? 'Unlock' : 'Lock'}
                  >
                    {block.locked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      duplicateBlock(activePageId, block.id);
                    }}
                    className="p-1 rounded text-slate-400 hover:text-white"
                    title="Duplicate"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteBlock(activePageId, block.id);
                    }}
                    className="p-1 rounded text-slate-400 hover:text-red-400"
                    title="Delete"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

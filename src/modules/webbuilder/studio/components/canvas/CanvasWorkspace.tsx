import React from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { themeTokensToCssVariables } from '@webforge/design-system';
import { BlockRenderer } from './BlockRenderer';
import { PlusCircle, LayoutTemplate, Layers } from 'lucide-react';

export const CanvasWorkspace: React.FC = () => {
  const {
    project,
    activePageId,
    selectedBlockId,
    selectBlock,
    deviceMode,
    zoom,
    previewMode,
    moveBlock,
    duplicateBlock,
    deleteBlock,
    updateBlockProps,
    addBlock,
    setActiveSidebarTab,
  } = useEditorStore();

  const activePage = project.pages.find((p) => p.id === activePageId) || project.pages[0];
  const blocks = activePage ? activePage.blocks : [];

  const getViewportWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'w-[375px] min-h-[667px] shadow-2xl border-4 border-slate-700 rounded-3xl overflow-hidden my-8';
      case 'tablet':
        return 'w-[768px] min-h-[1024px] shadow-2xl border border-slate-700 rounded-2xl overflow-hidden my-8';
      case 'desktop':
      default:
        return 'w-full max-w-[1280px] shadow-lg';
    }
  };

  const themeVars = themeTokensToCssVariables(project.theme);

  return (
    <div
      data-canvas-workspace
      onClick={() => selectBlock(null)}
      className="flex-1 bg-[#090d16] overflow-auto flex flex-col items-center justify-start p-4 sm:p-8 relative select-auto"
      style={{
        backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Zoom Scaling Container */}
      <div
        className="transition-transform duration-200 ease-out flex justify-center w-full"
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: 'top center',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-slate-950 transition-all duration-300 ${getViewportWidth()}`}
          style={{
            ...themeVars,
            backgroundColor: project.theme.colors.background,
            color: project.theme.colors.text,
            fontFamily: project.theme.typography.bodyFont,
          } as React.CSSProperties}
        >
          {blocks.length === 0 ? (
            <div className="py-28 px-4 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto shadow-sm">
                <PlusCircle className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">This page is currently empty</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Drag blocks from the library on the left or click below to insert starter sections.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => addBlock(activePageId, 'navbar-classic')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 text-xs font-semibold text-slate-200"
                >
                  + Add Header Nav
                </button>
                <button
                  type="button"
                  onClick={() => addBlock(activePageId, 'hero-split')}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow"
                >
                  + Add Hero Section
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSidebarTab('templates')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300"
                >
                  Browse Templates
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col">
              {blocks.map((block, index) => (
                <BlockRenderer
                  key={block.id}
                  block={block}
                  index={index}
                  totalBlocks={blocks.length}
                  isSelected={block.id === selectedBlockId}
                  isPreview={previewMode}
                  onSelect={() => selectBlock(block.id)}
                  onMoveUp={() => moveBlock(activePageId, index, index - 1)}
                  onMoveDown={() => moveBlock(activePageId, index, index + 1)}
                  onDuplicate={() => duplicateBlock(activePageId, block.id)}
                  onDelete={() => deleteBlock(activePageId, block.id)}
                  onUpdateProps={(newProps) => updateBlockProps(activePageId, block.id, newProps)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

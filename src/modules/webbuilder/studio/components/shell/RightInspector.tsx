import React from 'react';
import { useEditorStore, InspectorTab } from '@webforge/editor-core';
import { getBlockDefinition } from '@webforge/block-registry';
import {
  Sliders,
  Type,
  Palette,
  Box,
  Globe,
  Trash2,
  Copy,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react';

export const RightInspector: React.FC = () => {
  const {
    project,
    activePageId,
    selectedBlockId,
    selectBlock,
    activeInspectorTab,
    setActiveInspectorTab,
    updateBlockProps,
    updateBlockStyles,
    duplicateBlock,
    deleteBlock,
    setBlockLocked,
    setBlockHidden,
    updatePage,
  } = useEditorStore();

  const activePage = project.pages.find((p) => p.id === activePageId) || project.pages[0];
  const selectedBlock = activePage?.blocks.find((b) => b.id === selectedBlockId);
  const blockDef = selectedBlock ? getBlockDefinition(selectedBlock.type) : undefined;

  const tabs: { id: InspectorTab; label: string; icon: React.ReactNode }[] = [
    { id: 'content', label: 'Props', icon: <Sliders className="w-3.5 h-3.5" /> },
    { id: 'layout', label: 'Styles', icon: <Box className="w-3.5 h-3.5" /> },
    { id: 'typography', label: 'Type', icon: <Type className="w-3.5 h-3.5" /> },
    { id: 'colors', label: 'Colors', icon: <Palette className="w-3.5 h-3.5" /> },
    { id: 'seo', label: 'SEO', icon: <Globe className="w-3.5 h-3.5" /> },
  ];

  if (!selectedBlock) {
    // Page & SEO Inspector when no block is selected
    return (
      <aside className="w-72 sm:w-80 h-[calc(100vh-3.5rem)] bg-slate-900 border-l border-slate-800 flex flex-col z-20 shrink-0 select-none text-slate-100">
        <div className="p-3 border-b border-slate-800">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400">Page Settings</span>
          <h3 className="text-xs font-bold text-white mt-0.5">{activePage?.name || 'Page'}</h3>
        </div>

        <div className="p-4 space-y-4 text-xs overflow-y-auto flex-1">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
            <span className="text-[10px] uppercase font-mono font-bold text-blue-400 block">Route & Metadata</span>
            <div className="space-y-1">
              <label className="text-[10px] text-slate-400">Page Name</label>
              <input
                type="text"
                value={activePage?.name || ''}
                onChange={(e) => updatePage(activePageId, { name: e.target.value })}
                className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-slate-400">Route Slug</label>
              <input
                type="text"
                value={activePage?.slug || ''}
                onChange={(e) => updatePage(activePageId, { slug: e.target.value })}
                className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white font-mono"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-slate-400">Layout Template</label>
              <select
                value={activePage?.layout || 'default'}
                onChange={(e) => updatePage(activePageId, { layout: e.target.value as any })}
                className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white cursor-pointer"
              >
                <option value="default">Default Header & Footer</option>
                <option value="blank">Blank Canvas</option>
                <option value="admin">Admin Dashboard Layout</option>
              </select>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">SEO & OpenGraph</span>
            <div className="space-y-1">
              <label className="text-[10px] text-slate-400">Meta Title</label>
              <input
                type="text"
                value={activePage?.seo?.title || ''}
                onChange={(e) =>
                  updatePage(activePageId, { seo: { ...activePage.seo, title: e.target.value } })
                }
                className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-slate-400">Meta Description</label>
              <textarea
                rows={3}
                value={activePage?.seo?.description || ''}
                onChange={(e) =>
                  updatePage(activePageId, { seo: { ...activePage.seo, description: e.target.value } })
                }
                className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white resize-none"
              />
            </div>
          </div>
        </div>
      </aside>
    );
  }

  // Selected Block Inspector
  return (
    <aside className="w-72 sm:w-80 h-[calc(100vh-3.5rem)] bg-slate-900 border-l border-slate-800 flex flex-col z-20 shrink-0 select-none text-slate-100">
      {/* Selected Block Header & Fast Actions */}
      <div className="p-3 border-b border-slate-800 flex items-center justify-between">
        <div className="truncate pr-2">
          <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-slate-800 text-blue-400 font-bold">
            {selectedBlock.type}
          </span>
          <h4 className="text-xs font-bold text-white truncate mt-0.5">{selectedBlock.name}</h4>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setBlockLocked(activePageId, selectedBlock.id, !selectedBlock.locked)}
            className={`p-1 rounded ${selectedBlock.locked ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
            title={selectedBlock.locked ? 'Unlock' : 'Lock'}
          >
            {selectedBlock.locked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => setBlockHidden(activePageId, selectedBlock.id, !selectedBlock.hidden)}
            className={`p-1 rounded ${selectedBlock.hidden ? 'text-amber-400' : 'text-slate-400 hover:text-white'}`}
            title={selectedBlock.hidden ? 'Unhide' : 'Hide'}
          >
            {selectedBlock.hidden ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => duplicateBlock(activePageId, selectedBlock.id)}
            className="p-1 rounded text-slate-400 hover:text-white"
            title="Duplicate"
          >
            <Copy className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => deleteBlock(activePageId, selectedBlock.id)}
            className="p-1 rounded text-slate-400 hover:text-red-400"
            title="Delete Block"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-950/60">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveInspectorTab(tab.id)}
            className={`flex-1 py-2 text-center text-[11px] font-semibold flex items-center justify-center gap-1 border-b-2 transition-colors ${
              activeInspectorTab === tab.id
                ? 'border-blue-500 text-blue-400 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="p-3.5 space-y-4 text-xs overflow-y-auto flex-1">
        {activeInspectorTab === 'content' && (
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Configurable Properties</span>

            {blockDef && blockDef.fields ? (
              Object.entries(blockDef.fields).map(([fieldName, fieldDef]) => {
                const currentVal = selectedBlock.props[fieldName] ?? '';

                if (fieldDef.type === 'textarea') {
                  return (
                    <div key={fieldName} className="space-y-1">
                      <label className="text-[11px] text-slate-300 font-medium">{fieldDef.label}</label>
                      <textarea
                        rows={3}
                        value={currentVal}
                        onChange={(e) =>
                          updateBlockProps(activePageId, selectedBlock.id, { [fieldName]: e.target.value })
                        }
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                      />
                    </div>
                  );
                }

                if (fieldDef.type === 'boolean') {
                  return (
                    <div key={fieldName} className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <label className="text-[11px] text-slate-300 font-medium cursor-pointer">{fieldDef.label}</label>
                      <input
                        type="checkbox"
                        checked={Boolean(currentVal)}
                        onChange={(e) =>
                          updateBlockProps(activePageId, selectedBlock.id, { [fieldName]: e.target.checked })
                        }
                        className="rounded"
                      />
                    </div>
                  );
                }

                // Default text / image input
                return (
                  <div key={fieldName} className="space-y-1">
                    <label className="text-[11px] text-slate-300 font-medium">{fieldDef.label}</label>
                    <input
                      type="text"
                      value={currentVal}
                      onChange={(e) =>
                        updateBlockProps(activePageId, selectedBlock.id, { [fieldName]: e.target.value })
                      }
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                );
              })
            ) : (
              <p className="text-[11px] text-slate-500">No dynamic schema properties for this block.</p>
            )}
          </div>
        )}

        {activeInspectorTab === 'layout' && (
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Spacing & Padding</span>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400">Padding Top</label>
                <input
                  type="text"
                  value={selectedBlock.styles.paddingTop || '4rem'}
                  onChange={(e) =>
                    updateBlockStyles(activePageId, selectedBlock.id, { paddingTop: e.target.value })
                  }
                  className="w-full px-2 py-1 text-xs rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400">Padding Bottom</label>
                <input
                  type="text"
                  value={selectedBlock.styles.paddingBottom || '4rem'}
                  onChange={(e) =>
                    updateBlockStyles(activePageId, selectedBlock.id, { paddingBottom: e.target.value })
                  }
                  className="w-full px-2 py-1 text-xs rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
            </div>

            <div className="space-y-1 pt-2">
              <label className="text-[10px] text-slate-400">Custom Tailwind Classes</label>
              <input
                type="text"
                placeholder="e.g. shadow-2xl border-t"
                value={selectedBlock.styles.customClasses || ''}
                onChange={(e) =>
                  updateBlockStyles(activePageId, selectedBlock.id, { customClasses: e.target.value })
                }
                className="w-full px-2.5 py-1.5 text-xs rounded bg-slate-950 border border-slate-700 text-white font-mono"
              />
            </div>
          </div>
        )}

        {activeInspectorTab === 'typography' && (
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Text Alignment</span>
            <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800 gap-1">
              <button
                type="button"
                onClick={() => updateBlockStyles(activePageId, selectedBlock.id, { textAlign: 'left' })}
                className={`flex-1 py-1 rounded flex justify-center ${
                  selectedBlock.styles.textAlign === 'left' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <AlignLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => updateBlockStyles(activePageId, selectedBlock.id, { textAlign: 'center' })}
                className={`flex-1 py-1 rounded flex justify-center ${
                  selectedBlock.styles.textAlign === 'center' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <AlignCenter className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => updateBlockStyles(activePageId, selectedBlock.id, { textAlign: 'right' })}
                className={`flex-1 py-1 rounded flex justify-center ${
                  selectedBlock.styles.textAlign === 'right' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <AlignRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {activeInspectorTab === 'colors' && (
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Block Background</span>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={selectedBlock.styles.backgroundColor || '#090d16'}
                onChange={(e) =>
                  updateBlockStyles(activePageId, selectedBlock.id, { backgroundColor: e.target.value })
                }
                className="w-7 h-7 rounded border-0 cursor-pointer p-0 bg-transparent"
              />
              <input
                type="text"
                placeholder="#090d16"
                value={selectedBlock.styles.backgroundColor || ''}
                onChange={(e) =>
                  updateBlockStyles(activePageId, selectedBlock.id, { backgroundColor: e.target.value })
                }
                className="flex-1 px-2.5 py-1 text-xs rounded bg-slate-950 border border-slate-700 text-white font-mono"
              />
            </div>
          </div>
        )}

        {activeInspectorTab === 'seo' && (
          <div className="space-y-2">
            <p className="text-[11px] text-slate-400">
              Component accessibility and ARIA landmarks are automatically injected based on standard W3C guidelines.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

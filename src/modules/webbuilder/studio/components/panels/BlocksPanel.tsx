import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import {
  allBlocks,
  blockCategoryLabels,
  BlockCategory,
  BlockDefinition,
} from '@webforge/block-registry';
import { Search, Plus, LayoutGrid } from 'lucide-react';

export const BlocksPanel: React.FC = () => {
  const { activePageId, addBlock } = useEditorStore();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredBlocks = allBlocks.filter((block) => {
    const matchesSearch =
      block.name.toLowerCase().includes(search.toLowerCase()) ||
      block.description.toLowerCase().includes(search.toLowerCase()) ||
      block.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || block.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = Object.keys(blockCategoryLabels) as BlockCategory[];

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      {/* Search & Category Filter Header */}
      <div className="p-3 border-b border-slate-800 space-y-2">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search 55+ blocks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar text-[11px]">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white font-semibold'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All ({allBlocks.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {blockCategoryLabels[cat]?.label || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Block Cards List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredBlocks.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-xs">
            <LayoutGrid className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <p>No blocks matching "{search}"</p>
          </div>
        ) : (
          filteredBlocks.map((block) => (
            <div
              key={block.type}
              onClick={() => addBlock(activePageId, block.type, block.defaultProps)}
              className="group p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500 hover:bg-slate-950 transition-all cursor-pointer flex items-center justify-between shadow-sm"
              title="Click to add to bottom of active page"
            >
              <div className="space-y-1 pr-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.2 rounded bg-slate-800 text-blue-400">
                    {block.category}
                  </span>
                  <h4 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                    {block.name}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {block.description}
                </p>
              </div>

              <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow">
                <Plus className="w-4 h-4" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

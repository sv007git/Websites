import React from 'react';
import { BlockInstance } from '@webforge/schema';
import { getBlockDefinition } from '@webforge/block-registry';
import {
  ArrowUp,
  ArrowDown,
  Copy,
  Trash2,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Move,
} from 'lucide-react';

export interface BlockRendererProps {
  block: BlockInstance;
  index: number;
  totalBlocks: number;
  isSelected: boolean;
  isPreview: boolean;
  onSelect: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onUpdateProps: (newProps: Record<string, any>) => void;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({
  block,
  index,
  totalBlocks,
  isSelected,
  isPreview,
  onSelect,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  onUpdateProps,
}) => {
  if (block.hidden && isPreview) {
    return null;
  }

  const blockDef = getBlockDefinition(block.type);

  if (!blockDef) {
    return (
      <div className="p-8 my-4 rounded-xl border border-red-500/50 bg-red-950/20 text-red-300 text-xs">
        <p className="font-bold">Unknown Block Type: {block.type}</p>
        <p className="text-[11px] text-red-400 mt-1">
          This block definition is not registered in @webforge/block-registry.
        </p>
      </div>
    );
  }

  const RenderComponent = blockDef.render;

  return (
    <div
      onClick={(e) => {
        if (!isPreview) {
          e.stopPropagation();
          onSelect();
        }
      }}
      className={`relative transition-all ${
        !isPreview
          ? `group ${
              isSelected
                ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950 z-10'
                : 'hover:ring-1 hover:ring-blue-500/50'
            }`
          : ''
      } ${block.hidden ? 'opacity-40' : ''}`}
      style={{
        paddingTop: block.styles?.paddingTop,
        paddingBottom: block.styles?.paddingBottom,
        backgroundColor: block.styles?.backgroundColor,
        textAlign: block.styles?.textAlign as any,
      }}
    >
      {/* Contextual Action Overlay when Selected */}
      {!isPreview && isSelected && (
        <div className="absolute -top-3 left-4 z-20 flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-600 text-white shadow-lg text-[10px] font-semibold tracking-wide">
          <span>{block.name}</span>
          <div className="h-3 w-px bg-blue-400 mx-1" />
          {index > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onMoveUp();
              }}
              className="p-0.5 hover:text-blue-200"
              title="Move Up"
            >
              <ArrowUp className="w-3 h-3" />
            </button>
          )}
          {index < totalBlocks - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onMoveDown();
              }}
              className="p-0.5 hover:text-blue-200"
              title="Move Down"
            >
              <ArrowDown className="w-3 h-3" />
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDuplicate();
            }}
            className="p-0.5 hover:text-blue-200"
            title="Duplicate Block"
          >
            <Copy className="w-3 h-3" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-0.5 hover:text-red-200"
            title="Delete Block"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Render the actual block component */}
      <RenderComponent
        id={block.id}
        props={block.props}
        styles={block.styles}
        isSelected={isSelected}
        isPreview={isPreview}
        onUpdateProps={onUpdateProps}
      />
    </div>
  );
};

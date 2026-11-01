import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { Image, Copy, Check, ExternalLink } from 'lucide-react';

const presetImages = [
  { label: 'Cloud Architecture Dashboard', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', cat: 'Tech' },
  { label: 'Engineering Analytics Graph', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', cat: 'Tech' },
  { label: 'Mobile Device Mockup', url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80', cat: 'Mobile' },
  { label: 'Minimalist Artisan Workspace', url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80', cat: 'Lifestyle' },
  { label: 'Executive Team Meeting', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', cat: 'People' },
  { label: 'Fine Dining Plate Presentation', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', cat: 'Dining' },
  { label: 'Warehouse Logistics Facility', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', cat: 'Industrial' },
  { label: 'Modern Architectural Studio', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', cat: 'Architecture' },
];

export const MediaPanel: React.FC = () => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [customUrl, setCustomUrl] = useState('');

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
          <Image className="w-3.5 h-3.5 text-blue-400" />
          <span>Assets & Media</span>
        </h3>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Curated royalty-free imagery and external asset management.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
        {/* Custom URL input */}
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">External Asset URL</span>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="https://images.unsplash.com/..."
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="flex-1 px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white focus:outline-none"
            />
            <button
              type="button"
              onClick={() => customUrl && copyToClipboard(customUrl)}
              className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Preset Image Library */}
        <div className="space-y-3">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Curated Stock Library</span>
          <div className="grid grid-cols-2 gap-2.5">
            {presetImages.map((img, i) => (
              <div
                key={i}
                onClick={() => copyToClipboard(img.url)}
                className="group relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3] cursor-pointer hover:border-blue-500 transition-all"
                title="Click to copy image URL"
              >
                <img src={img.url} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-between">
                  <span className="text-[9px] font-mono text-blue-300 uppercase">{img.cat}</span>
                  <div className="flex items-center justify-between text-white text-[10px] font-semibold">
                    <span>{copiedUrl === img.url ? 'Copied!' : 'Click to copy'}</span>
                    {copiedUrl === img.url ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

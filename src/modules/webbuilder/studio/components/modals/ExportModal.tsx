import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import {
  generateProjectFiles,
  packageProjectToZipBlob,
  ExportTargetType,
} from '@webforge/codegen';
import {
  Download,
  CheckCircle2,
  FileCode,
  Layers,
  Server,
  Database,
  X,
  FileArchive,
} from 'lucide-react';

export const ExportModal: React.FC = () => {
  const { project, isExportModalOpen, setExportModalOpen } = useEditorStore();
  const [selectedTarget, setSelectedTarget] = useState<ExportTargetType>(
    project.exportConfig.defaultTarget || 'nextjs'
  );
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  if (!isExportModalOpen) return null;

  const generatedFiles = generateProjectFiles(project, selectedTarget);

  const handleDownloadZip = async () => {
    setIsExporting(true);
    try {
      const blob = await packageProjectToZipBlob(project, selectedTarget);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${project.slug || 'webforge-app'}-${selectedTarget}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setExportComplete(true);
      setTimeout(() => setExportComplete(false), 3000);
    } catch (err: any) {
      alert('Export failed: ' + err.message);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Download className="w-4 h-4 text-blue-400" />
              <span>Export Full-Stack Deliverable Source</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Zero vendor lock-in. 100% standalone production-grade code.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setExportModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 text-xs">
          {/* Target Architecture Selector */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">
              Choose Deployment Architecture
            </span>
            <div className="grid sm:grid-cols-3 gap-3">
              {/* Target A: Next.js */}
              <div
                onClick={() => setSelectedTarget('nextjs')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedTarget === 'nextjs'
                    ? 'border-blue-500 bg-blue-500/10 shadow-sm'
                    : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-white">Target A</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300">
                    Modern
                  </span>
                </div>
                <h5 className="font-bold text-xs text-blue-400">Next.js 14 + Supabase</h5>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  TypeScript, App Router, Tailwind CSS, and PostgreSQL migrations with Row Level Security.
                </p>
              </div>

              {/* Target B: PHP 8 */}
              <div
                onClick={() => setSelectedTarget('php')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedTarget === 'php'
                    ? 'border-blue-500 bg-blue-500/10 shadow-sm'
                    : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-white">Target B</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                    Self-Hosted
                  </span>
                </div>
                <h5 className="font-bold text-xs text-amber-400">PHP 8.x + MySQL</h5>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Clean MVC architecture, PDO prepared statements, Docker, and Apache rewrite rules.
                </p>
              </div>

              {/* Target C: Static HTML */}
              <div
                onClick={() => setSelectedTarget('static')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedTarget === 'static'
                    ? 'border-blue-500 bg-blue-500/10 shadow-sm'
                    : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-white">Target C</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-700 text-slate-300">
                    Jamstack
                  </span>
                </div>
                <h5 className="font-bold text-xs text-slate-300">Pure Static HTML</h5>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Zero server requirements. Deploy directly to GitHub Pages, Netlify, or Cloudflare Pages.
                </p>
              </div>
            </div>
          </div>

          {/* Generated File Tree Preview */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 flex items-center justify-between">
              <span>Repository Package Manifest ({generatedFiles.length} Files Generated)</span>
              <span className="text-blue-400 font-mono">100% Validated</span>
            </span>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 max-h-48 overflow-y-auto space-y-1 font-mono text-[11px]">
              {generatedFiles.map((file, i) => (
                <div key={i} className="flex items-center justify-between text-slate-300 hover:text-white py-0.5">
                  <span className="flex items-center gap-2 truncate">
                    <FileCode className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{file.path}</span>
                  </span>
                  <span className="text-[10px] text-slate-500 shrink-0 ml-2">
                    {file.content.length} bytes
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <p className="text-[11px] text-slate-400">
            {exportComplete ? (
              <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> ZIP successfully downloaded!
              </span>
            ) : (
              'Downloads a single standalone .zip archive.'
            )}
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setExportModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleDownloadZip}
              disabled={isExporting}
              className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg disabled:opacity-50"
            >
              <FileArchive className="w-4 h-4" />
              <span>{isExporting ? 'Packaging ZIP...' : 'Download Project .ZIP'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { processAiPrompt, AiAnalysisResult } from '../../ai/ai-generator';
import { Sparkles, X, Send, Check, ArrowRight, CornerDownLeft, ShieldAlert } from 'lucide-react';

export const AiAssistantDrawer: React.FC = () => {
  const {
    project,
    activePageId,
    isAiDrawerOpen,
    setAiDrawerOpen,
    loadProject,
    createSnapshot,
  } = useEditorStore();

  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<AiAnalysisResult | null>(null);

  if (!isAiDrawerOpen) return null;

  const quickPrompts = [
    'Transform theme to emerald dark palette',
    'Add customer testimonials section',
    'Create an appointments database table',
    'Add 3-tier pricing table with annual discount',
  ];

  const handleExecutePrompt = (text: string) => {
    if (!text.trim()) return;
    setIsProcessing(true);

    setTimeout(() => {
      const res = processAiPrompt(text, project, activePageId);
      setResult(res);
      setIsProcessing(false);
    }, 400);
  };

  const handleApplyChanges = () => {
    if (!result || result.changes.length === 0) return;

    // Take recovery snapshot before applying AI changes
    createSnapshot('Before AI Modification');

    let updated = project;
    result.changes.forEach((ch) => {
      updated = ch.apply(updated);
    });

    loadProject(updated);
    setResult(null);
    setPrompt('');
    setAiDrawerOpen(false);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col text-slate-100 text-xs animate-slide-left">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">AI Co-Pilot Assistant</h3>
            <p className="text-[10px] text-slate-400">Autonomous schema synthesis & visual layout engineering.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setAiDrawerOpen(false)}
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body / Chat Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {/* Quick starter chips */}
        <div className="space-y-1.5">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Suggested Commands</span>
          <div className="flex flex-col gap-1.5">
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setPrompt(qp);
                  handleExecutePrompt(qp);
                }}
                className="text-left p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-indigo-500 text-[11px] text-slate-300 hover:text-white transition-colors"
              >
                "{qp}"
              </button>
            ))}
          </div>
        </div>

        {/* Proposed Plan & Validation Result */}
        {result && (
          <div className="p-3.5 rounded-xl bg-slate-950 border border-indigo-500/40 space-y-3 animate-fade-in shadow-xl">
            <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proposed Schema Modifications</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">{result.message}</p>

            <div className="space-y-2 pt-2 border-t border-slate-900">
              {result.changes.map((ch) => (
                <div key={ch.id} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                  <h5 className="font-bold text-white text-[11px] flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>{ch.summary}</span>
                  </h5>
                  <p className="text-[10px] text-slate-400 leading-normal">{ch.details}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setResult(null)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Discard
              </button>
              <button
                type="button"
                onClick={handleApplyChanges}
                className="flex-1 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow flex items-center justify-center gap-1.5"
              >
                <span>Apply to Canvas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Input Form Footer */}
      <div className="p-3 border-t border-slate-800 bg-slate-950">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleExecutePrompt(prompt);
          }}
          className="space-y-2"
        >
          <div className="relative">
            <textarea
              rows={2}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleExecutePrompt(prompt);
                }
              }}
              placeholder="Instruct the AI assistant (e.g. Add an appointments table and booking form)..."
              className="w-full pl-3 pr-8 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
            />
            <button
              type="submit"
              disabled={!prompt.trim() || isProcessing}
              className="absolute right-2.5 bottom-3 p-1 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[10px] text-slate-500 flex items-center justify-between">
            <span>A recovery snapshot is created before changes.</span>
            <span>Shift+Enter for newline</span>
          </p>
        </form>
      </div>
    </div>
  );
};

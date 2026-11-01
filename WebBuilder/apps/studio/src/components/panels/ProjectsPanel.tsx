import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { Folder, History, RotateCcw, Plus, Camera, Clock, Check } from 'lucide-react';

export const ProjectsPanel: React.FC = () => {
  const {
    project,
    resetProject,
    versionHistory,
    createSnapshot,
    restoreVersion,
    lastSavedAt,
  } = useEditorStore();

  const [snapshotLabel, setSnapshotLabel] = useState('');

  const handleTakeSnapshot = () => {
    createSnapshot(snapshotLabel.trim() || undefined);
    setSnapshotLabel('');
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
          <Folder className="w-3.5 h-3.5 text-blue-400" />
          <span>Project & History</span>
        </h3>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Manage project versions, snapshots, and recovery points.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
        {/* Current Project Card */}
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <span className="text-[10px] uppercase font-mono font-bold text-blue-400">Active Project</span>
          <h4 className="text-sm font-bold text-white">{project.name}</h4>
          <p className="text-[11px] text-slate-400">{project.description}</p>
          <div className="pt-2 border-t border-slate-900 grid grid-cols-2 gap-2 text-[10px] text-slate-400">
            <div>Pages: <span className="text-white font-mono">{project.pages.length}</span></div>
            <div>Tables: <span className="text-white font-mono">{project.database.tables.length}</span></div>
            <div>Version: <span className="text-white font-mono">{project.version}</span></div>
            <div>Schema: <span className="text-emerald-400 font-mono">Valid AST</span></div>
          </div>
          {lastSavedAt && (
            <p className="text-[10px] text-slate-500 pt-1">
              Last saved: {new Date(lastSavedAt).toLocaleTimeString()}
            </p>
          )}
        </div>

        {/* Snapshot Tool */}
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 flex items-center gap-1">
            <Camera className="w-3 h-3 text-amber-400" />
            <span>Create Recovery Snapshot</span>
          </span>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. Before hero overhaul"
              value={snapshotLabel}
              onChange={(e) => setSnapshotLabel(e.target.value)}
              className="flex-1 px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white focus:outline-none"
            />
            <button
              type="button"
              onClick={handleTakeSnapshot}
              className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700"
            >
              Snapshot
            </button>
          </div>
        </div>

        {/* Version History List */}
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 flex items-center gap-1">
            <History className="w-3 h-3 text-blue-400" />
            <span>Version History ({versionHistory.length})</span>
          </span>

          {versionHistory.length === 0 ? (
            <p className="text-[11px] text-slate-500 py-3 text-center">No snapshots saved yet.</p>
          ) : (
            <div className="space-y-1.5">
              {versionHistory.map((ver) => (
                <div
                  key={ver.id}
                  className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between"
                >
                  <div className="truncate pr-2">
                    <p className="font-semibold text-slate-200 truncate">{ver.name}</p>
                    <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{new Date(ver.timestamp).toLocaleTimeString()}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Restore snapshot "${ver.name}"? Current unsaved changes will be replaced.`)) {
                        restoreVersion(ver.id);
                      }
                    }}
                    className="px-2 py-1 rounded bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-[10px] font-semibold flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>Restore</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Reset / New Project */}
        <div className="pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={() => {
              if (confirm('Start a new blank project? Current unsaved changes will be lost.')) {
                resetProject('New WebForge Project');
              }
            }}
            className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 flex items-center justify-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Start Fresh Blank Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

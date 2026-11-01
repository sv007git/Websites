import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { Server, Plus, Trash2, Lock, Unlock, Play } from 'lucide-react';

export const ApiDesignerPanel: React.FC = () => {
  const { project, addApiRoute, deleteApiRoute } = useEditorStore();
  const apis = project.database.apis || [];

  const [path, setPath] = useState('/api/');
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE'>('GET');
  const [desc, setDesc] = useState('');
  const [authReq, setAuthReq] = useState(false);

  const handleCreateRoute = () => {
    if (!path.trim() || path === '/api/') return;
    addApiRoute({
      path: path.trim(),
      method,
      description: desc.trim(),
      authRequired: authReq,
      action: 'list',
    });
    setPath('/api/');
    setDesc('');
  };

  const getMethodBadge = (m: string) => {
    switch (m) {
      case 'GET':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'POST':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'PUT':
      case 'PATCH':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'DELETE':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-slate-800 text-slate-300';
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
          <Server className="w-3.5 h-3.5 text-blue-400" />
          <span>API & Backend Routes</span>
        </h3>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Auto-compiles to Next.js App Route Handlers and PHP Router endpoints.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {/* Existing Routes */}
        <div className="space-y-2">
          {apis.map((route) => (
            <div
              key={route.id}
              className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase ${getMethodBadge(
                      route.method
                    )}`}
                  >
                    {route.method}
                  </span>
                  <span className="font-mono text-slate-200 font-semibold">{route.path}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {route.authRequired ? (
                    <span title="Auth Required" className="text-amber-400"><Lock className="w-3 h-3" /></span>
                  ) : (
                    <span title="Public Endpoint" className="text-slate-500"><Unlock className="w-3 h-3" /></span>
                  )}
                  <button
                    type="button"
                    onClick={() => deleteApiRoute(route.id)}
                    className="p-1 rounded text-slate-500 hover:text-red-400"
                    title="Delete Route"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
              {route.description && (
                <p className="text-[11px] text-slate-400 leading-normal">{route.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Create Route Card */}
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2.5 text-xs">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Add New API Route</span>
          <div className="flex gap-2">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as any)}
              className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-white font-mono text-xs cursor-pointer"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
            <input
              type="text"
              placeholder="/api/products"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              className="flex-1 px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white font-mono focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Route description (optional)"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white focus:outline-none"
          />
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-1.5 text-[11px] text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={authReq}
                onChange={(e) => setAuthReq(e.target.checked)}
                className="rounded"
              />
              <span>Require Auth Session</span>
            </label>
            <button
              type="button"
              onClick={handleCreateRoute}
              className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs"
            >
              Add Route
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

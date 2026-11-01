import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { ColumnType } from '@webforge/schema';
import {
  Database,
  Plus,
  Trash2,
  Key,
  Shield,
  Table,
  Code2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export interface DatabasePanelProps {
  onOpenNewTableModal: () => void;
}

export const DatabasePanel: React.FC<DatabasePanelProps> = ({ onOpenNewTableModal }) => {
  const { project, addColumn, deleteColumn, deleteTable, addRLSPolicy, deleteRLSPolicy } = useEditorStore();
  const tables = project.database.tables || [];

  const [expandedTableId, setExpandedTableId] = useState<string | null>(tables[0]?.id || null);
  const [newColName, setNewColName] = useState('');
  const [newColType, setNewColType] = useState<ColumnType>('text');

  const handleAddColumn = (tableId: string) => {
    if (!newColName.trim()) return;
    addColumn(tableId, {
      name: newColName.trim().toLowerCase().replace(/[^a-z0-9_]+/g, '_'),
      type: newColType,
      isPrimary: false,
      isNullable: true,
      isUnique: false,
    });
    setNewColName('');
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-blue-400" />
            <span>PostgreSQL Designer</span>
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">{tables.length} Database Tables</p>
        </div>
        <button
          type="button"
          onClick={onOpenNewTableModal}
          className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 shadow"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Table</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {tables.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-xs">
            <Database className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <p>No tables defined yet.</p>
            <p className="text-[11px] mt-1 text-slate-600">Create one to enable full-stack data features.</p>
          </div>
        ) : (
          tables.map((table) => {
            const isExpanded = expandedTableId === table.id;
            return (
              <div
                key={table.id}
                className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-sm"
              >
                {/* Table Header */}
                <div
                  onClick={() => setExpandedTableId(isExpanded ? null : table.id)}
                  className="p-3 bg-slate-950 hover:bg-slate-900/60 transition-colors flex items-center justify-between cursor-pointer border-b border-slate-900"
                >
                  <div className="flex items-center gap-2">
                    <Table className="w-4 h-4 text-blue-400" />
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>public.{table.name}</span>
                        <span className="text-[9px] font-mono text-slate-500 font-normal">
                          ({table.columns.length} cols)
                        </span>
                      </h4>
                      <p className="text-[10px] text-slate-400 truncate max-w-xs">{table.displayName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Delete table "${table.name}"?`)) {
                          deleteTable(table.id);
                        }
                      }}
                      className="p-1 rounded text-slate-500 hover:text-red-400"
                      title="Delete Table"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                  </div>
                </div>

                {/* Expanded Table Details */}
                {isExpanded && (
                  <div className="p-3 space-y-4 text-xs">
                    {/* Columns List */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Columns</span>
                      <div className="space-y-1 divide-y divide-slate-900">
                        {table.columns.map((col) => (
                          <div key={col.id} className="pt-1 flex items-center justify-between text-[11px]">
                            <div className="flex items-center gap-1.5 truncate">
                              {col.isPrimary && <Key className="w-3 h-3 text-amber-400 shrink-0" />}
                              <span className="font-mono text-slate-200 font-medium">{col.name}</span>
                              <span className="text-[9px] font-mono px-1 rounded bg-slate-900 text-blue-400 border border-slate-800">
                                {col.type}
                              </span>
                              {!col.isNullable && <span className="text-[9px] text-slate-500">NN</span>}
                              {col.isUnique && !col.isPrimary && <span className="text-[9px] text-indigo-400">UQ</span>}
                            </div>
                            {!col.isPrimary && (
                              <button
                                type="button"
                                onClick={() => deleteColumn(table.id, col.id)}
                                className="text-slate-500 hover:text-red-400 text-[10px]"
                              >
                                remove
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Add column input inline */}
                      <div className="flex items-center gap-1.5 pt-2">
                        <input
                          type="text"
                          placeholder="col_name"
                          value={newColName}
                          onChange={(e) => setNewColName(e.target.value)}
                          className="flex-1 px-2 py-1 text-[11px] rounded bg-slate-900 border border-slate-700 text-white focus:outline-none"
                        />
                        <select
                          value={newColType}
                          onChange={(e) => setNewColType(e.target.value as ColumnType)}
                          className="px-2 py-1 text-[11px] rounded bg-slate-900 border border-slate-700 text-white cursor-pointer"
                        >
                          <option value="text">text</option>
                          <option value="varchar">varchar</option>
                          <option value="integer">integer</option>
                          <option value="decimal">decimal</option>
                          <option value="boolean">boolean</option>
                          <option value="date">date</option>
                          <option value="timestamp">timestamp</option>
                          <option value="uuid">uuid</option>
                          <option value="jsonb">jsonb</option>
                        </select>
                        <button
                          type="button"
                          onClick={() => handleAddColumn(table.id)}
                          className="p-1 rounded bg-blue-600 hover:bg-blue-500 text-white"
                          title="Add Column"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* RLS Policies */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-900">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono font-bold text-slate-400 flex items-center gap-1">
                          <Shield className="w-3 h-3 text-emerald-400" />
                          <span>Row Level Security ({table.rlsPolicies.length})</span>
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            addRLSPolicy(table.id, {
                              name: `Allow auth read ${table.name}`,
                              command: 'SELECT',
                              role: 'authenticated',
                              using: 'true',
                            })
                          }
                          className="text-[10px] text-blue-400 hover:underline"
                        >
                          + Policy
                        </button>
                      </div>
                      <div className="space-y-1 text-[11px]">
                        {table.rlsPolicies.map((pol) => (
                          <div key={pol.id} className="p-1.5 rounded bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-slate-200">{pol.name}</p>
                              <p className="text-[10px] font-mono text-slate-400">{pol.command} FOR {pol.role}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => deleteRLSPolicy(table.id, pol.id)}
                              className="text-slate-500 hover:text-red-400 text-[10px]"
                            >
                              del
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

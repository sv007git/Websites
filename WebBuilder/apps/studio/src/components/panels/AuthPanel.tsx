import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { ShieldCheck, UserCheck, Plus, Trash2, Key } from 'lucide-react';

export const AuthPanel: React.FC = () => {
  const { project, updateProjectMeta } = useEditorStore();
  const authConfig = project.database.auth;

  const [newRole, setNewRole] = useState('');

  const handleToggleEnabled = (enabled: boolean) => {
    updateProjectMeta({
      database: {
        ...project.database,
        auth: { ...authConfig, enabled },
      },
    } as any);
  };

  const handleProviderChange = (provider: any) => {
    updateProjectMeta({
      database: {
        ...project.database,
        auth: { ...authConfig, provider },
      },
    } as any);
  };

  const handleAddRole = () => {
    if (!newRole.trim()) return;
    const clean = newRole.trim().toLowerCase().replace(/[^a-z0-9_]+/g, '_');
    if (authConfig.roles.includes(clean)) return;

    updateProjectMeta({
      database: {
        ...project.database,
        auth: { ...authConfig, roles: [...authConfig.roles, clean] },
      },
    } as any);
    setNewRole('');
  };

  const handleDeleteRole = (roleToDelete: string) => {
    if (roleToDelete === 'admin') return; // Cannot delete admin
    updateProjectMeta({
      database: {
        ...project.database,
        auth: {
          ...authConfig,
          roles: authConfig.roles.filter((r) => r !== roleToDelete),
          defaultRole: authConfig.defaultRole === roleToDelete ? 'member' : authConfig.defaultRole,
        },
      },
    } as any);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Auth & Role Permissions</span>
        </h3>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Governs user signups, sessions, and database row permissions.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
        {/* Auth Enable Card */}
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white">Enable Authentication</span>
            <input
              type="checkbox"
              checked={authConfig.enabled}
              onChange={(e) => handleToggleEnabled(e.target.checked)}
              className="rounded"
            />
          </div>
          <p className="text-[11px] text-slate-400">
            When enabled, client login/signup flows and server-side route guards will be compiled into the exported codebase.
          </p>

          <div className="pt-2 border-t border-slate-900 space-y-1.5">
            <label className="text-[11px] font-medium text-slate-300">Authentication Architecture</label>
            <select
              value={authConfig.provider}
              onChange={(e) => handleProviderChange(e.target.value)}
              className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white cursor-pointer"
            >
              <option value="supabase">Supabase GoTrue (Postgres JWT & Cookies)</option>
              <option value="session_php">PHP 8.x Native Sessions (Encrypted & CSRF Guarded)</option>
              <option value="custom_jwt">Custom REST Bearer Token</option>
            </select>
          </div>
        </div>

        {/* Roles List */}
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">Configured User Roles</span>
          <div className="space-y-1.5">
            {authConfig.roles.map((role) => (
              <div key={role} className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-mono text-slate-200">{role}</span>
                  {role === authConfig.defaultRole && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-900/40 text-blue-300 border border-blue-800">
                      Default
                    </span>
                  )}
                </div>
                {role !== 'admin' && (
                  <button
                    type="button"
                    onClick={() => handleDeleteRole(role)}
                    className="text-slate-500 hover:text-red-400"
                    title="Remove Role"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add Role input */}
          <div className="flex gap-1.5 pt-1">
            <input
              type="text"
              placeholder="new_role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="flex-1 px-2 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white focus:outline-none"
            />
            <button
              type="button"
              onClick={handleAddRole}
              className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

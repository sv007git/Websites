import React from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { Puzzle, Github, CreditCard, Mail, CheckCircle2 } from 'lucide-react';

export const IntegrationsPanel: React.FC = () => {
  const { project, updateProjectMeta } = useEditorStore();
  const integrations = project.integrations;

  const handleUpdateGithub = (updates: any) => {
    updateProjectMeta({
      integrations: {
        ...integrations,
        github: { ...integrations.github, ...updates },
      },
    });
  };

  const handleUpdateStripe = (updates: any) => {
    updateProjectMeta({
      integrations: {
        ...integrations,
        stripe: { ...integrations.stripe, ...updates },
      },
    });
  };

  const handleUpdateEmail = (updates: any) => {
    updateProjectMeta({
      integrations: {
        ...integrations,
        email: { ...integrations.email, ...updates },
      },
    });
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-3 border-b border-slate-800">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
          <Puzzle className="w-3.5 h-3.5 text-blue-400" />
          <span>Connected Services</span>
        </h3>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Configure GitHub sync, Stripe payments, and transactional email.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
        {/* GitHub Card */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-white" />
              <span className="font-bold text-white">GitHub Repository</span>
            </div>
            <label className="flex items-center gap-1.5 text-[11px] text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={integrations.github.enabled}
                onChange={(e) => handleUpdateGithub({ enabled: e.target.checked })}
                className="rounded"
              />
              <span>Enable</span>
            </label>
          </div>
          {integrations.github.enabled && (
            <div className="space-y-2 pt-2 border-t border-slate-900">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400">Repository Name</label>
                <input
                  type="text"
                  placeholder="org/repo-name"
                  value={integrations.github.repo}
                  onChange={(e) => handleUpdateGithub({ repo: e.target.value })}
                  className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white font-mono"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400">Target Branch</label>
                <input
                  type="text"
                  value={integrations.github.branch || 'main'}
                  onChange={(e) => handleUpdateGithub({ branch: e.target.value })}
                  className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white font-mono"
                />
              </div>
            </div>
          )}
        </div>

        {/* Stripe Card */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">Stripe Payments</span>
            </div>
            <label className="flex items-center gap-1.5 text-[11px] text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={integrations.stripe.enabled}
                onChange={(e) => handleUpdateStripe({ enabled: e.target.checked })}
                className="rounded"
              />
              <span>Enable</span>
            </label>
          </div>
          {integrations.stripe.enabled && (
            <div className="space-y-2 pt-2 border-t border-slate-900">
              <label className="flex items-center gap-1.5 text-[11px] text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={integrations.stripe.testMode}
                  onChange={(e) => handleUpdateStripe({ testMode: e.target.checked })}
                  className="rounded"
                />
                <span className="text-amber-400 font-semibold">Test Sandbox Mode Only</span>
              </label>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400">Publishable Key</label>
                <input
                  type="text"
                  placeholder="pk_test_..."
                  value={integrations.stripe.publishableKey}
                  onChange={(e) => handleUpdateStripe({ publishableKey: e.target.value })}
                  className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white font-mono"
                />
              </div>
            </div>
          )}
        </div>

        {/* Email Card */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="font-bold text-white">Transactional Email</span>
            </div>
            <label className="flex items-center gap-1.5 text-[11px] text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={integrations.email.enabled}
                onChange={(e) => handleUpdateEmail({ enabled: e.target.checked })}
                className="rounded"
              />
              <span>Enable</span>
            </label>
          </div>
          {integrations.email.enabled && (
            <div className="space-y-2 pt-2 border-t border-slate-900">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400">Provider</label>
                <select
                  value={integrations.email.provider}
                  onChange={(e) => handleUpdateEmail({ provider: e.target.value })}
                  className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white cursor-pointer"
                >
                  <option value="resend">Resend API</option>
                  <option value="smtp">Standard SMTP Server</option>
                  <option value="sendgrid">SendGrid</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400">Sender "From" Address</label>
                <input
                  type="email"
                  value={integrations.email.fromAddress}
                  onChange={(e) => handleUpdateEmail({ fromAddress: e.target.value })}
                  className="w-full px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

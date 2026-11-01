import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { Share2, Github, Globe, Server, Check, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const PublishModal: React.FC = () => {
  const { project, isPublishModalOpen, setPublishModalOpen } = useEditorStore();
  const [activeTab, setActiveTab] = useState<'github' | 'vercel' | 'docker' | 'domain'>('github');
  const [repoName, setRepoName] = useState(project.slug || 'my-webforge-app');
  const [commitMsg, setCommitMsg] = useState('Initial production commit from WebForge Studio');
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedSuccess, setPublishedSuccess] = useState(false);

  if (!isPublishModalOpen) return null;

  const handleSimulatePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setPublishedSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden text-slate-100 text-xs">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-blue-400" />
            <div>
              <h3 className="text-sm font-bold text-white">Publish & Deployment Center</h3>
              <p className="text-[11px] text-slate-400">Deploy your full-stack application to supported hosting providers.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setPublishModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Header */}
        <div className="flex border-b border-slate-800 bg-slate-950 px-6">
          <button
            type="button"
            onClick={() => setActiveTab('github')}
            className={`py-3 px-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'github' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            GitHub Push
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('vercel')}
            className={`py-3 px-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'vercel' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Vercel / Netlify
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('docker')}
            className={`py-3 px-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'docker' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Self-Hosted Docker
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('domain')}
            className={`py-3 px-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'domain' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Custom Domains & SSL
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          {activeTab === 'github' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-white" />
                  <div>
                    <h4 className="font-bold text-white text-xs">Connect to GitHub Repository</h4>
                    <p className="text-[11px] text-slate-400">Push the full generated Next.js or PHP codebase directly to your Git provider.</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-900">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Repository Name</label>
                    <input
                      type="text"
                      value={repoName}
                      onChange={(e) => setRepoName(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white font-mono"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Commit Message</label>
                    <input
                      type="text"
                      value={commitMsg}
                      onChange={(e) => setCommitMsg(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                </div>

                {publishedSuccess ? (
                  <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Successfully synced to https://github.com/your-account/{repoName}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleSimulatePublish}
                    disabled={isPublishing}
                    className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <span>{isPublishing ? 'Pushing Repository...' : 'Push to GitHub Repository'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}

          {activeTab === 'vercel' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-white">Deploy Target A to Vercel</h4>
              <p className="text-slate-400 leading-relaxed">
                Because WebForge Studio outputs clean standard Next.js 14 App Router code with zero proprietary runtimes, deploying to Vercel is seamless:
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                <p># 1. Unzip the downloaded project</p>
                <p># 2. Deploy with Vercel CLI</p>
                <p className="text-blue-400">npm i -g vercel</p>
                <p className="text-blue-400">vercel deploy</p>
              </div>
              <p className="text-slate-400">
                Remember to configure your <span className="font-mono text-white">NEXT_PUBLIC_SUPABASE_URL</span> and <span className="font-mono text-white">NEXT_PUBLIC_SUPABASE_ANON_KEY</span> in the Vercel Project Environment Settings.
              </p>
            </div>
          )}

          {activeTab === 'docker' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-white">Deploy Target B via Docker</h4>
              <p className="text-slate-400 leading-relaxed">
                Target B includes a pre-configured <span className="font-mono text-white">docker-compose.yml</span> linking PHP 8.2 Apache to MySQL 8.0:
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                <p># Start PHP and MySQL containers</p>
                <p className="text-amber-400">docker compose up -d</p>
                <p># Check running containers</p>
                <p className="text-amber-400">docker compose ps</p>
              </div>
            </div>
          )}

          {activeTab === 'domain' && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-white">Custom Domain & SSL Setup</h4>
              <p className="text-slate-400 leading-relaxed">
                Point your domain's DNS records to your deployment target:
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-900 pb-2">
                  <span className="font-mono text-slate-400">CNAME</span>
                  <span className="font-mono text-white">cname.vercel-dns.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-slate-400">A Record (Self-Hosted)</span>
                  <span className="font-mono text-white">YOUR_SERVER_IP</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

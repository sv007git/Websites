import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Github, ExternalLink, Heart, Shield, Database, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-100 dark:bg-midnight-950 border-t border-slate-200 dark:border-midnight-800/80 text-slate-600 dark:text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Platform Branding & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-sm">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                WEBSITES
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                12 Super Apps
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              A production-ready unified platform combining 12 independent web applications into one seamless experience.
              Powered by a shared Supabase PostgreSQL backend, client-side module isolation, and universal multi-theme engine.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium pt-1">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>GitHub Pages Production Live</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <Database className="w-3.5 h-3.5 text-indigo-500" />
                <span>Shared Supabase Cloud</span>
              </span>
            </div>
          </div>

          {/* Col 2: The 12 Applications (Quick Directory) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Applications
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/site/chat" className="hover:text-rose-500 transition-colors">Just You & Me</Link>
              </li>
              <li>
                <Link to="/site/cookfood" className="hover:text-rose-500 transition-colors">CookFood Recipes</Link>
              </li>
              <li>
                <Link to="/site/doctor" className="hover:text-rose-500 transition-colors">Doctor Anatomy</Link>
              </li>
              <li>
                <Link to="/site/erp" className="hover:text-rose-500 transition-colors">ERP Enterprise</Link>
              </li>
              <li>
                <Link to="/site/ide" className="hover:text-rose-500 transition-colors">Antigravity IDE</Link>
              </li>
              <li>
                <Link to="/site/invitedecide" className="hover:text-rose-500 transition-colors">InviteDecide</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: More Applications & Repository */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Platforms & Code
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/site/mypage" className="hover:text-rose-500 transition-colors">Prabhata Panchangam</Link>
              </li>
              <li>
                <Link to="/site/pujas" className="hover:text-rose-500 transition-colors">Sanatana Pujas</Link>
              </li>
              <li>
                <Link to="/site/shareit" className="hover:text-rose-500 transition-colors">ShareIT Screen Share</Link>
              </li>
              <li>
                <Link to="/site/shortshub" className="hover:text-rose-500 transition-colors">ShortsHub Player</Link>
              </li>
              <li>
                <Link to="/site/study" className="hover:text-rose-500 transition-colors">NCERT Cartoon Study</Link>
              </li>
              <li>
                <Link to="/site/webbuilder" className="hover:text-rose-500 transition-colors">WebForge Studio</Link>
              </li>
              <li className="pt-2">
                <a
                  href="https://github.com/sv007git/Websites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-slate-900 dark:text-white hover:text-rose-500 dark:hover:text-rose-400"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-midnight-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 WEBSITES Platform. All 12 application rights and licenses preserved.</p>
          <div className="flex items-center gap-4">
            <span>Universal Responsive Engine</span>
            <span>·</span>
            <span>Single Supabase Backend</span>
            <span>·</span>
            <Link to="/" className="hover:text-slate-600 dark:hover:text-slate-200">Back to Top ↑</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

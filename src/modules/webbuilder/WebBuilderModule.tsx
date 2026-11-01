import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Layers, Sparkles } from 'lucide-react';
import { useTheme } from '../../themes/ThemeContext';
import WebForgeApp from './studio/App';
import './studio/index.css';

export const WebBuilderModule: React.FC = () => {
  const { isDarkMode } = useTheme();

  // Sync platform theme mode to WebForge UI theme
  useEffect(() => {
    const studioTheme = isDarkMode ? 'monochrome' : 'light';
    document.documentElement.setAttribute('data-ui-theme', studioTheme);
    return () => {
      document.documentElement.removeAttribute('data-ui-theme');
    };
  }, [isDarkMode]);

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] flex flex-col bg-slate-950 overflow-hidden">
      {/* Platform Breadcrumb Bar */}
      <div className="h-10 px-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300 z-30 shrink-0">
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Platform Home</span>
          </Link>
          <span className="text-slate-600">/</span>
          <div className="flex items-center space-x-1.5 font-semibold text-white">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>WebForge Studio</span>
          </div>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-300 border border-blue-700/50">
            55 Blocks • 12 Templates • RLS Designer • Multi-Code Export
          </span>
        </div>

        <div className="flex items-center space-x-3 text-[11px] text-slate-400">
          <span className="flex items-center space-x-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Studio Engine Active</span>
          </span>
        </div>
      </div>

      {/* Embedded WebForge Studio App */}
      <div className="flex-1 relative overflow-hidden">
        <WebForgeApp />
      </div>
    </div>
  );
};

export default WebBuilderModule;

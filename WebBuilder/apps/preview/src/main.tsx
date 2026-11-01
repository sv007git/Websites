import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Project, validateProject } from '@webforge/schema';
import { getBlockDefinition } from '@webforge/block-registry';

const PreviewApp: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [activeSlug, setActiveSlug] = useState<string>('/');

  useEffect(() => {
    // 1. Try reading from localStorage
    try {
      const saved = localStorage.getItem('webforge_active_project');
      if (saved) {
        const parsed = JSON.parse(saved);
        const val = validateProject(parsed);
        if (val.success && val.data) {
          setProject(val.data);
        }
      }
    } catch {
      // ignore
    }

    // 2. Listen to postMessage for live updates from studio
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'WEBFORGE_SYNC_PROJECT') {
        const val = validateProject(e.data.project);
        if (val.success && val.data) {
          setProject(val.data);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-slate-400 text-xs font-mono">
        Connecting to WebForge Studio preview stream...
      </div>
    );
  }

  const activePage =
    project.pages.find((p) => p.slug === activeSlug) ||
    project.pages.find((p) => p.isHome) ||
    project.pages[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      {/* Route Switcher Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs">
        <span className="font-bold text-white">{project.name} (Isolated Preview)</span>
        <div className="flex gap-2">
          {project.pages.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveSlug(p.slug)}
              className={`px-2.5 py-1 rounded font-medium ${
                activePage?.id === p.id ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Render Blocks */}
      <div className="flex-1">
        {activePage?.blocks
          .filter((b) => !b.hidden)
          .map((block) => {
            const def = getBlockDefinition(block.type);
            if (!def) return null;
            const Component = def.render;
            return (
              <Component
                key={block.id}
                id={block.id}
                props={block.props}
                styles={block.styles}
                isPreview={true}
              />
            );
          })}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PreviewApp />
  </React.StrictMode>
);

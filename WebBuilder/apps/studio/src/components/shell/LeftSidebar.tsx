import React from 'react';
import { useEditorStore, SidebarTab } from '@webforge/editor-core';
import {
  PlusCircle,
  LayoutTemplate,
  FileText,
  Layers,
  Database,
  Server,
  Folder,
  Image,
  ShieldCheck,
  Puzzle,
  Settings,
} from 'lucide-react';
import { BlocksPanel } from '../panels/BlocksPanel';
import { TemplatesPanel } from '../panels/TemplatesPanel';
import { PagesPanel } from '../panels/PagesPanel';
import { LayersPanel } from '../panels/LayersPanel';
import { DatabasePanel } from '../panels/DatabasePanel';
import { ApiDesignerPanel } from '../panels/ApiDesignerPanel';
import { ProjectsPanel } from '../panels/ProjectsPanel';
import { MediaPanel } from '../panels/MediaPanel';
import { AuthPanel } from '../panels/AuthPanel';
import { IntegrationsPanel } from '../panels/IntegrationsPanel';
import { SettingsPanel } from '../panels/SettingsPanel';

export interface LeftSidebarProps {
  onOpenNewPageModal: () => void;
  onOpenNewTableModal: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  onOpenNewPageModal,
  onOpenNewTableModal,
}) => {
  const { activeSidebarTab, setActiveSidebarTab } = useEditorStore();

  const navItems: { id: SidebarTab; label: string; icon: React.ReactNode }[] = [
    { id: 'blocks', label: 'Blocks', icon: <PlusCircle className="w-4 h-4" /> },
    { id: 'templates', label: 'Templates', icon: <LayoutTemplate className="w-4 h-4" /> },
    { id: 'pages', label: 'Pages', icon: <FileText className="w-4 h-4" /> },
    { id: 'layers', label: 'Layers', icon: <Layers className="w-4 h-4" /> },
    { id: 'database', label: 'Database', icon: <Database className="w-4 h-4" /> },
    { id: 'api', label: 'APIs', icon: <Server className="w-4 h-4" /> },
    { id: 'projects', label: 'Project', icon: <Folder className="w-4 h-4" /> },
    { id: 'media', label: 'Media', icon: <Image className="w-4 h-4" /> },
    { id: 'auth', label: 'Auth', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'integrations', label: 'Services', icon: <Puzzle className="w-4 h-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <aside className="h-[calc(100vh-3.5rem)] flex border-r border-slate-800 z-20 shrink-0 select-none">
      {/* Icon Rail */}
      <div className="w-14 bg-slate-950 flex flex-col items-center py-3 border-r border-slate-800/80 gap-1.5 shrink-0">
        {navItems.map((item) => {
          const isActive = activeSidebarTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSidebarTab(item.id)}
              className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center transition-all group ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
              title={item.label}
            >
              {item.icon}
              <span className="text-[9px] mt-0.5 tracking-tighter truncate max-w-[36px]">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Flyout Panel */}
      <div className="w-72 sm:w-80 bg-slate-900 flex flex-col h-full overflow-hidden">
        {activeSidebarTab === 'blocks' && <BlocksPanel />}
        {activeSidebarTab === 'templates' && <TemplatesPanel />}
        {activeSidebarTab === 'pages' && <PagesPanel onOpenNewPageModal={onOpenNewPageModal} />}
        {activeSidebarTab === 'layers' && <LayersPanel />}
        {activeSidebarTab === 'database' && <DatabasePanel onOpenNewTableModal={onOpenNewTableModal} />}
        {activeSidebarTab === 'api' && <ApiDesignerPanel />}
        {activeSidebarTab === 'projects' && <ProjectsPanel />}
        {activeSidebarTab === 'media' && <MediaPanel />}
        {activeSidebarTab === 'auth' && <AuthPanel />}
        {activeSidebarTab === 'integrations' && <IntegrationsPanel />}
        {activeSidebarTab === 'settings' && <SettingsPanel />}
      </div>
    </aside>
  );
};

import React, { useState, useEffect } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { AppHeader } from './components/shell/AppHeader';
import { LeftSidebar } from './components/shell/LeftSidebar';
import { RightInspector } from './components/shell/RightInspector';
import { CanvasWorkspace } from './components/canvas/CanvasWorkspace';
import { ExportModal } from './components/modals/ExportModal';
import { PublishModal } from './components/modals/PublishModal';
import { CodeViewModal } from './components/modals/CodeViewModal';
import { AiAssistantDrawer } from './components/modals/AiAssistantDrawer';
import { NewPageModal } from './components/modals/NewPageModal';
import { NewTableModal } from './components/modals/NewTableModal';

export const App: React.FC = () => {
  const { undo, redo, saveProject, uiTheme } = useEditorStore();
  const [isNewPageModalOpen, setIsNewPageModalOpen] = useState(false);
  const [isNewTableModalOpen, setIsNewTableModalOpen] = useState(false);

  // Sync UI Theme to document attributes
  useEffect(() => {
    document.documentElement.setAttribute('data-ui-theme', uiTheme);
    document.body.setAttribute('data-ui-theme', uiTheme);
  }, [uiTheme]);

  // Keyboard Shortcuts (Undo, Redo, Save)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdKey = isMac ? e.metaKey : e.ctrlKey;

      if (cmdKey && e.key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      } else if (cmdKey && e.key === 'y') {
        e.preventDefault();
        redo();
      } else if (cmdKey && e.key === 's') {
        e.preventDefault();
        saveProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, saveProject]);

  return (
    <div
      data-ui-theme={uiTheme}
      className={`flex flex-col h-screen w-screen overflow-hidden font-sans transition-colors duration-150 ${
        uiTheme === 'monochrome'
          ? 'bg-black text-white'
          : uiTheme === 'light'
          ? 'bg-white text-zinc-900'
          : 'bg-[#090d16] text-slate-100'
      }`}
    >
      {/* Top Application Header */}
      <AppHeader onOpenNewPageModal={() => setIsNewPageModalOpen(true)} />

      {/* Main Studio Viewport */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Navigator & Tool Panels */}
        <LeftSidebar
          onOpenNewPageModal={() => setIsNewPageModalOpen(true)}
          onOpenNewTableModal={() => setIsNewTableModalOpen(true)}
        />

        {/* Central Visual Canvas Workspace */}
        <CanvasWorkspace />

        {/* Right Property & Style Inspector */}
        <RightInspector />
      </div>

      {/* Dialog Modals & Drawers */}
      <ExportModal />
      <PublishModal />
      <CodeViewModal />
      <AiAssistantDrawer />
      <NewPageModal
        isOpen={isNewPageModalOpen}
        onClose={() => setIsNewPageModalOpen(false)}
      />
      <NewTableModal
        isOpen={isNewTableModalOpen}
        onClose={() => setIsNewTableModalOpen(false)}
      />
    </div>
  );
};

export default App;

import React, { useEffect, useRef } from 'react';

export const IdeModule: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject IDE and CodeMirror stylesheets
    const styles = [
      { id: 'cm-style', href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css' },
      { id: 'cm-theme', href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/material-darker.min.css' },
      { id: 'ide-style', href: `${import.meta.env.BASE_URL}modules/ide/css/style.css` },
    ];

    styles.forEach(({ id, href }) => {
      if (!document.getElementById(id)) {
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => resolve(); // continue even if external fails
        document.body.appendChild(script);
      });
    };

    let isMounted = true;

    async function initIde() {
      // Load CDN dependencies
      if (!(window as any).JSZip) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');
      }
      if (!(window as any).marked) {
        await loadScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js');
      }
      if (!(window as any).CodeMirror) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/javascript/javascript.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/xml/xml.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/css/css.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/htmlmixed/htmlmixed.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/markdown/markdown.min.js');
      }

      // Load IDE scripts
      const base = import.meta.env.BASE_URL;
      await loadScript(`${base}modules/ide/js/files.js`);
      await loadScript(`${base}modules/ide/js/editor.js`);
      await loadScript(`${base}modules/ide/js/terminal.js`);
      await loadScript(`${base}modules/ide/js/agent.js`);
      await loadScript(`${base}modules/ide/js/runner.js`);
      await loadScript(`${base}modules/ide/js/auth.js`);
      await loadScript(`${base}modules/ide/js/app.js`);

      if (isMounted) {
        try {
          if ((window as any).FileSystem) (window as any).fs = new (window as any).FileSystem();
          if ((window as any).EditorManager) (window as any).editorManager = new (window as any).EditorManager();
          if ((window as any).MobileTerminal) (window as any).terminal = new (window as any).MobileTerminal();
          if ((window as any).AntigravityAgent) (window as any).agent = new (window as any).AntigravityAgent();
          if ((window as any).CodeRunner) (window as any).runner = new (window as any).CodeRunner();
          if ((window as any).AuthManager) (window as any).auth = new (window as any).AuthManager();
          if ((window as any).AntigravityApp) (window as any).app = new (window as any).AntigravityApp();
        } catch (e) {
          console.warn('IDE components initialized:', e);
        }
      }
    }

    initIde();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div ref={containerRef} className="ide-standalone-wrapper w-full min-h-screen bg-[#0b0f17] text-[#e2e8f0]">
      <div id="app-container">
        {/* Header */}
        <header className="app-header">
          <div className="brand-section">
            <span style={{ fontWeight: 800 }}>Antigravity</span>
            <span className="brand-badge">IDE</span>
            <span id="system-mode-badge" className="brand-badge mode-sandbox" style={{ cursor: 'pointer' }}>
              🟡 Web Sandbox
            </span>
            <span id="save-status" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginLeft: '4px' }}>
              Saved
            </span>
          </div>

          <div className="header-actions">
            <button id="btn-run-header" className="btn btn-primary" title="Run Current App/File">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Run</span>
            </button>
            <button id="btn-agent-header" className="btn btn-secondary" title="Open AI Agent">
              🤖
            </button>
            <button id="btn-fullscreen" className="btn-icon" title="Toggle Fullscreen">
              ⛶
            </button>
          </div>
        </header>

        {/* Main Workspace Container */}
        <main className="workspace-container">
          {/* Panel 1: File Explorer */}
          <section id="panel-files" className="panel">
            <div className="file-explorer-container">
              <div className="file-toolbar">
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>WORKSPACE</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button id="btn-new-file" className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '0.78rem' }}>+ File</button>
                  <label className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '0.78rem', cursor: 'pointer' }}>
                    ↑ Import
                    <input type="file" id="file-import-input" style={{ display: 'none' }} />
                  </label>
                  <button id="btn-export-zip" className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '0.78rem' }}>↓ ZIP</button>
                </div>
              </div>
              <div id="file-list" className="file-list"></div>
            </div>
          </section>

          {/* Panel 2: Editor (Code & Tabs) */}
          <section id="panel-editor" className="panel active">
            <div id="editor-tabs" className="editor-tabs-bar"></div>
            <div className="editor-wrapper">
              <textarea id="code-editor"></textarea>
            </div>
            <div id="mobile-code-toolbar" className="mobile-code-toolbar"></div>
          </section>

          {/* Panel 3: Antigravity AI Agent */}
          <section id="panel-agent" className="panel">
            <div className="agent-container">
              <div className="agent-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Antigravity Agent</span>
                  <span id="agent-status-badge" className="agent-status-badge">
                    <span className="agent-pulse"></span> Ready
                  </span>
                </div>
              </div>

              <div id="agent-messages" className="agent-messages-container"></div>

              <div className="agent-input-bar">
                <input type="text" id="agent-input" className="agent-input-field" placeholder="Ask Antigravity (e.g. 'Add a search bar')..." />
                <button id="btn-agent-send" className="btn btn-primary" style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}>
                  ➤
                </button>
              </div>
            </div>
          </section>

          {/* Panel 4: Live Preview Runner */}
          <section id="panel-preview" className="panel">
            <div className="preview-container">
              <div className="preview-toolbar">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }}></span>
                  Preview (Sandbox)
                </span>
                <button onClick={() => (window as any).runner?.runActive?.()} className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>
                  🔄 Refresh
                </button>
              </div>
              <iframe id="preview-frame" className="preview-frame" sandbox="allow-scripts allow-modals"></iframe>
            </div>
          </section>

          {/* Panel 5: Mobile Interactive Terminal */}
          <section id="panel-terminal" className="panel">
            <div className="terminal-container">
              <div className="terminal-header">
                <span>Terminal (Pyodide & Console)</span>
                <button onClick={() => (window as any).terminal?.clear?.()} className="btn btn-secondary" style={{ fontSize: '0.72rem', padding: '2px 6px' }}>Clear</button>
              </div>
              <div id="terminal-body" className="terminal-body"></div>
              <div className="terminal-input-row">
                <span className="term-prompt">antigravity$</span>
                <input type="text" id="terminal-input" className="term-input" placeholder="type 'help', 'run', or 'python main.py'..." autoComplete="off" autoCapitalize="none" />
              </div>
            </div>
          </section>
        </main>

        {/* Mobile Bottom Navigation Bar */}
        <nav className="mobile-bottom-nav">
          <button className="nav-item" data-panel="files">
            <span>Files</span>
          </button>
          <button className="nav-item active" data-panel="editor">
            <span>Editor</span>
          </button>
          <button className="nav-item" data-panel="agent">
            <span>Agent</span>
          </button>
          <button className="nav-item" data-panel="preview">
            <span>Preview</span>
          </button>
          <button className="nav-item" data-panel="terminal">
            <span>Terminal</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default IdeModule;

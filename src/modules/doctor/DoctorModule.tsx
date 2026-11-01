import React, { useEffect, useRef } from 'react';

export const DoctorModule: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Doctor Stylesheet if not already present
    const linkId = 'doctor-module-styles';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = `${import.meta.env.BASE_URL}modules/doctor/css/styles.css`;
      document.head.appendChild(link);
    }

    // Helper to load scripts sequentially
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // If already loaded and defined
        const script = document.createElement('script');
        script.src = `${import.meta.env.BASE_URL}${src}`;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    };

    let isMounted = true;

    async function initDoctor() {
      try {
        if (!(window as any).ANATOMY_DATA) {
          await loadScript('modules/doctor/js/data.js');
        }
        if (!(window as any).HolisticAudioEngine) {
          await loadScript('modules/doctor/js/audio.js');
        }
        if (!(window as any).AnatomySVGViewer) {
          await loadScript('modules/doctor/js/anatomy-svg.js');
        }
        if (!(window as any).HolisticApp) {
          await loadScript('modules/doctor/js/app.js');
        }

        if (isMounted && (window as any).HolisticApp) {
          (window as any).App = new (window as any).HolisticApp();
        }
      } catch (err) {
        console.error('Failed to initialize Doctor module:', err);
      }
    }

    initDoctor();

    return () => {
      isMounted = false;
      if (typeof window !== 'undefined' && (window as any).AudioEngine?.stop) {
        (window as any).AudioEngine.stop();
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="doctor-standalone-wrapper min-h-screen text-white bg-black">
      {/* Header / Navigation Bar */}
      <header className="site-header" role="banner">
        <div className="header-container">
          {/* Brand Section */}
          <div className="brand-section">
            <div className="brand-logo" aria-hidden="true">✚</div>
            <div className="brand-title">
              <span>DOCTOR</span>
              <span className="brand-tag">HOLISTIC v1.0</span>
            </div>
          </div>

          {/* Controls: Demographics & Layers */}
          <div className="header-controls">
            {/* Demographic Switcher */}
            <div className="switcher-group" role="group" aria-label="Demographic Selection">
              <button className="switcher-btn is-active" data-demographic="man" title="Adult Male Anatomy">
                <span>👨</span> Man
              </button>
              <button className="switcher-btn" data-demographic="woman" title="Adult Female Anatomy">
                <span>👩</span> Woman
              </button>
              <button className="switcher-btn" data-demographic="baby" title="Pediatric / Infant Anatomy">
                <span>👶</span> Baby
              </button>
            </div>

            {/* Layer Switcher */}
            <div className="switcher-group" role="group" aria-label="Anatomical Layer Selection">
              <button className="switcher-btn is-active" data-layer="internals" title="Visceral & Vital Organ Systems">
                <span>🩻</span> Internals
              </button>
              <button className="switcher-btn" data-layer="externals" title="Surface, Sensory & Musculoskeletal Systems">
                <span>👤</span> Externals
              </button>
            </div>
          </div>

          {/* Actions: Theme Toggle & GitHub Repo */}
          <div className="header-actions">
            <button className="action-btn" id="theme-toggle-btn" title="Toggle Light/Dark Theme (Press T)">
              <span className="icon">☀️</span> Light Mode
            </button>
          </div>
        </div>
      </header>

      {/* Main App Layout: Two Columns */}
      <main className="app-container" role="main">
        {/* Left Column: Interactive Vector Anatomy Canvas */}
        <section className="anatomy-panel" aria-label="Interactive Anatomy Viewer">
          <div className="panel-header">
            <div className="panel-title-area">
              <span className="panel-title">Interactive Anatomy</span>
              <div className="panel-badges">
                <span className="status-badge" id="canvas-status-badge">Click Organ</span>
              </div>
            </div>

            <div className="viewport-toolbar" role="toolbar" aria-label="Zoom and Viewport Controls">
              <button className="tool-btn" id="zoom-out-btn" title="Zoom Out (−)">−</button>
              <span className="zoom-indicator" id="zoom-level-display">100%</span>
              <button className="tool-btn" id="zoom-in-btn" title="Zoom In (+)">+</button>
              <button className="tool-btn" id="zoom-reset-btn" title="Reset Zoom View (100%)">↺</button>
            </div>
          </div>

          {/* SVG Viewport Area */}
          <div className="anatomy-viewport" id="anatomy-canvas-container" tabIndex={0} aria-label="Vector Anatomical Diagram">
            {/* SVG injected dynamically by js/anatomy-svg.js */}
          </div>

          <div className="viewport-footer">
            <span>Hover cursor • Click to inspect Top 10 conditions</span>
            <span><kbd>T</kbd> Theme • <kbd>Space</kbd> Audio • <kbd>Esc</kbd> Reset</span>
          </div>

          <div className="anatomy-tooltip" id="anatomy-tooltip" role="tooltip" aria-hidden="true"></div>
        </section>

        {/* Right Column: Holistic Disease Browser & Protocol Details */}
        <section className="content-panel" id="content-panel" aria-label="Disease Intelligence & Holistic Protocols">
          <div className="search-filter-bar">
            <div className="search-input-wrapper">
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }} aria-hidden="true">🔍</span>
              <input 
                type="text" 
                className="search-input" 
                id="disease-search-input" 
                placeholder="Search all diseases, causes, ayurvedic herbs, mudras, yoga, vitamins..."
                aria-label="Search conditions and holistic remedies"
              />
              <button className="search-clear-btn" id="search-clear-btn" title="Clear Search (Esc)">Clear</button>
            </div>
          </div>

          <div className="part-overview-card" id="part-overview-card" aria-live="polite"></div>

          <section className="diseases-section" aria-label="Top 10 Diseases List">
            <div className="section-header">
              <h2 className="section-title">
                <span>📋</span> Top 10 Pathologies & Conditions
              </h2>
              <span className="section-badge" id="diseases-count-badge">10 Conditions</span>
            </div>

            <div className="diseases-grid" id="top-diseases-grid"></div>
          </section>

          <section id="holistic-protocol-container" aria-label="Comprehensive Holistic Protocol" aria-live="polite"></section>
        </section>
      </main>

      {/* Sticky English Audio Controller Bar */}
      <footer className="audio-controller-bar" id="audio-controller-bar" role="region" aria-label="English Voice Audio Controller">
        <div className="audio-info">
          <div className="audio-visualizer-wave" id="audio-visualizer" aria-hidden="true">
            <span className="wave-bar"></span>
            <span className="wave-bar"></span>
            <span className="wave-bar"></span>
            <span className="wave-bar"></span>
            <span className="wave-bar"></span>
            <span className="wave-bar"></span>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              English Voice Narration
            </div>
            <div className="audio-now-playing" id="audio-now-playing-title">Ready to Read Aloud</div>
          </div>
        </div>

        <div className="audio-buttons">
          <button className="audio-play-btn" id="global-audio-play-btn" title="Read Aloud in English (Spacebar)">
            <span>🔊</span> Read Aloud
          </button>
          <button className="action-btn" id="global-audio-stop-btn" title="Stop Audio Narration">
            <span>⏹</span> Stop
          </button>
          <button className="action-btn" id="auto-speak-toggle-btn" title="Toggle Auto-Speak on Organ / Disease Click">
            <span>⚡</span> Auto-Narration
          </button>
        </div>

        <div className="audio-settings">
          <label htmlFor="audio-rate-select" style={{ color: 'var(--text-muted)' }}>Speed:</label>
          <select className="audio-select" id="audio-rate-select" aria-label="Speech Narration Speed">
            <option value="0.8">0.8x (Gentle)</option>
            <option value="1.0" defaultValue="1.0">1.0x (Normal)</option>
            <option value="1.15">1.15x (Brisk)</option>
            <option value="1.3">1.3x (Fast)</option>
          </select>
        </div>
      </footer>
    </div>
  );
};

export default DoctorModule;

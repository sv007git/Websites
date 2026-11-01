import React, { useEffect, useRef } from 'react';

export const PujasModule: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Pujas Stylesheet
    const linkId = 'pujas-module-styles';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = `${import.meta.env.BASE_URL}modules/pujas/css/style.css`;
      document.head.appendChild(link);
    }

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.body.appendChild(script);
      });
    };

    let isMounted = true;

    async function initPujas() {
      const base = `${import.meta.env.BASE_URL}modules/pujas/js/`;
      await loadScript(`${base}data/panchang-data.js`);
      await loadScript(`${base}data/pujas-life-phase.js`);
      await loadScript(`${base}data/pujas-vratams.js`);
      await loadScript(`${base}data/pujas-pariharams.js`);
      await loadScript(`${base}data/pujas-daily.js`);
      await loadScript(`${base}data/pujas-data.js`);
      await loadScript(`${base}storage.js`);
      await loadScript(`${base}audio-player.js`);
      await loadScript(`${base}sankalpam.js`);
      await loadScript(`${base}app.js`);

      if (isMounted) {
        try {
          window.dispatchEvent(new Event('DOMContentLoaded'));
        } catch (e) {
          console.warn('Pujas init:', e);
        }
      }
    }

    initPujas();

    return () => {
      isMounted = false;
      if (typeof window !== 'undefined' && (window as any).PujaAudioPlayer?.stop) {
        (window as any).PujaAudioPlayer.stop();
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="pujas-standalone-wrapper min-h-screen text-slate-100 bg-[#0b0d11]">
      {/* NAVBAR */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#pujasGrid" className="brand">
            <div className="brand-icon">
              🪔
            </div>
            <div className="brand-title">
              <span>SANATANA PUJAS</span>
              <span>సనాతన పూజా విధి</span>
            </div>
          </a>

          <div className="nav-controls">
            <button className="btn-control" id="templeBellBtn" title="Ring Temple Bell">
              🔔 <span data-i18n="templeBell">Temple Bell</span>
            </button>
            <button className="btn-control" id="conchBtn" title="Sound Conch">
              🐚 <span data-i18n="conch">Sacred Conch</span>
            </button>
            <button className="btn-control" id="wakeLockBtn" title="Keep Screen Awake During Puja">
              🛡️ <span data-i18n="screenWakeOff">Keep Screen Awake</span>
            </button>
            <button className="btn-control" id="langToggleBtn" title="Switch Language">
              🌐 తెలుగు
            </button>
            <button className="btn-control" id="themeToggleBtn" title="Toggle Theme">
              Light Theme
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-om">ॐ</div>
        <h1 className="hero-title">
          <span className="gradient-text" data-i18n="siteTitle">Sanatana Pujas & Pariharams</span>
        </h1>
        <p className="hero-subtitle" data-i18n="siteTagline">
          Hindu Rituals, Samskaras, Vratams & Pariharams by Life Phase with Voice Audio
        </p>

        <div className="hero-badges">
          <span className="badge">🌸 <b>16</b> Shodasha Samskaras</span>
          <span className="badge">🪔 <b>7+</b> Major Vratams</span>
          <span className="badge">🔱 <b>6+</b> Dosha Pariharams</span>
          <span className="badge">🔊 <b>100%</b> Voice Audio</span>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" id="heroSankalpamBtn">
            ✨ <span data-i18n="generateSankalpam">Personalized Sankalpam</span>
          </button>
        </div>
      </header>

      {/* MAIN DASHBOARD */}
      <main className="main-content">
        <section className="filter-bar">
          <div className="search-wrapper">
            <input
              type="text"
              id="pujaSearchInput"
              className="search-input"
              placeholder="Search pujas, vratams, mantras, deities (e.g. Satyanarayana, Seemantham)..."
              autoComplete="off"
            />
            <button className="btn-clear-search" id="clearSearchBtn" title="Clear Search">✕</button>
          </div>

          <div className="categories-pill-row">
            <button className="category-pill active" data-category="all">
              <span>🪔</span> <span data-i18n="catAll">All Pujas</span>
            </button>
            <button className="category-pill" data-category="life-phase">
              <span>🌱</span> <span data-i18n="catLifePhase">Life Phase Samskaras</span>
            </button>
            <button className="category-pill" data-category="vratam-festival">
              <span>✨</span> <span data-i18n="catVratams">Vratams & Festivals</span>
            </button>
            <button className="category-pill" data-category="pariharam">
              <span>🪐</span> <span data-i18n="catPariharams">Dosha Pariharams</span>
            </button>
            <button className="category-pill" data-category="daily">
              <span>☀️</span> <span data-i18n="catDaily">Daily Observances</span>
            </button>
          </div>
        </section>

        <section className="pujas-section">
          <div className="section-meta">
            <span id="resultsCount">Showing 21 Rituals</span>
          </div>

          <div className="pujas-grid" id="pujasGrid">
            {/* Populated dynamically by app.js */}
          </div>
        </section>
      </main>

      {/* AUDIO RECITATION DOCK */}
      <div className="audio-dock hidden" id="audioDock">
        <div className="dock-container">
          <div className="dock-details">
            <span className="dock-icon">🪔</span>
            <div>
              <div className="dock-title" id="dockPujaTitle">Puja Audio Chanting</div>
              <div className="dock-subtitle" id="dockStepTitle">Ready to chant</div>
            </div>
          </div>

          <div className="dock-controls">
            <button className="dock-btn" id="dockPrevBtn" title="Previous Step">⏮</button>
            <button className="dock-btn play-btn" id="dockPlayBtn" title="Play / Pause">▶</button>
            <button className="dock-btn" id="dockNextBtn" title="Next Step">⏭</button>
            <button className="dock-btn" id="dockStopBtn" title="Stop Chanting">⏹</button>
            <select id="dockSpeedSelect" className="dock-select" title="Chanting Speed">
              <option value="0.75">0.75x</option>
              <option value="0.9" defaultValue="0.9">0.9x</option>
              <option value="1.0">1.0x</option>
            </select>
          </div>
        </div>
      </div>

      {/* MODAL: SANKALPAM GENERATOR */}
      <div className="modal-backdrop hidden" id="sankalpamModal">
        <div className="modal-card">
          <div className="modal-header">
            <h3>Personalized Vedic Sankalpam Generator</h3>
            <button className="btn-close-modal" id="closeSankalpamModal">✕</button>
          </div>
          <div className="modal-body">
            <form id="sankalpamForm">
              <div className="form-group">
                <label>Devotee Name</label>
                <input type="text" id="devoteeName" placeholder="Your name (e.g. Aditya)" required />
              </div>
              <div className="form-group">
                <label>Spouse Name (Optional)</label>
                <input type="text" id="spouseName" placeholder="Spouse name (if married)" />
              </div>
              <div className="form-group">
                <label>Gotram</label>
                <select id="gotraSelect"></select>
              </div>
              <div className="form-group">
                <label>Janma Nakshatram (Birth Star)</label>
                <select id="nakshatraSelect"></select>
              </div>
              <div className="form-group">
                <label>Location / City</label>
                <input type="text" id="sankalpamCity" defaultValue="Hyderabad" />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Generate Vedic Sankalpam
              </button>
            </form>

            <div className="sankalpam-output hidden" id="sankalpamOutput" style={{ marginTop: '1.5rem' }}>
              <div className="sankalpam-verse" id="sankalpamVerseText"></div>
              <div className="sankalpam-meaning" id="sankalpamMeaningText" style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: PUJA DETAIL MODAL */}
      <div className="modal-backdrop hidden" id="pujaDetailModal">
        <div className="modal-card large">
          <div className="modal-header">
            <div id="modalHeaderTitle"></div>
            <button className="btn-close-modal" id="closePujaDetailModal">✕</button>
          </div>
          <div className="modal-body" id="pujaDetailBody">
            {/* Populated dynamically by app.js */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PujasModule;

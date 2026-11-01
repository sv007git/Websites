import React, { useEffect, useRef } from 'react';

export const StudyModule: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Study stylesheets
    const styles = [
      { id: 'study-main-css', href: `${import.meta.env.BASE_URL}modules/study/css/main.css` },
      { id: 'study-comic-css', href: `${import.meta.env.BASE_URL}modules/study/css/comic-theme.css` },
      { id: 'study-anim-css', href: `${import.meta.env.BASE_URL}modules/study/css/animations.css` },
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
        script.onerror = () => resolve();
        document.body.appendChild(script);
      });
    };

    let isMounted = true;

    async function initStudy() {
      const base = `${import.meta.env.BASE_URL}modules/study/js/`;
      await loadScript(`${base}audio-narrator.js`);
      await loadScript(`${base}ncert-curriculum.js`);
      await loadScript(`${base}comic-stories.js`);
      await loadScript(`${base}interactive-labs.js`);
      await loadScript(`${base}quiz-engine.js`);
      await loadScript(`${base}parent-dashboard.js`);
      await loadScript(`${base}comic-renderer.js`);
      await loadScript(`${base}app.js`);

      if (isMounted) {
        try {
          window.dispatchEvent(new Event('DOMContentLoaded'));
        } catch (e) {
          console.warn('Study init:', e);
        }
      }
    }

    initStudy();

    return () => {
      isMounted = false;
      if (typeof window !== 'undefined' && (window as any).audioNarrator?.stop) {
        (window as any).audioNarrator.stop();
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="study-standalone-wrapper min-h-screen text-slate-900 bg-white">
      {/* Top App Header */}
      <header className="app-header">
        <div className="header-container">
          <div className="brand-section">
            <div className="brand-logo-icon">🐾</div>
            <div className="brand-text">
              <h1>NCERT Cartoon Academy</h1>
              <div className="brand-subtitle">Class 1 to 12 • English Medium • Black &amp; White Comics</div>
            </div>
          </div>

          <nav className="nav-links-bar" aria-label="Main Navigation">
            <a href="#curriculum" className="nav-link active" data-view="browse">📚 Curriculum (1-12)</a>
            <a href="#reader" className="nav-link" data-view="reader">📖 Comic Reader</a>
            <a href="#labs" className="nav-link" data-view="labs">🧪 Mini-Labs</a>
            <a href="#parent-hub" className="nav-link" data-view="dashboard">👨‍👩‍👧‍👦 Parent &amp; Kid Hub</a>
            <a href="#about" className="nav-link" data-view="about">ℹ️ About</a>
          </nav>

          <div className="header-actions">
            <button className="comic-btn" id="test-voice-btn" title="Hear English welcome speech">
              🎙️ English Voice
            </button>
            <button className="comic-btn" id="mute-toggle-btn" title="Toggle sound effects">
              🔊 Sound ON
            </button>
            <button className="comic-btn" id="theme-toggle-btn" title="Switch between Ink and Noir Manga">
              🌙 Noir Mode
            </button>
          </div>
        </div>
      </header>

      {/* Main View Container */}
      <main className="app-main">
        {/* VIEW 1: BROWSE CURRICULUM */}
        <section id="view-browse" className="view-section">
          <div className="class-picker-section">
            <div className="class-picker-title">
              <h2>Select NCERT Class (1 to 12):</h2>
              <span className="hero-stage-tag">All Subjects • English Medium Curriculum</span>
            </div>
            <div className="class-picker-strip" id="class-picker-strip"></div>
          </div>

          <div className="curriculum-search-bar">
            <div className="search-input-wrap">
              <input 
                type="text" 
                id="search-curriculum-input" 
                className="comic-input" 
                placeholder="🔍 Search topics across subjects (e.g., Photosynthesis, Newton's Laws, Fractions, Circuits)..."
                aria-label="Search NCERT Curriculum"
              />
            </div>
          </div>

          <div id="curriculum-grid-container"></div>
        </section>

        {/* VIEW 2: COMIC STRIP READER */}
        <section id="view-reader" className="view-section" style={{ display: 'none' }}>
          <div id="comic-reader-mount"></div>
        </section>

        {/* VIEW 3: INTERACTIVE MINI-LABS */}
        <section id="view-labs" className="view-section" style={{ display: 'none' }}>
          <div className="labs-gallery-header">
            <h2>🧪 Hands-On Interactive Mini-Labs</h2>
            <p>Click and play with tactile, black-and-white, formula-driven science simulators!</p>
          </div>
          <div id="labs-gallery-mount"></div>
        </section>

        {/* VIEW 4: PARENT & KID LEARNING HUB */}
        <section id="view-dashboard" className="view-section" style={{ display: 'none' }}>
          <div id="parent-dashboard-mount"></div>
        </section>

        {/* VIEW 5: ABOUT & PARENT GUIDE */}
        <section id="view-about" className="view-section" style={{ display: 'none' }}>
          <div className="about-academy-card">
            <h2>About NCERT Cartoon Academy</h2>
            <p>
              NCERT Cartoon Academy transforms the standard CBSE / NCERT English Medium syllabus for Class 1 to 12
              into character-driven cartoon comic strips, tactile physics &amp; math simulators, spoken English audio narrations,
              and parent-child dinner conversation prompts.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudyModule;

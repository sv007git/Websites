import React, { useEffect, useRef } from 'react';

export const MyPageModule: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject MyPage Stylesheet
    const linkId = 'mypage-module-styles';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = `${import.meta.env.BASE_URL}modules/mypage/css/style.css`;
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

    async function initMyPage() {
      const base = `${import.meta.env.BASE_URL}modules/mypage/js/`;
      await loadScript(`${base}panchang.js`);
      await loadScript(`${base}suncalc.js`);
      await loadScript(`${base}moon-renderer.js`);
      await loadScript(`${base}dharma-guide.js`);
      await loadScript(`${base}audio-player.js`);
      await loadScript(`${base}news.js`);
      await loadScript(`${base}app.js`);

      // Trigger DOMContentLoaded listener manually if app hasn't initialized yet
      if (isMounted) {
        try {
          if (typeof window !== 'undefined' && (window as any).Panchang && (window as any).SunCalc) {
            // Re-run init if already instantiated
            window.dispatchEvent(new Event('DOMContentLoaded'));
          }
        } catch (e) {
          console.warn('MyPage init:', e);
        }
      }
    }

    initMyPage();

    return () => {
      isMounted = false;
      if (typeof window !== 'undefined' && (window as any).PrabhataAudio?.stop) {
        (window as any).PrabhataAudio.stop();
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="mypage-standalone-wrapper min-h-screen text-slate-100 bg-[#0d0d18]">
      <div className="app-wrapper">
        {/* Top Header */}
        <header className="top-header">
          <div className="brand-section">
            <div className="brand-icon">
              <span style={{ fontSize: '1.8rem' }}>🌅</span>
            </div>
            <div>
              <h1 className="app-title" id="app-title">Prabhata • Daily Morning Sanctuary</h1>
              <div className="brand-sub-row">
                <p className="app-greeting" id="greeting-text">Good Morning! 🌅</p>
                <button id="brand-audio-btn" className="brand-audio-pill" type="button" title="Listen to Prabhata Daily Audio (Shortcut: A)">
                  <span className="audio-wave-icon" id="brand-audio-icon">🔊</span>
                  <span id="brand-audio-label">Listen to Prabhata</span>
                </button>
              </div>
            </div>
          </div>

          <div className="clock-section">
            <div className="live-clock" id="live-clock">--:--:--</div>
            <div className="clock-meta">
              <span id="live-date">--</span>
              <span className="tz-badge">IST</span>
            </div>
          </div>

          <div className="controls-section">
            <div className="city-select-wrap">
              <select id="city-select" className="city-select" title="Select your city"></select>
            </div>

            <div className="header-toggles">
              <button id="audio-briefing-btn" className="header-toggle-btn audio-toggle-btn" type="button" title="Listen to Prabhata Daily Audio (Shortcut: A)">
                <span className="btn-icon" id="audio-btn-icon">🔊</span>
                <span id="audio-btn-label">Listen</span>
              </button>
              <button id="theme-toggle-btn" className="header-toggle-btn" title="Toggle Dark / Light Mode (Shortcut: D)">
                <span className="btn-icon" id="theme-btn-icon">☀️</span>
                <span id="theme-btn-label">Light Mode</span>
              </button>
              <button id="lang-toggle-btn" className="header-toggle-btn" title="Toggle Telugu / English Language (Shortcut: L)">
                <span className="btn-icon">🌐</span>
                <span id="lang-btn-label">తెలుగు</span>
              </button>
            </div>
          </div>
        </header>

        {/* Date Navigation Strip */}
        <nav className="date-nav-strip">
          <div className="date-nav-controls">
            <button id="prev-day-btn" className="nav-btn" data-i18n="prevDay" title="Previous Day ([)">◀ Prev Day</button>
            <button id="today-btn" className="nav-btn today-btn" data-i18n="today" title="Jump to Today (T)">Today</button>
            <button id="next-day-btn" className="nav-btn" data-i18n="nextDay" title="Next Day (])">Next Day ▶</button>
          </div>

          <div className="date-input-wrap">
            <label htmlFor="date-picker">📅</label>
            <input type="date" id="date-picker" title="Pick any calendar date" />
          </div>

          <div className="shortcuts-hint" id="shortcuts-hint">
            Shortcuts: <kbd>T</kbd> Today • <kbd>[</kbd> Prev • <kbd>]</kbd> Next • <kbd>D</kbd> Dark/Light • <kbd>L</kbd> Language
          </div>
        </nav>

        {/* Main Dashboard Grid */}
        <main className="dashboard-grid">
          {/* LEFT COLUMN: TV9 News Hub */}
          <div className="column column-news">
            <article className="card news-hub-card">
              <div className="card-header">
                <div className="card-title-group">
                  <span>📰</span>
                  <h2 id="news-card-title">TV9 Telugu — 4 Minutes 24 Headlines</h2>
                </div>
                <div className="news-header-meta">
                  <button id="refresh-news-btn" className="refresh-btn" title="Refresh Latest Bulletins">🔄</button>
                </div>
              </div>

              <div className="news-tabs">
                <button id="tab-bulletin" className="tab-btn active">
                  <span id="tab-bulletin-label">⚡ 4 Minutes 24 Headlines</span>
                </button>
                <button id="tab-live" className="tab-btn">
                  <span id="tab-live-label">🔴 TV9 Live Broadcast</span>
                </button>
              </div>

              <div className="video-wrapper-16-9">
                <iframe
                  id="news-video-frame"
                  src="https://www.youtube-nocookie.com/embed/OtcTaXH2z78?rel=0"
                  title="TV9 Telugu News Bulletin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="news-details-bar">
                <div className="news-badge-strip">
                  <span className="bulletin-type-badge" id="bulletin-type-badge">Speed News Bulletin</span>
                  <span className="news-relative-time" id="news-relative-time">Today's Latest</span>
                </div>
                <h3 className="news-title" id="news-title">4 Minutes 24 Headlines | TV9 Telugu</h3>
                <div className="news-timestamp" id="news-timestamp">--</div>
              </div>

              <div className="news-action-buttons">
                <a id="watch-yt-btn" href="https://www.youtube.com/watch?v=OtcTaXH2z78" target="_blank" rel="noopener noreferrer" className="news-btn primary">
                  <span>▶️</span> <span id="watch-yt-btn-label">Watch on YouTube</span>
                </a>
              </div>

              <div className="recent-bulletins-box">
                <div className="recent-bulletins-title" id="recent-broadcast-title">Today's Broadcast Editions</div>
                <ul id="recent-bulletins-list" className="recent-bulletins-list"></ul>
              </div>
            </article>

            {/* Daily Dharma & Worship Guide (Omkaram Style) */}
            <article className="card dharma-guide-card" id="daily-dharma-card"></article>
          </div>

          {/* RIGHT COLUMN: Hindu Calendar & Vedic Timings */}
          <div className="column column-panchang">
            <article className="card moon-panchang-card">
              <div className="card-header">
                <div className="card-title-group">
                  <span>🌕</span>
                  <h2 id="panchang-title">Hindu Calendar & Moon Phase</h2>
                </div>
                <span className="telugu-sub" id="panchang-sub">Lunar Phase & Vedic Almanac</span>
              </div>

              <div className="panchang-observance-banner" id="panchang-observance-banner">
                <div className="observance-badge-wrap">
                  <span className="observance-dot">✨</span>
                  <span className="observance-title-text" id="panchang-observance-title">--</span>
                </div>
                <a href="#daily-dharma-card" className="observance-guide-link" id="observance-guide-link">
                  <span id="observance-guide-btn-text">🕉️ Puja Guide</span> ➔
                </a>
              </div>

              <div className="moon-hero-display">
                <div className="moon-visualizer" id="moon-svg-container"></div>
                <div className="moon-meta-primary">
                  <div id="paksha-badge" className="paksha-badge waxing">
                    <span className="paksha-icon">🌓</span>
                    <div className="paksha-info">
                      <span className="paksha-type" id="paksha-type-label">WAXING PHASE</span>
                      <strong className="paksha-name" id="paksha-name-label">Shukla Paksha (Waxing Phase)</strong>
                    </div>
                  </div>

                  <div className="moon-metrics">
                    <div className="illumination-stat" id="moon-illumination">--</div>
                    <div className="phase-name-stat" id="moon-phase-name">--</div>
                    <div className="phase-countdown-stat" id="moon-age">--</div>
                  </div>
                </div>
              </div>

              <div className="tithi-highlight-box">
                <div className="tithi-header">
                  <span className="tithi-label" id="tithi-label">Current Lunar Day (Tithi)</span>
                  <span className="tithi-name" id="tithi-name">--</span>
                </div>
                <div className="tithi-telugu" id="tithi-sub-detail">--</div>
                <div className="tithi-progress-track">
                  <div className="tithi-progress-bar" id="tithi-progress" style={{ width: '50%' }}></div>
                </div>
                <div className="tithi-ends-text" id="tithi-ends">--</div>
              </div>

              <div className="panchang-meta-grid">
                <div className="meta-slot">
                  <span className="meta-label" id="label-nakshatra">Nakshatra</span>
                  <div className="meta-value" id="nakshatra-name">--</div>
                </div>
                <div className="meta-slot">
                  <span className="meta-label" id="label-masa">Lunar Month (Masa)</span>
                  <div className="meta-value" id="masa-name">--</div>
                </div>
                <div className="meta-slot">
                  <span className="meta-label" id="label-vaaram">Weekday (Vaasara)</span>
                  <div className="meta-value" id="vaaram-name">--</div>
                </div>
                <div className="meta-slot">
                  <span className="meta-label" id="label-yoga-karana">Yoga & Karana</span>
                  <div className="meta-value">
                    <span id="yoga-name">--</span> • <span id="karana-name">--</span>
                  </div>
                </div>
              </div>

              {/* Vedic Solar Timings Card */}
              <div className="vedic-timings-strip" style={{ marginTop: '1.25rem' }}>
                <div className="timings-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                  <div className="timing-bubble" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Sunrise & Sunset</div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem' }} id="sunrise-time">--</div>
                  </div>
                  <div className="timing-bubble" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Brahma Muhurtham</div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem' }} id="brahma-muhurtham">--</div>
                  </div>
                  <div className="timing-bubble" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Rahu Kalam</div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#f87171' }} id="rahu-kalam">--</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyPageModule;

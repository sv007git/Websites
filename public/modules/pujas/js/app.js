/**
 * Main Application Orchestrator for Pujas & Pariharams
 * Bulletproof, error-resilient client-side controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DOM Elements (Queried first so all functions have safe access)
  const pujasGrid = document.getElementById('pujasGrid');
  const searchInput = document.getElementById('searchInput');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const wakeLockBtn = document.getElementById('wakeLockBtn');
  const templeBellBtn = document.getElementById('templeBellBtn');
  const conchBtn = document.getElementById('conchBtn');
  const heroSankalpamBtn = document.getElementById('heroSankalpamBtn');
  const footerSankalpamLink = document.getElementById('footerSankalpamLink');

  // Modal Elements
  const pujaModal = document.getElementById('pujaModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalTabs = document.querySelectorAll('.modal-tab');
  const modalBody = document.getElementById('modalBody');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalDeity = document.getElementById('modalDeity');
  const modalPhase = document.getElementById('modalPhase');
  const modalPlayAllBtn = document.getElementById('modalPlayAllBtn');

  // Sankalpam Modal Elements
  const sankalpamModal = document.getElementById('sankalpamModal');
  const closeSankalpamModalBtn = document.getElementById('closeSankalpamModalBtn');
  const generateSankalpamSubmit = document.getElementById('generateSankalpamSubmit');
  const sankalpamOutput = document.getElementById('sankalpamOutput');
  const speakSankalpamBtn = document.getElementById('speakSankalpamBtn');
  const sankalpamGotra = document.getElementById('sankalpamGotra');
  const sankalpamNakshatra = document.getElementById('sankalpamNakshatra');
  const sankalpamName = document.getElementById('sankalpamName');
  const sankalpamSpouse = document.getElementById('sankalpamSpouse');

  // Audio Dock Elements
  const audioDock = document.getElementById('audioDock');
  const dockPlayPauseBtn = document.getElementById('dockPlayPauseBtn');
  const dockPrevBtn = document.getElementById('dockPrevBtn');
  const dockNextBtn = document.getElementById('dockNextBtn');
  const dockCloseBtn = document.getElementById('dockCloseBtn');
  const dockTitle = document.getElementById('dockTitle');
  const dockSubtitle = document.getElementById('dockSubtitle');
  const speedSelect = document.getElementById('speedSelect');

  // 2. Application State
  let currentLanguage = 'en'; // Default to English as per user setting
  let currentTheme = 'dark';
  let currentCategory = 'all';
  let searchQuery = '';
  let activePuja = null;
  let activeModalTab = 'vidhi';
  let wakeLock = null;

  // 3. Audio Player Instance (Safe instantiation)
  let audioPlayer = null;
  try {
    audioPlayer = new PujaAudioPlayer();
    audioPlayer.onStateChangeCallback = (state) => {
      updateAudioDockUI(state);
    };
    audioPlayer.onStepChangeCallback = (item) => {
      highlightActiveStep(item);
    };
  } catch (err) {
    console.warn("Audio player initialization warning:", err);
    // Fallback dummy object if Audio/Speech is blocked
    audioPlayer = {
      playTempleBell: () => {},
      playConchSound: () => {},
      speakText: () => {},
      startPujaRecitation: () => {},
      speakStep: () => {},
      speakMantraOnly: () => {},
      togglePlayPause: () => {},
      prev: () => {},
      next: () => {},
      stopSpeech: () => {},
      setRate: () => {},
      setLanguage: () => {}
    };
  }

  // 4. Translations Dictionary
  const UI_STRINGS = {
    te: {
      siteTitle: "సనాతన పూజా విధి & పరిహారాలు",
      siteTagline: "జీవిత దశలవారీగా హిందూ సంస్కారాలు, వ్రతాలు, పరిహారాలు & మంత్రోచ్ఛారణ",
      searchPlaceholder: "పూజ, వ్రతం, పరిహారం లేదా దేవత పేరు వెతకండి...",
      allCategories: "అన్నీ (సర్వ పూజలు)",
      lifePhase: "🌸 షోడశ సంస్కారాలు (జీవిత దశలు)",
      vratams: "🪔 వ్రతాలు & పండుగలు",
      pariharams: "🔱 దోష పరిహారాలు & శాంతి",
      daily: "☀️ నిత్య & వార పూజలు",
      bookmarks: "⭐ నా ప్రియమైనవి",
      viewVidhi: "పూజా విధానం చూడండి",
      listenAudio: "ఆడియో వినండి",
      samagriTitle: "పూజా సామగ్రి",
      vidhiTitle: "క్రమ పద్ధతి (విధానం)",
      mantrasTitle: "మంత్రాలు & భావము",
      timingTitle: "శుభ సమయం & కాలం",
      copyWhatsapp: "వాట్సాప్‌లో పంపండి",
      resetChecklist: "రీసెట్ చేయండి",
      itemsCollected: "సేకరించిన వస్తువులు",
      generateSankalpam: "సంకల్పం తయారుచేసుకోండి",
      speakStep: "ఈ భాగం వినండి",
      speakMantra: "మంత్రం వినండి",
      playFullPuja: "సంపూర్ణ పూజా పఠనం (పురోహిత మోడ్)",
      screenWakeOn: "స్క్రీన్ మేల్కొని ఉంది",
      screenWakeOff: "స్క్రీన్ లాక్ నివారించండి",
      templeBell: "పూజా గంట",
      conch: "శంఖనాదం",
      sankalpamModalTitle: "వైదిక సంకల్ప కర్తృత్వం",
      yourGotra: "మీ గోత్రం",
      yourNakshatra: "మీ నక్షత్రం",
      yourName: "మీ పేరు",
      spouseName: "ధర్మపత్ని / భర్త పేరు (ఐచ్ఛికం)",
      generateBtn: "సంకల్పం రూపొందించండి",
      listenSankalpam: "సంకల్పం వినండి",
      close: "మూసివేయి",
      noResults: "ఎటువంటి ఫలితాలు లభించలేదు. దయచేసి మరొక పేరుతో శోధించండి."
    },
    en: {
      siteTitle: "Sanatana Pujas & Pariharams",
      siteTagline: "Hindu Rituals, Samskaras, Vratams & Pariharams by Life Phase with Audio",
      searchPlaceholder: "Search puja, festival, pariharam, or deity...",
      allCategories: "All Pujas",
      lifePhase: "🌸 Life Phases (Samskaras)",
      vratams: "🪔 Vratams & Festivals",
      pariharams: "🔱 Dosha Pariharams",
      daily: "☀️ Daily Observances",
      bookmarks: "⭐ Bookmarks",
      viewVidhi: "View Step-by-Step Vidhi",
      listenAudio: "Listen Audio",
      samagriTitle: "Things Needed (Samagri)",
      vidhiTitle: "Step-by-Step Procedure",
      mantrasTitle: "Mantras & Meanings",
      timingTitle: "Auspicious Timing",
      copyWhatsapp: "Copy to WhatsApp",
      resetChecklist: "Reset List",
      itemsCollected: "Items Gathered",
      generateSankalpam: "Personalized Sankalpam",
      speakStep: "Listen Step",
      speakMantra: "Chant Mantra",
      playFullPuja: "Full Puja Guidance (Priest Mode)",
      screenWakeOn: "Screen Awake Active",
      screenWakeOff: "Keep Screen Awake",
      templeBell: "Temple Bell",
      conch: "Sacred Conch",
      sankalpamModalTitle: "Personalized Vedic Sankalpam Builder",
      yourGotra: "Your Gotram",
      yourNakshatra: "Your Birth Star (Nakshatra)",
      yourName: "Your Full Name",
      spouseName: "Spouse Name (Optional)",
      generateBtn: "Generate Sankalpam",
      listenSankalpam: "Listen to Sankalpam",
      close: "Close",
      noResults: "No matching rituals found. Try a different search keyword."
    }
  };

  // 5. Theme Functionality
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof Storage !== 'undefined' && Storage.saveSettings) {
      const settings = Storage.getSettings ? Storage.getSettings() : {};
      settings.theme = theme;
      settings.language = currentLanguage;
      Storage.saveSettings(settings);
    }
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark'
        ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> ${currentLanguage === 'en' ? 'Light Theme' : 'శ్వేత థీమ్'}`
        : `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg> ${currentLanguage === 'en' ? 'Dark Theme' : 'రాత్రి థీమ్'}`;
    }
  }

  // 6. Language Functionality
  function setLanguage(lang) {
    currentLanguage = lang;
    if (audioPlayer && audioPlayer.setLanguage) {
      audioPlayer.setLanguage(lang);
    }
    if (typeof Storage !== 'undefined' && Storage.saveSettings) {
      const settings = Storage.getSettings ? Storage.getSettings() : {};
      settings.language = lang;
      settings.theme = currentTheme;
      Storage.saveSettings(settings);
    }

    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'en' ? '🌐 తెలుగు' : '🌐 English';
    }

    updateUIStrings();
    renderPujas();

    if (activePuja) {
      renderModalContent(activePuja, activeModalTab);
    }
  }

  function updateUIStrings() {
    const s = UI_STRINGS[currentLanguage] || UI_STRINGS['te'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el && typeof el.getAttribute === 'function') {
        const key = el.getAttribute('data-i18n');
        if (key && s[key]) {
          el.textContent = s[key];
        }
      }
    });

    if (searchInput) {
      searchInput.placeholder = s.searchPlaceholder;
    }

    if (themeToggleBtn) {
      applyTheme(currentTheme);
    }
  }

  // 7. Screen Wake Lock
  async function toggleWakeLock() {
    if ('wakeLock' in navigator) {
      try {
        if (!wakeLock) {
          wakeLock = await navigator.wakeLock.request('screen');
          if (wakeLockBtn) {
            wakeLockBtn.classList.add('active');
            wakeLockBtn.innerHTML = `🛡️ ${UI_STRINGS[currentLanguage].screenWakeOn}`;
          }
          wakeLock.addEventListener('release', () => {
            wakeLock = null;
            if (wakeLockBtn) {
              wakeLockBtn.classList.remove('active');
              wakeLockBtn.innerHTML = `🛡️ ${UI_STRINGS[currentLanguage].screenWakeOff}`;
            }
          });
        } else {
          await wakeLock.release();
          wakeLock = null;
          if (wakeLockBtn) {
            wakeLockBtn.classList.remove('active');
            wakeLockBtn.innerHTML = `🛡️ ${UI_STRINGS[currentLanguage].screenWakeOff}`;
          }
        }
      } catch (err) {
        console.warn("Wake lock request failed", err);
      }
    } else {
      alert("Wake Lock is not supported in this browser. Keep your screen timeout set to 'Never' while performing puja.");
    }
  }

  // 8. Filter & Search Logic
  function getFilteredPujas() {
    const query = searchQuery.trim().toLowerCase();
    const bookmarks = (typeof Storage !== 'undefined' && Storage.getBookmarks) ? Storage.getBookmarks() : [];
    const dataset = (typeof PUJAS_DATA !== 'undefined') ? PUJAS_DATA : [];

    return dataset.filter(puja => {
      // Category match
      let matchesCategory = true;
      if (currentCategory === 'bookmarks') {
        matchesCategory = bookmarks.includes(puja.id);
      } else if (currentCategory !== 'all') {
        matchesCategory = puja.category === currentCategory;
      }

      if (!matchesCategory) return false;

      // Search match
      if (!query) return true;

      const titleEn = (puja.title && puja.title.en ? puja.title.en : '').toLowerCase();
      const titleTe = (puja.title && puja.title.te ? puja.title.te : '').toLowerCase();
      const subEn = (puja.subtitle && puja.subtitle.en ? puja.subtitle.en : '').toLowerCase();
      const subTe = (puja.subtitle && puja.subtitle.te ? puja.subtitle.te : '').toLowerCase();
      const deityEn = (puja.deity || '').toLowerCase();
      const deityTe = (puja.deityTe || '').toLowerCase();

      return titleEn.includes(query) ||
             titleTe.includes(query) ||
             subEn.includes(query) ||
             subTe.includes(query) ||
             deityEn.includes(query) ||
             deityTe.includes(query);
    });
  }

  // 9. Render Pujas Cards Grid
  function renderPujas() {
    if (!pujasGrid) return;
    const items = getFilteredPujas();
    pujasGrid.innerHTML = '';

    if (items.length === 0) {
      pujasGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🪔</div>
          <p style="font-size: 1.1rem; color: var(--text-secondary);">${UI_STRINGS[currentLanguage].noResults}</p>
        </div>
      `;
      return;
    }

    items.forEach(puja => {
      const isBookmarked = (typeof Storage !== 'undefined' && Storage.isBookmarked) ? Storage.isBookmarked(puja.id) : false;
      const title = currentLanguage === 'te' ? puja.title.te : puja.title.en;
      const subtitle = currentLanguage === 'te' ? puja.subtitle.te : puja.subtitle.en;
      const phase = currentLanguage === 'te' ? (puja.phaseTe || puja.phase) : puja.phase;
      const deity = currentLanguage === 'te' ? (puja.deityTe || puja.deity) : puja.deity;
      const timing = (puja.bestTiming && puja.bestTiming[currentLanguage]) ? puja.bestTiming[currentLanguage].tithi : '';

      const card = document.createElement('div');
      card.className = 'puja-card';
      card.innerHTML = `
        <div>
          <div class="card-header">
            <span class="phase-pill">${phase}</span>
            <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${puja.id}" title="Bookmark">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
          </div>
          <h3 class="card-title">${title}</h3>
          <p class="card-subtitle">${subtitle}</p>
          <div class="card-meta">
            <div class="meta-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span><strong>${currentLanguage === 'te' ? 'శుభ సమయం:' : 'Timing:'}</strong> ${timing}</span>
            </div>
            <div class="meta-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span><strong>${currentLanguage === 'te' ? 'దేవత:' : 'Deity:'}</strong> ${deity}</span>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn-card-primary btn-view-puja" data-id="${puja.id}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            ${UI_STRINGS[currentLanguage].viewVidhi}
          </button>
          <button class="btn-card-audio btn-quick-audio" data-id="${puja.id}" title="${UI_STRINGS[currentLanguage].listenAudio}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
        </div>
      `;

      // Event listeners
      card.querySelector('.btn-bookmark').addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof Storage !== 'undefined' && Storage.toggleBookmark) {
          Storage.toggleBookmark(puja.id);
          renderPujas();
        }
      });

      card.querySelector('.btn-view-puja').addEventListener('click', () => {
        openPujaModal(puja);
      });

      card.querySelector('.btn-quick-audio').addEventListener('click', (e) => {
        e.stopPropagation();
        openPujaModal(puja);
        startPujaAudio(puja);
      });

      pujasGrid.appendChild(card);
    });
  }

  // 10. Open/Close Puja Details Modal
  function openPujaModal(puja) {
    activePuja = puja;
    const title = currentLanguage === 'te' ? puja.title.te : puja.title.en;
    const subtitle = currentLanguage === 'te' ? puja.subtitle.te : puja.subtitle.en;
    const phase = currentLanguage === 'te' ? (puja.phaseTe || puja.phase) : puja.phase;
    const deity = currentLanguage === 'te' ? (puja.deityTe || puja.deity) : puja.deity;

    if (modalTitle) modalTitle.textContent = title;
    if (modalSubtitle) modalSubtitle.textContent = subtitle;
    if (modalPhase) modalPhase.textContent = phase;
    if (modalDeity) modalDeity.textContent = deity;

    activeModalTab = 'vidhi';
    updateModalTabsUI();
    renderModalContent(puja, activeModalTab);

    if (pujaModal) {
      pujaModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closePujaModal() {
    if (pujaModal) {
      pujaModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  }

  function updateModalTabsUI() {
    modalTabs.forEach(tab => {
      const tabName = tab.getAttribute('data-tab');
      tab.classList.toggle('active', tabName === activeModalTab);
    });
  }

  // 11. Modal Content Tabs
  function renderModalContent(puja, tab) {
    if (!modalBody) return;
    modalBody.innerHTML = '';

    if (tab === 'vidhi') {
      renderVidhiTab(puja);
    } else if (tab === 'samagri') {
      renderSamagriTab(puja);
    } else if (tab === 'mantras') {
      renderMantrasTab(puja);
    } else if (tab === 'timing') {
      renderTimingTab(puja);
    }
  }

  // Vidhi Tab
  function renderVidhiTab(puja) {
    const container = document.createElement('div');

    const introBox = document.createElement('div');
    introBox.style.cssText = 'background: var(--bg-card); border-left: 4px solid var(--accent-saffron); padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;';
    introBox.innerHTML = `
      <h4 style="color: var(--accent-gold); margin-bottom: 0.35rem; font-weight: 700;">${currentLanguage === 'te' ? 'వైదిక ప్రాశస్త్యం & మహత్యం' : 'Sacred Significance'}</h4>
      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${currentLanguage === 'te' ? puja.significance.te : puja.significance.en}</p>
    `;
    container.appendChild(introBox);

    puja.steps.forEach((step, idx) => {
      const stepTitle = currentLanguage === 'te' ? step.title.te : step.title.en;
      const stepDesc = currentLanguage === 'te' ? step.description.te : step.description.en;
      const mantraScript = currentLanguage === 'te' ? (step.mantra.scriptTe || step.mantra.sanskrit) : (step.mantra.sanskrit || step.mantra.scriptTe);
      const transliteration = step.mantra.transliteration;
      const meaning = currentLanguage === 'te' ? step.meaning.te : step.meaning.en;

      const stepEl = document.createElement('div');
      stepEl.className = 'step-card';
      stepEl.id = `step-card-${idx}`;
      stepEl.innerHTML = `
        <div class="step-card-header">
          <span class="step-number-badge">${step.stepNumber}</span>
          <h3 class="step-title">${stepTitle}</h3>
          <div class="step-audio-actions">
            <button class="btn-step-speech btn-speak-step" title="${UI_STRINGS[currentLanguage].speakStep}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
              ${UI_STRINGS[currentLanguage].speakStep}
            </button>
            <button class="btn-step-speech btn-speak-mantra" title="${UI_STRINGS[currentLanguage].speakMantra}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/></svg>
              ${UI_STRINGS[currentLanguage].speakMantra}
            </button>
          </div>
        </div>
        <p class="step-desc">${stepDesc}</p>
        <div class="mantra-box">
          <div class="mantra-text">${mantraScript}</div>
          ${transliteration ? `<div class="mantra-transliteration">${transliteration}</div>` : ''}
          <div class="mantra-meaning"><strong>${currentLanguage === 'te' ? 'భావము / తాత్పర్యం:' : 'Meaning:'}</strong> ${meaning}</div>
        </div>
      `;

      stepEl.querySelector('.btn-speak-step').addEventListener('click', () => {
        if (audioPlayer && audioPlayer.speakStep) {
          audioPlayer.speakStep(step, currentLanguage);
        }
        highlightActiveCard(stepEl);
      });

      stepEl.querySelector('.btn-speak-mantra').addEventListener('click', () => {
        if (audioPlayer && audioPlayer.speakMantraOnly) {
          audioPlayer.speakMantraOnly(step, currentLanguage);
        }
        highlightActiveCard(stepEl);
      });

      container.appendChild(stepEl);
    });

    modalBody.appendChild(container);
  }

  // Samagri Tab
  function renderSamagriTab(puja) {
    const savedChecked = (typeof Storage !== 'undefined' && Storage.getChecklist) ? Storage.getChecklist(puja.id) : [];
    const container = document.createElement('div');

    const toolbar = document.createElement('div');
    toolbar.className = 'samagri-toolbar';
    toolbar.innerHTML = `
      <div class="samagri-progress">
        ${UI_STRINGS[currentLanguage].itemsCollected}: <span id="checkedCount">${savedChecked.length}</span> / ${puja.samagri.length}
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn-secondary" id="btnShareWhatsapp" style="padding: 0.4rem 0.85rem; font-size: 0.85rem;">
          💬 ${UI_STRINGS[currentLanguage].copyWhatsapp}
        </button>
        <button class="btn-secondary" id="btnResetChecklist" style="padding: 0.4rem 0.85rem; font-size: 0.85rem;">
          🔄 ${UI_STRINGS[currentLanguage].resetChecklist}
        </button>
      </div>
    `;
    container.appendChild(toolbar);

    const list = document.createElement('ul');
    list.className = 'samagri-list';

    puja.samagri.forEach((item, idx) => {
      const isChecked = savedChecked.includes(idx);
      const name = currentLanguage === 'te' ? item.nameTe : item.nameEn;
      const note = currentLanguage === 'te' ? (item.noteTe || '') : (item.noteEn || '');

      const li = document.createElement('li');
      li.className = `samagri-item ${isChecked ? 'checked' : ''}`;
      li.innerHTML = `
        <input type="checkbox" class="samagri-checkbox" ${isChecked ? 'checked' : ''} data-index="${idx}">
        <div class="samagri-details">
          <div class="samagri-name">${name}</div>
          <div class="samagri-qty">${item.quantity} ${note ? `• ${note}` : ''}</div>
        </div>
      `;

      li.addEventListener('click', (e) => {
        const checkbox = li.querySelector('.samagri-checkbox');
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
        }
        li.classList.toggle('checked', checkbox.checked);

        if (typeof Storage !== 'undefined' && Storage.getChecklist) {
          const currentList = Storage.getChecklist(puja.id);
          const itemIdx = idx;
          const existsAt = currentList.indexOf(itemIdx);

          if (checkbox.checked && existsAt === -1) {
            currentList.push(itemIdx);
          } else if (!checkbox.checked && existsAt > -1) {
            currentList.splice(existsAt, 1);
          }

          Storage.saveChecklist(puja.id, currentList);
          const countEl = document.getElementById('checkedCount');
          if (countEl) countEl.textContent = currentList.length;
        }
      });

      list.appendChild(li);
    });

    container.appendChild(list);
    modalBody.appendChild(container);

    // Toolbar buttons
    const btnShare = document.getElementById('btnShareWhatsapp');
    if (btnShare) {
      btnShare.addEventListener('click', () => {
        let text = `*${currentLanguage === 'te' ? puja.title.te : puja.title.en} - ${UI_STRINGS[currentLanguage].samagriTitle}*\n\n`;
        puja.samagri.forEach((item, i) => {
          const name = currentLanguage === 'te' ? item.nameTe : item.nameEn;
          text += `${i + 1}. ${name} - ${item.quantity}\n`;
        });
        text += `\nVia: https://sv007git.github.io/Pujas/`;

        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
      });
    }

    const btnReset = document.getElementById('btnResetChecklist');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (typeof Storage !== 'undefined' && Storage.clearChecklist) {
          Storage.clearChecklist(puja.id);
          renderSamagriTab(puja);
        }
      });
    }
  }

  // Mantras Tab
  function renderMantrasTab(puja) {
    const container = document.createElement('div');
    puja.steps.forEach((step, idx) => {
      const stepTitle = currentLanguage === 'te' ? step.title.te : step.title.en;
      const mantraScript = currentLanguage === 'te' ? (step.mantra.scriptTe || step.mantra.sanskrit) : (step.mantra.sanskrit || step.mantra.scriptTe);
      const transliteration = step.mantra.transliteration;
      const meaning = currentLanguage === 'te' ? step.meaning.te : step.meaning.en;

      const box = document.createElement('div');
      box.className = 'step-card';
      box.innerHTML = `
        <div class="step-card-header">
          <span class="step-number-badge">${step.stepNumber}</span>
          <h3 class="step-title">${stepTitle}</h3>
          <button class="btn-step-speech btn-chant-single">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
            ${UI_STRINGS[currentLanguage].speakMantra}
          </button>
        </div>
        <div class="mantra-box">
          <div class="mantra-text" style="font-size: 1.35rem; line-height: 1.8;">${mantraScript}</div>
          <div class="mantra-transliteration" style="font-size: 1rem;">${transliteration}</div>
          <div class="mantra-meaning" style="font-size: 0.95rem;">${meaning}</div>
        </div>
      `;

      box.querySelector('.btn-chant-single').addEventListener('click', () => {
        if (audioPlayer && audioPlayer.speakMantraOnly) {
          audioPlayer.speakMantraOnly(step, currentLanguage);
        }
        highlightActiveCard(box);
      });

      container.appendChild(box);
    });
    modalBody.appendChild(container);
  }

  // Timing Tab
  function renderTimingTab(puja) {
    const timing = currentLanguage === 'te' ? puja.bestTiming.te : puja.bestTiming.en;
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;';

    container.innerHTML = `
      <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h3 style="color: var(--accent-gold); margin-bottom: 0.75rem;">📅 ${currentLanguage === 'te' ? 'శుభ ముహూర్తం & కాల సూచిక' : 'Auspicious Muhurtham & Calendar Guidance'}</h3>
        <p style="margin-bottom: 0.75rem;"><strong>${currentLanguage === 'te' ? 'కాలం / మాసం:' : 'Season / Month:'}</strong> ${timing.season}</p>
        <p style="margin-bottom: 0.75rem;"><strong>${currentLanguage === 'te' ? 'శుభ తిథి:' : 'Auspicious Tithi:'}</strong> ${timing.tithi}</p>
        <p style="margin-bottom: 0.75rem;"><strong>${currentLanguage === 'te' ? 'పూజ చేయవలసిన వేళ:' : 'Time of Day:'}</strong> ${timing.timeOfDay}</p>
        <div style="background: var(--bg-surface); padding: 0.85rem; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-amber); margin-top: 1rem;">
          <strong>${currentLanguage === 'te' ? 'విశేష సూచనలు:' : 'Important Guidelines:'}</strong> ${timing.details}
        </div>
      </div>
    `;

    modalBody.appendChild(container);
  }

  function highlightActiveCard(card) {
    document.querySelectorAll('.step-card').forEach(c => c.classList.remove('active-speaking'));
    if (card) {
      card.classList.add('active-speaking');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function highlightActiveStep(item) {
    if (item && item.type === 'step') {
      const card = document.getElementById(`step-card-${item.stepIndex}`);
      highlightActiveCard(card);
    }
  }

  // 12. Audio Dock Execution
  function startPujaAudio(puja) {
    if (!audioDock) return;
    audioDock.classList.add('visible');
    const title = currentLanguage === 'te' ? puja.title.te : puja.title.en;
    if (dockTitle) dockTitle.textContent = title;
    if (dockSubtitle) dockSubtitle.textContent = currentLanguage === 'te' ? 'పురోహిత పఠన ప్రారంభం...' : 'Priest Recitation starting...';

    if (audioPlayer && audioPlayer.startPujaRecitation) {
      audioPlayer.startPujaRecitation(puja, 0, currentLanguage);
    }
  }

  function updateAudioDockUI(state) {
    if (!audioDock || !dockPlayPauseBtn) return;
    if (state && state.isPlaying) {
      audioDock.classList.add('playing');
      dockPlayPauseBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
    } else {
      audioDock.classList.remove('playing');
      dockPlayPauseBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    }
  }

  // 13. Sankalpam Generator Modal
  function openSankalpamModal() {
    if (typeof Storage !== 'undefined' && Storage.getSankalpamProfile) {
      const profile = Storage.getSankalpamProfile();
      if (sankalpamGotra) sankalpamGotra.value = profile.gotra || '';
      if (sankalpamNakshatra) sankalpamNakshatra.value = profile.nakshatra || '';
      if (sankalpamName) sankalpamName.value = profile.name || '';
      if (sankalpamSpouse) sankalpamSpouse.value = profile.spouseName || '';
    }

    generateAndDisplaySankalpam();
    if (sankalpamModal) {
      sankalpamModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function generateAndDisplaySankalpam() {
    if (!sankalpamOutput) return;

    const profile = {
      gotra: sankalpamGotra ? sankalpamGotra.value : '',
      nakshatra: sankalpamNakshatra ? sankalpamNakshatra.value : '',
      name: sankalpamName ? sankalpamName.value : '',
      spouseName: sankalpamSpouse ? sankalpamSpouse.value : ''
    };

    if (typeof Storage !== 'undefined' && Storage.saveSankalpamProfile) {
      Storage.saveSankalpamProfile(profile);
    }

    const pujaName = activePuja
      ? (currentLanguage === 'te' ? activePuja.title.te : activePuja.title.en)
      : (currentLanguage === 'te' ? 'దేవతా పూజాం' : 'Deva Puja');

    let result = null;
    if (typeof Sankalpam !== 'undefined' && Sankalpam.generate) {
      result = Sankalpam.generate(profile, pujaName, currentLanguage);
    } else {
      result = {
        sanskritText: "ఓం తత్సత్! శ్రీ గోవింద గోవింద గోవింద... దేవతా పూజాం కర్మ కరిష్యే ॥",
        transliteration: "Om Tat-Sat! Shri Govinda Govinda Govinda...",
        meaningTe: "సకల ఆయురారోగ్యాలు, ఐశ్వర్య సిద్ధికై పవిత్ర పూజా సంకల్పం చేయుచున్నాను.",
        meaningEn: "For health, peace and spiritual abundance, I perform this sacred puja."
      };
    }

    sankalpamOutput.innerHTML = `
      <div style="background: var(--bg-card); border-left: 4px solid var(--accent-gold); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
        <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem; font-weight: 700;">${currentLanguage === 'te' ? 'సంస్కృత వైదిక సంకల్ప మంత్రం' : 'Vedic Sanskrit Sankalpam'}</h4>
        <div style="font-family: var(--font-telugu); font-size: 1.15rem; line-height: 1.8; color: var(--accent-gold); margin-bottom: 0.75rem;">
          ${result.sanskritText}
        </div>
        <div style="font-size: 0.9rem; font-style: italic; color: var(--text-secondary); margin-bottom: 0.75rem;">
          ${result.transliteration}
        </div>
      </div>
      <div style="background: var(--bg-surface); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <h5 style="color: var(--text-primary); margin-bottom: 0.4rem; font-weight: 600;">${currentLanguage === 'te' ? 'సంకల్ప భావము / తాత్పర్యం' : 'Translation & Meaning'}</h5>
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
          ${currentLanguage === 'te' ? result.meaningTe : result.meaningEn}
        </p>
      </div>
    `;

    if (speakSankalpamBtn) {
      speakSankalpamBtn.onclick = () => {
        if (audioPlayer && audioPlayer.playTempleBell) {
          audioPlayer.playTempleBell();
        }
        setTimeout(() => {
          const textToSpeak = currentLanguage === 'te'
            ? `సంకల్పము: ${result.sanskritText}. భావము: ${result.meaningTe}`
            : `Vedic Sankalpam: ${result.transliteration}. Meaning: ${result.meaningEn}`;
          if (audioPlayer && audioPlayer.speakText) {
            audioPlayer.speakText(textToSpeak, currentLanguage);
          }
        }, 500);
      };
    }
  }

  // 14. Attach All Event Listeners Safely
  function setupEventListeners() {
    // Language Toggle
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        setLanguage(currentLanguage === 'en' ? 'te' : 'en');
      });
    }

    // Theme Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    // Wake Lock
    if (wakeLockBtn) {
      wakeLockBtn.addEventListener('click', toggleWakeLock);
    }

    // Temple Bell & Conch triggers
    if (templeBellBtn) {
      templeBellBtn.addEventListener('click', () => {
        if (audioPlayer && audioPlayer.playTempleBell) audioPlayer.playTempleBell();
      });
    }
    if (conchBtn) {
      conchBtn.addEventListener('click', () => {
        if (audioPlayer && audioPlayer.playConchSound) audioPlayer.playConchSound();
      });
    }

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderPujas();
      });
    }

    // Category Tabs
    if (categoryTabs && categoryTabs.length > 0) {
      categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          categoryTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          currentCategory = tab.getAttribute('data-category');
          renderPujas();
        });
      });
    }

    // Modal Tabs
    if (modalTabs && modalTabs.length > 0) {
      modalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          activeModalTab = tab.getAttribute('data-tab');
          updateModalTabsUI();
          if (activePuja) {
            renderModalContent(activePuja, activeModalTab);
          }
        });
      });
    }

    // Close Modal
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closePujaModal);
    }
    if (pujaModal) {
      pujaModal.addEventListener('click', (e) => {
        if (e.target === pujaModal) closePujaModal();
      });
    }

    // Modal Play All
    if (modalPlayAllBtn) {
      modalPlayAllBtn.addEventListener('click', () => {
        if (activePuja) {
          startPujaAudio(activePuja);
        }
      });
    }

    // Hero & Footer Sankalpam button
    if (heroSankalpamBtn) {
      heroSankalpamBtn.addEventListener('click', openSankalpamModal);
    }
    if (footerSankalpamLink) {
      footerSankalpamLink.addEventListener('click', (e) => {
        e.preventDefault();
        openSankalpamModal();
      });
    }

    // Sankalpam Modal listeners
    if (closeSankalpamModalBtn) {
      closeSankalpamModalBtn.addEventListener('click', () => {
        if (sankalpamModal) {
          sankalpamModal.classList.remove('open');
          document.body.style.overflow = 'auto';
        }
      });
    }
    if (sankalpamModal) {
      sankalpamModal.addEventListener('click', (e) => {
        if (e.target === sankalpamModal) {
          sankalpamModal.classList.remove('open');
          document.body.style.overflow = 'auto';
        }
      });
    }
    if (generateSankalpamSubmit) {
      generateSankalpamSubmit.addEventListener('click', generateAndDisplaySankalpam);
    }

    // Audio Dock controls
    if (dockPlayPauseBtn) {
      dockPlayPauseBtn.addEventListener('click', () => {
        if (audioPlayer && audioPlayer.togglePlayPause) audioPlayer.togglePlayPause();
      });
    }
    if (dockPrevBtn) {
      dockPrevBtn.addEventListener('click', () => {
        if (audioPlayer && audioPlayer.prev) audioPlayer.prev();
      });
    }
    if (dockNextBtn) {
      dockNextBtn.addEventListener('click', () => {
        if (audioPlayer && audioPlayer.next) audioPlayer.next();
      });
    }
    if (dockCloseBtn) {
      dockCloseBtn.addEventListener('click', () => {
        if (audioPlayer && audioPlayer.stopSpeech) audioPlayer.stopSpeech();
        if (audioDock) audioDock.classList.remove('visible');
      });
    }

    if (speedSelect) {
      speedSelect.addEventListener('change', (e) => {
        if (audioPlayer && audioPlayer.setRate) {
          audioPlayer.setRate(parseFloat(e.target.value));
        }
      });
    }
  }

  // 15. Initial Execution (Safe order)
  try {
    const saved = (typeof Storage !== 'undefined' && Storage.getSettings) ? Storage.getSettings() : {};
    currentLanguage = saved.language || 'en'; // Default to English
    currentTheme = saved.theme || 'dark';

    setupEventListeners();
    applyTheme(currentTheme);
    setLanguage(currentLanguage);
  } catch (initErr) {
    console.error("Initialization error:", initErr);
    // Ensure essential cards render even if non-essential features threw
    renderPujas();
  }
});

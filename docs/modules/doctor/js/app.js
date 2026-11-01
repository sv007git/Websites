/**
 * Holistic Medical Web Application Controller
 * Coordinates interactive SVG anatomy viewer, top 10 diseases engine,
 * holistic protocol renderer, Web Speech narration, search, and theme manager.
 * Repository: https://github.com/sv007git/Doctor
 */

class HolisticApp {
  constructor() {
    this.viewer = null;
    this.demographic = "man"; // "man" | "woman" | "baby"
    this.layer = "internals"; // "internals" | "externals"
    this.selectedPartId = "brain";
    this.selectedDiseaseId = null;
    this.searchQuery = "";
    this.activeFilter = "all";
    this.theme = localStorage.getItem("doctor_theme") || "dark";

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.initViewer();
    this.bindDomEvents();
    this.bindAudioEvents();
    this.render();
  }

  applyTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("doctor_theme", theme);

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === "dark" 
        ? `<span class="icon">☀️</span> Light Mode` 
        : `<span class="icon">🌙</span> Dark Mode`;
    }
  }

  toggleTheme() {
    const newTheme = this.theme === "dark" ? "light" : "dark";
    this.applyTheme(newTheme);
    AudioEngine.playChime("select");
  }

  initViewer() {
    this.viewer = new AnatomySVGViewer("anatomy-canvas-container");
    this.viewer.setDemographic(this.demographic);
    this.viewer.setLayer(this.layer);
    this.viewer.selectPart(this.selectedPartId);

    // Event hooks from SVG viewer
    this.viewer.onPartSelect = (partId) => {
      this.selectPart(partId, true);
    };

    this.viewer.onPartHover = (partId, event, rect) => {
      this.handlePartHover(partId, event, rect);
    };
  }

  handlePartHover(partId, event, rect) {
    const tooltip = document.getElementById("anatomy-tooltip");
    if (!tooltip) return;

    if (!partId) {
      tooltip.classList.remove("is-visible");
      return;
    }

    const part = ANATOMY_DATA.parts[partId];
    if (!part) {
      tooltip.classList.remove("is-visible");
      return;
    }

    tooltip.innerHTML = `
      <div class="tooltip-title">${part.name}</div>
      <div class="tooltip-meta">${part.category} &bull; ${part.topDiseases.length} Conditions</div>
    `;

    if (rect) {
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.top = `${rect.top}px`;
    } else if (event) {
      tooltip.style.left = `${event.clientX}px`;
      tooltip.style.top = `${event.clientY - 15}px`;
    }

    tooltip.classList.add("is-visible");
  }

  selectPart(partId, isUserClick = false) {
    if (!ANATOMY_DATA.parts[partId]) return;

    this.selectedPartId = partId;
    this.selectedDiseaseId = null; // reset specific disease
    if (this.viewer) {
      this.viewer.selectPart(partId);
    }

    AudioEngine.playChime("organ");

    if (isUserClick && AudioEngine.autoSpeak) {
      this.speakCurrentPart();
    }

    this.render();

    // On mobile, scroll to content area smoothly
    if (window.innerWidth < 1100 && isUserClick) {
      const target = document.getElementById("content-panel");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  selectDisease(diseaseId, isUserClick = false) {
    this.selectedDiseaseId = diseaseId;
    AudioEngine.playChime("disease");

    const disease = this.findDiseaseById(diseaseId);
    if (disease && isUserClick && AudioEngine.autoSpeak) {
      this.speakDisease(disease);
    }

    this.render();

    // Scroll to deep-dive modal
    const modalEl = document.getElementById("holistic-protocol-container");
    if (modalEl) {
      modalEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  findDiseaseById(diseaseId) {
    for (const part of Object.values(ANATOMY_DATA.parts)) {
      const match = part.topDiseases.find(d => d.id === diseaseId);
      if (match) return match;
    }
    return null;
  }

  setDemographic(demo) {
    if (this.demographic === demo) return;
    this.demographic = demo;
    AudioEngine.playChime("select");

    // Adjust selected part if not applicable
    const currentPart = ANATOMY_DATA.parts[this.selectedPartId];
    if (currentPart && !currentPart.applicableTo.includes(demo)) {
      // Find suitable part
      const fallback = Object.values(ANATOMY_DATA.parts).find(
        p => p.layer === this.layer && p.applicableTo.includes(demo)
      );
      if (fallback) {
        this.selectedPartId = fallback.id;
      }
    }

    if (this.viewer) {
      this.viewer.setDemographic(demo);
      this.viewer.selectPart(this.selectedPartId);
    }

    this.updateSwitcherPills();
    this.render();
  }

  setLayer(layer) {
    if (this.layer === layer) return;
    this.layer = layer;
    AudioEngine.playChime("select");

    // Find default part for new layer
    const fallback = Object.values(ANATOMY_DATA.parts).find(
      p => p.layer === layer && p.applicableTo.includes(this.demographic)
    );
    if (fallback) {
      this.selectedPartId = fallback.id;
    }

    if (this.viewer) {
      this.viewer.setLayer(layer);
      this.viewer.selectPart(this.selectedPartId);
    }

    this.updateSwitcherPills();
    this.render();
  }

  updateSwitcherPills() {
    // Demographic buttons
    document.querySelectorAll("[data-demographic]").forEach(btn => {
      if (btn.getAttribute("data-demographic") === this.demographic) {
        btn.classList.add("is-active");
      } else {
        btn.classList.remove("is-active");
      }
    });

    // Layer buttons
    document.querySelectorAll("[data-layer]").forEach(btn => {
      if (btn.getAttribute("data-layer") === this.layer) {
        btn.classList.add("is-active");
      } else {
        btn.classList.remove("is-active");
      }
    });
  }

  speakCurrentPart() {
    const part = ANATOMY_DATA.parts[this.selectedPartId];
    if (!part) return;
    const demoLabel = ANATOMY_DATA.demographics[this.demographic].label;
    const script = AudioEngine.generatePartScript(part, demoLabel);
    AudioEngine.speak(script);
    this.updateNowPlayingText(`${part.name} Overview`);
  }

  speakDisease(disease) {
    if (!disease) return;
    const script = AudioEngine.generateDiseaseScript(disease);
    AudioEngine.speak(script);
    this.updateNowPlayingText(disease.name);
  }

  updateNowPlayingText(title) {
    const textEl = document.getElementById("audio-now-playing-title");
    if (textEl) {
      textEl.textContent = title;
    }
  }

  bindDomEvents() {
    // Demographic Switcher buttons
    document.querySelectorAll("[data-demographic]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.setDemographic(btn.getAttribute("data-demographic"));
      });
    });

    // Layer Switcher buttons
    document.querySelectorAll("[data-layer]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.setLayer(btn.getAttribute("data-layer"));
      });
    });

    // Theme toggle
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => this.toggleTheme());
    }

    // Zoom Toolbar buttons
    const zoomInBtn = document.getElementById("zoom-in-btn");
    const zoomOutBtn = document.getElementById("zoom-out-btn");
    const zoomResetBtn = document.getElementById("zoom-reset-btn");

    if (zoomInBtn) zoomInBtn.addEventListener("click", () => this.viewer.zoomIn());
    if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => this.viewer.zoomOut());
    if (zoomResetBtn) zoomResetBtn.addEventListener("click", () => this.viewer.resetZoom());

    // Search bar input
    const searchInput = document.getElementById("disease-search-input");
    const searchClear = document.getElementById("search-clear-btn");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (searchClear) {
          if (this.searchQuery) searchClear.classList.add("is-active");
          else searchClear.classList.remove("is-active");
        }
        this.render();
      });
    }

    if (searchClear) {
      searchClear.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        this.searchQuery = "";
        searchClear.classList.remove("is-active");
        this.render();
      });
    }

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      if (e.key === "Escape") {
        if (this.selectedDiseaseId) {
          this.selectedDiseaseId = null;
          this.render();
        } else if (this.searchQuery) {
          this.searchQuery = "";
          const input = document.getElementById("disease-search-input");
          if (input) input.value = "";
          this.render();
        }
      } else if (e.key === "t" || e.key === "T") {
        this.toggleTheme();
      } else if (e.key === " " && AudioEngine.isPlaying) {
        e.preventDefault();
        AudioEngine.pause();
      }
    });
  }

  bindAudioEvents() {
    const playBtn = document.getElementById("global-audio-play-btn");
    const stopBtn = document.getElementById("global-audio-stop-btn");
    const autoSpeakBtn = document.getElementById("auto-speak-toggle-btn");
    const rateSelect = document.getElementById("audio-rate-select");
    const waveEl = document.getElementById("audio-visualizer");

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        if (AudioEngine.isPlaying) {
          AudioEngine.pause();
        } else if (AudioEngine.isPaused) {
          AudioEngine.resume();
        } else {
          // Speak current selection
          if (this.selectedDiseaseId) {
            const disease = this.findDiseaseById(this.selectedDiseaseId);
            this.speakDisease(disease);
          } else {
            this.speakCurrentPart();
          }
        }
      });
    }

    if (stopBtn) {
      stopBtn.addEventListener("click", () => AudioEngine.stop());
    }

    if (autoSpeakBtn) {
      autoSpeakBtn.addEventListener("click", () => {
        const state = AudioEngine.toggleAutoSpeak();
        autoSpeakBtn.classList.toggle("is-active", state);
        autoSpeakBtn.title = state ? "Auto-Speech Enabled" : "Auto-Speech Disabled";
      });
    }

    if (rateSelect) {
      rateSelect.addEventListener("change", (e) => {
        AudioEngine.setRate(e.target.value);
      });
    }

    // Audio Engine State Hook
    AudioEngine.onStateChange = (state) => {
      if (!state) return;
      if (waveEl) {
        if (state.isPlaying) waveEl.classList.add("is-playing");
        else waveEl.classList.remove("is-playing");
      }

      if (playBtn) {
        if (state.isPlaying) {
          playBtn.innerHTML = `<span>⏸</span> Pause`;
        } else if (state.isPaused) {
          playBtn.innerHTML = `<span>▶</span> Resume`;
        } else {
          playBtn.innerHTML = `<span>🔊</span> Read Aloud`;
        }
      }
    };
  }

  render() {
    this.renderOverviewCard();
    this.renderTopDiseases();
    this.renderHolisticProtocol();
  }

  renderOverviewCard() {
    const card = document.getElementById("part-overview-card");
    if (!card) return;

    const part = ANATOMY_DATA.parts[this.selectedPartId];
    if (!part) return;

    const demo = ANATOMY_DATA.demographics[this.demographic];
    const layer = ANATOMY_DATA.layers[this.layer];

    card.innerHTML = `
      <div class="overview-header">
        <div class="overview-heading-area">
          <div class="overview-badge-row">
            <span class="status-badge">${demo.icon} ${demo.label}</span>
            <span class="status-badge">${layer.icon} ${layer.label}</span>
            <span class="status-badge">${part.category}</span>
          </div>
          <h2 class="overview-name">${part.name}</h2>
        </div>
        <button class="action-btn" id="speak-part-btn" title="Listen in English to ${part.name} Guide">
          <span>🔊</span> Read Guide
        </button>
      </div>
      <p class="overview-summary">${part.summary}</p>
      <div class="overview-actions">
        <span class="status-badge">10 Top Conditions Profiled</span>
        <span class="status-badge">Allopathy &bull; Ayurveda &bull; Mudras &bull; Yoga &bull; Nutrition</span>
      </div>
    `;

    const speakBtn = document.getElementById("speak-part-btn");
    if (speakBtn) {
      speakBtn.addEventListener("click", () => this.speakCurrentPart());
    }
  }

  renderTopDiseases() {
    const listContainer = document.getElementById("top-diseases-grid");
    const countBadge = document.getElementById("diseases-count-badge");
    if (!listContainer) return;

    const part = ANATOMY_DATA.parts[this.selectedPartId];
    if (!part) return;

    let diseases = part.topDiseases;

    // Filter by search query if present
    if (this.searchQuery) {
      diseases = diseases.filter(d => 
        d.name.toLowerCase().includes(this.searchQuery) ||
        d.cause.toLowerCase().includes(this.searchQuery) ||
        d.ayurveda.herbs.toLowerCase().includes(this.searchQuery) ||
        d.mudras.primary.toLowerCase().includes(this.searchQuery) ||
        d.vitamins.deficiencies.toLowerCase().includes(this.searchQuery)
      );
    }

    if (countBadge) {
      countBadge.textContent = `${diseases.length} of 10 Diseases`;
    }

    if (diseases.length === 0) {
      listContainer.innerHTML = `
        <div style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md);">
          No conditions match your search query "<strong>${this.searchQuery}</strong>" in ${part.name}.
        </div>
      `;
      return;
    }

    listContainer.innerHTML = diseases.map((d, index) => {
      const isSelected = d.id === this.selectedDiseaseId;
      return `
        <div 
          class="disease-card ${isSelected ? 'is-selected' : ''}" 
          data-disease-id="${d.id}"
          tabindex="0"
          role="button"
          aria-label="${d.name}"
        >
          <div class="disease-card-top">
            <span class="disease-number">#${index + 1}</span>
            <span class="disease-severity">${d.severity}</span>
          </div>
          <h3 class="disease-card-name">${d.name}</h3>
          <p class="disease-card-cause">${d.cause}</p>
          <div class="disease-card-footer">
            <span>${d.category}</span>
            <span>Inspect Protocol &rarr;</span>
          </div>
        </div>
      `;
    }).join("");

    // Bind click events on cards
    listContainer.querySelectorAll(".disease-card").forEach(card => {
      const id = card.getAttribute("data-disease-id");
      card.addEventListener("click", () => this.selectDisease(id, true));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.selectDisease(id, true);
        }
      });
    });
  }

  renderHolisticProtocol() {
    const container = document.getElementById("holistic-protocol-container");
    if (!container) return;

    if (!this.selectedDiseaseId) {
      container.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; border: 1px dashed var(--border-color); border-radius: var(--radius-md); color: var(--text-muted);">
          👆 Select any of the Top 10 diseases above to view the full holistic protocol (Causes, Prevention, Lifestyle, Allopathy, Ayurveda, Mudras, Yoga, Vitamins).
        </div>
      `;
      return;
    }

    const disease = this.findDiseaseById(this.selectedDiseaseId);
    if (!disease) return;

    container.innerHTML = `
      <div class="holistic-protocol-modal">
        <!-- Modal Header -->
        <div class="protocol-header">
          <div class="protocol-title-area">
            <div class="protocol-meta-tags">
              <span class="status-badge">${disease.category}</span>
              <span class="status-badge">${disease.severity}</span>
            </div>
            <h2 class="protocol-name">${disease.name}</h2>
          </div>
          <div class="protocol-actions">
            <button class="action-btn" id="listen-disease-btn" title="Listen to Full English Narration">
              <span>🔊</span> Listen
            </button>
            <button class="action-btn" id="print-protocol-btn" title="Print / Export PDF Protocol">
              <span>🖨️</span> Print
            </button>
            <button class="tool-btn" id="close-protocol-btn" title="Close Protocol View">&times;</button>
          </div>
        </div>

        <!-- 8-Column Holistic Grid -->
        <div class="protocol-grid">
          <!-- 1. ROOT CAUSES -->
          <div class="protocol-block">
            <div class="block-header">
              <span class="block-icon">🔍</span> Root Causes & Pathophysiology
            </div>
            <div class="block-content">${disease.cause}</div>
          </div>

          <!-- 2. PRIMARY PREVENTION -->
          <div class="protocol-block">
            <div class="block-header">
              <span class="block-icon">🛡️</span> Primary Prevention Protocol
            </div>
            <div class="block-content">${disease.prevention}</div>
          </div>

          <!-- 3. LIFESTYLE & DIET -->
          <div class="protocol-block">
            <div class="block-header">
              <span class="block-icon">🌿</span> Lifestyle & Daily Habits
            </div>
            <div class="block-content">${disease.lifestyle}</div>
          </div>

          <!-- 4. MODERN ALLOPATHIC MEDICINE -->
          <div class="protocol-block">
            <div class="block-header">
              <span class="block-icon">💊</span> Modern Allopathic Therapeutics
            </div>
            <div class="block-content">${disease.medicines}</div>
          </div>

          <!-- 5. AYURVEDA -->
          <div class="protocol-block">
            <div class="block-header">
              <span class="block-icon">🫖</span> Ayurveda & Classical Medicine
            </div>
            <div class="block-content">
              <div class="block-subfield"><strong>Dosha:</strong> ${disease.ayurveda.dosha}</div>
              <div class="block-subfield"><strong>Herbs:</strong> ${disease.ayurveda.herbs}</div>
              <div class="block-subfield"><strong>Formulations:</strong> ${disease.ayurveda.formulations}</div>
              <div class="block-subfield"><strong>Therapy:</strong> ${disease.ayurveda.therapy}</div>
            </div>
          </div>

          <!-- 6. THERAPEUTIC MUDRAS -->
          <div class="protocol-block">
            <div class="block-header">
              <span class="block-icon">🖐️</span> Therapeutic Hand Mudras
            </div>
            <div class="block-content">
              <div class="block-subfield"><strong>Primary Mudra:</strong> ${disease.mudras.primary}</div>
              <div class="block-subfield"><strong>Technique:</strong> ${disease.mudras.technique}</div>
              <div class="block-subfield"><strong>Duration:</strong> ${disease.mudras.duration}</div>
              <div class="block-subfield"><strong>Benefits:</strong> ${disease.mudras.benefits}</div>
            </div>
          </div>

          <!-- 7. YOGA & PRANAYAMA -->
          <div class="protocol-block">
            <div class="block-header">
              <span class="block-icon">🧘</span> Yoga Asanas & Pranayama
            </div>
            <div class="block-content">
              <div class="block-subfield"><strong>Asanas:</strong> ${disease.yoga.asanas.join(", ")}</div>
              <div class="block-subfield"><strong>Pranayama:</strong> ${disease.yoga.pranayama.join(", ")}</div>
              ${disease.yoga.cautions ? `<div class="block-subfield"><strong>Cautions:</strong> ${disease.yoga.cautions}</div>` : ""}
            </div>
          </div>

          <!-- 8. VITAMINS & MINERAL DEFICIENCIES -->
          <div class="protocol-block">
            <div class="block-header">
              <span class="block-icon">🧪</span> Vitamin & Mineral Deficiencies
            </div>
            <div class="block-content">
              <div class="block-subfield"><strong>Deficiencies:</strong> ${disease.vitamins.deficiencies}</div>
              <div class="block-subfield"><strong>Food Sources:</strong> ${disease.vitamins.dietarySources}</div>
            </div>
          </div>
        </div>

        <!-- Integrated Daily Regimen Banner -->
        <div class="protocol-integration-banner">
          <div class="integration-title">
            <span>☀️</span> Integrated Daily Holistic Regimen
          </div>
          <div class="integration-text">${disease.holisticIntegration}</div>
        </div>
      </div>
    `;

    // Bind action buttons
    const listenBtn = document.getElementById("listen-disease-btn");
    const printBtn = document.getElementById("print-protocol-btn");
    const closeBtn = document.getElementById("close-protocol-btn");

    if (listenBtn) {
      listenBtn.addEventListener("click", () => this.speakDisease(disease));
    }
    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        this.selectedDiseaseId = null;
        this.render();
      });
    }
  }
}

// Instantiate on DOM load
document.addEventListener("DOMContentLoaded", () => {
  window.App = new HolisticApp();
});

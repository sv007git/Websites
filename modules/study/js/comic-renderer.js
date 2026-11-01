/**
 * Comic Renderer
 * Renders multi-panel comic strips, speech bubbles with directional tails,
 * audio playback controls, and character avatar headers.
 */

class ComicRenderer {
  constructor() {
    this.currentStory = null;
    this.container = null;
  }

  renderStory(story, container) {
    this.currentStory = story;
    this.container = container;
    if (!this.container || !this.currentStory) return;

    const s = this.currentStory;

    this.container.innerHTML = `
      <div class="comic-issue-wrapper">
        <!-- Comic Issue Header -->
        <div class="issue-header-banner">
          <div class="issue-meta">
            <span class="comic-badge">CLASS ${s.classNum} NCERT</span>
            <span class="comic-badge comic-badge-invert">${s.subjectId.toUpperCase()}</span>
            <span class="comic-issue-num">ISSUE #${s.id.slice(-2)}</span>
          </div>

          <h1 class="issue-title">${s.title}</h1>
          <p class="issue-subtitle">${s.subtitle || ""}</p>

          <!-- Audio & Narration Controls -->
          <div class="comic-narration-bar">
            <div class="narration-btn-group">
              <button class="comic-btn comic-btn-lg" id="play-comic-audio-btn">
                <span class="btn-icon">🔊</span> Read Entire Comic Aloud
              </button>
              <button class="comic-btn" id="stop-comic-audio-btn" style="display: none;">
                <span class="btn-icon">⏹️</span> Stop Reading
              </button>
            </div>

            <div class="audio-tweak-controls">
              <div class="tweak-item">
                <label>Reading Speed:</label>
                <select id="comic-speech-rate" class="comic-select-sm">
                  <option value="0.8">0.8x (Slow &amp; Clear)</option>
                  <option value="1.0" selected>1.0x (Normal)</option>
                  <option value="1.2">1.2x (Fast &amp; Peppy)</option>
                </select>
              </div>

              <div class="tweak-item">
                <label>Voice (English):</label>
                <select id="comic-voice-select" class="comic-select-sm">
                  <option value="">Auto-Detect English</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Comic Strip Grid -->
        <div class="comic-panels-grid" id="comic-panels-container">
          ${s.panels.map((p, idx) => `
            <div class="comic-panel-box" id="comic-panel-${idx}" data-index="${idx}">
              <div class="panel-header-strip">
                <span class="panel-num">PANEL ${p.panelNum}</span>
                ${p.soundEffect ? `<span class="sfx-burst">${p.soundEffect}</span>` : ""}
                <button class="panel-speak-btn" data-panel-idx="${idx}" title="Listen to this panel">
                  🔊 Listen
                </button>
              </div>

              <!-- Narration Caption Box -->
              ${p.narration ? `<div class="comic-caption-box">${p.narration}</div>` : ""}

              <!-- Vector Comic Art -->
              <div class="panel-art-frame">
                ${p.svgArt || `<div class="art-placeholder">[Cartoon Scene]</div>`}
              </div>

              <!-- Character Speech Bubble -->
              <div class="speech-bubble-wrapper ${p.characterKey === 'prof-paws' ? 'bubble-left' : 'bubble-right'}">
                <div class="character-mini-tag">
                  <span class="char-icon">${this.getCharacterIcon(p.characterKey)}</span>
                  <strong>${p.speaker}:</strong>
                </div>
                <div class="comic-speech-bubble">
                  <p class="bubble-text">${p.dialogue}</p>
                  <div class="bubble-tail"></div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- NCERT Takeaway Rule Box -->
        <div class="comic-takeaway-box">
          <div class="takeaway-badge">⭐ NCERT KEY TAKEAWAY ⭐</div>
          <p class="takeaway-text">${s.takeaway}</p>
        </div>

        <!-- Bottom Action Bar (Interactive Lab + Quiz) -->
        <div class="comic-bottom-bar">
          ${s.interactiveLabId ? `
            <button class="comic-btn comic-btn-lg" id="open-interactive-lab-btn">
              🧪 Open Hands-On Cartoon Mini-Lab!
            </button>
          ` : ""}
          <button class="comic-btn comic-btn-lg active" id="open-comic-quiz-btn">
            🎯 Take Chapter Quiz &amp; Earn Stars!
          </button>
        </div>

        <!-- Mount containers for Lab & Quiz -->
        <div id="inline-lab-container" class="inline-collapsible-section" style="display: none;"></div>
        <div id="inline-quiz-container" class="inline-collapsible-section" style="display: none;"></div>
      </div>
    `;

    this.bindAudioControls(s);
    this.bindPanelAudio(s);
    this.bindLabAndQuiz(s);
  }

  getCharacterIcon(key) {
    switch (key) {
      case "prof-paws": return "🐱";
      case "pixel-bot": return "🤖";
      case "sparky": return "⚡";
      case "luna-owl": return "🦉";
      case "doodler": return "✏️";
      default: return "👤";
    }
  }

  bindAudioControls(story) {
    const playBtn = this.container.querySelector("#play-comic-audio-btn");
    const stopBtn = this.container.querySelector("#stop-comic-audio-btn");
    const rateSelect = this.container.querySelector("#comic-speech-rate");
    const voiceSelect = this.container.querySelector("#comic-voice-select");

    // Populate voices
    const populateVoiceDropdown = () => {
      const voices = window.audioNarrator.getEnglishVoices();
      if (voices.length > 0) {
        voiceSelect.innerHTML = voices.map(v => 
          `<option value="${v.voiceURI}">${v.name} (${v.lang})</option>`
        ).join("");
        if (window.audioNarrator.selectedVoice) {
          voiceSelect.value = window.audioNarrator.selectedVoice.voiceURI;
        }
      }
    };
    populateVoiceDropdown();
    setTimeout(populateVoiceDropdown, 500);

    voiceSelect.addEventListener("change", (e) => {
      window.audioNarrator.setVoice(e.target.value);
    });

    rateSelect.addEventListener("change", (e) => {
      window.audioNarrator.setSpeed(e.target.value);
    });

    playBtn.addEventListener("click", () => {
      window.audioNarrator.playClick();
      playBtn.style.display = "none";
      stopBtn.style.display = "inline-flex";

      // Clear previous panel highlights
      this.container.querySelectorAll(".comic-panel-box").forEach(p => p.classList.remove("panel-reading-now"));

      window.audioNarrator.startComicAutoNarrate(
        story.panels,
        (currentIdx) => {
          this.container.querySelectorAll(".comic-panel-box").forEach(p => p.classList.remove("panel-reading-now"));
          const panelEl = this.container.querySelector(`#comic-panel-${currentIdx}`);
          if (panelEl) {
            panelEl.classList.add("panel-reading-now");
            panelEl.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        },
        () => {
          this.container.querySelectorAll(".comic-panel-box").forEach(p => p.classList.remove("panel-reading-now"));
          playBtn.style.display = "inline-flex";
          stopBtn.style.display = "none";
          // Record story completed in dashboard
          if (window.parentDashboard) {
            window.parentDashboard.recordStoryCompleted(story.id);
          }
        }
      );
    });

    stopBtn.addEventListener("click", () => {
      window.audioNarrator.stop();
      playBtn.style.display = "inline-flex";
      stopBtn.style.display = "none";
      this.container.querySelectorAll(".comic-panel-box").forEach(p => p.classList.remove("panel-reading-now"));
    });
  }

  bindPanelAudio(story) {
    this.container.querySelectorAll(".panel-speak-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.audioNarrator.playClick();
        const idx = parseInt(btn.getAttribute("data-panel-idx"));
        const panel = story.panels[idx];
        if (!panel) return;

        const panelEl = this.container.querySelector(`#comic-panel-${idx}`);
        this.container.querySelectorAll(".comic-panel-box").forEach(p => p.classList.remove("panel-reading-now"));
        if (panelEl) panelEl.classList.add("panel-reading-now");

        const text = `${panel.speaker || "Narrator"} says: ${panel.dialogue || panel.narration}`;
        window.audioNarrator.speak(text, {
          character: panel.characterKey,
          onEnd: () => {
            if (panelEl) panelEl.classList.remove("panel-reading-now");
          }
        });
      });
    });
  }

  bindLabAndQuiz(story) {
    const labBtn = this.container.querySelector("#open-interactive-lab-btn");
    const quizBtn = this.container.querySelector("#open-comic-quiz-btn");
    const labBox = this.container.querySelector("#inline-lab-container");
    const quizBox = this.container.querySelector("#inline-quiz-container");

    if (labBtn && story.interactiveLabId) {
      labBtn.addEventListener("click", () => {
        window.audioNarrator.playBoing();
        const isHidden = labBox.style.display === "none";
        labBox.style.display = isHidden ? "block" : "none";
        labBtn.textContent = isHidden ? "▲ Close Mini-Lab" : "🧪 Open Hands-On Cartoon Mini-Lab!";
        if (isHidden) {
          window.interactiveLabs.renderLab(story.interactiveLabId, labBox);
          labBox.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    if (quizBtn) {
      quizBtn.addEventListener("click", () => {
        window.audioNarrator.playPop();
        const isHidden = quizBox.style.display === "none";
        quizBox.style.display = isHidden ? "block" : "none";
        quizBtn.textContent = isHidden ? "▲ Hide Quiz" : "🎯 Take Chapter Quiz & Earn Stars!";
        if (isHidden) {
          window.quizEngine.loadQuiz(story.quiz, story.id, quizBox);
          quizBox.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }
}

window.comicRenderer = new ComicRenderer();

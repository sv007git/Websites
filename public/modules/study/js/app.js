/**
 * Main Study Application Controller
 * Handles routing, class 1-12 curriculum browser, search filters,
 * theme toggle, audio controls, and view rendering.
 */

class StudyApp {
  constructor() {
    this.currentView = "browse";
    this.selectedClass = 1;
    this.selectedSubjectId = null;
    this.currentStoryId = "c1-math-shapes";
    this.searchQuery = "";
    this.isNoirTheme = false;

    this.init();
  }

  init() {
    this.bindHeaderControls();
    this.bindNavigation();
    this.renderClassSelector();
    this.renderCurriculumGrid();

    // Default to browsing
    this.navigateTo("browse");

    // Welcome voice announcement on first interaction
    document.addEventListener("click", () => {
      window.audioNarrator.ensureAudioContext();
    }, { once: true });
  }

  bindHeaderControls() {
    // Theme toggle (Classic Ink vs Inverted Noir)
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        window.audioNarrator.playClick();
        this.isNoirTheme = !this.isNoirTheme;
        document.body.classList.toggle("noir-theme", this.isNoirTheme);
        themeBtn.textContent = this.isNoirTheme ? "☀️ Ink on Paper" : "🌙 Noir Dark Manga";
      });
    }

    // Sound FX / Mute toggle
    const muteBtn = document.getElementById("mute-toggle-btn");
    if (muteBtn) {
      muteBtn.addEventListener("click", () => {
        const isMuted = window.audioNarrator.toggleMute();
        muteBtn.textContent = isMuted ? "🔇 Unmute Audio" : "🔊 Sound ON";
        muteBtn.classList.toggle("active", !isMuted);
      });
    }

    // Audio Voice test greeting
    const voiceTestBtn = document.getElementById("test-voice-btn");
    if (voiceTestBtn) {
      voiceTestBtn.addEventListener("click", () => {
        window.audioNarrator.playSuccess();
        window.audioNarrator.speak(
          "Welcome to the NCERT Cartoon Academy! Select any class from 1 to 12, pick a subject, and let's explore science, math, and stories in fun comic strips!",
          { character: "prof-paws" }
        );
      });
    }

    // Search bar
    const searchInput = document.getElementById("search-curriculum-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderCurriculumGrid();
      });
    }
  }

  bindNavigation() {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.audioNarrator.playClick();
        const view = link.getAttribute("data-view");
        this.navigateTo(view);
      });
    });
  }

  navigateTo(view, params = {}) {
    this.currentView = view;
    window.audioNarrator.stop();

    // Update active nav link
    document.querySelectorAll(".nav-link").forEach(l => {
      l.classList.toggle("active", l.getAttribute("data-view") === view);
    });

    // Hide all view sections
    document.querySelectorAll(".view-section").forEach(s => s.style.display = "none");

    const targetEl = document.getElementById(`view-${view}`);
    if (targetEl) {
      targetEl.style.display = "block";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Render content for view
    if (view === "browse") {
      this.renderCurriculumGrid();
    } else if (view === "reader") {
      const storyId = params.storyId || this.currentStoryId;
      this.loadComicReader(storyId);
    } else if (view === "labs") {
      this.renderLabsGallery();
    } else if (view === "dashboard") {
      const dbContainer = document.getElementById("dashboard-mount");
      if (dbContainer && window.parentDashboard) {
        window.parentDashboard.renderDashboard(dbContainer);
      }
    }
  }

  renderClassSelector() {
    const bar = document.getElementById("class-picker-strip");
    if (!bar) return;

    let html = "";
    for (let c = 1; c <= 12; c++) {
      const isSel = (c === this.selectedClass);
      html += `
        <button class="class-tab-btn ${isSel ? 'active' : ''}" data-class="${c}">
          <span class="tab-badge">CLASS</span>
          <span class="tab-num">${c}</span>
        </button>
      `;
    }
    bar.innerHTML = html;

    bar.querySelectorAll(".class-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.audioNarrator.playPop();
        const c = parseInt(btn.getAttribute("data-class"));
        this.selectedClass = c;
        bar.querySelectorAll(".class-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderCurriculumGrid();
        window.audioNarrator.speak(`Class ${c} NCERT subjects loaded.`);
      });
    });
  }

  renderCurriculumGrid() {
    const container = document.getElementById("curriculum-grid-container");
    if (!container) return;

    const classData = NCERT_DATA.classes[this.selectedClass];
    if (!classData) {
      container.innerHTML = `<div class="empty-state">No curriculum data found for Class ${this.selectedClass}.</div>`;
      return;
    }

    // Class header banner
    let headerHtml = `
      <div class="class-hero-banner">
        <div class="class-hero-info">
          <span class="hero-stage-tag">${classData.stage.toUpperCase()} STAGE</span>
          <h2>${classData.title}</h2>
          <p class="hero-tagline">${classData.tagline}</p>
        </div>
        <div class="class-hero-mascot">
          <span class="mascot-emoji">${this.getClassEmoji(this.selectedClass)}</span>
        </div>
      </div>
    `;

    // Filter subjects and chapters if search active
    let subjectsHtml = "";

    classData.subjects.forEach(subj => {
      // Filter chapters based on search query
      const matchingChapters = subj.chapters.filter(ch => {
        if (!this.searchQuery) return true;
        return (
          ch.title.toLowerCase().includes(this.searchQuery) ||
          ch.concept.toLowerCase().includes(this.searchQuery) ||
          subj.name.toLowerCase().includes(this.searchQuery)
        );
      });

      if (matchingChapters.length === 0 && this.searchQuery) return;

      subjectsHtml += `
        <div class="subject-card">
          <div class="subject-card-header">
            <span class="subject-icon">${subj.icon}</span>
            <div class="subject-meta">
              <span class="subject-badge">${subj.badge}</span>
              <h3 class="subject-name">${subj.name}</h3>
            </div>
          </div>
          <p class="subject-desc">${subj.desc}</p>

          <div class="chapters-comic-list">
            ${matchingChapters.map(ch => {
              const hasComic = !!COMIC_STORIES[ch.comicId];
              return `
                <div class="chapter-comic-row ${hasComic ? 'has-comic-ready' : 'comic-coming-soon'}">
                  <div class="chapter-info">
                    <h4 class="chapter-title">${ch.title}</h4>
                    <p class="chapter-concept"><strong>Core Concept:</strong> ${ch.concept}</p>
                    <div class="cartoon-hook">
                      <span class="hook-icon">💡</span>
                      <em>${ch.cartoonHook}</em>
                    </div>
                  </div>

                  <div class="chapter-action-box">
                    ${hasComic ? `
                      <button class="comic-btn active read-comic-btn" data-story-id="${ch.comicId}">
                        📖 Read Comic Strip &amp; Listen
                      </button>
                    ` : `
                      <span class="coming-soon-tag">Issue In Ink</span>
                    `}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    });

    if (!subjectsHtml) {
      subjectsHtml = `
        <div class="empty-state">
          <h3>No matching chapters found for "${this.searchQuery}"</h3>
          <p>Try searching for "Circuits", "Photosynthesis", "Shapes", "Motion", or "Atoms"!</p>
        </div>
      `;
    }

    container.innerHTML = headerHtml + `<div class="subjects-grid">${subjectsHtml}</div>`;

    // Attach click listeners to all comic read buttons
    container.querySelectorAll(".read-comic-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.audioNarrator.playPop();
        const storyId = btn.getAttribute("data-story-id");
        this.currentStoryId = storyId;
        this.navigateTo("reader", { storyId });
      });
    });
  }

  loadComicReader(storyId) {
    const readerMount = document.getElementById("comic-reader-mount");
    if (!readerMount) return;

    const story = COMIC_STORIES[storyId];
    if (!story) {
      readerMount.innerHTML = `
        <div class="empty-state">
          <h2>Comic Issue Not Found!</h2>
          <p>This chapter's cartoon comic strip is currently being inked by our cartoon artists.</p>
          <button class="comic-btn" onclick="window.studyApp.navigateTo('browse')">⬅️ Back to Curriculum</button>
        </div>
      `;
      return;
    }

    window.comicRenderer.renderStory(story, readerMount);
  }

  renderLabsGallery() {
    const galleryMount = document.getElementById("labs-gallery-mount");
    if (!galleryMount) return;

    const labsList = [
      { id: "shape-sorter", name: "Cartoon Shape Sorter Garage", grade: "Class 1 - 2", desc: "Roll circles, slide squares, and fit triangles into matching garages!" },
      { id: "pizza-fraction-lab", name: "The Pizza Monster Fraction Slicer", grade: "Class 3 - 5", desc: "Cut pizzas, eat slices, and see live equivalent fractions and percentages!" },
      { id: "photosynthesis-lab", name: "Chef Leaf Photosynthesis Machine", grade: "Class 3 - 7", desc: "Balance Sunlight, Water, and CO₂ to produce glucose and release fresh O₂!" },
      { id: "circuit-builder", name: "Cartoon Circuit Workbench", grade: "Class 6 - 8", desc: "Connect batteries, flip switches, and test conductors vs insulators!" },
      { id: "newtons-cart", name: "Newton's Cart Launcher (F = ma)", grade: "Class 9 - 11", desc: "Adjust mass and spring push force to watch real-time cart acceleration!" },
      { id: "ohms-law-lab", name: "Ohm's Law Triangle Simulator", grade: "Class 10 - 12", desc: "Manipulate Voltage and Resistance to see electron runners speed up!" }
    ];

    galleryMount.innerHTML = `
      <div class="labs-gallery-page">
        <div class="labs-hero-banner">
          <h2>🧪 Interactive Cartoon Mini-Labs</h2>
          <p>Hands-on black &amp; white simulators designed to make abstract scientific formulas intuitive!</p>
        </div>

        <div class="labs-card-grid">
          ${labsList.map(lab => `
            <div class="lab-select-card" data-lab-id="${lab.id}">
              <span class="lab-card-grade">${lab.grade}</span>
              <h3 class="lab-card-title">${lab.name}</h3>
              <p class="lab-card-desc">${lab.desc}</p>
              <button class="comic-btn active launch-lab-btn" data-lab-id="${lab.id}">Launch Simulator 🚀</button>
            </div>
          `).join("")}
        </div>

        <div id="active-lab-workspace" class="active-lab-workspace" style="display: none;"></div>
      </div>
    `;

    galleryMount.querySelectorAll(".launch-lab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.audioNarrator.playBoing();
        const labId = btn.getAttribute("data-lab-id");
        const workspace = galleryMount.querySelector("#active-lab-workspace");
        workspace.style.display = "block";
        window.interactiveLabs.renderLab(labId, workspace);
        workspace.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  getClassEmoji(c) {
    const emojis = {
      1: "🌱", 2: "🎨", 3: "🚀", 4: "🦁",
      5: "🍕", 6: "💡", 7: "🧪", 8: "🔬",
      9: "⚛️", 10: "🧬", 11: "🌌", 12: "🎓"
    };
    return emojis[c] || "📖";
  }
}

// Bootstrap on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.studyApp = new StudyApp();
});

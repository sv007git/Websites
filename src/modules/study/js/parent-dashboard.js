/**
 * Parent & Kid Learning Dashboard
 * Tracks student progress, completed chapters, quiz scores,
 * unlocks comic badges, provides conversation prompts for parents,
 * and generates a printable Black & White Cartoon Certificate.
 */

class ParentDashboard {
  constructor() {
    this.storageKey = "ncert_comic_study_progress";
    this.data = this.loadData();
  }

  loadData() {
    const fallback = {
      studentName: "Young Scholar",
      grade: 5,
      completedStories: ["c1-math-shapes", "c3-evs-plantfairy", "c6-sci-circuits"],
      quizScores: {
        "c1-math-shapes": { score: 2, total: 2 },
        "c3-evs-plantfairy": { score: 2, total: 2 },
        "c6-sci-circuits": { score: 2, total: 2 }
      },
      stars: 12,
      minutesLearned: 45,
      badges: ["first-comic", "plant-whisperer", "electrician"]
    };

    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return Object.assign({}, fallback, JSON.parse(stored));
      }
    } catch (e) {}

    return fallback;
  }

  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {}
  }

  recordStoryCompleted(storyId) {
    if (!this.data.completedStories.includes(storyId)) {
      this.data.completedStories.push(storyId);
      this.data.stars += 3;
      this.data.minutesLearned += 15;
      this.checkBadgeUnlocks();
      this.saveData();
    }
  }

  recordQuizResult(storyId, score, total) {
    this.data.quizScores[storyId] = { score, total };
    if (!this.data.completedStories.includes(storyId)) {
      this.data.completedStories.push(storyId);
    }
    this.data.stars += score * 2;
    this.checkBadgeUnlocks();
    this.saveData();
  }

  checkBadgeUnlocks() {
    const list = this.data.badges;
    if (this.data.completedStories.length >= 1 && !list.includes("first-comic")) {
      list.push("first-comic");
    }
    if (this.data.completedStories.includes("c6-sci-circuits") && !list.includes("electrician")) {
      list.push("electrician");
    }
    if (this.data.completedStories.includes("c9-sci-motion") && !list.includes("newton-hero")) {
      list.push("newton-hero");
    }
    if (this.data.completedStories.length >= 5 && !list.includes("comic-scholar")) {
      list.push("comic-scholar");
    }
  }

  setStudentName(name) {
    this.data.studentName = name.trim() || "Young Scholar";
    this.saveData();
  }

  setGrade(g) {
    this.data.grade = parseInt(g) || 1;
    this.saveData();
  }

  renderDashboard(container) {
    if (!container) return;

    const badgesCatalog = [
      { id: "first-comic", name: "First Issue Reader", icon: "📖", desc: "Completed first comic strip lesson!" },
      { id: "plant-whisperer", name: "Plant Whisperer", icon: "🌿", desc: "Mastered leaf photosynthesis & roots!" },
      { id: "electrician", name: "Circuit Spark", icon: "⚡", desc: "Built closed circuit and Ohm's law!" },
      { id: "newton-hero", name: "Newton's Apprentice", icon: "🍎", desc: "Understood all 3 Laws of Motion!" },
      { id: "comic-scholar", name: "NCERT Comic Master", icon: "🏆", desc: "Earned 5+ comic chapter badges!" }
    ];

    container.innerHTML = `
      <div class="dashboard-wrapper">
        <!-- Top Profile Bar -->
        <div class="parent-banner-card">
          <div class="banner-avatar">👨‍👩‍👧‍👦</div>
          <div class="banner-text">
            <h2>Parent &amp; Kid Learning Hub</h2>
            <p>Track your child's NCERT learning milestones, celebrate comic badges, and test concepts together!</p>
          </div>
          <div class="student-profile-edit">
            <label>Child's Name:</label>
            <input type="text" id="student-name-input" class="comic-input" value="${this.data.studentName}" placeholder="Enter name">
            <button class="comic-btn" id="save-name-btn">Save</button>
          </div>
        </div>

        <!-- Metric Cards Grid -->
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-icon">⭐</div>
            <div class="metric-num">${this.data.stars}</div>
            <div class="metric-label">Stars Earned</div>
          </div>
          <div class="metric-card">
            <div class="metric-icon">📚</div>
            <div class="metric-num">${this.data.completedStories.length}</div>
            <div class="metric-label">Chapters Mastered</div>
          </div>
          <div class="metric-card">
            <div class="metric-icon">⏱️</div>
            <div class="metric-num">${this.data.minutesLearned}m</div>
            <div class="metric-label">Interactive Study Time</div>
          </div>
          <div class="metric-card">
            <div class="metric-icon">🎖️</div>
            <div class="metric-num">${this.data.badges.length} / ${badgesCatalog.length}</div>
            <div class="metric-label">Badges Unlocked</div>
          </div>
        </div>

        <!-- Badges Section -->
        <div class="comic-section-card">
          <h3 class="section-title">🎖️ Comic Badges Collection</h3>
          <div class="badges-row">
            ${badgesCatalog.map(b => {
              const unlocked = this.data.badges.includes(b.id);
              return `
                <div class="badge-item ${unlocked ? 'badge-unlocked' : 'badge-locked'}">
                  <div class="badge-icon-box">${b.icon}</div>
                  <strong class="badge-name">${b.name}</strong>
                  <span class="badge-status">${unlocked ? "UNLOCKED!" : "LOCKED"}</span>
                  <small class="badge-desc">${b.desc}</small>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Parent Discussion Prompts -->
        <div class="comic-section-card">
          <h3 class="section-title">💬 Parent Dinner-Table Conversation Starters</h3>
          <p class="section-subtitle">Reinforce what your child learned today in NCERT with these fun real-world questions:</p>
          <div class="prompts-grid">
            <div class="prompt-box">
              <span class="prompt-grade">Class 1-3 Math &amp; EVS</span>
              <strong>"Why don't car wheels come in squares?"</strong>
              <p>Prompt your child to explain why round circles roll smoothly with zero corners, while squares get stuck on flat edges!</p>
            </div>
            <div class="prompt-box">
              <span class="prompt-grade">Class 3-5 EVS</span>
              <strong>"Where do trees get their food if they have no teeth?"</strong>
              <p>Ask them to describe the leaf as a tiny solar kitchen using Sunlight, water from soil, and carbon dioxide to cook sugar!</p>
            </div>
            <div class="prompt-box">
              <span class="prompt-grade">Class 6-8 Science</span>
              <strong>"Why do electrical wire plugs have plastic on the outside?"</strong>
              <p>Explore conductors vs insulators: copper carries running electrons inside, while rubber and plastic keep our fingers safe!</p>
            </div>
            <div class="prompt-box">
              <span class="prompt-grade">Class 9-12 Physics</span>
              <strong>"Why do you lean forward when the school bus brakes?"</strong>
              <p>Review Newton's 1st Law: your body has inertia and wants to keep moving at the same speed as the bus was traveling!</p>
            </div>
          </div>
        </div>

        <!-- Printable Comic Certificate Generator -->
        <div class="comic-section-card">
          <h3 class="section-title">📜 Printable NCERT Comic Achievement Certificate</h3>
          <p class="section-subtitle">Generate a personalized Black &amp; White comic diploma your child can print and hang on their wall!</p>
          <div class="cert-controls">
            <button class="comic-btn active" id="print-cert-btn">🖨️ Print / Save Certificate</button>
          </div>
          <div class="certificate-preview-box" id="cert-render-target">
            <div class="certificate-border">
              <div class="cert-header">
                <span class="cert-stamp">NCERT COMIC ACADEMY</span>
                <h1>CERTIFICATE OF EXCELLENCE</h1>
                <p>Awarded for Outstanding Curiosity and Mastery of NCERT Subjects</p>
              </div>
              <div class="cert-body">
                <p>This is proudly presented to:</p>
                <h2 class="cert-recipient" id="cert-recipient-name">${this.data.studentName}</h2>
                <p class="cert-text">
                  For completing interactive comic lessons across NCERT English Medium curriculum,
                  discovering the scientific laws of nature, conquering math challenges,
                  and demonstrating true problem-solving spirit!
                </p>
              </div>
              <div class="cert-footer">
                <div class="sig-block">
                  <div class="sig-line">Prof. Paws 🐾</div>
                  <span>Chief Cat Scientist</span>
                </div>
                <div class="cert-seal">
                  ★ OFFICIAL ★<br>COMIC PASS
                </div>
                <div class="sig-block">
                  <div class="sig-line">Pixel Bot 🤖</div>
                  <span>Master of Equations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Hook events
    const nameInput = container.querySelector("#student-name-input");
    const saveNameBtn = container.querySelector("#save-name-btn");
    const certRecipient = container.querySelector("#cert-recipient-name");

    saveNameBtn.addEventListener("click", () => {
      this.setStudentName(nameInput.value);
      certRecipient.textContent = this.data.studentName;
      window.audioNarrator.playSuccess();
      window.audioNarrator.speak(`Saved name: ${this.data.studentName}`);
    });

    nameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") saveNameBtn.click();
    });

    container.querySelector("#print-cert-btn").addEventListener("click", () => {
      window.audioNarrator.playPop();
      window.print();
    });
  }
}

window.parentDashboard = new ParentDashboard();

/**
 * Comic Quiz Engine
 * Interactive cartoon MCQs with spoken English audio questions,
 * cartoon sound effects, instant feedback, and score persistence.
 */

class QuizEngine {
  constructor() {
    this.currentQuiz = [];
    this.currentIndex = 0;
    this.score = 0;
    this.container = null;
    this.storyId = null;
  }

  loadQuiz(quizQuestions, storyId, mountElement) {
    this.currentQuiz = quizQuestions || [];
    this.storyId = storyId;
    this.currentIndex = 0;
    this.score = 0;
    this.container = mountElement;

    if (!this.container) return;

    if (this.currentQuiz.length === 0) {
      this.container.innerHTML = `<div class="quiz-empty">No quiz available for this issue yet.</div>`;
      return;
    }

    this.renderQuestion();
  }

  renderQuestion() {
    if (this.currentIndex >= this.currentQuiz.length) {
      this.renderResults();
      return;
    }

    const q = this.currentQuiz[this.currentIndex];

    this.container.innerHTML = `
      <div class="comic-quiz-card">
        <div class="quiz-top-bar">
          <span class="quiz-badge">COMIC CHECKPOINT ${this.currentIndex + 1} of ${this.currentQuiz.length}</span>
          <button class="comic-audio-btn" id="quiz-read-aloud-btn" title="Read Question Aloud in English">
            🔊 Listen to Question
          </button>
        </div>

        <h3 class="quiz-question-text">${q.question}</h3>

        <div class="quiz-options-grid">
          ${q.options.map((opt, i) => `
            <button class="comic-option-btn" data-index="${i}">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span class="option-text">${opt}</span>
            </button>
          `).join("")}
        </div>

        <div class="quiz-explanation-box" id="quiz-explanation" style="display: none;">
          <div id="explanation-content"></div>
          <button class="comic-btn" id="quiz-next-btn">Next Comic Challenge ➡️</button>
        </div>
      </div>
    `;

    // Audio Narration button
    const readBtn = this.container.querySelector("#quiz-read-aloud-btn");
    readBtn.addEventListener("click", () => {
      window.audioNarrator.playClick();
      const textToSpeak = `Question: ${q.question}. Option A: ${q.options[0]}. Option B: ${q.options[1]}. ${q.options[2] ? "Option C: " + q.options[2] + "." : ""} ${q.options[3] ? "Option D: " + q.options[3] + "." : ""}`;
      window.audioNarrator.speak(textToSpeak, { character: "prof-paws" });
    });

    // Options click
    this.container.querySelectorAll(".comic-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.getAttribute("data-index"));
        this.checkAnswer(selectedIdx, q);
      });
    });
  }

  checkAnswer(selectedIndex, q) {
    const isCorrect = (selectedIndex === q.correctIndex);
    const explBox = this.container.querySelector("#quiz-explanation");
    const explContent = this.container.querySelector("#explanation-content");
    const nextBtn = this.container.querySelector("#quiz-next-btn");

    // Disable all options
    this.container.querySelectorAll(".comic-option-btn").forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.classList.add("option-correct");
      } else if (idx === selectedIndex) {
        btn.classList.add("option-wrong");
      }
    });

    if (isCorrect) {
      this.score++;
      window.audioNarrator.playSuccess();
      explContent.innerHTML = `
        <div class="expl-status status-correct">
          🎉 <strong>CORRECT! BOOM!</strong>
          <p>${q.explanation}</p>
        </div>
      `;
      window.audioNarrator.speak(`Correct! ${q.explanation}`, { character: "pixel-bot" });
    } else {
      window.audioNarrator.playBuzzer();
      explContent.innerHTML = `
        <div class="expl-status status-wrong">
          ❌ <strong>OOPS! NOT QUITE!</strong>
          <p>${q.explanation}</p>
        </div>
      `;
      window.audioNarrator.speak(`Oops! The correct answer is: ${q.options[q.correctIndex]}. ${q.explanation}`, { character: "prof-paws" });
    }

    explBox.style.display = "block";

    nextBtn.addEventListener("click", () => {
      window.audioNarrator.playPop();
      this.currentIndex++;
      this.renderQuestion();
    });
  }

  renderResults() {
    const total = this.currentQuiz.length;
    const percentage = Math.round((this.score / total) * 100);

    // Save score in parent dashboard
    if (window.parentDashboard && this.storyId) {
      window.parentDashboard.recordQuizResult(this.storyId, this.score, total);
    }

    window.audioNarrator.playSuccess();

    this.container.innerHTML = `
      <div class="quiz-results-card">
        <div class="comic-burst-header">
          <span class="comic-star-badge">★ COMIC BADGE EARNED! ★</span>
          <h2>CHAPTER MASTERED!</h2>
        </div>

        <div class="score-circle-display">
          <span class="score-number">${this.score} / ${total}</span>
          <span class="score-percent">${percentage}% Score</span>
        </div>

        <p class="score-praise">
          ${percentage === 100 
            ? "🌟 GENIUS LEVEL! Perfect comic score! Professor Paws and Pixel Bot are doing a victory dance!" 
            : percentage >= 50 
            ? "👍 Great job! You understood the key NCERT concepts! Keep exploring!" 
            : "💪 Good effort! Re-read the comic strip and try again to get all stars!"}
        </p>

        <div class="results-actions">
          <button class="comic-btn" id="retry-quiz-btn">🔄 Replay Quiz</button>
          <button class="comic-btn active" id="view-dashboard-btn">📊 View Parent &amp; Kid Progress</button>
        </div>
      </div>
    `;

    window.audioNarrator.speak(`Congratulations! You scored ${this.score} out of ${total}!`, { character: "luna-owl" });

    this.container.querySelector("#retry-quiz-btn").addEventListener("click", () => {
      window.audioNarrator.playPop();
      this.currentIndex = 0;
      this.score = 0;
      this.renderQuestion();
    });

    this.container.querySelector("#view-dashboard-btn").addEventListener("click", () => {
      window.audioNarrator.playClick();
      if (window.studyApp) {
        window.studyApp.navigateTo("dashboard");
      }
    });
  }
}

window.quizEngine = new QuizEngine();

# 🐾 NCERT Cartoon Academy

> **Learn All NCERT English Medium Subjects from Class 1 to 12 — In Funny, Memorable Cartoon Comics with Spoken English Audio!**

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-black?style=for-the-badge&logo=github)](https://sv007git.github.io/Study/)
[![Theme](https://img.shields.io/badge/Theme-Black%20%26%20White%20Manga-black?style=for-the-badge)](https://sv007git.github.io/Study/)
[![Audio](https://img.shields.io/badge/Audio-Spoken%20English%20TTS-black?style=for-the-badge)](https://sv007git.github.io/Study/)
[![NCERT](https://img.shields.io/badge/Curriculum-NCERT%20Class%201%20to%2012-black?style=for-the-badge)](https://sv007git.github.io/Study/)

**Live GitHub Hosted URL:** [https://sv007git.github.io/Study/](https://sv007git.github.io/Study/)  
**GitHub Repository:** [https://github.com/sv007git/Study](https://github.com/sv007git/Study)

---

## 📖 For Parents: The Vision Behind the Project

As parents, we want our children to build **real intuition and curiosity** for mathematics, science, social science, and language—rather than rote memorization for exams.

Traditional textbooks can feel intimidating. **NCERT Cartoon Academy** transforms every core concept of the official NCERT English medium curriculum (from Class 1 foundational years all the way up to Class 12 board preparations) into:
1. **Episodic Cartoon Comic Strips:** Character-driven dialogues featuring:
   - **Professor Paws 🐱:** The brainy cat scientist with round spectacles.
   - **Pixel Bot 🤖:** The quirky robot who loves equations and circuits.
   - **Sparky ⚡:** The energetic lightning kid who asks "Why does this happen?".
   - **Luna Owl 🦉:** The wise historian and storyteller.
   - **Doodler ✏️:** The mathematical detective.
2. **Audio Speaking in English:** Every single dialogue bubble and panel caption can be read aloud in fluent English using the browser's native Web Speech synthesis. Includes sequential **"Read Comic Aloud"** mode, adjustable speech speeds (0.8x for young learners, 1.0x normal, 1.2x lively), and procedural Web Audio cartoon sound effects (boing, pop, victory fanfare, page flip).
3. **High-Contrast Black & White Theme:** Inspired by classic Sunday newspaper comics, ink sketches, and manga. High-contrast typography with halftone dot textures reduces screen eye strain and prints cleanly on regular home printers. Includes an **Inverted Noir Manga Mode** for bedtime reading!
4. **Hands-On Interactive Cartoon Mini-Labs:** Tactile simulators that let your child play with formulas and physical laws:
   - *Shape Sorter Garage (Class 1-2)*
   - *Pizza Monster Fraction Slicer (Class 3-5)*
   - *Chef Leaf Photosynthesis Machine (Class 3-7)*
   - *Cartoon Circuit Workbench (Class 6-8)*
   - *Newton's Cart Launcher $F = ma$ (Class 9-11)*
   - *Ohm's Law Triangle Simulator $V = IR$ (Class 10-12)*
5. **Parent & Kid Learning Hub:**
   - Real-time study streak and star rewards tracker.
   - Comic achievement badges collection.
   - **"Dinner Table Conversation Starters":** Fun, low-pressure questions parents can ask kids after dinner to reinforce today's concept.
   - **Printable B&W Cartoon Certificate:** Personalized with your child's name, grade, date, and character signatures!

---

## 🎒 Complete NCERT Class 1 to 12 Coverage

| Stage | Classes | Target Ages | Key Focus & Cartoon Analogies |
| :--- | :--- | :--- | :--- |
| **Foundational** | **Class 1 & 2** | Ages 6 – 8 | Shapes with corners vs curves, number joy, phonics sounds, five senses, living vs non-living |
| **Preparatory** | **Class 3, 4 & 5** | Ages 8 – 11 | Math Magic (fractions of pizza, clocks), Looking Around EVS (leaf solar kitchen, seed dispersal, elephant herds) |
| **Middle School** | **Class 6, 7 & 8** | Ages 11 – 14 | Science (closed circuits, light & shadows, food nutrients, acids/bases, sound waves), Algebra, Indus Valley, Indian Constitution |
| **Secondary** | **Class 9 & 10** | Ages 14 – 16 | Newton's 3 Laws of Motion, Atoms & Molecules, Cell organelles city, Ohm's Law ($V = IR$), Chemical balancing, Trigonometry |
| **Senior Secondary** | **Class 11 & 12** | Ages 16 – 18 | Vectors & Projectile motion, Bohr atom orbitals, Faraday's & Lenz's Law ($\varepsilon = -d\Phi/dt$), DNA Replication, Definite Integrals |

---

## 🛠️ Technology Stack & Architecture

- **Zero-Dependency Static Frontend:** Runs directly in any modern browser without npm build steps or complex bundlers.
- **Web Speech API:** In-browser Text-to-Speech (TTS) delivering natural English pronunciation with custom pitch and rate profiles for each cartoon character.
- **Web Audio API:** 100% procedurally synthesized cartoon sound effects (sine sweeps, harmonic chimes, white-noise page rustles) that work offline with zero external audio assets to load.
- **Modular JavaScript:**
  - `js/audio-narrator.js` - Speech narration & procedural cartoon SFX
  - `js/ncert-curriculum.js` - Complete Class 1-12 subject & chapter metadata
  - `js/comic-stories.js` - Episodic comic strip panels and vector art
  - `js/interactive-labs.js` - Hands-on mini-labs & simulators
  - `js/quiz-engine.js` - Interactive comic checkpoints with sound feedback
  - `js/parent-dashboard.js` - Progress metrics, badges, dinner prompts & certificate
  - `js/comic-renderer.js` - Panel layout, speech bubble rendering, audio controls
  - `js/app.js` - Application routing, search, class picker & theme manager
- **GitHub Actions Workflow:** `.github/workflows/deploy.yml` for automated zero-config GitHub Pages deployment.

---

## 🚀 How to Deploy to GitHub Pages (`sv007git/Study`)

### Option A: Using Git CLI (Recommended)

1. Make sure you are in the repository folder:
   ```bash
   cd "C:\Users\HARISH VYAS\Projects\Study"
   ```
2. Commit all files:
   ```bash
   git add .
   git commit -m "feat: complete NCERT cartoon learning platform with English audio and B&W theme"
   ```
3. Push to your GitHub repository:
   ```bash
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** > **Pages**:
   - **Source:** Choose **GitHub Actions** (the provided `.github/workflows/deploy.yml` will handle the build automatically!), OR select **Deploy from a branch** -> branch: `main` / folder: `/ (root)`.
   - Click **Save**.
5. Your website will be live at:
   👉 **[https://sv007git.github.io/Study/](https://sv007git.github.io/Study/)**

---

## 💻 Local Preview

To test and explore the website locally on your computer:

Using Python:
```bash
python -m http.server 8000
```
Then open your browser to [http://localhost:8000](http://localhost:8000).

Or using Node:
```bash
npx serve .
```

---

## 👨‍👩‍👧‍👦 Parent Tips: How to Learn Together

1. **Start with "Read Comic Aloud":** Press the audio button on any issue to hear the characters speak the story in English.
2. **Try the Hands-On Mini-Lab:** Let your child adjust the sliders (e.g. adding sunlight to Chef Leaf or testing conductors vs insulators) before looking at formulas.
3. **Take the 2-Question Comic Checkpoint:** Immediate positive reinforcement and fanfare celebrate their mastery.
4. **Print the Certificate:** At the end of the week, visit the **Parent & Kid Hub** to print out their Black & White Certificate of Excellence!

---

*Dedicated to making NCERT English medium education joyful, visual, and accessible for every child.*

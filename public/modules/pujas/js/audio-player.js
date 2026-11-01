/**
 * Audio Player & Speech Engine for Hindu Pujas
 * Combines Web Audio API (Synthesized Temple Bell / Shankham) and Web Speech API (TTS)
 */

class PujaAudioPlayer {
  constructor() {
    this.synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
    this.audioCtx = null;
    this.isPlaying = false;
    this.isPaused = false;
    this.currentUtterance = null;
    this.queue = [];
    this.currentQueueIndex = 0;
    this.rate = 0.9; // Optimal pace for mantras and devotion
    this.pitch = 1.0;
    this.lang = 'en'; // Default language English
    this.soundEffects = true;
    this.voices = [];
    this.onStepChangeCallback = null;
    this.onStateChangeCallback = null;

    try {
      this.initVoices();
      if (this.synth) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    } catch (e) {
      console.warn("Speech synthesis init warning:", e);
    }
  }

  initAudioContext() {
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    } catch(e) {
      console.warn("AudioContext init warning:", e);
    }
  }

  initVoices() {
    try {
      if (this.synth && typeof this.synth.getVoices === 'function') {
        this.voices = this.synth.getVoices() || [];
      }
    } catch (e) {
      this.voices = [];
    }
  }

  getBestVoice(lang) {
    if (!this.voices || this.voices.length === 0) {
      this.initVoices();
    }
    if (lang === 'te') {
      // Look for Telugu voice
      const teluguVoice = this.voices.find(v => v.lang.startsWith('te') || v.name.toLowerCase().includes('telugu'));
      if (teluguVoice) return teluguVoice;
      // Fallback to Indian English voice which pronounces Sanskrit/Telugu phonetics well
      const indianVoice = this.voices.find(v => v.lang.includes('IN') || v.name.toLowerCase().includes('india'));
      if (indianVoice) return indianVoice;
    } else {
      // Look for Indian English first (better mantra pronunciation)
      const indianEnglish = this.voices.find(v => v.lang === 'en-IN' || v.name.toLowerCase().includes('india'));
      if (indianEnglish) return indianEnglish;
      const englishVoice = this.voices.find(v => v.lang.startsWith('en'));
      if (englishVoice) return englishVoice;
    }
    return this.voices[0] || null;
  }

  /**
   * Synthesize an authentic bronze temple bell chime (Ghanta Dhwani)
   */
  playTempleBell() {
    if (!this.soundEffects) return;
    try {
      this.initAudioContext();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      // Fundamental frequencies of an authentic temple bell
      const freqs = [640, 852, 1280, 1920, 2560];
      const gains = [0.35, 0.45, 0.25, 0.15, 0.08];

      const masterGain = this.audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.4, now);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + 3.2);
      masterGain.connect(this.audioCtx.destination);

      freqs.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const oscGain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        // Slight frequency detuning for warm realistic resonance
        osc.detune.setValueAtTime((Math.random() - 0.5) * 8, now);

        oscGain.gain.setValueAtTime(gains[idx], now);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + (3.0 - idx * 0.4));

        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 3.2);
      });
    } catch (e) {
      console.warn("Bell sound could not be played", e);
    }
  }

  /**
   * Synthesize a sacred conch (Shankham) blast
   */
  playConchSound() {
    if (!this.soundEffects) return;
    try {
      this.initAudioContext();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(210, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.8);
      osc.frequency.exponentialRampToValueAtTime(245, now + 2.5);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.exponentialRampToValueAtTime(750, now + 0.8);
      filter.frequency.exponentialRampToValueAtTime(400, now + 2.5);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.6);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 2.6);
    } catch (e) {
      console.warn("Conch sound failed", e);
    }
  }

  /**
   * Speak a text string with chosen language
   */
  speakText(text, lang = this.lang, onEnd = null) {
    if (!this.synth) {
      alert("Speech Synthesis is not supported in this browser. Please use Chrome, Edge, Safari, or an Android browser.");
      return;
    }

    this.stopSpeech();

    // Clean text of characters that trip speech engines
    const cleanText = text
      .replace(/॥/g, '.')
      .replace(/।/g, ',')
      .replace(/\|/g, ',')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) {
      if (onEnd) onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    const voice = this.getBestVoice(lang);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = lang === 'te' ? 'te-IN' : 'en-IN';
    }

    utterance.onend = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.updateState();
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn("TTS error:", e);
      this.isPlaying = false;
      this.isPaused = false;
      this.updateState();
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.isPlaying = true;
    this.isPaused = false;
    this.updateState();

    this.synth.speak(utterance);
  }

  /**
   * Start guided full-puja recitation (Priest Mode)
   */
  startPujaRecitation(puja, startIndex = 0, lang = this.lang) {
    this.stopSpeech();
    this.playTempleBell();

    this.queue = [];
    this.lang = lang;

    // Introduction queue
    const title = lang === 'te' ? puja.title.te : puja.title.en;
    const significance = lang === 'te' ? puja.significance.te : puja.significance.en;

    this.queue.push({
      type: 'intro',
      stepNumber: 0,
      title: title,
      text: lang === 'te'
        ? `${title}. ${significance}`
        : `${title}. ${significance}`
    });

    // Steps queue
    puja.steps.forEach((step, idx) => {
      const stepTitle = lang === 'te' ? step.title.te : step.title.en;
      const stepDesc = lang === 'te' ? step.description.te : step.description.en;
      const mantra = lang === 'te' ? (step.mantra.scriptTe || step.mantra.sanskrit) : (step.mantra.transliteration || step.mantra.sanskrit);
      const meaning = lang === 'te' ? step.meaning.te : step.meaning.en;

      let fullAudioText = "";
      if (lang === 'te') {
        fullAudioText = `${step.stepNumber}వ భాగము: ${stepTitle}. ${stepDesc}. మంత్రం: ${mantra}. తాత్పర్యం: ${meaning}`;
      } else {
        fullAudioText = `Step ${step.stepNumber}: ${stepTitle}. ${stepDesc}. Mantra: ${mantra}. Meaning: ${meaning}`;
      }

      this.queue.push({
        type: 'step',
        stepIndex: idx,
        stepNumber: step.stepNumber,
        title: stepTitle,
        text: fullAudioText
      });
    });

    this.currentQueueIndex = Math.min(startIndex, this.queue.length - 1);
    this.playQueueItem(this.currentQueueIndex);
  }

  playQueueItem(index) {
    if (index >= this.queue.length || index < 0) {
      this.stopSpeech();
      return;
    }

    this.currentQueueIndex = index;
    const item = this.queue[index];

    if (this.onStepChangeCallback) {
      this.onStepChangeCallback(item);
    }

    // Play subtle bell between steps
    if (item.type === 'step') {
      this.playTempleBell();
    }

    setTimeout(() => {
      this.speakText(item.text, this.lang, () => {
        // Automatically progress to next step
        if (this.currentQueueIndex + 1 < this.queue.length) {
          this.playQueueItem(this.currentQueueIndex + 1);
        } else {
          this.isPlaying = false;
          this.updateState();
        }
      });
    }, 600);
  }

  /**
   * Speak a single step or mantra
   */
  speakStep(step, lang = this.lang, onEnd = null) {
    this.playTempleBell();
    const title = lang === 'te' ? step.title.te : step.title.en;
    const desc = lang === 'te' ? step.description.te : step.description.en;
    const mantra = lang === 'te' ? (step.mantra.scriptTe || step.mantra.sanskrit) : (step.mantra.transliteration || step.mantra.sanskrit);
    const meaning = lang === 'te' ? step.meaning.te : step.meaning.en;

    const fullText = lang === 'te'
      ? `${title}. ${desc}. మంత్రం: ${mantra}. భావము: ${meaning}`
      : `${title}. ${desc}. Mantra: ${mantra}. Meaning: ${meaning}`;

    setTimeout(() => {
      this.speakText(fullText, lang, onEnd);
    }, 400);
  }

  /**
   * Speak only the Sanskrit/Telugu mantra
   */
  speakMantraOnly(step, lang = this.lang) {
    this.playTempleBell();
    const mantra = lang === 'te' ? (step.mantra.scriptTe || step.mantra.sanskrit) : (step.mantra.transliteration || step.mantra.sanskrit);
    setTimeout(() => {
      this.speakText(mantra, lang);
    }, 400);
  }

  pause() {
    if (this.synth && this.isPlaying && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.updateState();
    }
  }

  resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.updateState();
    }
  }

  togglePlayPause() {
    if (this.isPlaying && !this.isPaused) {
      this.pause();
    } else if (this.isPaused) {
      this.resume();
    }
  }

  next() {
    if (this.queue.length > 0 && this.currentQueueIndex + 1 < this.queue.length) {
      this.playQueueItem(this.currentQueueIndex + 1);
    }
  }

  prev() {
    if (this.queue.length > 0 && this.currentQueueIndex - 1 >= 0) {
      this.playQueueItem(this.currentQueueIndex - 1);
    }
  }

  stopSpeech() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.isPaused = false;
    this.updateState();
  }

  setRate(rate) {
    this.rate = rate;
  }

  setLanguage(lang) {
    this.lang = lang;
  }

  updateState() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback({
        isPlaying: this.isPlaying,
        isPaused: this.isPaused,
        currentIndex: this.currentQueueIndex,
        totalItems: this.queue.length
      });
    }
  }
}

if (typeof window !== 'undefined') {
  window.PujaAudioPlayer = PujaAudioPlayer;
}
if (typeof globalThis !== 'undefined') {
  globalThis.PujaAudioPlayer = PujaAudioPlayer;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PujaAudioPlayer;
}

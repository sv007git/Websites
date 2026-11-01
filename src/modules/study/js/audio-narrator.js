/**
 * Audio Narrator & Cartoon Sound Effects Engine
 * Features:
 * - Web Speech API Text-to-Speech in English with character voice profiles
 * - Pure Web Audio API synthesized cartoon sound effects (boing, pop, fanfare, flip, buzzer)
 * - Auto-read comic panels sequence
 * - Visual lip-sync/talking wave animations
 */

class AudioNarrator {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.selectedVoice = null;
    this.rate = 1.0;
    this.pitch = 1.0;
    this.isMuted = false;
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.autoPlayQueue = [];
    this.autoPlayIndex = 0;
    this.isAutoPlaying = false;
    this.autoPlayTimer = null;

    // Web Audio Context for Cartoon Sound FX
    this.audioCtx = null;

    this.characterProfiles = {
      narrator: { pitch: 1.0, rate: 0.95, prefix: "" },
      "prof-paws": { pitch: 0.85, rate: 0.92, prefix: "Professor Paws says: " },
      "pixel-bot": { pitch: 1.35, rate: 1.05, prefix: "Pixel says: " },
      "luna-owl": { pitch: 0.95, rate: 0.88, prefix: "Luna explains: " },
      "sparky": { pitch: 1.4, rate: 1.1, prefix: "Sparky exclaims: " },
      "doodler": { pitch: 1.1, rate: 1.0, prefix: "Doodler notes: " }
    };

    this.initAudioContext();
    this.loadVoices();

    if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this.loadVoices();
    }
  }

  initAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioCtx = new AudioContext();
    }
  }

  ensureAudioContext() {
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  loadVoices() {
    if (!this.synth) return;
    const allVoices = this.synth.getVoices();
    // Filter for English voices
    this.voices = allVoices.filter(v => v.lang.startsWith("en"));
    if (this.voices.length === 0) {
      this.voices = allVoices; // Fallback to all if no specific English
    }

    // Default preference: Natural or popular English voices (Google, Daniel, Samantha, etc.)
    const preferred = this.voices.find(v => 
      v.name.includes("Google") || 
      v.name.includes("Natural") || 
      v.name.includes("Samantha") || 
      v.name.includes("Daniel") ||
      v.name.includes("Arthur") ||
      v.name.includes("Rishi") ||
      v.name.includes("English")
    );
    this.selectedVoice = preferred || this.voices[0] || null;
  }

  getEnglishVoices() {
    if (this.voices.length === 0) this.loadVoices();
    return this.voices;
  }

  setVoice(voiceURI) {
    const found = this.voices.find(v => v.voiceURI === voiceURI);
    if (found) {
      this.selectedVoice = found;
    }
  }

  setSpeed(speedVal) {
    this.rate = Math.max(0.6, Math.min(1.6, parseFloat(speedVal) || 1.0));
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stop();
    }
    return this.isMuted;
  }

  /**
   * Speak specific text in English with character voice profile
   */
  speak(text, options = {}) {
    if (!this.synth || this.isMuted) return;

    this.synth.cancel(); // Stop current

    const cleanText = text.replace(/<[^>]*>/g, "").trim();
    if (!cleanText) return;

    const charKey = options.character || "narrator";
    const profile = this.characterProfiles[charKey] || this.characterProfiles.narrator;

    const utter = new SpeechSynthesisUtterance(cleanText);
    utter.voice = this.selectedVoice;
    utter.rate = this.rate * profile.rate;
    utter.pitch = this.pitch * profile.pitch;
    utter.lang = "en-US";

    this.currentUtterance = utter;
    this.isSpeaking = true;

    if (options.onStart) utter.onstart = options.onStart;
    
    utter.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    utter.onerror = (e) => {
      console.warn("Speech error:", e);
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (options.onError) options.onError(e);
    };

    this.synth.speak(utter);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.isAutoPlaying = false;
    if (this.autoPlayTimer) {
      clearTimeout(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  pause() {
    if (this.synth && this.synth.speaking) {
      this.synth.pause();
    }
  }

  resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  /**
   * Sequential comic reader (narrates panels one by one with highlights)
   */
  startComicAutoNarrate(panels, onPanelStart, onFinish) {
    this.stop();
    if (!panels || panels.length === 0) return;

    this.autoPlayQueue = panels;
    this.autoPlayIndex = 0;
    this.isAutoPlaying = true;

    const playNext = () => {
      if (!this.isAutoPlaying) return;

      if (this.autoPlayIndex >= this.autoPlayQueue.length) {
        this.isAutoPlaying = false;
        if (onFinish) onFinish();
        this.playSuccess();
        return;
      }

      const item = this.autoPlayQueue[this.autoPlayIndex];
      if (onPanelStart) onPanelStart(this.autoPlayIndex, item);

      // Play comic pop
      this.playPop();

      // Read panel narration or character speech
      const textToSpeak = item.dialogue 
        ? `${item.speaker || "Character"}: ${item.dialogue}` 
        : item.narration || item.text || "";

      this.speak(textToSpeak, {
        character: item.characterKey || "narrator",
        onEnd: () => {
          this.autoPlayIndex++;
          this.autoPlayTimer = setTimeout(playNext, 900); // Friendly breath pause between panels
        }
      });
    };

    playNext();
  }

  // ==========================================
  // PURE WEB AUDIO SYNTHESIZED CARTOON SFX
  // No external files required! Works everywhere!
  // ==========================================

  playPop() {
    if (this.isMuted) return;
    try {
      this.ensureAudioContext();
      if (!this.audioCtx) return;
      const t = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(350, t);
      osc.frequency.exponentialRampToValueAtTime(800, t + 0.08);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.08);
    } catch (e) {
      // AudioCtx disabled or restricted
    }
  }

  playBoing() {
    if (this.isMuted) return;
    try {
      this.ensureAudioContext();
      if (!this.audioCtx) return;
      const t = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.exponentialRampToValueAtTime(540, t + 0.15);
      osc.frequency.exponentialRampToValueAtTime(320, t + 0.35);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.35);
    } catch (e) {}
  }

  playSuccess() {
    if (this.isMuted) return;
    try {
      this.ensureAudioContext();
      if (!this.audioCtx) return;
      const t = this.audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const start = t + i * 0.09;
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.22, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.28);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(start);
        osc.stop(start + 0.28);
      });
    } catch (e) {}
  }

  playBuzzer() {
    if (this.isMuted) return;
    try {
      this.ensureAudioContext();
      if (!this.audioCtx) return;
      const t = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, t);
      osc.frequency.linearRampToValueAtTime(95, t + 0.25);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.25);
    } catch (e) {}
  }

  playPageFlip() {
    if (this.isMuted) return;
    try {
      this.ensureAudioContext();
      if (!this.audioCtx) return;
      const t = this.audioCtx.currentTime;
      // White noise burst filtered like rustling comic paper
      const bufferSize = this.audioCtx.sampleRate * 0.06;
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 1200;

      const gain = this.audioCtx.createGain();
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.06);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      noise.start(t);
    } catch (e) {}
  }
}

// Global narrator instance
window.audioNarrator = new AudioNarrator();

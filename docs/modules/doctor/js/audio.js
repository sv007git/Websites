/**
 * English Text-to-Speech & Web Audio Engine
 * Supports Web Speech API (speechSynthesis) with natural English voice prioritization,
 * audio playback controls, rate adjustment, visualizer wave animation,
 * auto-speech toggle, and subtle synthesized Web Audio acoustic feedback.
 * Repository: https://github.com/sv007git/Doctor
 */

class HolisticAudioEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voices = [];
    this.selectedVoice = null;
    this.rate = 1.0;
    this.pitch = 1.0;
    this.isPlaying = false;
    this.isPaused = false;
    this.currentUtterance = null;
    this.currentText = "";
    this.autoSpeak = false;

    // Web Audio API context for subtle acoustic feedback
    this.audioCtx = null;

    // Callbacks for UI updates
    this.onStateChange = null;

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) {
      console.warn("Web Speech API is not supported in this browser.");
      return;
    }

    const load = () => {
      this.voices = this.synth.getVoices();
      // Prioritize natural English voices
      const englishVoices = this.voices.filter(v => v.lang.startsWith("en"));
      
      // Look for preferred high-quality voices
      this.selectedVoice = 
        englishVoices.find(v => v.name.includes("Natural") || v.name.includes("Online")) ||
        englishVoices.find(v => v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Daniel") || v.name.includes("Oliver")) ||
        englishVoices.find(v => v.lang === "en-US" || v.lang === "en-GB") ||
        englishVoices[0] ||
        this.voices[0];

      if (this.onStateChange) this.onStateChange();
    };

    load();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = load;
    }
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  // Play subtle acoustic blip when selecting parts/buttons
  playChime(type = "select") {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === "select") {
        // High crisp pleasant soft chime (sine wave)
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === "organ") {
        // Deeper resonance chime
        osc.type = "triangle";
        osc.frequency.setValueAtTime(329.63, now); // E4
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.18); // A4
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === "disease") {
        // Gentle double pulse
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {
      // AudioContext policy restrictions or unsupported
    }
  }

  /**
   * Speak arbitrary text in English
   */
  speak(text, onComplete = null) {
    if (!this.synth) return;

    // Clean previous
    this.stop();

    if (!text || text.trim() === "") return;

    this.currentText = text;
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.lang = this.selectedVoice ? this.selectedVoice.lang : "en-US";
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    utterance.onstart = () => {
      this.isPlaying = true;
      this.isPaused = false;
      this.triggerStateUpdate();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.triggerStateUpdate();
      if (onComplete) onComplete();
    };

    utterance.onerror = (e) => {
      console.warn("Speech error:", e);
      this.isPlaying = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.triggerStateUpdate();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  pause() {
    if (this.synth && this.isPlaying && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.isPlaying = false;
      this.triggerStateUpdate();
    }
  }

  resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.isPlaying = true;
      this.triggerStateUpdate();
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isPlaying = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.triggerStateUpdate();
    }
  }

  togglePlayPause(textIfStopped = "") {
    if (this.isPlaying) {
      this.pause();
    } else if (this.isPaused) {
      this.resume();
    } else if (textIfStopped) {
      this.speak(textIfStopped);
    }
  }

  setRate(newRate) {
    this.rate = Math.max(0.6, Math.min(2.0, parseFloat(newRate) || 1.0));
    // If currently speaking, restart with new rate
    if (this.isPlaying && this.currentText) {
      const text = this.currentText;
      this.speak(text);
    }
  }

  setVoiceByURI(voiceURI) {
    const found = this.voices.find(v => v.voiceURI === voiceURI);
    if (found) {
      this.selectedVoice = found;
    }
  }

  toggleAutoSpeak() {
    this.autoSpeak = !this.autoSpeak;
    return this.autoSpeak;
  }

  triggerStateUpdate() {
    if (typeof this.onStateChange === "function") {
      this.onStateChange({
        isPlaying: this.isPlaying,
        isPaused: this.isPaused,
        rate: this.rate,
        autoSpeak: this.autoSpeak,
        voice: this.selectedVoice ? this.selectedVoice.name : "Default English"
      });
    }
  }

  /**
   * Generates a spoken script for an Anatomical Part
   */
  generatePartScript(part, demographicLabel) {
    if (!part) return "";
    let script = `${part.name} in ${demographicLabel}. `;
    script += `${part.summary} `;
    script += `This region has ${part.topDiseases.length} major health conditions cataloged with full holistic treatments. `;
    script += `Top three conditions include: ${part.topDiseases.slice(0, 3).map(d => d.name).join(", ")}. `;
    script += `Click on any condition to review its causes, prevention, modern medicines, Ayurveda, Mudras, Yoga, and vitamin deficiencies.`;
    return script;
  }

  /**
   * Generates a comprehensive English script for a Disease
   */
  generateDiseaseScript(disease) {
    if (!disease) return "";
    let s = `${disease.name}. Category: ${disease.category}. Severity: ${disease.severity}. `;
    s += `Primary Cause: ${disease.cause} `;
    s += `How to Prevent: ${disease.prevention} `;
    s += `Lifestyle Changes: ${disease.lifestyle} `;
    s += `Conventional Medicine: ${disease.medicines} `;
    s += `Ayurveda Recommendation: Root dosha is ${disease.ayurveda.dosha}. Key herbs: ${disease.ayurveda.herbs}. Classical formulations: ${disease.ayurveda.formulations}. `;
    s += `Therapeutic Mudra: ${disease.mudras.primary}. Technique: ${disease.mudras.technique}. Duration: ${disease.mudras.duration}. `;
    s += `Yoga and Pranayama: Recommended asanas include ${disease.yoga.asanas.slice(0, 2).join(" and ")}. Breathing technique: ${disease.yoga.pranayama[0]}. `;
    s += `Vitamin Deficiencies: Key deficiencies to address: ${disease.vitamins.deficiencies}. `;
    s += `Holistic Daily Routine: ${disease.holisticIntegration}`;
    return s;
  }
}

// Global instance
const AudioEngine = new HolisticAudioEngine();

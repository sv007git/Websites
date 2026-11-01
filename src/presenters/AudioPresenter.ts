// ================================================================================
// PRESENTER LAYER: Audio Presenter
// Coordinates procedural sound effects, speech synthesis, and user feedback
// ================================================================================

import { unifiedAudio } from '../services/audio/UnifiedAudioEngine';
import { SoundEffectType } from '../models/audio.model';

export class AudioPresenter {
  private static instance: AudioPresenter;

  private constructor() {}

  public static getInstance(): AudioPresenter {
    if (!AudioPresenter.instance) {
      AudioPresenter.instance = new AudioPresenter();
    }
    return AudioPresenter.instance;
  }

  public playSound(effect: SoundEffectType): void {
    switch (effect) {
      case 'pop':
      case 'tap':
        unifiedAudio.playPop();
        break;
      case 'success':
        unifiedAudio.playSuccess();
        break;
      case 'whoosh':
      case 'open':
        unifiedAudio.playWhoosh();
        break;
      case 'chirp':
      case 'notification':
        unifiedAudio.playNotification();
        break;
      case 'error':
        unifiedAudio.playBuzzer();
        break;
      case 'toggle':
        unifiedAudio.playToggle();
        break;
      case 'close':
        unifiedAudio.playPop();
        break;
      default:
        unifiedAudio.playPop();
        break;
    }
  }

  public onButtonClick(): void {
    unifiedAudio.playPop();
  }

  public onNavigation(): void {
    unifiedAudio.playWhoosh();
  }

  public onSuccess(): void {
    unifiedAudio.playSuccess();
  }

  public onError(): void {
    unifiedAudio.playBuzzer();
  }

  public onToggle(): void {
    unifiedAudio.playToggle();
  }

  public toggleMute(): boolean {
    const isMuted = unifiedAudio.toggleMute();
    if (!isMuted) {
      unifiedAudio.playToggle();
    }
    return isMuted;
  }

  public isMuted(): boolean {
    return unifiedAudio.getMuted();
  }

  public speak(text: string, options?: { lang?: string; rate?: number; pitch?: number }): void {
    unifiedAudio.speak(text, options);
  }

  public stopSpeech(): void {
    unifiedAudio.stopSpeech();
  }
}

export const audioPresenter = AudioPresenter.getInstance();

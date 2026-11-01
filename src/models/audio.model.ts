// ================================================================================
// MODEL LAYER: Audio & Procedural Sound Effects Domain Models
// ================================================================================

export type SoundEffectType =
  | 'pop'
  | 'tap'
  | 'success'
  | 'whoosh'
  | 'chirp'
  | 'notification'
  | 'error'
  | 'open'
  | 'close'
  | 'toggle';

export interface AudioConfigModel {
  isMuted: boolean;
  volume: number;
  speechPitch: number;
  speechRate: number;
  preferredVoiceURI?: string;
}

export const DEFAULT_AUDIO_CONFIG: AudioConfigModel = {
  isMuted: false,
  volume: 0.8,
  speechPitch: 1.0,
  speechRate: 1.0,
};

// ================================================================================
// MODEL LAYER: Authentication & User Profile Domain Models
// ================================================================================

export type UserRole = 'guest' | 'user' | 'administrator';

export interface UserProfileModel {
  id: string;
  email: string | null;
  full_name: string;
  display_name: string;
  avatar_url: string;
  role: UserRole;
  status_mood: string;
}

export interface UserSessionModel {
  accessToken: string | null;
  expiresAt: number | null;
  user: UserProfileModel | null;
}

export interface AuthCredentialsModel {
  email: string;
  password: string;
  fullName?: string;
}

export const GUEST_USER_MODEL: UserProfileModel = {
  id: 'guest-user',
  email: null,
  full_name: 'Guest Explorer',
  display_name: 'Guest',
  avatar_url: '',
  role: 'guest',
  status_mood: 'Exploring WEBSITES 🌟',
};

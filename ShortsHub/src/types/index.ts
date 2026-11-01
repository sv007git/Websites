export type ContentLanguage = 'Tamil' | 'English' | 'Telugu';

export type MainCategory = 'Education' | 'Fun and Entertainment' | 'Family' | 'Friends and Lifestyle';

export interface VideoItem {
  id: string;
  platform: 'youtube';
  videoId: string;
  title: string;
  titleNative?: string;
  language: ContentLanguage;
  category: MainCategory;
  subcategory: string;
  tags: string[];
  duration: number; // in seconds
  thumbnail: string;
  channelName: string;
  channelAvatar?: string;
  isFamilyFriendly: boolean;
  isApproved: boolean;
  publishedAt?: string;
  viewCount?: number;
  likeCount?: number;
}

export interface ViewedShortRecord {
  id?: number; // auto-increment IndexedDB key
  videoId: string;
  originalUrl: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  language: ContentLanguage;
  category: MainCategory;
  subcategory: string;
  dateViewed: string; // YYYY-MM-DD
  timeViewed: string; // HH:mm:ss
  firstViewedAt: number; // timestamp
  lastViewedAt: number; // timestamp
  watchDurationSeconds: number;
  completed: boolean;
  viewCount: number;
}

export interface UserPreferences {
  selectedLanguages: ContentLanguage[];
  selectedCategories: MainCategory[];
  dailyReminderEnabled: boolean;
  reminderTime: string; // "21:00"
  separateViewSessions: boolean;
  theme: 'dark' | 'light' | 'amoled';
  autoPlayNext: boolean;
  audioMutedByDefault: boolean;
  hasCompletedOnboarding: boolean;
}

export interface CustomPlaylist {
  id: string;
  title: string;
  description?: string;
  createdAt: number;
  updatedAt: number;
  videoIds: string[];
  color?: string;
}

export interface DailyStats {
  date: string;
  totalWatched: number;
  tamilCount: number;
  englishCount: number;
  teluguCount: number;
  educationCount: number;
  funCount: number;
  familyCount: number;
  friendsCount: number;
}

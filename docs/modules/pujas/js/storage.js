/**
 * LocalStorage state persistence for Pujas App
 */

const Storage = {
  KEYS: {
    SETTINGS: 'pujas_settings',
    BOOKMARKS: 'pujas_bookmarks',
    CHECKLISTS: 'pujas_checklists',
    SANKALPAM: 'pujas_sankalpam_profile'
  },

  getSettings() {
    try {
      const saved = localStorage.getItem(this.KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : {
        language: 'en', // Default to English as requested
        theme: 'dark',
        speechRate: 0.9,
        speechPitch: 1.0,
        soundEffects: true
      };
    } catch (e) {
      return { language: 'en', theme: 'dark', speechRate: 0.9, speechPitch: 1.0, soundEffects: true };
    }
  },

  saveSettings(settings) {
    try {
      localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.warn("Storage save failed", e);
    }
  },

  getBookmarks() {
    try {
      const saved = localStorage.getItem(this.KEYS.BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  },

  toggleBookmark(pujaId) {
    const bookmarks = this.getBookmarks();
    const idx = bookmarks.indexOf(pujaId);
    if (idx > -1) {
      bookmarks.splice(idx, 1);
    } else {
      bookmarks.push(pujaId);
    }
    try {
      localStorage.setItem(this.KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    } catch (e) {
      console.warn(e);
    }
    return bookmarks.includes(pujaId);
  },

  isBookmarked(pujaId) {
    return this.getBookmarks().includes(pujaId);
  },

  getChecklist(pujaId) {
    try {
      const all = JSON.parse(localStorage.getItem(this.KEYS.CHECKLISTS) || '{}');
      return all[pujaId] || [];
    } catch (e) {
      return [];
    }
  },

  saveChecklist(pujaId, itemIndices) {
    try {
      const all = JSON.parse(localStorage.getItem(this.KEYS.CHECKLISTS) || '{}');
      all[pujaId] = itemIndices;
      localStorage.setItem(this.KEYS.CHECKLISTS, JSON.stringify(all));
    } catch (e) {
      console.warn(e);
    }
  },

  clearChecklist(pujaId) {
    try {
      const all = JSON.parse(localStorage.getItem(this.KEYS.CHECKLISTS) || '{}');
      delete all[pujaId];
      localStorage.setItem(this.KEYS.CHECKLISTS, JSON.stringify(all));
    } catch (e) {
      console.warn(e);
    }
  },

  getSankalpamProfile() {
    try {
      const saved = localStorage.getItem(this.KEYS.SANKALPAM);
      return saved ? JSON.parse(saved) : {
        gotra: '',
        nakshatra: '',
        name: '',
        spouseName: '',
        city: 'Hyderabad'
      };
    } catch (e) {
      return { gotra: '', nakshatra: '', name: '', spouseName: '', city: 'Hyderabad' };
    }
  },

  saveSankalpamProfile(profile) {
    try {
      localStorage.setItem(this.KEYS.SANKALPAM, JSON.stringify(profile));
    } catch (e) {
      console.warn(e);
    }
  }
};

if (typeof window !== 'undefined') {
  window.Storage = Storage;
}
if (typeof globalThis !== 'undefined') {
  globalThis.Storage = Storage;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Storage;
}

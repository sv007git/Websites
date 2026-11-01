import { createClient, SupabaseClient } from '@supabase/supabase-js';

const defaultUrl = 'https://oruybhfodbbjpfvipoqk.supabase.co';

export const getStoredSupabaseUrl = (): string => {
  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('INVITEDECIDE_SUPABASE_URL');
    if (local && local.trim().startsWith('http')) return local.trim();
  }
  return import.meta.env.VITE_SUPABASE_URL || defaultUrl;
};

export const getStoredSupabaseAnonKey = (): string => {
  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('INVITEDECIDE_SUPABASE_ANON_KEY');
    if (local && local.trim().length > 10) return local.trim();
  }
  return import.meta.env.VITE_SUPABASE_ANON_KEY || '';
};

let currentUrl = getStoredSupabaseUrl();
let currentAnonKey = getStoredSupabaseAnonKey();

export let isSupabaseConfigured = Boolean(currentAnonKey && currentAnonKey.trim().length > 10);

export let supabase: SupabaseClient = createClient(
  currentUrl,
  isSupabaseConfigured ? currentAnonKey : 'placeholder-anon-key-development',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

export const configureSupabaseClient = (url: string, anonKey: string): boolean => {
  const cleanUrl = url.trim();
  const cleanKey = anonKey.trim();

  if (typeof window !== 'undefined') {
    if (cleanUrl) localStorage.setItem('INVITEDECIDE_SUPABASE_URL', cleanUrl);
    if (cleanKey) localStorage.setItem('INVITEDECIDE_SUPABASE_ANON_KEY', cleanKey);
  }

  currentUrl = cleanUrl || defaultUrl;
  currentAnonKey = cleanKey;
  isSupabaseConfigured = Boolean(cleanKey && cleanKey.length > 10);

  supabase = createClient(
    currentUrl,
    isSupabaseConfigured ? currentAnonKey : 'placeholder-anon-key-development',
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    }
  );

  return isSupabaseConfigured;
};

export const clearSupabaseCredentials = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('INVITEDECIDE_SUPABASE_ANON_KEY');
    localStorage.removeItem('INVITEDECIDE_SUPABASE_URL');
  }
  currentAnonKey = '';
  isSupabaseConfigured = false;
  supabase = createClient(defaultUrl, 'placeholder-anon-key-development', {
    auth: { persistSession: false, autoRefreshToken: false },
  });
};

export const testSupabaseConnection = async (): Promise<{
  success: boolean;
  message: string;
  error?: string;
}> => {
  if (!isSupabaseConfigured) {
    return {
      success: false,
      message: 'Supabase Anon Key is not set. Running in interactive offline/localStorage mode.',
    };
  }

  try {
    const { data, error } = await supabase.from('events').select('id, name').limit(1);
    if (error) {
      return {
        success: false,
        message: 'Connected to Supabase endpoint, but table query returned error.',
        error: error.message,
      };
    }
    return {
      success: true,
      message: `Successfully connected to Supabase backend! Live database tables verified.`,
    };
  } catch (err: any) {
    return {
      success: false,
      message: 'Failed to communicate with Supabase backend.',
      error: err.message,
    };
  }
};

export const getSupabaseConfig = () => ({
  url: currentUrl,
  anonKey: currentAnonKey,
  hasKey: isSupabaseConfigured,
});

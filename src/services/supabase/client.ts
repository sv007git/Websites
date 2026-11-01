import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Environment variables
const envUrl = import.meta.env.VITE_SUPABASE_URL;
const envAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Default demo fallback project credentials if none provided in .env
const DEFAULT_SUPABASE_URL = 'https://clobwkkjltlhxishhyhm.supabase.co';
const DEFAULT_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsb2J3a2tqbHRsaHhpc2hoeWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwOTUzNDIsImV4cCI6MjEwODY3MTM0Mn0.1Nr57cJLY5fImP1GNcSOpMarCdc9xdE4KCe1kpNe4OM';

const supabaseUrl = envUrl || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = envAnonKey || DEFAULT_ANON_KEY;

export const isSupabaseConfigured = Boolean(envUrl && envAnonKey);

// Centralized Supabase Client Singleton
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: 'websites_supabase_auth_session',
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

export default supabase;

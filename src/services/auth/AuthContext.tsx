import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../supabase/client';

export interface UserProfile {
  id: string;
  email: string | null;
  full_name: string;
  display_name: string;
  avatar_url: string;
  role: 'guest' | 'user' | 'administrator';
  status_mood: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isGuest: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ error: Error | null }>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  continueAsGuest: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const GUEST_PROFILE: UserProfile = {
  id: 'guest-user',
  email: null,
  full_name: 'Guest Explorer',
  display_name: 'Guest',
  avatar_url: '',
  role: 'guest',
  status_mood: 'Exploring WEBSITES 🌟',
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isGuest, setIsGuest] = useState<boolean>(() => {
    return localStorage.getItem('websites_is_guest') === 'true';
  });

  // Fetch or build user profile
  const fetchProfile = async (currentUser: User) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', currentUser.id)
        .single();

      if (data && !error) {
        setProfile({
          id: data.id,
          email: data.email || currentUser.email || null,
          full_name: data.full_name || currentUser.user_metadata?.full_name || 'Member',
          display_name: data.display_name || currentUser.user_metadata?.display_name || 'Member',
          avatar_url: data.avatar_url || '',
          role: (data.role as any) || 'user',
          status_mood: data.status_mood || 'Enjoying WEBSITES',
        });
      } else {
        // Fallback to auth metadata
        setProfile({
          id: currentUser.id,
          email: currentUser.email || null,
          full_name: currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'User',
          display_name: currentUser.user_metadata?.display_name || currentUser.email?.split('@')[0] || 'User',
          avatar_url: currentUser.user_metadata?.avatar_url || '',
          role: 'user',
          status_mood: 'Exploring the Platform',
        });
      }
    } catch {
      setProfile({
        id: currentUser.id,
        email: currentUser.email || null,
        full_name: currentUser.email?.split('@')[0] || 'User',
        display_name: currentUser.email?.split('@')[0] || 'User',
        avatar_url: '',
        role: 'user',
        status_mood: 'Exploring the Platform',
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      if (session?.user) {
        setSession(session);
        setUser(session.user);
        setIsGuest(false);
        localStorage.removeItem('websites_is_guest');
        fetchProfile(session.user).finally(() => {
          if (mounted) setIsLoading(false);
        });
      } else {
        if (isGuest) {
          setProfile(GUEST_PROFILE);
        }
        setIsLoading(false);
      }
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, currentSession) => {
        if (!mounted) return;
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        if (currentSession?.user) {
          setIsGuest(false);
          localStorage.removeItem('websites_is_guest');
          fetchProfile(currentSession.user);
        } else {
          setProfile(isGuest ? GUEST_PROFILE : null);
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [isGuest]);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) return { error };
      if (data.user) {
        setUser(data.user);
        setSession(data.session);
        setIsGuest(false);
        localStorage.removeItem('websites_is_guest');
        await fetchProfile(data.user);
      }
      return { error: null };
    } catch (err: any) {
      return { error: err };
    }
  };

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName || email.split('@')[0],
            display_name: fullName || email.split('@')[0],
          },
        },
      });
      if (error) return { error };
      if (data.user) {
        setUser(data.user);
        setSession(data.session);
        setIsGuest(false);
        localStorage.removeItem('websites_is_guest');
        await fetchProfile(data.user);
      }
      return { error: null };
    } catch (err: any) {
      return { error: err };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setProfile(null);
    setIsGuest(false);
    localStorage.removeItem('websites_is_guest');
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return { error: new Error('User not authenticated') };
    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);
      if (!error && profile) {
        setProfile({ ...profile, ...updates });
      }
      return { error };
    } catch (err: any) {
      return { error: err };
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/Websites/#/auth/reset`,
      });
      return { error };
    } catch (err: any) {
      return { error: err };
    }
  };

  const continueAsGuest = () => {
    setIsGuest(true);
    setProfile(GUEST_PROFILE);
    localStorage.setItem('websites_is_guest', 'true');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        isLoading,
        isAuthenticated: Boolean(user),
        isGuest,
        signIn,
        signUp,
        signOut,
        updateProfile,
        resetPassword,
        continueAsGuest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

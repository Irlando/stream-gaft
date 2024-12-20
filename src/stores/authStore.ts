import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isDemo: () => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: false,
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ 
      email: email.toLowerCase(), 
      password 
    });
    if (error) throw error;
    if (data.user) {
      set({ user: data.user });
    }
  },
  signUp: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ 
      email: email.toLowerCase(), 
      password 
    });
    if (error) throw error;
    if (data.user) {
      set({ user: data.user });
    }
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null });
  },
  isDemo: () => {
    const { user } = get();
    return user?.email === 'demo@gaft.cv';
  }
}));
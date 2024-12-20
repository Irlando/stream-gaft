import { create } from 'zustand';
import { AuthState } from '@/lib/types/auth';

const DEMO_USER = {
  id: '1',
  email: 'demo@gaft.cv',
  username: 'Demo User',
  is_influencer: false,
  created_at: new Date().toISOString(),
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: undefined,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: undefined });
    try {
      // Demo login logic
      if (email === 'demo@gaft.cv' && password === 'demo12345') {
        set({ user: DEMO_USER });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (email: string, password: string, username: string) => {
    set({ isLoading: true, error: undefined });
    try {
      // Demo registration - just log in the demo user
      set({ user: DEMO_USER });
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true, error: undefined });
    try {
      set({ user: null });
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
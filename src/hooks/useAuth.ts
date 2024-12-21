import { create } from 'zustand';
import { AUTH_CONSTANTS } from '@/lib/constants/auth';
import { createUserObject } from '@/lib/utils/auth';
import type { AuthState } from '@/lib/types/auth';

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: undefined,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: undefined });
    try {
      if (email === AUTH_CONSTANTS.DEMO_USER.email && password === 'demo12345') {
        set({ user: AUTH_CONSTANTS.DEMO_USER });
      } else {
        throw new Error(AUTH_CONSTANTS.ERRORS.INVALID_CREDENTIALS);
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
      const newUser = createUserObject(email, username);
      set({ user: newUser });
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
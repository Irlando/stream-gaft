export interface User {
  id: string;
  email: string;
  username: string;
  avatar_url?: string;
  is_influencer: boolean;
  created_at: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error?: string;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => Promise<void>;
}
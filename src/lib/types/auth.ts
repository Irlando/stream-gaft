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
}
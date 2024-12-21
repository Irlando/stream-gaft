export const AUTH_CONSTANTS = {
  DEMO_USER: {
    id: '1',
    email: 'demo@example.com',
    username: 'Demo User',
    is_influencer: false,
    created_at: new Date().toISOString(),
  },
  ERRORS: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    REGISTRATION_FAILED: 'Failed to create account',
  },
} as const;
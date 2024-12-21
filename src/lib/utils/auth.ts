export function generateUserId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function createUserObject(email: string, username: string) {
  return {
    id: generateUserId(),
    email,
    username,
    is_influencer: false,
    created_at: new Date().toISOString(),
  };
}
import React, { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <Typography variant="h2" className="mb-6 text-center">
        {isLogin ? 'Sign In' : 'Sign Up'}
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-sm text-blue-600 hover:text-blue-500"
      >
        {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
      </button>
    </Card>
  );
}
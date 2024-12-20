import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { Card } from '../ui/card';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/button';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isLogin) {
        await signIn(email, password);
        navigate('/dashboard');
      } else {
        await signUp(email, password);
        navigate('/dashboard');
      }
    } catch (error) {
      setError('Authentication failed. Please check your credentials.');
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
            placeholder="demo@gaft.cv"
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
            placeholder="demo123456"
          />
        </div>
        {error && (
          <Typography variant="p" className="text-red-600">
            {error}
          </Typography>
        )}
        <Button type="submit" className="w-full">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-sm text-blue-600 hover:text-blue-500 w-full text-center"
      >
        {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
      </button>
    </Card>
  );
}
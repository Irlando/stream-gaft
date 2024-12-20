import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/card';
import { Typography } from '../components/ui/Typography';
import { LoginForm } from '../components/auth/LoginForm';
import { SignupForm } from '../components/auth/SignupForm';

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Section className="max-w-md mx-auto">
      <Card>
        <div className="text-center mb-8">
          <Typography variant="h2" className="mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </Typography>
          <Typography variant="p" className="text-gray-600">
            {isLogin 
              ? 'Sign in to access your account' 
              : 'Join thousands of creators worldwide'}
          </Typography>
        </div>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-6 text-sm text-blue-600 hover:text-blue-500 w-full text-center"
        >
          {isLogin 
            ? "Don't have an account? Sign up" 
            : 'Already have an account? Sign in'}
        </button>
      </Card>
    </Section>
  );
}
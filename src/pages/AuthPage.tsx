import React from 'react';
import { Section } from '../components/ui/Section';
import { AuthForm } from '../components/auth/AuthForm';

export function AuthPage() {
  return (
    <Section>
      <AuthForm />
    </Section>
  );
}
import React from 'react';
import { Container } from '../ui/Container';

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main className="flex-1 bg-gray-50">
      <Container className="py-6">
        {children}
      </Container>
    </main>
  );
}
import React from 'react';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <div className="py-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
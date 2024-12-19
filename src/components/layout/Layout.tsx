import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
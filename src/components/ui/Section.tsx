import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn('py-6 sm:py-8', className)}>
      {children}
    </section>
  );
}
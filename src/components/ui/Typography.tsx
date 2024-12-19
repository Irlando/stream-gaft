import React from 'react';
import { cn } from '../../utils/cn';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

const variants = {
  h1: 'text-4xl font-bold',
  h2: 'text-2xl font-bold',
  h3: 'text-xl font-bold',
  h4: 'text-lg font-bold',
  p: 'text-base'
};

export function Typography({ 
  children, 
  className,
  variant = 'p'
}: TypographyProps) {
  const Component = variant;
  
  return (
    <Component className={cn(variants[variant], 'text-gray-900', className)}>
      {children}
    </Component>
  );
}
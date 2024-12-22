import { forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/lib/utils';
import type { CommandProps } from './types';

const Command = forwardRef<HTMLDivElement, CommandProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
        className
      )}
      {...props}
    />
  )
);
Command.displayName = 'Command';

export { Command };
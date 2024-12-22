import { forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/lib/utils';
import type {
  CommandInputProps,
  CommandListProps,
  CommandEmptyProps,
  CommandGroupProps,
  CommandItemProps,
  CommandShortcutProps
} from './types';

const CommandInput = forwardRef<HTMLInputElement, CommandInputProps>(
  ({ className, ...props }, ref) => (
    <div className="flex items-center border-b px-3">
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  )
);
CommandInput.displayName = 'CommandInput';

const CommandList = forwardRef<HTMLDivElement, CommandListProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.List
      ref={ref}
      className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
      {...props}
    />
  )
);
CommandList.displayName = 'CommandList';

const CommandEmpty = forwardRef<HTMLDivElement, CommandEmptyProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Empty
      ref={ref}
      className={cn('py-6 text-center text-sm', className)}
      {...props}
    />
  )
);
CommandEmpty.displayName = 'CommandEmpty';

const CommandGroup = forwardRef<HTMLDivElement, CommandGroupProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        className
      )}
      {...props}
    />
  )
);
CommandGroup.displayName = 'CommandGroup';

const CommandItem = forwardRef<HTMLDivElement, CommandItemProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    />
  )
);
CommandItem.displayName = 'CommandItem';

const CommandShortcut = ({ className, ...props }: CommandShortcutProps) => (
  <span
    className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
    {...props}
  />
);
CommandShortcut.displayName = 'CommandShortcut';

export {
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
};
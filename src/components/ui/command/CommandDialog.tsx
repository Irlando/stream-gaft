import { forwardRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Command } from './Command';
import type { CommandDialogProps } from './types';

const CommandDialog = forwardRef<HTMLDivElement, CommandDialogProps>(
  ({ children, ...props }, ref) => (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command ref={ref} className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
);
CommandDialog.displayName = 'CommandDialog';

export { CommandDialog };
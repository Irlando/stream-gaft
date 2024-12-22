import { type DialogProps } from '@radix-ui/react-dialog';

export interface CommandProps {
  children?: React.ReactNode;
  className?: string;
  shouldFilter?: boolean;
}

export interface CommandDialogProps extends DialogProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CommandInputProps {
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export interface CommandListProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CommandEmptyProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CommandGroupProps {
  heading?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export interface CommandItemProps {
  disabled?: boolean;
  onSelect?: (value: string) => void;
  className?: string;
  children?: React.ReactNode;
}

export interface CommandShortcutProps {
  className?: string;
  children?: React.ReactNode;
}
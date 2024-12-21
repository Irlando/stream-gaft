import { cn } from '@/lib/utils';
import { getStreamStatusBadgeProps } from '@/lib/utils/stream';
import type { StreamStatus } from '@/lib/types/stream';

interface StreamStatusBadgeProps {
  status: StreamStatus;
  className?: string;
}

export function StreamStatusBadge({ status, className }: StreamStatusBadgeProps) {
  const { label, className: badgeClassName } = getStreamStatusBadgeProps(status);
  
  return (
    <div className={cn(
      'px-2 py-1 rounded-full text-white text-xs font-medium',
      badgeClassName,
      className
    )}>
      {label}
    </div>
  );
}
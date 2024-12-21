import { Users } from 'lucide-react';
import { formatViewerCount } from '@/lib/utils/stream';

interface StreamViewerCountProps {
  count: number;
}

export function StreamViewerCount({ count }: StreamViewerCountProps) {
  return (
    <div className="flex items-center space-x-1 text-muted-foreground">
      <Users className="h-4 w-4" />
      <span className="text-sm">{formatViewerCount(count)}</span>
    </div>
  );
}
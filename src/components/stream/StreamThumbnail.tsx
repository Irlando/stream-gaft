import { cn } from '@/lib/utils';
import { StreamStatusBadge } from './StreamStatusBadge';
import { StreamViewerCount } from './StreamViewerCount';
import type { Stream } from '@/lib/types/stream';

interface StreamThumbnailProps {
  stream: Stream;
  className?: string;
}

export function StreamThumbnail({ stream, className }: StreamThumbnailProps) {
  return (
    <div className={cn('relative aspect-video', className)}>
      <img
        src={stream.thumbnail_url}
        alt={stream.title}
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute top-2 left-2">
        <StreamStatusBadge status={stream.status} />
      </div>
      {stream.status === 'live' && (
        <div className="absolute bottom-2 right-2">
          <StreamViewerCount count={stream.viewer_count} />
        </div>
      )}
    </div>
  );
}
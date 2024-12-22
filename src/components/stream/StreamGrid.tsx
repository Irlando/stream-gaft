import { StreamCard } from './StreamCard';
import type { Stream } from '@/lib/types/stream';

interface StreamGridProps {
  streams: Stream[];
}

export function StreamGrid({ streams }: StreamGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {streams.map((stream) => (
        <StreamCard key={stream.id} stream={stream} />
      ))}
    </div>
  );
}
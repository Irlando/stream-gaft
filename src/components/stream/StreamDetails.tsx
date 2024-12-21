import { formatDate, formatTime } from '@/lib/utils/format';
import type { Stream } from '@/lib/types/stream';

interface StreamDetailsProps {
  stream: Stream;
  className?: string;
}

export function StreamDetails({ stream, className }: StreamDetailsProps) {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-2">{stream.title}</h2>
      <p className="text-muted-foreground mb-4">{stream.description}</p>
      {stream.scheduled_for && (
        <div className="text-sm text-muted-foreground">
          Scheduled for {formatDate(stream.scheduled_for)} at {formatTime(stream.scheduled_for)}
        </div>
      )}
    </div>
  );
}
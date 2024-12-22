import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StreamStatusBadge } from './StreamStatusBadge';
import type { Stream } from '@/lib/types/stream';

interface StreamInfoProps {
  stream: Stream;
}

export function StreamInfo({ stream }: StreamInfoProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{stream.title}</CardTitle>
        <StreamStatusBadge status={stream.status} />
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{stream.description}</p>
      </CardContent>
    </Card>
  );
}
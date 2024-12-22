import { useParams } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StreamPlayer } from '@/components/stream/StreamPlayer';
import { StreamInfo } from '@/components/stream/StreamInfo';
import { useStreams } from '@/hooks/useStreams';
import { formatCurrency } from '@/lib/utils';

export function StreamPage() {
  const { id } = useParams<{ id: string }>();
  const { streams, isLoading, error } = useStreams(id!);

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="animate-pulse space-y-6">
          <div className="aspect-video bg-muted rounded-lg" />
          <div className="h-8 bg-muted rounded w-1/3" />
          <div className="h-24 bg-muted rounded" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <Alert variant="destructive">
          <AlertDescription>
            {error.message}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!streams) {
    return null;
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
        {streams.map((stream) => (
            <StreamPlayer key={stream.id} stream={stream} />
        ))} 
          {streams.map((stream) => (
            <StreamInfo key={stream.id} stream={stream} />
        ))}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Stream Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                {streams.map((stream) => (
                    <p key={stream.id} className="text-2xl font-bold">      {formatCurrency(stream.price)}</p>
                    ))}        
                    </div>
              {streams.map((stream) => (
                stream.status === 'live' && (
                    <div key={stream.id}>
                    <p className="text-sm text-muted-foreground">Viewers</p>
                    <p className="text-lg">{stream.viewer_count}</p>
                    </div>
                )
                ))}
              <Button className="w-full">Purchase Access</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
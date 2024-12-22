import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Stream } from '@/lib/types/stream';
import { formatCurrency } from '@/lib/utils';

interface StreamCardProps {
  stream: Stream;
}

export function StreamCard({ stream }: StreamCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={stream.thumbnail_url}
          alt={stream.title}
          className="object-cover w-full h-full"
        />
        {stream.status === 'live' && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            LIVE
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{stream.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {stream.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">
            {formatCurrency(stream.price)}
          </span>
          {stream.status === 'live' && (
            <span className="text-sm text-muted-foreground">
              {stream.viewer_count} watching
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/stream/${stream.id}`}>
            {stream.status === 'live' ? 'Watch Now' : 'View Details'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
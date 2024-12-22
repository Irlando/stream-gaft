import { getYouTubeEmbedUrl, getTwitchEmbedUrl } from '@/lib/utils/stream';
import { Card, CardContent } from '@/components/ui/Card';
import type { Stream } from '@/lib/types/stream';

interface StreamPlayerProps {
  stream: Stream;
}

export function StreamPlayer({ stream }: StreamPlayerProps) {
  const embedUrl = stream.platform === 'youtube'
    ? getYouTubeEmbedUrl(stream.platform_stream_id)
    : getTwitchEmbedUrl(stream.platform_stream_id);

  return (
    <Card>
      <CardContent className="p-0">
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </CardContent>
    </Card>
  );
}
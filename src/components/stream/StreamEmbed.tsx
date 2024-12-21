import { getYouTubeEmbedUrl, getTwitchEmbedUrl } from '@/lib/utils/stream';
import type { StreamPlatform } from '@/lib/types/stream';

interface StreamEmbedProps {
  platform: StreamPlatform;
  platformStreamId: string;
  className?: string;
}

export function StreamEmbed({ platform, platformStreamId, className }: StreamEmbedProps) {
  const embedUrl = platform === 'youtube'
    ? getYouTubeEmbedUrl(platformStreamId)
    : getTwitchEmbedUrl(platformStreamId);

  return (
    <div className={className}>
      <iframe
        src={embedUrl}
        className="w-full h-full"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
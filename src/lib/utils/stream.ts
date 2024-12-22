import type { StreamStatus } from '@/lib/types/stream';

interface StreamStatusBadgeProps {
  label: string;
  className: string;
}

export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

export function getTwitchEmbedUrl(channel: string): string {
  return `https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}`;
}

export function formatViewerCount(count: number): string {
  return new Intl.NumberFormat('en-US', { notation: 'compact' }).format(count);
}

export function getStreamStatusBadgeProps(status: StreamStatus): StreamStatusBadgeProps {
  switch (status) {
    case 'live':
      return { label: 'LIVE', className: 'bg-red-500' };
    case 'scheduled':
      return { label: 'SCHEDULED', className: 'bg-yellow-500' };
    case 'ended':
      return { label: 'ENDED', className: 'bg-gray-500' };
    default:
      return { label: 'UNKNOWN', className: 'bg-gray-500' };
  }
}
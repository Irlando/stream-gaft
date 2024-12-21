export type StreamPlatform = 'youtube' | 'twitch';
export type StreamStatus = 'live' | 'ended' | 'scheduled';

export interface Stream {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  platform: StreamPlatform;
  platform_stream_id: string;
  creator_id: string;
  price: number;
  status: StreamStatus;
  scheduled_for?: string;
  viewer_count: number;
  created_at: string;
}

export interface StreamSubscription {
  id: string;
  stream_id: string;
  user_id: string;
  created_at: string;
  status: 'active' | 'cancelled';
}
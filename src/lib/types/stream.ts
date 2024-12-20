export type StreamPlatform = 'youtube' | 'twitch';

export interface Stream {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  platform: StreamPlatform;
  platform_stream_id: string; // YouTube video ID or Twitch stream ID
  creator_id: string;
  price: number;
  status: 'live' | 'ended' | 'scheduled';
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
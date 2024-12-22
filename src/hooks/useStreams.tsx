import { useState, useEffect } from 'react';
import type { Stream } from '@/lib/types/stream';

// Demo data - replace with real API call
const demoStreams = [
  {
    id: '1',
    title: 'Getting Started with React',
    description: 'Learn the basics of React development',
    thumbnail_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
    platform: 'youtube' as const,
    platform_stream_id: 'dQw4w9WgXcQ',
    creator_id: '1',
    price: 9.99,
    status: 'live' as const,
    viewer_count: 123,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    description: 'Deep dive into TypeScript',
    thumbnail_url: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop',
    platform: 'twitch' as const,
    platform_stream_id: 'typescript',
    creator_id: '1',
    price: 14.99,
    status: 'scheduled' as const,
    scheduled_for: '2024-03-25T15:00:00Z',
    viewer_count: 0,
    created_at: new Date().toISOString(),
  },
];

export function useStreams(id?: string) {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStreams(demoStreams);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStreams();
  }, [id]);

  return { streams, isLoading, error };
}
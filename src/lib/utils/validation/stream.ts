import { z } from 'zod';
import { STREAM_CONSTANTS } from '@/lib/constants/stream';

export const streamSchema = z.object({
  title: z.string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),
  description: z.string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters'),
  platform: z.enum(['youtube', 'twitch']),
  platform_stream_id: z.string()
    .min(1, 'Stream ID is required'),
  price: z.number()
    .min(STREAM_CONSTANTS.PRICING.MIN_PRICE)
    .max(STREAM_CONSTANTS.PRICING.MAX_PRICE),
  scheduled_for: z.string().datetime().optional(),
});

export type StreamFormValues = z.infer<typeof streamSchema>;
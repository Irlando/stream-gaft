export const STREAM_CONSTANTS = {
  PLATFORMS: {
    YOUTUBE: 'youtube',
    TWITCH: 'twitch',
  },
  STATUS: {
    LIVE: 'live',
    ENDED: 'ended',
    SCHEDULED: 'scheduled',
  },
  PRICING: {
    TYPES: {
      ONE_TIME: 'one-time',
      SUBSCRIPTION: 'subscription',
    },
    MIN_PRICE: 0.99,
    MAX_PRICE: 999.99,
  },
} as const;
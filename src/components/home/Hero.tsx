import React from 'react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <Typography variant="h1" className="mb-6 text-4xl md:text-6xl">
        Stream Your Content to a Global Audience
      </Typography>
      <Typography variant="p" className="text-xl text-gray-600 mb-8">
        Share your streams with viewers worldwide. Control access, set pricing, 
        and manage your content with our powerful platform.
      </Typography>
      <div className="flex justify-center gap-4">
        <Button size="lg" className="flex items-center gap-2">
          <Play className="h-5 w-5" />
          Start Streaming
        </Button>
        <Button size="lg" variant="secondary">
          Learn More
        </Button>
      </div>
    </div>
  );
}
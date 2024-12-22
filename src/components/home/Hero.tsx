import { Button } from '@/components/ui/Button';
import { Tv } from 'lucide-react';

export function Hero() {
  const TvIcon = <Tv className="h-12 w-12 text-primary animate-pulse" />;
  
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            {TvIcon}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
            Stream Your Way to Success
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create, share, and monetize your content with our powerful streaming platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Streaming
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
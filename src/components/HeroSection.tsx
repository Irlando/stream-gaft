import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] sports-gradient overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-600/30" />
        <img 
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
          alt="Sports"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Your Gateway to Sports Excellence
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Watch live sports events, follow your favorite teams, and join a community of passionate sports fans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Watch Live
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Explore Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { FeaturedSports } from '@/components/FeaturedSports';
import { LiveEvents } from '@/components/sports/LiveEvents';
import { SportCategories } from '@/components/sports/SportCategories';

export function FeaturesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Platform Features
        </h1>
        <div className="space-y-20">
          <FeaturedSports />
          <LiveEvents />
          <SportCategories />
        </div>
      </div>
    </div>
  );
}
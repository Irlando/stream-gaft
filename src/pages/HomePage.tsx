import { HeroSection } from '@/components/HeroSection';
import { FeaturedSports } from '@/components/FeaturedSports';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';

export function HomePage() {
  return (
    <div className="bg-[#1a2844]">
      <HeroSection />
      <FeaturedSports />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
}
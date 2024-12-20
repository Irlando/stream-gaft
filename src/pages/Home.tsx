import React from 'react';
import { Section } from '../components/ui/Section';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { PricingPlans } from '../components/pricing/PricingPlans';

export function Home() {
  return (
    <div className="space-y-20">
      <Section>
        <Hero />
      </Section>

      <Section>
        <Typography variant="h2" className="text-center mb-12">
          Why Choose Our Platform
        </Typography>
        <Features />
      </Section>

      <Section>
        <Typography variant="h2" className="text-center mb-12">
          Choose Your Plan
        </Typography>
        <PricingPlans />
      </Section>
    </div>
  );
}
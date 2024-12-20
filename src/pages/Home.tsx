import React from 'react';
import { Section } from '../components/ui/Section';
import { Typography } from '../components/ui/Typography';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { PricingPlans } from '../components/pricing/PricingPlans';
import { Testimonials } from '../components/home/Testimonials';
import { Statistics } from '../components/home/Statistics';
import { CTASection } from '../components/home/CTASection';

export function Home() {
  return (
    <div className="space-y-20">
      <Section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <Hero />
      </Section>

      <Section>
        <Statistics />
      </Section>

      <Section className="bg-gray-50">
        <Typography variant="h2" className="text-center mb-12">
          Why Creators Choose Us
        </Typography>
        <Features />
      </Section>

      <Section>
        <Typography variant="h2" className="text-center mb-12">
          Success Stories
        </Typography>
        <Testimonials />
      </Section>

      <Section className="bg-gray-50">
        <Typography variant="h2" className="text-center mb-12">
          Start Streaming Today
        </Typography>
        <PricingPlans />
      </Section>

      <Section className="bg-blue-900 text-white">
        <CTASection />
      </Section>
    </div>
  );
}
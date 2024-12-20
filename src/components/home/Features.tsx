import React from 'react';
import { Typography } from '../ui/Typography';
import { Globe, Shield, DollarSign, Users } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Stream to viewers worldwide with regional access controls',
  },
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Control who can view your content with subscriber-only streams',
  },
  {
    icon: DollarSign,
    title: 'Flexible Pricing',
    description: 'Set your own prices and monetize your content',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Build and engage with your audience',
  },
];

export function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature) => (
        <div key={feature.title} className="text-center">
          <div className="inline-flex p-3 rounded-full bg-blue-100 mb-4">
            <feature.icon className="h-6 w-6 text-blue-600" />
          </div>
          <Typography variant="h3" className="mb-2">{feature.title}</Typography>
          <Typography variant="p" className="text-gray-600">
            {feature.description}
          </Typography>
        </div>
      ))}
    </div>
  );
}
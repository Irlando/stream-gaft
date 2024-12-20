import React from 'react';
import { Card } from '../ui/card';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 9.99,
    features: [
      'Access to public streams',
      'HD quality',
      'Chat participation',
    ],
  },
  {
    name: 'Pro',
    price: 19.99,
    features: [
      'All Basic features',
      'Exclusive streams',
      'Ad-free experience',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 29.99,
    features: [
      'All Pro features',
      'Custom emotes',
      'Stream archives',
      'Early access',
      'Direct creator contact',
    ],
  },
];

export function PricingPlans() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Card 
          key={plan.name}
          className={`relative ${plan.popular ? 'border-2 border-blue-500' : ''}`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
          )}
          <Typography variant="h3" className="mb-4">{plan.name}</Typography>
          <Typography variant="h2" className="mb-6">
            ${plan.price}
            <span className="text-base text-gray-600">/month</span>
          </Typography>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full">Subscribe Now</Button>
        </Card>
      ))}
    </div>
  );
}
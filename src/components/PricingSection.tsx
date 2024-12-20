import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'Basic',
    price: {
      monthly: 9.99,
      annual: 99.99,
    },
    features: [
      'HD streaming quality',
      'Access to basic content',
      'Chat participation',
      'Mobile viewing',
    ],
  },
  {
    name: 'Pro',
    price: {
      monthly: 19.99,
      annual: 199.99,
    },
    features: [
      '4K streaming quality',
      'Access to all content',
      'Priority support',
      'No ads',
      'Download for offline viewing',
      'Multiple device streaming',
    ],
    popular: true,
  },
  {
    name: 'Business',
    price: {
      monthly: 49.99,
      annual: 499.99,
    },
    features: [
      'All Pro features',
      'Custom branding',
      'API access',
      'Analytics dashboard',
      'Team management',
      'Dedicated support',
    ],
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the perfect plan for your streaming needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">${plan.price.monthly}</span>
                  <span className="text-muted-foreground">/month</span>
                  <p className="text-sm text-muted-foreground mt-2">
                    or ${plan.price.annual}/year (save 20%)
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
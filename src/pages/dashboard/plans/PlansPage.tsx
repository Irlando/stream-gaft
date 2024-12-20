import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    features: [
      'HD streaming quality',
      'Access to basic content',
      'Chat participation',
      'Mobile viewing',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 19.99,
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
    id: 'business',
    name: 'Business',
    price: 49.99,
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

export function PlansPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Subscription Plans</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className={plan.popular ? 'border-primary' : ''}>
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <p className="text-3xl font-bold">
                {formatCurrency(plan.price)}
                <span className="text-sm font-normal text-muted-foreground">/month</span>
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                Choose {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
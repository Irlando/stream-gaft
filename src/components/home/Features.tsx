import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Users, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'High Quality Streaming',
    description: 'Stream in HD or 4K quality with minimal latency',
  },
  {
    icon: Users,
    title: 'Growing Community',
    description: 'Connect with viewers and other content creators',
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Your content and data are always protected',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized for speed and reliability',
  },
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature) => (
        <Card key={feature.title}>
          <CardContent className="pt-6">
            <feature.icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
import { Sparkles, Users, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Sparkles,
    title: 'Exclusive Content',
    description: 'Access premium livestreams and events not available anywhere else',
  },
  {
    icon: Users,
    title: 'Interactive Community',
    description: 'Engage with creators and other viewers in real-time discussions',
  },
  {
    icon: Shield,
    title: 'HD Quality',
    description: 'Crystal clear streaming with up to 4K resolution support',
  },
  {
    icon: Zap,
    title: 'Zero Delay',
    description: 'Experience lightning-fast streams with our optimized infrastructure',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-lg bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
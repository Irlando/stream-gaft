import { Card, CardContent } from '@/components/ui/Card';
import { Play, Users, Star } from 'lucide-react';

const liveEvents = [
  {
    title: 'Live Streaming',
    description: 'Watch sports events in real-time with HD quality streaming',
    icon: Play,
  },
  {
    title: 'Community Features',
    description: 'Interact with other fans during live matches',
    icon: Users,
  },
  {
    title: 'Premium Content',
    description: 'Access exclusive sports content and analysis',
    icon: Star,
  },
];

export function LiveEvents() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-white text-center">Live Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {liveEvents.map((event) => (
          <Card key={event.title} className="bg-card/50 border-primary/20">
            <CardContent className="p-6 space-y-4">
              <event.icon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
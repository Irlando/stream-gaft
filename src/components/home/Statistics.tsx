import { Card, CardContent } from '@/components/ui/card';
import { Users, Video, DollarSign } from 'lucide-react';

const stats = [
  {
    label: 'Active Users',
    value: '10,000+',
    icon: Users,
    description: 'Content creators and viewers',
  },
  {
    label: 'Live Streams',
    value: '500+',
    icon: Video,
    description: 'Daily active streams',
  },
  {
    label: 'Revenue Generated',
    value: '$1M+',
    icon: DollarSign,
    description: 'For content creators',
  },
] as const;

export function Statistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map(({ label, value, icon: Icon, description }) => (
        <Card key={label}>
          <CardContent className="pt-6">
            <Icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-lg font-medium">{label}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
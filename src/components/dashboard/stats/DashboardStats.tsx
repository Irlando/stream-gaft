import { Users, PlayCircle, DollarSign } from 'lucide-react';
import { StatCard } from './StatCard';

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Total Subscribers"
        value="1,234"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      />
      <StatCard
        title="Active Streams"
        value="12"
        icon={<PlayCircle className="h-4 w-4 text-muted-foreground" />}
      />
      <StatCard
        title="Revenue"
        value="$12,345"
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
}
import { DashboardStats } from '@/components/dashboard/stats/DashboardStats';

export function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardStats />
    </div>
  );
}
import { Outlet } from 'react-router-dom';
import { DashboardNav } from '@/components/dashboard/navigation/DashboardNav';

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-muted/10 p-6">
        <DashboardNav />
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
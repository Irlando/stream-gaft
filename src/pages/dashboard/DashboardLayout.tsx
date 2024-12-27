import { Outlet } from 'react-router-dom';
import { DashboardNav } from '@/components/dashboard/navigation/DashboardNav';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';

export function DashboardLayout() {
  return (
    <div className="min-h-screen dashboard-gradient">
      <DashboardHeader />
      <div className="flex">
        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <DashboardNav />
        </aside>
        <main className="flex-1 pl-64">
          <div className="container py-6 px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
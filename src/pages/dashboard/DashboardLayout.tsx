import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from './DashboardSidebar';

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
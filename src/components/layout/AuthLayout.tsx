import { Outlet } from 'react-router-dom';
import { Card } from '@/components/ui/Card';

export function AuthLayout() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <Outlet />
      </Card>
    </div>
  );
}
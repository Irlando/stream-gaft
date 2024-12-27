import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NAVIGATION } from '@/lib/constants/navigation';
import {
  LayoutDashboard,
  Video,
  PlaySquare,
  Users,
  CreditCard,
  Settings,
} from 'lucide-react';

const IconMap = {
  LayoutDashboard,
  Video,
  PlaySquare,
  Users,
  CreditCard,
  Settings,
};

export function DashboardNav() {
  const location = useLocation();
  
  return (
    <nav className="flex flex-col gap-2 p-6">
      {NAVIGATION.DASHBOARD.map(({ href, label, icon }) => {
        const Icon = IconMap[icon];
        return (
          <Link
            key={href}
            to={href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
              location.pathname === href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
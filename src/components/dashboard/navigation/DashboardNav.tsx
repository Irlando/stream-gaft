import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NAVIGATION } from '@/lib/constants/navigation';
import * as Icons from 'lucide-react';

export function DashboardNav() {
  const location = useLocation();
  
  return (
    <nav className="space-y-1">
      {NAVIGATION.DASHBOARD.map(({ href, label, icon }) => {
        const Icon = Icons[icon as keyof typeof Icons];
        return (
          <Link
            key={href}
            to={href}
            className={cn(
              'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors',
              location.pathname === href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
          >
            <Icon className="mr-2 h-4 w-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Video, 
  Users, 
  Settings,
  CreditCard
} from 'lucide-react';

const menuItems = [
  {
    title: 'Overview',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: 'Create Stream',
    icon: Video,
    href: '/dashboard/create-stream',
  },
  {
    title: 'Subscribers',
    icon: Users,
    href: '/dashboard/subscribers',
  },
  {
    title: 'Subscription Plans',
    icon: CreditCard,
    href: '/dashboard/plans',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 border-r bg-muted/10 min-h-screen p-4 space-y-4">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            'flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            location.pathname === item.href
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          )}
        >
          <item.icon className="h-4 w-4" />
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
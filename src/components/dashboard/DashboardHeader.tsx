import { UserNav } from '../layout/navigation/UserNav';
import { useAuth } from '@/hooks/useAuth';
import { Logo } from '../layout/navigation/Logo';

export function DashboardHeader() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-8">
        <Logo />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav user={user} />
        </div>
      </div>
    </header>
  );
}
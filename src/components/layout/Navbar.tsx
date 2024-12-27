import { useAuth } from '@/hooks/useAuth';
import { Logo } from './navigation/Logo';
import { NavLinks } from './navigation/NavLinks';
import { UserNav } from './navigation/UserNav';

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center pl-20">
        <div className="flex items-center space-x-8">
          <Logo />
          <NavLinks />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav user={user} />
        </div>
      </div>
    </nav>
  );
}
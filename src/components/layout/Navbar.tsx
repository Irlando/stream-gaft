import { useAuth } from '@/hooks/useAuth';
import { Logo } from './navigation/Logo';
import { NavLinks } from './navigation/NavLinks';
import { UserNav } from './navigation/UserNav';

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <NavLinks />
        <div className="ml-auto">
          <UserNav user={user} />
        </div>
      </div>
    </nav>
  );
}
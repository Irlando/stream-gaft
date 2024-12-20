import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { NavLinks } from './NavLinks';
import { UserMenu } from './UserMenu';
import { Logo } from './Logo';

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <NavLinks />
        <div className="ml-auto">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Link
              to="/login"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
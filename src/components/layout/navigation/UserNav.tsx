import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import type { User } from '@/lib/types/auth';

interface UserNavProps {
  user: User | null;
}

export function UserNav({ user }: UserNavProps) {
  return user ? (
    <Button asChild variant="outline">
      <Link to="/dashboard">Dashboard</Link>
    </Button>
  ) : (
    <Button asChild>
      <Link to="/login">Sign in</Link>
    </Button>
  );
}
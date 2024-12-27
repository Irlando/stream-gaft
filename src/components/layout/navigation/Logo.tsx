import { Link } from 'react-router-dom';
import { Tv } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Tv className="h-6 w-6" />
      <span className="font-bold">GaftSport-LS</span>
    </Link>
  );
}
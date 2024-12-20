import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
];

export function NavLinks() {
  return (
    <div className="ml-8 hidden md:flex">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          to={href}
          className={cn(
            'px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
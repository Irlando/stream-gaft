import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, LogOut } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../stores/authStore';

export function Header() {
  const { user, signOut } = useAuthStore();

  return (
    <header className="bg-white shadow-sm">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-gray-900">
              MyApp
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              {user && (
                <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
              )}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={() => signOut()}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="primary" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
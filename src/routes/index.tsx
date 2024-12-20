import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';
import { AuthPage } from '../pages/AuthPage';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { 
        path: '/', 
        element: <Home />,
        future: {
          v7_startTransition: true
        }
      },
      { 
        path: '/auth', 
        element: <AuthPage />,
        future: {
          v7_startTransition: true
        }
      },
      {
        path: '/dashboard',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        future: {
          v7_startTransition: true
        }
      },
      {
        path: '/profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
        future: {
          v7_startTransition: true
        }
      }
    ]
  }
], {
  future: {
    v7_startTransition: true
  }
});
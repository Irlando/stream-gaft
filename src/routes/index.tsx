import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
//import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';
import { AuthPage } from '../pages/AuthPage';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'auth', element: <AuthPage /> },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { DashboardLayout } from '@/pages/dashboard/DashboardLayout';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/auth/LoginPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { DashboardPage } from '@/pages/dashboard/DashboardPage';
import { CreateStreamPage } from '@/pages/dashboard/CreateStreamPage';
import { MyStreamsPage } from '@/pages/dashboard/MyStreamsPage';
import { SubscribersPage } from '@/pages/dashboard/SubscribersPage';
import { PlansPage } from '@/pages/dashboard/plans/PlansPage';
import { SettingsPage } from '@/pages/dashboard/settings/SettingsPage';
import { StreamPage } from '@/pages/stream/StreamPage';
import { ProfilePage } from '@/pages/profile/ProfilePage';
import { SubscriptionsPage } from '@/pages/subscriptions/SubscriptionsPage';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        element: <AuthLayout />,
        children: [
          { path: '/login', element: <LoginPage /> },
          { path: '/register', element: <RegisterPage /> },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              { path: '/dashboard', element: <DashboardPage /> },
              { path: '/dashboard/create-stream', element: <CreateStreamPage /> },
              { path: '/dashboard/my-streams', element: <MyStreamsPage /> },
              { path: '/dashboard/subscribers', element: <SubscribersPage /> },
              { path: '/dashboard/plans', element: <PlansPage /> },
              { path: '/dashboard/settings', element: <SettingsPage /> },
            ],
          },
          { path: '/stream/:id', element: <StreamPage /> },
          { path: '/profile', element: <ProfilePage /> },
          { path: '/subscriptions', element: <SubscriptionsPage /> },
        ],
      },
    ],
  },
]);
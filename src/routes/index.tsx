import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { DashboardLayout } from '@/pages/dashboard/DashboardLayout';
import { HomePage } from '@/pages/HomePage';
import { FeaturesPage } from '@/pages/features/FeaturesPage';
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
import { Navbar } from '@/components/layout/Navbar';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'features', element: <FeaturesPage /> },
    ],
  },
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
          { path: '/dashboard/my-streams', element: <MyStreamsPage /> },
          { path: '/dashboard/create-stream', element: <CreateStreamPage /> },
          { path: '/dashboard/subscribers', element: <SubscribersPage /> },
          { path: '/dashboard/plans', element: <PlansPage /> },
          { path: '/dashboard/settings', element: <SettingsPage /> },
          { path: '/profile', element: <ProfilePage /> },
          { path: '/subscriptions', element: <SubscriptionsPage /> },
          { path: '/stream/:id', element: <StreamPage /> },
        ],
      },
    ],
  },
]);
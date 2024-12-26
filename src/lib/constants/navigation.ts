export const NAVIGATION = {
  MAIN: [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
  ],
  DASHBOARD: [
    { href: '/dashboard', label: 'Overview', icon: 'LayoutDashboard' },
    { href: '/dashboard/my-streams', label: 'My Streams', icon: 'PlaySquare' },
    { href: '/dashboard/create-stream', label: 'Create Stream', icon: 'Video' },
    { href: '/dashboard/subscribers', label: 'Subscribers', icon: 'Users' },
    { href: '/dashboard/plans', label: 'Subscription Plans', icon: 'CreditCard' },
    { href: '/dashboard/settings', label: 'Settings', icon: 'Settings' },
  ],
} as const;
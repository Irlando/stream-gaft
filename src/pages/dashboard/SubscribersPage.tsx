import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Demo data - replace with real API call
const demoSubscribers = [
  {
    id: '1',
    username: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop',
    subscribed_date: '2024-03-01T10:00:00Z',
    stream_title: 'Getting Started with React',
  },
  {
    id: '2',
    username: 'Michael Chen',
    email: 'michael@example.com',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop',
    subscribed_date: '2024-03-05T15:30:00Z',
    stream_title: 'Advanced TypeScript Patterns',
  },
];

export function SubscribersPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">My Subscribers</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Subscribers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {demoSubscribers.map((subscriber) => (
              <div key={subscriber.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={subscriber.avatar_url} alt={subscriber.username} />
                    <AvatarFallback>{subscriber.username[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{subscriber.username}</p>
                    <p className="text-sm text-muted-foreground">{subscriber.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{subscriber.stream_title}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(subscriber.subscribed_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
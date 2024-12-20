import React from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Typography } from '../components/ui/Typography';
import { useAuthStore } from '../stores/authStore';

export function Profile() {
  const { user } = useAuthStore();

  return (
    <Section>
      <Card>
        <Typography variant="h2" className="mb-6">
          Profile
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="h4">Email</Typography>
            <Typography variant="p" className="text-gray-600">
              {user?.email}
            </Typography>
          </div>
        </div>
      </Card>
    </Section>
  );
}
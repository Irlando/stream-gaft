import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { CreateStreamForm } from '../components/streams/CreateStreamForm';
import { StreamList } from '../components/streams/StreamList';

export function Dashboard() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <Section>
      <div className="space-y-6">
        <Card>
          <div className="flex justify-between items-center mb-6">
            <Typography variant="h2">
              Your Streams
            </Typography>
            <Button onClick={() => setShowCreateForm(!showCreateForm)}>
              {showCreateForm ? 'Cancel' : 'Create Stream'}
            </Button>
          </div>
          
          {showCreateForm && (
            <CreateStreamForm />
          )}
        </Card>

        <StreamList />
      </div>
    </Section>
  );
}
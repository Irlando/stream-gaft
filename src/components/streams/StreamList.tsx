import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Card } from '../ui/card';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/button';
import { useAuthStore } from '../../stores/authStore';

interface Stream {
  id: string;
  title: string;
  url: string;
  cost: number;
  subscribers_only: boolean;
  blocked_countries: string[];
  user_id: string;
}

export function StreamList() {
  const [streams, setStreams] = useState<Stream[]>([]);
  const { user } = useAuthStore();

  useEffect(() => {
    loadStreams();
  }, []);

  async function loadStreams() {
    const { data } = await supabase
      .from('streams')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) {
      setStreams(data);
    }
  }

  async function deleteStream(id: string) {
    await supabase.from('streams').delete().eq('id', id);
    loadStreams();
  }

  return (
    <div className="space-y-4">
      {streams.map((stream) => (
        <Card key={stream.id} className="flex justify-between items-center">
          <div>
            <Typography variant="h4">{stream.title}</Typography>
            <Typography variant="p" className="text-gray-600">
              Cost: ${stream.cost} | {stream.subscribers_only ? 'Subscribers Only' : 'Public'}
            </Typography>
          </div>
          {user?.id === stream.user_id && (
            <Button 
              variant="secondary" 
              onClick={() => deleteStream(stream.id)}
            >
              Delete
            </Button>
          )}
        </Card>
      ))}
    </div>
  );
}
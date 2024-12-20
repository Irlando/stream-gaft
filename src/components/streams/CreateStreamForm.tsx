import React, { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/button';
import { Typography } from '../ui/Typography';

export function CreateStreamForm() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [cost, setCost] = useState('0');
  const [subscribersOnly, setSubscribersOnly] = useState(false);
  const [blockedCountries, setBlockedCountries] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error: err } = await supabase.from('streams').insert({
        title,
        url,
        cost: parseFloat(cost),
        subscribers_only: subscribersOnly,
        blocked_countries: blockedCountries.split(',').map(c => c.trim()).filter(Boolean),
      });

      if (err) throw err;
      
      // Reset form
      setTitle('');
      setUrl('');
      setCost('0');
      setSubscribersOnly(false);
      setBlockedCountries('');
    } catch (err) {
      setError('Failed to create stream');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Stream URL (Twitch/YouTube)
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Cost (USD)</label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          min="0"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={subscribersOnly}
            onChange={(e) => setSubscribersOnly(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="ml-2">Subscribers Only</span>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Blocked Countries (comma-separated)
        </label>
        <input
          type="text"
          value={blockedCountries}
          onChange={(e) => setBlockedCountries(e.target.value)}
          placeholder="US, BR, UK"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      {error && (
        <Typography variant="p" className="text-red-600">
          {error}
        </Typography>
      )}

      <Button type="submit">Create Stream</Button>
    </form>
  );
}
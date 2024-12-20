/*
  # Create streams table and policies

  1. New Tables
    - `streams`
      - `id` (uuid, primary key)
      - `title` (text)
      - `url` (text) - Twitch/YouTube URL or ID
      - `cost` (numeric) - Price in USD
      - `subscribers_only` (boolean)
      - `blocked_countries` (text[]) - Array of country codes
      - `user_id` (uuid) - Creator reference
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS
    - Policies for create, read, update, delete
*/

CREATE TABLE streams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  url text NOT NULL,
  cost numeric DEFAULT 0,
  subscribers_only boolean DEFAULT false,
  blocked_countries text[] DEFAULT '{}',
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE streams ENABLE ROW LEVEL SECURITY;

-- Allow users to read non-blocked streams
CREATE POLICY "Anyone can view available streams"
  ON streams
  FOR SELECT
  USING (
    NOT (auth.jwt()->>'country')::text = ANY (blocked_countries)
  );

-- Allow authenticated users to create streams
CREATE POLICY "Users can create streams"
  ON streams
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own streams
CREATE POLICY "Users can update own streams"
  ON streams
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own streams
CREATE POLICY "Users can delete own streams"
  ON streams
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
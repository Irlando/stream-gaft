//import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getYouTubeEmbedUrl, getTwitchEmbedUrl, formatCurrency } from '@/lib/utils';
import type { Stream } from '@/lib/types/stream';

// Demo stream data
const DEMO_STREAM: Stream = {
  id: '1',
  title: 'Demo Stream',
  description: 'This is a demo stream showing YouTube/Twitch integration.',
  platform: 'youtube',
  platform_stream_id: 'cgE2lPVXsOc',
  price: 9.99,
  status: 'live',
  viewer_count: 123,
  creator_id: '1',
  thumbnail_url: '',
  created_at: new Date().toISOString(),
};

export function StreamPage() {
  //const { id } = useParams<{ id: string }>();
  const stream = DEMO_STREAM; // In real app, fetch stream by ID using the id parameter

  const embedUrl = stream.platform === 'youtube'
    ? getYouTubeEmbedUrl(stream.platform_stream_id)
    : getTwitchEmbedUrl(stream.platform_stream_id);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{stream.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{stream.description}</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stream Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-2xl font-bold">{formatCurrency(stream.price)}</p>
              </div>
              {stream.status === 'live' && (
                <div>
                  <p className="text-sm text-muted-foreground">Viewers</p>
                  <p className="text-lg">{stream.viewer_count}</p>
                </div>
              )}
              <Button className="w-full">Purchase Access</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
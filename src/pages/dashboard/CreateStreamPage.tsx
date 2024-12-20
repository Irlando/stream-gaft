import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { StreamPlatform } from '@/lib/types/stream';
import { PricingOptions } from '@/components/stream/PricingOptions';
import { PlanRequirements } from '@/components/stream/PlanRequirements';

const availablePlans = [
  { id: 'basic', name: 'Basic', price: 9.99 },
  { id: 'pro', name: 'Pro', price: 19.99 },
  { id: 'business', name: 'Business', price: 49.99 },
];

export function CreateStreamPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [platform, setPlatform] = useState<StreamPlatform>('youtube');
  const [pricingType, setPricingType] = useState<'one-time' | 'subscription'>('one-time');
  const [price, setPrice] = useState<number>(0);
  const [requiredPlans, setRequiredPlans] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const streamData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      platform_stream_id: formData.get('streamId') as string,
      platform,
      pricing: {
        type: pricingType,
        price: pricingType === 'one-time' ? price : null,
        required_plans: pricingType === 'subscription' ? requiredPlans : [],
      },
      scheduled_for: formData.get('scheduledFor') as string,
    };

    console.log('Stream data:', streamData);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard/my-streams');
    }, 1000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Stream</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stream Details Column */}
        <Card>
          <CardHeader>
            <CardTitle>Stream Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Platform</Label>
              <RadioGroup
                defaultValue={platform}
                onValueChange={(value) => setPlatform(value as StreamPlatform)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="youtube" id="youtube" />
                  <Label htmlFor="youtube">YouTube</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="twitch" id="twitch" />
                  <Label htmlFor="twitch">Twitch</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="streamId">
                {platform === 'youtube' ? 'YouTube Video ID' : 'Twitch Channel Name'}
              </Label>
              <Input
                id="streamId"
                name="streamId"
                placeholder={
                  platform === 'youtube'
                    ? 'e.g., dQw4w9WgXcQ'
                    : 'e.g., ninja'
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Stream Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter stream title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your stream..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="scheduledFor">Schedule For</Label>
              <Input
                id="scheduledFor"
                name="scheduledFor"
                type="datetime-local"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pricing Column */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <PricingOptions
              onPriceChange={setPrice}
              onPricingTypeChange={setPricingType}
            />

            {pricingType === 'subscription' && (
              <PlanRequirements
                plans={availablePlans}
                onPlanChange={setRequiredPlans}
              />
            )}
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Creating...' : 'Create Stream'}
          </Button>
        </div>
      </form>
    </div>
  );
}
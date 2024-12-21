import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { STREAM_CONSTANTS } from '@/lib/constants/stream';
import type { StreamPlatform } from '@/lib/types/stream';

interface StreamPlatformSelectProps {
  value: StreamPlatform;
  onChange: (platform: StreamPlatform) => void;
}

export function StreamPlatformSelect({ value, onChange }: StreamPlatformSelectProps) {
  return (
    <div className="space-y-2">
      <Label>Platform</Label>
      <RadioGroup
        value={value}
        onValueChange={(value) => onChange(value as StreamPlatform)}
        className="flex space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={STREAM_CONSTANTS.PLATFORMS.YOUTUBE} id="youtube" />
          <Label htmlFor="youtube">YouTube</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={STREAM_CONSTANTS.PLATFORMS.TWITCH} id="twitch" />
          <Label htmlFor="twitch">Twitch</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
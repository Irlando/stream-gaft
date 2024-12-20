import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface PricingOptionsProps {
  onPriceChange: (price: number) => void;
  onPricingTypeChange: (type: 'one-time' | 'subscription') => void;
}

export function PricingOptions({ onPriceChange, onPricingTypeChange }: PricingOptionsProps) {
  const [pricingType, setPricingType] = useState<'one-time' | 'subscription'>('one-time');

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Pricing Type</Label>
        <RadioGroup
          defaultValue={pricingType}
          onValueChange={(value: 'one-time' | 'subscription') => {
            setPricingType(value);
            onPricingTypeChange(value);
          }}
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="one-time" id="one-time" />
            <Label htmlFor="one-time">One-time payment</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="subscription" id="subscription" />
            <Label htmlFor="subscription">Subscription plans only</Label>
          </div>
        </RadioGroup>
      </div>

      {pricingType === 'one-time' && (
        <div className="space-y-2">
          <Label htmlFor="price">Price (USD)</Label>
          <Input
            id="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            onChange={(e) => onPriceChange(Number(e.target.value))}
          />
        </div>
      )}
    </div>
  );
}
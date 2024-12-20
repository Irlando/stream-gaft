import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Plan {
  id: string;
  name: string;
  price: number;
}

interface PlanRequirementsProps {
  plans: Plan[];
  onPlanChange: (planIds: string[]) => void;
}

export function PlanRequirements({ plans, onPlanChange }: PlanRequirementsProps) {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);

  const handlePlanToggle = (planId: string, checked: boolean) => {
    const updatedPlans = checked 
      ? [...selectedPlans, planId]
      : selectedPlans.filter(id => id !== planId);
    setSelectedPlans(updatedPlans);
    onPlanChange(updatedPlans);
  };

  return (
    <div className="space-y-4">
      <Label>Required Subscription Plans</Label>
      <div className="space-y-2">
        {plans.map((plan) => (
          <div key={plan.id} className="flex items-center space-x-2">
            <Checkbox
              id={plan.id}
              onCheckedChange={(checked) => handlePlanToggle(plan.id, checked as boolean)}
            />
            <Label htmlFor={plan.id}>
              {plan.name} (${plan.price}/month)
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
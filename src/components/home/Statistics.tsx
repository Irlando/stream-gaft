import React from 'react';
import { Typography } from '../ui/Typography';
import { Users, Globe2, DollarSign, Play } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10K+',
    label: 'Active Creators',
  },
  {
    icon: Globe2,
    value: '150+',
    label: 'Countries',
  },
  {
    icon: DollarSign,
    value: '$2M+',
    label: 'Creator Earnings',
  },
  {
    icon: Play,
    value: '100K+',
    label: 'Monthly Streams',
  },
];

export function Statistics() {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="inline-flex p-4 rounded-full bg-blue-100 mb-4">
            <stat.icon className="h-8 w-8 text-blue-600" />
          </div>
          <Typography variant="h2" className="text-4xl font-bold mb-2">
            {stat.value}
          </Typography>
          <Typography variant="p" className="text-gray-600">
            {stat.label}
          </Typography>
        </div>
      ))}
    </div>
  );
}
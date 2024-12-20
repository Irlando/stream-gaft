import React from 'react';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    image: 'https://source.unsplash.com/random/100x100?woman',
    quote: 'This platform transformed my hobby into a full-time career. The global reach and monetization tools are game-changing.',
  },
  {
    name: 'Michael Chen',
    role: 'Gaming Streamer',
    image: 'https://source.unsplash.com/random/100x100?man',
    quote: 'The ability to control access by region while maintaining high stream quality has helped me build a dedicated audience.',
  },
  {
    name: 'Emma Davis',
    role: 'Educational Content Creator',
    image: 'https://source.unsplash.com/random/100x100?person',
    quote: 'The subscription model has allowed me to create better content while building a sustainable business.',
  },
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.name} className="relative">
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <Typography variant="p" className="mb-6 text-gray-600">
            "{testimonial.quote}"
          </Typography>
          <div className="flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <Typography variant="h4">{testimonial.name}</Typography>
              <Typography variant="p" className="text-gray-600">
                {testimonial.role}
              </Typography>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
import React from 'react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Play, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Typography variant="h1" className="text-5xl lg:text-6xl font-bold">
              Transform Your Content Into a Global Business
            </Typography>
            <Typography variant="p" className="text-xl text-blue-100 leading-relaxed">
              Join thousands of creators who are monetizing their content and building 
              sustainable businesses through our platform.
            </Typography>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/auth">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Play className="h-5 w-5 mr-2" />
                Start Streaming
              </Button>
            </Link>
            <Button size="lg" variant="ghost" className="text-white border-2 border-white">
              View Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 text-blue-100">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://source.unsplash.com/random/100x100?face&${i}`}
                  alt="Creator"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p>Join 10,000+ creators worldwide</p>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://source.unsplash.com/random/800x600?streaming"
              alt="Streaming Setup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-blue-500 opacity-20 transform rotate-6 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
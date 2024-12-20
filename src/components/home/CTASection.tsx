import React from 'react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <Typography variant="h2" className="text-4xl font-bold mb-6">
        Ready to Start Your Streaming Journey?
      </Typography>
      <Typography variant="p" className="text-xl text-blue-100 mb-8">
        Join thousands of successful creators who are building their dreams with our platform.
      </Typography>
      <Link to="/auth">
        <Button 
          size="lg" 
          className="bg-white text-blue-900 hover:bg-blue-50 inline-flex items-center"
        >
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
}
import * as React from 'react';
import { ResponsiveContainer, ComposedChart } from 'recharts';
import { type ChartProps } from './types';
export * from './components';

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ children, width = '100%', height = 350, className }, ref) => (
    <div ref={ref} className={className}>
      <ResponsiveContainer width={width} height={height}>
        <ComposedChart>{children}</ComposedChart>
      </ResponsiveContainer>
    </div>
  )
);
Chart.displayName = 'Chart';
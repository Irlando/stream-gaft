import * as React from 'react';
import {
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  type AreaProps,
  type BarProps,
  type LineProps,
  type XAxisProps,
  type YAxisProps,
  type TooltipProps,
} from 'recharts';
import { CustomTooltip } from './CustomTooltip';

export const ChartArea = React.forwardRef<SVGElement, AreaProps>((props  ) => (
  <Area  {...props} /> //ref={ref}
));
ChartArea.displayName = 'ChartArea';

export const ChartBar = React.forwardRef<SVGElement, BarProps>((props  ) => (
  <Bar  {...props} />
));
ChartBar.displayName = 'ChartBar';

export const ChartLine = React.forwardRef<SVGElement, LineProps>((props  ) => (
  <Line {...props} />
));
ChartLine.displayName = 'ChartLine';

export const ChartXAxis = React.forwardRef<SVGElement, XAxisProps>((props) => (
  <XAxis {...props} />
));
ChartXAxis.displayName = 'ChartXAxis';

export const ChartYAxis = React.forwardRef<SVGElement, YAxisProps>((props) => (
  <YAxis {...props} />
));
ChartYAxis.displayName = 'ChartYAxis';

export const ChartTooltip = React.forwardRef<SVGElement, TooltipProps<any, any>>((props) => (
  <Tooltip content={<CustomTooltip />} {...props} />
));
ChartTooltip.displayName = 'ChartTooltip';
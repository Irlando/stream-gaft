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

export const ChartArea = React.forwardRef<SVGElement, AreaProps>((props, ref) => (
  <Area ref={ref} {...props} />
));
ChartArea.displayName = 'ChartArea';

export const ChartBar = React.forwardRef<SVGElement, BarProps>((props, ref) => (
  <Bar ref={ref} {...props} />
));
ChartBar.displayName = 'ChartBar';

export const ChartLine = React.forwardRef<SVGElement, LineProps>((props, ref) => (
  <Line ref={ref} {...props} />
));
ChartLine.displayName = 'ChartLine';

export const ChartXAxis = React.forwardRef<SVGElement, XAxisProps>((props, ref) => (
  <XAxis ref={ref} {...props} />
));
ChartXAxis.displayName = 'ChartXAxis';

export const ChartYAxis = React.forwardRef<SVGElement, YAxisProps>((props, ref) => (
  <YAxis ref={ref} {...props} />
));
ChartYAxis.displayName = 'ChartYAxis';

export const ChartTooltip = React.forwardRef<SVGElement, TooltipProps<any, any>>((props, ref) => (
  <Tooltip ref={ref} content={<CustomTooltip />} {...props} />
));
ChartTooltip.displayName = 'ChartTooltip';
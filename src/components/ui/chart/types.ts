import type { ReactNode } from 'react';

export interface ChartProps {
  children: ReactNode;
  width?: number | string;
  height?: number;
  className?: string;
}

export interface TooltipData {
  label?: string;
  value?: number;
  color?: string;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipData[];
  label?: string;
}
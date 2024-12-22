import * as React from "react";
import * as RechartsPrimitive from "recharts";

const Chart = RechartsPrimitive.ResponsiveContainer;

type ChartProps = React.ComponentProps<typeof Chart>;

function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
  }>;
  label?: string;
}) {
  if (!active || !payload) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-muted-foreground">
            {label}
          </span>
          {payload.map((item, index) => (
            <span
              key={index}
              className="font-bold"
              style={{ color: item.color }}
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const ChartArea = React.forwardRef<
  SVGSVGElement,
  React.ComponentProps<typeof RechartsPrimitive.Area>
>((props, ref) => (
  <RechartsPrimitive.Area ref={ref} {...props} />
));
ChartArea.displayName = "ChartArea";

const ChartBar = React.forwardRef<
  SVGSVGElement,
  React.ComponentProps<typeof RechartsPrimitive.Bar>
>((props, ref) => (
  <RechartsPrimitive.Bar ref={ref} {...props} />
));
ChartBar.displayName = "ChartBar";

const ChartLine = React.forwardRef<
  SVGSVGElement,
  React.ComponentProps<typeof RechartsPrimitive.Line>
>((props, ref) => (
  <RechartsPrimitive.Line ref={ref} {...props} />
));
ChartLine.displayName = "ChartLine";

const ChartXAxis = React.forwardRef<
  SVGSVGElement,
  React.ComponentProps<typeof RechartsPrimitive.XAxis>
>((props, ref) => (
  <RechartsPrimitive.XAxis ref={ref} {...props} />
));
ChartXAxis.displayName = "ChartXAxis";

const ChartYAxis = React.forwardRef<
  SVGSVGElement,
  React.ComponentProps<typeof RechartsPrimitive.YAxis>
>((props, ref) => (
  <RechartsPrimitive.YAxis ref={ref} {...props} />
));
ChartYAxis.displayName = "ChartYAxis";

const ChartTooltip = React.forwardRef<
  SVGSVGElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip>
>((props, ref) => (
  <RechartsPrimitive.Tooltip ref={ref} content={<CustomTooltip />} {...props} />
));
ChartTooltip.displayName = "ChartTooltip";

export {
  Chart,
  ChartArea,
  ChartBar,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartTooltip,
};
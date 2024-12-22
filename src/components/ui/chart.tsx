import * as React from "react";
import * as RechartsPrimitive from "recharts";

const Chart = RechartsPrimitive.ResponsiveContainer;

//type ChartProps = React.ComponentProps<typeof Chart>;

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
  SVGElement,
  React.ComponentProps<typeof RechartsPrimitive.Area>
>((props   ) => (
  <RechartsPrimitive.Area {...props} />
));
ChartArea.displayName = "ChartArea";

const ChartBar = React.forwardRef<
  SVGElement,
  React.ComponentProps<typeof RechartsPrimitive.Bar>
>((props   ) => (
  <RechartsPrimitive.Bar  {...props} />
));
ChartBar.displayName = "ChartBar";

const ChartLine = React.forwardRef<
  SVGElement,
  React.ComponentProps<typeof RechartsPrimitive.Line>
>((props   ) => (
  <RechartsPrimitive.Line   {...props} />
));
ChartLine.displayName = "ChartLine";

const ChartXAxis = React.forwardRef<
  SVGElement,
  React.ComponentProps<typeof RechartsPrimitive.XAxis>
>((props   ) => (
  <RechartsPrimitive.XAxis  {...props} />
));
ChartXAxis.displayName = "ChartXAxis";

const ChartYAxis = React.forwardRef<
  SVGElement,
  React.ComponentProps<typeof RechartsPrimitive.YAxis>
>((props   ) => (
  <RechartsPrimitive.YAxis   {...props} />
));
ChartYAxis.displayName = "ChartYAxis";

const ChartTooltip = React.forwardRef<
  SVGElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip>
>((props   ) => (
  <RechartsPrimitive.Tooltip  content={<CustomTooltip />} {...props} />
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
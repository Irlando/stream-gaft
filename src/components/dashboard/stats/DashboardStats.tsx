import { Card } from '@/components/ui/Card';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { value: 400 },
  { value: 300 },
  { value: 500 },
  { value: 350 },
  { value: 450 },
  { value: 400 },
  { value: 600 },
];

interface StatCardProps {
  title: string;
  value: string;
  chart?: boolean;
}

function StatCard({ title, value, chart }: StatCardProps) {
  return (
    <Card className="card-gradient p-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-primary">{value}</p>
      </div>
      {chart && (
        <div className="h-24 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Value
                            </span>
                            <span className="font-bold text-primary">
                              {payload[0].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
}

export function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <StatCard title="Total Views" value="755.5K" chart />
      <StatCard title="Revenue" value="$3,432.4" chart />
      <StatCard title="Followers" value="45.2K" chart />
    </div>
  );
}
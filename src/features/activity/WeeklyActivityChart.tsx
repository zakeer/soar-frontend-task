import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Skeleton } from "@/components/ui/skeleton";
import { useWeeklyActivity } from "@/features/activity/query/activity.queries";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function ActivityChart() {
  const { data, isLoading, error } = useWeeklyActivity();

  if (isLoading) {
    return <Skeleton className="h-[300px] w-full" />;
  }

  if (error || !data) {
    return <div className="text-destructive">Failed to load activity data</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data.activities}
        margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
        barGap={12}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#dfdfdf"
        />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#718EBF", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#718EBF", fontSize: 12 }}
          ticks={[0, 100, 200, 300, 400, 500]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          itemStyle={{ color: "#343C6A" }}
          labelStyle={{ color: "#718EBF" }}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          align="right"
          verticalAlign="top"
          wrapperStyle={{ paddingBottom: "20px" }}
        />
        <Bar
          name="Withdraw"
          dataKey="withdraw"
          fill="#343C6A"
          radius={16}
          barSize={16}
        />
        <Bar
          name="Deposit"
          dataKey="deposit"
          fill="#396AFF"
          radius={16}
          barSize={16}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function WeeklyActivity() {
  return (
    <div className="flex flex-col gap-3">
      <Typography variant="h4" className="text-primary h-9 flex items-center">
        Weekly Activity
      </Typography>
      <Card>
        <CardContent>
          <ActivityChart />
        </CardContent>
      </Card>
    </div>
  );
}

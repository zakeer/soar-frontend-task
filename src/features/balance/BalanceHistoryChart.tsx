import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Skeleton } from "@/components/ui/skeleton";
import { useBalanceHistory } from "@/features/balance/query/balance.queries";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function HistoryChart() {
  const { data, isLoading, error } = useBalanceHistory();

  if (isLoading) {
    return <Skeleton className="h-[300px] w-full" />;
  }

  if (error || !data) {
    return (
      <div className="text-destructive">Failed to load balance history</div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data.history}
        margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#396AFF" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#396AFF" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={true}
          horizontal={true}
          stroke="#dfdfdf"
        />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#718EBF", fontSize: 12 }}
          dy={10}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#718EBF", fontSize: 12 }}
          dx={-10}
          ticks={[0, 200, 400, 600, 800]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          itemStyle={{ color: "#343C6A" }}
          labelStyle={{ color: "#718EBF" }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#396AFF"
          strokeWidth={2}
          fill="url(#colorBalance)"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function BalanceHistory() {
  return (
    <div className="flex flex-col gap-3">
      <Typography variant="h4" className="text-primary">
        Balance History
      </Typography>
      <Card className="bg-white rounded-2xl">
        <CardContent>
          <HistoryChart />
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Skeleton } from "@/components/ui/skeleton";
import { useExpenseStatistics } from "@/features/expenses/query/expense.queries";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const RADIAN = Math.PI / 180;

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
  name: string;
  percent: number;
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  name,
}: CustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      {/* Percentage */}
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: "12px",
          fontWeight: "600",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {`${value}%`}
      </text>
      {/* Label */}
      <text
        x={x}
        y={y + 12}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: "10px",
          fontWeight: "500",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {name}
      </text>
    </g>
  );
};

function StatisticsChart() {
  const { data, isLoading, error } = useExpenseStatistics();

  if (isLoading) {
    return <Skeleton className="h-[300px] w-full" />;
  }

  if (error || !data) {
    return (
      <div className="text-destructive">Failed to load expense statistics</div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data.categories}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          innerRadius={0}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={0}
          startAngle={45}
          endAngle={500}
        >
          {data.categories.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              stroke="white"
              strokeWidth={3}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export function ExpenseStatistics() {
  return (
    <div className="flex flex-col gap-3">
      <Typography variant="h4" className="text-primary h-9 flex items-center">
        Expense Statistics
      </Typography>
      <Card>
        <CardContent>
          <StatisticsChart />
        </CardContent>
      </Card>
    </div>
  );
}

import { MyCards } from "@/features/cards/MyCards";
import { RecentTransactions } from "@/features/transactions/RecentTransactions";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Typography } from "@/components/ui/typography";
import { WeeklyActivity } from "@/features/activity/WeeklyActivityChart";
import { ExpenseStatistics } from "@/features/expenses/ExpenseStatisticsChart";
import { BalanceHistory } from "@/features/balance/BalanceHistoryChart";

const DashboardPage = () => {
  return (
    <DashboardLayout title="Overview">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <MyCards />
        </div>
        <div className="col-span-4">
          <RecentTransactions />
        </div>
        <div className="col-span-8">
          <WeeklyActivity />
        </div>
        <div className="col-span-4">
          <ExpenseStatistics />
        </div>
        <div className="col-span-5">
          <Typography variant="h4" className="text-primary">
            Quick Transfer
          </Typography>
        </div>
        <div className="col-span-7">
          <BalanceHistory />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;

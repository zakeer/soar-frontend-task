import { MyCards } from "@/features/cards/MyCards";
import { RecentTransactions } from "@/features/transactions/RecentTransactions";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { WeeklyActivity } from "@/features/activity/WeeklyActivityChart";
import { ExpenseStatistics } from "@/features/expenses/ExpenseStatisticsChart";
import { BalanceHistory } from "@/features/balance/BalanceHistoryChart";
import { QuickTransfer } from "@/features/transfer/QuickTransfer";
import { useDocumentTitle } from "usehooks-ts";

const DashboardPage = () => {
  useDocumentTitle("Soar Task: Overview Dashboard");
  return (
    <DashboardLayout title="Overview">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-6 xl:col-span-8">
          <MyCards />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          <RecentTransactions />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-8">
          <WeeklyActivity />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          <ExpenseStatistics />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <QuickTransfer />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-7">
          <BalanceHistory />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;

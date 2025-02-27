import { Suspense, lazy } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useDocumentTitle } from "usehooks-ts";

const MyCards = lazy(() => import("@/features/cards/MyCards"));
const RecentTransactions = lazy(
  () => import("@/features/transactions/RecentTransactions")
);
const WeeklyActivity = lazy(
  () => import("@/features/activity/WeeklyActivityChart")
);
const ExpenseStatistics = lazy(
  () => import("@/features/expenses/ExpenseStatisticsChart")
);
const BalanceHistory = lazy(
  () => import("@/features/balance/BalanceHistoryChart")
);
const QuickTransfer = lazy(() => import("@/features/transfer/QuickTransfer"));

const DashboardPage = () => {
  useDocumentTitle("Soar Task: Overview Dashboard");
  return (
    <DashboardLayout title="Overview">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-6 xl:col-span-8">
          <Suspense fallback={<div>Loading My Cards...</div>}>
            <MyCards />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          <Suspense fallback={<div>Loading Recent Transactions...</div>}>
            <RecentTransactions />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-8">
          <Suspense fallback={<div>Loading Weekly Activity...</div>}>
            <WeeklyActivity />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          <Suspense fallback={<div>Loading Expense Statistics...</div>}>
            <ExpenseStatistics />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <Suspense fallback={<div>Loading Quick Transfer...</div>}>
            <QuickTransfer />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-7">
          <Suspense fallback={<div>Loading Balance History...</div>}>
            <BalanceHistory />
          </Suspense>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;

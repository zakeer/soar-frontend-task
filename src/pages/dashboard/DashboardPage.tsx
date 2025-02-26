import { MyCards } from "@/components/features/cards/MyCards";
import { RecentTransactions } from "@/components/features/transactions/RecentTransactions";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Typography } from "@/components/ui/typography";

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
          <Typography variant="h4" className="text-primary">
            Weekly Activity
          </Typography>
        </div>
        <div className="col-span-4">
          <Typography variant="h4" className="text-primary">
            Expense Statistics
          </Typography>
        </div>
        <div className="col-span-5">
          <Typography variant="h4" className="text-primary">
            Quick Transfer
          </Typography>
        </div>
        <div className="col-span-7">
          <Typography variant="h4" className="text-primary">
            Balance History
          </Typography>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;

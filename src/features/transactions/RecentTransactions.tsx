import { Skeleton } from "@/components/ui/skeleton";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { TransactionItem } from "./TransactionItem";
import { useRecentTransactions } from "@/features/transactions/query/transaction.queries";

function Transactions() {
  const { data: transactions, isLoading, error } = useRecentTransactions();
  if (isLoading) {
    return (
      <div className="space-y-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-5">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-[200px]" />
              <Skeleton className="h-5 w-[100px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (error) {
    return <div className="text-destructive">Failed to load transactions</div>;
  }

  if (!transactions || transactions.length === 0) {
    return <div className="text-muted-foreground">No recent transactions</div>;
  }

  return (
    <div className="space-y-5">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export function RecentTransactions() {
  return (
    <div className="flex flex-col gap-3">
      <Typography variant="h4" className="text-primary h-9 flex items-center">
        Recent Transactions
      </Typography>
      <Card>
        <CardContent>
          <Transactions />
        </CardContent>
      </Card>
    </div>
  );
}

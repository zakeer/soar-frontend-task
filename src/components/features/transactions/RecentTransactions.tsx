"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { TransactionItem } from "@/components/features/transactions/TransactionItem";
import { Transaction } from "@/components/features/transactions/transaction.types";
import { useEffect, useState } from "react";
import { Typography } from "@/components/ui/typography";

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    type: "card",
    status: "error",
  },
  {
    id: "2",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    type: "paypal",
    status: "success",
  },
  {
    id: "3",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    type: "transfer",
    status: "success",
  },
];

function useTransactions() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData(mockTransactions);
    }, 5000 * 0);
  }, []);

  return {
    isLoading,
    data,
    error: null,
  };
}

function Transactions() {
  const { data: transactions, isLoading, error } = useTransactions();
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

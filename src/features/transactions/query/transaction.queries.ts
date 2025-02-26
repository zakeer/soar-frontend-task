import { useQuery } from "@tanstack/react-query";
import { fetchRecentTransactions } from "@/api/dashboard/dashboard-apis";
import { Transaction } from "@/features/transactions/transaction.types";

export function useRecentTransactions() {
  return useQuery<Transaction[]>({
    queryKey: ["recent-transactions"],
    queryFn: ({ signal }) => fetchRecentTransactions({ signal }),
  });
}

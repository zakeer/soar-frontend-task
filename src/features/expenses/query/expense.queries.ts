import { useQuery } from "@tanstack/react-query";
import type { ExpenseStatistics } from "../expenses.types";
import { fetchExpenseStatistics } from "@/api/dashboard/dashboard-apis";

export function useExpenseStatistics() {
  return useQuery<ExpenseStatistics>({
    queryKey: ["expenseStatistics"],
    queryFn: ({ signal }) => fetchExpenseStatistics({ signal }),
  });
}

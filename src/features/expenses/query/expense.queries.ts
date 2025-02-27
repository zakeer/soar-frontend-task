import { useQuery } from "@tanstack/react-query";
import type { ExpenseStatistics } from "../expenses.types";

const mockExpenseData: ExpenseStatistics = {
  categories: [
    { name: "Entertainment", value: 30, color: "#343C6A" },
    { name: "Investment", value: 20, color: "#396AFF" },
    { name: "Others", value: 35, color: "#232323" },
    { name: "Bill Expense", value: 15, color: "#FC7900" },
  ],
  total: 100,
};

export function useExpenseStatistics() {
  return useQuery<ExpenseStatistics>({
    queryKey: ["expenseStatistics"],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return mockExpenseData;
    },
  });
}

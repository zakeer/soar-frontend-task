import { useQuery } from "@tanstack/react-query";
import type { BalanceData } from "../balance.types";

const mockBalanceData: BalanceData = {
  history: [
    { month: "Jul", value: 100 },
    { month: "Aug", value: 320 },
    { month: "Sep", value: 480 },
    { month: "Oct", value: 750 },
    { month: "Nov", value: 280 },
    { month: "Dec", value: 580 },
    { month: "Jan", value: 600 },
  ],
};

export function useBalanceHistory() {
  return useQuery<BalanceData>({
    queryKey: ["balanceHistory"],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return mockBalanceData;
    },
  });
}

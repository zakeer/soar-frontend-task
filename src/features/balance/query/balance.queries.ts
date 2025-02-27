import { useQuery } from "@tanstack/react-query";
import type { BalanceData } from "../balance.types";
import { fetchBalanceHistory } from "@/api/dashboard/dashboard-apis";

export function useBalanceHistory() {
  return useQuery<BalanceData>({
    queryKey: ["balanceHistory"],
    queryFn: ({ signal }) => fetchBalanceHistory({ signal }),
  });
}

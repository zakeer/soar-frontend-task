import { ApiUrl } from "@/api/api-url";
import { apiClient } from "@/api/http";
import { AxiosSignalType } from "@/api/types";
import { Card } from "@/features/cards/CreditCard";
import { Transaction } from "@/features/transactions/transaction.types";

export async function fetchUserCards({
  signal,
}: AxiosSignalType): Promise<Card[]> {
  const api = await apiClient.get(ApiUrl.DASHBOARD_USER_CARDS, { signal });
  return api.data;
}

export async function fetchRecentTransactions({
  signal,
}: AxiosSignalType): Promise<Transaction[]> {
  const api = await apiClient.get(ApiUrl.DASHBOARD_USER_RECENT_TRANSACTIONs, {
    signal,
  });
  return api.data;
}

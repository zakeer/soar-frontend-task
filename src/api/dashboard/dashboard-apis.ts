import { ApiUrl } from "@/api/api-url";
import { apiClient } from "@/api/http";
import { AxiosSignalType } from "@/api/types";
import { WeeklyActivityData } from "@/features/activity/activity.types";
import { BalanceData } from "@/features/balance/balance.types";
import { Card } from "@/features/cards/CreditCard";
import { ExpenseStatistics } from "@/features/expenses/expenses.types";
import { Transaction } from "@/features/transactions/transaction.types";
import { TransferData } from "@/features/transfer/transfer.types";

export async function fetchUserCards({
  signal,
}: AxiosSignalType): Promise<Card[]> {
  const api = await apiClient.get(ApiUrl.DASHBOARD_USER_CARDS, { signal });
  return api.data;
}

export async function fetchRecentTransactions({
  signal,
}: AxiosSignalType): Promise<Transaction[]> {
  const api = await apiClient.get(ApiUrl.DASHBOARD_USER_RECENT_TRANSACTIONS, {
    signal,
  });
  return api.data;
}

export async function fetchWeeklyActivities({
  signal,
}: AxiosSignalType): Promise<WeeklyActivityData> {
  const api = await apiClient.get(ApiUrl.DASHBOARD_USER_WEEKLY_ACTIVITY, {
    signal,
  });
  return api.data;
}

export async function fetchExpenseStatistics({
  signal,
}: AxiosSignalType): Promise<ExpenseStatistics> {
  const api = await apiClient.get(ApiUrl.DASHBOARD_USER_EXPENSE_STATISTICS, {
    signal,
  });
  return api.data;
}

export async function fetchQuickTransfer({
  signal,
}: AxiosSignalType): Promise<TransferData> {
  const api = await apiClient.get(ApiUrl.DASHBOARD_USER_QUICK_TRANSFER, {
    signal,
  });
  return api.data;
}

export async function fetchBalanceHistory({
  signal,
}: AxiosSignalType): Promise<BalanceData> {
  const api = await apiClient.get(ApiUrl.DASHBOARD_USER_BALANCE_HISTORY, {
    signal,
  });
  return api.data;
}

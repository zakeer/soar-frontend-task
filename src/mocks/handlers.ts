import { http as rest, HttpResponse } from "msw";
import {
  mockCards,
  mockTransactions,
  mockExpenseData,
  mockTransferData,
  mockBalanceData,
  mockWeeklyData,
} from "./mockData";
import { ApiUrl } from "@/api/api-url";

export const handlers = [
  rest.get(ApiUrl.DASHBOARD_USER_CARDS, () => {
    return HttpResponse.json(mockCards);
  }),

  rest.get(ApiUrl.DASHBOARD_USER_RECENT_TRANSACTIONS, () => {
    return HttpResponse.json(mockTransactions);
  }),

  rest.get(ApiUrl.DASHBOARD_USER_WEEKLY_ACTIVITY, () => {
    return HttpResponse.json(mockWeeklyData);
  }),

  rest.get(ApiUrl.DASHBOARD_USER_EXPENSE_STATISTICS, () => {
    return HttpResponse.json(mockExpenseData);
  }),

  rest.get(ApiUrl.DASHBOARD_USER_QUICK_TRANSFER, () => {
    return HttpResponse.json(mockTransferData);
  }),

  rest.get(ApiUrl.DASHBOARD_USER_BALANCE_HISTORY, () => {
    return HttpResponse.json(mockBalanceData);
  }),
];

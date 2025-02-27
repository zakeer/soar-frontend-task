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
import { TransferParams } from "@/features/transfer/query/transfer.queries";

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

  rest.post(ApiUrl.DASHBOARD_USER_QUICK_TRANSFER, async ({ request }) => {
    const { amount, recipient } = (await request.json()) as TransferParams;

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return HttpResponse.json(
      {
        message: `Successfully transferred $${amount} to recipient ${recipient}`,
      },
      { status: 200 }
    );
  }),
];

import { delay, http as rest } from "msw";
import { ApiUrl } from "@/api/api-url";
import {
  mockTransactions,
  mockWeeklyData,
  mockExpenseData,
  mockTransferData,
  mockBalanceData,
  mockCards,
} from "@/mocks/mockData";
import { TransferParams } from "@/features/transfer/query/transfer.queries";
import { createGetHandler, createJsonResponse } from "../mock.utils";

export const transactionHandlers = [
  createGetHandler(ApiUrl.DASHBOARD_USER_CARDS, mockCards),
  createGetHandler(ApiUrl.DASHBOARD_USER_RECENT_TRANSACTIONS, mockTransactions),
  createGetHandler(ApiUrl.DASHBOARD_USER_WEEKLY_ACTIVITY, mockWeeklyData),
  createGetHandler(ApiUrl.DASHBOARD_USER_EXPENSE_STATISTICS, mockExpenseData),
  createGetHandler(ApiUrl.DASHBOARD_USER_QUICK_TRANSFER, mockTransferData),
  createGetHandler(ApiUrl.DASHBOARD_USER_BALANCE_HISTORY, mockBalanceData),

  rest.post(ApiUrl.DASHBOARD_USER_QUICK_TRANSFER, async ({ request }) => {
    const { amount, recipient } = (await request.json()) as TransferParams;

    await delay();

    return createJsonResponse({
      message: `Successfully transferred $${amount} to recipient ${recipient}`,
    });
  }),
];

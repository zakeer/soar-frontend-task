import { useMutation, useQuery } from "@tanstack/react-query";
import type { TransferData } from "../transfer.types";
import { fetchQuickTransfer } from "@/api/dashboard/dashboard-apis";
import { apiClient } from "@/api/http";
import { ApiUrl } from "@/api/api-url";

export function useTransferContacts() {
  return useQuery<TransferData>({
    queryKey: ["transferContacts"],
    queryFn: ({ signal }) => fetchQuickTransfer({ signal }),
  });
}

export interface TransferParams {
  amount: number;
  recipientId: string;
  recipient: string;
}

export function useQuickTransferMutation() {
  return useMutation({
    mutationFn: ({ amount, recipientId }: TransferParams) => {
      return apiClient.post(ApiUrl.DASHBOARD_USER_QUICK_TRANSFER, {
        amount,
        recipientId,
      });
    },
  });
}

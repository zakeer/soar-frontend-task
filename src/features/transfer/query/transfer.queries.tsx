import { useQuery } from "@tanstack/react-query";
import type { TransferData } from "../transfer.types";
import { fetchQuickTransfer } from "@/api/dashboard/dashboard-apis";

export function useTransferContacts() {
  return useQuery<TransferData>({
    queryKey: ["transferContacts"],
    queryFn: ({ signal }) => fetchQuickTransfer({ signal }),
  });
}

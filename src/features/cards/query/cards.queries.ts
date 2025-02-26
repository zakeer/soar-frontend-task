import { useQuery } from "@tanstack/react-query";
import { Card } from "@/features/cards/CreditCard";
import { fetchUserCards } from "@/api/dashboard/dashboard-apis";

export function useCards() {
  return useQuery<Card[]>({
    queryKey: ["cards"],
    queryFn: ({ signal }) => fetchUserCards({ signal }),
  });
}

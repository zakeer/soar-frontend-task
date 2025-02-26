import { http as rest, HttpResponse } from "msw";
import { mockCards, mockTransactions } from "./mockData";
import { ApiUrl } from "@/api/api-url";

export const handlers = [
  rest.get(ApiUrl.DASHBOARD_USER_CARDS, () => {
    return HttpResponse.json(mockCards);
  }),

  rest.get(ApiUrl.DASHBOARD_USER_RECENT_TRANSACTIONs, () => {
    return HttpResponse.json(mockTransactions);
  }),
];

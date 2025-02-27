import { useQuery } from "@tanstack/react-query";
import type { WeeklyActivityData } from "../activity.types";
import { fetchWeeklyActivities } from "@/api/dashboard/dashboard-apis";

export function useWeeklyActivity() {
  return useQuery<WeeklyActivityData>({
    queryKey: ["weeklyActivity"],
    queryFn: ({ signal }) => fetchWeeklyActivities({ signal }),
  });
}

import { useQuery } from "@tanstack/react-query";
import type { WeeklyActivityData } from "../activity.types";

const mockWeeklyData: WeeklyActivityData = {
  activities: [
    { day: "Sat", deposit: 200, withdraw: 450 },
    { day: "Sun", deposit: 120, withdraw: 350 },
    { day: "Mon", deposit: 260, withdraw: 320 },
    { day: "Tue", deposit: 350, withdraw: 450 },
    { day: "Wed", deposit: 240, withdraw: 150 },
    { day: "Thu", deposit: 230, withdraw: 380 },
    { day: "Fri", deposit: 340, withdraw: 380 },
  ],
};

export function useWeeklyActivity() {
  return useQuery<WeeklyActivityData>({
    queryKey: ["weeklyActivity"],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return mockWeeklyData;
    },
  });
}

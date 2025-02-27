export interface DailyActivity {
  day: string;
  deposit: number;
  withdraw: number;
}

export interface WeeklyActivityData {
  activities: DailyActivity[];
}

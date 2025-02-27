export interface ExpenseCategory {
  name: string;
  value: number;
  color: string;
}

export interface ExpenseStatistics {
  categories: ExpenseCategory[];
  total: number;
}

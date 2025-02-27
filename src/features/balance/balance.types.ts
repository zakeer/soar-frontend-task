export interface BalanceHistory {
  month: string
  value: number
}

export interface BalanceData {
  history: BalanceHistory[]
}


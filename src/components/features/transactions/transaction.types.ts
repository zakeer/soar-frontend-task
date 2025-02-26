export type TransactionType = "card" | "paypal" | "transfer";
export type TransactionStatus = "success" | "error";

export interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
}

export interface TransactionIconProps {
  type: TransactionType;
  className?: string;
}

import { Card } from "@/features/cards/CreditCard";
import { Transaction } from "@/features/transactions/transaction.types";

export const mockCards: Card[] = [
  {
    id: "1",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
    type: "dark",
  },
  {
    id: "2",
    balance: 5706,
    cardHolder: "Eddy Cusuma 2",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
    type: "light",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: -800,
    type: "card",
    status: "error",
  },
  {
    id: "2",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    type: "paypal",
    status: "success",
  },
  {
    id: "3",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    type: "transfer",
    status: "success",
  },
];

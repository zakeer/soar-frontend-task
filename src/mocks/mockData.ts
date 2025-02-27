import { WeeklyActivityData } from "@/features/activity/activity.types";
import { BalanceData } from "@/features/balance/balance.types";
import { Card } from "@/features/cards/CreditCard";
import { ExpenseStatistics } from "@/features/expenses/expenses.types";
import { UserProfile } from "@/features/settings/setting.types";
import { Transaction } from "@/features/transactions/transaction.types";
import { TransferData } from "@/features/transfer/transfer.types";

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
    date: "28 January 2025",
    amount: -800,
    type: "card",
    status: "error",
  },
  {
    id: "2",
    title: "Deposit Paypal",
    date: "25 January 2025",
    amount: 2500,
    type: "paypal",
    status: "success",
  },
  {
    id: "3",
    title: "Jemi Wilson",
    date: "21 January 2025",
    amount: 5400,
    type: "transfer",
    status: "success",
  },
];

export const mockWeeklyData: WeeklyActivityData = {
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

export const mockExpenseData: ExpenseStatistics = {
  categories: [
    { name: "Entertainment", value: 30, color: "#343C6A" },
    { name: "Investment", value: 20, color: "#396AFF" },
    { name: "Others", value: 35, color: "#232323" },
    { name: "Bill Expense", value: 15, color: "#FC7900" },
  ],
  total: 100,
};

export const mockTransferData: TransferData = {
  contacts: [
    {
      id: "1",
      name: "Livia Bator",
      role: "CEO",
      image: "https://avatar.iran.liara.run/public?1",
    },
    {
      id: "2",
      name: "Randy Press",
      role: "Director",
      image: "https://avatar.iran.liara.run/public?2",
    },
    {
      id: "3",
      name: "Workman",
      role: "Designer",
      image: "https://avatar.iran.liara.run/public?3",
    },
  ],
};

export const mockBalanceData: BalanceData = {
  history: [
    { month: "Jul", value: 100 },
    { month: "Aug", value: 320 },
    { month: "Sep", value: 480 },
    { month: "Oct", value: 750 },
    { month: "Nov", value: 280 },
    { month: "Dec", value: 580 },
    { month: "Jan", value: 600 },
  ],
};

export const mockUserProfile: UserProfile = {
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "charlenereed@gmail.com",
  password: "**********", // masked for security
  dateOfBirth: "1990-01-25", // ISO format for proper date handling
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
  avatar:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hs1nz18t2zhrYoY6sHrJFzrvBHpt5e.png", // Using the provided image URL
};

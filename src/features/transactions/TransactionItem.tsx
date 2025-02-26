import { Typography } from "@/components/ui/typography";
import { Transaction } from "./transaction.types";
import { TransactionIcon } from "./TransactionIcon";
import { cn } from "@/lib/utils";
import { numberToCurreny } from "@/lib/currency.utils";

interface TransactionItemProps {
  transaction: Transaction;
  className?: string;
}

export function TransactionItem({
  transaction,
  className,
}: TransactionItemProps) {
  const { title, date, amount, type, status } = transaction;

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center gap-4">
        <TransactionIcon type={type} />
        <div>
          <Typography className="font-medium text-primary">{title}</Typography>
          <Typography
            variant="small"
            className="font-light text-accent-foreground/60"
          >
            {date}
          </Typography>
        </div>
      </div>
      <Typography
        className={cn(
          "font-medium",
          status === "success" ? "text-success" : "text-destructive"
        )}
      >
        {amount > 0 ? "+" : ""}
        {numberToCurreny(amount)}
      </Typography>
    </div>
  );
}

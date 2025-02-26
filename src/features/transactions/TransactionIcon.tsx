import { cn } from "@/lib/utils";
import PaypalIcon from "@/components/icons/Paypal";
import CardTransferIcon from "@/components/icons/CardTransfer";
import DollarTransferIcon from "@/components/icons/DollarTransfer";
import { TransactionIconProps } from "./transaction.types";

export function TransactionIcon({ type, className }: TransactionIconProps) {
  const iconMap = {
    card: {
      Icon: CardTransferIcon,
      background: "bg-[#FFF6E9]",
      iconColor: "text-[#FFAF2E]",
    },
    paypal: {
      Icon: PaypalIcon,
      background: "bg-[#EDF0FF]",
      iconColor: "text-[#396AFF]",
    },
    transfer: {
      Icon: DollarTransferIcon,
      background: "bg-[#E7F9F4]",
      iconColor: "text-[#38CAB5]",
    },
  };

  const { Icon, background, iconColor } = iconMap[type];

  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full",
        background,
        className
      )}
    >
      <Icon className={cn("", iconColor)} />
    </div>
  );
}

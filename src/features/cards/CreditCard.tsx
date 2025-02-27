import { cn } from "@/lib/utils";
import cardChip from "@icons/card-chip-dark.svg";
import cardChipDark from "@icons/card-chip.svg";

export type Card = {
  id: string;
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  type?: "dark" | "light";
};

type CreditCardProps = Card & {
  className?: string;
};

const ChipIcon = ({ type = "dark" }: { type: string }) => (
  <img
    className="w-12 h-10"
    src={type === "dark" ? cardChipDark : cardChip}
    alt="Chip"
  />
);

const getTextColor = (type: string) => 
  type === "dark" ? "text-gray-300" : "text-[#718ebf]";

const BalanceSection = ({
  balance,
  type,
}: {
  balance: number;
  type: string;
}) => (
  <div className="flex justify-between items-center">
    <div>
      <p className={cn("text-xs font-light", getTextColor(type))}>
        Balance
      </p>
      <p className="text-xl font-semibold tracking-wide">
        ${balance.toLocaleString()}
      </p>
    </div>
    <ChipIcon type={type} />
  </div>
);

const LabelValuePair = ({
  label,
  value,
  type,
}: {
  label: string;
  value: string;
  type: string;
}) => (
  <div className="flex-1">
    <p className={cn("text-xs font-light", getTextColor(type))}>
      {label}
    </p>
    <p className="font-medium">{value}</p>
  </div>
);

const CardHolderSection = ({
  cardHolder,
  type,
  validThru,
}: {
  cardHolder: string;
  type: string;
  validThru: string;
}) => (
  <div className="flex mt-6">
    <LabelValuePair label="CARD HOLDER" value={cardHolder} type={type} />
    <LabelValuePair label="VALID THRU" value={validThru} type={type} />
  </div>
);

const CardDetailsSection = ({
  cardNumber,
  type,
}: {
  cardNumber: string;
  type: string;
}) => {
  const background =
    type === "dark"
      ? "bg-gradient-to-b from-white/10 to-white/0"
      : "border-t border-primary/10";
  return (
    <div className={cn("tracking-wider p-6", background)}>
      <div className="flex items-end justify-between">
        <div className="text-xl tracking-wider">{cardNumber}</div>
      </div>
    </div>
  );
};

const Circle = ({ type }: { type: string }) => (
  <div
    className={cn(
      "h-8 w-8 rounded-full opacity-60",
      type === "dark" ? "bg-white" : "bg-[#343c6a]"
    )}
  />
);

const MasterCardLogo = ({ type }: { type: string }) => (
  <div className="absolute bottom-6 right-6">
    <div className="flex">
      <Circle type={type} />
      <div className="-ml-4">
        <Circle type={type} />
      </div>
    </div>
  </div>
);

export function CreditCard({
  balance,
  cardHolder,
  cardNumber,
  validThru,
  type = "light",
  className,
}: CreditCardProps) {
  const cardBackground =
    type === "dark"
      ? "bg-gradient-to-r from-[#5B5A6F] to-black text-white"
      : "bg-white text-[#343c6a]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl min-w-84 flex-1 max-w-sm border border-primary/10",
        cardBackground,
        className
      )}
    >
      <div className="p-4 md:p-6">
        <BalanceSection balance={balance} type={type} />
        <CardHolderSection
          cardHolder={cardHolder}
          type={type}
          validThru={validThru}
        />
      </div>

      <div className="relative">
        <CardDetailsSection cardNumber={cardNumber} type={type} />
        <MasterCardLogo type={type} />
      </div>
    </div>
  );
}
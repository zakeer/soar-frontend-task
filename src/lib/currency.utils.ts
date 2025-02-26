type NumberToCurrenyOptions = {
  currency: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export function numberToCurreny(
  amount: number = 0,
  options?: NumberToCurrenyOptions
) {
  const {
    currency = "USD",
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
  } = options || {};
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  });
}

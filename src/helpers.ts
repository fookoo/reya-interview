const formatNumber = (value: number | string): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
};

export function formatCurrency(amount: number, symbol = "$"): string {
  if (isNaN(amount)) {
    return "N/A";
  }

  const isNegative = amount < 0;

  return `${isNegative ? "- " : ""}${symbol}${formatNumber(Math.abs(amount).toFixed(2))}`;
}

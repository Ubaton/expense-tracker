/**
 * Format a currency amount for display.
 * @param amount - The amount to format.
 * @returns A formatted string representing the currency amount.
 */
export const formatCurrency = (amount: number): string => {
  // Customize the formatting based on your needs
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(amount);
};

/**
 * Calculate the progress percentage towards a goal.
 * @param currentAmount - The current amount achieved.
 * @param targetAmount - The target amount to achieve.
 * @returns The progress percentage as a number.
 */
export const calculateProgressPercentage = (
  currentAmount: number,
  targetAmount: number
): number => {
  if (targetAmount === 0) {
    return 0;
  }
  const progressPercentage = (currentAmount / targetAmount) * 100;
  return Math.min(progressPercentage, 100);
};

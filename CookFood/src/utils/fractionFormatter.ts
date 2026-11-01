/**
 * Fraction formatter for kitchen measurements.
 * Converts numeric quantities into readable fractions (e.g. 0.5 -> "½", 1.25 -> "1 ¼").
 */

interface FractionMap {
  value: number;
  symbol: string;
}

const COMMON_FRACTIONS: FractionMap[] = [
  { value: 1 / 8, symbol: '⅛' },
  { value: 1 / 6, symbol: '⅙' },
  { value: 1 / 5, symbol: '⅕' },
  { value: 1 / 4, symbol: '¼' },
  { value: 1 / 3, symbol: '⅓' },
  { value: 3 / 8, symbol: '⅜' },
  { value: 2 / 5, symbol: '⅖' },
  { value: 1 / 2, symbol: '½' },
  { value: 3 / 5, symbol: '⅗' },
  { value: 5 / 8, symbol: '⅝' },
  { value: 2 / 3, symbol: '⅔' },
  { value: 3 / 4, symbol: '¾' },
  { value: 4 / 5, symbol: '⅘' },
  { value: 5 / 6, symbol: '⅚' },
  { value: 7 / 8, symbol: '⅞' },
];

export function formatKitchenFraction(value: number | null | undefined): string {
  if (value === null || value === undefined || isNaN(value)) {
    return '';
  }

  if (value === 0) return '0';

  const tolerance = 0.035; // Generous kitchen tolerance
  const whole = Math.floor(value);
  const remainder = value - whole;

  // If very close to next whole number
  if (1 - remainder < tolerance) {
    return `${whole + 1}`;
  }

  // If very close to current whole number
  if (remainder < tolerance) {
    return whole > 0 ? `${whole}` : '0';
  }

  // Find matching fraction
  let bestFraction: FractionMap | null = null;
  let minDiff = tolerance;

  for (const f of COMMON_FRACTIONS) {
    const diff = Math.abs(remainder - f.value);
    if (diff < minDiff) {
      minDiff = diff;
      bestFraction = f;
    }
  }

  if (bestFraction) {
    if (whole > 0) {
      return `${whole} ${bestFraction.symbol}`;
    }
    return bestFraction.symbol;
  }

  // If no standard fraction matches, round reasonably
  const rounded = Math.round(value * 100) / 100;
  // If it ends in .0, return whole number
  if (rounded % 1 === 0) {
    return `${rounded}`;
  }
  return `${rounded}`;
}

export function formatDecimalOrFraction(value: number | null): string {
  if (value === null || value === undefined) return '';
  return formatKitchenFraction(value);
}

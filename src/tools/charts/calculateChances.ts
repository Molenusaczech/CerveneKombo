function formatNumber(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcPercentage(value: number, total: number): number {
  return (value / total) * 100;
}

function formatPercentage(value: number): string {
  return `${value.toPrecision(4)}%`;
}

function calcOneIn(value: number, total: number): number {
  return (1 / (value / total));
}

function formatOneIn(value: number): string {
  return `1 ku ${value.toPrecision(4)}`;
}

function formatChance(value: number, total: number): string {
  return `${formatPercentage(calcPercentage(value, total))} (${formatOneIn(calcOneIn(value, total))})`;
}

export {
  calcPercentage,
  formatPercentage,
  calcOneIn,
  formatOneIn,
  formatChance,
  formatNumber
};
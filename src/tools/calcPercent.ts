export default function calcPercent(value: number, sum: number) {
    return Math.round(100 * 100 * value / sum) / 100;
}
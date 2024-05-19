export default function betterSameWorse(
    chartData: [string, number | string][],
    cur: number,
) {
    const final: [string, number | string, number | string, number | string][] = [
        [chartData[0][0], 'Horší karty', 'Stejné', 'Lepší karty'],
    ]

    chartData = chartData.slice(1)

    chartData.forEach((curDelta) => {
        const count = curDelta[1];
        if (Number(cur) == Number(curDelta[0])) {
            final.push([curDelta[0], 0, count, 0])
        } else if (Number(cur) > Number(curDelta[0])) {
            final.push([curDelta[0], count, 0, 0])
        }
        else {
            final.push([curDelta[0], 0, 0, count])
        }
    });

    return final
}
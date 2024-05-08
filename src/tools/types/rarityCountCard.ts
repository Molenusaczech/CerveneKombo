import { islandChartData, typeChartData } from "@/types/chartData";
import deltas from "@/data/deltas";

type deltaVals = {
    [key: string]: number | string;
}

function rarityCardCounts(
    data: typeChartData
) {
    const final: [string, number | string][] = [
        ['Průměr', 'Karty'],
    ]

    deltas.forEach((delta) => {
        const count = data.rarities[delta]?.val || 0;
        final.push([delta, count as number])
    });

    return final
}

export default rarityCardCounts
;
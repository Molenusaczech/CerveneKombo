import { islandChartData } from "@/types/chartData";
import deltas from "@/data/deltas";

function rarityCounts(
    data: islandChartData
) {
    const final: [string, number | string, number | string][] = [
        ['Průměr', 'Hrdinové', 'Zbraně'],
    ]

    deltas.forEach((delta) => {
        final.push([delta, data.rarities.hero[delta], data.rarities.weapon[delta]])
    });

    return final
}

export default rarityCounts
;
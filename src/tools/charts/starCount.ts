import { islandChartData } from "@/types/chartData";

function starCounts(
    data: islandChartData
) {
    const final = [
        ['Hvězdy', 'Hrdinové', 'Zbraně'],
        ['1', data.stars.hero["1"], data.stars.weapon["1"]],
        ['2', data.stars.hero["2"], data.stars.weapon["2"]],
        ['3', data.stars.hero["3"], data.stars.weapon["3"]],
        ['4', data.stars.hero["4"], data.stars.weapon["4"]],
    ]

    return final
}

export default starCounts;
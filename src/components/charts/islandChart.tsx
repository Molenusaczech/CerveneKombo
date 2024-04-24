import { islandChartData } from "@/types/chartData"

import { Chart } from 'react-google-charts'

import starCounts from "@/tools/charts/starCount"
import StarTable from "./starTable"
import rarityCounts from "@/tools/charts/rarityCount"
import DeltaTable from "./deltaTable"
import TypeTable from "./typeTable"

export default function IslandChart(props: {
    data: islandChartData
}) {

    const data = props.data

    const cardTypeData = [
        ['Typ', 'Počet'],
        ['Hrdinové', data.heroes],
        ['Zbraně', data.weapons],
    ]

    const cardTypeOptions = {
        title: 'Typ karty',
        legend: 'none',
        pieSliceText: 'label',
    }

    const starData = starCounts(data)

    const starOptions = {
        title: 'Počet hvězd',
        isStacked: true,
        legendToggle: true,
    }

    const rarityData = rarityCounts(data);

    const rarityOptions = {
        title: 'Rarita',
        isStacked: true,
        legendToggle: true,
    }

    return (
        <div>
            <div className="grid grid-cols-2">
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={cardTypeData}
                options={cardTypeOptions}
            />

            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={starData}
                options={starOptions}
            />
            </div>

            <StarTable data={data} />

            <Chart
                chartType="ColumnChart"
                width="100%"
                height="800px"
                data={rarityData}
                options={rarityOptions}
            />

            <DeltaTable data={data} />

            Zelené pozadí = hraniční hodnoty, červené pozadí = odvozené hodnoty (pokud máte kartu s tímto průměrem, prosím kontaktujte mě), červený rámeček = hodnota není přesná (je odvozená pouze z jedné sousední hodnoty, také prosím pokud máte, kontaktujte mě)

            <TypeTable data={data} />
            
        </div>
    )
}
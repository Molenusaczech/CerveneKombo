import { chartData } from "@/types/chartData";
import Chart from "react-google-charts";

export default function IslandCountChart(props: {
    data: chartData
}) {

    const data = [
        ['Ostrov', 'Hrdinů', 'Zbraní'],
        ['BioTech', props.data.islands.BioTech.heroes, props.data.islands.BioTech.weapons],
        ['Canbalandia', props.data.islands.Canbalandia.heroes, props.data.islands.Canbalandia.weapons],
        ['Vampiria', props.data.islands.Vampiria.heroes, props.data.islands.Vampiria.weapons],
        ['Zepplandia', props.data.islands.Zepplandia.heroes, props.data.islands.Zepplandia.weapons],
        ['Spinbay', props.data.islands.Spinbay.heroes, props.data.islands.Spinbay.weapons],
        ['Middlemyst', props.data.islands.Middlemyst.heroes, props.data.islands.Middlemyst.weapons],
    ]

    const options = {
        title: 'Počet karet podle edic',
        isStacked: true,
    }

    return (
        <div>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    )
}
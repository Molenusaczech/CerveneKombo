import deltas from "@/data/deltas";
import { chartData, islandChartData } from "@/types/chartData";
import Chart from "react-google-charts";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function GlobalDeltaChart(props: {
    curIsland: islandChartData,
}) {

    const data = deltas.map((delta) => {
        return {
            name: delta,
            heroes: props.curIsland.rarities.hero[delta],
            weapons: props.curIsland.rarities.weapon[delta]
        }
    })

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="heroes" fill="#3366cc" name="Hrdinové" stackId={1}/>
                <Bar dataKey="weapons" fill="#dc3912" name="Zbraně" stackId={1}/>
            </BarChart>
        </ResponsiveContainer>
    )
}
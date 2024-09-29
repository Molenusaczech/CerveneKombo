import { chartData, islandChartData } from "@/types/chartData";
import Chart from "react-google-charts";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function StarChart(props: {
    curIsland: islandChartData,
}) {

    const data = [
        {
            name: "1*",
            heroes: props.curIsland.stars.hero[1],
            weapons: props.curIsland.stars.weapon[1]
        },
        {
            name: "2*",
            heroes: props.curIsland.stars.hero[2],
            weapons: props.curIsland.stars.weapon[2]
        },
        {
            name: "3*",
            heroes: props.curIsland.stars.hero[3],
            weapons: props.curIsland.stars.weapon[3]
        },
        {
            name: "4*",
            heroes: props.curIsland.stars.hero[4],
            weapons: props.curIsland.stars.weapon[4]
        }
    ]

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
                <Bar dataKey="heroes" fill="#3366cc" name="Hrdinové"/>
                <Bar dataKey="weapons" fill="#dc3912" name="Zbraně"/>
            </BarChart>
        </ResponsiveContainer>
    )
}
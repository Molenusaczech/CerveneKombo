import { chartData } from "@/types/chartData";
import Chart from "react-google-charts";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function IslandCountChart(props: {
    data: chartData
}) {

    const data = [
        /*['BioTech', props.data.islands.BioTech.heroes, props.data.islands.BioTech.weapons],
        ['Canbalandia', props.data.islands.Canbalandia.heroes, props.data.islands.Canbalandia.weapons],
        ['Vampiria', props.data.islands.Vampiria.heroes, props.data.islands.Vampiria.weapons],
        ['Zepplandia', props.data.islands.Zepplandia.heroes, props.data.islands.Zepplandia.weapons],
        ['Spinbay', props.data.islands.Spinbay.heroes, props.data.islands.Spinbay.weapons],
        ['Middlemyst', props.data.islands.Middlemyst.heroes, props.data.islands.Middlemyst.weapons],*/
        {
            name: "BioTech",
            heroes: props.data.islands.BioTech.heroes,
            weapons: props.data.islands.BioTech.weapons
        },
        {
            name: "Canbalandia",
            heroes: props.data.islands.Canbalandia.heroes,
            weapons: props.data.islands.Canbalandia.weapons
        },
        {
            name: "Vampiria",
            heroes: props.data.islands.Vampiria.heroes,
            weapons: props.data.islands.Vampiria.weapons
        },
        {
            name: "Zepplandia",
            heroes: props.data.islands.Zepplandia.heroes,
            weapons: props.data.islands.Zepplandia.weapons
        },
        {
            name: "Spinbay",
            heroes: props.data.islands.Spinbay.heroes,
            weapons: props.data.islands.Spinbay.weapons
        },
        {
            name: "Middlemyst",
            heroes: props.data.islands.Middlemyst.heroes,
            weapons: props.data.islands.Middlemyst.weapons
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
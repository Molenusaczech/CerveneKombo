"use client";
import deltas from "@/data/deltas";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import getTypeData from "@/tools/types/getTypeData";

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TypeDeltaGraph(props: {
    type: heroCid | weaponCid,
}) {

    const cid = props.type;

    
    let allTypeData = getTypeData(cid);

    if (!allTypeData) return <div>Chyba</div>;

    let { typeData, type, curStats, island, totalCards, typeStats } = allTypeData;

    const data = deltas.map((delta) => {
        return {
            name: delta,
            heroes: typeStats.rarities[delta]?.val,
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
            </BarChart>
        </ResponsiveContainer>
    )
}
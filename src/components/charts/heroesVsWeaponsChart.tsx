import { PieChart, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, Cell } from 'recharts';


function HeroVsWeaponChart(
    { heroes, weapons }: { heroes: number, weapons: number }
) {
    const data = [
        { name: "Hrdinové", cards: heroes },
        { name: "Zbraně", cards: weapons }
    ];

    const COLORS = ["#3366cc", "#dc3912"];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart
                width={500}
                height={300}
            >
                <Tooltip />
                <Pie data={data} dataKey="cards" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#3366cc">
                    {data.map((entry, index) => (
                        <Cell fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default HeroVsWeaponChart;
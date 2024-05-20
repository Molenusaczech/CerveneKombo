import betterSameWorse from "@/tools/types/betterSameWorse";
import { heroEffectStats, weaponEffectStats } from "@/types/cardStatsCounts";
import Chart from "react-google-charts";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Paper, Typography } from "@mui/material";

export default function BonusChart(props: {
    value: number | undefined,
    data: heroEffectStats | weaponEffectStats,
    title: string
}
) {
    "use client"

    if (!props.data.physical) {
        return <div></div>
    }

    if (!props.value) {
        return <div>Chyba - value nenalezena</div>
    }



    let value = props.value
    let data = props.data

    let final: [string, (number | string)][] = [
        ['Bonus', 'Hodnota'],
    ]

    Object.keys(data.physical).sort((a, b) => Number(a) - Number(b)).forEach((key) => {
        final.push([key, data.physical[key]])
    });

    return (
        <div>
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={betterSameWorse(final, value)}
                options={{
                    title: props.title,
                    isStacked: true,
                    colors: ['#22c55e', '#9ca3af', '#ef4444'],
                }}
            />
        </div>
    )

}
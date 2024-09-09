import betterSameWorse from "@/tools/types/betterSameWorse";
import { heroEffectStats, weaponEffectStats } from "@/types/cardStatsCounts";
import Chart from "react-google-charts";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Paper, Typography } from "@mui/material";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function BonusChart(props: {
    value: number | undefined,
    data: heroEffectStats | weaponEffectStats
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

    let finalStats = betterSameWorse(final, value);

    // remove the header
    finalStats.shift();

    const chartConfig = {} satisfies ChartConfig

    return (
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={finalStats}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="0"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="1"
              stackId="a"
              fill="#22c55e"
              radius={[4, 4, 0, 0]}
              name={"Karet"}
            />
          </BarChart>
        </ChartContainer>
    )

}
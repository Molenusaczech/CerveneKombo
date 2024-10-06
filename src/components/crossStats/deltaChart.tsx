import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import betterSameWorse from "@/tools/types/betterSameWorse";
import getTypeData from "@/tools/types/getTypeData";
import rarityCardCounts from "@/tools/types/rarityCountCard";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export function DeltaChart(props: {
    cid: heroCid | weaponCid,
    delta: number
}) {

    let typeData = getTypeData(props.cid);

    if (!typeData) {
        return (
            <div>Type not found</div>
        )
    }

    const chartData = betterSameWorse(rarityCardCounts(typeData.typeStats), props.delta);

    // remove header from chartdata
    chartData.shift();

    const chartConfig = {} satisfies ChartConfig

    return (
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
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
              name={"Horších"}
            />
            <Bar
              dataKey="2"
              stackId="a"
              fill="#9ca3af"
              radius={[4, 4, 0, 0]}
              name={"Stejných"}
            />
            <Bar
              dataKey="3"
              stackId="a"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
              name={"Lepších"}
            />
          </BarChart>
        </ChartContainer>
    )
}
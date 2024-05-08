import { formatChance } from "@/tools/charts/calculateChances";
import bonusCountsMerge from "@/tools/types/bonusCountsGraphData";
import bonusCountsSum from "@/tools/types/bonusCountsSum";
import { heroEffectStats, weaponEffectStats } from "@/types/cardStatsCounts";
import { islandChartData, typeChartData } from "@/types/chartData";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Chart from "react-google-charts";

export default function BonusStats(props: {
    data: (heroEffectStats | weaponEffectStats | {}),
    typeStats: typeChartData,
    islandStats: islandChartData,
    type: "hero" | "weapon",
    isDurability?: boolean
}) {

    const data = props.data;
    const typeStats = props.typeStats;
    const type = props.type;
    const islandStats = props.islandStats;
    const isDurability = props.isDurability;

    //console.log(islandStats)

    let bonusCountsChartData = bonusCountsMerge(data, type, isDurability);

    let bonusCountsChartOptions = {
        title: 'Počet výskytů hodnoty vybraného bonusu',
        isStacked: true,
        legendToggle: true,
    }

    //let bonusSum = bonusCountsSum(data, type);
    let bonusSum = bonusCountsSum(data as heroEffectStats | weaponEffectStats, type, isDurability);

    if (!data || Object.keys(data).length === 0) {
        return <div></div>
    }

    let cardCount = 0;
    Object.keys(bonusSum).forEach((value) => {
        cardCount += bonusSum[value];
    });

    let islandCards = null;

    if (type === "hero") {
        islandCards = islandStats.heroes;
    } else {
        islandCards = islandStats.weapons;
    }

    return (
        <div>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={bonusCountsChartData}
                options={bonusCountsChartOptions}
            />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow
                            key={"header"}
                        >
                            <TableCell key={"averageHeader"}>Hodnota bonusu</TableCell>
                            {Object.keys(bonusSum).map((value) => {
                                return (
                                    <TableCell align="right" key={value + "Header"}>{value}</TableCell>
                                )
                            })}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key="heroCount"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Počet karet na SWO
                            </TableCell>

                            {Object.keys(bonusSum).map((key: string, index: number) => {
                                const value = bonusSum[key];
                                return (
                                    <TableCell align="right" key={index}>{value}</TableCell>
                                )
                            })}


                        </TableRow>

                        <TableRow
                            key="heroChance"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Šance z tohoto druhu
                            </TableCell>
                            {Object.keys(bonusSum).map((key: string, index: number) => {
                                const value = bonusSum[key];
                                return (
                                    <TableCell align="right" key={index}>
                                        {formatChance(value, cardCount)}
                                    </TableCell>
                                )
                            })}
                        </TableRow>

                        <TableRow
                            key="totalHeroes"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Celkem karet (Přibližně)
                            </TableCell>
                            {Object.keys(bonusSum).map((key: string, index: number) => {
                                const value = bonusSum[key];
                                return (
                                    <TableCell align="right" key={index}>{Math.round((value / cardCount) * typeStats.count)}</TableCell>
                                )
                            })
                            }
                        </TableRow>

                        <TableRow
                            key="islandHeroes"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Šance na setření
                            </TableCell>
                            {Object.keys(bonusSum).map((key: string, index: number) => {
                                const value = bonusSum[key];
                                return (
                                    <TableCell align="right" key={index}>{formatChance(value, islandCards)}</TableCell>
                                )
                            })
                            }
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
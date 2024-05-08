import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";

import { islandChartData } from "@/types/chartData"
import DataTable from "react-data-table-component";

import { typeChartData } from "@/types/chartData";

import cardStats from "@/data/cardStats";
import calcPercent from "@/tools/calcPercent";
import { formatChance } from "@/tools/charts/calculateChances";

import deltas from "@/data/deltas";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from "next/link";
import Chart from "react-google-charts";
import rarityCardCounts from "@/tools/types/rarityCountCard";

export default function TypeCountStats(props: {
    data: typeChartData,
    total: number,
}) {


    const data = props.data;
    const total = props.total;

    const graphData = rarityCardCounts(data);

    return (
        <div>
            {/*<p>{JSON.stringify(data)}</p>
            <p>Šance na setření: {formatChance(data.count, data.type == "hero" ? heroes : weapons )}</p>
    */}

    <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={graphData}
    />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>
                            </TableCell>
                            {deltas.map((delta) => {
                                return (
                                    <TableCell align="right" width={70} key={delta + "typeChanceHeader"}>
                                        {delta}
                                    </TableCell>
                                )
                            })}

                        </TableRow>
                    </TableHead>
                    <TableBody>

                            <TableRow
                                key="typeChance"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Počet karet
                                </TableCell>
                                <TableCell></TableCell>
                                {deltas.map((delta) => {
                                    return (
                                        <TableCell align="right" key={delta + "typeChance"}>
                                            {data.rarities[delta]?.val || 0}                                        </TableCell>
                                    )
                                })}
                            </TableRow>

                        <TableRow
                            key="typeChance"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                % z počtu druhu
                            </TableCell>
                            <TableCell></TableCell>
                            {deltas.map((delta) => {
                                return (
                                    <TableCell align="right" key={delta + "typeChance"}>
                                        {formatChance(data.rarities[delta]?.val || 0, data.count)}
                                    </TableCell>
                                )
                            })}
                        </TableRow>

                        <TableRow
                            key="typeChance"
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Šance na setření
                            </TableCell>
                            <TableCell></TableCell>
                            {deltas.map((delta) => {
                                return (
                                    <TableCell align="right" key={delta + "typeChanceGlobal"}>
                                        {formatChance(data.rarities[delta]?.val ?? 0, total)}
                                    </TableCell>
                                )
                            })}
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )

}
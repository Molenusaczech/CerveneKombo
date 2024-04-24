import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { islandChartData } from "@/types/chartData"

import { formatChance, formatNumber } from "@/tools/charts/calculateChances";

import deltas from '@/data/deltas';

export default function DeltaTable(props: {
    data: islandChartData
}) {
    const data = props.data;
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow
                        key={"header"}
                    >
                        <TableCell key={"averageHeader"}>Průměr</TableCell>
                        {deltas.map((delta) => {
                            return (
                                <TableCell align="right" key={delta + "Header"}>{delta}</TableCell>
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
                            Počet hrdinů
                        </TableCell>

                        {deltas.map((delta) => {
                            return (
                                <TableCell align="right" key={delta + "HeroCount"}>{formatNumber(data.rarities.hero[delta])}</TableCell>
                            )
                        })}
                    </TableRow>

                    <TableRow
                        key="heroChance"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            Šance na setření hrdiny
                        </TableCell>
                        {deltas.map((delta) => {
                            return (
                                <TableCell align="right" key={delta + "heroChance"}>
                                    {formatChance(data.rarities.hero[delta], data.heroes)}
                                </TableCell>
                            )
                        })}
                    </TableRow>

                    <TableRow
                        key="weaponCount"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            Počet zbraní
                        </TableCell>
                        {deltas.map((delta) => {
                            return (
                                <TableCell align="right" key={delta + "weaponCount"}>
                                    {formatNumber(data.rarities.weapon[delta])}
                                </TableCell>
                            )
                        })}
                    </TableRow>

                    <TableRow
                        key="weaponChance"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            Šance na setření zbraně
                        </TableCell>
                        {deltas.map((delta) => {
                            return (
                                <TableCell align="right" key={delta + "weaponChance"}>
                                    {formatChance(data.rarities.weapon[delta], data.weapons)}
                                </TableCell>
                            )
                        })}
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}
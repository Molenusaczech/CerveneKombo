import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { islandChartData } from "@/types/chartData"

import { formatChance, formatNumber } from "@/tools/charts/calculateChances";


export default function StarTable(props: {
    data: islandChartData
}) {
    const data = props.data;
    return (
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Počet Hvězd</TableCell>
                            <TableCell align="right">1*</TableCell>
                            <TableCell align="right">2*</TableCell>
                            <TableCell align="right">3*</TableCell>
                            <TableCell align="right">4*</TableCell>
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
                                <TableCell align="right">{formatNumber(data.stars.hero["1"])}</TableCell>
                                <TableCell align="right">{formatNumber(data.stars.hero["2"])}</TableCell>
                                <TableCell align="right">{formatNumber(data.stars.hero["3"])}</TableCell>
                                <TableCell align="right">{formatNumber(data.stars.hero["4"])}</TableCell>
                            </TableRow>

                            <TableRow
                                key="heroChance"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Šance na setření hrdiny
                                </TableCell>
                                <TableCell align="right">
                                    {formatChance(data.stars.hero["1"], data.heroes)}
                                </TableCell>
                                <TableCell align="right">
                                    {formatChance(data.stars.hero["2"], data.heroes)}
                                </TableCell>
                                <TableCell align="right">
                                    {formatChance(data.stars.hero["3"], data.heroes)}
                                </TableCell>
                                <TableCell align="right">
                                    {formatChance(data.stars.hero["4"], data.heroes)}
                                </TableCell>
                            </TableRow>

                            <TableRow
                                key="weaponCount"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Počet zbraní
                                </TableCell>
                                <TableCell align="right">{formatNumber(data.stars.weapon["1"])}</TableCell>
                                <TableCell align="right">{formatNumber(data.stars.weapon["2"])}</TableCell>
                                <TableCell align="right">{formatNumber(data.stars.weapon["3"])}</TableCell>
                                <TableCell align="right">{formatNumber(data.stars.weapon["4"])}</TableCell>
                            </TableRow>

                            <TableRow
                                key="weaponChance"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Šance na setření zbraně
                                </TableCell>
                                <TableCell align="right">
                                    {formatChance(data.stars.weapon["1"], data.weapons)}
                                </TableCell>
                                <TableCell align="right">
                                    {formatChance(data.stars.weapon["2"], data.weapons)}
                                </TableCell>
                                <TableCell align="right">
                                    {formatChance(data.stars.weapon["3"], data.weapons)}
                                </TableCell>
                                <TableCell align="right">
                                    {formatChance(data.stars.weapon["4"], data.weapons)}
                                </TableCell>
                            </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
    )
}
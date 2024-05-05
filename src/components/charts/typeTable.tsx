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

function Expanded(props: {
    data: any,
    totalHeroes: number,
    totalWeapons: number,
    isGlobal?: boolean
}) {

    const data = props.data.data;
    const heroes = props.totalHeroes;
    const weapons = props.totalWeapons;
    const isGlobal = props.isGlobal;
    return (
        <div>
            {/*<p>{JSON.stringify(data)}</p>
            <p>Šance na setření: {formatChance(data.count, data.type == "hero" ? heroes : weapons )}</p>
    */}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{isGlobal ? "Podíl z karet" : "Šance na druh"}</TableCell>
                            <TableCell>
                                {formatChance(data.count, data.type == "hero" ? heroes : weapons)}
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
                                % z počtu druhu
                            </TableCell>
                            <TableCell></TableCell>
                            {deltas.map((delta) => {
                                return (
                                    <TableCell align="right" key={delta + "typeChance"}>
                                        {formatChance(data.rarities[delta]?.val, data.count)}
                                    </TableCell>
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
                                    <TableCell align="right" key={delta + "typeChanceGlobal"}>
                                        {formatChance(data.rarities[delta]?.val, data.type == "hero" ? heroes : weapons)}
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

export default function TypeTable(props: {
    data: islandChartData
}) {

    const data = props.data;
    const heroCount = data.heroes;
    const weaponCount = data.weapons;

    const columns: any = [
        {
            name: 'Jméno',
            selector: (row: typeChartData) => row.name,
            sortable: true,
            wrap: true,
            cell: (row: any) => {
                return (
                    <Link href={`/type/${row.cid}`} passHref target="_blank">
                        <div>
                            {row.name}
                        </div>
                    </Link>
                )
            }
        },
        {
            name: 'Počet',
            selector: (row: typeChartData) => row.count,
            sortable: true,
            wrap: true,
        },
        /*{
            name: 'Šance na setření',
            selector: (row: typeChartData) => {
                if (row.type === "hero") {
                    return formatChance(row.count, data.heroes);
                } else {
                    return formatChance(row.count, data.weapons);
                }
            },
            sortable: true,
        },*/
        ...deltas.map((delta) => {
            return {
                name: delta,
                selector: (row: typeChartData) => row.rarities[delta]?.val || "-",
                sortable: true,
                width: "80px",
                conditionalCellStyles: [
                    {
                        when: (row: typeChartData) => row.rarities[delta]?.isLimit,
                        style: {
                            backgroundColor: 'rgba(0, 255, 0, 0.3)',
                        },
                    },
                    {
                        when: (row: typeChartData) => row.rarities[delta]?.isDerived && row.rarities[delta]?.val !== 0,
                        style: {
                            backgroundColor: 'rgba(255, 0, 0, 0.3)',
                        },
                    },
                    {
                        when: (row: typeChartData) => !row.rarities[delta]?.isExact,
                        style: {
                            border: '1px solid rgba(255, 0, 0, 1)',
                        },
                    },
                ],
            }
        }),
    ];

    let tableData: typeChartData[] = Object.values(cardStats.types)
    let isGlobal = true;
    if (data.name !== "Global") {
        isGlobal = false;
        tableData = Object.values(cardStats.types).filter((card) => card.origin === data.name);
    }

    return (
        <div>
            <DataTable
                columns={columns}
                data={tableData}
                expandableRowsComponent={(data) => <Expanded
                    data={data}
                    totalHeroes={heroCount}
                    totalWeapons={weaponCount}
                    isGlobal={isGlobal}
                />}
                style={{
                    overflow: "scroll"
                }}
            />
        </div>
    )
}
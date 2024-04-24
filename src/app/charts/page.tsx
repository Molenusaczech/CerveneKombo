"use client";
import { Chart } from "react-google-charts";
import cardStats from "@/data/cardStats";
import IslandChart from "@/components/charts/islandChart";
import { Button } from "@mui/material";

import Link from "next/link";
import IslandCountChart from "@/components/charts/islandCountChart";

export default function Page() {
    return (

        <div>


            <h1>Celkové statistiky</h1>
            DISCLAIMER: Tyto statistiky jsou založeny na základě dat získaných z API od NG. Jsou pouze orientační a nemusí být přesná. Nenesu žádnou zodpovědnost za tyhle statistiky.

            <IslandCountChart data={cardStats} />
            <div className="grid grid-cols-3">

                <div></div>
                <div className="p-2 align-middle text-center">
                    Jednotlivé ostrovy
                </div>
                <div></div>

                <Link href={"/charts/biotech"} className="p-2">
                    <Button variant="outlined" style={{
                        width: "100%"
                    }}>BioTech</Button>
                </Link>

                <Link href={"/charts/canbalandia"} className="p-2">
                    <Button variant="outlined" style={{
                        width: "100%"
                    }}>Canbalandie</Button>
                </Link>

                <Link href={"/charts/vampiria"} className="p-2">
                    <Button variant="outlined" style={{
                        width: "100%"
                    }}>Vampiria</Button>
                </Link>

                <Link href={"/charts/zepplandia"} className="p-2">
                    <Button variant="outlined" style={{
                        width: "100%"
                    }}>Zepplandia</Button>
                </Link>

                <Link href={"/charts/spinbay"} className="p-2">
                    <Button variant="outlined" style={{
                        width: "100%"
                    }}>Spinbay</Button>
                </Link>

                <Link href={"/charts/middlemyst"} className="p-2">
                    <Button variant="outlined" style={{
                        width: "100%"
                    }}>Middlemyst</Button>
                </Link>
            </div>

            <br></br>
            <IslandChart data={cardStats.globals} />

        </div>
    )
}
"use client";
import { Chart } from "react-google-charts";
import cardStats from "@/data/cardStats";
import IslandChart from "@/components/charts/islandChart";

export default function Page() {
    return (
        <div>
            <h1>Vampiria statistiky</h1>
            DISCLAIMER: Tyto statistiky jsou založeny na základě dat získaných z API od NG. Jsou pouze orientační a nemusí být přesná. Nenesu žádnou zodpovědnost za tyhle statistiky.
            <IslandChart data={cardStats.islands.Vampiria} />
        </div>
    )
}
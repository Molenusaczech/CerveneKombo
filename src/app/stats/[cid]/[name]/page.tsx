"use client";

import Card from "@/components/card";
import CrossStats from "@/components/crossStats/crossStats";
import CardStats from "@/components/stats";
import Unique from "@/components/unique";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import { statsDescription } from "@/tools/metadata/embedDescription";
import { getCardStats } from "@/tools/getCardStats";
import getTypeData from "@/tools/types/getTypeData";
import type { Metadata } from "next";
import statsMetadada from "@/tools/metadata/statsMetadata";
import statsNotFoundMetadata from "@/tools/metadata/statsNotFoundMetadata";
import { CardData } from "@/components/component/card-data";
import { useEffect, useState } from "react";
import { cardStats } from "@/types/cardStats";

/*export async function generateMetadata(
    { params }: { params: { cid: string, name: string } }
): Promise<Metadata> {

    const cid = decodeURIComponent(params.cid) as heroCid | weaponCid

    const name = decodeURIComponent(params.name)

    const data = await getCardStats(cid, decodeURIComponent(name))

    if (data == null) return statsNotFoundMetadata(name, cid)

    return statsMetadada(data)
}*/

export default function Stats({ params }: { params: { cid: string, name: string } }) {
    "use client";
    // create state

    const [curCardStats, setCurCardStats] = useState<cardStats | null>(null)
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        getCardStats(params.cid, params.name).then((resp) => {
            console.log(resp);
            setCurCardStats(resp);
        })
    }, [])

    return (
        <div>

            <CardData data={curCardStats} scan={null} />

            <div>
                {JSON.stringify(curCardStats)}
            </div>

        </div>
    )

}

"use client";

import { getCardStats } from "@/tools/getCardStats";
import getTypeData from "@/tools/types/getTypeData";
import type { Metadata } from "next";
import statsMetadada from "@/tools/metadata/statsMetadata";
import statsNotFoundMetadata from "@/tools/metadata/statsNotFoundMetadata";
import { CardData } from "@/components/component/card-data";
import { useEffect, useState } from "react";
import { cardStats } from "@/types/cardStats";
import LookupFAB from "@/components/lookup/lookupFAB";
import LookupError from "./lookupError";

export default function Stats({ params }: { params: { cid: string, name: string } }) {
    "use client";
    // create state

    const [curCardStats, setCurCardStats] = useState<cardStats | null>(null)
    const [isError, setIsError] = useState<boolean>(false);

    const name = decodeURIComponent(params.name)

    useEffect(() => {
        getCardStats(params.cid, name).then((resp) => {

            if (!resp) {
                setIsError(true);
            }

            console.log(resp);
            setCurCardStats(resp);
        })
    }, [])

    return (
        <div>
            
            <LookupFAB />
            {!isError && <CardData data={curCardStats} scan={null} />}

            {isError && <LookupError searchType="stats" cid={params.cid} name={name} />}
        </div>
    )

}

"use server";

import { getCardStats } from "@/tools/getCardStats";
import getTypeData from "@/tools/types/getTypeData";
import type { Metadata } from "next";
import statsMetadada from "@/tools/metadata/statsMetadata";
import statsNotFoundMetadata from "@/tools/metadata/statsNotFoundMetadata";
import { CardData } from "@/components/component/card-data";
import { useEffect, useState } from "react";
import { cardStats } from "@/types/cardStats";
import LookupFAB from "@/components/lookup/lookupFAB";
import StatsLookup from "@/components/lookup/statsLookup";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";

export async function generateMetadata(
    { params }: { params: { cid: string, name: string } }
): Promise<Metadata> {

    const cid = decodeURIComponent(params.cid) as heroCid | weaponCid

    const name = decodeURIComponent(params.name)

    const data = await getCardStats(cid, decodeURIComponent(name))

    if (data == null) return statsNotFoundMetadata(name, cid)

    return statsMetadada(data)
}

export default async function Stats({ params }: { params: { cid: string, name: string } }) {
    
    return (
        <StatsLookup params={params} />
    )

}

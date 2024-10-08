"use client";
import { getCardByUid } from "@/tools/getCardByUid";
import { getCardStats } from "@/tools/getCardStats";
import { Metadata } from "next";
import statsNotFoundMetadata from "@/tools/metadata/statsNotFoundMetadata";
import statsMetadada from "@/tools/metadata/statsMetadata";
import { cardStats } from "@/types/cardStats";
import { useEffect, useState } from "react";
import { heroFromUid } from "@/types/heroFromUid";
import { weaponFromUid } from "@/types/weaponFromUid";
import { CardData } from "@/components/component/card-data";
import LookupFAB from "@/components/lookup/lookupFAB";
import LookupError from "./lookupError";

export default function UidLookup({ params }: { params: { uid: string } }) {
  "use client";
  // create state

  const [curScan, setCurScan] = useState<heroFromUid | weaponFromUid | null>(null)
  const [curCardStats, setCurCardStats] = useState<cardStats | null>(null)
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {

    getCardByUid(params.uid).then((uidResp) => {

      if (!uidResp) {
        setIsError(true);
        return;
      }

        setCurScan(uidResp)
        getCardStats(uidResp?.card.cid, uidResp?.card.name).then((resp) => {
          console.log(resp);
          setCurCardStats(resp);
        })
      
    })
  }, [params.uid])

  return (
    <div>

      <LookupFAB />
      {!isError && <CardData data={curCardStats} scan={curScan} />}
      {isError && <LookupError
        searchType="uid"
        uid={params.uid}
      />}
    </div>
  )

}

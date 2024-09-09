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

/*export async function generateMetadata(
  { params }: { params: { uid: string } }
): Promise<Metadata> {

  const uidData = await getCardByUid(params.uid)

  if (!uidData) return {
    title: "Červené kombo - Karta nenalezena",
    description: "Karta podle QR kódu nenalezena",
    openGraph: {
      title: "Karta nenalezena",
      description: "Karta podle QR kódu nenalezena",
      url: "https://cervenekombo.vercel.app/scan/" + params.uid,
      siteName: "Červené kombo",
      locale: "cs_CZ",
      type: "website"
    }
  };

  const stats = await getCardStats(uidData.card.cid, uidData.card.name)

  if (!stats) return statsNotFoundMetadata(uidData.card.name, uidData.card.cid)

  return statsMetadada(stats)

}*/

export default function Scan({ params }: { params: { uid: string } }) {
  "use client";
  // create state

  const [curScan, setCurScan] = useState<heroFromUid | weaponFromUid | null>(null)
  const [curCardStats, setCurCardStats] = useState<cardStats | null>(null)
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {

    getCardByUid(params.uid).then((uidResp) => {

      if (uidResp) {

        setCurScan(uidResp)
        getCardStats(uidResp?.card.cid, uidResp?.card.name).then((resp) => {
          console.log(resp);
          setCurCardStats(resp);
        })
      }
    })
  }, [])

  return (
    <div>

      <CardData data={curCardStats} scan={curScan} />

    </div>
  )

}

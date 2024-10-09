"use server";

import { getCardByUid } from "@/tools/getCardByUid";
import { getCardStats } from "@/tools/getCardStats";
import { Metadata } from "next";
import statsNotFoundMetadata from "@/tools/metadata/statsNotFoundMetadata";
import statsMetadada from "@/tools/metadata/statsMetadata";
import UidLookup from "@/components/lookup/uidLookup";

export async function generateMetadata(
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

}

export default async function Scan({ params }: { params: { uid: string } }) {

  return (
    <UidLookup params={params} />
  )

}


import { getCardByUid } from "@/tools/getCardByUid";


import UidLookup from "@/components/uidLookup";
import { getCardStats } from "@/tools/getCardStats";
import { Metadata } from "next";
import statsNotFoundMetadata from "@/tools/metadata/statsNotFoundMetadata";
import statsMetadada from "@/tools/metadata/statsMetadata";

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
  "use server";
  // create state

  const data = await getCardByUid(params.uid)


  if (!data) return (<div> Error - karta podle QR kódu nenalezena </div>)

  const stats = await getCardStats(data.card.cid, data.card.name)

  //if (!stats) return (<div> Error </div>)

  return (
    <div>
      <UidLookup data={data} stats={stats} />

      {/*JSON.stringify(data)*/}

    </div>
  )
}

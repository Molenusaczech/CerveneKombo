
import { getCardByUid } from "@/tools/getCardByUid";


import UidLookup from "@/components/uidLookup";
import { getCardStats } from "@/tools/getCardStats";


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

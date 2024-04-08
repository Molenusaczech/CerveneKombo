
import { getCardByUid } from "@/tools/getCardByUid";


import UidLookup from "@/components/uidLookup";

export default async function Scan({ params }: { params: { uid: string } }) {
  "use server";
  // create state

  const data = await getCardByUid(params.uid)

  if (!data) return (<div> Error </div>)

  return (
    <div>
      <UidLookup data={data} />

      {/*JSON.stringify(data)*/}

    </div>
  )
}

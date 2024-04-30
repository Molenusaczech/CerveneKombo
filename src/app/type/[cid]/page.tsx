import TypeInfo from "@/components/type/typeInfo";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";

export default async function Scan({ params }: { params: { cid: heroCid | weaponCid } }) {
  return (
    <div>
      
      <TypeInfo cid={params.cid} />

      {/*JSON.stringify(data)*/}

    </div>
  )
}

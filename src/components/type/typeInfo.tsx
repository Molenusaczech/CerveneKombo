import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";

export default function TypeInfo(props: { cid: heroCid | weaponCid }) {
  return (
    <div>
      Typ: {props.cid}
    </div>
  )
}
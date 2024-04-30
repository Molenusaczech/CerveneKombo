import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import EffectImg from "../effectImg";

export default function TypeInfo(props: { cid: heroCid | weaponCid }) {
  return (
    <div>
      Typ: {props.cid}
      <EffectImg effect="all" color="go" />
      <EffectImg effect="combo" color="opt" />
      <EffectImg effect="combo-trigger" color="stop" />
    </div>
  )
}
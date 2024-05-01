import { heroCid, heroTypeData } from "@/data/heroTypeData";
import { weaponCid, weaponTypeData } from "@/data/weaponTypeData";
import EffectImg from "../effectImg";

const heroData = heroTypeData;
const weaponData = weaponTypeData;

export default function TypeInfo(props: { cid: heroCid | weaponCid }) {
    return (
        <div>
            <h1>{props.cid} - Statistiky</h1>
            <EffectImg effect="all" color="go" />
            <EffectImg effect="combo" color="opt" />
            <EffectImg effect="combo-trigger" color="stop" />
            <EffectImg effect="block" />
        </div>
    )
}
import { replayWeapon } from "@/types/replay/replayState"
import Card from "../card"
import EffectImg from "../images/effectImg";
import effectMap from "@/data/swo/effectMap";
import colorMap from "@/data/swo/colorMap";

export default function ReplayWeapon(
    props: {
        weapon: replayWeapon,
        isSelected: boolean
    }
) {
    const weapon = props.weapon;
    const isSelected = props.isSelected ? "Selected" : "Not selected";
    return (
        <div>
            <Card data={weapon.card} height={200} />
            <div>{weapon.broken}</div>
            <div>{isSelected}</div>
            <div>{weapon.cost}</div>
            <div>
                {weapon.stashedEffect !== null && weapon.stashedEffect.color &&<><EffectImg
                    effect={effectMap[weapon.stashedEffect.type]}
                    color={weapon.stashedEffect !== null ? colorMap[weapon.stashedEffect.color] : "none"}
                /> {weapon.stashedEffect.value} ({weapon.stashedEffect.durability}) </>}
            </div>
        </div>
    )
}
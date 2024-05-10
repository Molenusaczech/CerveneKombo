import { replayWeapon } from "@/types/replay/replayState"
import Card from "../card"

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
            <div>{JSON.stringify(weapon.stashedEffect)}</div>
        </div>
    )
}
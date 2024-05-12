import { replayPlayer, replayState } from "@/types/replay/replayState"
import Card from "../card"
import ReplayWeapon from "./replayWeapon"
import ProgressBar from "@ramonak/react-progress-bar"

export default function ReplayPlayer(
    props: {
        player: replayPlayer
        isOnTurn: boolean
        weaponIndex: number
        isHeroTarget: boolean
        weaponTarget: (number | null)
    }
) {

    const player = props.player;
    const isOnTurn = props.isOnTurn;

    let weaponTarget = -1;

    if (props.isHeroTarget) {
        weaponTarget = props.weaponTarget ?? -1;
        weaponTarget--;
    }

    return (
        <div>
            {/*JSON.stringify(props.player)*/}
            <div className="grid grid-cols-5">
                {player.weapons.map((weapon, index) => {
                    return (
                        <ReplayWeapon
                            weapon={weapon}
                            key={index}
                            isSelected={isOnTurn && index === props.weaponIndex}
                            isOnTurn={isOnTurn}
                            isTarget={index === weaponTarget}
                        />
                    )
                })}

            </div>
        </div>
    )
}

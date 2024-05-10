import { replayPlayer, replayState } from "@/types/replay/replayState"
import Card from "../card"
import ReplayWeapon from "./replayWeapon"

export default function ReplayPlayer(
    props: {
        player: replayPlayer
        isOnTurn: boolean
        weaponIndex: number
    }
) {

    const player = props.player;
    const isOnTurn = props.isOnTurn;

    return (
        <div>
            {/*JSON.stringify(props.player)*/}
            <div className="grid grid-cols-6">
                <Card data={player.hero} height={200} />

                {player.weapons.map((weapon, index) => {
                    return (
                        <ReplayWeapon 
                        weapon={weapon} 
                        key={index} 
                        isSelected={isOnTurn && index === props.weaponIndex}
                        />
                    )
                })}

            </div>
            <div>
                <div>HP: {player.hp}/{player.max_hp}</div>
                <div>Akce: {player.actions}/4</div>
                <div>Energie: {player.energy}/12</div>
                <div>{props.isOnTurn ? "Na tahu" : "Není na tahu"}</div>
            </div>
        </div>
    )
}

import { replayState } from "@/types/replay/replayState"
import ReplayPlayer from "./replayPlayer";
import Card from "../card";

export default function ReplayState(props: {
    state: replayState
}) {

    const state = props.state;

    return (
        <div>
            {/*JSON.stringify(state)*/}

            {state.players.map((player, index) => {
                return (
                    <div key={index}>
                        <ReplayPlayer
                            player={player}
                            isOnTurn={state.playerTurn === index}
                            weaponIndex={state.selectedWeaponIndex}
                        />
                    </div>
                )
            })}

            <div>
                Selected weapon: <Card data={state.players[state.playerTurn].weapons[state.selectedWeaponIndex].card} height={200} />
            </div>
            <div>
                Effect rolled: {JSON.stringify(state.rolledEffect)}
            </div>
        </div>
    )
}
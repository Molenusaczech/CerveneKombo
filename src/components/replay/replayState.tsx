import { replayState } from "@/types/replay/replayState"
import ReplayPlayer from "./replayPlayer";
import Card from "../card";
import EffectImg from "../images/effectImg";
import colorMap from "@/data/swo/colorMap";
import effectMap from "@/data/swo/effectMap";

export default function ReplayState(props: {
    state: replayState
}) {

    const state = props.state;

    return (
        <div>
            {/*JSON.stringify(state)*/}

            {/*state.players.map((player, index) => {
                return (
                    <div key={index}>
                        <ReplayPlayer
                            player={player}
                            isOnTurn={state.playerTurn === index}
                            weaponIndex={state.selectedWeaponIndex}
                        />
                    </div>
                )
            })*/}

            <ReplayPlayer
                player={state.players[0]}
                isOnTurn={state.playerTurn === 0}
                weaponIndex={state.selectedWeaponIndex}
            />

            <div className="grid grid-cols-4">
                <div></div>
                <div>
                    <Card data={state.players[state.playerTurn].weapons[state.selectedWeaponIndex].card} height={200} />
                </div>
                <div>
                    {state.rolledEffect !== null && <>
                    {state.rolledEffect.value} {state.rolledEffect.durability !== null && <>({state.rolledEffect.durability})</>}
                    <EffectImg 
                        effect={effectMap[state.rolledEffect.type]}
                        color={state.rolledEffect.color !== null ? colorMap[state.rolledEffect.color] : "none"}
                    />
                    </>}
                </div>
            </div>

            <ReplayPlayer
                player={state.players[1]}
                isOnTurn={state.playerTurn === 1}
                weaponIndex={state.selectedWeaponIndex}
            />
        </div>
    )
}
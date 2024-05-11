import { replayState, replayWeapon } from "@/types/replay/replayState"
import ReplayPlayer from "./replayPlayer";
import Card from "../card";
import EffectImg from "../images/effectImg";
import colorMap from "@/data/swo/colorMap";
import effectMap from "@/data/swo/effectMap";
import ReplayHero from "./replayHero";
import ReplayWeapon from "./replayWeapon";

export default function ReplayState(props: {
    state: replayState
}) {

    const state = props.state;

    let selectedWeapon: replayWeapon = {
        ...state.players[state.playerTurn].weapons[state.players[state.playerTurn].selectedWeaponIndex]
    }

    if (state.rolledEffect !== null) selectedWeapon.stashedEffect = {
        value: state.rolledEffect.value,
        durability: state.rolledEffect.durability,
        type: state.rolledEffect.type,
        color: state.rolledEffect.color,
    };

    return (
        <>
            <div className="grid">
                <div>
                    <ReplayPlayer
                        player={state.players[0]}
                        isOnTurn={state.playerTurn === 0}
                        weaponIndex={state.players[state.playerTurn].selectedWeaponIndex}
                    />
                </div>

                <div>

                    <div className="grid grid-cols-3">
                        <div>
                            <ReplayHero player={state.players[0]} />
                        </div>
                        <div>
                            <ReplayWeapon
                                weapon={selectedWeapon}
                                isSelected={true}
                                width={300}
                            />
                        </div>
                        <div>
                            <ReplayHero player={state.players[1]} />

                        </div>
                    </div>


                </div>
                <div>
                    <ReplayPlayer
                        player={state.players[1]}
                        isOnTurn={state.playerTurn === 1}
                        weaponIndex={state.players[state.playerTurn].selectedWeaponIndex}
                    />
                </div>
            </div>
        </>
    )
}
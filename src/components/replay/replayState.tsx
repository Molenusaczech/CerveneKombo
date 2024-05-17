import { replayState, replayWeapon } from "@/types/replay/replayState"
import ReplayPlayer from "./replayPlayer";
import Card from "../card";
import EffectImg from "../images/effectImg";
import colorMap from "@/data/swo/colorMap";
import effectMap from "@/data/swo/effectMap";
import ReplayHero from "./replayHero";
import ReplayWeapon from "./replayWeapon";
import DaytimeVerticalImg from "../images/daytimeVerticalImg";

export default function ReplayState(props: {
    state: replayState
}) {

    const state = props.state;

    let selectedWeapon: replayWeapon = {
        ...state.players[state.playerTurn].weapons[state.players[state.playerTurn].selectedWeaponIndex]
    }

    if (state.rolledEffect !== null) {
        selectedWeapon.stashedEffect = {
            value: state.rolledEffect.value,
            durability: state.rolledEffect.durability,
            type: state.rolledEffect.type,
            color: state.rolledEffect.color,
        }
    } else {
        selectedWeapon.stashedEffect = null;
    }

    return (
        <>
            <div className="grid">
                <div>
                    <ReplayPlayer
                        player={state.players[0]}
                        isOnTurn={state.playerTurn === 0}
                        weaponIndex={state.players[state.playerTurn].selectedWeaponIndex}
                        isHeroTarget={state.targetPlayerIndex === 0}
                        weaponTarget={state.targetCardIndex}
                    />
                </div>

                <div>

                    <div className="grid grid-cols-3">
                        <div>
                            <ReplayHero
                                player={state.players[0]}
                                isOnTurn={state.playerTurn === 0}
                                isTarget={state.targetPlayerIndex === 0 && state.targetCardIndex === 0}
                            />
                        </div>
                        <div>
                            <ReplayWeapon
                                weapon={selectedWeapon}
                                isSelected={true}
                                width={300}
                                isOnTurn={true}
                            />
                            <DaytimeVerticalImg
                                time={state.round}
                                isFirst={state.playerTurn === 0}
                            />
                        </div>
                        <div>
                            <ReplayHero
                                player={state.players[1]}
                                isOnTurn={state.playerTurn === 1}
                                isTarget={state.targetPlayerIndex === 1 && state.targetCardIndex === 0}
                            />

                        </div>
                    </div>


                </div>
                <div>
                    <ReplayPlayer
                        player={state.players[1]}
                        isOnTurn={state.playerTurn === 1}
                        weaponIndex={state.players[state.playerTurn].selectedWeaponIndex}
                        isHeroTarget={state.targetPlayerIndex === 1}
                        weaponTarget={state.targetCardIndex}
                    />
                </div>
            </div>
        </>
    )
}
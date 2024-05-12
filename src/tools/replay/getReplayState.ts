import { replay } from "@/types/replay/replay";
import { replayPlayer, replayState } from "@/types/replay/replayState";
import { deck } from "../deck";
import StarTable from "@/components/charts/starTable";
import effectMap from "@/data/swo/effectMap";
import { effectType } from "@/types/replay/effectType";
import { stat } from "fs";

function invertPlayerIndex(index: number): number {
    return index === 0 ? 1 : 0;
}

export default function getReplayState(replay: replay, decks: deck[], index: number): replayState {

    let state: replayState = {
        players: replay.gameState.players.map((player, playerIndex: number) => {
            return {
                hp: player.hero.max_health,
                max_hp: player.hero.max_health,
                energy: 0,
                actions: 4,
                hero: decks[playerIndex].hero,
                selectedWeaponIndex: 0,
                weapons: player.weapons.map((weapon, weaponIndex) => {
                    return {
                        card: decks[playerIndex].weapons[weaponIndex], // Cast weapon.db_id to weaponRarity
                        broken: "NOT_BROKEN",
                        stashedEffect: null,
                        cost: weapon.roll_cost,
                    }
                }),
            }
        }),
        playerTurn: 0,
        rolledEffect: null,
        message: null,
        targetPlayerIndex: null,
        targetCardIndex: null,
        round: -1,
    }

    for (let i = 0; i <= index; i++) {
        const event = replay.events[i];

        // repair weapons

        if (event.initiator !== null && state.playerTurn !== null && state.playerTurn !== event.initiator) {
            state.players[event.initiator].weapons.forEach((weapon, index) => {
                if (weapon.broken == "FIXING") {
                    state.players[event.initiator as number].weapons[index].broken = "NOT_BROKEN";
                }
            })
        }

        switch (event.type) {
            case "TURN_STARTED":
                state.players[0].hp = event.data.hero_0_health;
                state.players[0].energy = event.data.hero_0_energy;
                state.players[0].actions = 4;

                state.players[1].hp = event.data.hero_1_health;
                state.players[1].energy = event.data.hero_1_energy;
                state.players[1].actions = 4;

                state.rolledEffect = null;
                state.round++;
                break;
            case "WEAPON_EQUIPPED":
                state.playerTurn = event.initiator as number;
                state.players[state.playerTurn].selectedWeaponIndex = event.data.weapon_index;
                state.rolledEffect = null;
                break;
            case "WEAPON_ROLLED":
                state.rolledEffect = {
                    value: event.data.strength,
                    durability: event.data.durability,
                    color: event.data.color,
                    type: event.data.action,
                }
                state.playerTurn = event.initiator as number;
                state.players[state.playerTurn].actions -= 1;
                state.players[state.playerTurn].energy -= state.players[state.playerTurn].weapons[state.players[state.playerTurn].selectedWeaponIndex].cost;
                break;
            case "WEAPON_ROLL_GAIN_ENERGY":
                state.rolledEffect = {
                    value: event.data.power,
                    durability: null,
                    color: null,
                    type: "ENERGY",
                }
                state.players[state.playerTurn].energy += event.data.power;
                break;
            case "WEAPON_ROLL_CANCELLED":
                state.rolledEffect = null;
                break;
            case "HERO_WAS_ATTACKED":
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                }
                state.players[event.data.target_player_index as number].hp -= event.data.total_power;
                
                // check combos

                if (event.data.effect == "COMBO") {
                    state.players[invertPlayerIndex(event.data.target_player_index)].weapons.forEach((weapon, index) => {
                        if (weapon.stashedEffect !== null && weapon.stashedEffect.type == "COMBO") {
                            state.players[invertPlayerIndex(event.data.target_player_index)].weapons[index].stashedEffect = null;
                        }
                    })
                }
                
                break;
            case "DISCARD_PHASE_BEGINS":
                state.rolledEffect = null;
                //state.players[state.playerTurn].selectedWeaponIndex = 0;
                break;
            case "WEAPON_ROLL_STASHED":
                if (state.rolledEffect === null) {
                    throw new Error("No rolled effect");
                }
                state.players[state.playerTurn].weapons[state.players[state.playerTurn].selectedWeaponIndex].stashedEffect = {
                    value: state.rolledEffect?.value,
                    durability: state.rolledEffect?.durability,
                    color: state.rolledEffect?.color,
                    type: state.rolledEffect?.type,
                };
                state.rolledEffect = null;
                break;
            case "STASHED_EFFECT_DESTROYED":
                state.players[event.data.target_player_index].weapons[event.data.target_weapon_index].stashedEffect = null;
                
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                }

                // check combos

                if (event.data.effect == "COMBO") {
                    state.players[invertPlayerIndex(event.data.target_player_index)].weapons.forEach((weapon, index) => {
                        if (weapon.stashedEffect !== null && weapon.stashedEffect.type == "COMBO") {
                            state.players[invertPlayerIndex(event.data.target_player_index)].weapons[index].stashedEffect = null;
                        }
                    })
                }

                break;
            case "WEAPON_UNSTASHED":
                state.players[event.initiator as number].weapons[event.data.weapon_index].stashedEffect = null;
                break;
            case "ATTACK_CANCELLED":
                state.rolledEffect = null;
                break;
            case "WEAPON_ROLL_HEAL_OWN_HERO":
                state.rolledEffect = {
                    value: event.data.power,
                    durability: null,
                    color: null,
                    type: "HEAL",
                }
                state.players[event.initiator as number].hp = event.data.new_value;
                break;
            case "WEAPON_DESTROYED":
                state.players[event.data.target_player_index].weapons[event.data.target_weapon_index].broken = "BROKEN";
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                }
                break;
            case "WEAPON_REPAIRING":
                state.playerTurn = event.initiator as number;
                state.players[state.playerTurn].weapons[event.data.weapon_index].broken = "FIXING";
                state.rolledEffect = null;
                state.players[state.playerTurn].actions -= 1;
                state.players[state.playerTurn].energy -= state.players[state.playerTurn].weapons[event.data.weapon_index].cost;
                break;
            case "SHIELDS_USED":
                state.players[event.initiator as number].weapons.forEach((weapon, index) => {
                    if (weapon.stashedEffect !== null && weapon.stashedEffect.type == "DEFENSE" && weapon.stashedEffect.value == event.data.base) {
                        state.players[event.initiator as number].weapons[index].stashedEffect = null;
                    }
                })
                state.rolledEffect = {
                    value: event.data.total,
                    durability: null,
                    color: null,
                    type: "DEFENSE",
                }
                break;
        }   

    }

    return state;
}
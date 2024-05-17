import { replay } from "@/types/replay/replay";
import { replayPlayer, replayState } from "@/types/replay/replayState";
import { deck } from "../deck";
import StarTable from "@/components/charts/starTable";
import effectMap from "@/data/swo/effectMap";
import { effectType } from "@/types/replay/effectType";
import { stat } from "fs";

import  invertPlayerIndex  from "./invertPlayerIndex";
import getShieldIndexes from "./getShieldIndexes";

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

        if (event.type == "TURN_STARTED") {
            event.initiator = 0;
        }

        if (event.initiator !== null && state.playerTurn !== null && state.playerTurn !== event.initiator) {
            state.players[event.initiator].weapons.forEach((weapon, index) => {
                if (weapon.broken == "FIXING" || weapon.broken == "UNCURSING") {
                    state.players[event.initiator as number].weapons[index].broken = "NOT_BROKEN";
                }
            })
        }

        state.targetCardIndex = null;
        state.targetPlayerIndex = null;

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
                state.playerTurn = 0;
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

                if (i !== index) {
                    state.players[event.data.target_player_index as number].hp -= event.data.total_power;
                }

                if (event.data.effect == "NIGHT_ATTACK" && i !== index) {
                    state.players[invertPlayerIndex(event.data.target_player_index)].energy -= event.data.cost;
                }

                if (event.data.effect == "CUMULUS" && i !== index) {
                    state.players[invertPlayerIndex(event.data.target_player_index)].weapons.forEach((weapon, index) => {
                        if (weapon.stashedEffect !== null && weapon.stashedEffect.type == "CUMULUS") {
                            state.players[invertPlayerIndex(event.data.target_player_index)].weapons[index].stashedEffect = null;
                        }
                    })
                }

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = 0;

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
                if (i !== index) {
                    state.players[event.data.target_player_index].weapons[event.data.target_weapon_index].stashedEffect = null;
                }
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                }

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = event.data.target_weapon_index + 1;

                // check cumulus

                if (event.data.effect == "CUMULUS" && i !== index) {
                    state.players[invertPlayerIndex(event.data.target_player_index)].weapons.forEach((weapon, index) => {
                        if (weapon.stashedEffect !== null && weapon.stashedEffect.type == "CUMULUS") {
                            state.players[invertPlayerIndex(event.data.target_player_index)].weapons[index].stashedEffect = null;
                        }
                    })
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
                state.playerTurn = event.initiator as number;
                state.players[state.playerTurn].weapons[event.data.weapon_index].stashedEffect = null;
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
                if (i !== index) {
                    state.players[event.data.target_player_index].weapons[event.data.target_weapon_index].broken = "BROKEN";
                }
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                }

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = event.data.target_weapon_index + 1;

                // check cumulus

                if (event.data.effect == "CUMULUS" && i !== index) {
                    state.players[invertPlayerIndex(event.data.target_player_index)].weapons.forEach((weapon, index) => {
                        if (weapon.stashedEffect !== null && weapon.stashedEffect.type == "CUMULUS") {
                            state.players[invertPlayerIndex(event.data.target_player_index)].weapons[index].stashedEffect = null;
                        }
                    })
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
            case "WEAPON_REPAIRING":
                state.playerTurn = event.initiator as number;
                state.players[state.playerTurn].weapons[event.data.weapon_index].broken = "FIXING";
                state.rolledEffect = null;
                state.players[state.playerTurn].actions -= 1;
                state.players[state.playerTurn].energy -= state.players[state.playerTurn].weapons[event.data.weapon_index].cost;
                break;
            case "SHIELDS_USED":

                getShieldIndexes(replay, state, i, event.data.base)?.forEach((shieldIndex) => {
                    //console.log(shieldIndex);
                    state.players[event.initiator as number].weapons[shieldIndex].stashedEffect = null;
                })

                /*state.players[event.initiator as number].weapons.forEach((weapon, index) => {
                    if (weapon.stashedEffect !== null && weapon.stashedEffect.type == "DEFENSE" && weapon.stashedEffect.value == event.data.base) {
                        state.players[event.initiator as number].weapons[index].stashedEffect = null;
                    }
                })*/
                state.rolledEffect = {
                    value: event.data.total,
                    durability: null,
                    color: null,
                    type: "DEFENSE",
                }
                break;
            case "HERO_WAS_DRAINED":
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                }

                if (i !== index) {
                    state.players[event.data.target_player_index as number].hp -= event.data.total_power;
                    state.players[invertPlayerIndex(event.data.target_player_index)].energy += event.data.total_power;
                }

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = 0;
                break;
            case "WEAPON_NOT_CURSED":
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                };

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = event.data.target_weapon_index + 1;
                break;
            case "WEAPON_NOT_DESTROYED":
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                };

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = event.data.target_weapon_index + 1;
                break;
            case "WEAPON_NOT_DESTROYED":
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                };

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = event.data.target_weapon_index + 1;
                break;
            case "WEAPON_CURSED":

                if (i !== index) {
                    state.players[event.data.target_player_index].weapons[event.data.target_weapon_index].broken = "CURSED";
                }

                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                };

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = event.data.target_weapon_index + 1;
                break;
            case "WEAPON_OBLITERATED":
                if (i !== index) {
                    state.players[event.data.target_player_index].weapons[event.data.target_weapon_index].broken = "BROKEN";
                    state.players[invertPlayerIndex(event.data.target_player_index)].hp += event.data.total_power;
                }

                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                };

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = event.data.target_weapon_index + 1;
                break;
            case "STASHED_EFFECT_OBLITERATED":
                if (i !== index) {
                    state.players[event.data.target_player_index].weapons[event.data.target_weapon_index].stashedEffect = null;
                    state.players[invertPlayerIndex(event.data.target_player_index)].hp += event.data.total_power;
                }

                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                };

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = event.data.target_weapon_index + 1;
                break;
            case "COUNTER_ATTACK_USED":
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: event.data.effect,
                }

                if (i !== index) {
                    state.players[invertPlayerIndex(event.initiator as number)].hp -= event.data.total_power;
                }

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = 0;

                // remove traps

                state.players[event.initiator as number].weapons.forEach((weapon, index) => {
                    if (weapon.stashedEffect !== null && weapon.stashedEffect.type == "TRAP") {
                        state.players[event.initiator as number].weapons[index].stashedEffect = null;
                    }
                })

                break;
            case "WEAPON_UNCURSING":
                state.playerTurn = event.initiator as number;
                state.players[state.playerTurn].hp -= 5;
                state.players[state.playerTurn].weapons.forEach((weapon, index) => {
                    if (weapon.broken == "CURSED") {
                        state.players[state.playerTurn].weapons[index].broken = "UNCURSING";
                    }
                })
                break;
            case "MECHANIC_REPAIRING":
                if (i !== index) state.players[event.data.self_player_index].weapons[event.data.target_weapon_index].broken = "FIXING";
                state.rolledEffect = {
                    value: event.data.total_power,
                    durability: null,
                    color: null,
                    type: "MECHANICS_SUPERACTION",
                };
                state.targetPlayerIndex = event.data.self_player_index;
                state.targetCardIndex = event.data.target_weapon_index + 1;
                break;
            case "USED_BATTLE_TRICK":
                state.rolledEffect = {
                    value: event.data.hp_lost,
                    durability: null,
                    color: null,
                    type: "BATTLE_TRICK",
                }

                state.playerTurn = event.initiator as number;

                state.targetPlayerIndex = event.data.target_player_index;
                state.targetCardIndex = 0;

                if (i !== index) {
                    state.players[state.playerTurn].hp += event.data.hp_lost;
                    state.players[state.playerTurn].actions += 1;
                    state.players[state.playerTurn].energy += state.players[state.playerTurn].weapons[state.players[state.playerTurn].selectedWeaponIndex].cost;
                }
                break;
        }

    }

    return state;
}
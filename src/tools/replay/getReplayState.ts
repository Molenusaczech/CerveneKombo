import { replay } from "@/types/replay/replay";
import { replayPlayer, replayState } from "@/types/replay/replayState";
import { deck } from "../deck";
import StarTable from "@/components/charts/starTable";
import effectMap from "@/data/swo/effectMap";
import { effectType } from "@/types/replay/effectType";

export default function getReplayState(replay: replay, decks: deck[], index: number): replayState {

    let state: replayState = {
        players: replay.gameState.players.map((player, playerIndex: number) => {
            return {
                hp: player.hero.max_health,
                max_hp: player.hero.max_health,
                energy: 0,
                actions: 4,
                hero: decks[playerIndex].hero,
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
        selectedWeaponIndex: 0,
        rolledEffect: null,
    }

    for (let i = 0; i <= index; i++) {
        const event = replay.events[i];

        state.rolledEffect = null;

        switch (event.type) {
            case "TURN_STARTED":
                state.players[0].hp = event.data.hero_0_health;
                state.players[0].energy = event.data.hero_0_energy;
                state.players[0].actions = 4;

                state.players[1].hp = event.data.hero_1_health;
                state.players[1].energy = event.data.hero_1_energy;
                state.players[1].actions = 4;
                break;
            case "WEAPON_EQUIPPED":
                state.selectedWeaponIndex = event.data.weapon_index;
                state.playerTurn = event.initiator as number;
                break;
            case "WEAPON_ROLLED":
                state.rolledEffect = {
                    value: event.data.strength,
                    durability: event.data.durability,
                    color: event.data.color,
                    type: event.data.action,
                }
                state.players[state.playerTurn].actions -= 1;
                state.players[state.playerTurn].energy -= state.players[state.playerTurn].weapons[state.selectedWeaponIndex].cost;
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
        }

    }

    return state;
}
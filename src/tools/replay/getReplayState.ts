import { replay } from "@/types/replay/replay";
import { replayPlayer, replayState } from "@/types/replay/replayState";
import { deck } from "../deck";

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
                    }
                }),
            }
        }),
        playerTurn: 0,
        selectedWeaponIndex: 0,
        rolledEffect: null,
    }

    return state;
}
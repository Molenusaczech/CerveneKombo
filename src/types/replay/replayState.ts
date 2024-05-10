import { heroRarity } from "../cardRarity"
import { weaponRarity } from "../weaponRarity"

type brokenStatus = "BROKEN" | "NOT_BROKEN" | "FIXING" | "CURSED"

type replayEffect = {
    value: number,
    durability?: number,
}

type replayWeapon = {
    card: weaponRarity,
    broken: brokenStatus,
    stashedEffect: replayEffect | null,
}

type replayPlayer = {
    hp: number,
    max_hp: number,
    energy: number,
    actions: number,
    hero: heroRarity,
    weapons: replayWeapon[],
}

type replayState = {
    players: replayPlayer[],
    playerTurn: number,
    selectedWeaponIndex: number,
    rolledEffect: replayEffect | null,
}

export type { replayState, replayPlayer, replayWeapon, replayEffect }
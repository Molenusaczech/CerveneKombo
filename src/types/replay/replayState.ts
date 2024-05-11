import { heroRarity } from "../cardRarity"
import { weaponRarity } from "../weaponRarity"
import { swoColor } from "./color"
import { effectType } from "./effectType"

type brokenStatus = "BROKEN" | "NOT_BROKEN" | "FIXING" | "CURSED"

type replayEffect = {
    type: effectType
    value: number,
    durability: number | null,
    color: swoColor | null,
}

type replayWeapon = {
    card: weaponRarity,
    broken: brokenStatus,
    stashedEffect: replayEffect | null,
    cost: number,
}

type replayPlayer = {
    hp: number,
    max_hp: number,
    energy: number,
    actions: number,
    hero: heroRarity,
    weapons: replayWeapon[],
    selectedWeaponIndex: number,
}

type replayState = {
    players: replayPlayer[],
    playerTurn: number,
    rolledEffect: replayEffect | null,
}

export type { replayState, replayPlayer, replayWeapon, replayEffect }
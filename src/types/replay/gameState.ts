import { swoColor } from "./color"
import { effectType } from "./effectType"
import { swoWeaponType } from "./swoWeaponType"

type gameStateHeroBonus = {
    strength: number,
    type: effectType,
}

type gameStateHero = {
    bonuses: gameStateHeroBonus[],
    db_id: number,
    energy: number[],
    skilled_in: swoWeaponType[],
    max_health: number,
}

type gameStateWeaponAttack = {
    color: swoColor,
    durability: number | null,
    strength: number,
    effect: effectType,
}

type gameStateWeapon = {
    attacks: gameStateWeaponAttack[],
    db_id: number,
    durability: number,
    roll_cost: number,
    type: swoWeaponType,
}

type gameStatePlayer = {
    hero: gameStateHero,
    weapons: gameStateWeapon[],
}

type gameState = {
    uuid: string,
    winner_player_index: number,
    players: gameStatePlayer[],
}

export type { gameState, gameStateHero, gameStateWeapon, gameStatePlayer, gameStateWeaponAttack, gameStateHeroBonus }
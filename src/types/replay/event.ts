type eventType = "GAME_CREATED" | 
"GAME_STARTED" | 
"TURN_STARTED" | 
"WEAPON_EQUIPPED" | 
"WEAPON_ROLLED" | 
"WEAPON_ROLL_CANCELLED" | 
"USED_BATTLE_TRICK" | 
"WEAPON_ROLL_STASHED" | 
"WEAPON_ROLL_HEAL_OWN_HERO" | 
"WEAPON_ROLL_GAIN_ENERGY" | 
"HERO_WAS_ATTACKED" | 
"STASHED_EFFECT_NOT_DESTROYED" | 
"STASHED_EFFECT_DESTROYED" | 
"STASHED_EFFECT_OBLITERATED" |
"WEAPON_DESTROYED" |
"WEAPON_NOT_DESTROYED" | 
"WEAPON_OBLITERATED"

type event = {
    created: number,
    id: number,
    data: any,
    type: eventType,
    initiator: 0 | 1 | null,
}

export type { event, eventType }
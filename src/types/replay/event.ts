type eventType = "GAME_CREATED" | 
"GAME_STARTED" | // done
"TURN_STARTED" | 
"WEAPON_EQUIPPED" | // done
"WEAPON_ROLLED" | // done
"WEAPON_ROLL_CANCELLED" | //done
"USED_BATTLE_TRICK" | 
"WEAPON_ROLL_STASHED" | 
"WEAPON_ROLL_HEAL_OWN_HERO" | 
"WEAPON_ROLL_GAIN_ENERGY" | // done
"HERO_WAS_ATTACKED" | // done
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
type eventType = "GAME_CREATED" | 
"GAME_STARTED" | 
"TURN_STARTED" | // done
"WEAPON_EQUIPPED" | // done
"WEAPON_ROLLED" | // done
"WEAPON_ROLL_CANCELLED" | //done
"USED_BATTLE_TRICK" | 
"WEAPON_ROLL_STASHED" | 
"WEAPON_ROLL_HEAL_OWN_HERO" | 
"WEAPON_ROLL_GAIN_ENERGY" | // done
"HERO_WAS_ATTACKED" | // done
"STASHED_EFFECT_NOT_DESTROYED" | 
"STASHED_EFFECT_DESTROYED" |  // done
"STASHED_EFFECT_OBLITERATED" |
"WEAPON_DESTROYED" | // done
"WEAPON_NOT_DESTROYED" |  // done
"WEAPON_OBLITERATED" | // done
"DISCARD_PHASE_BEGINS" | // done i think so
"WEAPON_UNSTASHED" | //done
"ATTACK_CANCELLED" | // done
"WEAPON_REPAIRING" | // done
"SHIELDS_USED" | //done 
"HERO_WAS_DRAINED" |//done
"WEAPON_NOT_CURSED" |//done
"WEAPON_CURSED" | //done
"STASHED_EFFECT_OBLITERATED" | //done
"ATTACK_TRAPPED" |
"COUNTER_ATTACK_USED" |
"WEAPON_UNCURSING" |
"MECHANIC_REPAIRING" |
"USED_BATTLE_TRICK" |
"SUDDEN_DEATH" |
"STASHED_EFFECT_CURSED"

type event = {
    created: number,
    id: number,
    data: any,
    type: eventType,
    initiator: 0 | 1 | null,
}

export type { event, eventType }
import { effectName } from "@/types/effects";
import { effectType } from "@/types/replay/effectType";

const effectMap: Record<effectType, effectName> = {
    "ENERGY": "add-energy",
    "HERO_ATTACK": "hit-hero",
    "WEAPON_ATTACK": "hit-weapon",
    "UNIVERSAL_ATTACK": "hit-anything",
    "HEAL": "heal",
    "PERMANENT_ATTACK": "hit-hero-repeated",
    "DEFENSE": "block",
    "COMBO": "combo",
    "BLESS": "all",
    "COMBO_DETONATOR": "combo-trigger",
    "OBLITERATE": "crunch-weapon",
    "BATTLE_TRICK": "stop-discard",
    "VAMPIRE_BITE": "vampire-bite",
    "CURSE_WEAPON": "curse-weapon",
    "NIGHT_ATTACK": "night-attack",
    "MECHANICS_SUPERACTION": "fix-weapon",
    "TRAP": "trap",
    "ZEPPLANDIAN_SHRAPNEL": "hit-double",
    "ZEPPLANDIAN_SHRAPNEL_2": "hit-double",
    "CUMULUS": "cumulative-attack",
    "EXTRA_COINS": "extra-coins"
}

export default effectMap;
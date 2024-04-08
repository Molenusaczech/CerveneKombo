import { effectName } from "@/types/effects";

const durabilityEffects: effectName[] = [
    "combo", "hit-hero-repeated", "block", "trap", "cumulative-attack"
];

function hasDurability(effect: effectName | null): boolean {
    if (effect == null) return false;
    return durabilityEffects.includes(effect);
}

export { hasDurability }
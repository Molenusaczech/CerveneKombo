import { effectName } from "@/types/effects";

const invertedEffects: effectName[] = [
    "night-attack", "combo-trigger", "fix-weapon", "extra-coins", "stop-discard"
];

function isInverted(effect: effectName | null): boolean {
    if (effect == null) return false;
    return invertedEffects.includes(effect);
}

export { isInverted }
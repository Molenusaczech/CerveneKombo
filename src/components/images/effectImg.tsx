import { effectColor, effectName } from "@/types/effects";

const colorClasses: Record<effectColor | "none", string> = {
    "stop": "R",
    "opt": "O",
    "go": "G",
    "none": ""
}

const effectClasses: Record<effectName, string> = {
    "all": "bless",
    "combo": "combo",
    "combo-trigger": "combo-detonator",
    "block": "defense",
    "add-energy": "energy",
    "heal": "heal",
    "hit-hero": "hero-attack",
    "hit-hero-repeated": "permanent-attack",
    "hit-anything": "universal-attack",
    "hit-weapon": "weapon-attack",
    "crunch-weapon": "obliterate",
    "stop-discard": "battle-trick",
    "curse-weapon": "curse-weapon",
    "night-attack": "night-attack",
    "vampire-bite": "vampire-bite",
    "fix-weapon": "mechanics-superaction",
    "hit-double": "zepplandian-shrapnel",
    "trap": "trap",
    "cumulative-attack": "cumulus",
    "extra-coins": "extra-coins"
}

export default function EffectImg(props: { effect: effectName, color?: effectColor | "none" }) {
    let { effect, color } = props;
    color = color || "none";
    return (
        <span className={"icon-32 action-type "+effectClasses[effect]+" "+colorClasses[color]}></span>
    )
}
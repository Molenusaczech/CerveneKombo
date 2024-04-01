import { bonus } from "@/types/cardRarity";
import { effectName } from "@/types/effects";

function parseBonuses(bonuses: bonus[], effectCounts: (effectName | null)[]) {
    let bonusArray: bonus[] = [];
    
    for (let i = 0; i < bonuses.length; i++) {
        let bonus = bonuses[i];
        let effect = effectCounts[i];
        if (effect == null) bonus = {
            value: 0,
            isUpgraded: false,
        };
        bonusArray.push(bonus);
    }

    //console.log(bonusArray);
    return bonusArray;
}

export { parseBonuses };
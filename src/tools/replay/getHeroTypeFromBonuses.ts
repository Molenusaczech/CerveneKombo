import { effectName } from "@/types/effects";

import { heroTypeData } from "@/data/heroTypeData";
import { heroCardType } from "@/types/heroType";

export default function getHeroTypeFromBonuses(
    bonuses: (effectName | null)[]
): heroCardType {
    const heroType = Object.values(heroTypeData).filter((heroType: heroCardType) => {
        if (heroType === undefined) {
            throw new Error("Hero type not found");
        }
        return heroType.effects.every((effect: (effectName | null), index: number) => {
            return bonuses[index] === effect;
        });
    })[0];

    return heroType;
}
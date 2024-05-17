import { effectName, weaponTypeEffect } from "@/types/effects";

import { heroTypeData } from "@/data/heroTypeData";
import { heroCardType } from "@/types/heroType";
import { weaponCardType } from "@/types/weaponType";
import { weaponTypeData } from "@/data/weaponTypeData";

const weaponIndexesMap = [
    0, 8, 7, 6, 5, 4, 3, 2, 1
]

export default function getWeaponTypeFromBonuses(
    bonuses: (effectName | null)[]
): weaponCardType {
    const weaponType = Object.values(weaponTypeData).filter((weaponType: weaponCardType) => {
        if (weaponType === undefined) {
            throw new Error("Weapon type not found");
        }
        return weaponType.effects.every((effect: weaponTypeEffect, index: number) => {
            return bonuses[weaponIndexesMap[index]] === effect.t;
        });
    })[0];

    if (weaponType === undefined) {
        throw new Error("Weapon type not found");
    }

    return weaponType;
}
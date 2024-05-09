import { gameStateWeapon, gameStateWeaponAttack } from "@/types/replay/gameState";
import { gameStatData } from "@/types/replay/gameStatData";
import { weaponRarity } from "@/types/weaponRarity";
import { effectName } from "@/types/effects";
import effectMap from "@/data/swo/effectMap";
import getWeaponTypeFromBonuses from "./getWeaponTypeFromBonuses";

function getWeaponBonuses(
    swoEffects: gameStateWeaponAttack[]
): (effectName | null)[] {

    return swoEffects.map((effect: gameStateWeaponAttack) => {
        if (effect === null) {
            return null;
        }

        return effectMap[effect.effect];
    });
}

export default function getWeaponFromReplay(
    weapon: gameStateWeapon,
    gameStatData: gameStatData
): weaponRarity {
    

    const bonuses = getWeaponBonuses(weapon.attacks);

    //console.log(bonuses);

    const weaponType = getWeaponTypeFromBonuses(bonuses);

    //console.log(weaponType);

    const gameStatWeaponData = gameStatData.weapons[weapon.db_id];

    //console.log(gameStatWeaponData);

    const final: weaponRarity = {
        t: "weapon",
        name: gameStatWeaponData.name,
        cid: weaponType.cid,
        durability: weapon.durability,
        effects: weapon.attacks.map((attack: gameStateWeaponAttack) => {
            
            if (attack.durability !== null) {
                return {
                    isUpgraded: false,
                    value: attack.strength,
                    durability: attack.durability,
                };
            }
            
            return {
                isUpgraded: false,
                value: attack.strength,
            };
        }),
    };

    return final;
}
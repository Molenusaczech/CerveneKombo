import { gameStateWeapon, gameStateWeaponAttack } from "@/types/replay/gameState";
import { gameStatData } from "@/types/replay/gameStatData";
import { weaponRarity } from "@/types/weaponRarity";
import { effectName } from "@/types/effects";
import effectMap from "@/data/swo/effectMap";
import getWeaponTypeFromBonuses from "./getWeaponTypeFromBonuses";

import { weaponTypeData } from "@/data/weaponTypeData";
import { weaponCardType } from "@/types/weaponType";

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
    

    //const bonuses = getWeaponBonuses(weapon.attacks);

    //console.log(bonuses);

    //const weaponType = getWeaponTypeFromBonuses(bonuses);

    //console.log(weaponType);

    const gameStatWeaponData = gameStatData.weapons[weapon.db_id];

    const weaponType = Object.values(weaponTypeData).filter((weaponType: weaponCardType) => {
        //console.log(weaponType.cname.CS);
        //console.log(gameStatData.weapons[weapon.db_id].family_name.cs);
        return gameStatData.weapons[weapon.db_id].family_name.cs === weaponType.cname.CS;
    })[0];

    //console.log(weaponType);

    const final: weaponRarity = {
        t: "weapon",
        name: gameStatWeaponData.name,
        cid: weaponType.cid,
        durability: weapon.durability,
        effects: [
            weapon.attacks[0],
            weapon.attacks[8],
            weapon.attacks[7],
            weapon.attacks[6],
            weapon.attacks[5],
            weapon.attacks[4],
            weapon.attacks[3],
            weapon.attacks[2],
            weapon.attacks[1],
        ].map((attack: gameStateWeaponAttack) => {
            
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
import { replay } from "@/types/replay/replay";
import { deck } from "../deck";
import { gameStateHeroBonus, gameStateWeaponAttack } from "@/types/replay/gameState";
import { bonus } from "@/types/cardRarity";
import effectMap from "@/data/swo/effectMap";
import { effectType } from "@/types/replay/effectType";
import { effectName } from "@/types/effects";
import getHeroTypeFromBonuses from "./getHeroTypeFromBonuses";
import getHeroFromReplay from "./getHeroFromReplay";
import getWeaponTypeFromBonuses from "./getWeaponTypeFromBonuses";
import { weaponRarity } from "@/types/weaponRarity";

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

export default function GetDecksFromReplay(replay: replay): deck[] {

    const final = [0, 1].map((playerIndex: number) => {
        const playerData = replay.gameState.players[playerIndex];

        const hero = getHeroFromReplay(playerData.hero, replay.gameStatData);

        //console.log(playerData.weapons);

        const weapons = playerData.weapons.map((weapon) => {
            //console.log(weapon);
            const bonuses = getWeaponBonuses(weapon.attacks);

            //console.log(bonuses);

            const weaponType = getWeaponTypeFromBonuses(bonuses);

            //console.log(weaponType);

            const gameStatHeroData = replay.gameStatData.weapons[weapon.db_id];

            const final: weaponRarity = {
                t: "weapon",
                name: gameStatHeroData.name,
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
        });

        return {
            "hero": hero,
            "weapons": weapons
        };
    });

    return final;
}
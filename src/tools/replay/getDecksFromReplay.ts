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
import getWeaponFromReplay from "./getWeaponFromReplay";

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
            return getWeaponFromReplay(weapon, replay.gameStatData);
        });

        return {
            "hero": hero,
            "weapons": weapons
        };
    });

    return final;
}
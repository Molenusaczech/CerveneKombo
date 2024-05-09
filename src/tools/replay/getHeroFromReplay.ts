import effectMap from "@/data/swo/effectMap";
import { heroRarity } from "@/types/cardRarity";
import { effectName } from "@/types/effects";
import { gameStatData, gameStatHero } from "@/types/replay/gameStatData";
import { gameStateHero, gameStateHeroBonus } from "@/types/replay/gameState";
import getHeroTypeFromBonuses from "./getHeroTypeFromBonuses";

function getHeroBonuses(
    swoEffects: gameStateHeroBonus[]
): (effectName | null)[] {

    return swoEffects.map((effect: gameStateHeroBonus) => {
        if (effect === null) {
            return null;
        }

        return effectMap[effect.type];
    });
}

export default function getHeroFromReplay(
    hero: gameStateHero,
    gameStatData: gameStatData
): heroRarity {

    const bonuses = getHeroBonuses(hero.bonuses);

    //console.log(bonuses);

    const heroType = getHeroTypeFromBonuses(bonuses);

    //console.log(heroType);

    const gameStatHeroData = gameStatData.heroes[hero.db_id];

    const final: heroRarity = {
        t: "hero",
        name: gameStatHeroData.name,
        cid: heroType.cid,
        isFoil: gameStatHeroData.foil,
        primaryHealth: hero.max_health,
        secondaryHealth: 0,
        energy: hero.energy.map((energy: number) => {
            return {
                value: energy,
                isUpgraded: false,
            };
        }),
        bonuses: hero.bonuses.map((bonus: (gameStateHeroBonus | null)) => {
            if (bonus === null) {
                return null;
            }
            return {
                value: bonus.strength,
                isUpgraded: false,
            };
        }),
    };

    return final;

}
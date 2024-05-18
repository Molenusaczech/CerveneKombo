import { heroCid, heroTypeData } from "@/data/heroTypeData";
import { weaponCid, weaponTypeData } from "@/data/weaponTypeData";

import cardStats from "@/data/cardStats";
import { heroStats, weaponStats } from "@/data/statCounts";
import { islandName } from "@/types/chartData";
import { typeDataFromCid } from "@/types/typeData";
import { heroEffectStats, weaponEffectStats } from "@/types/cardStatsCounts";

const islandMap = {
    "Artemis": "BioTech",
    "Anubis": "BioTech",
    "Canbalandia": "Canbalandia",
    "Canbaland": "Canbalandia",
    "Vampiria": "Vampiria",
    "Zepplandia": "Zepplandia",
    "Spinbay": "Spinbay",
    "Middlemyst": "Middlemyst",
    "Techlandia": "BioTech",
    "Biolandia": "BioTech",
}

const heroData = heroTypeData;
const weaponData = weaponTypeData;

export default function getTypeData(
    cid: heroCid | weaponCid
): (typeDataFromCid | null) {
    let typeData = null;
    let type = null;
    let curStats = null;
    let typeStats = cardStats.types[cid];
    let island: islandName | null = null;
    let totalCards = cardStats.globals.cards;

    if (heroData[cid]) {
        typeData = heroData[cid];
        type = "hero";
        curStats = heroStats[cid];;
        island = islandMap[typeData.origin as keyof typeof islandMap] as islandName;
        totalCards = cardStats.islands[island].heroes;
    } else if (weaponData[cid]) {
        typeData = weaponData[cid];
        type = "weapon";
        curStats = weaponStats[cid];
        island = islandMap[typeData.expansion as keyof typeof islandMap] as islandName;
        totalCards = cardStats.islands[island].weapons;
    }

    if (!typeData || !curStats || !typeStats || !island || !type) {
        return null;
    }

    type = type as "hero" | "weapon";

    curStats = curStats as heroEffectStats[] | weaponEffectStats[];

    return {
        typeData,
        type,
        curStats,
        island,
        totalCards,
        typeStats
    }
}
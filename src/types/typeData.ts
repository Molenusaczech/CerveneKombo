import { heroTypeData } from "@/data/heroTypeData";
import { weaponTypeData } from "@/data/weaponTypeData";
import { islandName, typeChartData } from "./chartData";
import { heroCardType } from "./heroType";
import { weaponCardType } from "./weaponType";
import { heroEffectStats, weaponEffectStats } from "./cardStatsCounts";

type typeDataFromCid = {
    typeData: heroCardType | weaponCardType;
    type: "hero" | "weapon";
    curStats: heroEffectStats[] | weaponEffectStats[];
    island: islandName;
    totalCards: number;
    typeStats: typeChartData;
}

export type { typeDataFromCid }
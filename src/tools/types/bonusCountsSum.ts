import { heroEffectStats, weaponEffectStats } from "@/types/cardStatsCounts";

export default function bonusCountsSum(
    data: heroEffectStats | weaponEffectStats,
    type: "hero" | "weapon",
    isDurability?: boolean

): Record<string, number> {
    if (!data) return data;

    if (!('physical' in data)) {
        // Rest of the code...
        throw new Error("Empty array in bonusCountsSum, physical not found");
    }

    if (type === "hero") {
        data = data as heroEffectStats;
    } else {
        data = data as weaponEffectStats;
    }

    if (type === "weapon") {
        if (isDurability) {
            return (data as weaponEffectStats).dur;
        } else {
            return data.physical;
        }
    } 

    let keys = null;
    if (type === "hero") {
        keys = [...Object.keys(data.physical), ...Object.keys((data as heroEffectStats).virtual)].filter((value, index, self) => self.indexOf(value) === index);
    } else {
        keys = [...Object.keys(data.physical)]
    }

    keys.sort((a, b) => {
        return Number(a) - Number(b);
    });

    //console.log(keys);

    const final: Record<string, number> = {};

    keys.forEach((key) => {
        if (type === "hero") {
            final[key] = (data.physical[key] || 0) + ((data as heroEffectStats).virtual[key] || 0);
        } else {
            final[key] = (data.physical[key] || 0);
        }
    });

    if (Object.keys(final).length === 0) {
        throw new Error("Empty array in bonusCountsSum, final is empty");
    }

    return final;
}
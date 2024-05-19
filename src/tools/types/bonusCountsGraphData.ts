import { heroEffectStats, weaponEffectStats } from "@/types/cardStatsCounts";

export default function bonusCountsMerge(
    data: heroEffectStats | weaponEffectStats | {}, type: "hero" | "weapon", isDurability?: boolean) {
    if (!data) return data;

    if (!('physical' in data)) {
        // Rest of the code...
        throw new Error("Empty array in bonusCountsMerge, physical not found");
    }

    let keys = null;

    if (type === "hero") {
        if ('virtual' in data) {
            keys = [...Object.keys(data.physical), ...Object.keys(data.virtual)].filter((value, index, self) => self.indexOf(value) === index);
        } else {
            keys = [...Object.keys(data.physical)].filter((value, index, self) => self.indexOf(value) === index);
        }
    } else {
        if (isDurability) {
            if (!('dur' in data)) {
                throw new Error("Empty array in bonusCountsMerge, dur not found");
            }
            keys = [...Object.keys(data.dur || {})].filter((value, index, self) => self.indexOf(value) === index);
        } else {
            keys = [...Object.keys(data.physical)]
        }
    }

    keys.sort((a, b) => {
        return Number(a) - Number(b);
    });

    //console.log(keys);

    let final: (string | number)[][] | null;

    if (type == "hero") {
        final = [
            ['Hodnota', 'Fyzické karty', 'Virtuální karty'],
        ]
    } else {
        final = [
            ['Hodnota', 'Fyzické karty'],
        ]
    }

    keys.forEach((key) => {
        if (type === "hero") {
            if ('virtual' in data) {
                final.push([key, data.physical[key] || 0, data.virtual[key] || 0]);
            } else {
                final.push([key, data.physical[key] || 0, 0]);
            }
        } else {
            if (isDurability && 'dur' in data) {
                final.push([key, data.dur[key] || 0]);
            } else {
                final.push([key, data.physical[key] || 0]);
            }
        }
    });

    return final;
}
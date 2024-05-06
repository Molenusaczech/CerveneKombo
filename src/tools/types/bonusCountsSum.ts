import { heroEffectStats } from "@/types/cardStatsCounts";

export default function bonusCountsSum(
    data: heroEffectStats | {},
    type: "hero" | "weapon"

): Record<string, number> {
    if (!data) return data;

    if (!('physical' in data)) {
        // Rest of the code...
        throw new Error("Empty array in bonusCountsSum, physical not found");
    }

    let keys = null;
    if (type === "hero") {
        keys = [...Object.keys(data.physical), ...Object.keys(data.virtual)].filter((value, index, self) => self.indexOf(value) === index);
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
            final[key] = (data.physical[key] || 0) + (data.virtual[key] || 0);
        } else {
            final[key] = (data.physical[key] || 0);
        }
    });

    if (Object.keys(final).length === 0) {
        throw new Error("Empty array in bonusCountsSum, final is empty");
    }

    return final;
}
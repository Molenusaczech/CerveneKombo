import { heroEffectStats } from "@/types/cardStatsCounts";

export default function bonusCountsSum(data: heroEffectStats | {}): Record<string, number>{
    if (!data) return data;

    if (!('physical' in data)) {
        // Rest of the code...
        throw new Error("Empty array in bonusCountsSum, physical not found");
    }
    const keys = [...Object.keys(data.physical), ...Object.keys(data.virtual)].filter((value, index, self) => self.indexOf(value) === index);


    keys.sort((a, b) => {
        return Number(a) - Number(b);
    });

    //console.log(keys);

    const final: Record<string, number> = {};

    keys.forEach((key) => {
        final[key] = (data.physical[key] || 0) + (data.virtual[key] || 0);
    });

    if (Object.keys(final).length === 0) {
        throw new Error("Empty array in bonusCountsSum, final is empty");
    }

    return final;
}
import { heroEffectStats } from "@/types/cardStatsCounts";

export default function bonusCountsMerge(data: heroEffectStats | {}) {
    if (!data) return data;

    if (!('physical' in data)) {
        // Rest of the code...
        throw new Error("Empty array in bonusCountsMerge, physical not found");
    }
    const keys = [...Object.keys(data.physical), ...Object.keys(data.virtual)].filter((value, index, self) => self.indexOf(value) === index);


    keys.sort((a, b) => {
        return Number(a) - Number(b);
    });

    console.log(keys);

    const final: (string | number)[][] = [
        ['Hodnota', 'Fyzické karty', 'Virtuální karty'],
    ]

    keys.forEach((key) => {
        final.push([key, data.physical[key] || 0, data.virtual[key] || 0]);
    });

    return final;
}
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";

type condition = {
    target: "energy" | "bonuses" | "primaryHealth" | "secondaryHealth" | "durability",
    targetIndex: number,
    threshold: number,
    operator: "<" | ">" | "<=" | ">=" | "==",
}

type quest = {
    name: string,
    cardCid: heroCid | weaponCid,
    description: string,
    prize: string,
    winnerCount: number,
    hasToOwn: boolean,
    conditions: condition[],
}

export type { quest, condition };

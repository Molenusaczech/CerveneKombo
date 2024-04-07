import { heroCid } from "@/data/heroTypeData";

type bonus = {
    value: number,
    isUpgraded: boolean,
}

type heroRarity = {
    t: "hero",
    name: string,
    cid: heroCid,
    isFoil: boolean,
    primaryHealth: number,
    secondaryHealth: number,
    energy: bonus[],
    bonuses: (bonus | null)[],
}

export type { heroRarity, bonus};
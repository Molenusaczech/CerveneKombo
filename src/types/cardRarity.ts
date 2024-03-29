import { heroCid } from "@/data/heroTypeData";

type bonus = {
    value: number,
    isUpgraded: boolean,
}

type heroRarity = {
    name: string,
    cid: heroCid,
    isFoil: boolean,
    primaryHealth: number,
    secondaryHealth: number,
    energy: bonus[],
    bonuses: bonus[],
}

export type { heroRarity, bonus};
import { weaponCid } from "@/data/weaponTypeData"

type effect = {
    value: number,
    isUpgraded: boolean,
    durability?: number,
}

type weaponRarity = {
    t: "weapon",
    cid: weaponCid,
    name: string,
    durability: number,
    effects: effect[], 
}

export type { weaponRarity }
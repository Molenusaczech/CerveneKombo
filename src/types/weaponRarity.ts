type effect = {
    value: number,
    isUpgraded: boolean,
    durability?: number,
}

type weaponRarity = {
    t: "weapon",
    cid: string,
    name: string,
    durability: number,
    effects: effect[], 
}

export type { weaponRarity }
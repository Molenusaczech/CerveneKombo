type heroType = {
    rarity: number,
    name: {
        CS: string,
        EN?: string,
        DE?: string,
        IT?: string,
    },
    cardUrl: string,
    effectCounts: number[],
    average: number,
    weaponAbility: boolean[],
    inverteds: boolean[],
}

type heroTypes = {
    [key: string]: heroType
}

export type { heroType, heroTypes }
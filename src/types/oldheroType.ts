type oldheroType = {
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

type oldHeroTypes = {
    [key: string]: oldheroType
}

export type { oldheroType, oldHeroTypes }
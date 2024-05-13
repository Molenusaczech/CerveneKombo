type gameStatHero = {
    foil: boolean,
    gender: string,
    land: string,
    name: string,
    plus_minus: number,
}

type gameStatWeapon = {
    family_name: {
        cs?: string,
        en?: string,
    },
    name: string,
    plus_minus: number,
}

type gameStatHeroes = {
    [key: string]: gameStatHero
}

type gameStatWeapons = {
    [key: string]: gameStatWeapon
}

type gameStatData = {
    heroes: gameStatHeroes,
    weapons: gameStatWeapons,
}

export type { gameStatData, gameStatHero, gameStatWeapon, gameStatHeroes, gameStatWeapons }
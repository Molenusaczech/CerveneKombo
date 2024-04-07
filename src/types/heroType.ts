import { effectName } from "./effects"

import { weaponProf } from "./weaponProf"

type heroCardType = {
    gender: string,
    origin: string,
    cid: string,
    rarity: number,
    cname: {
        CS?: string,
        DE?: string,
        EN?: string,
        IT?: string,
        FR?: string,
        PL?: string,
        HU?: string,
    },
    weapon_prof: weaponProf,
    effects: (effectName | null)[],
    imgUrl: string,
}

type heroTypes = {
    [key: string]: heroCardType
}

export type { heroCardType, heroTypes }
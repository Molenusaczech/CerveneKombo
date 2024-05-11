import { weaponTypeEffect } from "./effects";
import { weaponProf, weaponType } from "./weaponProf";
import { weaponCid } from "@/data/weaponTypeData";

type weaponCardType = {
    cid: weaponCid,
    rarity: number,
    cost: number,
    expansion: string,
    cname: {
        CS?: string,
        DE?: string,
        EN?: string,
        IT?: string,
        FR?: string,
        PL?: string,
        HU?: string,
    },
    type: weaponType,
    effects: weaponTypeEffect[],
    imgUrl: string,
}

type weaponCardTypes = {
    [key: string]: weaponCardType
}

export type { weaponCardType, weaponCardTypes }
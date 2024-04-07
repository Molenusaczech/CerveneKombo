import { weaponRarity } from "./weaponRarity";

type weaponFromUid = {
    t: "weapon",
    owner: string,
    iid: string,
    card: weaponRarity,
    upgradedCard?: weaponRarity,
}

export type { weaponFromUid };
import { weaponRarity } from "./weaponRarity";

import { realization } from "./realization";

type weaponFromUid = {
    t: "weapon",
    owner: string,
    iid: string,
    realization: realization,
    expansion?: string,
    card: weaponRarity,
    upgradedCard?: weaponRarity,
}

export type { weaponFromUid };
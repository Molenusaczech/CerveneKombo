import { heroRarity } from "./cardRarity"
import { realization } from "./realization";

type heroFromUid = {
    t: "hero",
    owner: string,
    iid: string,
    experience: {
        level: number,
        xp: number,
    },
    realization: realization,
    expansion?: string,
    card: heroRarity,
    upgradedCard?: heroRarity,
}

export type { heroFromUid };
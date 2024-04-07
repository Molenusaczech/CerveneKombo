import { heroRarity } from "./cardRarity"

type heroFromUid = {
    t: "hero",
    owner: string,
    iid: string,
    experience: {
        level: number,
        xp: number,
    }
    card: heroRarity,
    upgradedCard?: heroRarity,
}

export type { heroFromUid };
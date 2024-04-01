import { heroRarity } from "./cardRarity"

type heroFromUid = {
    owner: string,
    iid: string,
    experience: {
        level: number,
        xp: number,
    }
    card: heroRarity,
}

export type { heroFromUid };
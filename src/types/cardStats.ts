import { heroRarity } from "./cardRarity"
import { weaponRarity } from "./weaponRarity"

type cardStats = {
    better: number,
    worse: number,
    same: number,
    instances: number,
    card: heroRarity | weaponRarity,
}

export type { cardStats }
import { heroRarity } from "./cardRarity"
import { langCode } from "./langTypes"
import { weaponRarity } from "./weaponRarity"

type cardStats = {
    better: number,
    worse: number,
    same: number,
    instances: number,
    delta: number,
    sum: number,
    median: number,
    card: heroRarity | weaponRarity,
    lang: langCode
}

export type { cardStats }
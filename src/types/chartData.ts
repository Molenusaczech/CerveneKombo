import { heroCid } from "@/data/heroTypeData"
import { weaponCid } from "@/data/weaponTypeData"

type delta = {
    val: number,
    isLimit: boolean,
    isDerived: boolean,
    isExact: boolean,
}

type deltas = "-10" | "-9" | "-8" | "-7" | "-6" | "-5" | "-4" | "-3" | "-2" | "-1" | "+0" | "+1" | "+2" | "+3" | "+4" | "+5" | "+6" | "+7" | "+8" | "+9" | "+10"

type deltaCounts = {
    [key in deltas]: number
}

type deltaVals = {
    [key in deltas]?: delta
}

type starCounts = {
    1: number,
    2: number,
    3: number,
    4: number,
}

type islandName = "BioTech" | "Canbalandia" | "Vampiria" | "Zepplandia" | "Spinbay" | "Middlemyst"

type islandChartData = {
    name: islandName | "Global",
    cards: number,
    heroes: number,
    weapons: number,
    stars: {
        hero: starCounts,
        weapon: starCounts,
    },
    rarities: {
        hero: deltaCounts,
        weapon: deltaCounts,
    },
}

type typeChartData = {
    name: string,
    cid: heroCid | weaponCid,
    count: number,
    origin: islandName,
    type: "hero" | "weapon",
    rarities: deltaVals,
}

type chartData = {
    globals: islandChartData,
    islands: {
        [key in islandName]: islandChartData
    }
    types: {
        [key in heroCid | weaponCid]: typeChartData
    }
}

export type { chartData, islandChartData, typeChartData, islandName};
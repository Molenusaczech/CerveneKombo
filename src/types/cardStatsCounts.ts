import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";

type heroEffectStats = {
    physical: Record<string, number>;
    virtual: Record<string, number>;
}

type weaponEffectStats = {
    physical: Record<string, number>;
    dur: Record<string, number>;
}

type heroEffectStatsAll = {
    [key: heroCid]: (heroEffectStats | {})[]
}

type weaponEffectStatsAll = {
    [key: weaponCid]: (weaponEffectStats | {})[]
}

export type { heroEffectStats, weaponEffectStats, heroEffectStatsAll, weaponEffectStatsAll}
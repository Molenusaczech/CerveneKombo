import heroStatsCounts from './raw/heroStatsCounts.json';
import weaponStatsCounts from './raw/weaponStatsCounts.json';

import { heroEffectStatsAll, weaponEffectStatsAll } from '@/types/cardStatsCounts';

let heroStats: heroEffectStatsAll = heroStatsCounts as heroEffectStatsAll;

let weaponStats: weaponEffectStatsAll = weaponStatsCounts as weaponEffectStatsAll;

export { heroStats, weaponStats };
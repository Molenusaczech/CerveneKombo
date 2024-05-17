import { heroRarity } from "@/types/cardRarity";
import { weaponRarity } from "@/types/weaponRarity";

type deck = {
    hero: heroRarity,
    weapons: weaponRarity[],
}

export type { deck }
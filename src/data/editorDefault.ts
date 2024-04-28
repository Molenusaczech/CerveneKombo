import { heroRarity } from "@/types/cardRarity"
import { weaponRarity } from "@/types/weaponRarity"

const editorHeroDefault: heroRarity = {
    t: "hero",
    cid: "VampPrince",
    name: "Mole",
    isFoil: false,
    primaryHealth: 22,
    secondaryHealth: 8,
    energy: [
        {
            value: 4,
            isUpgraded: false,
        },
        {
            value: 3,
            isUpgraded: false,
        },
        {
            value: 4,
            isUpgraded: false,
        },
        {
            value: 4,
            isUpgraded: false,
        },
    ],
    bonuses: [
        {
            value: 2,
            isUpgraded: false,
        },
        {
            value: 2,
            isUpgraded: false,
        },
        {
            value: 3,
            isUpgraded: false,
        },
        {
            value: 3,
            isUpgraded: false,
        },
        {
            value: 2,
            isUpgraded: false,
        },
        {
            value: 2,
            isUpgraded: false,
        },
        {
            value: 1,
            isUpgraded: false,
        },
        {
            value: 5,
            isUpgraded: false,
        },
    ]
}

const editorWeaponDefault: weaponRarity = {
    t: "weapon",
    cid: "Bow_Elderdragon",
    name: "MOLE",
    durability: 3,
    effects: [
        {
            value: 2,
            isUpgraded: false,
            durability: 3,
        },
        {
            value: 2,
            isUpgraded: false,
            durability: 3,
        },
        {
            value: 2,
            isUpgraded: false,
            durability: 3,
        },
        {
            value: 2,
            isUpgraded: false,
            durability: 3,
        },
        {
            value: 2,
            isUpgraded: false,
            durability: 3,
        },
        {
            value: 2,
            isUpgraded: false,
            durability: 3,
        },
        {
            value: 2,
            isUpgraded: false,
            durability: 3,
        },
        {
            value: 2,
            isUpgraded: false,
            durability: 3,
        },
        {
            value: 2,
            isUpgraded: false,
            durability: 3,
        }
    ]
}

export { editorHeroDefault, editorWeaponDefault }

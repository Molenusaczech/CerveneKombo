import { heroTypes } from "../types/heroType";

const heroTypeData: heroTypes = {
    "VampPrince": {
        rarity: 4, // 4* hero
        name: {
            "CS": "Upíří princ",
        },
        cardUrl: "/heroes/vampire-prince-cz.jpg",
        effectCounts: [
            2, 2, 2, 2
        ],
        average: 29,
        weaponAbility: [
            true, false, true, true // sword, axe, bow, wand
        ],
        inverteds: [
            false, false, false, false, false, true, false, true // night attacks are inverted
        ]
    },
    "Pollux" : { // LionHearted
        rarity: 2,
        name: {
            "CS": "Lví srdce",
        },
        cardUrl: "/heroes/the-lionhearted-cz.jpg",
        effectCounts: [
            2, 2, 1, 1
        ],
        average: 23,
        weaponAbility: [
            false, true, false, true // sword, axe, bow, wand
        ],
        inverteds: [
            false, false, false, false, false, false, false, false
        ]
    },

} as const;

export type heroCid = keyof typeof heroTypeData;
export { heroTypeData }
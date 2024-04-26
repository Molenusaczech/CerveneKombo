const fs = require('fs');

const islands = [
    //"Artemis",
    //"Anubis",
    "BioTech",
    "Canbalandia",
    //"Canbaland",
    "Vampiria",
    "Zepplandia",
    "Spinbay",
    "Middlemyst"
]

const islandMap = {
    "Artemis": "BioTech",
    "Anubis": "BioTech",
    "Canbalandia": "Canbalandia",
    "Canbaland": "Canbalandia",
    "Vampiria": "Vampiria",
    "Zepplandia": "Zepplandia",
    "Spinbay": "Spinbay",
    "Middlemyst": "Middlemyst"
}

const dataTemplate = {
    name: "Global",
    cards: 0,
    heroes: 0,
    weapons: 0,
    stars: {
        hero: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
        },
        weapon: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
        }
    },
    rarities: {
        hero: {
            "-10": 0,
            "-9": 0,
            "-8": 0,
            "-7": 0,
            "-6": 0,
            "-5": 0,
            "-4": 0,
            "-3": 0,
            "-2": 0,
            "-1": 0,
            "+0": 0,
            "+1": 0,
            "+2": 0,
            "+3": 0,
            "+4": 0,
            "+5": 0,
            "+6": 0,
            "+7": 0,
            "+8": 0,
            "+9": 0,
            "+10": 0,
        },
        weapon: {
            "-10": 0,
            "-9": 0,
            "-8": 0,
            "-7": 0,
            "-6": 0,
            "-5": 0,
            "-4": 0,
            "-3": 0,
            "-2": 0,
            "-1": 0,
            "+0": 0,
            "+1": 0,
            "+2": 0,
            "+3": 0,
            "+4": 0,
            "+5": 0,
            "+6": 0,
            "+7": 0,
            "+8": 0,
            "+9": 0,
            "+10": 0,
        }
    }
}

let data = JSON.parse(fs.readFileSync('src/data/raw/heroStats.json'));
const heroData = JSON.parse(fs.readFileSync('src/data/raw/heroData.json'));
let weaponStats = JSON.parse(fs.readFileSync('src/data/raw/weaponStats.json'));
const weaponData = JSON.parse(fs.readFileSync('src/data/raw/weaponData.json'));

function effectValue(value) {

    let sign = "+";

    if (value < 0) sign = "-"

    return sign + Math.abs(value).toString();

}

function cidToRarity(cid) {
    let rarity = 0;

    if (cid in heroData) {
        rarity = heroData[cid].rarity;
    } else if (cid in weaponData) {
        rarity = weaponData[cid].rarity;
    }

    return rarity;
}

let final = {
    globals: { ...dataTemplate },
    islands: {},
    types: {}
};

for (let island of islands) {
    final.islands[island] = {
        name: island,
        cards: 0,
        heroes: 0,
        weapons: 0,
        stars: {
            hero: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
            },
            weapon: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
            }
        },
        rarities: {
            hero: {
                "-10": 0,
                "-9": 0,
                "-8": 0,
                "-7": 0,
                "-6": 0,
                "-5": 0,
                "-4": 0,
                "-3": 0,
                "-2": 0,
                "-1": 0,
                "+0": 0,
                "+1": 0,
                "+2": 0,
                "+3": 0,
                "+4": 0,
                "+5": 0,
                "+6": 0,
                "+7": 0,
                "+8": 0,
                "+9": 0,
                "+10": 0,
            },
            weapon: {
                "-10": 0,
                "-9": 0,
                "-8": 0,
                "-7": 0,
                "-6": 0,
                "-5": 0,
                "-4": 0,
                "-3": 0,
                "-2": 0,
                "-1": 0,
                "+0": 0,
                "+1": 0,
                "+2": 0,
                "+3": 0,
                "+4": 0,
                "+5": 0,
                "+6": 0,
                "+7": 0,
                "+8": 0,
                "+9": 0,
                "+10": 0,
            }
        }
    }
}

for (let cid in { ...data, ...weaponStats }) {

    let card = null;
    let cardType = null;
    let finalStats = {};
    let type = null;

    if (cid in heroData) {
        card = data[cid];
        type = heroData[cid];
        cardType = "hero";
    } else if (cid in weaponData) {
        card = weaponStats[cid];
        type = weaponData[cid];
        cardType = "weapon";
    } else {
        console.log("CRITICAL Error with " + cid);
        continue;
    }

    const stats = card.stats;
    const origin = islandMap[type.expansion];
    //console.log(type.expansion);

    if (stats["+0"] == null) {
        console.log("No stats for " + card.title);
        continue;
    }


    finalStats["+0"] = {
        val: stats["+0"].same,
        isLimit: false,
        isDerived: false,
        isExact: true
    };

    plusloop: for (let i = 1; i < 10; i++) {
        let curI = effectValue(i);

        if (stats[curI]) {

            let isLimit = false;
            if (stats[curI].better == 0) {
                isLimit = true;
            }

            finalStats[curI] = {
                val: stats[curI].same,
                isLimit: isLimit,
                isDerived: false,
                isExact: true
            }
        } else {
            let worse = effectValue(i - 1);
            let better = effectValue(i + 1);

            if (stats[better] && finalStats[worse]) {
                finalStats[curI] = {
                    val: Math.abs(stats[worse].better - stats[better].better - stats[better].same),
                    isLimit: false,
                    isDerived: true,
                    isExact: true
                }
            } else {
                finalStats[curI] = {
                    val: stats[worse].better,
                    isLimit: false,
                    isDerived: true,
                    isExact: false
                }
                //final[hero.title] = finalStats;
                break plusloop;
            }

        }

    }

    minusLoop: for (let i = -1; i > -10; i--) {

        let curI = effectValue(i);

        if (stats[curI]) {

            let isLimit = false;
            if (stats[curI].better == 0) {
                isLimit = true;
            }

            finalStats[curI] = {
                val: stats[curI].same,
                isLimit: isLimit,
                isDerived: false,
                isExact: true
            }
        } else {
            let worse = effectValue(i + 1);
            let better = effectValue(i - 1);

            if (stats[better] && finalStats[worse]) {
                finalStats[curI] = {
                    val: Math.abs(stats[worse].worse - stats[better].worse - stats[better].same),
                    isLimit: false,
                    isDerived: true,
                    isExact: true
                }
            } else {
                finalStats[curI] = {
                    val: stats[worse].worse,
                    isLimit: false,
                    isDerived: true,
                    isExact: false
                }
                //final[hero.title] = finalStats;
                break minusLoop;
            }

        }



    }

    final.types[cid] = {
        name: card.title,
        count: 0,
        origin: origin,
        type: cardType,
        rarities: finalStats
    };
    //console.log(final);
}

// calculate sums

for (let cid in { ...data, ...weaponStats }) {

    let type = null;

    let card = null;

    if (cid in heroData) {
        card = heroData[cid];
        type = "hero";
    } else if (cid in weaponData) {
        card = weaponData[cid];
        type = "weapon";
    } else {
        console.log("CRITICAL Error with " + cid);
        continue;
    }

    const origin = islandMap[card.expansion];
    //console.log(final.types[cid]);

    if (final.types[cid] == null) {
        console.log("No stats for " + card.title);
        continue;
    }

    const deltas = final.types[cid].rarities;
    const stars = cidToRarity(cid);

    for (let delta in deltas) {
        let val = deltas[delta].val;

        final.globals.cards += val;

        if (type == "hero") {
            final.globals.heroes += val;
        } else if (type == "weapon") {
            final.globals.weapons += val;
        }

        final.globals.stars[type][stars] += val;

        final.globals.rarities[type][delta] += val;

        if (final.islands[origin] == null) {
            console.log("CRITICAL Error with " + origin + " " + cid);
            continue;
        }

        final.islands[origin].cards += val;

        if (type == "hero") {
            final.islands[origin].heroes += val;
        }
        else if (type == "weapon") {
            final.islands[origin].weapons += val;
        }

        final.islands[origin].stars[type][stars] += val;

        final.islands[origin].rarities[type][delta] += val;

        final.types[cid].count += val;



    }

}

fs.writeFileSync('src/data/raw/cardStatsFinal.json', JSON.stringify(final, null, 2));
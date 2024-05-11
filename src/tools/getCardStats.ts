import { heroCid } from "@/data/heroTypeData";
import { bonus, heroRarity } from "@/types/cardRarity";
import { cardStats } from "@/types/cardStats";

import { heroTypeData } from "@/data/heroTypeData";
import { weaponCid, weaponTypeData } from "@/data/weaponTypeData";
import { weaponRarity } from "@/types/weaponRarity";
import { isInverted } from "./isInverted";
import { hasDurability } from "./hasDurability";

async function getCardStats(cid: heroCid | weaponCid, name: string) {

    console.log("Getting stats for " + name + " (" + cid + ")");

    let req = await fetch(encodeURI("https://scratchwars.cloud/cardapi?cid=" + cid + "&name=" + name));

    if (req.status != 200) {
        console.log("Error: " + req.status);
        return null;
    }

    console.log("Got stats for " + name + " (" + cid + ")");

    let data = await req.json();
    let card: heroRarity | weaponRarity | null = null;

    if (heroTypeData[cid] != undefined) {
        let newBonuses: (bonus | null)[] = [];

        data.card.bonuses.forEach((bonuses: any) => {
            let curBonuses: number[] = [];

            bonuses.forEach((bonus: any) => {
                if (bonus != "") {
                    curBonuses.push(Number(bonus.replace("+", "")));
                }
            })

            if (curBonuses.length == 1) {
                newBonuses.push({
                    value: curBonuses[0],
                    isUpgraded: false
                });
                newBonuses.push(null);
            } else {
                newBonuses.push({
                    value: curBonuses[0],
                    isUpgraded: false
                });
                newBonuses.push({
                    value: curBonuses[1],
                    isUpgraded: false
                });
            }
            //console.log(newBonuses);
        })


        card = {
            t: "hero",
            name: data.card.iname,
            cid: data.card.cid,
            energy: data.card.energy.map((energy: any) => {
                return {
                    value: Number(energy.replace("+", "")),
                    isUpgraded: false,
                }
            }),
            bonuses: newBonuses,
            isFoil: data.card.isFoil,
            primaryHealth: data.card.h1,
            secondaryHealth: data.card.h5
        }
    } else if (weaponTypeData[cid] != undefined) {
        //console.log("Weapon");

        const type = weaponTypeData[cid];

        card = {
            t: "weapon",
            name: data.card.iname,
            cid: data.card.cid,
            effects: data.card.attacks.map((effect: any, index: number) => {

                let durability = undefined;

                //console.log(type.effects[index].t);
                if (data.card.durs) {
                    if (index >= 2 && data.card.durs[index - 2] != "") {
                        durability = Number(data.card.durs[index - 2]);
                    }
                }

                return {
                    value: Number(effect.replace("+", "")),
                    isUpgraded: false,
                    durability: durability
                }
            }),
            durability: data.card.hp,
        }


    }

    if (card == null) return null;

    let stats: cardStats = {
        better: data.stats.better,
        worse: data.stats.worse,
        same: data.stats.same,
        instances: data.stats.instances,
        delta: data.stats.delta,
        sum: data.stats.sum,
        median: data.stats.median,
        card: card,
        lang: data.lang
    }

    return stats;

}

export { getCardStats }
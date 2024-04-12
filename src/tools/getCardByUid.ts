"use server";
import { heroFromUid } from "@/types/heroFromUid";
import { weaponFromUid } from "@/types/weaponFromUid";

async function getCardByUid(uid: string): Promise<heroFromUid | weaponFromUid | null> {
    "use server";
    console.log("Fetching card with uid: " + uid);
    let req = await fetch("https://www.scratchwars.cloud/public/api/card/" + uid);

    if (req.status != 200) {
        console.log("Error: " + req.status);
        return null;
    }

    let data = await req.json();

    console.log("Found card: " + data.response.iname + " ("+data.response.cid+")" +" with iid: " + data.response.iid);

    let card: heroFromUid | weaponFromUid | null = null;

    if (data.response.t == "hero") {
        card = {
            t: "hero",
            owner: data.response.owner,
            iid: data.response.iid,
            experience: {
                level: data.response.experience.level,
                xp: data.response.experience.xp,
            },
            realization: data.response.realization,
            expansion: data.response.expansion,
            card: {
                t: "hero",
                name: data.response.iname,
                cid: data.response.cid,
                energy: data.response.energy.map((energy: any) => {
                    return {
                        value: energy,
                        isUpgraded: false,
                    }
                }),
                bonuses: data.response.bonuses.map((bonus: any) => {
                    if (bonus == null) return {};
                    return {
                        value: bonus.val,
                        isUpgraded: false,
                    }
                }),
                isFoil: data.response.isFoil,
                primaryHealth: data.response.health.primary,
                secondaryHealth: data.response.health.secondary
            },
            upgradedCard: {
                t: "hero",
                name: data.response.iname,
                cid: data.response.cid,
                energy: data.response.energy_upgraded.map((energy: any, index: number) => {

                    let isUpgraded = true;

                    if (energy == 0) isUpgraded = false;

                    return {
                        value: energy + data.response.energy[index],
                        isUpgraded: isUpgraded,
                    }
                }),
                bonuses: data.response.bonuses.map((bonus: any, index: number) => {
                    if (bonus == null) return {};

                    let isUpgraded = true;

                    if (bonus.upgraded_val == 0) isUpgraded = false;

                    return {
                        value: bonus.upgraded_val + bonus.val,
                        isUpgraded: isUpgraded,
                    }
                }),
                isFoil: data.response.isFoil,
                primaryHealth: data.response.health.primary,
                secondaryHealth: data.response.health.secondary
            }
        }
    } else if (data.response.t == "weapon") {
        card = {
            t: "weapon",
            owner: data.response.owner,
            iid: data.response.iid,
            realization: data.response.realization,
            expansion: data.response.expansion,
            card: {
                t: "weapon",
                name: data.response.iname,
                cid: data.response.cid,
                durability: data.response.dur,

                effects: data.response.effects.map((effect: any) => {
                    return {
                        value: effect.val,
                        isUpgraded: false,
                        durability: effect.dur,
                    }
                }),
            },
            upgradedCard: {
                t: "weapon",
                name: data.response.iname,
                cid: data.response.cid,
                durability: data.response.dur,
                effects: data.response.effects.map((effect: any) => {

                    let isUpgraded = true;

                    if (effect.uval == 0) isUpgraded = false;

                    return {
                        value: effect.uval + effect.val,
                        isUpgraded: isUpgraded,
                        durability: effect.dur,
                    }
                }),
            }
        }
    }

    //console.log(card);
    return card;

}

export { getCardByUid };
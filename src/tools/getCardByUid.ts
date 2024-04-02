import { heroFromUid } from "@/types/heroFromUid";

async function getCardByUid(uid: string) {
    let req = await fetch("https://www.scratchwars.cloud/public/api/card/" + uid);

    if (req.status != 200) {
        console.log("Error: " + req.status);
        return null;
    }

    let data = await req.json();

    //console.log(data.response.bonuses.length);

    let card: heroFromUid = {
        owner: data.response.owner,
        iid: data.response.iid,
        experience: {
            level: data.response.experience.level,
            xp: data.response.experience.xp,
        },
        card: {
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

    //console.log(card);
    return card;

}

export { getCardByUid };
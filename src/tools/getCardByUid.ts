import { heroFromUid } from "@/types/heroFromUid";

async function getCardByUid(uid: string) {

    let req = await fetch("https://www.scratchwars.cloud/public/api/card/" + uid);

    if (req.status != 200) {
        console.log("Error: " + req.status);
        return null;
    }

    let data = await req.json();

    console.log(data.response.bonuses.length);

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
        }
    }

    console.log(card);
    return card;

}

export { getCardByUid };
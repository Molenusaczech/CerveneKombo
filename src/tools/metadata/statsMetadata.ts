import { cardStats } from "@/types/cardStats";
import { Metadata } from "next";
import { statsDescription } from "./embedDescription";
import getTypeData from "../types/getTypeData";

export default function statsMetadada(data: cardStats): Metadata {

    const cid = data.card.cid
    const name = data.card.name

    const type = getTypeData(cid)

    return {
        title: "Červené kombo - "+name + " (" + type?.typeData.cname.CS + ")",
        description: "Statistiky karty " + name,
        openGraph: {
            title: name + " - " + type?.typeData.cname.CS,
            description: statsDescription(data),
            url: "https://ck.mole.lol/stats/" + cid + "/" + name,
            siteName: "Červené kombo",
            locale: "cs_CZ",
            type: "website",
            images: [
                {
                    url: "https://ck.mole.lol/image/" + cid + "/" + name+".png",
                    width: 640,
                    height: 894,
                    alt: name + " - " + type?.typeData.cname.CS
                }
            ]
        }
    };
}
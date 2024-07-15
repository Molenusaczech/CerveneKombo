import { cardStats } from "@/types/cardStats";
import { Metadata } from "next";
import { statsDescription } from "./embedDescription";
import getTypeData from "../types/getTypeData";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";

export default function statsNotFoundMetadata(name: string, cid: heroCid | weaponCid): Metadata {
    const type = getTypeData(cid)

    return {
        title: "Červené kombo - Statistiky karty nenalezeny",
        description: "Karta "+name+" ("+type?.typeData.cname.CS+") nenalezena",
        openGraph: {
            title: "Statistiky karty nenalezeny",
            description: "Karta "+name+" ("+type?.typeData.cname.CS+") nenalezena",
            url: "https://cervenekombo.vercel.app/stats/" + cid + "/" + name,
            siteName: "Červené kombo",
            locale: "cs_CZ",
            type: "website",
        }
    };
}
import Card from "@/components/card";
import CrossStats from "@/components/crossStats/crossStats";
import CardStats from "@/components/stats";
import Unique from "@/components/unique";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import { statsDescription } from "@/tools/embed/embedDescription";
import { getCardStats } from "@/tools/getCardStats";
import getTypeData from "@/tools/types/getTypeData";
import type { Metadata } from "next";

export async function generateMetadata(
    { params }: { params: { cid: string, name: string } }
): Promise<Metadata> {

    const cid = decodeURIComponent(params.cid) as heroCid | weaponCid

    const data = await getCardStats(cid, decodeURIComponent(params.name))

    const type = getTypeData(cid)

    if (data == null) return ({
        title: "Červené kombo - Statistiky karty nenalezeny",
        description: "Statistiky karty nenalezeny",
        openGraph: {
            title: "Statistiky karty nenalezeny",
            description: "Statistiky karty nenalezeny",
            url: "https://cervenekombo.vercel.app/stats/" + params.cid + "/" + params.name,
            siteName: "Červené kombo",
            locale: "cs_CZ",
            type: "website",
        }
    })

    return {
        title: "Červené kombo - "+decodeURIComponent(params.name) + " (" + type?.typeData.cname.CS + ")",
        description: "Statistiky karty " + decodeURIComponent(params.name),
        openGraph: {
            title: decodeURIComponent(params.name) + " - " + type?.typeData.cname.CS,
            description: statsDescription(data),
            url: "https://cervenekombo.vercel.app/stats/" + params.cid + "/" + params.name,
            siteName: "Červené kombo",
            locale: "cs_CZ",
            type: "website",
            images: [
                {
                    url: "https://cervenekombo.vercel.app/image/" + params.cid + "/" + params.name,
                    width: 640,
                    height: 894,
                    alt: decodeURIComponent(params.name) + " - " + type?.typeData.cname.CS
                }
            ]
        }
    };
}

export default async function Stats({ params }: { params: { cid: string, name: string } }) {
    "use server";
    // create state

    const cid: heroCid | weaponCid = decodeURIComponent(params.cid) as heroCid | weaponCid

    const data = await getCardStats(cid, decodeURIComponent(params.name))

    if (data == null) return (
        <div>
            Error - statistiky nenalezeny... Zkontroluj prosím správnost jména a druhu
            <br></br>Pokud jsi si jistý, že jsi zadával správně, kontaktuj prosím administrátora
        </div>)

    return (
        <div>

            <Card data={data.card} width={500} />

            <CardStats better={data.better} worse={data.worse} same={data.same} delta={data.delta} />

            <Unique instances={data.instances} />

            {/*JSON.stringify(data)*/}

            <CrossStats card={data.card} delta={data.delta} />


        </div>
    )

}

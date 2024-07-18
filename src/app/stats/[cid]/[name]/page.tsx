import Card from "@/components/card";
import CrossStats from "@/components/crossStats/crossStats";
import CardStats from "@/components/stats";
import Unique from "@/components/unique";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import { statsDescription } from "@/tools/metadata/embedDescription";
import { getCardStats } from "@/tools/getCardStats";
import getTypeData from "@/tools/types/getTypeData";
import type { Metadata } from "next";
import statsMetadada from "@/tools/metadata/statsMetadata";
import statsNotFoundMetadata from "@/tools/metadata/statsNotFoundMetadata";
import { Button } from "@mui/material";

export async function generateMetadata(
    { params }: { params: { cid: string, name: string } }
): Promise<Metadata> {

    const cid = decodeURIComponent(params.cid) as heroCid | weaponCid

    const name = decodeURIComponent(params.name)

    const data = await getCardStats(cid, decodeURIComponent(name))

    if (data == null) return statsNotFoundMetadata(name, cid)

    return statsMetadada(data)
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
            <div>
                <Button variant="contained" href={`/image/${encodeURIComponent(cid)}/${encodeURIComponent(data.card.name)}.png`}>Stáhnout obrázek karty</Button>
            </div>

            {/*JSON.stringify(data)*/}

            <CrossStats card={data.card} delta={data.delta} />


        </div>
    )

}

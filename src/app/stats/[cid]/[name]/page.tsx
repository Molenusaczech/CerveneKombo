import Card from "@/components/card";
import CardStats from "@/components/stats";
import Unique from "@/components/unique";
import { getCardStats } from "@/tools/getCardStats";

export default async function Stats({ params }: { params: { cid: string, name: string } }) {
  "use server";
  // create state

    const data = await getCardStats(decodeURIComponent(params.cid), decodeURIComponent(params.name))

    if (data == null) return (
    <div> 
        Error - statistiky nenalezeny... Zkontroluj prosím správnost jména a druhu 
        <br></br>Pokud jsi si jistý, že jsi zadával správně, kontaktuj prosím administrátora
    </div>)

    return (
        <div>

            <Card data={data.card} width={500} />

            <CardStats better={data.better} worse={data.worse} same={data.same} delta={data.delta}/>
            
            <Unique instances={data.instances} />

            {/*JSON.stringify(data)*/}

    
        </div>
    )

}
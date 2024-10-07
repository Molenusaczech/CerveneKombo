"use server";

import CardTypeDetails from "@/components/card-type-page";
import TypeInfo from "@/components/type/typeInfo";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import getTypeData from "@/tools/types/getTypeData";

export async function generateMetadata(
  { params }: { params: { cid: heroCid | weaponCid } }
) {

  const cardType = getTypeData(params.cid)

  if (!cardType) return {
    title: "Červené kombo - Typ karty nenalezen",
    description: "Typ karty nenalezen",
    openGraph: {
      title: "Typ karty nenalezen",
      description: "Typ karty nenalezen",
      url: "https://ck.mole.lol/type/" + params.cid,
      siteName: "Červené kombo",
      locale: "cs_CZ",
      type: "website"
    }
  };

  const { typeData, type, curStats, island, totalCards, typeStats } = cardType;

  return {
    title: "Červené kombo",
    description: "Detail typu karty",
    openGraph: {
      title: typeData.cname.CS + " - Detaily typu karty",
      description: typeStats.count + " karet, " + island,
      url: "https://ck.mole.lol/type/" + params.cid,
      siteName: "Červené kombo",
      locale: "cs_CZ",
      type: "website",
      images: [
        {
          url: "https://ck.mole.lol"+typeData.imgUrl,
          width: 640,
          height: 894,
          alt: typeData.cname.CS + " - Detaily typu karty"
        }
      ]
    }
  };
}

export default async function Scan({ params }: { params: { cid: heroCid | weaponCid } }) {
  return (
    <div>
      
      {/*<TypeInfo cid={params.cid} />*/}

      <CardTypeDetails type={params.cid} />

      {/*JSON.stringify(data)*/}

    </div>
  )
}

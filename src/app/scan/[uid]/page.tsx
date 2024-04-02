import Image from "next/image";

import Card from "@/components/card";
import { heroRarity } from "@/types/cardRarity";
import { getCardByUid } from "@/tools/getCardByUid";

import { useState } from "react";

import UidLookup from "@/components/uidLookup";

export default async function Scan({ params }: { params: { uid: string } }) {
  "use server";
  // create state

  const data = await getCardByUid(params.uid)

  if (!data) return (<div> Error </div>)

  return (
    <div>
      <UidLookup params={{ data: data }} />

      {/*JSON.stringify(data)*/}

    </div>
  )
}

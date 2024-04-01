import Image from "next/image";

import Card from "@/components/card";
import { heroRarity } from "@/types/cardRarity";
import { getCardByUid } from "@/tools/getCardByUid";

import { useState } from "react";

export default async function Scan({ params }: { params: { uid: string } }) {

  // create state

  const data = await getCardByUid(params.uid)

  if (!data) return (<div> Error </div>)

  return (
    <div>
      {/*<h1> Home </h1>
      <h1> Home </h1>
  <h1> Home </h1>*/}
      <Card data={data.card} />

      {JSON.stringify(data)}

    </div>
  )
}

"use client";

import GetDecksFromReplay from "@/tools/replay/getDecksFromReplay";
import { replay } from "@/types/replay/replay";
import Card from "../card";

export default function ReplayView(props: {
    data: replay
}) {
    "use client"

    const data = props.data;

    //console.log(data)

    const decks = GetDecksFromReplay(data);

    console.log(decks);

    return (
        <div className="grid grid-cols-6">
            
        <Card data={decks[0].hero} height={400}/>

        {decks[0].weapons.map((weapon) => {
            return <Card data={weapon} height={300}/>

        })}

        <Card data={decks[1].hero} height={400}/>
            
        {decks[1].weapons.map((weapon) => {
            return <Card data={weapon} height={300}/>

        })}

        </div>
    )
}
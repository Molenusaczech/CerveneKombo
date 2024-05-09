"use client";

import GetDecksFromReplay from "@/tools/replay/getDecksFromReplay";
import { replay } from "@/types/replay/replay";
import Card from "../card";

export default function ReplayView(props: {
    data: replay
}) {
    "use client"

    const data = props.data;

    console.log(data)

    const decks = GetDecksFromReplay(data);

    console.log(decks);

    return (
        <div>
            
        <Card data={decks[0].hero} height={400}/>

        <Card data={decks[1].hero} height={400}/>
            
        </div>
    )
}
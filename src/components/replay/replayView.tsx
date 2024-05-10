"use client";

import GetDecksFromReplay from "@/tools/replay/getDecksFromReplay";
import { replay } from "@/types/replay/replay";
import Card from "../card";
import getReplayState from "@/tools/replay/getReplayState";
import ReplayState from "./replayState";
import { useState } from "react";
import { Button } from "@mui/material";

export default function ReplayView(props: {
    data: replay
}) {
    "use client"

    const [index, setIndex] = useState(0);

    const data = props.data;

    console.log(data)

    const decks = GetDecksFromReplay(data);

    //console.log(decks);

    const state = getReplayState(data, decks, index);

    return (
        <>
            {/*<div className="grid grid-cols-6">

                <Card data={decks[0].hero} height={400} />

                {decks[0].weapons.map((weapon, index) => {
                    return (
                        <div key={index}>
                            <Card data={weapon} height={300} />
                        </div>
                    )

                })}

            </div>

            <div className="grid grid-cols-6">

                <Card data={decks[1].hero} height={400} />

                {decks[1].weapons.map((weapon, index) => {
                    return (
                        <div key={index}>
                            <Card data={weapon} height={300} />
                        </div>
                    )

                })}

            </div>*/}

            <Button onClick={() => setIndex(index - 1)} variant="contained" disabled={index == 0}>Previous</Button>
            Current index: {index} ({data.events[index].type})
            <Button onClick={() => setIndex(index + 1)} variant="contained" disabled={data.events.length <= index}>Next</Button>


            <ReplayState state={state} />
        </>
    )
}
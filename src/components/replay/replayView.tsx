"use client";

import GetDecksFromReplay from "@/tools/replay/getDecksFromReplay";
import { replay } from "@/types/replay/replay";
import Card from "../card";
import getReplayState from "@/tools/replay/getReplayState";
import ReplayState from "./replayState";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function ReplayView(props: {
    data: replay
}) {
    "use client"

    const [index, setIndex] = useState(0);

    const data = props.data;

    //console.log(data)

    const decks = GetDecksFromReplay(data);

    //console.log(decks);

    const state = getReplayState(data, decks, index);

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            switch (event.key) {
                case 'ArrowRight':
                    //console.log(data.events.length, index);
                    setIndex((prevIndex) => {
                        //console.log(prevIndex, prevIndex + 1);
                        return prevIndex + 1 < data.events.length ? prevIndex + 1 : prevIndex;
                    });
                    break;
                case 'ArrowLeft':
                    setIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : 0);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="p-1">
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

            <Button onClick={() => setIndex(index - 1)} variant="contained" disabled={index == 0}>⬅️</Button>
            <Button onClick={() => setIndex(index + 1)} variant="contained" disabled={data.events.length <= index + 1}>➡️</Button>
            Aktuální akce: {index}. ({data.events[index].type})

            <div className="p-2">
                <ReplayState state={state} />
            </div>
        </div>
    )
}
"use client";

import { heroFromUid } from "@/types/heroFromUid";
import Card from "@/components/card";

import { useState } from "react";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import LabeledVal from "./labeledVal";

import LevelBar from "./levelBar";

export default function UidLookup(props: { data: heroFromUid }) {
    "use client";

    const [isUpgraded, setIsUpgraded] = useState(false);

    const data = props.data;

    const cardData = isUpgraded ? data.upgradedCard : data.card;


    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        console.log(newAlignment);
        if (newAlignment != null) {
            setIsUpgraded(!isUpgraded);
        }
    };

    return (
        <div>
            {/*<h1> Home </h1>
        <h1> Home </h1>
    <h1> Home </h1>*/}
            <Card data={cardData} height={700} />
            <ToggleButtonGroup
                value={isUpgraded ? "upgraded" : "physical"}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="physical" aria-label="Fyzická karta">
                    Fyzická Karta
                </ToggleButton>
                <ToggleButton value="upgraded" aria-label="Vylepšená karta">
                    Vylepšená Karta
                </ToggleButton>
            </ToggleButtonGroup>
            <LabeledVal topText="Vlastník karty" botText={data.owner} color="#4fc487" />

            <LevelBar xp={data.experience.xp} />

            <br></br>

            {JSON.stringify(data)}

        </div>
    )
}
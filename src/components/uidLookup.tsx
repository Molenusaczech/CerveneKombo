"use client";

import { heroFromUid } from "@/types/heroFromUid";
import HeroCard from "@/components/hero";

import { useState } from "react";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import LabeledVal from "./labeledVal";

import LevelBar from "./levelBar";

import Card from "./card";
import { weaponFromUid } from "@/types/weaponFromUid";
import CardStats from "@/components/stats";
import { cardStats } from "@/types/cardStats";

export default function UidLookup(props: { data: heroFromUid | weaponFromUid, stats: cardStats }) {
    "use client";

    const [isUpgraded, setIsUpgraded] = useState(false);

    const data = props.data;
    const stats = props.stats;

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
            <Card data={cardData} />
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

            {data.owner &&<LabeledVal
                topText="Vlastník karty"
                botText={data.owner}
                color="#4fc487"
            />}

            {data.t == "hero" &&<LevelBar xp={data.experience.xp} />}

            <CardStats better={stats.better} worse={stats.worse} same={stats.same} delta={stats.delta}/>

            <br></br>

            {JSON.stringify(data)}

        </div>
    )
}
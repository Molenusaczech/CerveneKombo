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

import { langData } from "@/data/langs";

import Unique from "@/components/unique";
import realizationMsgs from "@/data/realizationMsgs";
import CrossStats from "./crossStats/crossStats";

export default function UidLookup(props: {
    data: heroFromUid | weaponFromUid,
    stats: cardStats | null
}) {
    "use client";

    const [isUpgraded, setIsUpgraded] = useState(false);

    const data = props.data;
    const stats = props.stats;

    const cardData = isUpgraded ? data.upgradedCard : data.card;


    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        //console.log(newAlignment);
        if (newAlignment != null) {
            setIsUpgraded(!isUpgraded);
        }
    };

    return (
        <div className="grid grid-cols-1">
            <div>
                <div>
                    <Card data={cardData} width={500} />
                </div>
                <div>
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
                </div>
            </div>
            <div>
                <div className="grid grid-cols-4 gap-2">

                    {data.owner && <LabeledVal
                        topText="Vlastník karty"
                        botText={data.owner}
                        color="#4fc487"
                    />}

                    {stats && stats.lang && <LabeledVal
                        topText="Jazyk karty"
                        botText={langData[stats.lang]}
                        color="#4fc487"
                    />}

                    {data.realization && <LabeledVal
                        topText="Realizace"
                        botText={realizationMsgs[data.realization]}
                        color="#4fc487"
                    />}

                    {data.expansion && <LabeledVal
                        topText="Rozšíření"
                        botText={data.expansion}
                        color="#4fc487"
                    />}

                </div>

                {data.t == "hero" && <LevelBar xp={data.experience.xp} />}

                {stats && 
                <CardStats better={stats.better} worse={stats.worse} same={stats.same} delta={stats.delta} />
                }

                {!stats && <div>Statistiky nenalezeny - Prosím kontaktuj administrátora</div>}

                {stats && <Unique instances={stats.instances} />}

                {stats && cardData && <CrossStats card={cardData} delta={stats.delta} />}

            </div>
            {/*JSON.stringify(data)*/}

        </div>
    )
}
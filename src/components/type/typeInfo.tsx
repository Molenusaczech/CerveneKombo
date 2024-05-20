"use client";

import { heroCid, heroTypeData } from "@/data/heroTypeData";
import { weaponCid, weaponTypeData } from "@/data/weaponTypeData";
import EffectImg from "../images/effectImg";
import { effectName, weaponTypeEffect } from "@/types/effects";
import { Button } from "@mui/material";

import { useState } from "react";

import theme from "@/tools/theme";
import { ThemeProvider } from "@emotion/react";

const heroData = heroTypeData;
const weaponData = weaponTypeData;

import Stack from '@mui/material/Stack';
import DaytimeImg from "../images/daytimeImg";
import effectNames from "@/data/effectNames";
import HealthImg from "../images/healtImg";

const heroIndexesMap = [
    0, 1, 2, 5, 8, 11, 3, 6, 9, 12, 4, 7, 10, 13
]

const weaponIndexesMap = [
    0, 1, 9, 8, 7, 6, 5, 4, 3, 2
]

import cardStats from "@/data/cardStats";

import { heroStats, weaponStats } from "@/data/statCounts";
import Chart from "react-google-charts";
import BonusStats from "./bonusStats";
import { islandName } from "@/types/chartData";
import { hasDurability } from "@/tools/hasDurability";
import TypeCountStats from "./typeCountStats";
import getTypeData from "@/tools/types/getTypeData";

const islandMap = {
    "Artemis": "BioTech",
    "Anubis": "BioTech",
    "Canbalandia": "Canbalandia",
    "Canbaland": "Canbalandia",
    "Vampiria": "Vampiria",
    "Zepplandia": "Zepplandia",
    "Spinbay": "Spinbay",
    "Middlemyst": "Middlemyst",
    "Techlandia": "BioTech",
    "Biolandia": "BioTech",
}

export default function TypeInfo(props: { cid: heroCid | weaponCid }) {
    "use client";

    const [curEffectIndex, setCurEffectIndex] = useState<number>(0);
    const [isDurability, setIsDurability] = useState<boolean>(false);


    let allTypeData = getTypeData(props.cid);

    if (!allTypeData) return <div>Chyba</div>;

    let { typeData, type, curStats, island, totalCards, typeStats } = allTypeData;

    if (!typeData) return <div>Typ nenalezen</div>;

    if (!curStats) return <div>Statistiky nenalezeny</div>;

    if (island === null) return <div>Ostrov nenalezen</div>;

    if (type === null) return <div>Typ nenalezen</div>;

    let mappedIndex = null;
    if (type === "hero") {
        mappedIndex = heroIndexesMap[curEffectIndex];
    } else {
        mappedIndex = weaponIndexesMap[curEffectIndex];
    }

    let hasDurability = false;

    if (type === "weapon") {
        hasDurability = ('dur' in curStats[mappedIndex]);
    }

    if (isDurability && !hasDurability) {
        setIsDurability(false);
    }

    //console.log(island)

    return (
        <ThemeProvider theme={theme}>

            <h1>{typeData.cname.CS} - Statistiky</h1>

            <TypeCountStats
                data={typeStats}
                total={totalCards}
            />

            DISCLAIMER: Většina těchto statistik jsou založené na vypovídajícím vzorku karet z SWO, nemusí být přesné
            {type === "hero" && <>

                <div className="grid h-full w-full grid-cols-4 gap-2 p-1">

                    <Button className="col-span-2" variant={curEffectIndex === 0 ? "contained" : "outlined"} onClick={
                        () => {
                            setCurEffectIndex(0);
                        }
                    }>
                        <div className="effect">
                            <HealthImg />
                            <div className="effect__name">Základní životy</div>
                        </div>
                    </Button>

                    <Button className="col-span-2" variant={curEffectIndex === 1 ? "contained" : "outlined"} onClick={
                        () => {
                            setCurEffectIndex(1);
                        }
                    }>
                        <div className="effect">
                            <HealthImg />
                            <div className="effect__name">Týmové životy</div>
                        </div>
                    </Button>

                    {["Ráno", "Poledne", "Večer", "Noc"].map((value, index) => {
                        return (
                            <Button variant={(index + 2) === curEffectIndex ? "contained" : "outlined"} key={index} onClick={
                                () => {
                                    setCurEffectIndex(index + 2);
                                }
                            }>
                                <div key={index} className="effect">
                                    <DaytimeImg time={index} />
                                    <EffectImg effect={"add-energy"} />
                                    <div className="effect__name">{value}</div>
                                </div>
                            </Button>
                        )
                    })}


                    {
                        [
                            typeData.effects[0],
                            typeData.effects[2],
                            typeData.effects[4],
                            typeData.effects[6],
                            typeData.effects[1],
                            typeData.effects[3],
                            typeData.effects[5],
                            typeData.effects[7],
                        ].map((effect, index) => {
                            effect = effect as effectName | null;
                            if (effect === null) return (
                                <Button variant="outlined" key={index} disabled>
                                    <div key={index} className="effect">
                                        <div className="effect__name">N/A</div>
                                    </div>
                                </Button>
                            );

                            let newIndex = index + 6;

                            return (
                                <>
                                    <Button variant={newIndex === curEffectIndex ? "contained" : "outlined"} key={index} onClick={
                                        () => {
                                            setCurEffectIndex(newIndex);
                                        }
                                    }>
                                        <div key={index} className="effect">
                                            <EffectImg effect={effect} />
                                            <div className="effect__name">{effectNames[effect]}</div>
                                        </div>
                                    </Button>
                                </>
                            )

                        })}

                </div>
            </>}

            {
                type === "weapon" && <>

                    <div className="grid h-full w-full grid-cols-10 gap-2 p-1">


                        <Button className="col-span-2" variant={(0) === curEffectIndex ? "contained" : "outlined"} key={0} onClick={
                            () => {
                                setCurEffectIndex(0);
                            }
                        }>
                            <div key={0} className="effect">
                                <EffectImg effect={"heal"} />
                                <div className="effect__name">Odolnost</div>
                            </div>
                        </Button>

                        {
                            typeData.effects.map((effect, index) => {
                                effect = effect as weaponTypeEffect | null;
                                if (effect === null) return (
                                    <Button variant="outlined" key={index} disabled className="col-span-2">
                                        <div key={index} className="effect">
                                            <div className="effect__name">N/A</div>
                                        </div>
                                    </Button>
                                );

                                let newIndex = index + 1;

                                if (!effect) return (
                                    <Button variant="outlined" key={index} disabled className="col-span-2">
                                        <div key={index} className="effect">
                                            <div className="effect__name">N/A</div>
                                        </div>
                                    </Button>
                                );

                                return (
                                    <>
                                        <Button className="col-span-2" variant={newIndex === curEffectIndex ? "contained" : "outlined"} key={index} onClick={
                                            () => {
                                                setCurEffectIndex(newIndex);
                                            }
                                        }>
                                            <div key={index} className="effect">
                                                <EffectImg effect={effect.t} color={effect.f} />
                                                <div className="effect__name">{effectNames[effect.t]}</div>
                                            </div>
                                        </Button>
                                    </>
                                )

                            })}

                        <Button className="col-span-5" variant={isDurability === false ? "contained" : "outlined"} key={typeData.effects.length + 1} onClick={
                            () => {
                                setIsDurability(false);
                            }
                        }>
                            <div key="isDurTrue" className="effect">
                                Hodnota efektu
                            </div>
                        </Button>

                        <Button
                            className="col-span-5"
                            variant={isDurability === true ? "contained" : "outlined"}
                            key={typeData.effects.length + 2}
                            onClick={() => {
                                setIsDurability(true);
                            }}
                            disabled={!hasDurability}
                        >
                            <div key="isDurFalse" className="effect">
                                Odolnost efektu
                            </div>
                        </Button>

                    </div>
                </>
            }

            <BonusStats
                data={curStats[mappedIndex]}
                typeStats={typeStats}
                islandStats={cardStats.islands[island]}
                type={type as "hero" | "weapon"}
                isDurability={isDurability}
            />
        </ThemeProvider>
    )
}
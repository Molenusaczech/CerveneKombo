"use client";

import { heroCid, heroTypeData } from "@/data/heroTypeData";
import { weaponCid, weaponTypeData } from "@/data/weaponTypeData";
import EffectImg from "../images/effectImg";
import { effectName } from "@/types/effects";
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

import { heroStats, weaponStats } from "@/data/statCounts";
import bonusCountsMerge from "@/tools/types/bonusCountsMerge";
import Chart from "react-google-charts";

export default function TypeInfo(props: { cid: heroCid | weaponCid }) {
    "use client";

    const [curEffectIndex, setCurEffectIndex] = useState<number>(0);

    let typeData = null;
    let type = null;
    let curStats = null;

    if (heroData[props.cid]) {
        typeData = heroData[props.cid];
        type = "hero";
        curStats = heroStats[props.cid];
    } else if (weaponData[props.cid]) {
        typeData = weaponData[props.cid];
        type = "weapon";
        curStats = weaponStats[props.cid];
    }

    if (!typeData) return <div>Typ nenalezen</div>;

    if (!curStats) return <div>Statistiky nenalezeny</div>;

    const mappedIndex = heroIndexesMap[curEffectIndex];

    let bonusCountsChartData = bonusCountsMerge(curStats[mappedIndex]);

    let bonusCountsChartOptions = {
        title: 'Počet výskytů hodnoty vybraného bonusu',
        isStacked: true,
        legendToggle: true,
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>{props.cid} - Statistiky</h1>

                {heroIndexesMap[curEffectIndex]} <br></br>

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
                {JSON.stringify(bonusCountsChartData)}
            </div>

            <div>
                <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="400px"
                    data={bonusCountsChartData}
                    options={bonusCountsChartOptions}
                />
            </div>
        </ThemeProvider>
    )
}
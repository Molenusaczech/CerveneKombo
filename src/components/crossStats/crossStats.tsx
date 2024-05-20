"use client"

import betterSameWorse from "@/tools/types/betterSameWorse";
import getTypeData from "@/tools/types/getTypeData";
import rarityCardCounts from "@/tools/types/rarityCountCard";
import { heroRarity } from "@/types/cardRarity";
import { weaponRarity } from "@/types/weaponRarity";
import Chart from "react-google-charts";
import BonusChart from "./bonusChart";
import { Paper } from "@mui/material";
import { heroTypeData } from "@/data/heroTypeData";
import effectNames from "@/data/effectNames";
import { effectName, weaponTypeEffect } from "@/types/effects";
import { colorNames } from "@/data/colorNames";

export default function CrossStats(props: {
    card: heroRarity | weaponRarity
    delta: number
}) {
    "use client"

    let card = props.card
    let delta = props.delta

    let typeData = getTypeData(card.cid);

    if (!typeData) {
        return <div>Chyba - typeData nenalezena</div>
    }

    let deltaGraphData = betterSameWorse(rarityCardCounts(typeData.typeStats), delta);

    //console.log(deltaGraphData)

    return (
        <div>

            <Chart
                width={'100%'}
                height={'400px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={deltaGraphData}
                options={{
                    isStacked: true,
                    colors: ['#22c55e', '#9ca3af', '#ef4444'],
                }}
            />
            {card.t == "hero" && <div>
                <div className="grid grid-cols-2">
                    <BonusChart
                        value={card.primaryHealth}
                        data={typeData.curStats[0]}
                        title="Životy"
                    />
                    <BonusChart
                        value={card.secondaryHealth}
                        data={typeData.curStats[1]}
                        title="Týmové životy"
                    />
                </div>
                {[0, 1, 2, 3].map((index) => {
                    return (
                    <div className="grid grid-cols-3" key={index}>
                        <BonusChart
                            value={card.energy[index].value}
                            data={typeData.curStats[2+index*3]}
                            title={`Energie ${index+1}. doba`}
                        />
                        <BonusChart
                            value={card.bonuses[index*2]?.value}
                            data={typeData.curStats[3+index*3]}
                            title={`Effekt ${effectNames[typeData.typeData.effects[index*2] as effectName]}`}
                        />

                        <BonusChart
                            value={card.bonuses[index*2+1]?.value}
                            data={typeData.curStats[4+index*3]}
                            title={`Effekt ${effectNames[typeData.typeData.effects[index*2+1] as effectName]}`}
                        />
                    </div>
                )})}
            </div>}

            {card.t == "weapon" && <div>

                <div>
                    <BonusChart
                        value={card.durability}
                        data={typeData.curStats[0]}
                        title="Durabilita"
                    />
                </div>

                <div className="grid grid-cols-3">
                    {[0, 8, 7, 6, 5, 4, 3, 2, 1].map((mappedIndex, index) => {
                        const effectName = effectNames[(typeData.typeData.effects[index] as weaponTypeEffect).t as effectName];
                        const effectColor = colorNames[(typeData.typeData.effects[index] as weaponTypeEffect).f];

                        return (
                            <div key={index}>
                            <BonusChart
                                value={card.effects[index].value}
                                data={typeData.curStats[mappedIndex+1]}
                                title={`Effekt ${effectName} (${effectColor})`}
                            />
                            </div>
                        )
                    })
                    }
                </div>

            </div>}
            

        </div>
    )

}
"use client";

import { heroCid, heroTypeData } from "@/data/heroTypeData";
import { weaponCid, weaponTypeData } from "@/data/weaponTypeData";
import EffectImg from "../effectImg";
import { effectName } from "@/types/effects";
import { Button } from "@mui/material";

import { useState } from "react";

import theme from "@/tools/theme";
import { ThemeProvider } from "@emotion/react";

import TextField from '@mui/material/TextField';

const heroData = heroTypeData;
const weaponData = weaponTypeData;

import Stack from '@mui/material/Stack';



export default function TypeInfo(props: { cid: heroCid | weaponCid }) {
    "use client";

    const [curEffectIndex, setCurEffectIndex] = useState<number>(0);

    let typeData = null;
    let type = null;

    if (heroData[props.cid]) {
        typeData = heroData[props.cid];
        type = "hero";
    } else if (weaponData[props.cid]) {
        typeData = weaponData[props.cid];
        type = "weapon";
    }

    if (!typeData) return <div>Typ nenalezen</div>;

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>{props.cid} - Statistiky</h1>


                {type === "hero" && <>

                    <div className="grid h-full w-full grid-rows-2 gap-2">
                        {typeData.effects.map((effect, index) => {
                            effect = effect as effectName | null;
                            if (effect === null) return (
                                <Button variant="outlined" key={index} disabled>
                                    <div key={index} className="effect">
                                        <div className="effect__name">N/A</div>
                                    </div>
                                </Button>
                            );

                            return (
                                <Button variant={(index + 4) === curEffectIndex ? "contained" : "outlined"} key={index} onClick={
                                    () => {
                                        setCurEffectIndex(index + 4);
                                    }
                                }>
                                    <div key={index} className="effect">
                                        <EffectImg effect={effect} />
                                        <div className="effect__name">{effect}</div>
                                    </div>
                                </Button>
                            )
                        })}

                    </div>
                </>}
            </div>
        </ThemeProvider>
    )
}
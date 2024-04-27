

import { heroCid, heroTypeData } from "@/data/heroTypeData"
import { weaponCid, weaponTypeData } from "@/data/weaponTypeData"
import Card from "../card"
import { heroRarity } from "@/types/cardRarity"

import { useState } from "react"
import { weaponRarity } from "@/types/weaponRarity"

import { TextField } from "@mui/material"
import { editorHeroDefault, editorWeaponDefault } from "@/data/editorDefault"

import Autocomplete from "@mui/material/Autocomplete"

import autofillTypes from "@/tools/autofillTypes";

export default function TypeEditor() {
    const types = autofillTypes();

    const [curCard, setCurCard] = useState<heroRarity | weaponRarity>(editorHeroDefault)

    return (
        <div>
            <Card data={curCard} />

            <TextField
                label="Název karty"
                value={curCard.name}
                onChange={(e) => {
                    setCurCard({
                        ...curCard,
                        name: e.target.value
                    })
                }}
            />

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={types}
                value={types.find((type) => type.value == curCard.cid)}
                renderInput={(params) => <TextField {...params} label="Vyberte Kartu" />}
                onChange={(event, value) => {
                    if (value == null) {
                        return;
                    }
                    console.log(value.value);
                    if (curCard.t == "weapon" && heroTypeData[value.value] != undefined) {
                        setCurCard({
                            ...editorHeroDefault,
                            cid: value.value
                        })
                    } else if (curCard.t == "hero" && weaponTypeData[value.value] != undefined) {
                        
                        setCurCard({
                            ...editorWeaponDefault,
                            cid: value.value
                        })
                    } else {
                        setCurCard({
                            ...curCard,
                            cid: value.value
                        })
                    }

                }}
            />


            {curCard.t == "hero" &&
                <TextField
                    label="Primární zdraví"
                    value={curCard.primaryHealth}
                    onChange={(e) => {
                        setCurCard({
                            ...curCard,
                            primaryHealth: parseInt(e.target.value)
                        })
                    }}
                />}

            {curCard.t == "hero" && <TextField
                label="Sekundární zdraví"
                value={curCard.secondaryHealth}
                onChange={(e) => {
                    setCurCard({
                        ...curCard,
                        secondaryHealth: parseInt(e.target.value)
                    })
                }}
            />}
        </div>
    )
}
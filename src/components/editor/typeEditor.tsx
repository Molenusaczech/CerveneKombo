

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
import effectNames from "@/data/effectNames"

export default function TypeEditor() {
    const types = autofillTypes();

    const [curCard, setCurCard] = useState<heroRarity | weaponRarity>(editorHeroDefault)

    let type = undefined;

    if (curCard.t == "hero") {
        type = heroTypeData[curCard.cid]
    } else if (curCard.t == "weapon") {
        type = weaponTypeData[curCard.cid]
    }

    if (type == undefined) {
        return <div>Invalid Type</div>
    }

    return (
        <div>
            <Card data={curCard} />
            <div className="grid grid-cols-2 p-1">
                <TextField
                    label="Název karty"
                    fullWidth
                    className="p-1"
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
                    fullWidth
                    className="p-1"
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

            </div>
            <div className="grid grid-cols-2 p-1">
            {curCard.t == "hero" &&
                <TextField
                    label="Primární zdraví"
                    value={curCard.primaryHealth}
                    type="number"
                    className="p-1"
                    InputProps={{
                        inputProps: {
                            min: 1,
                            max: 9
                        }
                    }}
                    fullWidth
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
                type="number"
                InputProps={{
                    inputProps: {
                        min: 1,
                        max: 9
                    }
                }}
                className="p-1"
                fullWidth
                onChange={(e) => {
                    setCurCard({
                        ...curCard,
                        secondaryHealth: parseInt(e.target.value)
                    })
                }}
            />}
            </div>
            <div className="grid grid-cols-4 p-1">
                {curCard.t == "hero" && curCard.energy.map((energy, index) => (
                    <TextField
                        key={"energy" + index}
                        label={`Energie ${index + 1}`}
                        value={energy.value}

                        type="number"
                        fullWidth
                        className="p-1"

                        InputProps={{
                            inputProps: {
                                min: 1,
                                max: 9
                            }
                        }}

                        onChange={(e) => {
                            setCurCard({
                                ...curCard,
                                energy: curCard.energy.map((energy, i) => {
                                    if (i == index) {
                                        return {
                                            ...energy,
                                            value: parseInt(e.target.value)
                                        }
                                    }
                                    return energy;
                                })
                            })
                        }}
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 p-1">
                {curCard.t == "hero" && curCard.bonuses.map((bonus, index) => {
                    if (type.effects[index] == null || bonus == null) {
                        return <div></div>
                    }

                    let label = "Bonus " + (index + 1)
                    if (type.effects[index] != null) {
                        label = effectNames[type.effects[index] as keyof typeof effectNames]
                    }

                    return (
                        <TextField
                            key={"bonus" + index}
                            label={`Bonus ${index + 1}: ${label}`}
                            type="number"
                            value={bonus.value}
                            InputProps={{
                                inputProps: {
                                    min: -9,
                                    max: 9
                                }
                            }}
                            className="p-1"
                            fullWidth
                            onChange={(e) => {
                                setCurCard({
                                    ...curCard,
                                    bonuses: curCard.bonuses.map((bonus, i) => {
                                        if (bonus == null) {
                                            return null
                                        }
                                        if (i == index) {
                                            let value = parseInt(e.target.value)

                                            if (e.target.value == "") {
                                                value = 0
                                            }

                                            return {
                                                ...bonus,
                                                value: parseInt(e.target.value)
                                            }
                                        }
                                        return bonus;
                                    })
                                })
                            }}
                        />
                    );
                })}
            </div>
        </div>
    )
}
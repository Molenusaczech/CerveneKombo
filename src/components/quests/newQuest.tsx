"use client";

import autofillTypes from "@/tools/autofillTypes";
import { createQuest } from "@/tools/quests/createQuest";
import { quest, condition } from "@/types/quests/quest";
import { Autocomplete, Button, Checkbox, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

export default function NewQuest() {
    const [curQuest, setCurQuest] = useState<quest>({
        name: "",
        description: "",
        prize: "",
        cardCid: "VampPrince",
        winnerCount: 1,
        conditions: [],
        hasToOwn: false,
    });

    console.log(curQuest);

    return (
        <div>
            <h1>Nový quest</h1>
            <div>
                <TextField
                    label="Název"
                    value={curQuest.name}
                    onChange={(e) => setCurQuest({ ...curQuest, name: e.target.value })}
                />

                <TextField
                    label="Popis (Zadání)"
                    value={curQuest.description}
                    multiline
                    maxRows={10}
                    fullWidth
                    onChange={(e) => setCurQuest({ ...curQuest, description: e.target.value })}
                />

                <TextField
                    label="Výhra"
                    value={curQuest.prize}
                    onChange={(e) => setCurQuest({ ...curQuest, prize: e.target.value })}
                />

                <TextField
                    label="Počet vítězů"
                    value={curQuest.winnerCount}
                    type="number"
                    onChange={(e) => setCurQuest({ ...curQuest, winnerCount: parseInt(e.target.value) })}
                />

                <Checkbox
                    checked={curQuest.hasToOwn}
                    onChange={(e) => setCurQuest({ ...curQuest, hasToOwn: e.target.checked })}
                /> Musí být vlastníkem v app
            </div>

            <div>
                <h2>Podmínky</h2>

                Druh karty: <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={autofillTypes()}
                    renderInput={(params) => <TextField {...params} label="Vyberte Kartu" />}
                    onChange={(event, value) => {
                        if (value == null) {
                            return;
                        }
                        //console.log(value.value);
                        setCurQuest({ ...curQuest, cardCid: value.value });
                    }}
                />

                {curQuest.conditions.map((condition, index) => (
                    <div key={index}>
                        <Select
                            value={condition.target}
                            onChange={(e) => {
                                setCurQuest({
                                    ...curQuest,
                                    conditions: curQuest.conditions.map((c, i) => {
                                        if (i === index) {
                                            return {
                                                ...c,
                                                target: e.target.value as condition["target"]
                                            }
                                        } else {
                                            return c;
                                        }
                                    })
                                })
                            }}
                        >
                            <MenuItem value="energy">Energie</MenuItem>
                            <MenuItem value="bonuses">Bonusy</MenuItem>
                            <MenuItem value="primaryHealth">Primární zdraví</MenuItem>
                            <MenuItem value="secondaryHealth">Sekundární zdraví</MenuItem>
                            <MenuItem value="durability">Odolnost</MenuItem>
                        </Select>

                        <TextField
                            label="Index efektu"
                            value={condition.targetIndex}
                            disabled={condition.target !== "bonuses" && condition.target !== "energy"}
                            type="number"
                            onChange={(e) => {
                                setCurQuest({
                                    ...curQuest,
                                    conditions: curQuest.conditions.map((c, i) => {
                                        if (i === index) {
                                            return {
                                                ...c,
                                                targetIndex: parseInt(e.target.value)
                                            }
                                        } else {
                                            return c;
                                        }
                                    })
                                })
                            }}
                        />

                        <Select
                            value={condition.operator}
                            onChange={(e) => {
                                setCurQuest({
                                    ...curQuest,
                                    conditions: curQuest.conditions.map((c, i) => {
                                        if (i === index) {
                                            return {
                                                ...c,
                                                operator: e.target.value as condition["operator"]
                                            }
                                        } else {
                                            return c;
                                        }
                                    })
                                })
                            }}
                        >
                            <MenuItem value="<">{'<'}</MenuItem>
                            <MenuItem value=">">{'>'}</MenuItem>
                            <MenuItem value="<=">{'<='}</MenuItem>
                            <MenuItem value=">=">{'>='}</MenuItem>
                            <MenuItem value="==">{'=='}</MenuItem>
                        </Select>

                        <TextField
                            label="Hodnota"
                            value={condition.threshold}
                            type="number"
                            onChange={(e) => {
                                setCurQuest({
                                    ...curQuest,
                                    conditions: curQuest.conditions.map((c, i) => {
                                        if (i === index) {
                                            return {
                                                ...c,
                                                threshold: parseInt(e.target.value)
                                            }
                                        } else {
                                            return c;
                                        }
                                    })
                                })
                            }}
                        />

                        <Button variant="contained" onClick={() => {
                            setCurQuest({
                                ...curQuest,
                                conditions: curQuest.conditions.filter((_, i) => i !== index)
                            })
                        }}>Odstranit podmínku</Button>

                    </div>
                ))}

                <Button variant="contained" onClick={() => {
                    setCurQuest({
                        ...curQuest,
                        conditions: [...curQuest.conditions, {
                            target: "energy",
                            targetIndex: 0,
                            threshold: 0,
                            operator: "<",
                        }]
                    })
                }}>Přidat podmínku</Button>
            </div>

            <div>
                <Button variant="contained" onClick={async () => {
                    if (!confirm("Opravdu vytvořit quest?")) {
                        return;
                    }
                    console.log(curQuest);
                    createQuest(curQuest);
                }}>Vytvořit quest</Button>
            </div>

            <div>
                JSON questu: {JSON.stringify(curQuest)}
            </div>
        </div>
    )
}
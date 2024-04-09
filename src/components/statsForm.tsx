"use client";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Autocomplete from '@mui/material/Autocomplete';

import { useState } from "react";

import { heroTypeData } from '@/data/heroTypeData';
import { weaponTypeData } from '@/data/weaponTypeData';

import { heroCid } from '@/data/heroTypeData';
import { weaponCid } from '@/data/weaponTypeData';

export default function StatsForm() {
    "use client";
    const [name, setName] = useState<string>("");
    const [cardType, setCardType] = useState<heroCid | weaponCid | null>(null);

    let heroData = [];

    for (const [key, value] of Object.entries(heroTypeData)) {
        heroData.push({
            label: value.cname.CS,
            value: key,
        });
    }

    heroData.sort((a, b) => {
        if (a.label == undefined || b.label == undefined) {
            return 0;
        }
        return a.label.localeCompare(b.label);
    });

    let weaponData = [];

    for (const [key, value] of Object.entries(weaponTypeData)) {
        weaponData.push({
            label: value.cname.CS,
            value: key,
        });
    }

    weaponData.sort((a, b) => {
        if (a.label == undefined || b.label == undefined) {
            return 0;
        }
        return a.label.localeCompare(b.label);
    });

    const cardTypeData = [...heroData, ...weaponData];
    
    return (
        <div>
            <TextField label="Jméno Karty" variant="outlined" onChange={(change) => {
                setName(change.target.value);
            }} />

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cardTypeData}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Vyberte Kartu" />}
                onChange={(event, value) => {
                    if (value == null) {
                        return;
                    }
                    console.log(value.value);
                    setCardType(value.value);
                }}
            />

            <Button variant="outlined" href={"/stats/"+cardType+"/"+name}>Vyhledat</Button>
        </div>
    )
}
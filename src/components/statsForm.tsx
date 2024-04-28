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

import { ThemeProvider } from '@emotion/react';
import theme from '@/tools/theme';
import autofillTypes from '@/tools/autofillTypes';

export default function StatsForm() {
    "use client";
    const [name, setName] = useState<string>("");
    const [cardType, setCardType] = useState<heroCid | weaponCid | null>(null);

    const cardTypeData = autofillTypes();

    return (
        <ThemeProvider theme={theme}>
            <div className='grid grid-cols-1 gap-2'>

                <div className='text-center' style={{
                    color: 'var(--text)',
                }}>Vyhledávání hrdiny podle jména a druhu</div>

                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={cardTypeData}
                    renderInput={(params) => <TextField {...params} label="Vyberte Kartu" />}
                    onChange={(event, value) => {
                        if (value == null) {
                            return;
                        }
                        //console.log(value.value);
                        setCardType(value.value);
                    }}
                />

                <TextField label="Jméno Karty" variant="outlined" onChange={(change) => {
                    setName(change.target.value);
                }} />

                <Button variant="contained" href={"/stats/" + cardType + "/" + name} disabled={name == "" || cardType == null}>Vyhledat</Button>

                <div className='grid grid-cols-2 gap-1'>
                    <Button variant="outlined" href={"/stats/VampPrince/Mole"}>Příklad hrdiny</Button>
                    <Button variant="outlined" href={"/stats/Bow_ElderDragon/LVXB"}>Příklad zbraně</Button>
                </div>

            </div >
        </ThemeProvider>
    )
}
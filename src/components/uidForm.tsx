"use client";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import theme from '@/tools/theme';

import { useState } from "react";
import { ThemeProvider } from '@emotion/react';

export default function UidForm() {
    "use client";
    const [uid, setUid] = useState("");

    return (
        <ThemeProvider theme={theme}>
        <div className='grid grid-cols-1 gap-2'>
            <div className='text-center' style={{
                color: 'var(--text)',
            }}>Vyhledávání hrdiny podle UID (QR Kódu)</div>
            <TextField label="QR kód hrdiny" variant="outlined" onChange={(change) => {
                setUid(change.target.value);
            }}/>

            <Button variant="contained" href={"/scan/"+uid} disabled={uid == ""}>Vyhledat</Button>
        
        <div className='grid grid-cols-2 gap-1'>
            <Button variant="outlined" href={"/scan/ljf7NAesoSsHVYZ"}>Příklad hrdiny</Button>
            <Button variant="outlined" href={"/scan/20Sp53Yyj7P8nuS"}>Příklad zbraně</Button>
        </div>
        
        </div>
        </ThemeProvider>
    )
}
"use client";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useState } from "react";

export default function UidForm() {
    "use client";
    const [uid, setUid] = useState("");

    return (
        <div>
            <TextField label="QR kód hrdiny" variant="outlined" onChange={(change) => {
                setUid(change.target.value);
            }}/>

            <Button variant="outlined" href={"/scan/"+uid}>Vyhledat</Button>
        </div>
    )
}
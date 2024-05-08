"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function ReplayForm() {

    const [link, setLink] = useState<string>("");

    return (
        <div>
            Replay viewer
            <TextField label="Spectate link" onChange={
                (e) => {
                    setLink(e.target.value)
                }
            }
                value={link}
            />

            <Button href={`/replay/${encodeURIComponent(link)}`} disabled={link == ""} variant="contained">Spectate</Button>

        </div>
    )
}
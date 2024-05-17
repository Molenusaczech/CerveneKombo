"use client";
import spectateLinkChecker from "@/tools/replay/spectateLinkChecker";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function ReplayForm() {

    const [link, setLink] = useState<string>("");

    let isError = !spectateLinkChecker(link);

    return (
        <div className="grid rows-2 p-2">
            <TextField label="Divácký odkaz" onChange={
                (e) => {
                    setLink(e.target.value)
                }
            }
                value={link}
                error={isError}
                helperText={isError ? "Toto není platný divácký odkaz!" : ""}
                className="pb-2"
            />
    
            <Button href={`/replay/${encodeURIComponent(link)}`} disabled={link == "" || isError} variant="contained">Spustit záznam</Button>
            <Button href={`/replay/http%3A%2F%2Fscratchwars-online.cz%2Fcs%2Fbattles%2F87720%2Fspectate%2Fb907c00ca48a4bb992b78c86bd24c39a%2F`} variant="outlined">Příklad záznamu</Button>
        </div>
    )
}
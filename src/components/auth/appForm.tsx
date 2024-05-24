"use client";


import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import linkApp from "@/tools/auth/linkApp";

export default function AppForm() {
    "use client";

    const [appId, setAppId] = useState("");
    const [appPin, setAppPin] = useState("");

    return (
        <div>

            <TextField
                label="ID v aplikaci"
                variant="outlined"
                onChange={(change: React.ChangeEvent<HTMLInputElement>) => {
                    return setAppId(change.target.value);
                }}
            />

            <TextField
                label="PIN v aplikaci"
                variant="outlined"
                onChange={(change: React.ChangeEvent<HTMLInputElement>) => {
                    return setAppPin(change.target.value);
                }}
            />

            <Button variant="contained" onClick={() => {
                console.log(appId, appPin);

                const token = localStorage.getItem("token");

                if (!token) {
                    alert("Nejste přihlášený");
                    //window.location.href = "";
                    return;
                }

                console.log("Propojuji aplikaci");
                const isValidated = linkApp(appId, appPin, token).then((res) => {

                    if (res) {
                        alert("Aplikace byla propojena");
                        window.location.href = "/account";
                    } else {
                        alert("Něco se nepovedlo");
                    }
                });
            }}>Propojit</Button>

        </div>
    )
}
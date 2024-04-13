"use client";
import Image from "next/image";
import QRCode from "react-qr-code";
import { ThemeProvider } from '@emotion/react';
import theme from '@/tools/theme';

import { useState } from "react";
import { TextField } from "@mui/material";

export default function QRFixer() {
    "use client";

    const [link, setLink] = useState<string>("");

    return (
        <ThemeProvider theme={theme}>
            <div>

                <TextField label="Odkaz na QR Kód" variant="outlined" onChange={(change) => {
                    let link = change.target.value;

                    if (link.includes("chl=")) {
                        link = link.split("chl=")[1];
                        setLink(link);
                    }
                }}/>

                <div className="p-10">
                    <QRCode value={link} />
                </div>

            </div>
        </ThemeProvider>

    )
}
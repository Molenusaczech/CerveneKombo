"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/tools/theme";

import autofillTypes from "@/tools/autofillTypes";
import { Autocomplete } from "@mui/material";

import TextField from "@mui/material/TextField";

import { useState } from "react";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import TypeEditor from "./typeEditor";

export default function Editor() {
    return (
        <ThemeProvider theme={theme}>
            <div>

                
                <TypeEditor />


            </div>
        </ThemeProvider>
    )
}
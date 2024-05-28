"use client";
import AppForm from "@/components/auth/appForm";
import { deleteToken, getUserFromToken } from "@/tools/auth/token";
import { dbUser } from "@/types/auth/user";
import getDiscordUrl from "@/tools/discord/getDiscordUrl";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import NewQuest from "@/components/quests/newQuest";

export default function Account() {

    "use client";
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <div>
            {!loading &&

            <div>
                <NewQuest />
            </div>

            }

            {loading && <div>
                Načítám...
            </div>}
        </div>
    )
}
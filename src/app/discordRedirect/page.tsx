"use client";

import discordLogin from "@/tools/discord/discordLogin";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function discordRedirect() {

    const code = useSearchParams().get("code");

    if (!code) return (<div>Chyba</div>);

    useEffect(() => {
        const token = discordLogin(code).then((token) => {
            console.log(token);
            if (token == null) {
                console.error("Error logging in");
                return;
            }
            localStorage.setItem("token", token?.token);

            if (token.appId == null) {
                window.location.href = "/connectApp";
            } else {
                window.location.href = "/";
            }
        });

    });

    return (
        <div>
            Přihlašuji...
            prosím čekejte
        </div>
    )
}
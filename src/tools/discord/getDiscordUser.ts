"use server";

import discordAccount from "@/types/discord/discordAccount";
import getDiscordUrl from "./getDiscordUrl";

async function getDiscordUser(code: string): Promise<discordAccount | null> {
    "use server";
    console.log("getDiscordId");
    console.log(code);

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", process.env.WEBSITE_URL+"/discordRedirect");
    params.append("client_id", process.env.DISCORD_CLIENT_ID || "");
    params.append("client_secret", process.env.DISCORD_CLIENT_SECRET || "");

    const response = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params,
        
    }).then(response => response.json());

    console.log(response);

    if (response.error) {
        console.error(response.error);
        return null;
    }

    const token = response.access_token;

    const authInfo = await fetch("https://discord.com/api/users/@me", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(response => response.json());

    console.log(authInfo);

    return {
        id: authInfo.id,
        globalName: authInfo.global_name,
        avatar: "https://cdn.discordapp.com/"+authInfo.id+"/"+authInfo.avatar
    };
}

export default getDiscordUser;
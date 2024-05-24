"use server";

import discordAccount from "@/types/discord/discordAccount";
import getDiscordUser from "./getDiscordUser";

import prisma from "../db/client";
import { createToken, getUserFromToken } from "../auth/token";

async function discordLogin(code: string) {

    const account = await getDiscordUser(code);

    if (account == null) {
        console.error("Error getting account info");
        return;
    }

    console.log(account);

    const discordId = account.id;
    const globalName = account.globalName;
    const avatar = account.avatar;

    /*await prisma.user.create({
        data: {
            discordId: discordId,
            globalName: globalName,
            avatar: avatar
        }
    });*/

    const user = await prisma.user.upsert({
        where: {
            discordId: discordId
        },
        create: {
            discordId: discordId,
            globalName: globalName,
            avatar: avatar
        },
        update: {
            globalName: globalName,
            avatar: avatar
        }
    });

    console.log(user);


    const token = await createToken(user.id);

    console.log(token);

    const UserFromToken = await getUserFromToken(token);

    if (UserFromToken == null) {
        console.error("Error verifying token");
        return;
    }

    console.log(UserFromToken);

    return {
        token: token,
        userId: UserFromToken.id,
        globalName: UserFromToken.globalName,
        avatar: UserFromToken.avatar,
        appId: UserFromToken.appId
    };



}

export default discordLogin;
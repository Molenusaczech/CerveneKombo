"use server";

import prisma from "../db/client";
import loginWithApp from "../swLogin";
import { getUserFromToken } from "./token";

export default async function linkApp(appId: string, appPin: string, token: string) {

    if (!token) {
        console.log("Error: No token");
        return false;
    }

    if (!appId || !appPin) {
        console.log("Error: No appId or appPin");
        return false;
    }

    if (!await loginWithApp(appId, appPin)) {
        console.log("Error: Špatné ID nebo PIN");
        return false;
    }


    const user = await getUserFromToken(token);

    if (!user) {
        console.log("Error: Token neexistuje");
        return false;
    }

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            appId: appId
        }
    });


    return true;
}
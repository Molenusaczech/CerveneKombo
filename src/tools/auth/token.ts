"use server";

import prisma from "../db/client";

import crypto from "crypto";

async function createToken(id: number) {
    const token = await prisma.token.create({
        data: {
            userId: id,
            token: crypto.randomBytes(32).toString('hex')
        }
    });

    return token.token;
}

async function getUserFromToken(token: string) {
    const user = await prisma.token.findUnique({
        include: {
            User: true
        },
        where: {
            token: token
        }
    });

    console.log(user);

    if (user == null) {
        return null;
    }

    if (user.User == null) {
        return null;
    }

    return {
        userId: user.userId,
        globalName: user.User.globalName,
        avatar: user.User.avatar,
        appId: user.User.appId
    }
}

export { createToken, getUserFromToken };
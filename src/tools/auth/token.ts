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

    return user.User;
}

async function deleteToken(token: string) {

    if (token == "") {
        return;
    }

    await prisma.token.delete({
        where: {
            token: token
        }
    });

    return;

}

export { createToken, getUserFromToken, deleteToken };
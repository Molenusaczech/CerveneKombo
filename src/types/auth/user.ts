type dbUser = {
    id: number;
    discordId: string;
    globalName: string;
    avatar: string;
    appId: string | null;
    isAdmin: boolean;
    isOrg: boolean;
}

export type { dbUser };
"use server";

import { quest } from "@/types/quests/quest";
import { put, list, getDownloadUrl, del, copy } from "@vercel/blob"

async function createQuest(quest: quest) {
    console.log(quest);
    let fileList = await list();
    let questFileUrl = fileList.blobs.find((blob) => blob.pathname === "quests.json")?.downloadUrl;
    console.log(questFileUrl);

    if (questFileUrl === undefined) {
        await put("quests.json", JSON.stringify([quest]), {
            contentType: "application/json",
            access: "public",
            //addRandomSuffix: false,
            cacheControlMaxAge: 0
        });
    } else {
        let questData: quest[] = await fetch(questFileUrl).then((res) => res.json());
        questData.push(quest);
        await del(questFileUrl);
        await put("quests.json", JSON.stringify(questData), {
            contentType: "application/json",
            access: "public",
            //addRandomSuffix: false,
            cacheControlMaxAge: 0
        });
    }

    return true;
}

export { createQuest };
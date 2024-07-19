import getReplayFromSwo from "@/tools/replay/getReplayFromSwo";

import GetDecksFromReplay from "@/tools/replay/getDecksFromReplay";
import { Match } from "./tournamentPageTypes";

async function getMatchData(match: Match) {
    const link = match.link;

    if (!link) {
        return;
    }

    const replay = await getReplayFromSwo(link);

    const decks = GetDecksFromReplay(replay);

    if (!decks) {
        return;
    }

    console.log(decks[0].hero.cid, decks[1].hero.cid);
}

getMatchData({
    "id": 90018,
    "link": "/cs/battles/90018/spectate/01e42f7f27b24eb289594a4f6913d397/",
    "players": [
        "luky#1830",
        "Mole 06#34"
    ],
    "winner": 1,
    "timestamp": 1721146472
})
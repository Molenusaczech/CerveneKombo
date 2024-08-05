//const jsdom = require("jsdom")
import jsdom from "jsdom";
const { JSDOM } = jsdom
//const fs = require("fs")
import fs from "fs";
global.DOMParser = new JSDOM().window.DOMParser

import { Match, StandingPlayer, Tournament } from "./tournamentPageTypes";
import getChallongeStandings from "./challongeStandings";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import getReplayFromSwo from "@/tools/replay/getReplayFromSwo";
import GetDecksFromReplay from "@/tools/replay/getDecksFromReplay";

const data: Tournament[] = [];

async function scrapeTournament(url: string) {
    console.log("Scraping tournament: " + url);
    let page = await fetch(url).then(res => res.text());

    let parser = new DOMParser();
    let doc = parser.parseFromString(page, "text/html");

    const table = doc.querySelectorAll("table")[2];
    const tbody = table.querySelector("tbody");
    if (!tbody) {
        return;
    }
    const rows = tbody.querySelectorAll("tr");

    // Check if the tournament has a name
    if (!doc.querySelector("h1")) {
        return;
    }

    // Initialize tournament data

    const standings = await getChallongeStandings(doc.querySelector("iframe")?.getAttribute("src") || "");

    const players: StandingPlayer[] = standings.map(player => {
        return {
            name: player,
            deck: null
        }
    });

    let tournamentData: Tournament = {
        id: url.split("/")[5],
        name: doc.querySelector("h1")?.textContent?.trim() || "",
        link: url,
        standings: players,
        matches: [] as Match[]
    }

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        const cells = row.querySelectorAll("td");

        //console.log(cells.length);

        const link = cells[0].querySelector("a");

        if (link) {
            const href = link.getAttribute("href");
            console.log(href);

            if (!href) {
                return;
            }
            0

            // 0 = draw, 1 = player1, 2 = player2

            let match: Match = {
                id: -1,
                link: null,
                players: [],
                winner: 0,
                timestamp: 0
            }

            match.id = Number(href.split("/")[3]);
            match.link = href;
            match.timestamp = Number(cells[3].dataset.order) || -1;

            [1, 2].forEach(playerIndex => {

                let name = cells[playerIndex].childNodes[0]?.textContent?.trim() || '';
                const id = cells[playerIndex].childNodes[1]?.textContent?.trim() || '';

                let isWinner = false;

                if (name.includes("🏆")) {
                    isWinner = true;
                    match.winner = playerIndex;
                    name = name.replace("🏆", "");
                    name = name.trim();
                }
                console.log(name + id + isWinner);

                match.players.push(name + id);
            });

            tournamentData.matches.push(match);

            // Get decks if not already in standings

            const player1 = tournamentData.standings.find(player => player.name === match.players[0]);
            const player1Index = tournamentData.standings.findIndex(player => player.name === match.players[0]);
            const player2 = tournamentData.standings.find(player => player.name === match.players[1]);
            const player2Index = tournamentData.standings.findIndex(player => player.name === match.players[1]);

            if (!player1 || !player2) {
                continue;
            }

            console.log(player1.deck === null, player2.deck === null);
            if (player1.deck && player2.deck) {
                continue;
            }

            console.log("Getting decks for match " + match.id);
            const replay = await getReplayFromSwo("http://scratchwars-online.cz" + href);
            const decks = GetDecksFromReplay(replay);

            if (!decks) {
                continue;
            }

            if (!player1.deck) {
                tournamentData.standings[player1Index].deck = {
                    hero: decks[0].hero.cid,
                    weapons: decks[0].weapons.map(weapon => weapon.cid)
                };
                console.log("Found deck for " + player1.name + " " + decks[0].hero.cid);

            }

            if (!player2.deck) {
                tournamentData.standings[player2Index].deck = {
                    hero: decks[1].hero.cid,
                    weapons: decks[1].weapons.map(weapon => weapon.cid)
                };
                console.log("Found deck for " + player2.name + " " + decks[1].hero.cid);
            }
        }
    };

    tournamentData.matches.sort((a: Match, b: Match) => {
        return a.id - b.id;
    });

    // Push tournament to array
    data.push(tournamentData);
    fs.writeFileSync("src/data/raw/tournaments/rawTournamentData.json", JSON.stringify(data, null, 4));
    console.log("Tournament scraped: " + tournamentData.name);
}

scrapeTournament("https://scratchwars-online.cz/cs/tournaments/swo-ligovy-442024-157/");
//scrapeTournament("https://scratchwars-online.cz/cs/tournaments/swo-ligovy-turnaj-16-7-2024-168/");
//const jsdom = require("jsdom")
import jsdom from "jsdom";
const { JSDOM } = jsdom
global.DOMParser = new JSDOM().window.DOMParser

import { Match, StandingPlayer, Tournament, TournamentData } from "./tournamentPageTypes";
import getChallongeStandings from "./challongeStandings";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import getReplayFromSwo from "@/tools/replay/getReplayFromSwo";
import GetDecksFromReplay from "@/tools/replay/getDecksFromReplay";
import { addTournament, deckMatchup, playerMatch, playerStanding } from "./tournamentDataStore";


async function scrapeTournament(url: string) {
    console.log("Scraping tournament: " + url);
    // Get the tournament page
    let page = await fetch(url, {
        cache: "force-cache" // Static data
    }).then(res => res.text());

    // Initialize DOM parser
    let parser = new DOMParser();
    let doc = parser.parseFromString(page, "text/html");

    // Get the table with matches
    const table = doc.querySelectorAll("table")[2];
    const tbody = table.querySelector("tbody");
    if (!tbody) {
        return;
    }

    // Check if the tournament has a name
    if (!doc.querySelector("h1")) {
        return;
    }

    // Get standings
    const standings = await getChallongeStandings(doc.querySelector("iframe")?.getAttribute("src") || "");

    const players: StandingPlayer[] = standings.map(player => {
        return {
            name: player,
            deck: null
        }
    });

    // Initialize tournament data
    let tournamentData: Tournament = {
        id: url.split("/")[5],
        name: doc.querySelector("h1")?.textContent?.trim() || "",
        link: url,
        standings: players,
        matches: []
    }

    // Get all matches
    const rows = tbody.querySelectorAll("tr");

    for (let i = 0; i < rows.length; i++) {
        // Get data from each match
        const row = rows[i];
        const cells = row.querySelectorAll("td");
        const link = cells[0].querySelector("a");

        if (link) {
            const href = link.getAttribute("href");
            console.log(href);

            // Skip if no link
            if (!href) {
                return;
            }


            // 0 = draw, 1 = player1, 2 = player2

            // Set fallback match data
            let match: Match = {
                id: -1,
                link: null,
                players: [],
                winner: 0,
                timestamp: 0
            }

            // Get match data
            match.id = Number(href.split("/")[3]);
            match.link = href;
            match.timestamp = Number(cells[3].dataset.order) || -1;

            // Get players
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

                match.players.push(name + id);
            });

            tournamentData.matches.push(match);

            // Get decks if not already in standings
            const player1 = tournamentData.standings.find(player => player.name === match.players[0]);
            const player2 = tournamentData.standings.find(player => player.name === match.players[1]);

            // Skip if players are not in standings
            if (!player1 || !player2) {
                continue;
            }

            // Skip if both players already have decks
            if (player1.deck && player2.deck) {
                continue;
            }

            // Get decks from replay
            console.log("Getting decks for match " + match.id);
            const replay = await getReplayFromSwo("http://scratchwars-online.cz" + href);
            const decks = GetDecksFromReplay(replay);

            // Skip if no decks found
            if (!decks) {
                continue;
            }

            // Set decks if not already set
            if (!player1.deck) {
                player1.deck = {
                    t: "f",
                    hero: decks[0].hero,
                    weapons: decks[0].weapons
                };
                console.log("Found deck for " + player1.name + " " + decks[0].hero.cid);
            }
            if (!player2.deck) {
                player2.deck = {
                    t: "f",
                    hero: decks[1].hero,
                    weapons: decks[1].weapons
                };
                console.log("Found deck for " + player2.name + " " + decks[1].hero.cid);
            }
        }
    };

    // Sort matches by id
    tournamentData.matches.sort((a: Match, b: Match) => {
        return a.id - b.id;
    });

    // Parse the tournament stats

    // Add the placement to each player
    tournamentData.standings.forEach((player, index) => {
        playerStanding(player.name, index);
    });

    // Add matches to stats
    tournamentData.matches.forEach(match => {

        // Player stats
        playerMatch(match.players[0], match.players[1], match.winner);


        let player1Deck = tournamentData.standings.find(player => player.name === match.players[0])?.deck;
        let player2Deck = tournamentData.standings.find(player => player.name === match.players[1])?.deck;

        if (!player1Deck || !player2Deck || player1Deck.t === "s" || player2Deck.t === "s") {
            return;
        }

        // Card stats
        deckMatchup(player1Deck, player2Deck, match.winner);
    });


    // Push tournament to array
    addTournament(tournamentData);
    console.log("Tournament scraped: " + tournamentData.name);
}

scrapeTournament("https://scratchwars-online.cz/cs/tournaments/swo-ligovy-442024-157/");
//scrapeTournament("https://scratchwars-online.cz/cs/tournaments/swo-ligovy-turnaj-16-7-2024-168/");
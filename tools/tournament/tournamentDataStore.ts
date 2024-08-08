import { Duel, Player } from "teslo";
import { Tournament, TournamentData } from "./tournamentPageTypes";
import fs from "fs";

const data: TournamentData = {
    tournaments: [],
    heroes: {},
    weapons: {},
    players: {}
};

function updateFile(): void {
    // Save data to file
    fs.writeFileSync("src/data/raw/tournaments/rawTournamentData.json", JSON.stringify(data, null, 4));
}

function addTournament(tournament: Tournament): void {
    // Adds a tournament and saves the data to file

    if (!tournament.standings) {
        throw new Error("Tournament has no standings");
    }
    
    // Simplify decks to CID to save space
    tournament.standings = tournament.standings.map(player => {

        if (!player.deck) {
            return player;
        }

        if (player.deck.t === "f") {
            player.deck = {
                t: "s",
                hero: player.deck.hero.cid,
                weapons: player.deck.weapons.map(weapon => weapon.cid)
            };
        }
        return player;
    });

  data.tournaments.push(tournament);
  updateFile();
}

function initPlayer(player: string): void {
    // Initializes a player in the data store

    if (!data.players[player]) {
        data.players[player] = {
            name: player,
            elo: 1000,
            wins: 0,
            plays: 0,
            tournaments: 0,
            placements: [],
            opponents: {}
        };
    }
}

function playerMatch(player1: string, player2: string, result: number): void {
    // Adds a match between two players and updates their stats

    // If players don't exist, create them
    initPlayer(player1);
    initPlayer(player2);

    // Get players
    const player1Data = data.players[player1];
    const player2Data = data.players[player2];


    // Update player stats
    player1Data.plays++;
    player2Data.plays++;

    // Init opponents if they don't exist
    if (!player1Data.opponents[player2]) {
        player1Data.opponents[player2] = {
            wins: 0,
            plays: 0
        };
    }
    if (!player2Data.opponents[player1]) {
        player2Data.opponents[player1] = {
            wins: 0,
            plays: 0
        };
    }

    // Add match to opponents
    player1Data.opponents[player2].plays++;
    player2Data.opponents[player1].plays++;

    const match = new Duel();

    match.addPlayer(new Player("1", player1Data.elo));
    match.addPlayer(new Player("2", player2Data.elo));

    if (result === 1) {
        player1Data.wins++;
        player1Data.opponents[player2].wins++;
        const result = match.calculate("1");
        player1Data.elo = result[0].elo;
        player2Data.elo = result[1].elo;
    } else if (result === 2) {
        player2Data.wins++;
        player2Data.opponents[player1].wins++;
        const result = match.calculate("2");
        player1Data.elo = result[0].elo;
        player2Data.elo = result[1].elo;
    }
}

function playerStanding(player: string, placement: number): void {
    // Adds a placement to a player

    // If player doesn't exist, create them
    initPlayer(player);

    // Get player
    const playerData = data.players[player];

    // Update player stats
    playerData.placements.push(placement);
    playerData.tournaments++;
}

export { data, addTournament, playerStanding, playerMatch };
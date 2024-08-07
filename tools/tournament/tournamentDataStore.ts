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

export { data, addTournament };
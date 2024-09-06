import { Duel, Player } from "teslo";
import { PlayerDeck, SimplifiedDeck, Tournament, TournamentData } from "./tournamentPageTypes";
import fs from "fs";
import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";
import { heroRarity } from "@/types/cardRarity";

const data: TournamentData = {
    tournaments: [],
    heroes: {},
    weapons: {},
    players: {}
};

function simplifyDeck(deck: PlayerDeck): SimplifiedDeck {
    // Simplifies a deck to save space
    return {
        t: "s",
        hero: deck.hero.cid,
        weapons: deck.weapons.map(weapon => weapon.cid)
    };
}

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
            player.deck = simplifyDeck(player.deck);
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

    // Init elo calculator
    const match = new Duel();
    match.addPlayer(new Player("1", player1Data.elo));
    match.addPlayer(new Player("2", player2Data.elo));

    if (result === 1) {
        player1Data.wins++;
        player1Data.opponents[player2].wins++;

        // Change elo
        const result = match.calculate("1");
        player1Data.elo = result[0].elo;
        player2Data.elo = result[1].elo;
    } else if (result === 2) {
        player2Data.wins++;
        player2Data.opponents[player1].wins++;

        // Change elo
        const result = match.calculate("2");
        player1Data.elo = result[0].elo;
        player2Data.elo = result[1].elo;
    }
}

function initHero(hero: heroCid): void {
    // Initializes a hero in the data store

    if (!data.heroes[hero]) {
        data.heroes[hero] = {
            plays: 0,
            wins: 0,
            effects: [],
            weapons: {},
            matchups: {}
        };
    }
}

function initWeapon(weapon: weaponCid): void {
    // Initializes a weapon in the data store

    if (!data.weapons[weapon]) {
        data.weapons[weapon] = {
            plays: 0,
            wins: 0,
            effects: []
        };
    }
}

function heroOccurrence(hero: heroRarity, won: boolean) {
    // Adds a hero occurrence to the data store

    // If hero doesn't exist, create them
    initHero(hero.cid);

    // Get hero stats
    const heroData = data.heroes[hero.cid];

    const heroEffects = heroData.effects;

    // Hero HP [0]

    // Loop throught card effects
    hero.bonuses.forEach((bonus, index) => {

        if (bonus === null) {
            return;
        }

        
    });

    //
}

function deckMatchup(deck1: PlayerDeck, deck2: PlayerDeck, result: number): void {
    // Adds a matchup between two decks and updates their stats

    // If heroes don't exist, create them
    initHero(deck1.hero.cid);
    initHero(deck2.hero.cid);

    // Get hero stats
    const hero1 = data.heroes[deck1.hero.cid];
    const hero2 = data.heroes[deck2.hero.cid];

    // Update hero stats
    hero1.plays++;
    hero2.plays++;

    deck1.weapons.forEach(weapon => {
        initWeapon(weapon.cid);

        // Get weapon stats
        const weapon1 = data.weapons[weapon.cid];

        // Update weapon stats
        weapon1.plays++;
    });

    deck2.weapons.forEach(weapon => {
        initWeapon(weapon.cid);

        // Get weapon stats
        const weapon2 = data.weapons[weapon.cid];

        // Update weapon stats
        weapon2.plays++;
    });


    // Hero matchup

    // Init matchup if it doesn't exist
    if (!hero1.matchups[deck2.hero.cid]) {
        hero1.matchups[deck2.hero.cid] = {
            plays: 0,
            wins: 0
        };
    }

    // Add matchup
    hero1.matchups[deck2.hero.cid].plays++;

    // Init matchup if it doesn't exist
    if (!hero2.matchups[deck1.hero.cid]) {
        hero2.matchups[deck1.hero.cid] = {
            plays: 0,
            wins: 0
        };
    }

    // Add matchup
    hero2.matchups[deck1.hero.cid].plays++;


    // Wins
    if (result === 1) {
        hero1.wins++;
        hero1.matchups[deck2.hero.cid].wins++;
        hero2.matchups[deck1.hero.cid].wins++;

        deck1.weapons.forEach(weapon => {
            data.weapons[weapon.cid].wins++;
        });
    } else if (result === 2) {
        hero2.wins++;
        hero2.matchups[deck1.hero.cid].wins++;
        hero1.matchups[deck2.hero.cid].wins++;

        deck2.weapons.forEach(weapon => {
            data.weapons[weapon.cid].wins++;
        });
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

export { data, addTournament, playerStanding, playerMatch, deckMatchup };
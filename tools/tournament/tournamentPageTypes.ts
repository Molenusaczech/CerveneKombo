import { heroCid } from "@/data/heroTypeData";
import { weaponCid } from "@/data/weaponTypeData";

type Match = {
    id: number;
    link: string | null;
    players: string[];
    winner: number;
    timestamp: number;
};

type Tournament = {
    id: string;
    name: string;
    link: string;
    matches: Match[];
    standings: StandingPlayer[];
}

type CardEffectCountStats = {
    plays: number;
    wins: number;
}

type WeaponStats = {
    plays: number;
    wins: number;
    effects: CardEffectCountStats[];
}

type HeroStats = {
    plays: number;
    wins: number;
    effects: CardEffectCountStats[];
    weapons: Record<weaponCid, WeaponStats>;
}

type PlayerDeck = {
    hero: heroCid;
    weapons: weaponCid[];
}

type StandingPlayer = {
    name: string;
    deck: PlayerDeck | null;
}

type Player = {
    name: string;
    elo: number;
    wins: number;
    plays: number;
    tournaments: number;
    placements: number[];
    opponents: Record<string, {
        plays: number;
        wins: number;
    }>;
}

type TournamentData = {
    tournaments: Tournament[];
    heroes: Record<heroCid, HeroStats>;
    weapons: Record<weaponCid, WeaponStats>;
    players: Record<string, Player>;
}

export type { Match, Tournament, StandingPlayer, TournamentData };
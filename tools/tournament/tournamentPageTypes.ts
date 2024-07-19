type Match = {
    id: number;
    link: string | null;
    players: string[];
    winner: number;
};

type Tournament = {
    id: string;
    name: string;
    link: string;
    matches: Match[];
}

export type { Match, Tournament };
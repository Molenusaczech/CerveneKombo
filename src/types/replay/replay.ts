import { gameStatData } from "./gameStatData";
import { event } from "./event";
import { gameState } from "./gameState";

type replay = {
    events: event[],
    gameStatData: gameStatData,
    gameState: gameState,
}

export type { replay }
import { gameStatData } from '@/types/replay/gameStatData';
import { gameState } from '@/types/replay/gameState';
import { replay } from '@/types/replay/replay';
import { event } from '@/types/replay/event';
import { JSDOM } from 'jsdom';
import spectateLinkChecker from './spectateLinkChecker';

function getJsonFromDeclaration(declaration: Element | undefined, index: number = 0) {
    const scriptContent = declaration?.textContent?.split("\n")[index].split("JSON.parse(")[1].split(")")[0];

    //console.log(scriptContent);

    if (scriptContent) {
        const json = JSON.parse(scriptContent);
        return JSON.parse(json);
    }
}

export default async function getReplayFromSwo(link: string): Promise<replay> {
    
    if (!spectateLinkChecker(decodeURIComponent(link))) {
        throw new Error("This is not a valid link");
    }
    
    const page = await fetch(decodeURIComponent(link));

    if (!page.ok) {
        throw new Error("Invalid link");
    }

    const { document } = new JSDOM(await page.text()).window;

    let body = document.querySelector("body");

    const script = body?.children[body.children.length - 5];

    const gameStatData = getJsonFromDeclaration(script, 1) as gameStatData;
    const gameState = getJsonFromDeclaration(script, 2) as gameState;
    const events = getJsonFromDeclaration(script, 3) as event[];
    //console.log(gameStatData);

    /*const scriptContent = script?.textContent?.split("\n")[1].split("JSON.parse(")[1].split(")")[0];

    //console.log(scriptContent);

    if (scriptContent) {
        const json = JSON.parse(scriptContent);
        console.log(json);
    }*/

    console.log("Got replay data for link ", link)

    return {
        gameStatData: gameStatData,
        gameState: gameState,
        events: events
    }
}
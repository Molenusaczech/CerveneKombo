import { rawDeltaText } from "@/components/delta";
import deltaMsgs from "@/data/deltaMsgs";
import { cardStats } from "@/types/cardStats";

function statsDescription(data: cardStats): string {
    const sum = data.better + data.same + data.worse;
    return `
        ${rawDeltaText(data.delta, data.better === 0, data.worse === 0)}
        Lepších: ${data.better} (${Math.round(100 * 100 * data.better / sum) / 100}%)
        Stejných: ${data.same} (${Math.round(100 * 100 * data.same / sum) / 100}%)
        Horších: ${data.worse} (${Math.round(100 * 100 * data.worse / sum) / 100}%)
        ${data.instances === 1 ? "Tato karta je unikátní" : "Tato karta není unikátní (je jich "+data.instances+" kopií)"}
        `;
}    

export { statsDescription };
import { bonus } from "@/types/cardRarity";

function parseBonuses(bonuses: bonus[], effectCounts: number[]) {
    let bonusArray: bonus[] = [];
    
    for (let i = 0; i < bonuses.length; i++) {
        if (i % 2 == 1 && effectCounts[Math.floor(i / 2)] == 1) {
            bonusArray.push({
                value: 9,
                isUpgraded: false
            });

        }

        bonusArray.push(bonuses[i]);
    }

    if (effectCounts[3] == 1) {
        bonusArray.push({
            value: 9,
            isUpgraded: false
        });
    }

    //console.log(bonusArray);
    return bonusArray;
}

export { parseBonuses };
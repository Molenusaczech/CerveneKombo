import { replay } from "@/types/replay/replay";
import { replayState } from "@/types/replay/replayState";

import invertPlayerIndex from "./invertPlayerIndex";

function indexOfMax(arr: number[]) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}


export default function getShieldIndexes(
    replay: replay,
    state: replayState,
    index: number,
    total: number
): number[] {

    const shields: (number | null)[] = [];


    state.players[invertPlayerIndex(state.playerTurn)].weapons.forEach((weapon, i) => {
        if (weapon.stashedEffect && weapon.stashedEffect?.type === "DEFENSE") {
            shields.push(weapon.stashedEffect.value);
        } else {
            shields.push(null);
        }
    });

    //console.log(shields);

    /*if (shields.filter(s => s == total).length === 1) {
        return [shields.indexOf(total)];
    }*/

    let permutations: number[][] = [];

    // this code is garbage, i know, if you don't like it, fix it and make a PR

    shields.forEach((shield, i) => {

        if (shield !== null && shield === total) {
            permutations.push([i]);
        } else if (shield !== null && shield < total) {

            shields.forEach((shield2, j) => {
                if (shield2 !== null && i !== j) {
                    if (shield + shield2 === total) {
                        permutations.push([i, j]);
                    } else if (shield + shield2 < total) {

                        shields.forEach((shield3, k) => {
                            if (shield3 !== null && i !== k && j !== k) {
                                if (shield + shield2 + shield3 === total) {
                                    permutations.push([i, j, k]);
                                } else if (shield + shield2 + shield3 < total) {

                                    shields.forEach((shield4, l) => {
                                        if (shield4 !== null && i !== l && j !== l && k !== l) {
                                            if (shield + shield2 + shield3 + shield4 === total) {
                                                permutations.push([i, j, k, l]);
                                            } else if (shield + shield2 + shield3 + shield4 < total) {

                                                shields.forEach((shield5, m) => {
                                                    if (shield5 !== null && i !== m && j !== m && k !== m && l !== m) {
                                                        if (shield + shield2 + shield3 + shield4 + shield5 === total) {
                                                            permutations.push([i, j, k, l, m]);
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    }

                }
            });

        };
    });

    //console.log(permutations);

    // clean up duplicates and sort them

    const finalPermutations: number[][] = [];

    permutations.forEach(permutation => {
        const cur = permutation.sort((a, b) => a - b);
        if (!finalPermutations.find(p => p.join("") === cur.join(""))) {
            finalPermutations.push(cur);
        }
    });

    //console.log(finalPermutations);

    if (finalPermutations.length == 0) {
        throw new Error("No valid shield combination found, this is 99% a bug in the code, please report it.");
    }

    if (finalPermutations.length == 1) {
        return finalPermutations[0];
    }

    // get possible used shields

    // 1 sure, 0 maybe, -1 no

    let possibleShields: number[] = [
        0,
        0,
        0,
        0,
        0
    ];

    for (let i = index; i < replay.events.length; i++) {
        //console.log(i, replay.events[i]);
        const curEvent = replay.events[i];

        if (curEvent.initiator == invertPlayerIndex(state.playerTurn)) {
            if (curEvent.type === "WEAPON_EQUIPPED") {
                //console.log("WEAPON_EQUIPPED", curEvent.data.weapon_index, i);
                const weaponIndex = curEvent.data.weapon_index

                if (possibleShields[weaponIndex] === 0) {
                    possibleShields[weaponIndex] = i-index;
                }
            } 
        } else if (curEvent.initiator == state.playerTurn) {
            if (curEvent.type === "WEAPON_DESTROYED" || curEvent.type === "WEAPON_CURSED" || curEvent.type === "WEAPON_OBLITERATED") {
                const weaponIndex = curEvent.data.weapon_index

                if (possibleShields[weaponIndex] === 0) {
                    possibleShields[weaponIndex] = i-index;
                }
            }
        } else if (curEvent.type === "STASHED_EFFECT_DESTROYED" || curEvent.type === "STASHED_EFFECT_OBLITERATED" || curEvent.type === "STASHED_EFFECT_CURSED") {
            const weaponIndex = curEvent.data.weapon_index

            if (possibleShields[weaponIndex] === 0) {
                possibleShields[weaponIndex] = -1;
            }
        }
    }

    //console.log(possibleShields);

    const validPermutations: number[][] = [];
    const validPermutationsIndexes: number[] = [];

    permutations.forEach(permutation => {
        let valid = true;
        permutation.forEach(index => {
            if (possibleShields[index] === 0) {
                valid = false;
            }
        });

        if (valid) {
            validPermutations.push(permutation);
        }
    });

    if (validPermutations.length === 1) {
        //console.log("only one valid permutation");
        //console.log(validPermutations[0]);
        return validPermutations[0];
    }

    if (validPermutations.length === 0) {
        //console.log("no valid permutations");
        //console.log(permutations);
        return permutations[0];
    }

    //console.log(validPermutations);
    return validPermutations[indexOfMax(validPermutationsIndexes)];
}
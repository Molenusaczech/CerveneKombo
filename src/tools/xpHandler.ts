const levelXPCounts: {[key: number]: number} = {
    0: 0,
    1: 0,
    2: 50,
    3: 250,
    4: 500,
    5: 800,
    6: 1150,
    7: 1550,
    8: 2000,
    9: 2500,
    10: 3100,
    11: 3800,
    12: 4600,
    13: 5500,
    14: 6500,
    15: 7600,
    16: 8800,
    17: 10100,
    18: 11500,
    19: 13000,
    20: 14600,
    21: 16300,
    22: 18100,
    23: 20000,
    24: 22000,
    25: 24500,
    26: 28000,
    27: 32000,
    28: 37000,
    29: 43000,
    30: 50000,
}

function getLevel(xp: number) {
    let level = 1;
    while (levelXPCounts[level] <= xp) {
        level++;
    }
    return level;
}

function getPercentToNextLevel(xp: number) {
    let level = getLevel(xp);

    if (level == 31) return 100;

    let prevLevelXP = levelXPCounts[level - 1];

    let nextLevelXP = levelXPCounts[level];

    let percantage = ((xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;

    //console.log(prevLevelXP, xp, nextLevelXP, percantage);

    return ((xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;
}

function getXPForLevel(level: number) {
    return levelXPCounts[level];
}

export { getLevel, getPercentToNextLevel, getXPForLevel };
const deltaMsgs = {
    "worst": "Nejslabší karta druhu, mimořádná vzácnost s nevyčíslitelnou hodnotou, ulož do trezoru",
    "-8": "Jedna z nejhorších karet druhu, velice vzácná",
    "-7": "Extrémně slabá karta, takových je málo",
    "-6": "Velmi slabá karta",
    "-5": "Slabá karta",
    "-4": "Poměrně slabá karta",
    "-3": "Nepříliš silná karta",
    "-2": "Slabší průměr",
    "-1": "Trošku slabší průměr",   
    "+0": "Průměrná karta",
    "+1": "Trošku silnější průměr",
    "+2": "Silnější průměr",
    "+3": "Solidní karta",
    "+4": "Poměrně silná karta",
    "+5": "Silná karta",
    "+6": "Velmi silná karta",
    "+7": "Extrémně silná karta, takových je málo",
    "+8": "Jedna z nejlepších karet druhu, velice vzácná",
    "best": "Nejsilnější karta druhu, mimořádná vzácnost s nevyčíslitelnou hodnotou, ulož do trezoru",
}

export type deltaValues = keyof typeof deltaMsgs;

export default deltaMsgs;
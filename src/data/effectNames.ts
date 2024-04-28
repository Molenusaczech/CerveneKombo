import { effectName } from "@/types/effects";

// all effect names from https://www.scratchwars.cz/_files/ugd/2d2083_e99d6d83a2c84f3ba189cf8910fe64b1.pdf

const effectNames: Record<effectName, string> = {
    "combo-trigger": "Odpalovač komba",
    "stop-discard": "Canbalandský bojový trik",
    "night-attack": "Vampirijský noční útok",
    "fix-weapon": "Zepplandská superakce",
    "extra-coins": "Penízky navíc",
    "add-energy": "Energie",
    "hit-hero": "Útok na hrdinu",
    "hit-weapon": "Útok na zbraň",
    "hit-anything": "Univerzální útok",
    "heal": "Léčení",
    "hit-hero-repeated": "Trvalý útok",
    "combo": "Kombo",
    "block": "Obranný štít",
    "crunch-weapon": "Canbalandský útok na zbraň",
    "all": "Požehnání",
    "vampire-bite": "Vampírský kousanec",
    "curse-weapon": "Vampírské prokletí zbraně",
    "hit-double": "Zepplandský šrapnel",
    "trap": "Zepplandská past",
    "cumulative-attack": "Kumulativní útok"
}

export default effectNames;
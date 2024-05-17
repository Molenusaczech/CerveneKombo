type effectName = "combo-trigger" | 
"stop-discard" | 
"night-attack" | 
"fix-weapon" | 
"extra-coins" | 
"add-energy" | 
"hit-hero" | 
"hit-weapon" | 
"hit-anything" | 
"heal" | 
"hit-hero-repeated" | 
"combo" | 
"block" | 
"crunch-weapon" | 
"all" | 
"vampire-bite" | 
"curse-weapon" | 
"hit-double" | 
"trap" | 
"cumulative-attack";

type effectColor = "stop" | "opt" | "go"

type weaponTypeEffect = {
    t: effectName,
    f: effectColor
}

export type { effectName, effectColor, weaponTypeEffect}
// Copy this into the console on https://scratchwars-online.cz/cs/cards/heroes/

let links = []
document.querySelectorAll('[scope="row"] a').forEach(a => links.push(a.href))
console.log(links)
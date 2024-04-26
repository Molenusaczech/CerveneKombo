const fs = require('fs');

const cards = JSON.parse(fs.readFileSync('src/data/raw/heroNames.json'));
const weaponCards = JSON.parse(fs.readFileSync('src/data/raw/weaponNames.json'));

async function getCardStats(cid, name) {

    //console.log("Getting stats for " + name + " (" + cid + ")");

    let req = await fetch(encodeURI("https://scratchwars.cloud/cardapi?cid=" + cid + "&name=" + name));

    if (req.status != 200) {
        console.log("Error: " + req.status);
        return null;
    }

    //console.log("Got stats for " + name + " (" + cid + ")");

    let data = await req.json();

    let stats = {
        better: data.stats.better,
        worse: data.stats.worse,
        same: data.stats.same,
        instances: data.stats.instances,
        delta: data.stats.delta,
        lang: data.lang
    }

    return stats;

}


async function getHeroes() {

    let heroes = {};
    let names = {};

    for (let cid in cards) {
        let card = cards[cid];
        //console.log(card.names);

        if (card.title)

            console.log("Starting with " + card.title + " (" + cid + ")");

        let curStats = {};
        let curNames = {};

        for (let delta of Object.keys(card.names)) {
            //console.log(delta);
            let names = card.names[delta];
            //console.log(card[delta]);

            curNames[delta] = {};

            finalloop: for (let name of names) {
                //console.log(name);
                let stats = await getCardStats(cid, name);
                //console.log(stats);

                if (!stats) {
                    console.log("Error 404 with " + name);
                    continue;
                };

                if (stats.delta != delta) {
                    console.log("wrong delta "+ stats.delta+" - Error with " + name + " " + stats.delta);
                    continue;
                }

                if (curNames[delta][stats.lang] == null) {
                    curNames[delta][stats.lang] = [name];
                } else {
                    curNames[delta][stats.lang].push(name);
                };

                if (stats.lang != "CS") {
                    console.log("wrong lang "+ stats.lang+" - Error with " + name + " " + stats.lang);
                    
                    continue;
                
                };

                curStats[delta] = stats;

                //console.log(stats);
                console.log("Done with " + delta + " " + name);
                break finalloop;
            }
        }

        heroes[cid] = {
            title: card.title,
            cid: card.cid,
            stats: curStats
        }

        names[cid] = {
            title: card.title,
            cid: card.cid,
            names: curNames
        }


        fs.writeFileSync('src/data/heroStats.json', JSON.stringify(heroes, null, 4));
        fs.writeFileSync('src/data/heroWorkingNames.json', JSON.stringify(names, null, 4));
    }

}

async function getWeapons() {

    let weapons = {};
    let names = {};

    for (let cid in weaponCards) {
        let card = weaponCards[cid];
        //console.log(card.names);

        if (card.title)

            console.log("Starting with " + card.title + " (" + cid + ")");

        let curStats = {};
        let curNames = {};

        for (let delta of Object.keys(card.names)) {
            //console.log(delta);
            let names = card.names[delta];
            //console.log(card[delta]);

            curNames[delta] = {};

            finalloop: for (let name of names) {
                //console.log(name);
                let stats = await getCardStats(cid, name);
                //console.log(stats);

                if (!stats) {
                    console.log("Error 404 with " + name);
                    continue;
                };

                if (stats.delta != delta) {
                    console.log("wrong delta "+ stats.delta+" - Error with " + name + " " + stats.delta);
                    continue;
                }

                if (curNames[delta][stats.lang] == null) {
                    curNames[delta][stats.lang] = [name];
                } else {
                    curNames[delta][stats.lang].push(name);
                };

                if (stats.lang != "CS") {
                    console.log("wrong lang "+ stats.lang+" - Error with " + name + " " + stats.lang);
                    
                    continue;
                
                };

                curStats[delta] = stats;

                //console.log(stats);
                console.log("Done with " + delta + " " + name);
                break finalloop;
            }
        }

        weapons[cid] = {
            title: card.title,
            cid: card.cid,
            stats: curStats
        }

        names[cid] = {
            title: card.title,
            cid: card.cid,
            names: curNames
        }


        fs.writeFileSync('src/data/weaponStats.json', JSON.stringify(weapons, null, 4));
        fs.writeFileSync('src/data/weaponWorkingNames.json', JSON.stringify(names, null, 4));
    }

}

//getHeroes();
getWeapons();
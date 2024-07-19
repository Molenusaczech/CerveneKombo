const jsdom = require("jsdom")
const { JSDOM } = jsdom
const fs = require("fs")
global.DOMParser = new JSDOM().window.DOMParser

const data = [];

async function scrapeTournament(url) {
    console.log("Scraping tournament: " + url);
    let page = await fetch(url).then(res => res.text());

    let parser = new DOMParser();
    let doc = parser.parseFromString(page, "text/html");

    const table = doc.querySelectorAll("table")[2];

    const tbody = table.querySelector("tbody");

    const rows = tbody.querySelectorAll("tr");

    console.log(rows.length);

    let tournamentData = {
        id: url.split("/")[5],
        name: doc.querySelector("h1").textContent.trim(),
        link: url,
        matches: []
    }

    rows.forEach(row => {

        const cells = row.querySelectorAll("td");

        //console.log(cells.length);

        const link = cells[0].querySelector("a");

        if (link) {
            const href = link.getAttribute("href");
            console.log(href);


            // 0 = draw, 1 = player1, 2 = player2

            let match = {
                id: null,
                link: null,
                players: [],
                winner: 0
            }

            match.id = href.split("/")[3];
            match.link = href;

            [1, 2].forEach(playerIndex => {

                let name = cells[playerIndex].childNodes[0].textContent.trim();
                const id = cells[playerIndex].childNodes[1].textContent.trim();

                let isWinner = false;

                if (name.includes("🏆")) {
                    isWinner = true;
                    match.winner = playerIndex;
                    name = name.replace("🏆", "");
                    name = name.trim();
                }
                console.log(name + id + isWinner);

                match.players.push(name + id);
            })

            tournamentData.matches.push(match);

        }
    });

    tournamentData.matches.sort((a, b) => {
        return a.id - b.id;
    });

    data.push(tournamentData);

    fs.writeFileSync("src/data/raw/tournaments/rawTournamentData.json", JSON.stringify(data, null, 4));
}

scrapeTournament("https://scratchwars-online.cz/cs/tournaments/swo-ligovy-turnaj-16-7-2024-168/");
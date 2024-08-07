async function getChallongeStandings(link: string): Promise<string[]> {
    let page = await fetch(link, {
        headers: {
            "Content-Type": "text/html",
            "User-Agent": "PostmanRuntime/7.40.0", // Mimic postman
            "Connection": "keep-alive",
            // Add your cookie in the dot env
            "Cookie": process.env.CHALLONGE_COOKIE || ""
        },
        cache: "force-cache"
    }).then(res => res.text());

    if (!page) {
        throw new Error("Invalid link");
    }

    let parser = new DOMParser();
    let doc = parser.parseFromString(page, "text/html");

    const table = doc.querySelector("table");

    if (!table) {
        throw new Error("Table not found");
    }

    const tbody = table.querySelector("tbody");

    if (!tbody) {
        return [];
    }

    const rows = tbody.querySelectorAll("tr");

    let standings: string[] = [];

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");

        const name = cells[1].textContent?.trim();

        if (name) {
            standings.push(name);
        }
    });

    return standings;
}

export default getChallongeStandings;
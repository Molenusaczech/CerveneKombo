async function getChallongeStandings(link: string): Promise<string[]> {
    let page = await fetch(link).then(res => res.text());

    let parser = new DOMParser();
    let doc = parser.parseFromString(page, "text/html");

    const table = doc.querySelectorAll("table")[0];

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
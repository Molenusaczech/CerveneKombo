const spectateLinkRegex = /http:\/\/scratchwars-online.cz\/cs\/battles\/[0-9]+\/spectate\/[0-9a-fA-F]+\//;


export default function spectateLinkChecker(link: string) {
    if (!spectateLinkRegex.test(link) && link !== "") {
        return false;
    }

    return true;
}
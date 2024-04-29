# Červené kombo
A web app with many utilities for the card game [Scratch Wars](https://www.scratchwars.cz/) made with Next.js.

## Features
- View cards by their UID (QR code) or name and type
- Fix broken QR codes by pasting their link (mostly from [SWO](https://scratchwars-online.cz))
- View chances for finding a certain card in a pack (based on the Scratch Wars API)

## Limitations
All api calls must be run on server side, because the Scratch Wars API does not support CORS. Also the stats for BattleFerda return a diffrent format than the other cards. Some cards are not supported by the API, so their stats are not available.

## How to run locally
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Command line tools
The app also includes some command line tools for easier development.
- `npm run getData` - Gets type data from the Scratch Wars API and saves it to `src/data/raw/heroData.json` and `src/data/raw/weaponData.json`
- `npm run downloadImages` - Downloads all card images from the SWO links in the file **The links are not for all cards, so some images will be missing**
- `npm run getSwoData` - Scrapes SWO for card names and saves them to `src/data/raw/heroNames.json` and `src/data/raw/weaponNames.json`. Also saves their info and uid to `src/data/raw/heroStatsCounts.json` and `src/data/raw/weaponStatsCounts.json`
- `npm run getCardStats` - Gets stats for all cards from the Scratch Wars API and saves them to `src/data/raw/heroStats.json` and `src/data/raw/weaponStats.json`. It uses the names from `src/data/raw/heroNames.json` and `src/data/raw/weaponNames.json` and saves the verified working names to `src/data/raw/heroWorkingNames.json` and `src/data/raw/weaponWorkingNames.json`
- `npm run parseStats` - Parses the data from `src/data/raw/heroStats.json` and `src/data/raw/weaponStats.json` and saves it to `src/data/cardStats.json`

## TODO
- Card variants
- Cards I dont own (Young Hero, Apple Hunter etc.)
- Handle long names (Esterminator)

## Known cards not supported by the API
for stats:
- Bojový ferda (BattleFerda)
- Krotitel jablek (WilhelmTell)
- Mladý Dobrodruh (FuriousScout)
- Rudý Overgamer (Overgamer_red)
- Udatný hoplita (Greek)
- Vladař z učebnic (Czech_Vaclav)
- Wedrytíř (Wedry)
- Opičí černokněžník (Boss_MifMif)
- Prašivý troll (Boss_Troll)
- Protivná průzkumnice (Boss_Rachael)

for uid:
- Malý mechatronik (Bonefixer)
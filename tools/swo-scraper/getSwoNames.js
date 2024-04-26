const jsdom = require("jsdom")
const { JSDOM } = jsdom
const fs = require('fs');
global.DOMParser = new JSDOM().window.DOMParser

const links = [
    "https://scratchwars-online.cz/cs/cards/heroes/crimebot/",
    "https://scratchwars-online.cz/cs/cards/heroes/balloonbot/",
    "https://scratchwars-online.cz/cs/cards/heroes/lord-of-biotechlandia/",
    "https://scratchwars-online.cz/cs/cards/heroes/fighter-of-alzahrad/",
    "https://scratchwars-online.cz/cs/cards/heroes/marsh-warrior/",
    "https://scratchwars-online.cz/cs/cards/heroes/ant-warrior/",
    "https://scratchwars-online.cz/cs/cards/heroes/robotic-battler/",
    "https://scratchwars-online.cz/cs/cards/heroes/rocket-penguin/",
    "https://scratchwars-online.cz/cs/cards/heroes/bo-woman/",
    "https://scratchwars-online.cz/cs/cards/heroes/divine-puppet/",
    "https://scratchwars-online.cz/cs/cards/heroes/purple-punk-potato/",
    "https://scratchwars-online.cz/cs/cards/heroes/lord-of-canbalandia/",
    "https://scratchwars-online.cz/cs/cards/heroes/furry-avenger/",
    "https://scratchwars-online.cz/cs/cards/heroes/brave-teacher/",
    "https://scratchwars-online.cz/cs/cards/heroes/cleverbot/",
    "https://scratchwars-online.cz/cs/cards/heroes/de-mongolfier/",
    "https://scratchwars-online.cz/cs/cards/heroes/rough-housewife/",
    "https://scratchwars-online.cz/cs/cards/heroes/woodcutter/",
    "https://scratchwars-online.cz/cs/cards/heroes/voltaic-ninja/",
    "https://scratchwars-online.cz/cs/cards/heroes/elvish-turncoat/",
    "https://scratchwars-online.cz/cs/cards/heroes/elvish-hunter/",
    "https://scratchwars-online.cz/cs/cards/heroes/esterminator/",
    "https://scratchwars-online.cz/cs/cards/heroes/gnome-warrior/",
    "https://scratchwars-online.cz/cs/cards/heroes/spinbay-governor/",
    "https://scratchwars-online.cz/cs/cards/heroes/crow-murderer/",
    "https://scratchwars-online.cz/cs/cards/heroes/pidgeon-courier/",
    "https://scratchwars-online.cz/cs/cards/heroes/star-engineer/",
    "https://scratchwars-online.cz/cs/cards/heroes/slimy-engineer/",
    "https://scratchwars-online.cz/cs/cards/heroes/the-heretic/",
    "https://scratchwars-online.cz/cs/cards/heroes/ivy-sprite/",
    "https://scratchwars-online.cz/cs/cards/heroes/cute-executioner/",
    "https://scratchwars-online.cz/cs/cards/heroes/cannibal-clown/",
    "https://scratchwars-online.cz/cs/cards/heroes/clan-shaman/",
    "https://scratchwars-online.cz/cs/cards/heroes/helmsman/",
    "https://scratchwars-online.cz/cs/cards/heroes/dogbone/",
    "https://scratchwars-online.cz/cs/cards/heroes/boilerman/",
    "https://scratchwars-online.cz/cs/cards/heroes/dragon-king/",
    "https://scratchwars-online.cz/cs/cards/heroes/henhouse-king/",
    "https://scratchwars-online.cz/cs/cards/heroes/pixie-queen/",
    "https://scratchwars-online.cz/cs/cards/heroes/salvager-boss/",
    "https://scratchwars-online.cz/cs/cards/heroes/apple-slayer/",
    "https://scratchwars-online.cz/cs/cards/heroes/bloody-dentist/",
    "https://scratchwars-online.cz/cs/cards/heroes/cannibal-chef/",
    "https://scratchwars-online.cz/cs/cards/heroes/floral-imp/",
    "https://scratchwars-online.cz/cs/cards/heroes/lady-zepplin/",
    "https://scratchwars-online.cz/cs/cards/heroes/woodland-brawler/",
    "https://scratchwars-online.cz/cs/cards/heroes/reward-hunter/",
    "https://scratchwars-online.cz/cs/cards/heroes/trophy-hunter/",
    "https://scratchwars-online.cz/cs/cards/heroes/vampire-hunter/",
    "https://scratchwars-online.cz/cs/cards/heroes/lion-hotshot/",
    "https://scratchwars-online.cz/cs/cards/heroes/the-lionhearted/",
    "https://scratchwars-online.cz/cs/cards/heroes/maestro-morti/",
    "https://scratchwars-online.cz/cs/cards/heroes/gnome-engineer/",
    "https://scratchwars-online.cz/cs/cards/heroes/woolly-conqueror/",
    "https://scratchwars-online.cz/cs/cards/heroes/masked-vigilante/",
    "https://scratchwars-online.cz/cs/cards/heroes/toadstool-shaman/",
    "https://scratchwars-online.cz/cs/cards/heroes/miss-vampiria/",
    "https://scratchwars-online.cz/cs/cards/heroes/young-adventurer/",
    "https://scratchwars-online.cz/cs/cards/heroes/cloud-walker/",
    "https://scratchwars-online.cz/cs/cards/heroes/grouchy-viking/",
    "https://scratchwars-online.cz/cs/cards/heroes/oil-knight/",
    "https://scratchwars-online.cz/cs/cards/heroes/dockworker/",
    "https://scratchwars-online.cz/cs/cards/heroes/vengeful-vulture/",
    "https://scratchwars-online.cz/cs/cards/heroes/young-hero/",
    "https://scratchwars-online.cz/cs/cards/heroes/rhino-fighter/",
    "https://scratchwars-online.cz/cs/cards/heroes/flaming-imp/",
    "https://scratchwars-online.cz/cs/cards/heroes/feathered-wanderer/",
    "https://scratchwars-online.cz/cs/cards/heroes/monkey-magician/",
    "https://scratchwars-online.cz/cs/cards/heroes/ape-sorcerer/",
    "https://scratchwars-online.cz/cs/cards/heroes/lone-gunslinger/",
    "https://scratchwars-online.cz/cs/cards/heroes/sheep-patrol/",
    "https://scratchwars-online.cz/cs/cards/heroes/pixel-mage/",
    "https://scratchwars-online.cz/cs/cards/heroes/heir-apparent/",
    "https://scratchwars-online.cz/cs/cards/heroes/knight-errant/",
    "https://scratchwars-online.cz/cs/cards/heroes/jungle-runner/",
    "https://scratchwars-online.cz/cs/cards/heroes/touchy-troll/",
    "https://scratchwars-online.cz/cs/cards/heroes/port-innkeeper/",
    "https://scratchwars-online.cz/cs/cards/heroes/ghostly-girl/",
    "https://scratchwars-online.cz/cs/cards/heroes/fabled-veteran/",
    "https://scratchwars-online.cz/cs/cards/heroes/evil-explorer/",
    "https://scratchwars-online.cz/cs/cards/heroes/coffin-bot/",
    "https://scratchwars-online.cz/cs/cards/heroes/roboexchange/",
    "https://scratchwars-online.cz/cs/cards/heroes/red-overgamer/",
    "https://scratchwars-online.cz/cs/cards/heroes/village-squire/",
    "https://scratchwars-online.cz/cs/cards/heroes/saber-toothed-tiger/",
    "https://scratchwars-online.cz/cs/cards/heroes/axemaiden/",
    "https://scratchwars-online.cz/cs/cards/heroes/tusked-colossus/",
    "https://scratchwars-online.cz/cs/cards/heroes/spinbay-dancer/",
    "https://scratchwars-online.cz/cs/cards/heroes/antique-automaton/",
    "https://scratchwars-online.cz/cs/cards/heroes/xmas-freak-fir/",
    "https://scratchwars-online.cz/cs/cards/heroes/mysterious-foreigner/",
    "https://scratchwars-online.cz/cs/cards/heroes/mysterious-golem/",
    "https://scratchwars-online.cz/cs/cards/heroes/dwarven-shepherd/",
    "https://scratchwars-online.cz/cs/cards/heroes/bonekicker-dwarf/",
    "https://scratchwars-online.cz/cs/cards/heroes/boneshaker-dwarf/",
    "https://scratchwars-online.cz/cs/cards/heroes/boneater-dwarf/",
    "https://scratchwars-online.cz/cs/cards/heroes/valiant-hoplite/",
    "https://scratchwars-online.cz/cs/cards/heroes/hungarian-hussar/",
    "https://scratchwars-online.cz/cs/cards/heroes/vampire-bunny/",
    "https://scratchwars-online.cz/cs/cards/heroes/vampire-prince/",
    "https://scratchwars-online.cz/cs/cards/heroes/lord-of-vampiria/",
    "https://scratchwars-online.cz/cs/cards/heroes/fearless-explorer/",
    "https://scratchwars-online.cz/cs/cards/heroes/ruler-from-textbook/",
    "https://scratchwars-online.cz/cs/cards/heroes/von-darkenstein/",
    "https://scratchwars-online.cz/cs/cards/heroes/von-zepplin/",
    "https://scratchwars-online.cz/cs/cards/heroes/arena-broomer/",
    "https://scratchwars-online.cz/cs/cards/heroes/revered-paladin/",
    "https://scratchwars-online.cz/cs/cards/heroes/wedryknight/",
    "https://scratchwars-online.cz/cs/cards/heroes/green-troll/",
    "https://scratchwars-online.cz/cs/cards/heroes/lord-of-zepplandia/",
    "https://scratchwars-online.cz/cs/cards/heroes/expert-miner/"
]

const weaponLinks = [
    "https://scratchwars-online.cz/cs/cards/weapons/aleins-gun/",
    "https://scratchwars-online.cz/cs/cards/weapons/arcimar-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/arcispoiler/",
    "https://scratchwars-online.cz/cs/cards/weapons/bad-mind-tone/",
    "https://scratchwars-online.cz/cs/cards/weapons/bamboo-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/bards-crossbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/baroque-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/magic-brew-ladle/",
    "https://scratchwars-online.cz/cs/cards/weapons/organic-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/scoping-staff/",
    "https://scratchwars-online.cz/cs/cards/weapons/mazebow/",
    "https://scratchwars-online.cz/cs/cards/weapons/hockey-stick/",
    "https://scratchwars-online.cz/cs/cards/weapons/battle-corkscrew/",
    "https://scratchwars-online.cz/cs/cards/weapons/longhammer/",
    "https://scratchwars-online.cz/cs/cards/weapons/rolling-pin/",
    "https://scratchwars-online.cz/cs/cards/weapons/staff-of-storms/",
    "https://scratchwars-online.cz/cs/cards/weapons/saber-of-bubbles/",
    "https://scratchwars-online.cz/cs/cards/weapons/blade-of-life/",
    "https://scratchwars-online.cz/cs/cards/weapons/black-candelabra/",
    "https://scratchwars-online.cz/cs/cards/weapons/fluffy-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/electrum-staff/",
    "https://scratchwars-online.cz/cs/cards/weapons/the-ultrahammer/",
    "https://scratchwars-online.cz/cs/cards/weapons/cannonball-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/anticovid-gun/",
    "https://scratchwars-online.cz/cs/cards/weapons/wand-of-diamonds/",
    "https://scratchwars-online.cz/cs/cards/weapons/brilliax/",
    "https://scratchwars-online.cz/cs/cards/weapons/dinofang/",
    "https://scratchwars-online.cz/cs/cards/weapons/the-curious-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/longbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/wand-of-healing/",
    "https://scratchwars-online.cz/cs/cards/weapons/dragonwand/",
    "https://scratchwars-online.cz/cs/cards/weapons/elder-dragonbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/dragonbow-of-fire/",
    "https://scratchwars-online.cz/cs/cards/weapons/dragonfang/",
    "https://scratchwars-online.cz/cs/cards/weapons/wooden-hammer/",
    "https://scratchwars-online.cz/cs/cards/weapons/wooden-stake/",
    "https://scratchwars-online.cz/cs/cards/weapons/wooden-club/",
    "https://scratchwars-online.cz/cs/cards/weapons/the-lumberjack/",
    "https://scratchwars-online.cz/cs/cards/weapons/staff-of-living-wood/",
    "https://scratchwars-online.cz/cs/cards/weapons/rainaxe/",
    "https://scratchwars-online.cz/cs/cards/weapons/dual-blades/",
    "https://scratchwars-online.cz/cs/cards/weapons/two-handed-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/electric-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/floral-elvenbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/gourmet-gun/",
    "https://scratchwars-online.cz/cs/cards/weapons/the-grand-mama/",
    "https://scratchwars-online.cz/cs/cards/weapons/halapartana/",
    "https://scratchwars-online.cz/cs/cards/weapons/mermaid-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/wand-of-shocking/",
    "https://scratchwars-online.cz/cs/cards/weapons/incense-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/wand-of-nine-colors/",
    "https://scratchwars-online.cz/cs/cards/weapons/the-hydra/",
    "https://scratchwars-online.cz/cs/cards/weapons/imbuser/",
    "https://scratchwars-online.cz/cs/cards/weapons/venomous-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/needle/",
    "https://scratchwars-online.cz/cs/cards/weapons/hit-and-stomp/",
    "https://scratchwars-online.cz/cs/cards/weapons/tapwater-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/staff-of-emerald-fern/",
    "https://scratchwars-online.cz/cs/cards/weapons/card-hustlers-dagger/",
    "https://scratchwars-online.cz/cs/cards/weapons/knucklebow/",
    "https://scratchwars-online.cz/cs/cards/weapons/girder/",
    "https://scratchwars-online.cz/cs/cards/weapons/rubber-band-pistol/",
    "https://scratchwars-online.cz/cs/cards/weapons/skuth/",
    "https://scratchwars-online.cz/cs/cards/weapons/bonebreaker-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/bony-mace/",
    "https://scratchwars-online.cz/cs/cards/weapons/skeleton-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/anchorslash/",
    "https://scratchwars-online.cz/cs/cards/weapons/magicwater-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/magic-splatter/",
    "https://scratchwars-online.cz/cs/cards/weapons/magical-pinkbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/kings-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/short-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/smoking-flint-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/bloody-ladle/",
    "https://scratchwars-online.cz/cs/cards/weapons/weather-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/crymestal-staff/",
    "https://scratchwars-online.cz/cs/cards/weapons/dagger-magna/",
    "https://scratchwars-online.cz/cs/cards/weapons/el-machette/",
    "https://scratchwars-online.cz/cs/cards/weapons/lama-gama-knife/",
    "https://scratchwars-online.cz/cs/cards/weapons/wand-of-ice/",
    "https://scratchwars-online.cz/cs/cards/weapons/lollipop-of-moore/",
    "https://scratchwars-online.cz/cs/cards/weapons/bow-of-swiftness/",
    "https://scratchwars-online.cz/cs/cards/weapons/hardstone-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/megamelon-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/vacuum-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/luxury-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/madame-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/magika-magnetika/",
    "https://scratchwars-online.cz/cs/cards/weapons/lighthouse-staff/",
    "https://scratchwars-online.cz/cs/cards/weapons/mamba-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/carnivore-stick/",
    "https://scratchwars-online.cz/cs/cards/weapons/pet-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/wrench-gadget/",
    "https://scratchwars-online.cz/cs/cards/weapons/sword-breaker/",
    "https://scratchwars-online.cz/cs/cards/weapons/blue-lightning-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/sword-of-fate/",
    "https://scratchwars-online.cz/cs/cards/weapons/blade-of-fashion/",
    "https://scratchwars-online.cz/cs/cards/weapons/sword-with-timer/",
    "https://scratchwars-online.cz/cs/cards/weapons/sword-of-relics/",
    "https://scratchwars-online.cz/cs/cards/weapons/unicorn-horn/",
    "https://scratchwars-online.cz/cs/cards/weapons/grassword/",
    "https://scratchwars-online.cz/cs/cards/weapons/minute-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/wand-of-many/",
    "https://scratchwars-online.cz/cs/cards/weapons/marble-baroque/",
    "https://scratchwars-online.cz/cs/cards/weapons/staff-of-frost-and-ice/",
    "https://scratchwars-online.cz/cs/cards/weapons/carrotwood-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/oilry-megasword/",
    "https://scratchwars-online.cz/cs/cards/weapons/staff-of-fire/",
    "https://scratchwars-online.cz/cs/cards/weapons/octostaff/",
    "https://scratchwars-online.cz/cs/cards/weapons/sharp-teeth/",
    "https://scratchwars-online.cz/cs/cards/weapons/clockwork-gearbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/tenderhammer/",
    "https://scratchwars-online.cz/cs/cards/weapons/mystic-hammer/",
    "https://scratchwars-online.cz/cs/cards/weapons/palmwood-piercer/",
    "https://scratchwars-online.cz/cs/cards/weapons/steam-superbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/hunter-s-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/hells-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/pepper-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/executioner-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/poststick/",
    "https://scratchwars-online.cz/cs/cards/weapons/ruler-blade/",
    "https://scratchwars-online.cz/cs/cards/weapons/pretzel-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/hand-cannon/",
    "https://scratchwars-online.cz/cs/cards/weapons/birdie/",
    "https://scratchwars-online.cz/cs/cards/weapons/boatyard-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/cancerbane/",
    "https://scratchwars-online.cz/cs/cards/weapons/chainsaw/",
    "https://scratchwars-online.cz/cs/cards/weapons/rusted-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/ruby-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/runed-saber/",
    "https://scratchwars-online.cz/cs/cards/weapons/staff-of-souls/",
    "https://scratchwars-online.cz/cs/cards/weapons/saber/",
    "https://scratchwars-online.cz/cs/cards/weapons/limbtrimmer/",
    "https://scratchwars-online.cz/cs/cards/weapons/axe-of-infinity/",
    "https://scratchwars-online.cz/cs/cards/weapons/killothon-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/match-log/",
    "https://scratchwars-online.cz/cs/cards/weapons/broadaxe/",
    "https://scratchwars-online.cz/cs/cards/weapons/sisyphus-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/composable-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/bow-of-spine/",
    "https://scratchwars-online.cz/cs/cards/weapons/sunlight-firebow/",
    "https://scratchwars-online.cz/cs/cards/weapons/greatsword-of-sun/",
    "https://scratchwars-online.cz/cs/cards/weapons/emerald-greatsword/",
    "https://scratchwars-online.cz/cs/cards/weapons/death-scythe/",
    "https://scratchwars-online.cz/cs/cards/weapons/duelling-pistol/",
    "https://scratchwars-online.cz/cs/cards/weapons/savior/",
    "https://scratchwars-online.cz/cs/cards/weapons/skewer-needle/",
    "https://scratchwars-online.cz/cs/cards/weapons/silverfish-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/silver-crossbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/silver-elvenbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/long-silversword/",
    "https://scratchwars-online.cz/cs/cards/weapons/blade-of-silver/",
    "https://scratchwars-online.cz/cs/cards/weapons/syringe-rapier/",
    "https://scratchwars-online.cz/cs/cards/weapons/deepwood-club/",
    "https://scratchwars-online.cz/cs/cards/weapons/nimble-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/swift-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/symphonia/",
    "https://scratchwars-online.cz/cs/cards/weapons/dark-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/heavy-hammer/",
    "https://scratchwars-online.cz/cs/cards/weapons/toms-nuclear-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/thornstaff/",
    "https://scratchwars-online.cz/cs/cards/weapons/dwarven-shortsword/",
    "https://scratchwars-online.cz/cs/cards/weapons/dwarfax/",
    "https://scratchwars-online.cz/cs/cards/weapons/tubecannon/",
    "https://scratchwars-online.cz/cs/cards/weapons/the-death-knell/",
    "https://scratchwars-online.cz/cs/cards/weapons/vampire-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/axe-forkiller/",
    "https://scratchwars-online.cz/cs/cards/weapons/spindlesword/",
    "https://scratchwars-online.cz/cs/cards/weapons/propeller/",
    "https://scratchwars-online.cz/cs/cards/weapons/opal-half-wand/",
    "https://scratchwars-online.cz/cs/cards/weapons/pyromancer-s-staff/",
    "https://scratchwars-online.cz/cs/cards/weapons/signboard-axe/",
    "https://scratchwars-online.cz/cs/cards/weapons/frog-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/leftovers-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/living-death-sword/",
    "https://scratchwars-online.cz/cs/cards/weapons/ultimate-techbow/",
    "https://scratchwars-online.cz/cs/cards/weapons/brand-bow/",
    "https://scratchwars-online.cz/cs/cards/weapons/biting-bow/"
]

const heroData = JSON.parse(fs.readFileSync('src/data/old_heroData.json'));
const weaponData = JSON.parse(fs.readFileSync('src/data/weaponData.json'));

async function getHeroNames() {
    let names = {};

    for (let link of links) {
        let data = await fetch(link).then(res => res.text());
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');
        // get all links from scope=row a

        let cur = {
            title: "Error",
            cid: "Error",
            names: {
                "+9": [],
                "+8": [],
                "+7": [],
                "+6": [],
                "+5": [],
                "+4": [],
                "+3": [],
                "+2": [],
                "+1": [],
                "+0": [],
                "-1": [],
                "-2": [],
                "-3": [],
                "-4": [],
                "-5": [],
                "-6": [],
                "-7": [],
                "-8": [],
                "-9": [],
            }
        }

        cur.title = doc.querySelector('title').textContent.split(' | ')[0];

        for (let key in heroData) {
            if (heroData[key].cname.CS === cur.title) {
                cur.cid = key;
                break;
            }
        }

        console.log("Starting:", cur.title, cur.cid);

        doc.querySelectorAll('[scope="row"]').forEach(row => {
            row = row.parentNode;
            let name = row.querySelector('a').textContent;
            let delta = row.querySelector('td').textContent.replace('−', '-');
            //console.log(name, delta);
            if (cur.names[delta]) {
                cur.names[delta].push(name);
            } else {
                cur.names[delta] = [name];
            }
        });

        console.log("Finished:", cur.title, cur.cid);

        if (cur.cid == "Error") {
            console.log("Error:", cur.title);
            cur.cid = "Error-"+cur.title;
        }

        names[cur.cid] = cur;
        fs.writeFileSync('src/data/raw/heroNames.json', JSON.stringify(names, null, 4));
    }

}

async function getWeaponNames() {
    let names = {};

    for (let link of weaponLinks) {
        let data = await fetch(link).then(res => res.text());
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');
        // get all links from scope=row a

        let cur = {
            title: "Error",
            cid: "Error",
            names: {
                "+9": [],
                "+8": [],
                "+7": [],
                "+6": [],
                "+5": [],
                "+4": [],
                "+3": [],
                "+2": [],
                "+1": [],
                "+0": [],
                "-1": [],
                "-2": [],
                "-3": [],
                "-4": [],
                "-5": [],
                "-6": [],
                "-7": [],
                "-8": [],
                "-9": [],
            }
        }

        cur.title = doc.querySelector('title').textContent.split(' | ')[0];

        for (let key in weaponData) {
            if (weaponData[key].cname.CS === cur.title) {
                cur.cid = key;
                break;
            }
        }

        console.log("Starting:", cur.title, cur.cid);

        doc.querySelectorAll('[scope="row"]').forEach(row => {
            row = row.parentNode;
            let name = row.querySelector('a').textContent;
            let delta = row.querySelector('td').textContent.replace('−', '-');
            //console.log(name, delta);
            if (cur.names[delta]) {
                cur.names[delta].push(name);
            } else {
                cur.names[delta] = [name];
            }
        });

        console.log("Finished:", cur.title, cur.cid);

        if (cur.cid == "Error") {
            console.log("Error:", cur.title);
            cur.cid = "Error-"+cur.title;
            continue;
        }

        names[cur.cid] = cur;
        fs.writeFileSync('src/data/raw/weaponNames.json', JSON.stringify(names, null, 4));
    }

}

getHeroNames();
getWeaponNames();
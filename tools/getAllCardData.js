// iids from swo source code
const fs = require('fs');
const { type } = require('os');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const iids = [
    'xRXK5uyJer3XjIi',  // Antique Automaton
    'oKY02EsX5XflkKs',  // Ape Sorcerer
    'cTTrQtPSkVKSSJ0',  // Axemaiden
    '6LDBOfq34hskcOlTiVFfqevz',  // Beach Shaman
    'z1qe88M0u12v12F',  // Bloody Dentist
    'zA86Y5sA4Havt3U',  // Boneater Dwarf
    'J3SxHDtfKJNTCfF',  // Bonekicker Dwarf
    'sBeOoEwPw5VnW3z',  // Boneshaker Dwarf
    'Gipn32ndKBXPOWu',  // Cannibal Chef
    'vB8sL6hNLFFPTNg',  // Cannibal Clown
    'LJbfHisc7vEzQqS',  // Clan Shaman
    'yrvxVMGhZlN73hG',  // Coffin Bot
    '3m3zZy46G7h3O0E',  // Cute Executioner
    'TzTTWVCNcgPbL562exnx0a25',  // Dandy Swordsman
    'wo8p2eoU4kczXNK',  // Divine Puppet
    'JTifKmyVJ7Rd2Aw',  // Dogbone
    'dYuckAhTAe2lGxl',  // Dragon King
    'dx1Ts9fELzTfA8b',  // Dwarven Shepherd
    'jlSNDCdLnUEG1yv',  // Elvish Hunter
    'zONMc79R12DVnNz',  // Elvish Turncoat
    'qeVUttnRhY5xuVA',  // Expert Miner
    'zwczCbYBSAPGFZF',  // Fabled Veteran
    'lAbltJ3OOgHYtGP',  // Fearless Explorer
    'BBWQtxnUxIHyEzF',  // Feathered Wanderer
    'eOPDSG9hiJOegUw',  // Flaming Imp
    'dEcEbBop1q49Ta6',  // Floral Imp
    'rXkorU3jqkG8duk',  // Furry Avenger
    'm2W7PMCF8JIwXV0',  // Ghostly Girl
    'zZsMfoV2Njw0JVh',  // Gnome Engineer
    'h5D5ZNpI6ZeTBYi',  // Green Troll
    'wlhtp6AIycpJ87h',  // Grouchy Viking
    'yfYd3LSqKitgv8B',  // Heir Apparent
    'PXE5zGBWgCGGM2P',  // Henhouse King
    'VIt4SowKnq5EKKU',  // Ivy Sprite
    'OkBJkJqc4dTXezt',  // Jungle Runner
    'YvBIzOEv8LxdvcI',  // Knight-Errant
    'nacDCUCmFVO7AmL',  // Lion Hotshot
    'FOVmj1Kpg9gKnp5',  // Lone Gunslinger
    'ZhHITD94NvkfjxF',  // Maestro Morti
    'msnaWtyH0M73l7F',  // Marsh Warrior
    'kYiGSxV1qJx9H9T',  // Masked Vigilante
    'IGaUjgXwn4RqMlb',  // Miss Vampiria
    'rOTsZVFrb1271wq',  // Mysterious Golem
    'bpMkMN6gvxks2g5',  // Oil Knight
    'us0x5kUGOwEx5kg',  // Pixel Mage
    'kmg2pJEldEeSkhb',  // Pixie Queen
    'YR9A5z5zhB76JR3',  // Revered Paladin
    'tdDaI7PfiXFV34S',  // Rhino Fighter
    'rOllNnIQzA4rVKo',  // Robotic Battler
    'qpDA1bmMHCLSDpI',  // Rough Housewife
    'lf7EkmmfProa5KY',  // Saber-toothed Tiger
    's5X9l37m9pnQDPB',  // Salvager Boss
    'ehZMW1HHrRpYEwB',  // Slimy Engineer
    '043Izl84uovIzoE',  // The Heretic
    'iXcpVivBOzW1lFR',  // the Lionhearted
    'Tzoswz1WzwFHyNw',  // Toadstool Shaman
    'J37N8grq75rcPq2',  // Tusked Colossus
    'Xv4RwujK1re82e7',  // Vampire Bunny
    'HIzZr7DhclAacRC',  // Vampire Hunter
    'InMpeQCLEYCULEV',  // Vampire Prince
    'zqeXbeakRxoAj4b',  // Vengeful Vulture
    'xEn5DKrMM8ZOrwJ',  // Village Squire
    'vkGlpJH0lGshd5w',  // Voltaic Ninja
    'wNgZnAVQcssdIOG',  // von Darkenstein
    'd5HqJRvluFoxQym',  // Woodcutter
    'JExuJUuFWYlHDtp',  // Woodland Brawler
    'JSVWqzOWRha7qrJ',  // Woolly Conqueror
    'zIl1sCEicqmJ6JL',  // Young Hero

    // zepplandia
    'oUWVwFCdeewABUz',  // Balloonbot
    'pvfm0mJ9zUPuoch',  // Boilerman
    'vph3Fx3OvmQuaZ1',  // Cleverbot
    'qPZhVggtAobM3dU',  // Cloud Walker
    'HmNNu0dBKi3AEje',  // Crimebot
    'SqIXyyg2Jt3HlKx',  // Crow Murderer
    'UHVci9eH9PdHkeq',  // de Mongolfier
    'IwvzKvap32Cdu3f',  // Gnome Warrior
    '2b4r6SAq8DBSRQP',  // Helmsman
    'jBdPmIySLi1O9vO',  // Lady Zepplin
    'TjmtdZ1oPj0DEfE',  // Pidgeon Courier
    'vKHjmoXdPIgbEOm',  // Rocket Penguin
    'Ny4qWlidy3LILat',  // Sheep Patrol
    '21KsPCt1JToslG6',  // Trophy Hunter
    'V38qMQ6bgZxnNjF',  // von Zepplin

    // middlemyst - virtual cards might disappear, comment out or replace in case of failed test
    '9DC2wJzfZlcj2Ol',  // Fighter of Alzahrad
    'SXf3rBWoNI2zjiA',  // Lord of Biotechlandia
    'PiP9wO3GKJp7UiH',  // Lord of Canbalandia
    'lm8nxAa1gN5aphu',  // Lord of Vampiria
    'd2qGrKazx2EtlHg',  // Lord of Zepplandia
    'zgtU3hnFa0ACyokFpwGgVVUC',  // Apple Hunter
    'qStewuyv8Uva5fs',  // Reward Hunter
    'IzGRNA8jOyTMnNe',  // Arena Sweeper
    'PYnylWDa9DBOozq',  // Esterminator
    'NMcS2IKL8QML3lcStEpz3Mzg',  // Wedryknight
    '4E1H48YGAVrvGjK',  // Battle Ferda
    'm2TY1VAtMTH6jduzZinRJnfm',  // Red Overgamer
    'oYtenkABOn3beMddxMlg2rJ5',  // Young adventurer
    'amvUDu0LMIGxGABvDOiqOcQl',  // Monkey Magician
    'WjGAlChfT2OHzqe6AYthXYvt',  // Purple Punk Potato
    'RhR4mrOhIkryrl5crb7hdUJf',  // Touchy Troll
    'lViORW5reHizTAq3TS4eOap4',  // Evil Explorer
    'PN4Sd8IW1ptVW8gOdAKEi9Gd',  // Bo-Woman
    'kUMW0X59LFK8earHwOVqDsdG',  // Brave teacher
    's5sPS1T4J2jnAfFt23HsMiYy',  // Ruler from textbook
    '1yQ98CzhLG3N8KlnExyi6BOl',  // Valiant hoplite
    'YUOV20bTJyE8rl3CAYk5EJ2H',  // Hungarian hussar
    'FXYEEfmJE7PdqpeE8FWI2rF2M',  // Xmas Freak-fir
    'XvMVzVxBP2fSyuy',  // Star Engineer

    // spinbay
    'a4JFGwvCEvnMxJI',  // Governor of Spinbay
    'DHRn6akHcOU5bwp',  // Dock Worker
    '0PikUyqw1BXfGS8',  // Port Innkeeper
    'FhQDit9pAzElz6y',  // RoboExchange
    '4HXGjYWK9chGdnx',  // Spinbay Dancer
    'OhrYeVM06mAu5lY',  // Mysterious Bedouin
]

const weaponIids = [
    'unatgvQXhdJDoVf',  // Bamboo Bow
 'gpeGHpFX8Xk2Npc',  // Battle Corkscrew
 'WVAEqjiGh5ukWpp',  // Biting Bow
 'HwpBUG3XsPA6LnL',  // Black Candelabra
 'zCq1VYKbYrnB1Qi',  // Blade of Life
 'mNrFI50fp7kb16p',  // Blade of Silver
 'oU7DcKi6J0NebwJ',  // Bloody Ladle
 'CMumrpfzQ2bypqH',  // Bonebreaker Axe
 'hyKYg3cUJCGQBg9',  // Bony Mace
 'aCRUNRRsBQ5FBCT',  // Bow of Spine
 'UQGNyN473w3s61Q',  // Bow of Swiftness
 'h8Q0siO8K1qXMy7',  // Brilliax
 'LvECWWI3bPrSMIY',  // Broadaxe
 'akNtpmtpckor3OA',  // Cancerbane
 'O5e4rOQZ3xzqr6J',  // Carnivore Stick
 'taz5WTITksh7cLr',  // Carrotwood Bow
 'vPrFzRTGbKvg4Ut',  // Chainsaw
 'F6T2cwsNuSyw9nf',  // Clockwork Gearbow
 '6zpGvx9HCLzuDI8',  // Composable Bow
 'srDUCG45aDZR6BS',  // Crymestal Staff
 'nyvZR3sFuQkmcWh',  // Dark Sword
 'ednmFqTCOsupmOn',  // Death Scythe
 'qpNeTFUUSf8pHsx',  // Deepwood Club
 'Zoeb3x0OqQhbOyb',  // Dinofang
 'OndD9i4SVqMKxCy',  // Dragonbow of Fire
 'eMmbxEci2JkvAog',  // Dragonfang
 'hT93UqBztuTWolK',  // Dragonwand
 'zj7BIDHw1XjZ1r5',  // Dual Blades
 'nZU0X4DjtmDe0KJ',  // Duelling Pistol
 'mFLiYgw97aTYDiW',  // Dwarfax
 '9dkoZoHuXSwWXSE',  // Dwarven Shortsword
 'ucSlfRcVJLgxhui',  // Elder Dragonbow
 'DJ27QpajHU1LMvv',  // Electric Bow
 'LEyABV1000CSWSX',  // Electrum Staff
 '8arVL64J8mFJIAk',  // Emerald Greatsword
 'zYW8vjT5sIePpFr',  // Executioner Axe
 'xLTkJoiGa6OE7Q7',  // Floral Elvenbow
 '5nuURcmahM1408Z',  // Fluffy Bow
 'pQdAK6UnqkXnDNK',  // Frog Bow
 'Cbgc1cBN3g3Cpcr',  // Girder
 'uXUbEPswdqj4qYu',  // Grassword
 '7iwFELw5KcW18jb',  // Greatsword of Sun
 'y2OkIRo2bBDGKbg',  // Halapartana
 'Qf5goCaiLbjLAjW',  // Hardstone Bow
 'Jkxtnu4DUoVBKPy',  // Heavy Hammer
 'eCbjgkCgUbZ96tI',  // Hit-and-stomp
 'oyvE263LCwpIYQr',  // Hockey Stick
 'Z9QMShLc8qKbTNE',  // Hunter´s Bow
 'VbQpYEPdoT8Xtdv',  // King's Axe
 'MMiGfD4E6m3xxHa',  // Knucklebow
 'ZzKy4O2JJ8P9q3z',  // Leftovers Sword
 'shfCZiAjcsyt3MC',  // Limbtrimmer
 'yJ3KklPxiUHlAd0',  // Living Death Sword
 '0aYLacZAlIMKQ4w',  // Lollipop of Moore
 'xKfytrKOlq9jAmk',  // Longbow
 'Np0WyHNHkjpco57',  // Longhammer
 'Np2Hbfq5xHHuxIC',  // Long Silversword
 'g0acAt2AYlFXCwD',  // Madame Wand
 'lgB5dLwi9jNAF6T',  // Magical Pinkbow
 'oLl2n74PAzisyID',  // Magic Brew Ladle
 'TwmyoUC9Cnox9k5',  // Magic Splatter
 'ThfgH7BSzvGawLz',  // Magika Magnetika
 'VMQkWck6wKCIcJt',  // Mamba Bow
 'dqqFxyOuQ8pDFwz',  // Match Log
 'rTpsQlW8KYCZx32',  // Megamelon Bow
 'iB5V8nJ1iS6QX9R',  // Mystic Hammer
 'uOkjd81TCC2bVgK',  // Needle
 'f69TEYknIiPMH2m',  // Nimble Sword
 '2EqSv7Rtm7Vw3kT',  // Octostaff
 'sNAeHW3w8W1dyJ7',  // Oilry Megasword
 'hD03CtdtM06r8ni',  // Opal Half-wand
 'YC0GaUmJSKrbFdJ',  // Palmwood Piercer
 'PNJ9qPbmZxkr8Vv',  // Pepper Wand
 'ZOziILGsDYDm63F',  // Pyromancer´s Staff
 '6M09ATUpygfgNDQ',  // Rainaxe
 'nmt1Q7HlLqPTnd0',  // Rolling Pin
 '750t3AyXd8Jiddf',  // Ruby Wand
 'wG4DAjiZtX0d9QH',  // Runed Saber
 'LQNUfSmwUOpQFk0',  // Rusted Bow
 'xpjVeTbmYicRkt5',  // Saber
 'treAbfKXjZ4YnTh',  // Sharp Teeth
 'j072zkodAJhrXkB',  // Short Sword
 'Ou5Y7krF9D6QV3D',  // Silver Crossbow
 'sn5S5uNu49MECdR',  // Silver Elvenbow
 'uhXEe6jIjqJTd5M',  // Silverfish Bow
 's7hKSLWYftiz5ic',  // Skeleton Sword
 'bgkjmWZi06BhJ1u',  // Skewer Needle
 'sVtlyi3DoPkqV0G',  // Sküth
 'FnEYNl9MmtJ2iZo',  // Staff of Emerald Fern
 'O9WeuIwkYxqbyv6',  // Staff of Fire
 'GqCIRd2fLTzpzqk',  // Staff of Frost and Ice
 '7vJ7Bucewpi3eYz',  // Staff of Living Wood
 'w8oSWB1daSejCRp',  // Staff of Souls
 'yzbVd5UtVzZrkf3',  // Staff of Storms
 '6IzgU33AN26fryi',  // Sunlight Firebow
 'YleQCkMPjnrBhxH',  // Swift Axe
 'gRMhwevnKDaBG2V',  // Sword oxf Fate
 'pINP1SQWx7UEZs1',  // Symphonia
 'mfjA1T4xkG1NxG5',  // Syringe Rapier
 '1ieOLVKQ1BkjddH',  // Tenderhammer
 'L7NR6gFduXoxD66',  // The Curious Axe
 'C1Fw8oDOVOoHXbW',  // The Death Knell
 '8l1k4dmb92Thexp',  // The Hydra
 'cKy0ZeZvkPC2g1q',  // The Lumberjack
 'z3oqTux5YQ6PeRr',  // The Ultrahammer
 'StgNQKOCBXOe0Ph',  // Thornstaff
 'sVbdkC7IfMXIr0t',  // Two-handed Sword
 '3zsl2ijVkUMJ6XM',  // Ultimate Techbow
 'QmAhA14lDJCLck5',  // Unicorn Horn
 'bX5YVTV70lcDMOr',  // Vacuum Wand
 'y7AEYJR1wKGuoph',  // Vampire Bow
 'RXwP1dZeZXVraff',  // Venomous Sword
 'ijSaTL9DEc37c1G',  // Wand of Diamonds
 'QPbxdVSmvyhFKb3',  // Wand of Healing
 'gm2VQHwMmRWCRbc',  // Wand of Ice
 '0kJXBQbuax2pg4h',  // Wand of Many
 '8PfaKMBEk45z9qn',  // Wand of Shocking
 'y6qirhhEbopqb7d',  // Wooden Club
 'kQqweLbDQ7t0lhu',  // Wooden Hammer
 'Vz3qMrEHtWuQovy',  // Wooden Sta
 // zepplandia
 'bHPtLznXj7qK0a7',  // Anchorslash
 'dR8EnjZiSgS7R91',  // Birdie
 'HLA1q2T9kgxdibv',  // Dagger Magna
 'p9w8pH4JnqwzRv4',  // Gourmet Gun
 'NZJEBMsPfcyY3Ys',  // Imbuser
 'sHPmU7c0MvirvMr',  // Lighthouse Staff
 '4MyBL3PrkGpqqMS',  // Mazebow
 'aHaRWccmoFoUeSi',  // Minute Sword
 'Pm4Qu4vV8iFzFAz',  // Post–Stick
 'iIMjsUw4IO0KChD',  // Propeller
 '82RlQ6ESey6m57G',  // Ruler Blade
 'YZYoHR8OfqktBbv',  // Saber of Bubbles
 'yJcJnnOYIl7wwQM',  // Scoping Staff
 'w1xLwR1wV4Xt06p',  // Spindlesword
 'gQDVFRpvvwrrz0j',  // Steam Superbow
 'qcXvqk2P71BjF7C',  // Tapwater Bow
 'YBUNBbRH1gSEoRs',  // The Grand Mama
 'eucBcPWpWoKsXWH',  // Wand of Nine Colors
 'pO9H3nbHhaPIRAd',  // Weather Wand
 'iMR4Xd8gdIEsShp',  // Wrench Gadg
 // spinbay
 'Ttj6tw5M4EpiKu0',  // Bio Wand
 'FKzbYDeSalNEk6l',  // Cannonhammer
 'sDZrCmrR33eUVs9',  // Luxury Styck
 'hOwMngXL8ZZR1w9',  // Latest Fashion Sword
 'JjwQkfTrZY3GUpg',  // Sword of Relics
 'GV0aFJSWcb3rnf6',  // Hand Cannon
 'QSoNK5ZyYJUcSWd',  // Signboard Axe
 '8MQla0NO5TkPDV7',  // Brand Bow
 '4Xltg9ip9yCLFr9',  // Mermaid Wand
 'XPtJLZqyQk32ke2',  // Card Dagger
 '2qx5y5ptSr7WGU8',  // Rubber Band Gun
 'QgYNCSile4yle6D',  // Smoky Flintlock
 '18mhKfDmfAHSiqq',  // Timer Sword
 'SfDgiZdQJaDIOki',  // Pretzel Stick
 'gKLDB3L9XDpmRS3',  // Boatyard Axe
 'qyERqdkXAOdSy0i',  // Axe of Killoth
]

async function getAllHeroes() {
    let result = {};

    for (let i = 0; i < iids.length; i++) {
        let req = await fetch("https://www.scratchwars.cloud/public/api/card/" + iids[i]);
        console.log("Requesting: " + iids[i]);
        if (req.status != 200) {
            console.log("Error: " + req.status);
            continue;
        }
        let data = await req.json();

        let cid = data.response.cid;


        let path = "blank.jpg";

        if (data.response.cname.EN !== undefined) {
            const name = data.response.cname.EN.toLowerCase().replace(/ /g, "-");
            path = `/heroes/${name}-cz.jpg`;
        }

        let effect = data.response.bonuses.map((effect) => {
            if (effect.action !== undefined) {
                return effect.action;
            }
            if (effect.boost !== undefined) {
                return effect.boost;
            }
            return effect.special;
        });

        // fixx Xmas_fir

        if (typeof data.response.cname === 'string') {
            data.response.cname = {
                CS: data.response.cname,
                EN : data.response.cname
            };
        }

        let curTypeData = {
            gender: data.response.gender,
            origin: data.response.origin,
            cid: cid,
            rarity: data.response.rarity.length,
            cname: data.response.cname,
            weapon_prof: data.response.weapon_prof,
            expansion: data.response.expansion,
            effects: effect,/*data.response.bonuses.map((effect) => {
                return effect.boost;
            }),*/
            imgUrl: path,
        }

        console.log("Got: " + cid);
        console.log(curTypeData);
        result[cid] = curTypeData;
    }

    console.log(result);

    fs.writeFileSync("src/data/raw/heroData.json", JSON.stringify(result));
}

async function getAllWeapons() {
    let result = {};

    for (let i = 0; i < weaponIids.length; i++) {
    //for (let i = 0; i < 2; i++) {
        let req = await fetch("https://www.scratchwars.cloud/public/api/card/" + weaponIids[i]);
        console.log("Requesting: " + weaponIids[i]);
        if (req.status != 200) {
            console.log("Error: " + req.status);
            continue;
        }
        let data = await req.json();

        let cid = data.response.cid;

        let path = "blank.jpg";

        if (data.response.cname.EN !== undefined) {
            const name = data.response.cname.EN.toLowerCase().replace(/ /g, "-");
            path = `/weapons/${name}-cz.jpg`;
        }

        let curTypeData = {
            cid: cid,
            rarity: data.response.rarity.length,
            cname: data.response.cname,
            cost: data.response.cost,
            type: data.response.type,
            expansion: data.response.expansion,
            imgUrl: path,
            effects: data.response.effects.map((effect) => {
                return {
                    t: effect.t,
                    f: effect.f,
                };
            }),
        }

        console.log("Got: " + cid);
        console.log(curTypeData);
        result[cid] = curTypeData;
    }

    console.log(result);

    fs.writeFileSync("src/data/raw/weaponData.json", JSON.stringify(result));
}

getAllHeroes();
getAllWeapons();
// iids from swo source code
const fs = require('fs');

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
    // @TODO '',  // Star Engineer

    // spinbay
    'a4JFGwvCEvnMxJI',  // Governor of Spinbay
    'DHRn6akHcOU5bwp',  // Dock Worker
    '0PikUyqw1BXfGS8',  // Port Innkeeper
    'FhQDit9pAzElz6y',  // RoboExchange
    '4HXGjYWK9chGdnx',  // Spinbay Dancer
    'OhrYeVM06mAu5lY',  // Mysterious Bedouin
]

async function getAll() {
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

        let curTypeData = {
            gender: data.response.gender,
            origin: data.response.origin,
            cid: cid,
            rarity: data.response.rarity.length,
            cname: data.response.cname,
            weapon_prof: data.response.weapon_prof,
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

    fs.writeFileSync("src/data/heroData.json", JSON.stringify(result));
}

getAll();
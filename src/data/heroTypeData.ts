import { heroTypes } from "../types/heroType";

const heroTypeData: heroTypes = {
    "ROB200": {
        "gender": "neutral",
        "origin": "Techlandia",
        "cid": "ROB200",
        "rarity": 2,
        "cname": {
            "CS": "Šrotorobot",
            "DE": "Antiker Automat",
            "EN": "Antique Automaton",
            "IT": "Antico Automa",
            "FR": "Robot ferraille",
            "PL": "Prarobot"
        },
        "weapon_prof": [
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "hit-hero",
            "hit-anything",
            "hit-weapon",
            "hit-anything",
            "hit-weapon",
            null,
            "hit-weapon",
            null
        ],
        "imgUrl": "/heroes/antique-automaton-cz.jpg"
    },
    "MifMif": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "MifMif",
        "rarity": 1,
        "cname": {
            "CS": "Opičí kouzelník",
            "DE": "Affen-Zauberer",
            "EN": "Ape Sorcerer",
            "IT": "Stregone Scimmione",
            "FR": "Magicien simien",
            "PL": "Małpi czarodziej"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "hit-anything",
            null,
            "hit-weapon",
            "block",
            "hit-weapon",
            null,
            "hit-weapon",
            "hit-anything"
        ],
        "imgUrl": "/heroes/ape-sorcerer-cz.jpg"
    },
    "Alina": {
        "gender": "female",
        "origin": "Techlandia",
        "cid": "Alina",
        "rarity": 2,
        "cname": {
            "CS": "Sekernice",
            "DE": "Axtmagd",
            "EN": "Axemaiden",
            "IT": "Fanciulla dell'Ascia",
            "FR": "Dame à la hache",
            "PL": "Siekiernica"
        },
        "weapon_prof": [
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "add-energy",
            "combo",
            "hit-weapon",
            "combo",
            "heal",
            null,
            "all",
            null
        ],
        "imgUrl": "/heroes/axemaiden-cz.jpg"
    },
    "Coryphor": {
        "gender": "male",
        "origin": "LevelPath",
        "cid": "Coryphor",
        "rarity": 1,
        "cname": {
            "CS": "Plážový šaman",
            "DE": "Strand Schamane",
            "EN": "Beach Shaman",
            "IT": "Sciamano Balneare"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "add-energy",
            null,
            "hit-hero",
            null,
            "hit-hero",
            "add-energy",
            "heal",
            "hit-anything"
        ],
        "imgUrl": "/heroes/beach-shaman-cz.jpg"
    },
    "Dentist": {
        "gender": "male",
        "origin": "Vampiria",
        "cid": "Dentist",
        "rarity": 2,
        "cname": {
            "CS": "Krvavý zubař",
            "DE": "Blutiger Zahnarzt",
            "EN": "Bloody Dentist",
            "IT": "Dentista Sadico"
        },
        "weapon_prof": [
            "sword",
            "wand"
        ],
        "effects": [
            "curse-weapon",
            "combo",
            "curse-weapon",
            "combo",
            "vampire-bite",
            "curse-weapon",
            "vampire-bite",
            "night-attack"
        ],
        "imgUrl": "/heroes/bloody-dentist-cz.jpg"
    },
    "Boneater": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Boneater",
        "rarity": 2,
        "cname": {
            "CS": "Trpaslík kostižer",
            "DE": "Knochenesser Zwerg",
            "EN": "Boneater Dwarf",
            "IT": "Nano Mangiaossa"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "stop-discard",
            "crunch-weapon",
            "hit-hero",
            "crunch-weapon",
            "hit-hero",
            "block",
            "hit-weapon",
            "block"
        ],
        "imgUrl": "/heroes/boneater-dwarf-cz.jpg"
    },
    "Bonekicker": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Bonekicker",
        "rarity": 4,
        "cname": {
            "CS": "Trpaslík kostilam",
            "DE": "Knochentreter Zwerg",
            "EN": "Bonekicker Dwarf"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "wand"
        ],
        "effects": [
            "hit-hero",
            "block",
            "stop-discard",
            "heal",
            "combo",
            "crunch-weapon",
            "hit-anything",
            "crunch-weapon"
        ],
        "imgUrl": "/heroes/bonekicker-dwarf-cz.jpg"
    },
    "Boneshaker": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Boneshaker",
        "rarity": 1,
        "cname": {
            "CS": "Trpaslík kostitřas",
            "DE": "Knochenrüttler Zwerg",
            "EN": "Boneshaker Dwarf",
            "IT": "Nano Scuotiossa"
        },
        "weapon_prof": [
            "axe"
        ],
        "effects": [
            "crunch-weapon",
            null,
            "hit-hero",
            "hit-weapon",
            "hit-hero",
            "crunch-weapon",
            "hit-hero",
            null
        ],
        "imgUrl": "/heroes/boneshaker-dwarf-cz.jpg"
    },
    "Cook": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Cook",
        "rarity": 1,
        "cname": {
            "CS": "Kuchař kanibal",
            "DE": "Kannibalen Chefkoch",
            "EN": "Cannibal Chef",
            "IT": "Chef Cannibale"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "hit-anything",
            "crunch-weapon",
            "hit-hero",
            "block",
            "crunch-weapon",
            null,
            "hit-weapon",
            "crunch-weapon"
        ],
        "imgUrl": "/heroes/cannibal-chef-cz.jpg"
    },
    "Clown": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Clown",
        "rarity": 1,
        "cname": {
            "CS": "Klaun kanibal",
            "DE": "Kannibalen Clown",
            "EN": "Cannibal Clown",
            "IT": "Clown Cannibale"
        },
        "weapon_prof": [
            "sword",
            "wand"
        ],
        "effects": [
            "combo",
            null,
            "hit-hero",
            "hit-weapon",
            "stop-discard",
            "crunch-weapon",
            "combo-trigger",
            "crunch-weapon"
        ],
        "imgUrl": "/heroes/cannibal-clown-cz.jpg"
    },
    "Warlock": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Warlock",
        "rarity": 2,
        "cname": {
            "CS": "Kmenový šaman",
            "DE": "Clan Schamane",
            "EN": "Clan Shaman",
            "IT": "Sciamano Tribale"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "stop-discard",
            "hit-anything",
            "block",
            null,
            "stop-discard",
            "heal",
            "stop-discard",
            "hit-anything"
        ],
        "imgUrl": "/heroes/clan-shaman-cz.jpg"
    },
    "CoffinBot": {
        "gender": "neutral",
        "origin": "Vampiria",
        "cid": "CoffinBot",
        "rarity": 1,
        "cname": {
            "CS": "Rakvobot",
            "DE": "Sarg Bot",
            "EN": "Coffin Bot",
            "IT": "Robobara"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "vampire-bite",
            "combo",
            "hit-hero",
            null,
            "curse-weapon",
            null,
            "curse-weapon",
            "combo"
        ],
        "imgUrl": "/heroes/coffin-bot-cz.jpg"
    },
    "Executie": {
        "gender": "male",
        "origin": "Vampiria",
        "cid": "Executie",
        "rarity": 1,
        "cname": {
            "CS": "Katík",
            "DE": "Süßer Henker",
            "EN": "Cute Executioner",
            "IT": "Boia Adorabile"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "curse-weapon",
            "hit-hero",
            "hit-weapon",
            "block",
            "curse-weapon",
            "block",
            "vampire-bite",
            null
        ],
        "imgUrl": "/heroes/cute-executioner-cz.jpg"
    },
    "Maramis": {
        "gender": "male",
        "origin": "LevelPath",
        "cid": "Maramis",
        "rarity": 1,
        "cname": {
            "CS": "Švihácký šermíř",
            "DE": "Gecker Fechter",
            "EN": "Dandy Swordsman",
            "IT": "Spadaccino Elegante"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "hit-anything",
            null,
            "hit-weapon",
            "block",
            "hit-anything",
            null,
            "hit-hero",
            null
        ],
        "imgUrl": "/heroes/dandy-swordsman-cz.jpg"
    },
    "Puppet": {
        "gender": "neutral",
        "origin": "Canbalandia",
        "cid": "Puppet",
        "rarity": 2,
        "cname": {
            "CS": "Božská loutka",
            "DE": "Göttliche Puppe",
            "EN": "Divine Puppet",
            "IT": "Marionetta Divina"
        },
        "weapon_prof": [
            "sword",
            "wand"
        ],
        "effects": [
            "hit-anything",
            "crunch-weapon",
            "hit-anything",
            "combo",
            "combo-trigger",
            "crunch-weapon",
            "stop-discard",
            "crunch-weapon"
        ],
        "imgUrl": "/heroes/divine-puppet-cz.jpg"
    },
    "Dogbone": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Dogbone",
        "rarity": 3,
        "cname": {
            "CS": "Kostipes",
            "DE": "Knochenhund",
            "EN": "Dogbone",
            "IT": "Cane da Ossa"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "hit-hero-repeated",
            "heal",
            "add-energy",
            "crunch-weapon",
            "block",
            "crunch-weapon",
            "stop-discard",
            "heal"
        ],
        "imgUrl": "/heroes/dogbone-cz.jpg"
    },
    "Drakosaur": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Drakosaur",
        "rarity": 4,
        "cname": {
            "CS": "Král draků",
            "DE": "Drachenkönig",
            "EN": "Dragon King",
            "IT": "Re Dragone",
            "FR": "Roi des dragons",
            "PL": "Smoczy król"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "bow"
        ],
        "effects": [
            "combo-trigger",
            "combo",
            "combo",
            null,
            "all",
            "hit-hero",
            "add-energy",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/dragon-king-cz.jpg"
    },
    "Shepherd": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Shepherd",
        "rarity": 3,
        "cname": {
            "CS": "Trpasličí bača",
            "DE": "Zwergenschäfer",
            "EN": "Dwarven Shepherd",
            "IT": "NanoPastore"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "combo-trigger",
            "crunch-weapon",
            "combo-trigger",
            "hit-weapon",
            "stop-discard",
            "combo",
            "hit-hero-repeated",
            "hit-anything"
        ],
        "imgUrl": "/heroes/dwarven-shepherd-cz.jpg"
    },
    "Dryoptas": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Dryoptas",
        "rarity": 1,
        "cname": {
            "CS": "Elfí zbojník",
            "DE": "Elfischer Jäger",
            "EN": "Elven Hunter",
            "IT": "Elfo Cacciatore",
            "FR": "Bandit elfique",
            "PL": "Elfi rozbójnik"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "combo",
            null,
            "hit-hero",
            "hit-hero-repeated",
            "hit-hero",
            "combo",
            "hit-hero",
            "hit-anything"
        ],
        "imgUrl": "/heroes/elven-hunter-cz.jpg"
    },
    "Zomgar": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Zomgar",
        "rarity": 3,
        "cname": {
            "CS": "Elfí přeběhlík",
            "DE": "Elfischer Deserteur",
            "EN": "Elvish Turncoat",
            "IT": "Elfo Rinnegato",
            "FR": "Elfe déserteur",
            "PL": "Elfi zdrajca"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "hit-anything",
            null,
            "hit-anything",
            "hit-hero",
            "hit-anything",
            "hit-hero",
            "hit-weapon",
            "hit-hero"
        ],
        "imgUrl": "/heroes/elvish-turncoat-cz.jpg"
    },
    "Bubbleground": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Bubbleground",
        "rarity": 2,
        "cname": {
            "CS": "Zkušený horník",
            "DE": "Zwergen-Geologe",
            "EN": "Expert Miner",
            "IT": "Esperto Minatore",
            "FR": "Mineur expert",
            "PL": "Majster górnik"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "block",
            "combo",
            "block",
            "combo",
            "hit-weapon",
            "combo-trigger",
            "hit-weapon",
            null
        ],
        "imgUrl": "/heroes/expert-miner-cz.jpg"
    },
    "Gizmeron": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Gizmeron",
        "rarity": 4,
        "cname": {
            "CS": "Proslulý vůdce",
            "DE": "Sagenhafter Kämpfer",
            "EN": "Legendary Veteran",
            "IT": "Veterano Mitico",
            "FR": "Chef réputé",
            "PL": "Legendarny władca"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "wand"
        ],
        "effects": [
            "combo-trigger",
            "hit-hero-repeated",
            "heal",
            "hit-hero-repeated",
            "combo",
            "block",
            "all",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/legendary-veteran-cz.jpg"
    },
    "Rachael": {
        "gender": "female",
        "origin": "Techlandia",
        "cid": "Rachael",
        "rarity": 1,
        "cname": {
            "CS": "Velká průzkumnice",
            "DE": "Große Entdeckerin",
            "EN": "Fearless Explorer",
            "IT": "Intrepida Esploratrice",
            "FR": "Grande exploratrice",
            "PL": "Wielka odkrywaczka"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "hit-weapon",
            null,
            "hit-hero",
            null,
            "hit-hero",
            "hit-anything",
            "hit-weapon",
            "hit-anything"
        ],
        "imgUrl": "/heroes/fearless-explorer-cz.jpg"
    },
    "Brocco": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Brocco",
        "rarity": 2,
        "cname": {
            "CS": "Opeřený poutník",
            "DE": "Gefiederter Wanderer",
            "EN": "Feathered Wanderer",
            "IT": "Vagabondo Piumato",
            "FR": "Pèlerin emplumé",
            "PL": "Opierzony pielgrzym"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "hit-hero",
            "combo-trigger",
            "hit-hero-repeated",
            "combo",
            "hit-hero-repeated",
            null,
            "hit-hero",
            null
        ],
        "imgUrl": "/heroes/feathered-wanderer-cz.jpg"
    },
    "PyroBob": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "PyroBob",
        "rarity": 1,
        "cname": {
            "CS": "Ohnivý imp",
            "DE": "Feuer-Kobold",
            "EN": "Fire Imp",
            "IT": "Diavoletto Ardente",
            "FR": "Lutin de feu",
            "PL": "Ognisty chochlik"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "hit-anything",
            null,
            "hit-hero",
            "hit-anything",
            "hit-hero",
            "hit-weapon",
            "hit-hero",
            "block"
        ],
        "imgUrl": "/heroes/fire-imp-cz.jpg"
    },
    "Floblin": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Floblin",
        "rarity": 1,
        "cname": {
            "CS": "Kytičkový skřítek",
            "DE": "Blumenkobold",
            "EN": "Flower Imp",
            "IT": "Folletto dei Fiori",
            "FR": "Gnome floral",
            "PL": "Skrzat kwiat"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "all",
            null,
            "hit-hero-repeated",
            null,
            "combo",
            "block",
            "heal",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/flower-imp-cz.jpg"
    },
    "Bambook": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Bambook",
        "rarity": 2,
        "cname": {
            "CS": "Chlupatý mstitel",
            "DE": "Haariger Rächer",
            "EN": "Furry Avenger",
            "IT": "Morbido Vendicatore",
            "FR": "Vengeur poilu",
            "PL": "Futrzany mściciel"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "combo",
            null,
            "hit-hero",
            "combo",
            "hit-hero",
            "combo-trigger",
            "hit-anything",
            "hit-weapon"
        ],
        "imgUrl": "/heroes/furry-avenger-cz.jpg"
    },
    "Spectre": {
        "gender": "female",
        "origin": "Vampiria",
        "cid": "Spectre",
        "rarity": 2,
        "cname": {
            "CS": "Přízračná nána",
            "DE": "Gespenstisches Mädchen",
            "EN": "Ghosty Girl",
            "IT": "Ragazza Fantasma"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "add-energy",
            "curse-weapon",
            "heal",
            "block",
            "heal",
            "vampire-bite",
            "hit-weapon",
            "night-attack"
        ],
        "imgUrl": "/heroes/ghosty-girl-cz.jpg"
    },
    "Bonefixer": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Bonefixer",
        "rarity": 2,
        "cname": {
            "CS": "Malý mechatronik",
            "DE": "Gnom Mechatroniker",
            "EN": "Gnome Engineer",
            "IT": "Gnomo Ingegnere",
            "FR": "Petit mécatronique",
            "PL": "Chochlik mechatronik"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "wand"
        ],
        "effects": [
            "hit-weapon",
            "combo-trigger",
            "hit-weapon",
            null,
            "hit-weapon",
            "combo",
            "hit-weapon",
            "combo-trigger"
        ],
        "imgUrl": "/heroes/gnome-engineer-cz.jpg"
    },
    "Troll": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Troll",
        "rarity": 1,
        "cname": {
            "CS": "Zelený troll",
            "DE": "Grüner Troll",
            "EN": "Green Troll",
            "IT": "Troll Verde",
            "FR": "Troll vert",
            "PL": "Zielony troll"
        },
        "weapon_prof": [
            "axe"
        ],
        "effects": [
            "hit-hero",
            "block",
            "hit-weapon",
            "block",
            "hit-hero",
            "combo",
            "hit-hero",
            "hit-anything"
        ],
        "imgUrl": "/heroes/green-troll-cz.jpg"
    },
    "Vikimaus": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Vikimaus",
        "rarity": 3,
        "cname": {
            "CS": "Mrzutý viking",
            "DE": "Grantiger Wikinger",
            "EN": "Grouchy Viking",
            "IT": "Vichingo Burbero",
            "FR": "Viking maussade",
            "PL": "Zrzędliwy wiking"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "hit-hero-repeated",
            null,
            "hit-hero-repeated",
            "combo",
            "hit-anything",
            "combo",
            "hit-weapon",
            "combo-trigger"
        ],
        "imgUrl": "/heroes/grouchy-viking-cz.jpg"
    },
    "Jirka": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Jirka",
        "rarity": 2,
        "cname": {
            "CS": "Potomek Krále",
            "DE": "Thronanwärter",
            "EN": "Heir Apparent",
            "IT": "Erede al Trono",
            "FR": "Héritier du roi",
            "PL": "Spadkobierca Króla"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "add-energy",
            "hit-hero",
            "add-energy",
            "heal",
            "combo",
            "block",
            "combo",
            null
        ],
        "imgUrl": "/heroes/heir-apparent-cz.jpg"
    },
    "HenKing": {
        "gender": "male",
        "origin": "Vampiria",
        "cid": "HenKing",
        "rarity": 1,
        "cname": {
            "CS": "Král kurníku",
            "DE": "Hennenhaus König",
            "EN": "Henhouse king",
            "IT": "Re del Pollaio"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "vampire-bite",
            "curse-weapon",
            "vampire-bite",
            "block",
            "vampire-bite",
            "block",
            "hit-hero-repeated",
            "night-attack"
        ],
        "imgUrl": "/heroes/henhouse-king-cz.jpg"
    },
    "Tris": {
        "gender": "female",
        "origin": "Biolandia",
        "cid": "Tris",
        "rarity": 2,
        "cname": {
            "CS": "Kapradinová víla",
            "DE": "Wald-Fee",
            "EN": "Forest Fairy",
            "IT": "Spirito dell'Edera",
            "FR": "Fée des fougères",
            "PL": "Wróżka z paproci"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "add-energy",
            null,
            "heal",
            "add-energy",
            "heal",
            "combo",
            "heal",
            "add-energy"
        ],
        "imgUrl": "/heroes/forest-fairy-cz.jpg"
    },
    "Arik": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Arik",
        "rarity": 1,
        "cname": {
            "CS": "Pralesní rošťák",
            "DE": "Waldstrolch",
            "EN": "Jungle Runner",
            "IT": "Saetta della Giungla",
            "FR": "Voyou de la jungle",
            "PL": "Leśny goniec"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "hit-weapon",
            "hit-anything",
            "hit-weapon",
            "block",
            "hit-weapon",
            "hit-hero",
            "hit-weapon",
            null
        ],
        "imgUrl": "/heroes/jungle-runner-cz.jpg"
    },
    "Herbert": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Herbert",
        "rarity": 2,
        "cname": {
            "CS": "Potulný rytíř",
            "DE": "Herold",
            "EN": "Knight-Errant",
            "IT": "Cavaliere Errante",
            "FR": "Chevalier errant",
            "PL": "Błędny rycerz"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "all",
            "hit-weapon",
            "combo-trigger",
            null,
            "block",
            null,
            "add-energy",
            "combo"
        ],
        "imgUrl": "/heroes/knight-errant-cz.jpg"
    },
    "Castor": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Castor",
        "rarity": 3,
        "cname": {
            "CS": "Lví machr",
            "DE": "Tollkühner Löwe",
            "EN": "Daredevil Lion",
            "IT": "Leone Temerario",
            "FR": "Crack lion",
            "PL": "Zręczny lew"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "all",
            "hit-anything",
            "combo",
            null,
            "hit-anything",
            "combo-trigger",
            "hit-anything",
            "combo"
        ],
        "imgUrl": "/heroes/daredevil-lion-cz.jpg"
    },
    "DarkJohnny": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "DarkJohnny",
        "rarity": 3,
        "cname": {
            "CS": "Osamělý pistolník",
            "DE": "Revolverheld",
            "EN": "Lone Gunslinger",
            "IT": "Pistolero Solitario",
            "FR": "Pistolero solitaire",
            "PL": "Samotny strzelec"
        },
        "weapon_prof": [
            "sword",
            "wand"
        ],
        "effects": [
            "combo-trigger",
            "hit-hero-repeated",
            "hit-hero",
            null,
            "hit-anything",
            "hit-hero-repeated",
            "combo-trigger",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/lone-gunslinger-cz.jpg"
    },
    "Maestro": {
        "gender": "male",
        "origin": "Vampiria",
        "cid": "Maestro",
        "rarity": 2,
        "cname": {
            "CS": "Maestro morti",
            "EN": "Maestro morti"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "hit-anything",
            "hit-hero-repeated",
            "vampire-bite",
            null,
            "hit-anything",
            "hit-hero-repeated",
            "night-attack",
            null
        ],
        "imgUrl": "/heroes/maestro-morti-cz.jpg"
    },
    "Noctimor": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Noctimor",
        "rarity": 2,
        "cname": {
            "CS": "Bojovník z močálů",
            "DE": "Moorkrieger",
            "EN": "Marsh Warrior",
            "IT": "Guerriero Paludoso",
            "FR": "Lutteur des marais",
            "PL": "Wojownik z bagien"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "all",
            null,
            "add-energy",
            "combo",
            "hit-anything",
            "combo",
            "hit-hero",
            "combo-trigger"
        ],
        "imgUrl": "/heroes/marsh-warrior-cz.jpg"
    },
    "Solrald": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Solrald",
        "rarity": 4,
        "cname": {
            "CS": "Maskovaný hrdina",
            "DE": "Maskierter Held",
            "EN": "Masked Vigilante",
            "IT": "Vigilante Mascherato",
            "FR": "Héros masqué",
            "PL": "Maskowany bohater"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "hit-anything",
            "add-energy",
            "all",
            "block",
            "add-energy",
            "hit-hero-repeated",
            "hit-anything",
            "combo-trigger"
        ],
        "imgUrl": "/heroes/masked-vigilante-cz.jpg"
    },
    "MissVamp": {
        "gender": "female",
        "origin": "Vampiria",
        "cid": "MissVamp",
        "rarity": 3,
        "cname": {
            "CS": "Miss Vampiria",
            "DE": "Frau Vampiria",
            "EN": "Miss Vampiria"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "vampire-bite",
            "heal",
            "vampire-bite",
            "curse-weapon",
            "night-attack",
            null,
            "vampire-bite",
            "heal"
        ],
        "imgUrl": "/heroes/miss-vampiria-cz.jpg"
    },
    "OO": {
        "gender": "neutral",
        "origin": "Biolandia",
        "cid": "OO",
        "rarity": 3,
        "cname": {
            "CS": "Tajemný golem",
            "DE": "Mystischer Golem",
            "EN": "Mysterious Golem",
            "IT": "Golem Misterioso",
            "FR": "Golem mystérieux",
            "PL": "Tajemniczy golem"
        },
        "weapon_prof": [
            "wand"
        ],
        "effects": [
            "hit-weapon",
            "hit-hero",
            "hit-weapon",
            "combo-trigger",
            "hit-anything",
            "block",
            "hit-anything",
            "block"
        ],
        "imgUrl": "/heroes/mysterious-golem-cz.jpg"
    },
    "Naftin": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Naftin",
        "rarity": 4,
        "cname": {
            "CS": "Naftový rytíř",
            "DE": "Öl-Ritter",
            "EN": "Oil Knight",
            "IT": "Cavaliere dell'Olio",
            "FR": "Chevalier du pétrole",
            "PL": "Naftowy rycerz"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "wand"
        ],
        "effects": [
            "hit-hero",
            null,
            "hit-anything",
            "combo",
            "all",
            "combo",
            "add-energy",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/oil-knight-cz.jpg"
    },
    "Gogo": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Gogo",
        "rarity": 2,
        "cname": {
            "CS": "Pixelový Kúzelník",
            "DE": "Pixel Magier",
            "EN": "Pixel Wizard",
            "FR": "Mage pixel",
            "PL": "Czarodziej pikselus"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "hit-hero",
            "hit-anything",
            "hit-hero-repeated",
            null,
            "hit-hero",
            "hit-anything",
            "combo",
            null
        ],
        "imgUrl": "/heroes/pixel-wizard-cz.jpg"
    },
    "Athyriel": {
        "gender": "female",
        "origin": "Biolandia",
        "cid": "Athyriel",
        "rarity": 1,
        "cname": {
            "CS": "Královna víl",
            "DE": "Feenkönigin",
            "EN": "Pixie Queen",
            "IT": "Regina delle Fate",
            "FR": "Reine des fées",
            "PL": "Królowa wróżek"
        },
        "weapon_prof": [
            "sword",
            "wand"
        ],
        "effects": [
            "hit-anything",
            "hit-hero-repeated",
            "add-energy",
            "hit-hero",
            "combo-trigger",
            null,
            "hit-hero-repeated",
            null
        ],
        "imgUrl": "/heroes/pixie-queen-cz.jpg"
    },
    "ElCider": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "ElCider",
        "rarity": 3,
        "cname": {
            "CS": "Vznešený paladin",
            "DE": "Erhabener Paladin",
            "EN": "Revered Paladin",
            "IT": "Illustre Paladino",
            "FR": "Noble paladin",
            "PL": "Wierny paladyn"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "add-energy",
            "heal",
            "add-energy",
            "block",
            "block",
            null,
            "heal",
            "block"
        ],
        "imgUrl": "/heroes/revered-paladin-cz.jpg"
    },
    "Scalprhino": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Scalprhino",
        "rarity": 2,
        "cname": {
            "CS": "Nosorohý mlátič",
            "DE": "Nashorn-Kämpfer",
            "EN": "Rhino Fighter",
            "IT": "Rinoceronte Rissoso",
            "FR": "Rhino batteur",
            "PL": "Nosorogi wojownik"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "hit-anything",
            "block",
            "hit-hero",
            "hit-weapon",
            "hit-hero",
            "hit-weapon",
            "hit-anything",
            "block"
        ],
        "imgUrl": "/heroes/rhino-fighter-cz.jpg"
    },
    "ROB5000": {
        "gender": "neutral",
        "origin": "Techlandia",
        "cid": "ROB5000",
        "rarity": 3,
        "cname": {
            "CS": "Bojový robot",
            "DE": "Roboter-Krieger",
            "EN": "Robot Battler",
            "IT": "Lottatore Robotico",
            "FR": "Robot lutteur",
            "PL": "Waleczny robot"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "hit-weapon",
            "combo-trigger",
            "hit-anything",
            "combo",
            "hit-anything",
            null,
            "hit-anything",
            null
        ],
        "imgUrl": "/heroes/robot-battler-cz.jpg"
    },
    "Housewife": {
        "gender": "female",
        "origin": "Canbalandia",
        "cid": "Housewife",
        "rarity": 1,
        "cname": {
            "CS": "Drsná hospodyňka",
            "DE": "Grobe Hausfrau",
            "EN": "Rough Housewife",
            "IT": "Casalinga Grezza"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "add-energy",
            "crunch-weapon",
            "hit-hero-repeated",
            null,
            "hit-hero-repeated",
            null,
            "stop-discard",
            "hit-weapon"
        ],
        "imgUrl": "/heroes/rough-housewife-cz.jpg"
    },
    "Sabertooth": {
        "gender": "male",
        "origin": "Vampiria",
        "cid": "Sabertooth",
        "rarity": 3,
        "cname": {
            "CS": "Šavlozubý tygr",
            "EN": "Sabertooth tiger"
        },
        "weapon_prof": [
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "curse-weapon",
            "block",
            "curse-weapon",
            "block",
            "curse-weapon",
            "vampire-bite",
            "all",
            "hit-weapon"
        ],
        "imgUrl": "/heroes/saber-toothed-tiger-cz.jpg"
    },
    "Junky": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Junky",
        "rarity": 1,
        "cname": {
            "CS": "Král smetiště",
            "DE": "Schrottkönig",
            "EN": "Junkyard Boss",
            "IT": "Rigattiere Capo",
            "FR": "Roi des décharges",
            "PL": "Król wysypiska"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "hit-weapon",
            "combo",
            "hit-weapon",
            null,
            "hit-hero",
            "combo-trigger",
            "hit-weapon",
            "hit-anything"
        ],
        "imgUrl": "/heroes/junkyard-boss-cz.jpg"
    },
    "Cthyzmo": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Cthyzmo",
        "rarity": 2,
        "cname": {
            "CS": "Inženýr chapadelník",
            "DE": "Okto-Ingenieur",
            "EN": "Slimeball Engineer",
            "IT": "Ingegnere Viscido",
            "FR": "Ingénieur tentacules",
            "PL": "Śluzowaty wynalazca"
        },
        "weapon_prof": [
            "wand"
        ],
        "effects": [
            "heal",
            "hit-hero",
            "heal",
            "add-energy",
            "heal",
            null,
            "combo-trigger",
            "block"
        ],
        "imgUrl": "/heroes/slimeball-engineer-cz.jpg"
    },
    "Heretic": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Heretic",
        "rarity": 3,
        "cname": {
            "CS": "Kacíř",
            "DE": "Der Ketzer",
            "EN": "The Heretic",
            "IT": "L’Eretico"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "hit-hero-repeated",
            "add-energy",
            "stop-discard",
            "all",
            "hit-hero-repeated",
            "crunch-weapon",
            "combo",
            "add-energy"
        ],
        "imgUrl": "/heroes/the-heretic-cz.jpg"
    },
    "Pollux": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Pollux",
        "rarity": 2,
        "cname": {
            "CS": "Lví srdce",
            "DE": "Löwenherz",
            "EN": "the Lionhearted",
            "IT": "Cuor di Leone",
            "FR": "Cœur de lion",
            "PL": "Lwie serce"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "all",
            "hit-hero-repeated",
            "hit-hero",
            "hit-hero-repeated",
            "block",
            null,
            "heal",
            null
        ],
        "imgUrl": "/heroes/the-lionhearted-cz.jpg"
    },
    "Yawi": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Yawi",
        "rarity": 3,
        "cname": {
            "CS": "Mechomůrek",
            "DE": "Pilz-Schamane",
            "EN": "Toadstool Shaman",
            "IT": "Sciamano Muscario",
            "FR": "Chaman des champignons",
            "PL": "Mechomorek"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "add-energy",
            "block",
            "add-energy",
            "heal",
            "hit-anything",
            "heal",
            "hit-weapon",
            "heal"
        ],
        "imgUrl": "/heroes/toadstool-shaman-cz.jpg"
    },
    "Whurg": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Whurg",
        "rarity": 1,
        "cname": {
            "CS": "Sloní kolos",
            "DE": "Elefanten-Koloss",
            "EN": "Tusked Colossus",
            "IT": "Colosso Zannuto",
            "FR": "Colosse éléphant",
            "PL": "Olbrzymi kieł"
        },
        "weapon_prof": [
            "axe"
        ],
        "effects": [
            "hit-hero",
            "hit-weapon",
            "hit-hero",
            "hit-weapon",
            "hit-hero",
            "hit-weapon",
            "combo",
            "block"
        ],
        "imgUrl": "/heroes/tusked-colossus-cz.jpg"
    },
    "Bunny": {
        "gender": "male",
        "origin": "Vampiria",
        "cid": "Bunny",
        "rarity": 1,
        "cname": {
            "CS": "Upíří králíček",
            "DE": "Vampirhäschen",
            "EN": "Vampire Bunny",
            "IT": "Coniglio Vampiro"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "hit-hero",
            "hit-hero-repeated",
            "hit-hero",
            "hit-weapon",
            "vampire-bite",
            null,
            "night-attack",
            null
        ],
        "imgUrl": "/heroes/vampire-bunny-cz.jpg"
    },
    "VampHunter": {
        "gender": "male",
        "origin": "Vampiria",
        "cid": "VampHunter",
        "rarity": 1,
        "cname": {
            "CS": "Lovec upírů",
            "DE": "Vampirjäger",
            "EN": "Vampire hunter",
            "IT": "Caccia-Vampiri"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "hit-hero",
            "hit-weapon",
            "hit-hero",
            "heal",
            "vampire-bite",
            "combo-trigger",
            "vampire-bite",
            "hit-anything"
        ],
        "imgUrl": "/heroes/vampire-hunter-cz.jpg"
    },
    "VampPrince": {
        "gender": "male",
        "origin": "Vampiria",
        "cid": "VampPrince",
        "rarity": 4,
        "cname": {
            "CS": "Upíří princ",
            "DE": "Vampirprinz",
            "EN": "Vampire prince",
            "IT": "Principe dei Vampiri"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "vampire-bite",
            "hit-hero-repeated",
            "hit-hero",
            "hit-hero-repeated",
            "curse-weapon",
            "night-attack",
            "vampire-bite",
            "night-attack"
        ],
        "imgUrl": "/heroes/vampire-prince-cz.jpg"
    },
    "Vulture": {
        "gender": "male",
        "origin": "Canbalandia",
        "cid": "Vulture",
        "rarity": 2,
        "cname": {
            "CS": "Nasupený sup",
            "DE": "Rachsüchtiger Geier",
            "EN": "Vengeful Vulture",
            "IT": "Avvoltoio Accanito"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "bow"
        ],
        "effects": [
            "stop-discard",
            null,
            "crunch-weapon",
            "hit-anything",
            "stop-discard",
            "hit-anything",
            "combo",
            "hit-anything"
        ],
        "imgUrl": "/heroes/vengeful-vulture-cz.jpg"
    },
    "Agron": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Agron",
        "rarity": 1,
        "cname": {
            "CS": "Rytíř vidlák",
            "DE": "Dorfritter",
            "EN": "Village Squire",
            "IT": "Signore del Villaggio",
            "FR": "Chevalier à la dague",
            "PL": "Rycerz wieśniak"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "hit-weapon",
            "block",
            "hit-hero",
            "block",
            "hit-hero",
            "block",
            "hit-weapon",
            "block"
        ],
        "imgUrl": "/heroes/village-squire-cz.jpg"
    },
    "Ninjawatt": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Ninjawatt",
        "rarity": 1,
        "cname": {
            "CS": "Elektronindža",
            "DE": "Voltaischer Ninja",
            "EN": "Voltaic Ninja",
            "IT": "Ninja Voltaico",
            "FR": "Electroninja",
            "PL": "Elektroninja"
        },
        "weapon_prof": [
            "sword"
        ],
        "effects": [
            "hit-weapon",
            "hit-hero-repeated",
            "hit-hero-repeated",
            null,
            "hit-anything",
            "combo-trigger",
            "combo",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/voltaic-ninja-cz.jpg"
    },
    "Darkenstein": {
        "gender": "male",
        "origin": "Vampiria",
        "cid": "Darkenstein",
        "rarity": 4,
        "cname": {
            "CS": "von Darkenstein",
            "EN": "von Darkenstein"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "curse-weapon",
            "hit-anything",
            "hit-hero",
            "combo-trigger",
            "all",
            "vampire-bite",
            "curse-weapon",
            "night-attack"
        ],
        "imgUrl": "/heroes/von-darkenstein-cz.jpg"
    },
    "Timberman": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Timberman",
        "rarity": 1,
        "cname": {
            "CS": "Drvoštěp",
            "DE": "Holzfäller",
            "EN": "Woodcutter",
            "IT": "Taglialegna",
            "FR": "Bûcheron",
            "PL": "Drwal"
        },
        "weapon_prof": [
            "axe"
        ],
        "effects": [
            "hit-hero",
            "hit-weapon",
            "hit-anything",
            "hit-weapon",
            "hit-anything",
            "hit-weapon",
            "hit-hero",
            "hit-weapon"
        ],
        "imgUrl": "/heroes/woodcutter-cz.jpg"
    },
    "Bukdub": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Bukdub",
        "rarity": 1,
        "cname": {
            "CS": "Lesní sekáč",
            "DE": "Hölzerner Haudegen",
            "EN": "Woodland Brawler",
            "IT": "Lottatore dei Boschi",
            "FR": "Faucheur des forêts",
            "PL": "Leśny rozbijaka"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "hit-weapon",
            null,
            "hit-anything",
            "combo",
            "hit-hero",
            "hit-hero-repeated",
            "hit-hero",
            null
        ],
        "imgUrl": "/heroes/woodland-brawler-cz.jpg"
    },
    "Burg": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Burg",
        "rarity": 1,
        "cname": {
            "CS": "Mamutí chuligán",
            "DE": "Mammut-Randalierer",
            "EN": "Woolly Hooligan",
            "IT": "Vandalo Peloso",
            "FR": "Hooligan mammouth",
            "PL": "Mamuci awanturnik"
        },
        "weapon_prof": [
            "axe"
        ],
        "effects": [
            "hit-hero",
            "block",
            "hit-hero",
            "hit-weapon",
            "hit-hero",
            "block",
            "hit-weapon",
            "combo"
        ],
        "imgUrl": "/heroes/woolly-hooligan-cz.jpg"
    },
    "Johan": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Johan",
        "rarity": 1,
        "cname": {
            "CS": "Nebojácný holomek",
            "DE": "Kühner Flegel",
            "EN": "Fearless Rascal",
            "IT": "Malandrino Impavido",
            "FR": "Vaurien sans-peur",
            "PL": "Nieustraszony łobuz"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "hit-weapon",
            "block",
            "add-energy",
            "block",
            "hit-hero",
            null,
            "add-energy",
            null
        ],
        "imgUrl": "/heroes/fearless-rascal-cz.jpg"
    },
    "BalloonBot": {
        "gender": "neutral",
        "origin": "Zepplandia",
        "cid": "BalloonBot",
        "rarity": 1,
        "cname": {
            "CS": "Balonbot",
            "DE": "Ballonbot",
            "EN": "Balloonbot",
            "IT": "Robot di Palloncino"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "combo",
            "heal",
            "hit-anything",
            "heal",
            "fix-weapon",
            "heal",
            "combo",
            "hit-weapon"
        ],
        "imgUrl": "/heroes/balloonbot-cz.jpg"
    },
    "Boilerman": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "Boilerman",
        "rarity": 2,
        "cname": {
            "CS": "Kotelník",
            "DE": "Kesselmann",
            "EN": "Boilerman",
            "IT": "Bollitorista"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "fix-weapon",
            null,
            "hit-hero",
            "combo",
            "hit-hero",
            "block",
            "fix-weapon",
            "combo"
        ],
        "imgUrl": "/heroes/boilerman-cz.jpg"
    },
    "CleverBot": {
        "gender": "neutral",
        "origin": "Zepplandia",
        "cid": "CleverBot",
        "rarity": 2,
        "cname": {
            "CS": "Chytrobot",
            "EN": "Cleverbot",
            "IT": "Robot Intelligente"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "add-energy",
            "hit-double",
            "heal",
            "trap",
            "fix-weapon",
            "hit-hero-repeated",
            "fix-weapon",
            null
        ],
        "imgUrl": "/heroes/cleverbot-cz.jpg"
    },
    "CloudWalker": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "CloudWalker",
        "rarity": 1,
        "cname": {
            "CS": "Mrakoplavec",
            "DE": "Wolkenwanderer",
            "EN": "Cloud walker",
            "IT": "Testa fra le Nuvole"
        },
        "weapon_prof": [
            "sword",
            "wand"
        ],
        "effects": [
            "hit-double",
            "trap",
            "hit-double",
            "combo",
            "hit-anything",
            null,
            "fix-weapon",
            "block"
        ],
        "imgUrl": "/heroes/cloud-walker-cz.jpg"
    },
    "CrimeBot": {
        "gender": "neutral",
        "origin": "Zepplandia",
        "cid": "CrimeBot",
        "rarity": 3,
        "cname": {
            "CS": "Automat na zločin",
            "DE": "Verbrecherbot",
            "EN": "Crimebot",
            "IT": "Robote criminale"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "combo",
            "trap",
            "hit-hero-repeated",
            null,
            "combo",
            "trap",
            "hit-double",
            "fix-weapon"
        ],
        "imgUrl": "/heroes/crimebot-cz.jpg"
    },
    "MurderCrow": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "MurderCrow",
        "rarity": 3,
        "cname": {
            "CS": "Havraní asasín",
            "DE": "Krähenmörder",
            "EN": "Crow murderer",
            "IT": "Corvo Assassino"
        },
        "weapon_prof": [
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "hit-weapon",
            "combo",
            "hit-anything",
            "trap",
            "hit-double",
            "hit-hero-repeated",
            "hit-double",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/crow-murderer-cz.jpg"
    },
    "Mongolfier": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "Mongolfier",
        "rarity": 4,
        "cname": {
            "CS": "de Mongolfier",
            "EN": "de Mongolfier"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "bow"
        ],
        "effects": [
            "trap",
            "block",
            "all",
            "hit-double",
            "fix-weapon",
            "block",
            "trap",
            null
        ],
        "imgUrl": "/heroes/de-mongolfier-cz.jpg"
    },
    "GnomeWarrior": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "GnomeWarrior",
        "rarity": 2,
        "cname": {
            "CS": "Gnómský bojovník",
            "DE": "Gnomkrieger",
            "EN": "Gnome Warrior",
            "IT": "Gnomo Guerriero"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "hit-anything",
            "fix-weapon",
            "hit-hero",
            "block",
            "all",
            "block",
            "combo",
            "trap"
        ],
        "imgUrl": "/heroes/gnome-warrior-cz.jpg"
    },
    "Helmsman": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "Helmsman",
        "rarity": 3,
        "cname": {
            "CS": "Kormidelník",
            "DE": "Steuermann",
            "EN": "Helmsman",
            "IT": "Timoniere"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "fix-weapon",
            "combo",
            "all",
            "hit-hero",
            "fix-weapon",
            "block",
            "combo",
            null
        ],
        "imgUrl": "/heroes/helmsman-cz.jpg"
    },
    "LadyZepplin": {
        "gender": "female",
        "origin": "Zepplandia",
        "cid": "LadyZepplin",
        "rarity": 3,
        "cname": {
            "CS": "Lady Zepplin",
            "DE": "Frau Zeppelin",
            "EN": "Lady Zeppelin",
            "IT": "Signorina Zeppelin"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "hit-double",
            "trap",
            "hit-hero",
            "hit-hero-repeated",
            "add-energy",
            "fix-weapon",
            "hit-double",
            "trap"
        ],
        "imgUrl": "/heroes/lady-zeppelin-cz.jpg"
    },
    "Pidgeon": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "Pidgeon",
        "rarity": 1,
        "cname": {
            "CS": "Holubí posel",
            "DE": "Taubenkurier",
            "EN": "Pidgeon courier",
            "IT": "Piccione Corriere"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "hit-double",
            "combo",
            "hit-double",
            "fix-weapon",
            "hit-anything",
            "fix-weapon",
            "hit-weapon",
            null
        ],
        "imgUrl": "/heroes/pidgeon-courier-cz.jpg"
    },
    "Penguin": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "Penguin",
        "rarity": 2,
        "cname": {
            "CS": "Bombardovací tučňák",
            "DE": "Raketenpinguin",
            "EN": "Rocket Penguin",
            "IT": "Pinguino Esplosivo"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "bow"
        ],
        "effects": [
            "hit-hero",
            "combo-trigger",
            "hit-double",
            null,
            "hit-double",
            "combo-trigger",
            "hit-weapon",
            "trap"
        ],
        "imgUrl": "/heroes/rocket-penguin-cz.jpg"
    },
    "SheepPatrol": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "SheepPatrol",
        "rarity": 1,
        "cname": {
            "CS": "Ovčí hlídka",
            "DE": "Schafpatrouille",
            "EN": "Sheep Patrol",
            "IT": "Pattugliapecore"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "hit-hero",
            "trap",
            "hit-hero",
            "hit-weapon",
            "hit-hero",
            "trap",
            "combo-trigger",
            "fix-weapon"
        ],
        "imgUrl": "/heroes/sheep-patrol-cz.jpg"
    },
    "TrophyHunter": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "TrophyHunter",
        "rarity": 1,
        "cname": {
            "CS": "Lovec trofejí",
            "DE": "Trophäenjäger",
            "EN": "Trophy Hunter",
            "IT": "Cacciatempo"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "fix-weapon",
            "combo",
            "add-energy",
            "trap",
            "trap",
            null,
            "hit-double",
            null
        ],
        "imgUrl": "/heroes/trophy-hunter-cz.jpg"
    },
    "BaronZepplin": {
        "gender": "male",
        "origin": "Zepplandia",
        "cid": "BaronZepplin",
        "rarity": 4,
        "cname": {
            "CS": "von Zepplin",
            "EN": "von Zepplin"
        },
        "weapon_prof": [
            "sword",
            "wand"
        ],
        "effects": [
            "hit-double",
            "hit-hero",
            "combo-trigger",
            "trap",
            "hit-double",
            "hit-hero-repeated",
            "heal",
            "combo"
        ],
        "imgUrl": "/heroes/von-zepplin-cz.jpg"
    },
    "Alzak": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Alzak",
        "rarity": 2,
        "cname": {
            "CS": "Bojovník z Alzahradu",
            "DE": "Kämpfer von Alzahrad",
            "EN": "Fighter of Alzahrad",
            "IT": "Lottatore di Alzahrad"
        },
        "weapon_prof": [
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "hit-hero",
            "stop-discard",
            "vampire-bite",
            "trap",
            "block",
            "stop-discard",
            "vampire-bite",
            "trap"
        ],
        "imgUrl": "/heroes/fighter-of-alzahrad-cz.jpg"
    },
    "Lord_BioTech": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Lord_BioTech",
        "rarity": 4,
        "cname": {
            "CS": "Biotechlandský lord",
            "DE": "Lord von Biotechlandia",
            "EN": "Lord of Biotechlandia",
            "IT": "Capo Biotechlandese"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "all",
            "block",
            "hit-double",
            "fix-weapon",
            "all",
            "hit-hero-repeated",
            "stop-discard",
            "block"
        ],
        "imgUrl": "/heroes/lord-of-biotechlandia-cz.jpg"
    },
    "Lord_Canbalandia": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Lord_Canbalandia",
        "rarity": 4,
        "cname": {
            "CS": "Canbalandský lord",
            "DE": "Lord von Canbalandia",
            "EN": "Lord of Canbalandia",
            "IT": "Capo di Canbalandia"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "trap",
            "combo",
            "curse-weapon",
            "crunch-weapon",
            "hit-hero",
            "night-attack",
            "vampire-bite",
            "crunch-weapon"
        ],
        "imgUrl": "/heroes/lord-of-canbalandia-cz.jpg"
    },
    "Lord_Vampiria": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Lord_Vampiria",
        "rarity": 4,
        "cname": {
            "CS": "Vampirijský lord",
            "DE": "Lord von Vampiria",
            "EN": "Lord of Vampiria",
            "IT": "Lord di Vampiria"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "crunch-weapon",
            "hit-hero-repeated",
            "heal",
            "hit-anything",
            "vampire-bite",
            "trap",
            "heal",
            "night-attack"
        ],
        "imgUrl": "/heroes/lord-of-vampiria-cz.jpg"
    },
    "Lord_Zepplandia": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Lord_Zepplandia",
        "rarity": 4,
        "cname": {
            "CS": "Zepplandský lord",
            "DE": "Lord von Zepplandia",
            "EN": "Lord of Zepplandia",
            "IT": "Capo di Zepplandia"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "bow"
        ],
        "effects": [
            "add-energy",
            "combo-trigger",
            "hit-double",
            "hit-hero",
            "hit-double",
            "combo",
            "curse-weapon",
            "fix-weapon"
        ],
        "imgUrl": "/heroes/lord-of-zepplandia-cz.jpg"
    },
    "WilhelmTell": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "WilhelmTell",
        "rarity": 2,
        "cname": {
            "CS": "Krotitel jablek",
            "DE": "Apfeljäger",
            "EN": "Apple slayer",
            "IT": "Sterminatore di mele"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "hit-weapon",
            "hit-hero",
            "hit-anything",
            "block",
            "hit-weapon",
            "add-energy",
            "hit-weapon",
            "combo"
        ],
        "imgUrl": "/heroes/apple-slayer-cz.jpg"
    },
    "Brumbrum": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Brumbrum",
        "rarity": 2,
        "cname": {
            "CS": "Lovec odměn",
            "DE": "Prämienjäger",
            "EN": "Bounty hunter",
            "IT": "Cacciatore di Taglie"
        },
        "weapon_prof": [
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "hit-hero",
            "heal",
            "hit-hero",
            "hit-hero-repeated",
            "hit-hero",
            "hit-anything",
            "block",
            "hit-anything"
        ],
        "imgUrl": "/heroes/bounty-hunter-cz.jpg"
    },
    "Gladiator": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Gladiator",
        "rarity": 3,
        "cname": {
            "CS": "Vymetač arén",
            "DE": "Arena Besen",
            "EN": "Arena broomer",
            "IT": "Ramazza dell'Arena"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "crunch-weapon",
            "trap",
            "heal",
            "block",
            "hit-hero",
            "trap",
            "hit-hero-repeated",
            "block"
        ],
        "imgUrl": "/heroes/arena-broomer-cz.jpg"
    },
    "Ester": {
        "gender": "female",
        "origin": "Middlemyst",
        "cid": "Ester",
        "rarity": 4,
        "cname": {
            "CS": "Esterminátorka",
            "DE": "Esterminator",
            "EN": "Esterminator",
            "IT": "Esterminatrice"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "wand"
        ],
        "effects": [
            "add-energy",
            "hit-double",
            "all",
            null,
            "hit-hero",
            null,
            "heal",
            "cumulative-attack"
        ],
        "imgUrl": "/heroes/esterminator-cz.jpg"
    },
    "Wedry": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Wedry",
        "rarity": 3,
        "cname": {
            "CS": "Wedrytíř",
            "DE": "Heiratsritter",
            "EN": "Wedryknight",
            "IT": "Cavalieri Wedry"
        },
        "weapon_prof": [
            "axe",
            "wand"
        ],
        "effects": [
            "hit-hero",
            "hit-anything",
            "hit-weapon",
            "cumulative-attack",
            "hit-weapon",
            "add-energy",
            "hit-double",
            "block"
        ],
        "imgUrl": "/heroes/wedryknight-cz.jpg"
    },
    "BattleFerda": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "BattleFerda",
        "rarity": 4,
        "cname": {
            "CS": "Bojový Ferda",
            "DE": "Ferdy die Kriegerameise",
            "EN": "Battle Ferda",
            "IT": "Formica guerriera"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "all",
            "hit-hero-repeated",
            "hit-double",
            "hit-hero-repeated",
            "hit-double",
            "fix-weapon",
            "heal",
            "block"
        ],
        "imgUrl": "/heroes/battle-ferda-cz.jpg"
    },
    "Overgamer_red": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Overgamer_red",
        "rarity": 4,
        "cname": {
            "CS": "Rudý Overgamer",
            "DE": "Roter Overgamer",
            "EN": "Red Overgamer",
            "IT": "Overgamer rosso",
            "HU": "Vörös Overgamer"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "cumulative-attack",
            "block",
            "hit-weapon",
            "hit-hero-repeated",
            "cumulative-attack",
            "hit-hero-repeated",
            "all",
            "extra-coins"
        ],
        "imgUrl": "/heroes/red-overgamer-cz.jpg"
    },
    "FuriousScout": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "FuriousScout",
        "rarity": 1,
        "cname": {
            "CS": "Mladý dobrodruh",
            "DE": "Junger Abenteurer",
            "EN": "Young adventurer",
            "IT": "Giovane Avevnturiero"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "add-energy",
            null,
            "hit-hero",
            null,
            "hit-hero",
            "add-energy",
            "heal",
            "hit-anything"
        ],
        "imgUrl": "/heroes/young-adventurer-cz.jpg"
    },
    "Boss_MifMif": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Boss_MifMif",
        "rarity": 1,
        "cname": {
            "CS": "Opičí černokněžník",
            "EN": "Monkey Magician"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "hit-anything",
            null,
            "hit-weapon",
            "block",
            "hit-weapon",
            null,
            "hit-weapon",
            "hit-anything"
        ],
        "imgUrl": "/heroes/monkey-magician-cz.jpg"
    },
    "Boss_PurplePotato": {
        "gender": "male",
        "origin": "Biolandia",
        "cid": "Boss_PurplePotato",
        "rarity": 2,
        "cname": {
            "CS": "Bramborový poděs",
            "EN": "Purple Punk Potato"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "bow"
        ],
        "effects": [
            "hit-hero",
            "hit-weapon",
            "hit-hero",
            "hit-anything",
            "hit-weapon",
            "combo",
            "hit-hero",
            "combo"
        ],
        "imgUrl": "/heroes/purple-punk-potato-cz.jpg"
    },
    "Boss_Troll": {
        "gender": "male",
        "origin": "Techlandia",
        "cid": "Boss_Troll",
        "rarity": 1,
        "cname": {
            "CS": "Prašivý troll",
            "EN": "Touchy Troll"
        },
        "weapon_prof": [
            "axe"
        ],
        "effects": [
            "hit-hero",
            "block",
            "hit-weapon",
            "block",
            "hit-hero",
            "combo",
            "hit-hero",
            "hit-anything"
        ],
        "imgUrl": "/heroes/touchy-troll-cz.jpg"
    },
    "Boss_Rachael": {
        "gender": "female",
        "origin": "Techlandia",
        "cid": "Boss_Rachael",
        "rarity": 1,
        "cname": {
            "CS": "Protivná průzkumnice",
            "EN": "Evil Explorer"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "hit-weapon",
            null,
            "hit-hero",
            null,
            "hit-hero",
            "hit-anything",
            "hit-weapon",
            "hit-anything"
        ],
        "imgUrl": "/heroes/evil-explorer-cz.jpg"
    },
    "Czech_Bozena": {
        "gender": "female",
        "origin": "Middlemyst",
        "cid": "Czech_Bozena",
        "rarity": 3,
        "cname": {
            "CS": "Bo-Žena",
            "EN": "Wo-Woman"
        },
        "weapon_prof": [
            "bow",
            "wand"
        ],
        "effects": [
            "vampire-bite",
            "hit-hero",
            "vampire-bite",
            "hit-anything",
            "crunch-weapon",
            "combo",
            "heal",
            "hit-double"
        ],
        "imgUrl": "/heroes/wo-woman-cz.jpg"
    },
    "Czech_Amos": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Czech_Amos",
        "rarity": 3,
        "cname": {
            "CS": "Chrabrý učitel",
            "EN": "Brave teacher"
        },
        "weapon_prof": [
            "sword",
            "axe"
        ],
        "effects": [
            "heal",
            "combo",
            "hit-anything",
            "block",
            "heal",
            "hit-hero-repeated",
            "hit-anything",
            null
        ],
        "imgUrl": "/heroes/brave-teacher-cz.jpg"
    },
    "Czech_Vaclav": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Czech_Vaclav",
        "rarity": 4,
        "cname": {
            "CS": "Vladař z učebnic",
            "DE": "Herr aus Lehrbüche",
            "EN": "Ruler from textbook",
            "IT": "Righello dei libri"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "hit-weapon",
            "hit-hero-repeated",
            "all",
            null,
            "all",
            null,
            "hit-weapon",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/ruler-from-textbook-cz.jpg"
    },
    "Greek": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Greek",
        "rarity": 3,
        "cname": {
            "CS": "Udatný hoplita",
            "EN": "Valiant hoplite"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "wand"
        ],
        "effects": [
            "block",
            "hit-hero",
            "add-energy",
            "hit-hero",
            "all",
            null,
            "block",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/valiant-hoplite-cz.jpg"
    },
    "Hungarian": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Hungarian",
        "rarity": 3,
        "cname": {
            "CS": "Maďarský hajduk",
            "DE": "Ungarischer husar",
            "EN": "Hungarian hussar",
            "IT": "Ussaro Ungherese"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "bow"
        ],
        "effects": [
            "hit-anything",
            "hit-weapon",
            "block",
            null,
            "block",
            "combo",
            "block",
            "combo-trigger"
        ],
        "imgUrl": "/heroes/hungarian-hussar-cz.jpg"
    },
    "Xmas_fir": {
        "gender": "male",
        "origin": "Middlemyst",
        "cid": "Xmas_fir",
        "rarity": 4,
        "cname": {
            CS: "Štědrá Zjedle"
        },
        "weapon_prof": [
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "cumulative-attack",
            "night-attack",
            "crunch-weapon",
            "fix-weapon",
            "cumulative-attack",
            "combo",
            "trap",
            "combo"
        ],
        "imgUrl": "/heroes/blank.jpg"
    },
    "Guvnor": {
        "gender": "male",
        "origin": "Spinbay",
        "cid": "Guvnor",
        "rarity": 4,
        "cname": {
            "CS": "Guvernér Spinbaye",
            "DE": "Spinbay Direktor",
            "EN": "Spinbay Governor",
            "IT": "Viceré di Spinbay"
        },
        "weapon_prof": [
            "sword",
            "bow",
            "wand"
        ],
        "effects": [
            "cumulative-attack",
            "hit-weapon",
            "hit-hero",
            "combo",
            "cumulative-attack",
            "combo",
            "cumulative-attack",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/spinbay-governor-cz.jpg"
    },
    "Dockworker": {
        "gender": "male",
        "origin": "Spinbay",
        "cid": "Dockworker",
        "rarity": 2,
        "cname": {
            "CS": "Námezdní nosič",
            "DE": "Hafenarbeiter",
            "EN": "Dockworker",
            "IT": "Scaricatore di porto"
        },
        "weapon_prof": [
            "axe",
            "bow"
        ],
        "effects": [
            "hit-hero",
            "hit-hero-repeated",
            "hit-hero",
            "block",
            "hit-hero",
            "extra-coins",
            "hit-weapon",
            null
        ],
        "imgUrl": "/heroes/dockworker-cz.jpg"
    },
    "Innkeeper": {
        "gender": "male",
        "origin": "Spinbay",
        "cid": "Innkeeper",
        "rarity": 1,
        "cname": {
            "CS": "Přístavní krčmář",
            "DE": "Hafenwirtschafter",
            "EN": "Port Innkeeper",
            "IT": "Oste del porto"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "wand"
        ],
        "effects": [
            "combo",
            null,
            "block",
            "extra-coins",
            "cumulative-attack",
            "heal",
            "combo-trigger",
            "extra-coins"
        ],
        "imgUrl": "/heroes/port-innkeeper-cz.jpg"
    },
    "RoboExchange": {
        "gender": "male",
        "origin": "Spinbay",
        "cid": "RoboExchange",
        "rarity": 2,
        "cname": {
            "CS": "Robosměnárna",
            "DE": "RoboWechsler",
            "EN": "RoboExchange",
            "IT": "Robot Cambiavalute"
        },
        "weapon_prof": [
            "axe",
            "bow",
            "wand"
        ],
        "effects": [
            "cumulative-attack",
            "extra-coins",
            "cumulative-attack",
            "add-energy",
            "hit-anything",
            "extra-coins",
            "hit-anything",
            "hit-hero"
        ],
        "imgUrl": "/heroes/roboexchange-cz.jpg"
    },
    "Dancer": {
        "gender": "female",
        "origin": "Spinbay",
        "cid": "Dancer",
        "rarity": 3,
        "cname": {
            "CS": "Spinbayská tanečnice",
            "DE": "Spinbay Tänzer",
            "EN": "Spinbay Dancer",
            "IT": "Ballerina di Spinbay"
        },
        "weapon_prof": [
            "sword",
            "axe",
            "wand"
        ],
        "effects": [
            "hit-hero",
            "heal",
            "all",
            "hit-hero-repeated",
            "cumulative-attack",
            "block",
            "cumulative-attack",
            "extra-coins"
        ],
        "imgUrl": "/heroes/spinbay-dancer-cz.jpg"
    },
    "Bedouin": {
        "gender": "male",
        "origin": "Spinbay",
        "cid": "Bedouin",
        "rarity": 1,
        "cname": {
            "CS": "Tajemný cizinec",
            "DE": "Mysteriöse Fremde",
            "EN": "Mysterious Foreigner",
            "IT": "Straniero misterioso"
        },
        "weapon_prof": [
            "sword",
            "bow"
        ],
        "effects": [
            "hit-weapon",
            "extra-coins",
            "add-energy",
            "hit-hero-repeated",
            "add-energy",
            "hit-hero-repeated",
            "cumulative-attack",
            "hit-hero-repeated"
        ],
        "imgUrl": "/heroes/mysterious-foreigner-cz.jpg"
    }
} as const;

export type heroCid = keyof typeof heroTypeData;
export { heroTypeData }
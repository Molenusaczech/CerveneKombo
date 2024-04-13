import { weaponCardTypes } from "@/types/weaponType";
import exp from "constants";

const weaponTypeData: weaponCardTypes = {
    "Bow_Bamboo": {
        "cid": "Bow_Bamboo",
        "rarity": 2,
        "cname": {
            "CS": "Bambusový luk",
            "DE": "Bambusbogen",
            "EN": "Bamboo Bow",
            "FR": "Arc bambou",
            "PL": "Łuk bambusowy"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/bamboo-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Sword_Corkscrew": {
        "cid": "Sword_Corkscrew",
        "rarity": 1,
        "cname": {
            "CS": "Bojová vývrtka",
            "DE": "Kampf-Korkenzieher",
            "EN": "Battle Corkscrew"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/battle-corkscrew-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Bow_Toothy": {
        "cid": "Bow_Toothy",
        "rarity": 3,
        "cname": {
            "CS": "Zuboluk",
            "DE": "Beißender Bogen",
            "EN": "Biting Bow"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/biting-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            }
        ]
    },
    "Wand_Candlestick": {
        "cid": "Wand_Candlestick",
        "rarity": 4,
        "cname": {
            "CS": "Černá můra",
            "EN": "Black Candelabra"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/black-candelabra-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            }
        ]
    },
    "Sword_Life": {
        "cid": "Sword_Life",
        "rarity": 2,
        "cname": {
            "CS": "Čepel života",
            "DE": "Schwert des Lebens",
            "EN": "Blade of Life",
            "FR": "Lame de vie",
            "PL": "Ostrze życia"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/blade-of-life-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            }
        ]
    },
    "Sword_SilverBlade": {
        "cid": "Sword_SilverBlade",
        "rarity": 2,
        "cname": {
            "CS": "Stříbrostří",
            "DE": "Silberklinge",
            "EN": "Silver Blade",
            "FR": "Lame argentée",
            "PL": "Srebrne ostrze"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/silver-blade-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            }
        ]
    },
    "Axe_LadleBlood": {
        "cid": "Axe_LadleBlood",
        "rarity": 1,
        "cname": {
            "CS": "Krevběračka",
            "DE": "Blutiger Kochlöffel",
            "EN": "Bloody Ladle"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/bloody-ladle-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            }
        ]
    },
    "Axe_Bonebreaker": {
        "cid": "Axe_Bonebreaker",
        "rarity": 2,
        "cname": {
            "CS": "Kostilamská sekera",
            "DE": "Knochenbrecher Axt",
            "EN": "Bonebreaker Axe"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/bonebreaker-axe-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            }
        ]
    },
    "Axe_MaceBone": {
        "cid": "Axe_MaceBone",
        "rarity": 4,
        "cname": {
            "CS": "Kostipalcát",
            "DE": "Knochenkolben",
            "EN": "Bony Mace"
        },
        "cost": 1,
        "type": "axe",
        "imgUrl": "/weapons/bony-mace-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            }
        ]
    },
    "Bow_Spine": {
        "cid": "Bow_Spine",
        "rarity": 2,
        "cname": {
            "CS": "Skoliózoluk",
            "DE": "Wirbelbogen",
            "EN": "Bow of Spine"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/bow-of-spine-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            }
        ]
    },
    "Bow_Swiftness": {
        "cid": "Bow_Swiftness",
        "rarity": 1,
        "cname": {
            "CS": "Lučík",
            "DE": "Bogen der Schnelligkeit",
            "EN": "Bow of Swiftness",
            "FR": "Arquelet",
            "PL": "Krótki łuk"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/bow-of-swiftness-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Axe_Crystal": {
        "cid": "Axe_Crystal",
        "rarity": 4,
        "cname": {
            "CS": "Diamantová sekera",
            "DE": "Diamantaxt",
            "EN": "Brilliaxe",
            "FR": "Hache diamant",
            "PL": "Diamentowy topór"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/brilliaxe-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Axe_Broad": {
        "cid": "Axe_Broad",
        "rarity": 2,
        "cname": {
            "CS": "Široká sekera",
            "DE": "Breitaxt",
            "EN": "Broadaxe",
            "FR": "Hache large",
            "PL": "Szeroka siekiera"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/broadaxe-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "stop"
            }
        ]
    },
    "Sword_Cancerbane": {
        "cid": "Sword_Cancerbane",
        "rarity": 2,
        "cname": {
            "CS": "Rakobijec",
            "DE": "Krebsfluch",
            "EN": "Cancerbane",
            "FR": "Fléau des crabes",
            "PL": "Rakomiecz"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/cancerbane-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            }
        ]
    },
    "Wand_MeatEater": {
        "cid": "Wand_MeatEater",
        "rarity": 4,
        "cname": {
            "CS": "Masožračka",
            "DE": "Karnivorenstock",
            "EN": "Carnivore Stick"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/carnivore-stick-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Bow_Carrotwood": {
        "cid": "Bow_Carrotwood",
        "rarity": 1,
        "cname": {
            "CS": "Mrkvoluk",
            "DE": "Karottenholz-Bogen",
            "EN": "Carrotwood Bow",
            "FR": "Arc carotte",
            "PL": "Łuk marchewkowy"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/carrotwood-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Axe_Chainsaw": {
        "cid": "Axe_Chainsaw",
        "rarity": 1,
        "cname": {
            "CS": "Řetězovka",
            "EN": "Chainsaw"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/chainsaw-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "stop"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "stop"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "stop"
            }
        ]
    },
    "Bow_Clockwork": {
        "cid": "Bow_Clockwork",
        "rarity": 3,
        "cname": {
            "CS": "Ozubený lukostříl",
            "DE": "Zahnrad-Bogen",
            "EN": "Clockwork Gearbow",
            "FR": "Arc denté",
            "PL": "Zębatkostrzał"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/clockwork-gearbow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            }
        ]
    },
    "Bow_Composable": {
        "cid": "Bow_Composable",
        "rarity": 1,
        "cname": {
            "CS": "Skládací lukostříl",
            "DE": "Zerlegbarer Bogen",
            "EN": "Collapsible Bow",
            "FR": "Arc assemblable",
            "PL": "Rozkładany łuk"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/collapsible-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Wand_Crystal": {
        "cid": "Wand_Crystal",
        "rarity": 3,
        "cname": {
            "CS": "Krystaly svědomí",
            "DE": "Stab des Gewissens",
            "EN": "Knowledgable Staff",
            "FR": "Baguette cristalline",
            "PL": "Kryształy świadomości"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/knowledgable-staff-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Sword_Dark": {
        "cid": "Sword_Dark",
        "rarity": 3,
        "cname": {
            "CS": "Temný meč",
            "DE": "Dunkles Schwert",
            "EN": "Dark Sword",
            "FR": "Epée sombre",
            "PL": "Tajemniczy miecz"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/dark-sword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Axe_DeathScythe": {
        "cid": "Axe_DeathScythe",
        "rarity": 3,
        "cname": {
            "CS": "Smrtikosa",
            "EN": "Death Scythe"
        },
        "cost": 0,
        "type": "axe",
        "imgUrl": "/weapons/death-scythe-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "stop"
            }
        ]
    },
    "Axe_DeepwoodClub": {
        "cid": "Axe_DeepwoodClub",
        "rarity": 1,
        "cname": {
            "CS": "Strompalcát",
            "DE": "Baum-Streitkolben",
            "EN": "Deepwood Club",
            "FR": "Masse d'arbre",
            "PL": "Dębowa buława"
        },
        "cost": 1,
        "type": "axe",
        "imgUrl": "/weapons/deepwood-club-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            }
        ]
    },
    "Sword_DinoFang": {
        "cid": "Sword_DinoFang",
        "rarity": 2,
        "cname": {
            "CS": "Dinotesák",
            "DE": "Dino Zahn",
            "EN": "Dinofang"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/dinofang-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "crunch-weapon",
                "f": "stop"
            }
        ]
    },
    "Bow_Dragon": {
        "cid": "Bow_Dragon",
        "rarity": 3,
        "cname": {
            "CS": "Dračí ohnivrh",
            "DE": "Drachenbogen des Feuers",
            "EN": "Dragonbow of Fire",
            "FR": "Arc dragon de feu",
            "PL": "Smoczy ogniołuk"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/dragonbow-of-fire-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Sword_Dragonfang": {
        "cid": "Sword_Dragonfang",
        "rarity": 3,
        "cname": {
            "CS": "Dračizub",
            "DE": "Drachenzahn",
            "EN": "Dragonfang",
            "FR": "Dent du dragon",
            "PL": "Smoczy ząb"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/dragonfang-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            }
        ]
    },
    "Wand_Dragon": {
        "cid": "Wand_Dragon",
        "rarity": 4,
        "cname": {
            "CS": "Dračí hůl",
            "DE": "Drachenstab",
            "EN": "Dragonwand",
            "FR": "Bâton de dragon",
            "PL": "Smocza różdżka"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/dragonwand-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            }
        ]
    },
    "Sword_Dual": {
        "cid": "Sword_Dual",
        "rarity": 2,
        "cname": {
            "CS": "Dvojmeč",
            "DE": "Doppelklingen",
            "EN": "Dual Blades",
            "FR": "Epée double",
            "PL": "Podwójny miecz"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/dual-blades-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            }
        ]
    },
    "Bow_Handgun": {
        "cid": "Bow_Handgun",
        "rarity": 3,
        "cname": {
            "CS": "Soubojová pistole",
            "EN": "Duelling Pistol"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/duelling-pistol-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            }
        ]
    },
    "Axe_Dwarf": {
        "cid": "Axe_Dwarf",
        "rarity": 3,
        "cname": {
            "CS": "Trpasličí sekera",
            "DE": "Zwergenaxt",
            "EN": "Dwarf Axe",
            "FR": "Hache naine",
            "PL": "Obósieczny toporek"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/dwarf-axe-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Sword_Dwarf": {
        "cid": "Sword_Dwarf",
        "rarity": 1,
        "cname": {
            "CS": "Trpasličí meč",
            "DE": "Zwergen-Kurzschwert",
            "EN": "Dwarven Shortsword",
            "FR": "Epée gnomique",
            "PL": "Miecz krasnali"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/dwarven-shortsword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            }
        ]
    },
    "Bow_ElderDragon": {
        "cid": "Bow_ElderDragon",
        "rarity": 4,
        "cname": {
            "CS": "Dračí megaluk",
            "DE": "Uralter Drachenbogen",
            "EN": "Elder Dragonbow",
            "FR": "Méga arc du dragon",
            "PL": "Smoczy megałuk"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/elder-dragonbow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "go"
            }
        ]
    },
    "Bow_Electric": {
        "cid": "Bow_Electric",
        "rarity": 2,
        "cname": {
            "CS": "Elektrostříl",
            "DE": "Elektrischer Bogen",
            "EN": "Electric Bow",
            "FR": "Arc électrique",
            "PL": "Elektrołuk"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/electric-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            }
        ]
    },
    "Wand_Electrum": {
        "cid": "Wand_Electrum",
        "rarity": 4,
        "cname": {
            "CS": "Císařská hůl",
            "DE": "Kaiserstab",
            "EN": "Staff Royale",
            "FR": "Bâton impérial",
            "PL": "Różdżka cesarza"
        },
        "cost": 3,
        "type": "wand",
        "imgUrl": "/weapons/staff-royale-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Sword_Emerald": {
        "cid": "Sword_Emerald",
        "rarity": 4,
        "cname": {
            "CS": "Smaragdový meč",
            "DE": "Smaragd-Großschwert",
            "EN": "Emerald Greatsword",
            "FR": "Epée émeraude",
            "PL": "Szmaragdowy miecz"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/emerald-greatsword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Axe_Execute": {
        "cid": "Axe_Execute",
        "rarity": 1,
        "cname": {
            "CS": "Popravčí sekera",
            "EN": "Executioner Axe"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/executioner-axe-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "curse-weapon",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "curse-weapon",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Bow_Floral": {
        "cid": "Bow_Floral",
        "rarity": 3,
        "cname": {
            "CS": "Elfí květinoluk",
            "DE": "Geblümter Elfenbogen",
            "EN": "Floral Elvenbow",
            "FR": "Arc floral elfique",
            "PL": "Elfi łuk kwiatowy"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/floral-elvenbow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Bow_Fluffy": {
        "cid": "Bow_Fluffy",
        "rarity": 1,
        "cname": {
            "CS": "Chuchvaluk",
            "DE": "Flauschbogen",
            "EN": "Fluffy Bow"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/fluffy-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Bow_Frog": {
        "cid": "Bow_Frog",
        "rarity": 1,
        "cname": {
            "CS": "Žabí luk",
            "EN": "Frog Bow"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/frog-bow-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Axe_Girder": {
        "cid": "Axe_Girder",
        "rarity": 2,
        "cname": {
            "CS": "Kolejnice",
            "DE": "Stahlträger",
            "EN": "Girder",
            "FR": "Rail",
            "PL": "Szyna"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/girder-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            }
        ]
    },
    "Sword_Grass": {
        "cid": "Sword_Grass",
        "rarity": 3,
        "cname": {
            "CS": "Meč z travinokovu",
            "DE": "Grasschwert",
            "EN": "Grassword",
            "FR": "Epée herbale",
            "PL": "Miecz z żelaznej trawy"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/grassword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Sword_Sun": {
        "cid": "Sword_Sun",
        "rarity": 3,
        "cname": {
            "CS": "Sluneční velemeč",
            "DE": "Großschwert der Sonne",
            "EN": "Greatsword of the Sun",
            "FR": "Grande épee solaire",
            "PL": "Arcymiecz Słońca"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/greatsword-of-the-sun-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            }
        ]
    },
    "Axe_Halapartana": {
        "cid": "Axe_Halapartana",
        "rarity": 1,
        "cname": {
            "CS": "Halapartána",
            "DE": "Hellebardike",
            "EN": "Halapartana",
            "FR": "Hallebarde",
            "PL": "Halabarda"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/halapartana-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Bow_Hardstone": {
        "cid": "Bow_Hardstone",
        "rarity": 1,
        "cname": {
            "CS": "Luk kameňák",
            "DE": "Steinbogen",
            "EN": "Hardstone Bow",
            "FR": "Arc de pierre",
            "PL": "Łuk kamienny"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/hardstone-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            }
        ]
    },
    "Axe_HeavyHammer": {
        "cid": "Axe_HeavyHammer",
        "rarity": 2,
        "cname": {
            "CS": "Těžké kladivo",
            "DE": "Schwerer Hammer",
            "EN": "Heavy Hammer",
            "FR": "Marteau lourd",
            "PL": "Ciężki młot"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/heavy-hammer-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            }
        ]
    },
    "Axe_HitStomp": {
        "cid": "Axe_HitStomp",
        "rarity": 2,
        "cname": {
            "CS": "Kamenná mlátička",
            "DE": "Steinzeit-Axt",
            "EN": "Stonespike",
            "FR": "Batteuse de pierre",
            "PL": "Kamienny topór"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/stonespike-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            }
        ]
    },
    "Axe_HockeyStick": {
        "cid": "Axe_HockeyStick",
        "rarity": 4,
        "cname": {
            "CS": "Bojová hokejka",
            "EN": "Hockey Stick"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/hockey-stick-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "curse-weapon",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Bow_Hunter": {
        "cid": "Bow_Hunter",
        "rarity": 2,
        "cname": {
            "CS": "Parojelenoluk",
            "DE": "Jägerbogen",
            "EN": "Hunter's Bow",
            "FR": "Arc en bois de cerf",
            "PL": "Parożyk"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/hunter's-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Axe_King": {
        "cid": "Axe_King",
        "rarity": 3,
        "cname": {
            "CS": "Králova sekera",
            "DE": "Königsaxt",
            "EN": "King's Axe",
            "FR": "Hache royale",
            "PL": "Królewska siekiera"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/king's-axe-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            }
        ]
    },
    "Bow_KnuckleBone": {
        "cid": "Bow_KnuckleBone",
        "rarity": 1,
        "cname": {
            "CS": "Klouboluk",
            "DE": "Knöchelbogen",
            "EN": "Knucklebow"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/knucklebow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "crunch-weapon",
                "f": "stop"
            }
        ]
    },
    "Sword_Leftovers": {
        "cid": "Sword_Leftovers",
        "rarity": 3,
        "cname": {
            "CS": "Zbytkomeč",
            "DE": "Gebeinschwert",
            "EN": "Leftovers Sword"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/leftovers-sword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            }
        ]
    },
    "Axe_Limbtrimmer": {
        "cid": "Axe_Limbtrimmer",
        "rarity": 1,
        "cname": {
            "CS": "Sekec mazec",
            "DE": "Gliedertrenner",
            "EN": "Limbtrimmer",
            "FR": "Tondeuse de membre",
            "PL": "Siekacz"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/limbtrimmer-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Sword_Death": {
        "cid": "Sword_Death",
        "rarity": 3,
        "cname": {
            "CS": "Živý-mrtvý meč",
            "EN": "Living Death Sword"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/living-death-sword-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "curse-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Axe_Lollipop": {
        "cid": "Axe_Lollipop",
        "rarity": 2,
        "cname": {
            "CS": "Lízo z Mooru",
            "EN": "Lollipop of Moore"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/lollipop-of-moore-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            }
        ]
    },
    "Bow_Long": {
        "cid": "Bow_Long",
        "rarity": 1,
        "cname": {
            "CS": "Dlouhý luk",
            "DE": "Langbogen",
            "EN": "Longbow",
            "FR": "Arc long",
            "PL": "Długi łuk"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/longbow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Axe_Longhammer": {
        "cid": "Axe_Longhammer",
        "rarity": 1,
        "cname": {
            "CS": "Bojové kladivo",
            "DE": "Langhammer",
            "EN": "Longhammer",
            "FR": "Marteau de combat",
            "PL": "Waleczny młot"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/longhammer-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            }
        ]
    },
    "Sword_LongSilver": {
        "cid": "Sword_LongSilver",
        "rarity": 1,
        "cname": {
            "CS": "Stříbrný meč",
            "DE": "Silber-Langschwert",
            "EN": "Long Silversword",
            "FR": "Epée d'argent",
            "PL": "Srebrny miecz"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/long-silversword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            }
        ]
    },
    "Wand_Madame": {
        "cid": "Wand_Madame",
        "rarity": 3,
        "cname": {
            "CS": "Madame hůlka",
            "EN": "Madame Wand"
        },
        "cost": 0,
        "type": "wand",
        "imgUrl": "/weapons/madame-wand-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            }
        ]
    },
    "Bow_Pink": {
        "cid": "Bow_Pink",
        "rarity": 1,
        "cname": {
            "CS": "Kouzelný růžostříl",
            "DE": "Magischer Rosabogen",
            "EN": "Magical Pinkbow",
            "FR": "Arc magique rose",
            "PL": "Magiczny różowy łuk"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/magical-pinkbow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "stop"
            }
        ]
    },
    "Wand_LadleMagic": {
        "cid": "Wand_LadleMagic",
        "rarity": 3,
        "cname": {
            "CS": "Běrka na čáryguláš",
            "DE": "Zaubertrank-Kochlöffel",
            "EN": "Magic Brew Ladle"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/magic-brew-ladle-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            }
        ]
    },
    "Wand_Splatter": {
        "cid": "Wand_Splatter",
        "rarity": 1,
        "cname": {
            "CS": "Kouzelnická plácačka",
            "DE": "Magische Klatsche",
            "EN": "Magic Splatter"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/magic-splatter-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            }
        ]
    },
    "Wand_Magnetic": {
        "cid": "Wand_Magnetic",
        "rarity": 3,
        "cname": {
            "CS": "Magika Magnetika",
            "DE": "Magika Magnetika",
            "EN": "Magika Magnetika",
            "FR": "Magika Magnetika",
            "PL": "Magika Magnetika"
        },
        "cost": 3,
        "type": "wand",
        "imgUrl": "/weapons/magika-magnetika-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            }
        ]
    },
    "Bow_Mamba": {
        "cid": "Bow_Mamba",
        "rarity": 1,
        "cname": {
            "CS": "Mambaluk",
            "EN": "Mamba Bow"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/mamba-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            }
        ]
    },
    "Wand_Match": {
        "cid": "Wand_Match",
        "rarity": 1,
        "cname": {
            "CS": "Sirkláda",
            "DE": "Zündstamm",
            "EN": "Match Log"
        },
        "cost": 3,
        "type": "wand",
        "imgUrl": "/weapons/match-log-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            }
        ]
    },
    "Bow_Watermelon": {
        "cid": "Bow_Watermelon",
        "rarity": 4,
        "cname": {
            "CS": "Luk z megamelounu",
            "DE": "Megamelonenbogen",
            "EN": "Megamelon Bow"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/megamelon-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            }
        ]
    },
    "Axe_MysticHammer": {
        "cid": "Axe_MysticHammer",
        "rarity": 3,
        "cname": {
            "CS": "Palice tajemné síly",
            "DE": "Mystischer Hammer",
            "EN": "Mystic Hammer",
            "FR": "Massue mystique",
            "PL": "Magiczny młot"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/mystic-hammer-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Sword_Needle": {
        "cid": "Sword_Needle",
        "rarity": 1,
        "cname": {
            "CS": "Jehla",
            "DE": "Nadel",
            "EN": "Needle",
            "FR": "Aiguille",
            "PL": "Igła"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/needle-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "opt"
            }
        ]
    },
    "Sword_Nimble": {
        "cid": "Sword_Nimble",
        "rarity": 1,
        "cname": {
            "CS": "Švihlík",
            "DE": "Flinkes Schwert",
            "EN": "Nimble Sword",
            "FR": "Epée agile",
            "PL": "Spryciarz"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/nimble-sword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Wand_Octo": {
        "cid": "Wand_Octo",
        "rarity": 3,
        "cname": {
            "CS": "Oktopusácká hůl",
            "DE": "Oktostab",
            "EN": "Octostaff",
            "FR": "Bâton pieuvre",
            "PL": "Różdżka osmiornicy"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/octostaff-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Sword_Oilry": {
        "cid": "Sword_Oilry",
        "rarity": 4,
        "cname": {
            "CS": "Naftový megameč",
            "DE": "Öliges Megaschwert",
            "EN": "Oily Megasword",
            "FR": "Méga épee de pétrole",
            "PL": "Ropny megamiecz"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/oily-megasword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Wand_Opal": {
        "cid": "Wand_Opal",
        "rarity": 1,
        "cname": {
            "CS": "Vulkanická hůlka",
            "DE": "Vulkan-Halbstab",
            "EN": "Opal Half-wand",
            "FR": "Baguette volcanique",
            "PL": "Opalowa różdżka"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/opal-half-wand-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "opt"
            }
        ]
    },
    "Bow_Palmwood": {
        "cid": "Bow_Palmwood",
        "rarity": 1,
        "cname": {
            "CS": "Palmový luk",
            "DE": "Palmholz-Bogen",
            "EN": "Palmwood Piercer",
            "FR": "Arc de palme",
            "PL": "Łuk palmowy"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/palmwood-piercer-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "go"
            }
        ]
    },
    "Wand_Pepper": {
        "cid": "Wand_Pepper",
        "rarity": 2,
        "cname": {
            "CS": "Pepřihůlka",
            "DE": "Pfefferstab",
            "EN": "Pepper Wand"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/pepper-wand-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            }
        ]
    },
    "Wand_Pyro": {
        "cid": "Wand_Pyro",
        "rarity": 2,
        "cname": {
            "CS": "Výbušná hůl",
            "DE": "Stab des Pyromanten",
            "EN": "Pyromancer's Staff",
            "FR": "Bâton explosif",
            "PL": "Eksplodująca różdżka"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/pyromancer's-staff-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Axe_Rainbow": {
        "cid": "Axe_Rainbow",
        "rarity": 3,
        "cname": {
            "CS": "Duhoň",
            "DE": "Regenaxt",
            "EN": "Rainaxe"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/rainaxe-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            }
        ]
    },
    "Axe_RollingPin": {
        "cid": "Axe_RollingPin",
        "rarity": 1,
        "cname": {
            "CS": "Bojový váleček",
            "DE": "Nudelholz",
            "EN": "Rolling Pin"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/rolling-pin-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Wand_Ruby": {
        "cid": "Wand_Ruby",
        "rarity": 1,
        "cname": {
            "CS": "Rubínová hůlka",
            "DE": "Rubinstab",
            "EN": "Ruby Wand",
            "FR": "Baguette rubis",
            "PL": "Rubinowa różdżka"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/ruby-wand-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            }
        ]
    },
    "Sword_Runed": {
        "cid": "Sword_Runed",
        "rarity": 1,
        "cname": {
            "CS": "Runová šavle",
            "DE": "Runensäbel",
            "EN": "Rune Saber",
            "FR": "Sabre runique",
            "PL": "Szabla runów"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/rune-saber-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Bow_Rusted": {
        "cid": "Bow_Rusted",
        "rarity": 1,
        "cname": {
            "CS": "Rezavý luk",
            "DE": "Verrosteter Bogen",
            "EN": "Rusted Bow",
            "FR": "Arc rouillé",
            "PL": "Zardzewiały łuk"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/rusted-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            }
        ]
    },
    "Sword_Saber": {
        "cid": "Sword_Saber",
        "rarity": 1,
        "cname": {
            "CS": "Šavle",
            "DE": "Säbel",
            "EN": "Saber",
            "FR": "Sabre",
            "PL": "Szabla"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/saber-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Sword_Teeth": {
        "cid": "Sword_Teeth",
        "rarity": 1,
        "cname": {
            "CS": "Ostrozub",
            "DE": "Scharfer Zahn",
            "EN": "Sharp Tooth",
            "FR": "Dent coupante",
            "PL": "Ostroząb"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/sharp-tooth-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            }
        ]
    },
    "Sword_Short": {
        "cid": "Sword_Short",
        "rarity": 1,
        "cname": {
            "CS": "Krátký meč",
            "DE": "Kurzschwert",
            "EN": "Short Sword",
            "FR": "Epée courte",
            "PL": "Krótki miecz"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/short-sword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            }
        ]
    },
    "Bow_SilverXbow": {
        "cid": "Bow_SilverXbow",
        "rarity": 2,
        "cname": {
            "CS": "Stříbrná kuše",
            "EN": "Silver Crossbow"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/silver-crossbow-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            }
        ]
    },
    "Bow_Silver": {
        "cid": "Bow_Silver",
        "rarity": 2,
        "cname": {
            "CS": "Stříbrný elfí luk",
            "DE": "Silber-Elfenbogen",
            "EN": "Silver Elvenbow",
            "FR": "Arc elfique d'argent",
            "PL": "Elfi łuk srebrny"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/silver-elvenbow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "go"
            }
        ]
    },
    "Bow_Silverfish": {
        "cid": "Bow_Silverfish",
        "rarity": 2,
        "cname": {
            "CS": "Stříbřirybka",
            "DE": "Silberfisch-Bogen",
            "EN": "Silverfish Bow",
            "FR": "Arc du poisson d'argent",
            "PL": "Rybołuk srebrny"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/silverfish-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Sword_Skeleton": {
        "cid": "Sword_Skeleton",
        "rarity": 2,
        "cname": {
            "CS": "Kostrostřih",
            "DE": "Skelettschwert",
            "EN": "Skeleton Sword",
            "FR": "Coupe-os",
            "PL": "Szkieletowy miecz"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/skeleton-sword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Sword_Skewer": {
        "cid": "Sword_Skewer",
        "rarity": 1,
        "cname": {
            "CS": "Špízomeč",
            "DE": "Spieß",
            "EN": "Skewer Needle"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/skewer-needle-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            }
        ]
    },
    "Axe_Skuth": {
        "cid": "Axe_Skuth",
        "rarity": 3,
        "cname": {
            "CS": "Kösa",
            "DE": "Death-Metal-Sense",
            "EN": "Sküth",
            "FR": "Faux",
            "PL": "Kösa"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/sküth-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Wand_Fern": {
        "cid": "Wand_Fern",
        "rarity": 1,
        "cname": {
            "CS": "Kapradinová hůl",
            "DE": "Smaragdfarn-Stab",
            "EN": "Staff of Emerald Fern",
            "FR": "Bâton fougère",
            "PL": "Paprociana różdżka"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/staff-of-emerald-fern-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Wand_Fire": {
        "cid": "Wand_Fire",
        "rarity": 1,
        "cname": {
            "CS": "Ohňová hůl",
            "DE": "Stab des Feuers",
            "EN": "Staff of Fire",
            "FR": "Bâton de feu",
            "PL": "Ogniowa różdżka"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/staff-of-fire-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Wand_Frost": {
        "cid": "Wand_Frost",
        "rarity": 2,
        "cname": {
            "CS": "Mrazící hůl",
            "DE": "Stab des Frosts",
            "EN": "Staff of Ice and Frost",
            "FR": "Bâton gelant",
            "PL": "Mrożąca różdżka"
        },
        "cost": 3,
        "type": "wand",
        "imgUrl": "/weapons/staff-of-ice-and-frost-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Wand_Living": {
        "cid": "Wand_Living",
        "rarity": 1,
        "cname": {
            "CS": "Dřevovousova hůl",
            "DE": "Lebensholz-Stab",
            "EN": "Staff of Living Wood",
            "FR": "Bâton de bois vivant",
            "PL": "Różdżka z żywego drewna"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/staff-of-living-wood-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            }
        ]
    },
    "Wand_Souls": {
        "cid": "Wand_Souls",
        "rarity": 1,
        "cname": {
            "CS": "Šamanská hůl",
            "DE": "Stab der Seelen",
            "EN": "Staff of Souls",
            "FR": "Bâton chamanique",
            "PL": "Różdżka szamana"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/staff-of-souls-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Wand_Storms": {
        "cid": "Wand_Storms",
        "rarity": 3,
        "cname": {
            "CS": "Bouřlivec",
            "DE": "Stab der Stürme",
            "EN": "Staff of Storms",
            "FR": "Baguette tempête",
            "PL": "Piorun"
        },
        "cost": 3,
        "type": "wand",
        "imgUrl": "/weapons/staff-of-storms-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Bow_Sunlight": {
        "cid": "Bow_Sunlight",
        "rarity": 3,
        "cname": {
            "CS": "Sluneční luk",
            "DE": "Sonnenbogen",
            "EN": "Sunlight Firebow",
            "FR": "Arc solaire",
            "PL": "Słoneczny łuk"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/sunlight-firebow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            }
        ]
    },
    "Axe_Swift": {
        "cid": "Axe_Swift",
        "rarity": 2,
        "cname": {
            "CS": "Švihoň",
            "DE": "Flinke Axt",
            "EN": "Swift Axe",
            "FR": "Hache rapide",
            "PL": "Błyskawiczny topór"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/swift-axe-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            }
        ]
    },
    "Sword_Fate": {
        "cid": "Sword_Fate",
        "rarity": 4,
        "cname": {
            "CS": "Meč osudu",
            "EN": "Sword of Fate"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/sword-of-fate-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            }
        ]
    },
    "Wand_Symphony": {
        "cid": "Wand_Symphony",
        "rarity": 1,
        "cname": {
            "CS": "Symfonitka",
            "EN": "Symphonia"
        },
        "cost": 3,
        "type": "wand",
        "imgUrl": "/weapons/symphonia-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Sword_Syringe": {
        "cid": "Sword_Syringe",
        "rarity": 1,
        "cname": {
            "CS": "Stříkord",
            "EN": "Syringe Rapier"
        },
        "cost": 0,
        "type": "sword",
        "imgUrl": "/weapons/syringe-rapier-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            }
        ]
    },
    "Axe_Tenderhammer": {
        "cid": "Axe_Tenderhammer",
        "rarity": 2,
        "cname": {
            "CS": "Palice na maso",
            "DE": "Fleischklopfer",
            "EN": "The Tenderizer",
            "FR": "Masse à viande",
            "PL": "Tłuczek"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/the-tenderizer-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Axe_Curious": {
        "cid": "Axe_Curious",
        "rarity": 1,
        "cname": {
            "CS": "Divnoseč",
            "DE": "Ausgefallene Axt",
            "EN": "The Curious Axe",
            "FR": "Hache curieuse",
            "PL": "Niezwyczajna siekiera"
        },
        "cost": 1,
        "type": "axe",
        "imgUrl": "/weapons/the-curious-axe-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Wand_DeathKnell": {
        "cid": "Wand_DeathKnell",
        "rarity": 2,
        "cname": {
            "CS": "Umíráček",
            "EN": "The Death Knell"
        },
        "cost": 3,
        "type": "wand",
        "imgUrl": "/weapons/the-death-knell-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "curse-weapon",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "curse-weapon",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "curse-weapon",
                "f": "go"
            }
        ]
    },
    "Bow_Hydra": {
        "cid": "Bow_Hydra",
        "rarity": 2,
        "cname": {
            "CS": "Hydra",
            "DE": "Die Hydra",
            "EN": "The Hydra",
            "FR": "Hydre",
            "PL": "Hydra"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/the-hydra-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            }
        ]
    },
    "Axe_Lumberjack": {
        "cid": "Axe_Lumberjack",
        "rarity": 1,
        "cname": {
            "CS": "Dřevorubka",
            "DE": "Der Holzfäller",
            "EN": "The Lumberjack",
            "FR": "Bûcheronne",
            "PL": "Siekiera"
        },
        "cost": 1,
        "type": "axe",
        "imgUrl": "/weapons/the-lumberjack-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Axe_Ultrahammer": {
        "cid": "Axe_Ultrahammer",
        "rarity": 4,
        "cname": {
            "CS": "Císařská megapalice",
            "DE": "Der Ultrahammer",
            "EN": "The Ultrahammer",
            "FR": "Mégamassue impériale",
            "PL": "Megamłot cesarza"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/the-ultrahammer-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            }
        ]
    },
    "Wand_Thorns": {
        "cid": "Wand_Thorns",
        "rarity": 2,
        "cname": {
            "CS": "Trnihůl",
            "DE": "Dornenstab",
            "EN": "Thornstaff",
            "FR": "Bâton d'épines",
            "PL": "Cierniowa różdżka"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/thornstaff-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Sword_2H": {
        "cid": "Sword_2H",
        "rarity": 2,
        "cname": {
            "CS": "Dvouruční meč",
            "DE": "Zweihändiges Schwert",
            "EN": "Two-handed Sword",
            "FR": "Epée à deux mains",
            "PL": "Dwuręczny miecz"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/two-handed-sword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Bow_GoldenTech": {
        "cid": "Bow_GoldenTech",
        "rarity": 4,
        "cname": {
            "CS": "Zlatý superluk",
            "DE": "Ultimativer Goldbogen",
            "EN": "Ultimate Techbow",
            "FR": "Super arc d'or",
            "PL": "Złoty superłuk"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/ultimate-techbow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Sword_Unicorn": {
        "cid": "Sword_Unicorn",
        "rarity": 4,
        "cname": {
            "CS": "Meč z jednorožce",
            "DE": "Einhorn Horn",
            "EN": "Unicorn Horn"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/unicorn-horn-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "crunch-weapon",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            }
        ]
    },
    "Wand_Vacuum": {
        "cid": "Wand_Vacuum",
        "rarity": 1,
        "cname": {
            "CS": "Luxhůlka",
            "EN": "Vacuum Wand"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/vacuum-wand-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            }
        ]
    },
    "Bow_Vampire": {
        "cid": "Bow_Vampire",
        "rarity": 4,
        "cname": {
            "CS": "Upíří luk",
            "EN": "Vampire Bow"
        },
        "cost": 0,
        "type": "bow",
        "imgUrl": "/weapons/vampire-bow-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "go"
            }
        ]
    },
    "Sword_Venom": {
        "cid": "Sword_Venom",
        "rarity": 2,
        "cname": {
            "CS": "Jedovatý meč",
            "EN": "Venomous Sword"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/venomous-sword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "vampire-bite",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "vampire-bite",
                "f": "stop"
            }
        ]
    },
    "Wand_Diamond": {
        "cid": "Wand_Diamond",
        "rarity": 2,
        "cname": {
            "CS": "Diamantová hůlka",
            "DE": "Diamantstab",
            "EN": "Wand of Diamonds",
            "FR": "Baguette de diamants",
            "PL": "Diamentowa różdżka"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/wand-of-diamonds-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Wand_Healing": {
        "cid": "Wand_Healing",
        "rarity": 2,
        "cname": {
            "CS": "Doktorská hůlka",
            "DE": "Stab der Heilung",
            "EN": "Wand of Healing",
            "FR": "Baguette de docteur",
            "PL": "Lecznicza różdżka"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/wand-of-healing-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Wand_Ice": {
        "cid": "Wand_Ice",
        "rarity": 1,
        "cname": {
            "CS": "Ledová hůlka",
            "DE": "Stab des Eises",
            "EN": "Wand of Ice",
            "FR": "Baguette de glace",
            "PL": "Lodowa różdżka"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/wand-of-ice-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Wand_Many": {
        "cid": "Wand_Many",
        "rarity": 2,
        "cname": {
            "CS": "Mnohohůlka",
            "DE": "Rätselstab",
            "EN": "Wand of Many",
            "FR": "Multibâton",
            "PL": "Tęczowa różdżka"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/wand-of-many-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Wand_Shocking": {
        "cid": "Wand_Shocking",
        "rarity": 1,
        "cname": {
            "CS": "Hůlka na baterky",
            "DE": "Schockstab",
            "EN": "Wand of Shocking",
            "FR": "Baguette à piles",
            "PL": "Szok różdżka"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/wand-of-shocking-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            }
        ]
    },
    "Axe_WoodenClub": {
        "cid": "Axe_WoodenClub",
        "rarity": 1,
        "cname": {
            "CS": "Dřevěný kyj",
            "DE": "Holzknüppel",
            "EN": "Wooden Club",
            "FR": "Massue en bois",
            "PL": "Maczuga"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/wooden-club-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Axe_WoodenHammer": {
        "cid": "Axe_WoodenHammer",
        "rarity": 1,
        "cname": {
            "CS": "Dřevěná palice",
            "DE": "Holzhammer",
            "EN": "Wooden Hammer",
            "FR": "Assommoir en bois",
            "PL": "Drewniany młot"
        },
        "cost": 1,
        "type": "axe",
        "imgUrl": "/weapons/wooden-hammer-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "go"
            }
        ]
    },
    "Sword_Stake": {
        "cid": "Sword_Stake",
        "rarity": 1,
        "cname": {
            "CS": "Dřevěný kůl",
            "EN": "Wooden Stake"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/wooden-stake-cz.jpg",
        "effects": [
            {
                "t": "vampire-bite",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            }
        ]
    },
    "Axe_Anchor": {
        "cid": "Axe_Anchor",
        "rarity": 4,
        "cname": {
            "CS": "Kotvoseč",
            "EN": "Anchorslash"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/anchorslash-cz.jpg",
        "effects": [
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "hit-double",
                "f": "opt"
            }
        ]
    },
    "Bow_Birdie": {
        "cid": "Bow_Birdie",
        "rarity": 1,
        "cname": {
            "CS": "Ptakostříl",
            "EN": "Birdie"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/birdie-cz.jpg",
        "effects": [
            {
                "t": "hit-anything",
                "f": "stop"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "stop"
            },
            {
                "t": "trap",
                "f": "stop"
            },
            {
                "t": "hit-double",
                "f": "opt"
            }
        ]
    },
    "Sword_DaggerMagna": {
        "cid": "Sword_DaggerMagna",
        "rarity": 2,
        "cname": {
            "CS": "Kudlus magnus",
            "EN": "Dagger Magna"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/dagger-magna-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "trap",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            }
        ]
    },
    "Bow_Gourmet": {
        "cid": "Bow_Gourmet",
        "rarity": 3,
        "cname": {
            "CS": "Fajnšmekrovka",
            "EN": "Gourmet Gun"
        },
        "cost": 1,
        "type": "bow",
        "imgUrl": "/weapons/gourmet-gun-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "go"
            }
        ]
    },
    "Axe_Imbuser": {
        "cid": "Axe_Imbuser",
        "rarity": 1,
        "cname": {
            "CS": "Imbuser",
            "EN": "Imbuser"
        },
        "cost": 1,
        "type": "axe",
        "imgUrl": "/weapons/imbuser-cz.jpg",
        "effects": [
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Wand_Lighthouse": {
        "cid": "Wand_Lighthouse",
        "rarity": 1,
        "cname": {
            "CS": "Majákohůl",
            "EN": "Lighthouse Staff"
        },
        "cost": 0,
        "type": "wand",
        "imgUrl": "/weapons/lighthouse-staff-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "stop"
            },
            {
                "t": "hit-double",
                "f": "stop"
            },
            {
                "t": "trap",
                "f": "stop"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "stop"
            },
            {
                "t": "trap",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "opt"
            }
        ]
    },
    "Bow_Maze": {
        "cid": "Bow_Maze",
        "rarity": 2,
        "cname": {
            "CS": "Bludistříl",
            "EN": "Mazebow"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/mazebow-cz.jpg",
        "effects": [
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            }
        ]
    },
    "Sword_Minute": {
        "cid": "Sword_Minute",
        "rarity": 3,
        "cname": {
            "CS": "Minutový meč",
            "EN": "Minute Sword"
        },
        "cost": 0,
        "type": "sword",
        "imgUrl": "/weapons/minute-sword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            }
        ]
    },
    "Axe_Postmark": {
        "cid": "Axe_Postmark",
        "rarity": 3,
        "cname": {
            "CS": "Poštomlat",
            "EN": "Post-Stick"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/post-stick-cz.jpg",
        "effects": [
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            }
        ]
    },
    "Wand_Propeller": {
        "cid": "Wand_Propeller",
        "rarity": 3,
        "cname": {
            "CS": "‣Vrtulka‣",
            "EN": "Propeller"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/propeller-cz.jpg",
        "effects": [
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "go"
            }
        ]
    },
    "Sword_Ruler": {
        "cid": "Sword_Ruler",
        "rarity": 1,
        "cname": {
            "CS": "Pravítkomeč",
            "EN": "Ruler Blade"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/ruler-blade-cz.jpg",
        "effects": [
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "stop"
            },
            {
                "t": "trap",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            }
        ]
    },
    "Sword_Bubbles": {
        "cid": "Sword_Bubbles",
        "rarity": 4,
        "cname": {
            "CS": "Bublinková šavle",
            "EN": "Saber of Bubbles"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/saber-of-bubbles-cz.jpg",
        "effects": [
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Wand_Microscope": {
        "cid": "Wand_Microscope",
        "rarity": 2,
        "cname": {
            "CS": "Blízkodalekohůl",
            "EN": "Scoping Staff"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/scoping-staff-cz.jpg",
        "effects": [
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "go"
            }
        ]
    },
    "Sword_Spindle": {
        "cid": "Sword_Spindle",
        "rarity": 1,
        "cname": {
            "CS": "Vlnolam",
            "EN": "Spindlesword"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/spindlesword-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "stop"
            }
        ]
    },
    "Bow_Steam": {
        "cid": "Bow_Steam",
        "rarity": 4,
        "cname": {
            "CS": "Parní superluk",
            "EN": "Steam Superbow"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/steam-superbow-cz.jpg",
        "effects": [
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "go"
            }
        ]
    },
    "Bow_Tapwater": {
        "cid": "Bow_Tapwater",
        "rarity": 1,
        "cname": {
            "CS": "Kanáluk",
            "EN": "Tapwater Bow"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/tapwater-bow-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Axe_GrandMama": {
        "cid": "Axe_GrandMama",
        "rarity": 1,
        "cname": {
            "CS": "Grand mama",
            "EN": "The Grand Mama"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/the-grand-mama-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "stop"
            },
            {
                "t": "hit-double",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-double",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "stop"
            },
            {
                "t": "hit-double",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-double",
                "f": "opt"
            }
        ]
    },
    "Wand_NineColors": {
        "cid": "Wand_NineColors",
        "rarity": 4,
        "cname": {
            "CS": "Hůlka s náplní 9 barev",
            "EN": "Wand of Nine Colors"
        },
        "cost": 3,
        "type": "wand",
        "imgUrl": "/weapons/wand-of-nine-colors-cz.jpg",
        "effects": [
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Wand_Weather": {
        "cid": "Wand_Weather",
        "rarity": 1,
        "cname": {
            "CS": "Krutobarometr",
            "EN": "Weather Wand"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/weather-wand-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Axe_Wrench": {
        "cid": "Axe_Wrench",
        "rarity": 2,
        "cname": {
            "CS": "Mechajzna",
            "EN": "Wrench Gadget"
        },
        "cost": 1,
        "type": "axe",
        "imgUrl": "/weapons/wrench-gadget-cz.jpg",
        "effects": [
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "trap",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "trap",
                "f": "go"
            },
            {
                "t": "hit-double",
                "f": "opt"
            }
        ]
    },
    "Wand_Bio": {
        "cid": "Wand_Bio",
        "rarity": 4,
        "cname": {
            "CS": "Bio hůlka",
            "DE": "WIP - Wand_Bio",
            "EN": "WIP - Wand_Bio"
        },
        "cost": 2,
        "type": "wand",
        "imgUrl": "/weapons/wip---wand_bio-cz.jpg",
        "effects": [
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Axe_Cannonball": {
        "cid": "Axe_Cannonball",
        "rarity": 4,
        "cname": {
            "CS": "Dělopalice",
            "DE": "WIP - Axe_Cannonball",
            "EN": "WIP - Axe_Cannonball"
        },
        "cost": 4,
        "type": "axe",
        "imgUrl": "/weapons/wip---axe_cannonball-cz.jpg",
        "effects": [
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Wand_Luxury": {
        "cid": "Wand_Luxury",
        "rarity": 3,
        "cname": {
            "CS": "Luxusní hool",
            "DE": "WIP - Wand_Luxury",
            "EN": "WIP - Wand_Luxury"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/wip---wand_luxury-cz.jpg",
        "effects": [
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Sword_Fashion": {
        "cid": "Sword_Fashion",
        "rarity": 3,
        "cname": {
            "CS": "Meč poslední módy",
            "DE": "WIP - Sword_Fashion",
            "EN": "WIP - Sword_Fashion"
        },
        "cost": 0,
        "type": "sword",
        "imgUrl": "/weapons/wip---sword_fashion-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "stop"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "stop"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Sword_Relic": {
        "cid": "Sword_Relic",
        "rarity": 4,
        "cname": {
            "CS": "Meč s relikviemi",
            "DE": "WIP - Sword_Relic",
            "EN": "WIP - Sword_Relic"
        },
        "cost": 2,
        "type": "sword",
        "imgUrl": "/weapons/wip---sword_relic-cz.jpg",
        "effects": [
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Bow_Handcannon": {
        "cid": "Bow_Handcannon",
        "rarity": 4,
        "cname": {
            "CS": "Příruční dělo",
            "DE": "WIP - Bow_Handcannon",
            "EN": "WIP - Bow_Handcannon"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/wip---bow_handcannon-cz.jpg",
        "effects": [
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            }
        ]
    },
    "Axe_Signboard": {
        "cid": "Axe_Signboard",
        "rarity": 3,
        "cname": {
            "CS": "Vývěsní sekera",
            "DE": "WIP - Axe_Signboard",
            "EN": "WIP - Axe_Signboard"
        },
        "cost": 1,
        "type": "axe",
        "imgUrl": "/weapons/wip---axe_signboard-cz.jpg",
        "effects": [
            {
                "t": "hit-anything",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-anything",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            }
        ]
    },
    "Bow_Brand": {
        "cid": "Bow_Brand",
        "rarity": 3,
        "cname": {
            "CS": "Značkový luk",
            "DE": "WIP - Bow_Brand",
            "EN": "WIP - Bow_Brand"
        },
        "cost": 2,
        "type": "bow",
        "imgUrl": "/weapons/wip---bow_brand-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "add-energy",
                "f": "go"
            }
        ]
    },
    "Wand_Mermaid": {
        "cid": "Wand_Mermaid",
        "rarity": 2,
        "cname": {
            "CS": "Hůlka mořské panny",
            "DE": "WIP - Wand_Mermaid",
            "EN": "WIP - Wand_Mermaid"
        },
        "cost": 3,
        "type": "wand",
        "imgUrl": "/weapons/wip---wand_mermaid-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            }
        ]
    },
    "Sword_Card": {
        "cid": "Sword_Card",
        "rarity": 2,
        "cname": {
            "CS": "Kartářská dýka",
            "DE": "WIP - Sword_Card",
            "EN": "WIP - Sword_Card"
        },
        "cost": 1,
        "type": "sword",
        "imgUrl": "/weapons/wip---sword_card-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Bow_Rubberband": {
        "cid": "Bow_Rubberband",
        "rarity": 1,
        "cname": {
            "CS": "Kolíčková pistole",
            "DE": "WIP - Bow_Rubberband",
            "EN": "WIP - Bow_Rubberband"
        },
        "cost": 0,
        "type": "bow",
        "imgUrl": "/weapons/wip---bow_rubberband-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "stop"
            },
            {
                "t": "combo",
                "f": "stop"
            },
            {
                "t": "cumulative-attack",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "go"
            }
        ]
    },
    "Bow_Smoke": {
        "cid": "Bow_Smoke",
        "rarity": 2,
        "cname": {
            "CS": "Křesadlová dýmovnice",
            "DE": "WIP - Bow_Smoke",
            "EN": "WIP - Bow_Smoke"
        },
        "cost": 3,
        "type": "bow",
        "imgUrl": "/weapons/wip---bow_smoke-cz.jpg",
        "effects": [
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "hit-weapon",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "combo",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "hit-weapon",
                "f": "go"
            }
        ]
    },
    "Sword_Timer": {
        "cid": "Sword_Timer",
        "rarity": 1,
        "cname": {
            "CS": "Meč s časovačem",
            "DE": "WIP - Sword_Timer",
            "EN": "WIP - Sword_Timer"
        },
        "cost": 3,
        "type": "sword",
        "imgUrl": "/weapons/wip---sword_timer-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Wand_Pretzel": {
        "cid": "Wand_Pretzel",
        "rarity": 1,
        "cname": {
            "CS": "Preclíková smažka",
            "DE": "WIP - Wand_Pretzel",
            "EN": "WIP - Wand_Pretzel"
        },
        "cost": 1,
        "type": "wand",
        "imgUrl": "/weapons/wip---wand_pretzel-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "stop"
            },
            {
                "t": "hit-hero",
                "f": "opt"
            }
        ]
    },
    "Axe_Boatyard": {
        "cid": "Axe_Boatyard",
        "rarity": 1,
        "cname": {
            "CS": "Ráhnovka",
            "DE": "WIP - Axe_Boatyard",
            "EN": "WIP - Axe_Boatyard"
        },
        "cost": 3,
        "type": "axe",
        "imgUrl": "/weapons/wip---axe_boatyard-cz.jpg",
        "effects": [
            {
                "t": "add-energy",
                "f": "go"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "block",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "block",
                "f": "stop"
            },
            {
                "t": "add-energy",
                "f": "go"
            }
        ]
    },
    "Axe_Killothon": {
        "cid": "Axe_Killothon",
        "rarity": 2,
        "cname": {
            "CS": "Sekyra z Killothonu",
            "DE": "WIP - Axe_Killothon",
            "EN": "WIP - Axe_Killothon"
        },
        "cost": 2,
        "type": "axe",
        "imgUrl": "/weapons/wip---axe_killothon-cz.jpg",
        "effects": [
            {
                "t": "hit-hero",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "stop"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "opt"
            },
            {
                "t": "hit-hero-repeated",
                "f": "opt"
            },
            {
                "t": "cumulative-attack",
                "f": "opt"
            },
            {
                "t": "heal",
                "f": "go"
            }
        ]
    }
} as const;

export type weaponCid = keyof typeof weaponTypeData
export { weaponTypeData }
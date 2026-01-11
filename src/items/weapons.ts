import type { Weapon } from "./interfaces";

//LUNE
const lunerim: Weapon = {
    name: "Lunerim",
    category: "WEAPON",
    character: "LUNE",
    level: 33,
    power: 2421,
    element: "FIRE",
    scaling: {
        vitality: "A",
        might: "NONE",
        agility: "NONE",
        defense: "NONE",
        luck: "S"
    },
    effects: {
        level_4: "",
        level_10: "",
        level_20: ""
    }
}

const lune_weapons: Array<Weapon> = [
    lunerim
]



//MAELLE
const maellum: Weapon = {
    name: "Maellum",
    category: "WEAPON",
    character: "MAELLE",
    level: 33,
    power: 3228,
    element: "PHYSICAL",
    scaling: {
        vitality: "S",
        might: "NONE",
        agility: "NONE",
        defense: "NONE",
        luck: "NONE"
    },
    effects: {
        level_4: "",
        level_10: "",
        level_20: ""
    }
}

const maelle_weapons: Array<Weapon> = [
    maellum
]



//SCIEL
const scieleson: Weapon = {
    name: "Scieleson",
    category: "WEAPON",
    character: "SCIEL",
    level: 33,
    power: 3454,
    element: "PHYSICAL",
    scaling: {
        vitality: "NONE",
        might: "NONE",
        agility: "S",
        defense: "NONE",
        luck: "A"
    },
    effects: {
        level_4: "",
        level_10: "",
        level_20: ""
    }
}

const sciel_weapons: Array<Weapon> = [
    scieleson
]



//VERSO
const verleso: Weapon = {
    name: "Verleso",
    category: "WEAPON",
    character: "VERSO",
    level: 33,
    power: 3454,
    element: "PHYSICAL",
    scaling: {
        vitality: "S",
        might: "NONE",
        agility: "NONE",
        defense: "NONE",
        luck: "NONE"
    },
    effects: {
        level_4: "",
        level_10: "",
        level_20: ""
    }
}

const verso_weapons: Array<Weapon> = [
    verleso
]



//MONOCO
const monocaro: Weapon = {
    name: "Monocaro",
    category: "WEAPON",
    character: "MONOCO",
    level: 33,
    power: 2744,
    element: "PHYSICAL",
    scaling: {
        vitality: "NONE",
        might: "NONE",
        agility: "S",
        defense: "NONE",
        luck: "A"
    },
    effects: {
        level_4: "Start battle in Balanced Mask.",
        level_10: "Balanced Mask applies Powerful for 3 turns.",
        level_20: "Critical hits deal 30% more damage while in Balanced Mask."
    }
}

const monoco_weapons: Array<Weapon> = [
    monocaro
]

export const weapons: Array<Weapon> = [
    lune_weapons,
    maelle_weapons,
    sciel_weapons,
    verso_weapons,
    monoco_weapons
].flat()
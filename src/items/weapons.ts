import type { Weapon } from "./interfaces";

//LUNE
const lunerim: Weapon = {
    name: "Lunerim",
    category: "WEAPON",
    character: "LUNE",
    element: "FIRE",
    level: 33,
    power: 2421,
    scaling: {
        vitality: "A",
        might: "NONE",
        agility: "NONE",
        defense: "NONE",
        luck: "S"
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
    element: "PHYSICAL",
    level: 33,
    power: 3228,
    scaling: {
        vitality: "S",
        might: "NONE",
        agility: "NONE",
        defense: "NONE",
        luck: "NONE"
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
    element: "PHYSICAL",
    level: 33,
    power: 3454,
    scaling: {
        vitality: "NONE",
        might: "NONE",
        agility: "S",
        defense: "NONE",
        luck: "A"
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
    element: "PHYSICAL",
    level: 33,
    power: 3454,
    scaling: {
        vitality: "S",
        might: "NONE",
        agility: "NONE",
        defense: "NONE",
        luck: "NONE"
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
    element: "PHYSICAL",
    level: 33,
    power: 2744,
    scaling: {
        vitality: "NONE",
        might: "NONE",
        agility: "S",
        defense: "NONE",
        luck: "A"
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
import type { Character } from "./interfaces";

const lune: Character = {
    name: "Lune",
    category: "CHARACTER",
    attributes: {
        vitality: 1,
        might: 1,
        agility: 1,
        defense: 1,
        luck: 1
    },
    stats: {
        health: 150,
        attack_power: 51,
        speed: 200,
        defense: 0,
        critical_rate: 5
    },
    lumina_points: 1,
    lumina_points_added: 0,
    ap: 3
}

const maelle: Character = {
    name: "Maelle",
    category: "CHARACTER",
    attributes: {
        vitality: 1,
        might: 1,
        agility: 1,
        defense: 1,
        luck: 1
    },
    stats: {
        health: 195,
        attack_power: 105,
        speed: 212,
        defense: 0,
        critical_rate: 5
    },
    lumina_points: 1,
    lumina_points_added: 0,
    ap: 3
}

const sciel: Character = {
    name: "Sciel",
    category: "CHARACTER",
    attributes: {
        vitality: 1,
        might: 1,
        agility: 1,
        defense: 1,
        luck: 1
    },
    stats: {
        health: 318,
        attack_power: 273,
        speed: 251,
        defense: 0,
        critical_rate: 5
    },
    lumina_points: 1,
    lumina_points_added: 0,
    ap: 3
}

const verso: Character = {
    name: "Verso",
    category: "CHARACTER",
    attributes: {
        vitality: 1,
        might: 1,
        agility: 1,
        defense: 1,
        luck: 1
    },
    stats: {
        health: 763,
        attack_power: 666,
        speed: 374,
        defense: 71,
        critical_rate: 14
    },
    lumina_points: 1,
    lumina_points_added: 0,
    ap: 3
}

const monoco: Character = {
    name: "Monoco",
    category: "CHARACTER",
    attributes: {
        vitality: 1,
        might: 1,
        agility: 1,
        defense: 1,
        luck: 1
    },
    stats: {
        health: 509,
        attack_power: 491,
        speed: 304,
        defense: 0,
        critical_rate: 5
    },
    lumina_points: 1,
    lumina_points_added: 0,
    ap: 3
}

export const characters: Array<Character> = 
[
    lune, 
    maelle, 
    sciel, 
    verso, 
    monoco
]
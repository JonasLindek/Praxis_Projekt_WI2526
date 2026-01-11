import type { Attack } from "./interfaces";

//ALL
const base_attack: Attack = {
    name: "Base Attack",
    category: "ATTACK",
    character: "ALL",
    element: "WEAPON",
    power: 1,
    ap_cost: 0
}

const all_attacks: Array<Attack> = [
    base_attack
]

//LUNE
const immolation: Attack = {
    name: "Immolation",
    category: "ATTACK",
    character: "LUNE",
    element: "FIRE",
    power: 1, //noch unklar
    ap_cost: 2
}

const ice_lance: Attack = {
    name: "Ice Lance",
    category: "ATTACK",
    character: "LUNE",
    element: "ICE",
    power: 1,
    ap_cost: 4
}

const lune_attacks: Array<Attack> = [
    immolation,
    ice_lance
]



//MAELLE
const offensive_switch: Attack = {
    name: "Offensive Switch",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 1,
    ap_cost: 1
}

const piercee: Attack = {
    name: "Piercée",
    category: "ATTACK",
    character: "MAELLE",
    element: "PHYSICAL",
    power: 1,
    ap_cost: 5
}

const spark: Attack = {
    name: "Spark",
    category: "ATTACK",
    character: "MAELLE",
    element: "FIRE",
    power: 1,
    ap_cost: 3
}

const maelle_attacks: Array<Attack> = [
    offensive_switch,
    piercee,
    spark
]



//SCIEL
const focused_fortell: Attack = {
    name: "Focused Fortell",
    category: "ATTACK",
    character: "SCIEL",
    element: "PHYSICAL",
    power: 1,
    ap_cost: 2
}

const twilight_slash: Attack = {
    name: "Twilight Slash",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 1,
    ap_cost: 2
}

const sciel_attacks: Array<Attack> = [
    focused_fortell,
    twilight_slash
]



//VERSO
const assault_zero: Attack = {
    name: "Assault Zero",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 1,
    ap_cost: 3
}

const from_fire: Attack = {
    name: "From Fire",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 1,
    ap_cost: 4
}

const verso_attacks: Array<Attack> = [
    assault_zero,
    from_fire
]



//MONOCO
const chalier_combo: Attack = {
    name: "Chalier Combo",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 1,
    ap_cost: 7
}

const stalact_punches: Attack = {
    name: "Stalact Punches",
    category: "ATTACK",
    character: "MONOCO",
    element: "ICE",
    power: 1,
    ap_cost: 4
}

const monoco_attacks: Array<Attack> = [
    chalier_combo,
    stalact_punches
]

export const attacks: Array<Attack> = [
    all_attacks,
    lune_attacks,
    maelle_attacks,
    sciel_attacks,
    verso_attacks,
    monoco_attacks
].flat()
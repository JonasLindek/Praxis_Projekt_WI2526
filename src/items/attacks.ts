import type { Attack } from "./interfaces";

//ALL
const base_attack: Attack = {
    name: "Base Attack",
    category: "ATTACK",
    character: "ALL",
    element: "WEAPON",
    power: 1,
    hits: 1,
    ap_cost: 0
}

const all_attacks: Array<Attack> = [
    base_attack
]

//LUNE
const crippling_tsunami: Attack = {
    name: "Crippling Tsunami",
    category: "ATTACK",
    character: "LUNE",
    element: "ICE",
    power: 2.5,
    hits: 1,
    ap_cost: 5
}

const crustal_crush: Attack = {
    name: "Crustal Crush",
    category: "ATTACK",
    character: "LUNE",
    element: "EARTH",
    power: 4.5,
    hits: 1,
    ap_cost: 7
}

const earth_rising: Attack = {
    name: "Earth Rising",
    category: "ATTACK",
    character: "LUNE",
    element: "EARTH",
    power: 1.2,
    hits: 1,
    ap_cost: 3
}

const electrify: Attack = {
    name: "Electrify",
    category: "ATTACK",
    character: "LUNE",
    element: "LIGHTNING",
    power: 0.6,
    hits: 1,
    ap_cost: 1
}

const elemental_genesis: Attack = {
    name: "Elemental Genesis",
    category: "ATTACK",
    character: "LUNE",
    element: "WEAPON",
    power: 24.0,
    hits: 1,
    ap_cost: 4
}

const elemental_trick: Attack = {
    name: "Elemental Trick",
    category: "ATTACK",
    character: "LUNE",
    element: "EARTH",
    power: 1.2,
    hits: 1,
    ap_cost: 3
}

const fire_rage: Attack = {
    name: "Fire Rage",
    category: "ATTACK",
    character: "LUNE",
    element: "FIRE",
    power: 2.5,
    hits: 1,
    ap_cost: 5
}

const healing_light: Attack = {
    name: "Healing Light",
    category: "ATTACK",
    character: "LUNE",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const hell: Attack = {
    name: "Hell",
    category: "ATTACK",
    character: "LUNE",
    element: "FIRE",
    power: 10.0,
    hits: 1,
    ap_cost: 9
}

const ice_lance: Attack = {
    name: "Ice Lance",
    category: "ATTACK",
    character: "LUNE",
    element: "ICE",
    power: 1.4,
    hits: 1,
    ap_cost: 4
}

const immolation: Attack = {
    name: "Immolation",
    category: "ATTACK",
    character: "LUNE",
    element: "FIRE",
    power: 0.7,
    hits: 1,
    ap_cost: 2
}

const lightning_dance: Attack = {
    name: "Lightning Dance",
    category: "ATTACK",
    character: "LUNE",
    element: "LIGHTNING",
    power: 3.6,
    hits: 1,
    ap_cost: 7
}

const mayhem: Attack = {
    name: "Mayhem",
    category: "ATTACK",
    character: "LUNE",
    element: "WEAPON",
    power: 2.4,
    hits: 1,
    ap_cost: 3
}

const rebirth: Attack = {
    name: "Rebirth",
    category: "ATTACK",
    character: "LUNE",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 5
}

const revitalization: Attack = {
    name: "Revitalization",
    category: "ATTACK",
    character: "LUNE",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 5
}

const rock_slide: Attack = {
    name: "Rock Slide",
    category: "ATTACK",
    character: "LUNE",
    element: "EARTH",
    power: 2.5,
    hits: 1,
    ap_cost: 5
}

const storm_caller: Attack = {
    name: "Storm Caller",
    category: "ATTACK",
    character: "LUNE",
    element: "LIGHTNING",
    power: 0.6,
    hits: 1,
    ap_cost: 6
}

const terraquake: Attack = {
    name: "Terraquake",
    category: "ATTACK",
    character: "LUNE",
    element: "EARTH",
    power: 1.5,
    hits: 1,
    ap_cost: 5
}

const thermal_transfer: Attack = {
    name: "Thermal Transfer",
    category: "ATTACK",
    character: "LUNE",
    element: "ICE",
    power: 1.0,
    hits: 1,
    ap_cost: 2
}

const thunderfall: Attack = {
    name: "Thunderfall",
    category: "ATTACK",
    character: "LUNE",
    element: "LIGHTNING",
    power: 1.8,
    hits: 1,
    ap_cost: 5
}

const typhoon: Attack = {
    name: "Typhoon",
    category: "ATTACK",
    character: "LUNE",
    element: "ICE",
    power: 2.5,
    hits: 1,
    ap_cost: 8
}

const wildfire: Attack = {
    name: "Wildfire",
    category: "ATTACK",
    character: "LUNE",
    element: "FIRE",
    power: 1.25,
    hits: 1,
    ap_cost: 4
}

const lune_attacks: Array<Attack> = [
    crippling_tsunami,
    crustal_crush,
    earth_rising,
    electrify,
    elemental_genesis,
    elemental_trick,
    fire_rage,
    healing_light,
    hell,
    ice_lance,
    immolation,
    lightning_dance,
    mayhem,
    rebirth,
    revitalization,
    rock_slide,
    storm_caller,
    terraquake,
    thermal_transfer,
    thunderfall,
    typhoon,
    wildfire
]



//MAELLE
const breaking_rules: Attack = {
    name: "Breaking Rules",
    category: "ATTACK",
    character: "MAELLE",
    element: "PHYSICAL",
    power: 1.5,
    hits: 1,
    ap_cost: 3
}

const burning_canvas: Attack = {
    name: "Burning Canvas",
    category: "ATTACK",
    character: "MAELLE",
    element: "VOID",
    power: 2.0,
    hits: 1,
    ap_cost: 5
}

const combustion: Attack = {
    name: "Combustion",
    category: "ATTACK",
    character: "MAELLE",
    element: "PHYSICAL",
    power: 1.6,
    hits: 1,
    ap_cost: 4
}

const degagement: Attack = {
    name: "Degagement",
    category: "ATTACK",
    character: "MAELLE",
    element: "FIRE",
    power: 1.0,
    hits: 1,
    ap_cost: 2
}

const egide: Attack = {
    name: "Egide",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const fencers_flurry: Attack = {
    name: "Fencer's Flurry",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 1.4,
    hits: 1,
    ap_cost: 3
}

const fleuret_fury: Attack = {
    name: "Fleuret Fury",
    category: "ATTACK",
    character: "MAELLE",
    element: "PHYSICAL",
    power: 2.4,
    hits: 1,
    ap_cost: 6
}

const guard_down: Attack = {
    name: "Guard Down",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const guard_up: Attack = {
    name: "Guard Up",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const gustaves_homage: Attack = {
    name: "Gustave's Homage",
    category: "ATTACK",
    character: "MAELLE",
    element: "LIGHTNING",
    power: 4.5,
    hits: 1,
    ap_cost: 8
}

const last_chance: Attack = {
    name: "Last Chance",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 1
}

const mezzo_forte: Attack = {
    name: "Mezzo Forte",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 1
}

const momentum_strike: Attack = {
    name: "Momentum Strike",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 3.5,
    hits: 1,
    ap_cost: 7
}

const offensive_switch: Attack = {
    name: "Offensive Switch",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 1.0,
    hits: 1,
    ap_cost: 1
}

const payback: Attack = {
    name: "Payback",
    category: "ATTACK",
    character: "MAELLE",
    element: "PHYSICAL",
    power: 5.0,
    hits: 1,
    ap_cost: 9
}

const percee: Attack = {
    name: "Percee",
    category: "ATTACK",
    character: "MAELLE",
    element: "PHYSICAL",
    power: 2.2,
    hits: 1,
    ap_cost: 5
}

const phantom_strike: Attack = {
    name: "Phantom Strike",
    category: "ATTACK",
    character: "MAELLE",
    element: "VOID",
    power: 2.8,
    hits: 1,
    ap_cost: 7
}

const pyrolyse: Attack = {
    name: "Pyrolyse",
    category: "ATTACK",
    character: "MAELLE",
    element: "FIRE",
    power: 5.0001,
    hits: 1,
    ap_cost: 9
}

const rain_of_fire: Attack = {
    name: "Rain of Fire",
    category: "ATTACK",
    character: "MAELLE",
    element: "FIRE",
    power: 1.6,
    hits: 1,
    ap_cost: 5
}

const revenge: Attack = {
    name: "Revenge",
    category: "ATTACK",
    character: "MAELLE",
    element: "FIRE",
    power: 1.2,
    hits: 1,
    ap_cost: 5
}

const spark: Attack = {
    name: "Spark",
    category: "ATTACK",
    character: "MAELLE",
    element: "FIRE",
    power: 1.0,
    hits: 1,
    ap_cost: 3
}

const stendhal: Attack = {
    name: "Stendhal",
    category: "ATTACK",
    character: "MAELLE",
    element: "VOID",
    power: 15.0,
    hits: 1,
    ap_cost: 8
}

const swift_stride: Attack = {
    name: "Swift Stride",
    category: "ATTACK",
    character: "MAELLE",
    element: "PHYSICAL",
    power: 1.0,
    hits: 1,
    ap_cost: 3
}

const sword_ballet: Attack = {
    name: "Sword Ballet",
    category: "ATTACK",
    character: "MAELLE",
    element: "WEAPON",
    power: 3.75,
    hits: 1,
    ap_cost: 9
}

const maelle_attacks: Array<Attack> = [
    breaking_rules,
    burning_canvas,
    combustion,
    degagement,
    egide,
    fencers_flurry,
    fleuret_fury,
    guard_down,
    guard_up,
    gustaves_homage,
    last_chance,
    mezzo_forte,
    momentum_strike,
    offensive_switch,
    payback,
    percee,
    phantom_strike,
    pyrolyse,
    rain_of_fire,
    revenge,
    spark,
    stendhal,
    swift_stride,
    sword_ballet
]



//SCIEL
const all_set: Attack = {
    name: "All Set",
    category: "ATTACK",
    character: "SCIEL",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 6
}

const bad_omen: Attack = {
    name: "Bad Omen",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 2.0,
    hits: 1,
    ap_cost: 3
}

const card_weaver: Attack = {
    name: "Card Weaver",
    category: "ATTACK",
    character: "SCIEL",
    element: "PHYSICAL",
    power: 2.0,
    hits: 1,
    ap_cost: 3
}

const dark_cleansing: Attack = {
    name: "Dark Cleansing",
    category: "ATTACK",
    character: "SCIEL",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 0
}

const dark_wave: Attack = {
    name: "Dark Wave",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 3.0,
    hits: 1,
    ap_cost: 6
}

const delaying_slash: Attack = {
    name: "Delaying Slash",
    category: "ATTACK",
    character: "SCIEL",
    element: "WEAPON",
    power: 3.0,
    hits: 1,
    ap_cost: 5
}

const final_path: Attack = {
    name: "Final Path",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 7.5,
    hits: 1,
    ap_cost: 9
}

const firing_shadow: Attack = {
    name: "Firing Shadow",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 1.5,
    hits: 1,
    ap_cost: 3
}

const focused_foretell: Attack = {
    name: "Focused Foretell",
    category: "ATTACK",
    character: "SCIEL",
    element: "PHYSICAL",
    power: 1.0,
    hits: 1,
    ap_cost: 2
}

const fortunes_fury: Attack = {
    name: "Fortune's Fury",
    category: "ATTACK",
    character: "SCIEL",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 5
}

const grim_harvest: Attack = {
    name: "Grim Harvest",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 3.0,
    hits: 1,
    ap_cost: 5
}

const harvest: Attack = {
    name: "Harvest",
    category: "ATTACK",
    character: "SCIEL",
    element: "WEAPON",
    power: 2.0,
    hits: 1,
    ap_cost: 3
}

const intervention: Attack = {
    name: "Intervention",
    category: "ATTACK",
    character: "SCIEL",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 6
}

const marking_card: Attack = {
    name: "Marking Card",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 2.0,
    hits: 1,
    ap_cost: 3
}

const our_sacrifice: Attack = {
    name: "Our Sacrifice",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 2.0,
    hits: 1,
    ap_cost: 4
}

const phantom_blade: Attack = {
    name: "Phantom Blade",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 3.0,
    hits: 1,
    ap_cost: 5
}

const plentiful_harvest: Attack = {
    name: "Plentiful Harvest",
    category: "ATTACK",
    character: "SCIEL",
    element: "PHYSICAL",
    power: 2.0,
    hits: 1,
    ap_cost: 4
}

const rush: Attack = {
    name: "Rush",
    category: "ATTACK",
    character: "SCIEL",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const sealed_fate: Attack = {
    name: "Sealed Fate",
    category: "ATTACK",
    character: "SCIEL",
    element: "WEAPON",
    power: 2.0,
    hits: 1,
    ap_cost: 4
}

const searing_bond: Attack = {
    name: "Searing Bond",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 2.5,
    hits: 1,
    ap_cost: 4
}

const spectral_sweep: Attack = {
    name: "Spectral Sweep",
    category: "ATTACK",
    character: "SCIEL",
    element: "WEAPON",
    power: 1.0,
    hits: 1,
    ap_cost: 7
}

const twilight_dance: Attack = {
    name: "Twilight Dance",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 6.0,
    hits: 1,
    ap_cost: 9
}

const twilight_slash: Attack = {
    name: "Twilight Slash",
    category: "ATTACK",
    character: "SCIEL",
    element: "DARK",
    power: 1.0,
    hits: 1,
    ap_cost: 2
}

const sciel_attacks: Array<Attack> = [
    all_set,
    bad_omen,
    card_weaver,
    dark_cleansing,
    dark_wave,
    delaying_slash,
    final_path,
    firing_shadow,
    focused_foretell,
    fortunes_fury,
    grim_harvest,
    harvest,
    intervention,
    marking_card,
    our_sacrifice,
    phantom_blade,
    plentiful_harvest,
    rush,
    sealed_fate,
    searing_bond,
    spectral_sweep,
    twilight_dance,
    twilight_slash
]



//VERSO
const ascending_assault: Attack = {
    name: "Ascending Assault",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 2.5,
    hits: 1,
    ap_cost: 5
}

const assault_zero: Attack = {
    name: "Assault Zero",
    category: "ATTACK",
    character: "VERSO",
    element: "PHYSICAL",
    power: 1.25,
    hits: 1,
    ap_cost: 3
}

const berserk_slash: Attack = {
    name: "Berserk Slash",
    category: "ATTACK",
    character: "VERSO",
    element: "PHYSICAL",
    power: 0.6,
    hits: 1,
    ap_cost: 4
}

const blitz: Attack = {
    name: "Blitz",
    category: "ATTACK",
    character: "VERSO",
    element: "PHYSICAL",
    power: 1.5,
    hits: 1,
    ap_cost: 3
}

const burden: Attack = {
    name: "Burden",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 1
}

const defiant_strike: Attack = {
    name: "Defiant Strike",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 4.0,
    hits: 1,
    ap_cost: 3
}

const end_bringer: Attack = {
    name: "End Bringer",
    category: "ATTACK",
    character: "VERSO",
    element: "PHYSICAL",
    power: 7.2,
    hits: 1,
    ap_cost: 9
}

const follow_up: Attack = {
    name: "Follow Up",
    category: "ATTACK",
    character: "VERSO",
    element: "LIGHT",
    power: 2.0,
    hits: 1,
    ap_cost: 5
}

const from_fire: Attack = {
    name: "From Fire",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 1.875,
    hits: 1,
    ap_cost: 4
}

const leadership: Attack = {
    name: "Leadership",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const light_holder: Attack = {
    name: "Light Holder",
    category: "ATTACK",
    character: "VERSO",
    element: "LIGHT",
    power: 1.5,
    hits: 1,
    ap_cost: 4
}

const marking_shot: Attack = {
    name: "Marking Shot",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 1.0,
    hits: 1,
    ap_cost: 2
}

const overload: Attack = {
    name: "Overload",
    category: "ATTACK",
    character: "VERSO",
    element: "PHYSICAL",
    power: 0.0,
    hits: 1,
    ap_cost: 0
}

const perfect_break: Attack = {
    name: "Perfect Break",
    category: "ATTACK",
    character: "VERSO",
    element: "LIGHT",
    power: 5.0,
    hits: 1,
    ap_cost: 7
}

const perfect_recovery: Attack = {
    name: "Perfect Recovery",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const phantom_stars: Attack = {
    name: "Phantom Stars",
    category: "ATTACK",
    character: "VERSO",
    element: "LIGHT",
    power: 3.5,
    hits: 1,
    ap_cost: 9
}

const powerful: Attack = {
    name: "Powerful",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const purification: Attack = {
    name: "Purification",
    category: "ATTACK",
    character: "VERSO",
    element: "LIGHT",
    power: 2.5,
    hits: 1,
    ap_cost: 5
}

const quick_strike: Attack = {
    name: "Quick Strike",
    category: "ATTACK",
    character: "VERSO",
    element: "PHYSICAL",
    power: 1.0,
    hits: 1,
    ap_cost: 2
}

const radiant_slash: Attack = {
    name: "Radiant Slash",
    category: "ATTACK",
    character: "VERSO",
    element: "LIGHT",
    power: 0.7,
    hits: 1,
    ap_cost: 2
}

const speed_burst: Attack = {
    name: "Speed Burst",
    category: "ATTACK",
    character: "VERSO",
    element: "LIGHT",
    power: 2.5,
    hits: 1,
    ap_cost: 6
}

const steeled_strike: Attack = {
    name: "Steeled Strike",
    category: "ATTACK",
    character: "VERSO",
    element: "PHYSICAL",
    power: 6.5,
    hits: 1,
    ap_cost: 9
}

const strike_storm: Attack = {
    name: "Strike Storm",
    category: "ATTACK",
    character: "VERSO",
    element: "WEAPON",
    power: 4.9,
    hits: 1,
    ap_cost: 7
}

const verso_attacks: Array<Attack> = [
    ascending_assault,
    assault_zero,
    berserk_slash,
    blitz,
    burden,
    defiant_strike,
    end_bringer,
    follow_up,
    from_fire,
    leadership,
    light_holder,
    marking_shot,
    overload,
    perfect_break,
    perfect_recovery,
    phantom_stars,
    powerful,
    purification,
    quick_strike,
    radiant_slash,
    speed_burst,
    steeled_strike,
    strike_storm
]



//MONOCO
const abbest_wind: Attack = {
    name: "Abbest Wind",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 1.0,
    hits: 1,
    ap_cost: 2
}

const aberration_light: Attack = {
    name: "Aberration Light",
    category: "ATTACK",
    character: "MONOCO",
    element: "LIGHT",
    power: 3.0,
    hits: 1,
    ap_cost: 7
}

const ballet_charm: Attack = {
    name: "Ballet Charm",
    category: "ATTACK",
    character: "MONOCO",
    element: "LIGHT",
    power: 0.8,
    hits: 1,
    ap_cost: 2
}

const benissuer_mortar: Attack = {
    name: "Benissuer Mortar",
    category: "ATTACK",
    character: "MONOCO",
    element: "ICE",
    power: 2.4,
    hits: 1,
    ap_cost: 5
}

const bouchelier_fortify: Attack = {
    name: "Bouchelier Fortify",
    category: "ATTACK",
    character: "MONOCO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const braseleur_smash: Attack = {
    name: "Braseleur Smash",
    category: "ATTACK",
    character: "MONOCO",
    element: "FIRE",
    power: 1.8,
    hits: 1,
    ap_cost: 4
}

const bruler_bash: Attack = {
    name: "Bruler Bash",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 2.4,
    hits: 1,
    ap_cost: 4
}

const chalier_combo: Attack = {
    name: "Chalier Combo",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 3.6,
    hits: 1,
    ap_cost: 7
}

const chapelier_slash: Attack = {
    name: "Chapelier Slash",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 2.4,
    hits: 1,
    ap_cost: 7
}

const chevaliere_ice: Attack = {
    name: "Chevaliere Ice",
    category: "ATTACK",
    character: "MONOCO",
    element: "ICE",
    power: 1.8,
    hits: 1,
    ap_cost: 6
}

const chevaliere_piercing: Attack = {
    name: "Chevaliere Piercing",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 1.8,
    hits: 1,
    ap_cost: 3
}

const chevaliere_thrusts: Attack = {
    name: "Chevaliere Thrusts",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 1.8,
    hits: 1,
    ap_cost: 7
}

const clair_enfeeble: Attack = {
    name: "Clair Enfeeble",
    category: "ATTACK",
    character: "MONOCO",
    element: "LIGHT",
    power: 1.75,
    hits: 1,
    ap_cost: 5
}

const contorsionniste_blast: Attack = {
    name: "Contorsionniste Blast",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 2.5,
    hits: 1,
    ap_cost: 6
}

const creation_void: Attack = {
    name: "Creation Void",
    category: "ATTACK",
    character: "MONOCO",
    element: "VOID",
    power: 6.0,
    hits: 1,
    ap_cost: 9
}

const cruler_barrier: Attack = {
    name: "Cruler Barrier",
    category: "ATTACK",
    character: "MONOCO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 4
}

const cultist_blood: Attack = {
    name: "Cultist Blood",
    category: "ATTACK",
    character: "MONOCO",
    element: "DARK",
    power: 0.9,
    hits: 1,
    ap_cost: 3
}

const cultists_slashes: Attack = {
    name: "Cultists Slashes",
    category: "ATTACK",
    character: "MONOCO",
    element: "DARK",
    power: 2.1,
    hits: 1,
    ap_cost: 3
}

const danseusse_waltz: Attack = {
    name: "Danseusse Waltz",
    category: "ATTACK",
    character: "MONOCO",
    element: "FIRE",
    power: 3.9,
    hits: 1,
    ap_cost: 8
}

const demineur_thunder: Attack = {
    name: "Demineur Thunder",
    category: "ATTACK",
    character: "MONOCO",
    element: "LIGHTNING",
    power: 0.1,
    hits: 1,
    ap_cost: 2
}

const duallist_storm: Attack = {
    name: "Duallist Storm",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 6.0,
    hits: 1,
    ap_cost: 8
}

const echassier_stabs: Attack = {
    name: "Echassier Stabs",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 3.0,
    hits: 1,
    ap_cost: 4
}

const eveque_spear: Attack = {
    name: "Eveque Spear",
    category: "ATTACK",
    character: "MONOCO",
    element: "EARTH",
    power: 4.0,
    hits: 1,
    ap_cost: 6
}

const gault_fury: Attack = {
    name: "Gault Fury",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 1.6,
    hits: 1,
    ap_cost: 3
}

const glaise_earthquakes: Attack = {
    name: "Glaise Earthquakes",
    category: "ATTACK",
    character: "MONOCO",
    element: "EARTH",
    power: 9.0,
    hits: 1,
    ap_cost: 4
}

const grosse_tete_whack: Attack = {
    name: "Grosse Tete Whack",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 3.0,
    hits: 1,
    ap_cost: 6
}

const hexga_crush: Attack = {
    name: "Hexga Crush",
    category: "ATTACK",
    character: "MONOCO",
    element: "EARTH",
    power: 2.4,
    hits: 1,
    ap_cost: 5
}

const jar_lampstorm: Attack = {
    name: "Jar Lampstorm",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 2.0,
    hits: 1,
    ap_cost: 5
}

const lampmaster_light: Attack = {
    name: "Lampmaster Light",
    category: "ATTACK",
    character: "MONOCO",
    element: "LIGHT",
    power: 2.0,
    hits: 1,
    ap_cost: 5
}

const lancelier_impale: Attack = {
    name: "Lancelier Impale",
    category: "ATTACK",
    character: "MONOCO",
    element: "ICE",
    power: 1.2,
    hits: 1,
    ap_cost: 2
}

const luster_slices: Attack = {
    name: "Luster Slices",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 1.8,
    hits: 1,
    ap_cost: 3
}

const moissonneusse_vendage: Attack = {
    name: "Moissonneusse Vendage",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 3.0,
    hits: 1,
    ap_cost: 5
}

const obscur_sword: Attack = {
    name: "Obscur Sword",
    category: "ATTACK",
    character: "MONOCO",
    element: "DARK",
    power: 3.0,
    hits: 1,
    ap_cost: 6
}

const orphelin_cheers: Attack = {
    name: "Orphelin Cheers",
    category: "ATTACK",
    character: "MONOCO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const perelin_heal: Attack = {
    name: "Perelin Heal",
    category: "ATTACK",
    character: "MONOCO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const portier_crash: Attack = {
    name: "Portier Crash",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 5.0,
    hits: 1,
    ap_cost: 8
}

const potier_energy: Attack = {
    name: "Potier Energy",
    category: "ATTACK",
    character: "MONOCO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 0
}

const ramasseur_bonk: Attack = {
    name: "Ramasseur Bonk",
    category: "ATTACK",
    character: "MONOCO",
    element: "DARK",
    power: 0.8,
    hits: 1,
    ap_cost: 2
}

const rocher_hammering: Attack = {
    name: "Rocher Hammering",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 1.6,
    hits: 1,
    ap_cost: 3
}

const sakapatate_estoc: Attack = {
    name: "Sakapatate Estoc",
    category: "ATTACK",
    character: "MONOCO",
    element: "LIGHTNING",
    power: 1.5,
    hits: 1,
    ap_cost: 3
}

const sakapatate_explosion: Attack = {
    name: "Sakapatate Explosion",
    category: "ATTACK",
    character: "MONOCO",
    element: "LIGHTNING",
    power: 1.5,
    hits: 1,
    ap_cost: 4
}

const sakapatate_fire: Attack = {
    name: "Sakapatate Fire",
    category: "ATTACK",
    character: "MONOCO",
    element: "FIRE",
    power: 4.5,
    hits: 1,
    ap_cost: 9
}

const sakapatate_slam: Attack = {
    name: "Sakapatate Slam",
    category: "ATTACK",
    character: "MONOCO",
    element: "PHYSICAL",
    power: 3.0,
    hits: 1,
    ap_cost: 7
}

const sapling_absorption: Attack = {
    name: "Sapling Absorption",
    category: "ATTACK",
    character: "MONOCO",
    element: "DARK",
    power: 3.0,
    hits: 1,
    ap_cost: 6
}

const stalact_punches: Attack = {
    name: "Stalact Punches",
    category: "ATTACK",
    character: "MONOCO",
    element: "ICE",
    power: 1.8,
    hits: 1,
    ap_cost: 4
}

const troubadour_trumpet: Attack = {
    name: "Troubadour Trumpet",
    category: "ATTACK",
    character: "MONOCO",
    element: "WEAPON",
    power: 0.0,
    hits: 1,
    ap_cost: 3
}

const monoco_attacks: Array<Attack> = [
    abbest_wind,
    aberration_light,
    ballet_charm,
    benissuer_mortar,
    bouchelier_fortify,
    braseleur_smash,
    bruler_bash,
    chalier_combo,
    chapelier_slash,
    chevaliere_ice,
    chevaliere_piercing,
    chevaliere_thrusts,
    clair_enfeeble,
    contorsionniste_blast,
    creation_void,
    cruler_barrier,
    cultist_blood,
    cultists_slashes,
    danseusse_waltz,
    demineur_thunder,
    duallist_storm,
    echassier_stabs,
    eveque_spear,
    gault_fury,
    glaise_earthquakes,
    grosse_tete_whack,
    hexga_crush,
    jar_lampstorm,
    lampmaster_light,
    lancelier_impale,
    luster_slices,
    moissonneusse_vendage,
    obscur_sword,
    orphelin_cheers,
    perelin_heal,
    portier_crash,
    potier_energy,
    ramasseur_bonk,
    rocher_hammering,
    sakapatate_estoc,
    sakapatate_explosion,
    sakapatate_fire,
    sakapatate_slam,
    sapling_absorption,
    stalact_punches,
    troubadour_trumpet
]

export const attacks: Array<Attack> = [
    all_attacks,
    lune_attacks,
    maelle_attacks,
    sciel_attacks,
    verso_attacks,
    monoco_attacks
].flat()
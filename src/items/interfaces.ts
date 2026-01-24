export type Category = "CHARACTER" | "WEAPON" | "ATTACK" | "PICTO" | "LUMINA";
export type StatKey = "health" | "attack_power" | "speed" | "defense" | "critical_rate" | "ap" | "shield" | "defenceless" | "powerful";
export type DamageTarget = "DAMAGE_ADD" | "DAMAGE_MUL";
export type Stacking = "ADD" | "MUL";

export type Effect = 
| { kind: "ADD_STAT"; stat: StatKey; add: number }
| { kind: "MUL_STAT"; stat: StatKey; mul: number }
| { kind: "OVR_STAT"; stat: StatKey; ovr: number }
| { kind: "ADD_BUFF"; target: DamageTarget; stacking: Stacking; buff: number };

export type Condition =
| { kind: "ALWAYS" }
| { kind: "STAT_GTE"; stat: StatKey; value: number }
| { kind: "STAT_LTE"; stat: StatKey; value: number }
| { kind: "STAT_EQ"; stat: StatKey; value: number }
| { kind: "HAS_ATTACK"; name: string }
| { kind: "AND"; all: Condition[] }
| { kind: "OR"; any: Condition[] }
| { kind: "NOT"; cond: Condition};

export interface SelectableBase { 
    name: string;
    category: Category;
}

export interface Character extends SelectableBase {
    category: "CHARACTER";
    level: number;
    attributes: {
        vitality: number;
        might: number;
        agility: number;
        defense: number;
        luck: number;
    };
    stats: {
        health: number;
        attack_power: number;
        speed: number;
        defense: number;
        critical_rate: number;
    };
    lumina_points: number;
    lumina_points_added: number;
    ap: 3;
}

export interface Weapon extends SelectableBase {
    category: "WEAPON";
    character: "LUNE" | "MAELLE" | "SCIEL" | "VERSO" | "MONOCO";
    element: "PHYSICAL" | "LIGHT" | "DARK" | "VOID" | "FIRE" | "ICE" | "EARTH" | "LIGHTNING";
    level: number
    power: number;
    scaling: {
        vitality: "NONE" | "D" | "C" | "B" | "A" | "S";
        might: "NONE" | "D" | "C" | "B" | "A" | "S";
        agility: "NONE" | "D" | "C" | "B" | "A" | "S";
        defense: "NONE" | "D" | "C" | "B" | "A" | "S";
        luck: "NONE" | "D" | "C" | "B" | "A" | "S";
    };
}

export interface Attack extends SelectableBase {
    category: "ATTACK";
    character: "ALL" | "LUNE" | "MAELLE" | "SCIEL" | "VERSO" | "MONOCO";
    element: "WEAPON" | "PHYSICAL" | "LIGHT" | "DARK" | "VOID" | "FIRE" | "ICE" | "EARTH" | "LIGHTNING";
    power: number;
    ap_cost: number;
}

export interface Picto extends SelectableBase {
    category: "PICTO";
    attribute_buff: {
        health: number;
        speed: number;
        defense: number;
        critical_rate: number;
    };
    lumina: Lumina;
}

export interface Lumina extends SelectableBase {
    category: "LUMINA";
    description: string;
    cost: number;
    effect: Effect;
    condition: Condition;
}

export type Selectable = Character | Weapon | Attack | Picto | Lumina;
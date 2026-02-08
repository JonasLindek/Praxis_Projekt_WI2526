export type Category = "CHARACTER" | "WEAPON" | "ATTACK" | "PICTO" | "LUMINA";
export type Char = "LUNE" | "MAELLE" | "SCIEL" | "VERSO" | "MONOCO";
export type Element = "PHYSICAL" | "LIGHT" | "DARK" | "VOID" | "FIRE" | "ICE" | "EARTH" | "LIGHTNING";
export type Scaling = "NONE" | "D" | "C" | "B" | "A" | "S";

export type StatKey = 
| "health" | "current_health" | "attack_power" | "speed" | "defense" | "critical_rate" | "ap" 
| "bonus_dmg" | "hits";
export type Rule = 
| "exceed_dmg_cap" | "cant_heal" 
| "double_heal" | "double_burn" | "double_mark" | "bonus_ap" 
| "greater_defenceless" | "greater_powerful" | "powerful_shield" | "tainted" | "faster_than_stronger";
export type BuffKey = "regen" | "powerful" | "rush" | "shell" | "ANY";
export type DebuffKey = "powerless" | "slow" | "defenceless" | "ANY";
export type StatusEffectKey = "stun" | "inverted" | "mark" | "shield" | "burn" | "ANY";
export type Target = "PLAYER" | "ENEMY";
export type DamageTarget = "DAMAGE_ADD" | "DAMAGE_MUL";

export type Effect = 
| { kind: "NONE" }
| { kind: "REVIVE_FULL" }
| { kind: "ADD_STAT"; stat: StatKey; add: number }
| { kind: "MUL_STAT"; stat: StatKey; mul: number }
| { kind: "DIV_STAT"; stat: StatKey; div: number }
| { kind: "OVR_STAT"; stat: StatKey; ovr: number }
| { kind: "ADD_PERC_STAT"; stat1: StatKey; stat2: StatKey; perc: number } //INCREASE STAT1 BY PERC OF STAT2
| { kind: "TOGGLE_RULE"; rule: Rule }
| { kind: "ADD_BUFF"; buff: BuffKey; turns: number }
| { kind: "ADD_DEBUFF"; debuff: DebuffKey; turns: number }
| { kind: "ADD_STATUS_EFFECT"; target: Target; status: StatusEffectKey; turns: number }
| { kind: "MUL_STATUS_EFFECT"; target: Target; status: StatusEffectKey; mul: number }
| { kind: "ADD_DMG"; target: DamageTarget; dmg: number };

export type Condition =
| { kind: "ALWAYS" }
| { kind: "NEVER" }
| { kind: "STAT_GTE"; stat: StatKey; value: number }
| { kind: "STAT_LTE"; stat: StatKey; value: number }
| { kind: "STAT_EQ"; stat: StatKey; value: number }
| { kind: "PERC_LT"; stat1: StatKey, stat2: StatKey, perc: number } //STAT1 LESS THAN STAT2 PERC
| { kind: "PERC_EQ"; stat1: StatKey, stat2: StatKey, perc: number }
| { kind: "STATUS_EQ", status: StatusEffectKey; value: number }
| { kind: "HAS_ATTACK"; name: string }
| { kind: "HAS_STATUS_EFFECT"; status: StatusEffectKey }
| { kind: "HAS_DEBUFF", debuff: DebuffKey }
| { kind: "AND"; all: Condition[] }
| { kind: "OR"; any: Condition[] }
| { kind: "NOT"; cond: Condition};

export type Event = 
| { kind: "NEVER" }
| { kind: "ON_START" }
| { kind: "ON_TURN_START" }
| { kind: "ON_TURN_END" }
| { kind: "ON_ATTACK" }
| { kind: "ON_END" }
| { kind: "ON_DEATH" }
| { kind: "ON_REVIVE" }
| { kind: "ON_BUFF_APPLIED"; buff: BuffKey }
| { kind: "ON_STATUS_EFFECT_APPLIED"; target: Target; status: StatusEffectKey };

export type Trigger = {
    effects: Effect[];
    condition: Condition;
    event: Event;
    once?: boolean;
    priority?: number;
}

export interface SelectableBase { 
    name: string;
    category: Category;
}

export interface Character extends SelectableBase {
    category: "CHARACTER";
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
    character: Char;
    element: Element;
    level: number
    power: number;
    scaling: {
        vitality: Scaling;
        agility: Scaling;
        defense: Scaling;
        luck: Scaling;
    };
}

export interface Attack extends SelectableBase {
    category: "ATTACK";
    character: "ALL" | Char;
    element: "WEAPON" | Element;
    power: number;
    hits: number;
    ap_cost: number;
}

export interface Picto extends SelectableBase {
    category: "PICTO";
    level: Number;
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
    triggers: Trigger[];
}

export type Selectable = Character | Weapon | Attack | Picto | Lumina;
export type Category = "CHARACTER" | "WEAPON" | "ATTACK" | "PICTO" | "LUMINA";

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
    level: number
    power: number;
    element: "PHYSICAL" | "LIGHT" | "DARK" | "VOID" | "FIRE" | "ICE" | "EARTH" | "LIGHTNING";
    scaling: {
        vitality: "NONE" | "D" | "C" | "B" | "A" | "S";
        might: "NONE" | "D" | "C" | "B" | "A" | "S";
        agility: "NONE" | "D" | "C" | "B" | "A" | "S";
        defense: "NONE" | "D" | "C" | "B" | "A" | "S";
        luck: "NONE" | "D" | "C" | "B" | "A" | "S";
    };
    effects: {
        level_4: string;
        level_10: string;
        level_20: string;
    }
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
}

export type Selectable = Character | Weapon | Attack | Picto | Lumina;
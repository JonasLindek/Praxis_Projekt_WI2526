import type { Lumina } from "./interfaces";
//priority noch genauer
const accelerating_heal: Lumina = {
    name: "Accelerating Heal",
    category: "LUMINA",
    description: "Healing an ally also applies Rush for 1 turn",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const accelerating_last_stand: Lumina = {
    name: "Accelerating Last Stand",
    category: "LUMINA",
    description: "Gain Rush if fighting alone.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "rush", turns: 9999 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const accelerating_shots: Lumina = {
    name: "Accelerating Shots",
    category: "LUMINA",
    description: "20% chance to gain Rush on Free Aim shot.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const accelerating_tint: Lumina = {
    name: "Accelerating Tint",
    category: "LUMINA",
    description: "Healing Tints also apply Rush",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const aegis_revival: Lumina = {
    name: "Aegis Revival",
    category: "LUMINA",
    description: "+1 Shield on being revived.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STATUS_EFFECT", target: "PLAYER", status: "shield", turns: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_REVIVE" }
    }]
}

const anti_blight: Lumina = {
    name: "Anti-Blight",
    category: "LUMINA",
    description: "Immune to Blight.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const anti_burn: Lumina = {
    name: "Anti-Burn",
    category: "LUMINA",
    description: "Immune to Burn.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const anti_charm: Lumina = {
    name: "Anti-Charm",
    category: "LUMINA",
    description: "Immune to Charm.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const anti_freeze: Lumina = {
    name: "Anti-Freeze",
    category: "LUMINA",
    description: "Immune to Freeze.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const anti_stun: Lumina = {
    name: "Anti-Stun",
    category: "LUMINA",
    description: "Immune to Stun.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const at_deaths_door: Lumina = {
    name: "At Death's Door",
    category: "LUMINA",
    description: "Deal 50% more damage if Health is below 10%.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_MUL", dmg: 50 }],
        condition: { kind: "PERC_LT", stat1: "current_health", stat2: "health", perc: 10 },
        event: { kind: "ON_TURN_END" }
    }]
}

const attack_lifesteal: Lumina = {
    name: "Attack Lifesteal",
    category: "LUMINA",
    description: "Recover 15% Health on Base Attack.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const augmented_aim: Lumina = {
    name: "Augmented Aim",
    category: "LUMINA",
    description: "50% increased Free Aim damage.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const augmented_attack: Lumina = {
    name: "Augmented Attack",
    category: "LUMINA",
    description: "50% increased Base Attack damage.",
    cost: 7,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: 50 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_START" }
    }]
}

const augmented_counter_i: Lumina = {
    name: "Augmented Counter I",
    category: "LUMINA",
    description: "25% increased Counterattack damage.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const augmented_counter_ii: Lumina = {
    name: "Augmented Counter II",
    category: "LUMINA",
    description: "50% increased Counterattack damage.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const augmented_counter_iii: Lumina = {
    name: "Augmented Counter III",
    category: "LUMINA",
    description: "75% increased Counterattack damage.",
    cost: 7,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const augmented_first_strike: Lumina = {
    name: "Augmented First Strike",
    category: "LUMINA",
    description: "50% increased damage on the first hit. Once per battle.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: 50 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const auto_death: Lumina = {
    name: "Auto Death",
    category: "LUMINA",
    description: "Kill self on battle start.",
    cost: 1,
    triggers: [{
        effects: [{ kind: "OVR_STAT", stat: "current_health", ovr: 0 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const auto_powerful: Lumina = {
    name: "Auto Powerful",
    category: "LUMINA",
    description: "Apply Powerful for 3 turns on battle start.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "powerful", turns: 3 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const auto_regen: Lumina = {
    name: "Auto Regen",
    category: "LUMINA",
    description: "Apply Regen for 3 turns on battle start.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "regen", turns: 3 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const auto_rush: Lumina = {
    name: "Auto Rush",
    category: "LUMINA",
    description: "Apply Rush for 3 turns on battle start.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "rush", turns: 3 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const auto_shell: Lumina = {
    name: "Auto Shell",
    category: "LUMINA",
    description: "Apply Shell for 3 turns on battle start.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "shell", turns: 3 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const base_shield: Lumina = {
    name: "Base Shield",
    category: "LUMINA",
    description: "+1 Shield if not affected by any Shield on turn start.",
    cost: 20,
    triggers: [{
        effects: [{ kind: "ADD_STATUS_EFFECT", target: "PLAYER", status: "shield", turns: 1 }],
        condition: { kind: "STATUS_EQ", status: "shield", value: 0 },
        event: { kind: "ON_TURN_START" }
    }]
}

const beneficial_contamination: Lumina = {
    name: "Beneficial Contamination",
    category: "LUMINA",
    description: "+2 AP on applying a Status Effect. Once per turn.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 2 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_STATUS_EFFECT_APPLIED", target: "PLAYER", status: "ANY" },
        once: true
    }]
}

const break_specialist: Lumina = {
    name: "Break Specialist",
    category: "LUMINA",
    description: "Break damage is increased by 50%, but base damage is reduced by 20%.",
    cost: 1,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: -20 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const breaker: Lumina = {
    name: "Breaker",
    category: "LUMINA",
    description: "25% increased Break damage.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const breaking_attack: Lumina = {
    name: "Breaking Attack",
    category: "LUMINA",
    description: "Base Attack can Break.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}//RECONSIDER

const breaking_burn: Lumina = {
    name: "Breaking Burn",
    category: "LUMINA",
    description: "25% increased Break damage on Burning enemies.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const breaking_counter: Lumina = {
    name: "Breaking Counter",
    category: "LUMINA",
    description: "50% increased Break damage on Counterattack.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const breaking_death: Lumina = {
    name: "Breaking Death",
    category: "LUMINA",
    description: "Fully charge enemy's Break Bar on death.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}//RECONSIDER

const breaking_shots: Lumina = {
    name: "Breaking Shots",
    category: "LUMINA",
    description: "50% increased Break damage with Free Aim Shots.",
    cost: 1,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const breaking_slow: Lumina = {
    name: "Breaking Slow",
    category: "LUMINA",
    description: "25% increased Break damage against Slowed enemies.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const burn_affinity: Lumina = {
    name: "Burn Affinity",
    category: "LUMINA",
    description: "25% increased damage on Burning Targets.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: 25 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "burn" },
        event: { kind: "ON_TURN_END" }
    }]
}

const burning_break: Lumina = {
    name: "Burning Break",
    category: "LUMINA",
    description: "Apply 3 Burn stacks on Breaking a target.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "ADD_STATUS_EFFECT", target: "ENEMY", status: "burn", turns: 3 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "stun" },
        event: { kind: "ON_ATTACK" }
    }]
}

const burning_death: Lumina = {
    name: "Burning Death",
    category: "LUMINA",
    description: "Apply 3 Burn to all enemies on Death.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STATUS_EFFECT", target: "ENEMY", status: "burn", turns: 3 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_DEATH" }
    }]
}

const burning_mark: Lumina = {
    name: "Burning Mark",
    category: "LUMINA",
    description: "Apply Burn on hitting a Marked enemy.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "ADD_STATUS_EFFECT", target: "ENEMY", status: "burn", turns: 1 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "mark" },
        event: { kind: "ON_ATTACK" }
    }]
}

const burning_shots: Lumina = {
    name: "Burning Shots",
    category: "LUMINA",
    description: "20% chance to Burn on Free Aim shot.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const charging_alteration: Lumina = {
    name: "Charging Alteration",
    category: "LUMINA",
    description: "+10% of a Gradient Charge on applying a Buff. Once per turn.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const charging_attack: Lumina = {
    name: "Charging Attack",
    category: "LUMINA",
    description: "+15% of a Gradient Charge on Base Attack.",
    cost: 7,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const charging_burn: Lumina = {
    name: "Charging Burn",
    category: "LUMINA",
    description: "+20% of a Gradient Charge on applying Burn. Once per turn.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const charging_counter: Lumina = {
    name: "Charging Counter",
    category: "LUMINA",
    description: "+20% of a Gradient Charge on Counterattack.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const charging_critical: Lumina = {
    name: "Charging Critical",
    category: "LUMINA",
    description: "+20% of a Gradient Charge on Critical Hit. Once per turn.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const charging_mark: Lumina = {
    name: "Charging Mark",
    category: "LUMINA",
    description: "+20% of a Gradient Charge on hitting a Marked target. Once per turn.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const charging_stun: Lumina = {
    name: "Charging Stun",
    category: "LUMINA",
    description: "+5% of a Gradient Charge on hitting a Stunned enemy.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const charging_tint: Lumina = {
    name: "Charging Tint",
    category: "LUMINA",
    description: "+5% of a Gradient Charge on using an item.",
    cost: 2,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const charging_weakness: Lumina = {
    name: "Charging Weakness",
    category: "LUMINA",
    description: "+15% of a Gradient Charge on hitting a Weakness. Once per turn.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const cheater: Lumina = {
    name: "Cheater",
    category: "LUMINA",
    description: "Always play twice in a row.",
    cost: 40,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const cleas_life: Lumina = {
    name: "Clea's Life",
    category: "LUMINA",
    description: "On turn start, if no damage taken since last turn, recover 100% Health.",
    cost: 30,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const cleansing_tint: Lumina = {
    name: "Cleansing Tint",
    category: "LUMINA",
    description: "Healing Tints also remove all Status Effects from the target.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const combo_attack_i: Lumina = {
    name: "Combo Attack I",
    category: "LUMINA",
    description: "Base Attack has 1 extra hit.", 
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "hits", add: 1 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_START" }
    }]
}

const combo_attack_ii: Lumina = {
    name: "Combo Attack II",
    category: "LUMINA",
    description: "Base Attack has 1 extra hit.",
    cost: 20,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "hits", add: 1 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_START" }
    }]
}

const combo_attack_iii: Lumina = {
    name: "Combo Attack III",
    category: "LUMINA",
    description: "Base Attack has 1 extra hit.",
    cost: 30,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "hits", add: 1 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_START" }
    }]
}

const confident: Lumina = {
    name: "Confident",
    category: "LUMINA",
    description: "Take 50% less damage, but can't be Healed.",
    cost: 20,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "cant_heal" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const confident_fighter: Lumina = {
    name: "Confident Fighter",
    category: "LUMINA",
    description: "30% increased damage, but can't be Healed.",
    cost: 15,
    triggers: [{
        effects: [
            { kind: "ADD_DMG", target: "DAMAGE_MUL", dmg: 30 },
            { kind: "TOGGLE_RULE", rule: "cant_heal" }
        ],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]

}

const critical_break: Lumina = {
    name: "Critical Break",
    category: "LUMINA",
    description: "25% increased Break damage on Critical Hits.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const critical_burn: Lumina = {
    name: "Critical Burn",
    category: "LUMINA",
    description: "25% increased Critical Chance on Burning enemies.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "critical_rate", add: 25 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "burn" },
        event: { kind: "ON_TURN_END" }
    }]
}

const critical_moment: Lumina = {
    name: "Critical Moment",
    category: "LUMINA",
    description: "50% increased Critical Chance if Health is below 30%.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "critical_rate", add: 50 }],
        condition: { kind: "PERC_LT", stat1: "current_health", stat2: "health", perc: 30 },
        event: { kind: "ON_TURN_END" }
    }]
}

const critical_stun: Lumina = {
    name: "Critical Stun",
    category: "LUMINA",
    description: "100% on Critical Chance on hitting a Stunned target.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "critical_rate", add: 100 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "stun" },
        event: { kind: "ON_TURN_END" }
    }]
}

const critical_vulnerability: Lumina = {
    name: "Critical Vulnerability",
    category: "LUMINA",
    description: "25% increased Critical Chance on Defenceless enemies.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "critical_rate", add: 25 }],
        condition: { kind: "HAS_DEBUFF", debuff: "defenceless" },
        event: { kind: "ON_TURN_END" }
    }]
}

const critical_weakness: Lumina = {
    name: "Critical Weakness",
    category: "LUMINA",
    description: "25% increased Critical Chance on Weakness.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const dead_energy_i: Lumina = {
    name: "Dead Energy I",
    category: "LUMINA",
    description: "+3 AP on killing an enemy.",
    cost: 2,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const dead_energy_ii: Lumina = {
    name: "Dead Energy II",
    category: "LUMINA",
    description: "+3 AP on killing an enemy.",
    cost: 2,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const death_bomb: Lumina = {
    name: "Death Bomb",
    category: "LUMINA",
    description: "On Death, deal damage to all enemies.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "bonus_dmg", add: 999 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_DEATH" }
    }]
}//KEINE AHNUNG WIE DAS BERECHNET WIRD EINFACH EXTRA DAMAGE STAT HIER

const defensive_mode: Lumina = {
    name: "Defensive Mode",
    category: "LUMINA",
    description: "On receiving damage, consume 1 AP to take 30% less damage, if possible.",
    cost: 1,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const dodger: Lumina = {
    name: "Dodger",
    category: "LUMINA",
    description: "Gain 1 AP on Perfect Dodge. Once per turn.",
    cost: 1,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const double_burn: Lumina = {
    name: "Double Burn",
    category: "LUMINA",
    description: "On applying a Burn stack, apply a second one.",
    cost: 30,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "double_burn" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const double_mark: Lumina = {
    name: "Double Mark",
    category: "LUMINA",
    description: "Mark requires 1 more hit to be removed.",
    cost: 20,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "double_mark" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const draining_cleanse: Lumina = {
    name: "Draining Cleanse",
    category: "LUMINA",
    description: "Consume 1 AP to prevent Status Effects application, if possible.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const effective_heal: Lumina = {
    name: "Effective Heal",
    category: "LUMINA",
    description: "Double all Heals received.",
    cost: 30,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "double_heal" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const effective_support: Lumina = {
    name: "Effective Support",
    category: "LUMINA",
    description: "+2 AP on using an item.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const empowering_attack: Lumina = {
    name: "Empowering Attack",
    category: "LUMINA",
    description: "Gain Powerful for 1 turn on Base Attack.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "powerful", turns: 1 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_END" }
    }]
}

const empowering_break: Lumina = {
    name: "Empowering Break",
    category: "LUMINA",
    description: "Gain Powerful on Breaking a target.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "powerful", turns: 1 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "stun" },
        event: { kind: "ON_END" }
    }]
}

const empowering_dodge: Lumina = {
    name: "Empowering Dodge",
    category: "LUMINA",
    description: "5% increased damage for each consecutive successful Dodge. Can stack up to 10 times.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const empowering_last_stand: Lumina = {
    name: "Empowering Last Stand",
    category: "LUMINA",
    description: "Gain Powerful if fighting alone.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "powerful", turns: 9999 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const empowering_parry: Lumina = {
    name: "Empowering Parry",
    category: "LUMINA",
    description: "Each successful Parry increases damage by 5% until end of the following turn. Taking any damage removes this buff.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const empowering_tint: Lumina = {
    name: "Empowering Tint",
    category: "LUMINA",
    description: "Healing Tints also apply Powerful.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energetic_healer: Lumina = {
    name: "Energetic Healer",
    category: "LUMINA",
    description: "+2AP on Healing an ally. Once per turn.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_attack_i: Lumina = {
    name: "Energising Attack I",
    category: "LUMINA",
    description: "+1 AP on Base Attack.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 1 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_END" }
    }]
}

const energising_attack_ii: Lumina = {
    name: "Energising Attack II",
    category: "LUMINA",
    description: "+1 AP on Base Attack.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 1 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_END" }
    }]
}

const energising_break: Lumina = {
    name: "Energising Break",
    category: "LUMINA",
    description: "+3 AP on Breaking a target.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 3 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "stun" },
        event: { kind: "ON_END" }
    }]
}

const energising_burn: Lumina = {
    name: "Energising Burn",
    category: "LUMINA",
    description: "+1 AP on applying Burn. Once per turn.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_STATUS_EFFECT_APPLIED", target: "ENEMY", status: "burn" },
        once: true
    }]
}

const energising_cleanse: Lumina = {
    name: "Energising Cleanse",
    category: "LUMINA",
    description: "Dispel the first negative Status Effect received an gain 2 AP.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_death: Lumina = {
    name: "Energising Death",
    category: "LUMINA",
    description: "On death, +4 AP to allies.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_gradient: Lumina = {
    name: "Energising Gradient",
    category: "LUMINA",
    description: "+1 AP per Gradient Charge consumed.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_heal: Lumina = {
    name: "Energising Heal",
    category: "LUMINA",
    description: "On Healing an ally, also give 2 AP.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_jump: Lumina = {
    name: "Energising Jump",
    category: "LUMINA",
    description: "+1 AP on Jump Counterattack.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_pain: Lumina = {
    name: "Energising Pain",
    category: "LUMINA",
    description: "No longer gain AP on Parry. +1AP on getting hit.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_parry: Lumina = {
    name: "Energising Parry",
    category: "LUMINA",
    description: "+1 AP on successful Parry.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_powerful: Lumina = {
    name: "Energising Powerful",
    category: "LUMINA",
    description: "Give 2 AP on applying Powerful.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 2 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_BUFF_APPLIED", buff: "powerful" }
    }]
}

const energising_revive: Lumina = {
    name: "Energising Revive",
    category: "LUMINA",
    description: "+3 AP to all allies when revived.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_rush: Lumina = {
    name: "Energising Rush",
    category: "LUMINA",
    description: "Give 2 AP on applying Rush.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 2 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_BUFF_APPLIED", buff: "rush" }
    }]
}

const energising_shell: Lumina = {
    name: "Energising Shell",
    category: "LUMINA",
    description: "Give 2 AP on applying Shell.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 2 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_BUFF_APPLIED", buff: "shell" }
    }]
}

const energising_shots: Lumina = {
    name: "Energising Shots",
    category: "LUMINA",
    description: "20% chance to gain 1 AP on Free Aim shot.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_start_i: Lumina = {
    name: "Energising Start I",
    category: "LUMINA",
    description: "+1 AP on battle start.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const energising_start_ii: Lumina = {
    name: "Energising Start II",
    category: "LUMINA",
    description: "+1 AP on battle start.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const energising_start_iii: Lumina = {
    name: "Energising Start III",
    category: "LUMINA",
    description: "+1 AP on battle start.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const energising_start_iv: Lumina = {
    name: "Energising Start IV",
    category: "LUMINA",
    description: "+1 AP on battle start.",
    cost: 20,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const energising_stun: Lumina = {
    name: "Energising Stun",
    category: "LUMINA",
    description: "+1 AP on hitting a Stunned target with a Skill.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const energising_turn: Lumina = {
    name: "Energising Turn",
    category: "LUMINA",
    description: "+1 AP on turn start.",
    cost: 20,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_TURN_START" }
    }]
}

const energy_master: Lumina = {
    name: "Energy Master",
    category: "LUMINA",
    description: "Every AP gain is increased by 1.",
    cost: 40,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "bonus_ap" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const enfeebling_attack: Lumina = {
    name: "Enfeebling Attack",
    category: "LUMINA",
    description: "Base Attack applies Powerless for 1 turn.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_DEBUFF", debuff: "powerless", turns: 1 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_END" }
    }]
}

const enfeebling_mark: Lumina = {
    name: "Enfeebling Mark",
    category: "LUMINA",
    description: "Marked targets deal 30% less damage.",
    cost: 10,
        triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const exhausting_power: Lumina = {
    name: "Exhausting Power",
    category: "LUMINA",
    description: "50% increased damage if Exhausted.",
    cost: 2,
        triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}//CANT GET EXHAUSTED BY ONESELF

const exposing_attack: Lumina = {
    name: "Exposing Attack",
    category: "LUMINA",
    description: "Base Attack applies Defenceless for 1 turn.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_DEBUFF", debuff: "defenceless", turns: 1 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_END" }
    }]
}

const exposing_break: Lumina = {
    name: "Exposing Break",
    category: "LUMINA",
    description: "Apply Defenceless on Break.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_DEBUFF", debuff: "defenceless", turns: 1 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "stun" },
        event: { kind: "ON_END" }
    }]
}

const faster_than_strong: Lumina = {
    name: "Faster Than Strong",
    category: "LUMINA",
    description: "Always play twice in a row, but deal 50% less damage.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "faster_than_stronger" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const first_offensive: Lumina = {
    name: "First Offensive",
    category: "LUMINA",
    description: "First hit dealt and taken deals 50% more damage.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_MUL", dmg: 50 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const first_strike: Lumina = {
    name: "First Strike",
    category: "LUMINA",
    description: "Play first.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const fueling_break: Lumina = {
    name: "Fueling Break",
    category: "LUMINA",
    description: "Breaking a target doubles its Burn amount.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "MUL_STATUS_EFFECT", target: "ENEMY", status: "burn", mul: 2 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_STATUS_EFFECT_APPLIED", target: "ENEMY", status: "stun" }
    }]
}

const full_strength: Lumina = {
    name: "Full Strength",
    category: "LUMINA",
    description: "25% increased damage on full Health.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_MUL", dmg: 25 }],
        condition: { kind: "PERC_EQ", stat1: "current_health", stat2: "health", perc: 100 },
        event: { kind: "ON_TURN_END" }
    }]
}

const glass_canon: Lumina = {
    name: "Glass Canon",
    category: "LUMINA",
    description: "Deal 25% more damage, but take 25% more damage.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_MUL", dmg: 25 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const gradient_break: Lumina = {
    name: "Gradient Break",
    category: "LUMINA",
    description: "+50% of a Gradient Charge on Breaking a target.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const gradient_breaker: Lumina = {
    name: "Gradient Breaker",
    category: "LUMINA",
    description: "50% increased Breaking damage with Gradient Attacks.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const gradient_fighter: Lumina = {
    name: "Gradient Fighter",
    category: "LUMINA",
    description: "+25% increased damage with Gradient Attacks.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const greater_defenceless: Lumina = {
    name: "Greater Defenceless",
    category: "LUMINA",
    description: "+15% to Defenceless damage amplification.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "greater_defenceless" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const greater_powerful: Lumina = {
    name: "Greater Powerful",
    category: "LUMINA",
    description: "+15% to Powerful damage increase.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "greater_powerful" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const greater_powerless: Lumina = {
    name: "Greater Powerless",
    category: "LUMINA",
    description: "+15% to Powerless damage reduction.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const greater_rush: Lumina = {
    name: "Greater Rush",
    category: "LUMINA",
    description: "+25% Rush Speed increase.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const greater_shell: Lumina = {
    name: "Greater Shell",
    category: "LUMINA",
    description: "+10% to Shell damage reduction.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const greater_slow: Lumina = {
    name: "Greater Slow",
    category: "LUMINA",
    description: "+15% to Slow Speed reduction.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const healing_boon: Lumina = {
    name: "Healing Boon",
    category: "LUMINA",
    description: "Heal 15% HP on applying a buff.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_PERC_STAT", stat1: "current_health", stat2: "health", perc: 15 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_BUFF_APPLIED", buff: "ANY" }
    }]
}

const healing_counter: Lumina = {
    name: "Healing Counter",
    category: "LUMINA",
    description: "Recover 25% Health on Counterattack.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const healing_death: Lumina = {
    name: "Healing Death",
    category: "LUMINA",
    description: "On death, the rest of the Expedition recover all Health.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const healing_fire: Lumina = {
    name: "Healing Fire",
    category: "LUMINA",
    description: "Recover 25% Health when attacking a Burning target. Once per turn.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_PERC_STAT", stat1: "current_health", stat2: "health", perc: 25 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "burn" },
        event: { kind: "ON_END" }
    }]
}

const healing_mark: Lumina = {
    name: "Healing Mark",
    category: "LUMINA",
    description: "Recover 25% Health on hitting a Marked enemy. Once per turn.",
    cost: 20,
    triggers: [{
        effects: [{ kind: "ADD_PERC_STAT", stat1: "current_health", stat2: "health", perc: 25 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "mark" },
        event: { kind: "ON_END" }
    }]
}

const healing_parry: Lumina = {
    name: "Healing Parry",
    category: "LUMINA",
    description: "Recover 3% Health on Parry.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const healing_share: Lumina = {
    name: "Healing Share",
    category: "LUMINA",
    description: "Receive 15% of all Heals affecting other characters.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const healing_stun: Lumina = {
    name: "Healing Stun",
    category: "LUMINA",
    description: "Recover 5% Health on hitting a Stunned target.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_PERC_STAT", stat1: "current_health", stat2: "health", perc: 5 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "stun" },
        event: { kind: "ON_END" }
    }]
}

const healing_tint_energy: Lumina = {
    name: "Healing Tint Energy",
    category: "LUMINA",
    description: "Healing Tints also give 1 AP.",
    cost: 1,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const immaculate: Lumina = {
    name: "Immaculate",
    category: "LUMINA",
    description: "30% increased damage until a hit is received.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: 30 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const in_medias_res: Lumina = {
    name: "In Medias Res",
    category: "LUMINA",
    description: "+3 Shields on Battle Start, but max Health is halved.",
    cost: 10,
    triggers: [{
        effects: [
            { kind: "ADD_STATUS_EFFECT", target: "PLAYER", status: "shield", turns: 3 },
            { kind: "DIV_STAT", stat: "health", div: 2 }
        ],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const inverted_affinity: Lumina = {
    name: "Inverted Affinity",
    category: "LUMINA",
    description: "Apply Inverted on self for 3 turns on battle start. 50% increased damage while Inverted.",
    cost: 5,
    triggers: [{
        effects: [
            { kind: "ADD_STATUS_EFFECT", target: "PLAYER", status: "inverted", turns: 3 },
            { kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: 50 }
        ],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const last_stand_critical: Lumina = {
    name: "Last Stand Critical",
    category: "LUMINA",
    description: "100% Critical Chance while fighting alone.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "critical_rate", add: 100 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const longer_burn: Lumina = {
    name: "Longer Burn",
    category: "LUMINA",
    description: "Burn duration is increased by 2.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const longer_powerful: Lumina = {
    name: "Longer Powerful",
    category: "LUMINA",
    description: "On applying Powerful, its duration is increased by 2.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const longer_rush: Lumina = {
    name: "Longer Rush",
    category: "LUMINA",
    description: "On applying Rush, its duration is increased by 2.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const longer_shell: Lumina = {
    name: "Longer Shell",
    category: "LUMINA",
    description: "On applying Shell, its duration is increased by 2.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const marking_break: Lumina = {
    name: "Marking Break",
    category: "LUMINA",
    description: "Apply Mark on Break.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STATUS_EFFECT", target: "ENEMY", status: "mark", turns: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_STATUS_EFFECT_APPLIED", target: "ENEMY", status: "stun" }
    }]
}

const marking_shots: Lumina = {
    name: "Marking Shots",
    category: "LUMINA",
    description: "20% chance to apply Mark on Free Aim shot.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const painted_power: Lumina = {
    name: "Painted Power",
    category: "LUMINA",
    description: "Damage can exceed 9,999.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "exceed_dmg_cap" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const painter: Lumina = {
    name: "Painter",
    category: "LUMINA",
    description: "Convert all Physical damage to Void damage.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const perilous_parry: Lumina = {
    name: "Perilous Parry",
    category: "LUMINA",
    description: "+1 AP on Parry, but damage received is doubled.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const piercing_shot: Lumina = {
    name: "Piercing Shot",
    category: "LUMINA",
    description: "25% increased Free Aim damage. Free Aim shots ignore Shields.",
    cost: 2,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const powered_attack: Lumina = {
    name: "Powered Attack",
    category: "LUMINA",
    description: "On every damage dealt, try to consume 1 AP. If successful, increase damage by 20%.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: 20 }],
        condition: { kind: "STAT_GTE", stat: "ap", value: 1 },
        event: { kind: "ON_START" }
    }]
}

const powerful_heal: Lumina = {
    name: "Powerful Heal",
    category: "LUMINA",
    description: "Healing an ally also applies Powerful for 1 turn.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const powerful_mark: Lumina = {
    name: "Powerful Mark",
    category: "LUMINA",
    description: "Gain Powerful on hitting a Marked enemy.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "powerful", turns: 1 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "mark" },
        event: { kind: "ON_END" }
    }]
}

const powerful_on_shell: Lumina = {
    name: "Powerful on Shell",
    category: "LUMINA",
    description: "Apply Powerful on applying Shell.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "powerful", turns: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_BUFF_APPLIED", buff: "shell" }
    }]
}

const powerful_revive: Lumina = {
    name: "Powerful Revive",
    category: "LUMINA",
    description: "Apply Powerful for 3 turns when revived.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "powerful", turns: 3 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_REVIVE" }
    }]
}

const powerful_shield: Lumina = {
    name: "Powerful Shield",
    category: "LUMINA",
    description: "10% increased damage per Shield Point on self.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "powerful_shield" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_TURN_END" }
    }]
}

const powerful_shots: Lumina = {
    name: "Powerful Shots",
    category: "LUMINA",
    description: "20% chance to gain Powerful on Free Aim shot.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const pro_retreat: Lumina = {
    name: "Pro Retreat",
    category: "LUMINA",
    description: "Allows Flee to be instantaneous.",
    cost: 40,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const protecting_attack: Lumina = {
    name: "Protecting Attack",
    category: "LUMINA",
    description: "Gain Shell for 1 turn on Base Attack.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "shell", turns: 1 }],
        condition: { kind: "HAS_ATTACK", name: "Base Attack" },
        event: { kind: "ON_END" }
    }]
}

const protecting_death: Lumina = {
    name: "Protecting Death",
    category: "LUMINA",
    description: "On death, allies gain Shell.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const protecting_heal: Lumina = {
    name: "Protecting Heal",
    category: "LUMINA",
    description: "Healing an ally also applies Shell for 1 turn.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const protecting_last_stand: Lumina = {
    name: "Protecting Last Stand",
    category: "LUMINA",
    description: "Gain Shell if fighting alone.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "shell", turns: 9999 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const protecting_shots: Lumina = {
    name: "Protecting Shots",
    category: "LUMINA",
    description: "20% chance to gain Shell on Free Aim shot.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const protecting_tint: Lumina = {
    name: "Protecting Tint",
    category: "LUMINA",
    description: "Healing Tints also apply Shell.",
    cost: 5,
        triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const quick_break: Lumina = {
    name: "Quick Break",
    category: "LUMINA",
    description: "Play again on Breaking a target.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const random_defense: Lumina = {
    name: "Random Defense",
    category: "LUMINA",
    description: "Damage taken is randomly multiplied by a value between 50% and 200%.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const recovery: Lumina = {
    name: "Recovery",
    category: "LUMINA",
    description: "Recovers 10% Health on turn start.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const rejuvenating_revive: Lumina = {
    name: "Rejuvenating Revive",
    category: "LUMINA",
    description: "Apply Regen for 3 turns when revived.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "regen", turns: 3 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_REVIVE" }
    }]
}

const revive_paradox: Lumina = {
    name: "Revive Paradox",
    category: "LUMINA",
    description: "Play immediately when revived.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const revive_tint_energy: Lumina = {
    name: "Revive Tint Energy",
    category: "LUMINA",
    description: "Revive Tints also give 3 AP.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const rewarding_mark: Lumina = {
    name: "Rewarding Mark",
    category: "LUMINA",
    description: "+2 AP on dealing damage to a Marked target. Once per turn.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_STAT", stat: "ap", add: 2 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "mark" },
        event: { kind: "ON_END" }
    }]
}

const roulette: Lumina = {
    name: "Roulette",
    category: "LUMINA",
    description: "Every hit has a 50% chance to deal either 50% or 200% of its damage.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_MUL", dmg: 200 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const rush_on_powerful: Lumina = {
    name: "Rush on Powerful",
    category: "LUMINA",
    description: "Apply Rush on applying Powerful.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "rush", turns: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_BUFF_APPLIED", buff: "powerful" }
    }]
}

const second_chance: Lumina = {
    name: "Second Chance",
    category: "LUMINA",
    description: "Revive with 100% Health. Once per battle.",
    cost: 40,
    triggers: [{
        effects: [{ kind: "REVIVE_FULL" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_DEATH" },
        priority: 1
    }]
}

const shared_care: Lumina = {
    name: "Shared Care",
    category: "LUMINA",
    description: "When healing an ally, also Heal self for 50% of that value.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const shell_on_rush: Lumina = {
    name: "Shell On Rush",
    category: "LUMINA",
    description: "Apply Shell on applying Rush.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_BUFF", buff: "shell", turns: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_BUFF_APPLIED", buff: "rush" }
    }]
}

const shield_affinity: Lumina = {
    name: "Shield Affinity",
    category: "LUMINA",
    description: "30% increased damage while having Shields, but receiving any damage always removes all Shields.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: 30 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "shield" },
        event: { kind: "ON_TURN_END" }
    }]
}

const shielding_death: Lumina = {
    name: "Shielding Death",
    category: "LUMINA",
    description: "On death, allies gain 3 Shield points.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const shielding_tint: Lumina = {
    name: "Shielding Tint",
    category: "LUMINA",
    description: "Healing Tints also add 2 Shields.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const shortcut: Lumina = {
    name: "Shortcut",
    category: "LUMINA",
    description: "Immediately play when falling below 30% Health. Once per battle.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const slowing_break: Lumina = {
    name: "Slowing Break",
    category: "LUMINA",
    description: "Apply Slow on Break.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const sniper: Lumina = {
    name: "Sniper",
    category: "LUMINA",
    description: "First Free Aim shot each turn deals 200% increased damage and can Break.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const solidifying: Lumina = {
    name: "Solidifying",
    category: "LUMINA",
    description: "+2 Shields when the character's Health falls below 50%. Once per battle.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}//CANT DAMGE ONESELF ONLY KILL

const solo_fighter: Lumina = {
    name: "Solo Fighter",
    category: "LUMINA",
    description: "Deal 50% more damage if fighting alone.",
    cost: 1,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_MUL", dmg: 50 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const sos_power: Lumina = {
    name: "SOS Power",
    category: "LUMINA",
    description: "Apply Powerful when falling below 50% Health.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}//CANT DAMGE ONESELF ONLY KILL

const sos_rush: Lumina = {
    name: "SOS Rush",
    category: "LUMINA",
    description: "Apply Rush when falling below 50% Health.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}//CANT DAMGE ONESELF ONLY KILL

const sos_shell: Lumina = {
    name: "SOS Shell",
    category: "LUMINA",
    description: "Apply Shell when falling below 50% Health",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}//CANT DAMGE ONESELF ONLY KILL

const staggering_attack: Lumina = {
    name: "Staggering Attack",
    category: "LUMINA",
    description: "50% increased Break damage on Base Attack.",
    cost: 1,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const stay_marked: Lumina = {
    name: "Stay Marked",
    category: "LUMINA",
    description: "50% chance to apply Mark when attacking a Marked target.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_STATUS_EFFECT", target: "ENEMY", status: "mark", turns: 1 }],
        condition: { kind: "HAS_STATUS_EFFECT", status: "mark" },
        event: { kind: "ON_ATTACK" }
    }]
}

const stun_boost: Lumina = {
    name: "Stun Boost",
    category: "LUMINA",
    description: "30% increased damage on Stunned targets.",
    cost: 10,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: 30 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_STATUS_EFFECT_APPLIED", target: "ENEMY", status: "stun" }
    }]
}

const survivor: Lumina = {
    name: "Survivor",
    category: "LUMINA",
    description: "Survive fatal damage with 1 Health. Once per battle.",
    cost: 20,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const sweet_kill: Lumina = {
    name: "Sweet Kill",
    category: "LUMINA",
    description: "Recover 50% Health on killing an enemy.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const tainted: Lumina = {
    name: "Tainted",
    category: "LUMINA",
    description: "15% increased damage for each Status Effect on self.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "TOGGLE_RULE", rule: "tainted" }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const teamwork: Lumina = {
    name: "Teamwork",
    category: "LUMINA",
    description: "10% increased damage while all allies are alive.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_MUL", dmg: 10 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_TURN_END" }
    }]
}

const the_one: Lumina = {
    name: "The One",
    category: "LUMINA",
    description: "Max Health is reduced to 1.",
    cost: 1,
    triggers: [{
        effects: [{ kind: "OVR_STAT", stat: "health", ovr: 1 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_START" }
    }]
}

const time_tint: Lumina = {
    name: "Time Tint",
    category: "LUMINA",
    description: "Energy Tints also apply Rush.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const versatile: Lumina = {
    name: "Versatile",
    category: "LUMINA",
    description: "After a Free Aim hit, Base Attack damage is increased by 50% for 1 turn.",
    cost: 5,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

const warming_up: Lumina = {
    name: "Warming Up",
    category: "LUMINA",
    description: "5% increased damage per turn. Can stack up to 5 times.",
    cost: 15,
    triggers: [{
        effects: [{ kind: "ADD_DMG", target: "DAMAGE_ADD", dmg: 5 }],
        condition: { kind: "ALWAYS" },
        event: { kind: "ON_TURN_START" }
    }]
}//WENN MEHRERE TURNS BETRACHTEN ANDERS

const weakness_gain: Lumina = {
    name: "Weakness Gain",
    category: "LUMINA",
    description: "+1AP on hitting an enemy's Weakness. Once per turn.",
    cost: 3,
    triggers: [{
        effects: [{ kind: "NONE" }],
        condition: { kind: "NEVER" },
        event: { kind: "NEVER" }
    }]
}

export const luminas: Array<Lumina> = [
    accelerating_heal,
    accelerating_last_stand,
    accelerating_shots,
    accelerating_tint,
    aegis_revival,
    anti_blight,
    anti_burn,
    anti_charm,
    anti_freeze,
    anti_stun,
    at_deaths_door,
    attack_lifesteal,
    augmented_aim,
    augmented_attack,
    augmented_counter_i,
    augmented_counter_ii,
    augmented_counter_iii,
    augmented_first_strike,
    auto_death,
    auto_powerful,
    auto_regen,
    auto_rush,
    auto_shell,
    base_shield,
    beneficial_contamination,
    break_specialist,
    breaker,
    breaking_attack,
    breaking_burn,
    breaking_counter,
    breaking_death,
    breaking_shots,
    breaking_slow,
    burn_affinity,
    burning_break,
    burning_death,
    burning_mark,
    burning_shots,
    charging_alteration,
    charging_attack,
    charging_burn,
    charging_counter,
    charging_critical,
    charging_mark,
    charging_stun,
    charging_tint,
    charging_weakness,
    cheater,
    cleas_life,
    cleansing_tint,
    combo_attack_i,
    combo_attack_ii,
    combo_attack_iii,
    confident,
    confident_fighter,
    critical_break,
    critical_burn,
    critical_moment,
    critical_stun,
    critical_vulnerability,
    critical_weakness,
    dead_energy_i,
    dead_energy_ii,
    death_bomb,
    defensive_mode,
    dodger,
    double_burn,
    double_mark,
    draining_cleanse,
    effective_heal,
    effective_support,
    empowering_attack,
    empowering_break,
    empowering_dodge,
    empowering_last_stand,
    empowering_parry,
    empowering_tint,
    energetic_healer,
    energising_attack_i,
    energising_attack_ii,
    energising_break,
    energising_burn,
    energising_cleanse,
    energising_death,
    energising_gradient,
    energising_heal,
    energising_jump,
    energising_pain,
    energising_parry,
    energising_powerful,
    energising_revive,
    energising_rush,
    energising_shell,
    energising_shots,
    energising_start_i,
    energising_start_ii,
    energising_start_iii,
    energising_start_iv,
    energising_stun,
    energising_turn,
    energy_master,
    enfeebling_attack,
    enfeebling_mark,
    exhausting_power,
    exposing_attack,
    exposing_break,
    faster_than_strong,
    first_offensive,
    first_strike,
    fueling_break,
    full_strength,
    glass_canon,
    gradient_break,
    gradient_breaker,
    gradient_fighter,
    greater_defenceless,
    greater_powerful,
    greater_powerless,
    greater_rush,
    greater_shell,
    greater_slow,
    healing_boon,
    healing_counter,
    healing_death,
    healing_fire,
    healing_mark,
    healing_parry,
    healing_share,
    healing_stun,
    healing_tint_energy,
    immaculate,
    in_medias_res,
    inverted_affinity,
    last_stand_critical,
    longer_burn,
    longer_powerful,
    longer_rush,
    longer_shell,
    marking_break,
    marking_shots,
    painted_power,
    painter,
    perilous_parry,
    piercing_shot,
    powered_attack,
    powerful_heal,
    powerful_mark,
    powerful_on_shell,
    powerful_revive,
    powerful_shield,
    powerful_shots,
    pro_retreat,
    protecting_attack,
    protecting_death,
    protecting_heal,
    protecting_last_stand,
    protecting_shots,
    protecting_tint,
    quick_break,
    random_defense,
    recovery,
    rejuvenating_revive,
    revive_paradox,
    revive_tint_energy,
    rewarding_mark,
    roulette,
    rush_on_powerful,
    second_chance,
    shared_care,
    shell_on_rush,
    shield_affinity,
    shielding_death,
    shielding_tint,
    shortcut,
    slowing_break,
    sniper,
    solidifying,
    solo_fighter,
    sos_power,
    sos_rush,
    sos_shell,
    staggering_attack,
    stay_marked,
    stun_boost,
    survivor,
    sweet_kill,
    tainted,
    teamwork,
    the_one,
    time_tint,
    versatile,
    warming_up,
    weakness_gain
]
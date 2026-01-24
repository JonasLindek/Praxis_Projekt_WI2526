use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};

//ENUMS
#[derive(Deserialize, Serialize, Clone, Copy, PartialEq, Eq)]
pub enum StatKey {
    #[serde(rename="health")] Health,
    #[serde(rename="attack_power")] AttackPower,
    #[serde(rename="speed")] Speed,
    #[serde(rename="defense")] Defense,
    #[serde(rename="critical_rate")] CriticalRate,
    #[serde(rename="ap")] Ap,
    #[serde(rename="shield")] Shield,
    #[serde(rename="defenceless")] Defenceless,
    #[serde(rename="powerful")] Powerful
}

#[derive(Deserialize, Serialize, Clone, Copy, PartialEq, Eq)]
pub enum DamageTarget {
    #[serde(rename="DAMAGE_ADD")] DamageAdd,
    #[serde(rename="DAMAGE_MUL")] DamageMul
}

#[derive(Deserialize, Serialize, Clone, Copy, PartialEq, Eq)]
pub enum Stacking {
    #[serde(rename="ADD")] Add,
    #[serde(rename="MUL")] Mul
}

#[derive(Deserialize, Serialize, Clone, Copy, PartialEq, Eq)]
pub enum Element {
    #[serde(rename="WEAPON")] Weapon,
    #[serde(rename="PHYSICAL")] Physical,
    #[serde(rename="LIGHT")] Light,
    #[serde(rename="DARK")] Dark,
    #[serde(rename="VOID")] Void,
    #[serde(rename="FIRE")] Fire,
    #[serde(rename="ICE")] Ice,
    #[serde(rename="EARTH")] Earth,
    #[serde(rename="LIGHTNING")] Lightning
}

#[derive(Deserialize, Serialize, Clone, Copy, PartialEq, Eq)]
pub enum Scaling {
    #[serde(rename="NONE")] None,
    #[serde(rename="D")] D,
    #[serde(rename="C")] C,
    #[serde(rename="B")] B,
    #[serde(rename="A")] A,
    #[serde(rename="S")] S
}

//EFFECTS & CONDITIONS
#[derive(Deserialize, Clone)]
#[serde(tag="kind")]
pub enum Effect {
    #[serde(rename="ADD_STAT")]
    AddStat { stat: StatKey, add: f32 },

    #[serde(rename="MUL_STAT")]
    MulStat { stat: StatKey, mul: f32 },

    #[serde(rename="OVR_STAT")]
    OvrStat { stat: StatKey, ovr: f32 },

    #[serde(rename="ADD_BUFF")]
    AddBuff { target: DamageTarget, stacking: Stacking, buff: f32 }
}

#[derive(Deserialize, Clone)]
#[serde(tag="kind")]
pub enum Condition {
    #[serde(rename="ALWAYS")]
    Always,

    #[serde(rename="STAT_GTE")]
    StatGte { stat: StatKey, value: f32 },

    #[serde(rename="STAT_LTE")]
    StatLte { stat: StatKey, value: f32 },

    #[serde(rename="STAT_EQ")]
    StatEq { stat: StatKey, value: f32 },

    #[serde(rename="HAS_ATTACK")]
    HasAttack { name: String },

    #[serde(rename="AND")]
    And { all: Vec<Condition> },

    #[serde(rename="OR")]
    Or { any: Vec<Condition> },

    #[serde(rename="NOT")]
    Not { cond: Box<Condition> },
}

//INPUT TYPES
#[derive(Deserialize)]
pub struct Character {
    pub name: String,
    pub level: f32,
    pub attributes: CharacterAttributes,
    pub stats: CharacterStats,
    pub lumina_points: f32,
    pub ap: f32
}

#[derive(Deserialize, Serialize, Clone)]
pub struct CharacterAttributes {
    pub vitality: f32,
    pub might: f32,
    pub agility: f32,
    pub defense: f32,
    pub luck: f32
}

#[derive(Deserialize, Serialize, Clone)]
pub struct CharacterStats {
    pub health: f32,
    pub attack_power: f32,
    pub speed: f32,
    pub defense: f32,
    pub critical_rate: f32
}

#[derive(Deserialize)]
pub struct Weapon {
    pub name: String,
    pub element: Element,
    pub level: f32,
    pub power: f32,
    pub scaling: WeaponScaling
}

#[derive(Deserialize, Clone)]
pub struct WeaponScaling {
    pub vitality: Scaling,
    pub agility: Scaling,
    pub defense: Scaling,
    pub luck: Scaling
}

#[derive(Deserialize)]
pub struct Attack {
    pub name: String,
    pub element: String,
    pub power: f32,
    pub ap_cost: f32
}

#[derive(Deserialize)]
pub struct Picto {
    pub name: String,
    pub attribute_buff: AttributeBuff,
    pub lumina: Lumina
}

#[derive(Deserialize)]
pub struct AttributeBuff {
    pub health: f32,
    pub speed: f32,
    pub defense: f32,
    pub critical_rate: f32
}

#[derive(Deserialize)]
pub struct Lumina {
    pub name: String,
    pub cost: f32,
    pub effect: Effect,
    pub condition: Condition
}

//INPUT & OUTPUT
#[derive(Deserialize)]
pub struct BuildInput {
    pub character: Character,
    pub weapon: Weapon,
    pub attack: Attack,
    pub pictos: Vec<Picto>,
    pub luminas: Vec<Lumina>
}

#[derive(Serialize)]
pub struct BuildOutput {
    pub damage: f32,
    pub skill_multiplier: f32,
    pub crit_factor: f32,
    pub dmg_add_sum: f32,
    pub dmg_mul_factor: f32,
    pub final_stats: FinalStats
}

#[derive(Serialize)]
pub struct FinalStats {
    pub health: f32,
    pub attack_power: f32,
    pub speed: f32,
    pub defense: f32,
    pub critical_rate: f32,
    pub ap: f32,
    pub shield: f32,
    pub defenceless: f32,
    pub powerful: f32
}

//CALCULATION
//NOCH KEINE STAT BERECHNUNG FÜR ATTRIBUTE VERTEILUNG
//NOCH KEIN WEAPON SCALING
//KEINE BERÜCKSICHTIGUNG DER REIHENFOLGE MULTIPLIKATIVER LUMINAS 
#[wasm_bindgen]
pub fn compute_build_damage(input: JsValue) -> Result<JsValue, JsValue> {
    let input: BuildInput = serde_wasm_bindgen::from_value(input)
        .map_err(|e| JsValue::from_str(&format!("Invalid input: {e}")))?;
    let mut all_luminas: Vec<&Lumina> = Vec::new();

    //Starting Values
    let mut st = FinalStats {
        health: input.character.stats.health,
        attack_power: input.character.stats.attack_power,
        speed: input.character.stats.speed,
        defense: input.character.stats.defense,
        critical_rate: input.character.stats.critical_rate,
        ap: input.character.ap,
        shield: 0.0,
        defenceless: 1.0,
        powerful: 1.0
    };

    for l in &input.luminas {
        all_luminas.push(l);
    }

    for p in &input.pictos {
        st.health += p.attribute_buff.health;
        st.speed += p.attribute_buff.speed;
        st.defense += p.attribute_buff.defense;
        st.critical_rate += p.attribute_buff.critical_rate;
        all_luminas.push(&p.lumina);
    }

    let mut dmg_add_sum: f32 = 0.0;
    let mut dmg_mul_factor: f32 = 1.0;

    for l in all_luminas {
        if l.condition.eval(&input, &st) {
            apply_effect(&l.effect, &mut st, &mut dmg_add_sum, &mut dmg_mul_factor);
        }
    }

    let skill_multiplier = input.attack.power / 100.0;
    let crit_factor = 1.0 + (st.critical_rate.min(100.0) / 100.0) * 0.5;
    dmg_add_sum = 1.0 + (dmg_add_sum / 100.0);
    let damage = st.attack_power * skill_multiplier * crit_factor * dmg_add_sum * dmg_mul_factor * st.defenceless * st.powerful;

    let out = BuildOutput {
        damage,
        skill_multiplier,
        crit_factor,
        dmg_add_sum,
        dmg_mul_factor,
        final_stats: st,
    };

    serde_wasm_bindgen::to_value(&out)
        .map_err(|e| JsValue::from_str(&format!("Serialize error: {e}")))
}

//EFFECT APPLICATION
fn apply_effect(effect: &Effect, st: &mut FinalStats, dmg_add_sum: &mut f32, dmg_mul_factor: &mut f32) {
    match effect {
        Effect::AddStat { stat, add } => {
            let v = get_stat_mut(st, *stat);
            *v += *add;
        }
        Effect::MulStat { stat, mul } => {
            let v = get_stat_mut(st, *stat);
            *v *= *mul;
        }
        Effect::OvrStat { stat, ovr } => {
            let v = get_stat_mut(st, *stat);
            *v = *ovr;
        }
        Effect::AddBuff { target, stacking: _, buff } => {
            match target {
                DamageTarget::DamageAdd => {
                    *dmg_add_sum += *buff;
                }
                DamageTarget::DamageMul => {
                    *dmg_mul_factor *= 1.0 + (*buff / 100.0);
                }
            }
        }
    }
}

fn get_stat_mut(st: &mut FinalStats, key: StatKey) -> &mut f32 {
    match key {
        StatKey::Health => &mut st.health,
        StatKey::AttackPower => &mut st.attack_power,
        StatKey::Speed => &mut st.speed,
        StatKey::Defense => &mut st.defense,
        StatKey::CriticalRate => &mut st.critical_rate,
        StatKey::Ap => &mut st.ap,
        StatKey::Shield => &mut st.shield,
        StatKey::Defenceless => &mut st.defenceless,
        StatKey::Powerful => &mut st.powerful,
    }
}

//CONDITION EVALUATION
impl Condition {
    pub fn eval(&self, input: &BuildInput, st: &FinalStats) -> bool {
        match self {
            Condition::Always => true,
            Condition::StatGte { stat, value } => get_stat(st, stat) >= *value,
            Condition::StatLte { stat, value } => get_stat(st, stat) <= *value,
            Condition::StatEq { stat, value } => {
                let v = get_stat(st, stat);
                //Float Toleranzvergleich
                (v - *value).abs() < 1e-6
            }
            Condition::HasAttack { name } => { input.attack.name == *name }
            Condition::And { all } => all.iter().all(|c| c.eval(input, st)),
            Condition::Or { any } => any.iter().any(|c| c.eval(input, st)),
            Condition::Not { cond } => !cond.eval(input, st),
        } 
    }
}

fn get_stat(st: &FinalStats, key: &StatKey) -> f32 {
    match key {
        StatKey::Health => st.health,
        StatKey::AttackPower => st.attack_power,
        StatKey::Speed => st.speed,
        StatKey::Defense => st.defense,
        StatKey::CriticalRate => st.critical_rate,
        StatKey::Ap => st.ap,
        StatKey::Shield => st.shield,
        StatKey::Defenceless => st.defenceless,
        StatKey::Powerful => st.powerful,
    }
}
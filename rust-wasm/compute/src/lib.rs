use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};
use std::collections::{HashMap, HashSet, VecDeque};

//ENUMS
#[derive(Deserialize, Serialize, Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum Element {
    #[serde(rename="WEAPON")] Weapon,
    #[serde(rename="PHYSICAL")] Physical,
    #[serde(rename="LIGHT")] Light,
    #[serde(rename="DARK")] Dark,
    #[serde(rename="VOID")] Void,
    #[serde(rename="FIRE")] Fire,
    #[serde(rename="ICE")] Ice,
    #[serde(rename="EARTH")] Earth,
    #[serde(rename="LIGHTNING")] Lightning,
}

#[derive(Deserialize, Serialize, Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum Scaling {
    #[serde(rename="NONE")] None,
    #[serde(rename="D")] D,
    #[serde(rename="C")] C,
    #[serde(rename="B")] B,
    #[serde(rename="A")] A,
    #[serde(rename="S")] S,
}

#[derive(Deserialize, Serialize, Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum StatKey {
    #[serde(rename="health")] Health,
    #[serde(rename="current_health")] CurrentHealth,
    #[serde(rename="attack_power")] AttackPower,
    #[serde(rename="speed")] Speed,
    #[serde(rename="defense")] Defense,
    #[serde(rename="critical_rate")] CriticalRate,
    #[serde(rename="ap")] Ap,
    #[serde(rename="bonus_dmg")] BonusDmg,
    #[serde(rename="hits")] Hits,
}

#[derive(Deserialize, Serialize, Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum Rule {
    #[serde(rename="exceed_dmg_cap")] ExceedDmgCap,
    #[serde(rename="cant_heal")] CantHeal,
    #[serde(rename="double_heal")] DoubleHeal,
    #[serde(rename="double_burn")] DoubleBurn,
    #[serde(rename="double_mark")] DoubleMark,
    #[serde(rename="bonus_ap")] BonusAp,
    #[serde(rename="greater_defenceless")] GreaterDefenceless,
    #[serde(rename="greater_powerful")] GreaterPowerful,
    #[serde(rename="powerful_shield")] PowerfulShield,
    #[serde(rename="tainted")] Tainted,
    #[serde(rename="faster_than_stronger")] FasterThanStronger,
}

#[derive(Deserialize, Serialize, Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum BuffKey {
    #[serde(rename="regen")] Regen,
    #[serde(rename="powerful")] Powerful,
    #[serde(rename="rush")] Rush,
    #[serde(rename="shell")] Shell,
    #[serde(rename="ANY")] Any,
}

#[derive(Deserialize, Serialize, Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum DebuffKey {
    #[serde(rename="powerless")] Powerless,
    #[serde(rename="slow")] Slow,
    #[serde(rename="defenceless")] Defenceless,
    #[serde(rename="ANY")] Any,
}

#[derive(Deserialize, Serialize, Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum StatusEffectKey {
    #[serde(rename="stun")] Stun,
    #[serde(rename="inverted")] Inverted,
    #[serde(rename="mark")] Mark,
    #[serde(rename="shield")] Shield,
    #[serde(rename="burn")] Burn,
    #[serde(rename="ANY")] Any,
}

#[derive(Deserialize, Serialize, Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum Target {
    #[serde(rename="PLAYER")] Player,
    #[serde(rename="ENEMY")] Enemy,
}

#[derive(Deserialize, Serialize, Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum DamageTarget {
    #[serde(rename="DAMAGE_ADD")] DamageAdd,
    #[serde(rename="DAMAGE_MUL")] DamageMul,
}

//EFFECTS & CONDITIONS & EVENTS
#[derive(Deserialize, Clone, Debug)]
#[serde(tag="kind")]
pub enum Effect {
    #[serde(rename="NONE")] None,
    #[serde(rename="REVIVE_FULL")] ReviveFull,
    #[serde(rename="ADD_STAT")] 
    AddStat { stat: StatKey, add: f32 },
    #[serde(rename="MUL_STAT")] 
    MulStat { stat: StatKey, mul: f32 },
    #[serde(rename="DIV_STAT")] 
    DivStat { stat: StatKey, div: f32 },
    #[serde(rename="OVR_STAT")] 
    OvrStat { stat: StatKey, ovr: f32 },
    #[serde(rename="ADD_PERC_STAT")] 
    AddPercStat { stat1: StatKey, stat2: StatKey, perc: f32 },
    #[serde(rename="TOGGLE_RULE")]
    ToggleRule { rule: Rule},
    #[serde(rename="ADD_BUFF")]
    AddBuff { buff: BuffKey, turns: f32 },
    #[serde(rename="ADD_DEBUFF")]
    AddDebuff { debuff: DebuffKey, turns: f32 },
    #[serde(rename="ADD_STATUS_EFFECT")]
    AddStatusEffect { target: Target, status: StatusEffectKey, turns: f32 },
    #[serde(rename="MUL_STATUS_EFFECT")]
    MulStatusEffect { target: Target, status: StatusEffectKey, mul: f32 },
    #[serde(rename="ADD_DMG")]
    AddDmg { target: DamageTarget, dmg: f32 },
}

#[derive(Deserialize, Clone, Debug)]
#[serde(tag="kind")]
pub enum Condition {
    #[serde(rename="ALWAYS")] Always,
    #[serde(rename="NEVER")] Never,
    #[serde(rename="STAT_GTE")]
    StatGte { stat: StatKey, value: f32 },
    #[serde(rename="STAT_LTE")]
    StatLte { stat: StatKey, value: f32 },
    #[serde(rename="STAT_EQ")]
    StatEq { stat: StatKey, value: f32 },
    #[serde(rename="PERC_LT")]
    PercLt { stat1: StatKey, stat2: StatKey, perc: f32 },
    #[serde(rename="PERC_EQ")]
    PercEq { stat1: StatKey, stat2: StatKey, perc: f32 },
    #[serde(rename="STATUS_EQ")]
    StatusEq { status: StatusEffectKey, value: f32 },
    #[serde(rename="HAS_ATTACK")]
    HasAttack { name: String },
    #[serde(rename="HAS_STATUS_EFFECT")]
    HasStatusEffect { status: StatusEffectKey },
    #[serde(rename="HAS_DEBUFF")]
    HasDebuff { debuff: DebuffKey },
    #[serde(rename="AND")]
    And { all: Vec<Condition> },
    #[serde(rename="OR")]
    Or { any: Vec<Condition> },
    #[serde(rename="NOT")]
    Not { cond: Box<Condition> },
}

#[derive(Deserialize, Clone, Debug, PartialEq, Eq, Hash)]
#[serde(tag="kind")]
pub enum Event {
    #[serde(rename="NEVER")] Never,
    #[serde(rename="ON_START")] OnStart,
    #[serde(rename="ON_TURN_START")] OnTurnStart,
    #[serde(rename="ON_TURN_END")] OnTurnEnd,
    #[serde(rename="ON_ATTACK")] OnAttack,
    #[serde(rename="ON_END")] OnEnd,
    #[serde(rename="ON_DEATH")] OnDeath,
    #[serde(rename="ON_REVIVE")] OnRevive,
    #[serde(rename="ON_BUFF_APPLIED")]
    OnBuffApplied { buff: BuffKey },
    #[serde(rename="ON_STATUS_EFFECT_APPLIED")]
    OnStatusEffectApplied { target: Target, status: StatusEffectKey },
}

//INPUT TYPES
#[derive(Deserialize, Clone, Debug)]
pub struct Character {
    pub name: String,
    pub attributes: CharacterAttributes,
    pub stats: CharacterStats,
    pub lumina_points: f32,
    pub ap: f32
}

#[derive(Deserialize, Serialize, Clone, Debug)]
pub struct CharacterAttributes {
    pub vitality: f32,
    pub might: f32,
    pub agility: f32,
    pub defense: f32,
    pub luck: f32
}

#[derive(Deserialize, Serialize, Clone, Debug)]
pub struct CharacterStats {
    pub health: f32,
    pub attack_power: f32,
    pub speed: f32,
    pub defense: f32,
    pub critical_rate: f32
}

#[derive(Deserialize, Clone, Debug)]
pub struct Weapon {
    pub name: String,
    pub element: Element,
    pub level: f32,
    pub power: f32,
    pub scaling: WeaponScaling
}

#[derive(Deserialize, Clone, Debug)]
pub struct WeaponScaling {
    pub vitality: Scaling,
    pub agility: Scaling,
    pub defense: Scaling,
    pub luck: Scaling
}

#[derive(Deserialize, Clone, Debug)]
pub struct Attack {
    pub name: String,
    pub element: String,
    pub power: f32,
    pub hits: f32,
    pub ap_cost: f32
}

#[derive(Deserialize, Clone, Debug)]
pub struct Picto {
    pub name: String,
    pub attribute_buff: AttributeBuff,
    pub lumina: Lumina
}

#[derive(Deserialize, Clone, Debug)]
pub struct AttributeBuff {
    pub health: f32,
    pub speed: f32,
    pub defense: f32,
    pub critical_rate: f32
}

#[derive(Deserialize, Clone, Debug)]
pub struct Lumina {
    pub name: String,
    pub cost: f32,
    pub triggers: Vec<Trigger>
}

#[derive(Deserialize, Clone, Debug)]
pub struct Trigger {
    pub effects: Vec<Effect>,
    pub condition: Condition,
    pub event: Event,
    pub once: Option<bool>,
    pub priority: Option<f32>
}

//INPUT & OUTPUT
#[derive(Deserialize, Clone, Debug)]
pub struct BuildInput {
    pub character: Character,
    pub weapon: Weapon,
    pub attack: Attack,
    pub pictos: Vec<Picto>,
    pub luminas: Vec<Lumina>
}

#[derive(Serialize, Clone, Debug)]
pub struct BuildOutput {
    pub damage: f32,
    pub skill_multiplier: f32,
    pub crit_factor: f32,
    pub dmg_add_sum: f32,
    pub dmg_mul_factor: f32,
    pub final_stats: FinalStats
}

#[derive(Serialize, Clone, Debug)]
pub struct FinalStats {
    pub health: f32,
    pub current_health: f32,
    pub attack_power: f32,
    pub speed: f32,
    pub defense: f32,
    pub critical_rate: f32,
    pub ap: f32,
    pub bonus_dmg: f32,
    pub hits: f32,
}

//RUNTIME
#[derive(Clone, Debug)]
pub enum FiredEvent {
    OnStart,
    OnTurnStart,
    OnTurnEnd,
    OnAttack,
    OnDeath,
    OnRevive,
    OnBuffApplied { buff: BuffKey },
    OnStatusEffectApplied { target: Target, status: StatusEffectKey },
}

#[derive(Clone, Debug)]
pub struct EntityState {
    pub stats: FinalStats,
    pub rules: HashSet<Rule>,
    pub buffs: HashMap<BuffKey, f32>,
    pub debuffs: HashMap<DebuffKey, f32>,
    pub status: HashMap<StatusEffectKey, f32>,
    pub attack: String,
    pub was_zero_health: bool,
}

impl EntityState {
    fn get_stat(&self, stat: StatKey) -> f32 {
        match stat {
            StatKey::Health => self.stats.health,
            StatKey::CurrentHealth => self.stats.current_health,
            StatKey::AttackPower => self.stats.attack_power,
            StatKey::Speed => self.stats.speed,
            StatKey::Defense => self.stats.defense,
            StatKey::CriticalRate => self.stats.critical_rate,
            StatKey::Ap => self.stats.ap,
            StatKey::BonusDmg => self.stats.bonus_dmg,
            StatKey::Hits => self.stats.hits,
        }
    }

    fn set_stat(&mut self, stat: StatKey, value: f32) {
        match stat {
            StatKey::Health => self.stats.health = value,
            StatKey::CurrentHealth => self.stats.current_health = value,
            StatKey::AttackPower => self.stats.attack_power = value,
            StatKey::Speed => self.stats.speed = value,
            StatKey::Defense => self.stats.defense = value,
            StatKey::CriticalRate => self.stats.critical_rate = value,
            StatKey::Ap => self.stats.ap = value,
            StatKey::BonusDmg => self.stats.bonus_dmg = value,
            StatKey::Hits => self.stats.hits = value,
        }
    }
}

#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub enum EventKey {
    OnStart,
    OnTurnStart,
    OnTurnEnd,
    OnAttack,
    OnDeath,
    OnRevive,
    OnBuffApplied(BuffKey),
    OnStatusEffectApplied { target: Target, status: StatusEffectKey },
}

#[derive(Clone, Copy, Debug)]
pub struct TriggerRef {
    pub lumina_idx: usize,
    pub trigger_idx: usize,
}

#[derive(Clone, Debug)]
pub struct Runtime {
    pub luminas: Vec<Lumina>,
    pub index: HashMap<EventKey, Vec<TriggerRef>>,
    pub fired_once: Vec<bool>,
}

fn event_to_key(e: &Event) -> Option<EventKey> {
    match e {
        Event::Never | Event::OnEnd => None,
        Event::OnStart => Some(EventKey::OnStart),
        Event::OnTurnStart => Some(EventKey::OnTurnStart),
        Event::OnTurnEnd => Some(EventKey::OnTurnEnd),
        Event::OnAttack => Some(EventKey::OnAttack),
        Event::OnDeath => Some(EventKey::OnDeath),
        Event::OnRevive => Some(EventKey::OnRevive),
        Event::OnBuffApplied { buff } => Some(EventKey::OnBuffApplied(*buff)),
        Event::OnStatusEffectApplied { target, status } => {
            Some(EventKey::OnStatusEffectApplied { target: *target, status: *status })
        }
    }
}

fn build_runtime(luminas: Vec<Lumina>) -> Runtime {
    let mut index: HashMap<EventKey, Vec<TriggerRef>> = HashMap::new();

    let mut fired_once: Vec<bool> = Vec::new();

    for (li, l) in luminas.iter().enumerate() {
        for (ti, t) in l.triggers.iter().enumerate() {
            fired_once.push(false);

            if let Some(key) = event_to_key(&t.event) {
                index.entry(key).or_default().push(TriggerRef { lumina_idx: li, trigger_idx: ti });
            }
        }
    }

    for (_k, list) in index.iter_mut() {
        list.sort_by(|a, b| {
            let pa = luminas[a.lumina_idx].triggers[a.trigger_idx].priority.unwrap_or(0.0);
            let pb = luminas[b.lumina_idx].triggers[b.trigger_idx].priority.unwrap_or(0.0);
            pb.partial_cmp(&pa).unwrap_or(std::cmp::Ordering::Equal)
        });
    }

    Runtime { luminas, index, fired_once }
}

//EFFECT APPLICATION
fn get_entity_mut<'a>(player: &'a mut EntityState, enemy: &'a mut EntityState, t: Target) -> &'a mut EntityState {
    match t {
        Target::Player => player,
        Target::Enemy => enemy,
    }
}

fn apply_effect(
    effect: &Effect,
    player: &mut EntityState,
    enemy: &mut EntityState,
    dmg_add_sum: &mut f32,
    dmg_mul_factor: &mut f32,
    queue: &mut VecDeque<FiredEvent>,
) {
    match effect {
        Effect::None => {}
        Effect::ReviveFull => {
            if player.stats.current_health <= 0.0 {
                player.stats.current_health = player.stats.health;
                player.was_zero_health = false;
                queue.push_back(FiredEvent::OnRevive);
            }
        }
        Effect::AddStat { stat, add } => {
            let mut delta = *add;

            if matches!(stat, StatKey::CurrentHealth) && delta > 0.0 {
                let heal_blocked = player.rules.contains(&Rule::CantHeal);

                if heal_blocked && player.stats.current_health > 0.0 {
                    delta = 0.0;
                }

                if delta > 0.0 && player.rules.contains(&Rule::DoubleHeal) {
                    delta *= 2.0;
                }
            }

            if matches!(stat, StatKey::Ap) && delta > 0.0 {
                if player.rules.contains(&Rule::BonusAp) {
                    delta += 1.0;
                }
            }

            let v = player.get_stat(*stat) + delta;
            player.set_stat(*stat, v);
        }
        Effect::MulStat { stat, mul } => {
            let v = player.get_stat(*stat) * *mul;
            player.set_stat(*stat, v);
        }
        Effect::DivStat { stat, div } => {
            if *div != 0.0 {
                let v = player.get_stat(*stat) / *div;
                player.set_stat(*stat, v);
            }
        }
        Effect::OvrStat { stat, ovr } => {
            player.set_stat(*stat, *ovr);
        }
        Effect::AddPercStat { stat1, stat2, perc } => {
            let add = player.get_stat(*stat2) * (*perc / 100.0);
            let v = player.get_stat(*stat1) + add;
            player.set_stat(*stat1, v);
        }
        Effect::ToggleRule { rule } => {
            player.rules.insert(*rule);
        }
        Effect::AddBuff { buff, turns } => {
            let old = player.buffs.get(buff).copied().unwrap_or(0.0);
            player.buffs.insert(*buff, old.max(*turns));
            queue.push_back(FiredEvent::OnBuffApplied { buff: *buff });
        }
        Effect::AddDebuff { debuff, turns } => {
            let old = enemy.debuffs.get(debuff).copied().unwrap_or(0.0);
            enemy.debuffs.insert(*debuff, old.max(*turns));
        }
        Effect::AddStatusEffect { target, status, turns } => {
            let double_burn = player.rules.contains(&Rule::DoubleBurn);
            let double_mark = player.rules.contains(&Rule::DoubleMark);
            let mut applied = *turns;

            if *status == StatusEffectKey::Burn && double_burn {
                applied *= 2.0;
            }
        
            if *status == StatusEffectKey::Mark && double_mark {
                applied = 2.0;
            }
        
            let ent = get_entity_mut(player, enemy, *target);
            let old = ent.status.get(status).copied().unwrap_or(0.0);
            let mut next = old.max(applied);
        
            if *status == StatusEffectKey::Mark && double_mark {
                next = next.min(2.0);
            }
        
            ent.status.insert(*status, next);
        
            queue.push_back(FiredEvent::OnStatusEffectApplied {
                target: *target,
                status: *status,
            });
        }
        Effect::MulStatusEffect { target, status, mul } => {
            let ent = get_entity_mut(player, enemy, *target);
            let old = ent.status.get(status).copied().unwrap_or(0.0);
            ent.status.insert(*status, old * *mul);
        }
        Effect::AddDmg { target, dmg } => {
            let p = *dmg / 100.0;

            match target {
                DamageTarget::DamageAdd => { *dmg_add_sum += p },
                DamageTarget::DamageMul => { *dmg_mul_factor *= 1.0 + p },
            }
        }
    }
}

//CONDITION EVALUATION
fn eval_condition(cond: &Condition, player: &EntityState, enemy: &EntityState) -> bool {
    match cond {
        Condition::Always => true,
        Condition::Never => false,
        Condition::And { all } => all.iter().all(|c| eval_condition(c, player, enemy)),
        Condition::Or { any } => any.iter().any(|c| eval_condition(c, player, enemy)),
        Condition::Not { cond } => !eval_condition(cond, player, enemy),
        Condition::StatGte { stat, value } => player.get_stat(*stat) >= *value,
        Condition::StatLte { stat, value } => player.get_stat(*stat) <= *value,
        Condition::StatEq  { stat, value } => (player.get_stat(*stat) - *value).abs() < 0.0001,
        Condition::PercLt { stat1, stat2, perc } => {
            let a = player.get_stat(*stat1);
            let b = player.get_stat(*stat2);
            a < b * (*perc / 100.0)
        }
        Condition::PercEq { stat1, stat2, perc } => {
            let a = player.get_stat(*stat1);
            let b = player.get_stat(*stat2);
            (a - b * (*perc / 100.0)).abs() < 0.0001
        }
        Condition::StatusEq { status, value } => {
            player.status.get(status).copied().unwrap_or(0.0) == *value
        }
        Condition::HasAttack { name } => name == &player.attack,
        Condition::HasStatusEffect { status } => enemy.status.get(status).copied().unwrap_or(0.0) > 0.0,
        Condition::HasDebuff { debuff } => enemy.debuffs.get(debuff).copied().unwrap_or(0.0) > 0.0,
    }
}

//EVENT DISPATCH
fn fired_to_keys(e: &FiredEvent) -> Vec<EventKey> {
    match e {
        FiredEvent::OnStart => vec![EventKey::OnStart],
        FiredEvent::OnTurnStart => vec![EventKey::OnTurnStart],
        FiredEvent::OnTurnEnd => vec![EventKey::OnTurnEnd],
        FiredEvent::OnAttack => vec![EventKey::OnAttack],
        FiredEvent::OnDeath => vec![EventKey::OnDeath],
        FiredEvent::OnRevive => vec![EventKey::OnRevive],
        FiredEvent::OnBuffApplied { buff } => {
            if *buff == BuffKey::Any {
                vec![EventKey::OnBuffApplied(BuffKey::Any)]
            } else {
                vec![EventKey::OnBuffApplied(*buff), EventKey::OnBuffApplied(BuffKey::Any)]
            }
        }
        FiredEvent::OnStatusEffectApplied { target, status } => {
            if *status == StatusEffectKey::Any {
                vec![EventKey::OnStatusEffectApplied { target: *target, status: StatusEffectKey::Any }]
            } else {
                vec![
                    EventKey::OnStatusEffectApplied { target: *target, status: *status },
                    EventKey::OnStatusEffectApplied { target: *target, status: StatusEffectKey::Any },
                ]
            }
        }
    }
}

fn dispatch(runtime: &mut Runtime, player: &mut EntityState, enemy: &mut EntityState, event: FiredEvent, dmg_add_sum: &mut f32, dmg_mul_factor: &mut f32) {
    let mut queue: VecDeque<FiredEvent> = VecDeque::new();
    queue.push_back(event);

    while let Some(ev) = queue.pop_front() {
        let keys = fired_to_keys(&ev);

        for key in keys {
            let list = match runtime.index.get(&key) {
                Some(l) => l.clone(),
                None => continue,
            };

            for tr in list {
                let trigger = &runtime.luminas[tr.lumina_idx].triggers[tr.trigger_idx];

                let flat_id = {
                    let mut id = 0usize;
                    for i in 0..tr.lumina_idx {
                        id += runtime.luminas[i].triggers.len();
                    }
                    id + tr.trigger_idx
                };

                if trigger.once.unwrap_or(false) {
                    if *runtime.fired_once.get(flat_id).unwrap_or(&false) {
                        continue;
                    }
                }

                if !eval_condition(&trigger.condition, player, enemy) {
                    continue;
                }

                if trigger.once.unwrap_or(false) {
                    if let Some(x) = runtime.fired_once.get_mut(flat_id) {
                        *x = true;
                    }
                }

                for eff in &trigger.effects {
                    apply_effect(eff, player, enemy, dmg_add_sum, dmg_mul_factor, &mut queue);
                }

                check_death_revive(player, &mut queue);
            }
        }
    }
}

fn check_death_revive(player: &mut EntityState, queue: &mut VecDeque<FiredEvent>) {
    if player.stats.current_health <= 0.0 {
        if !player.was_zero_health {
            player.was_zero_health = true;
            queue.push_back(FiredEvent::OnDeath);
        }
    } else if player.was_zero_health {
        player.was_zero_health = false;
        queue.push_back(FiredEvent::OnRevive);
    }
}

//MAIN
//DONT KNOW EXACT SCALING METHOD
fn scaling_value(s: Scaling) -> f32 {
    match s {
        Scaling::None => 0.0,
        Scaling::D => 0.20,
        Scaling::C => 0.35,
        Scaling::B => 0.50,
        Scaling::A => 0.70,
        Scaling::S => 1.00,
    }
}

//DONT KNOW EXACT SCALING METHOD
fn apply_attribute_bonuses(base: &CharacterStats, attrs: &CharacterAttributes) -> FinalStats {
    let health = base.health 
        + (attrs.vitality - 1.0) * 10.0;
    let attack_power = base.attack_power
        + (attrs.might - 1.0) * 1.0
        + (attrs.vitality - 1.0) * 0.20;
    let speed = base.speed 
        + (attrs.agility - 1.0) * 0.50;
    let defense = base.defense 
        + (attrs.defense - 1.0) * 1.00 
        + (attrs.agility - 1.0) * 0.20;
    let critical_rate = base.critical_rate 
        + (attrs.luck - 1.0) * 0.50;

    FinalStats {
        health,
        current_health: health,
        attack_power,
        speed,
        defense,
        critical_rate,
        ap: 0.0,
        bonus_dmg: 0.0,
        hits: 0.0,
    }
}

//DONT KNOW EXACT SCALING METHOD
fn weapon_scaling_attack_bonus(weapon: &Weapon, attrs: &CharacterAttributes) -> f32 {
    let v = attrs.vitality * scaling_value(weapon.scaling.vitality);
    let m = attrs.might * 0.9;
    let a = attrs.agility * scaling_value(weapon.scaling.agility);
    let d = attrs.defense * scaling_value(weapon.scaling.defense);
    let l = attrs.luck * scaling_value(weapon.scaling.luck);

    v + m + a + d + l
}

fn build_entity_from_character(character: &Character, attack: &Attack, weapon: &Weapon) -> EntityState {
    let mut stats = apply_attribute_bonuses(&character.stats, &character.attributes);
    stats.attack_power += weapon_scaling_attack_bonus(weapon, &character.attributes); //NICJT RICHTIG ÜBERARBEITEN
    stats.ap = character.ap - attack.ap_cost;
    stats.hits = attack.hits;
    stats.bonus_dmg = 0.0;

    EntityState {
        stats,
        rules: HashSet::new(),
        buffs: HashMap::new(),
        debuffs: HashMap::new(),
        status: HashMap::new(),
        attack: attack.name.clone(),
        was_zero_health: false,
    }
}

pub fn compute_build_damage_from_input(input: BuildInput) -> Result<BuildOutput, JsValue> {
    let mut luminas: Vec<Lumina> = Vec::new();
    luminas.extend(input.luminas.clone());
    for p in &input.pictos {
        luminas.push(p.lumina.clone());
    }

    let mut runtime = build_runtime(luminas);
    let mut player = build_entity_from_character(&input.character, &input.attack, &input.weapon);

    for p in &input.pictos {
        player.stats.health += p.attribute_buff.health;
        player.stats.current_health += p.attribute_buff.health;
        player.stats.speed += p.attribute_buff.speed;
        player.stats.defense += p.attribute_buff.defense;
        player.stats.critical_rate += p.attribute_buff.critical_rate;
    }

    let mut enemy = EntityState {
        stats: FinalStats {
            health: 1.0,
            current_health: 1.0,
            attack_power: 0.0,
            speed: 0.0,
            defense: 0.0,
            critical_rate: 0.0,
            ap: 0.0,
            bonus_dmg: 0.0,
            hits: 0.0,
        },
        rules: HashSet::new(),
        buffs: HashMap::new(),
        debuffs: HashMap::new(),
        status: HashMap::new(),
        attack: String::new(),
        was_zero_health: false,
    };

    let mut dmg_add_sum: f32 = 0.0;
    let mut dmg_mul_factor: f32 = 1.0;

    dispatch(&mut runtime, &mut player, &mut enemy, FiredEvent::OnStart, &mut dmg_add_sum, &mut dmg_mul_factor);
    dispatch(&mut runtime, &mut player, &mut enemy, FiredEvent::OnTurnStart, &mut dmg_add_sum, &mut dmg_mul_factor);
    if player.stats.ap < 0.0 {
        return Err(JsValue::from_str("NOT ENOUGH AP"));
    }
    dispatch(&mut runtime, &mut player, &mut enemy, FiredEvent::OnTurnEnd, &mut dmg_add_sum, &mut dmg_mul_factor);
    dispatch(&mut runtime, &mut player, &mut enemy, FiredEvent::OnAttack, &mut dmg_add_sum, &mut dmg_mul_factor);

    if enemy.debuffs.get(&DebuffKey::Defenceless).copied().unwrap_or(0.0) > 0.0 {
        let mut def_bonus = 0.25;
        if player.rules.contains(&Rule::GreaterDefenceless) {
            def_bonus += 0.15;
        }
        dmg_mul_factor *= 1.0 + def_bonus;
    }

    if player.buffs.get(&BuffKey::Powerful).copied().unwrap_or(0.0) > 0.0 {
        let mut pow_bonus = 0.25;
        if player.rules.contains(&Rule::GreaterPowerful) {
            pow_bonus += 0.15;
        }
        dmg_mul_factor *= 1.0 + pow_bonus;
    }

    if player.rules.contains(&Rule::PowerfulShield) {
        let shields = player.status.get(&StatusEffectKey::Shield).copied().unwrap_or(0.0);
        if shields > 0.0 {
            dmg_add_sum += 0.10 * shields;
        }
    }

    if player.rules.contains(&Rule::Tainted) {
        let mut count = 0.0;
        for (k, v) in player.status.iter() {
            if *k == StatusEffectKey::Any { continue; }
            if *v > 0.0 { count += 1.0; }
        }
        if count > 0.0 {
            dmg_add_sum += 0.15 * count;
        }
    }

    let weapon_power = input.weapon.power + weapon_scaling_attack_bonus(&input.weapon, &input.character.attributes);
    let attack_power = player.stats.attack_power + weapon_power;
    let skill_multiplier = input.attack.power;
    let crit_factor = 1.0 + (player.stats.critical_rate.min(100.0) / 100.0) * 0.5;

    let base_damage = attack_power * skill_multiplier;
    let mut damage = base_damage * crit_factor * (1.0 + dmg_add_sum) * dmg_mul_factor;

    if player.rules.contains(&Rule::FasterThanStronger) {
        damage *= 0.5;
    }

    if !player.rules.contains(&Rule::ExceedDmgCap) {
        damage = damage.min(9999.0);
    }

    if player.stats.current_health == 0.0 {
        damage = 0.0;
    }

    damage *= player.stats.hits;

    let out = BuildOutput {
        damage,
        skill_multiplier,
        crit_factor,
        dmg_add_sum,
        dmg_mul_factor,
        final_stats: player.stats.clone(),
    };

    Ok(out)
}

#[wasm_bindgen]
pub fn get_build_damage(input: JsValue) -> Result<JsValue, JsValue> {
    let input: BuildInput = serde_wasm_bindgen::from_value(input)
        .map_err(|e| JsValue::from_str(&format!("Invalid input: {e}")))?;
    let out = compute_build_damage_from_input(input)?;
    serde_wasm_bindgen::to_value(&out)
        .map_err(|e| JsValue::from_str(&format!("Serialize error: {e}")))
}
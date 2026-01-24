import type { Lumina } from "./interfaces";

const augmented_attack_luminas: Lumina = {
    name: "Augmented Attack Luminas",
    category: "LUMINA",
    description: "50% increased Base Attack damage",
    cost: 7,
    effect: { kind: "ADD_BUFF", target: "DAMAGE_ADD", stacking: "ADD", buff: 50 },
    condition: { kind: "HAS_ATTACK", name: "Base Attack"}
}

export const luminas: Array<Lumina> = [
    augmented_attack_luminas
]
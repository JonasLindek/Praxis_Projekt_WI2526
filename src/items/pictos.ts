import type { Picto } from "./interfaces";
import { luminas } from "./luminas";

const augmented_attack: Picto = {
    name: "Augmented Attack",
    category: "PICTO",
    attribute_buff: {
        health: 0,
        speed: 10,
        defense: 8,
        critical_rate: 0
    },
    lumina: luminas.find(lumina => lumina.name ===  "Augmented Attack Luminas") ?? luminas[0]
}

export const pictos: Array<Picto> = [
    augmented_attack
]
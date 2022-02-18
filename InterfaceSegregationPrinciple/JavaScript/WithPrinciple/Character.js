import { Attacker, HasHealth, Mover } from "./Capabilities";
import { Entity } from "./Entity";

export default class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name);
        
        this.AttackDamage = attackDamage;
        this.Health = health;
    }
}

Object.assign(Character.prototype, Mover);
Object.assign(Character.prototype, Attacker);
Object.assign(Character.prototype, HasHealth);
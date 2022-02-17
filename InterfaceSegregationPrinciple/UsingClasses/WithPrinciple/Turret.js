import { Attacker } from "./Capabilities";
import Entity from "./Entity";

export default class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name);

        this.AttackDamage = attackDamage;
    }
}

Object.assign(Turret.prototype, Attacker);
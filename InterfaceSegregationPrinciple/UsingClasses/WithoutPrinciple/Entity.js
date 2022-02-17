export default class Entity {
    constructor(name, attackDamage, health) {
        this.Name = name;
        this.AttackDamage = attackDamage;
        this.Health = health;
    }

    Move() {
        console.log(`${this.Name} moved`);
    }

    Attack(targetEntity) {
        console.log(`${this.Name} attacked ${targetEntity} for ${this.AttackDamage} damage`);

        targetEntity.TakeDamage(this.AttackDamage);
    }

    TakeDamage(amount) {
        this.Health -= amount;

        console.log(`${this.Name} has ${this.Health} health remaining`);
    }
}
export const Mover = {
    Move() {
        console.log(`${this.Name} moved`);
    }
}

export const Attacker = {
    Attack(targetEntity) {
        console.log(`${this.Name} attacked ${targetEntity} for ${this.AttackDamage} damage`);

        targetEntity.TakeDamage(this.AttackDamage);
    }
}

export const HasHealth = {
    TakeDamage(amount) {
        this.Health -= amount;

        console.log(`${this.Name} has ${this.Health} health remaining`);
    }
}
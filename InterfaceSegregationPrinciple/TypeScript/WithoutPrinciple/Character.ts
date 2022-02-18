import { IEntity } from "./IEntity";

class Character implements IEntity {
    AttackDamage: any;
    Health: any;
    Name: any;
    
    Move() {
        // do stuff
    }

    Attack() {
        // do stuff
    }

    TakeDamage(amount: any) {
        // do stuff
    }
}
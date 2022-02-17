import { IEntity } from "./IEntity";

class Turret implements IEntity {
    AttackDamage: any;
    Health: any;
    Name: any;
    
    Move() {
        throw new Error('Cannot move');
    }

    Attack() {
        // do stuff
    }

    TakeDamage(amount: any) {
        // do stuff
    }
}

// the interface segregation principle is violated because the interface does a lot of things
// some classes that implement this interface can implement all the functionalities but the Turret doesn't
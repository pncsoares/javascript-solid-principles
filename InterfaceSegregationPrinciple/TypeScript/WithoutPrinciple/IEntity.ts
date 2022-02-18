export interface IEntity {
    AttackDamage: any;
    Health: any;
    Name: any;

    Move(): any
    Attack(): any
    TakeDamage(amount: any): any
}
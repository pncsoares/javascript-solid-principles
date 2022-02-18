import { HasHealth } from "./Capabilities";
import Entity from "./Entity";

export default class Wall extends Entity {
    constructor(name, health) {
        super(name);

        this.Health = health;
    }
}

Object.assign(Wall.prototype, HasHealth);
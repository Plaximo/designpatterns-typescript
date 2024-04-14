import {Animal} from "./animal";
import {CanNotFly} from "./flyable";

export class Dog extends Animal {
    constructor() {
        super();
        this.flyAbility = new CanNotFly();
    }
}
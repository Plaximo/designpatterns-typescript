import {Animal} from "./animal";
import {CanFly} from "./flyable";

export class Bird extends Animal {
    constructor() {
        super();
        this.flyAbility = new CanFly();
    }

}
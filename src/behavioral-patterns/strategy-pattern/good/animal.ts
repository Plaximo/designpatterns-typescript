import {EMPTY_STRING} from "../../../utils/string.utils";
import {CanNotFly, Flyable} from "./flyable";

export abstract class Animal {
    private name: string = EMPTY_STRING;
    
    // composition over inheritance
    protected flyAbility: Flyable = new CanNotFly();
    
    
    public set Name(newName: string) {
        this.name = newName;
    }
    
    public get Name(): string {
        return this.name;
    }

    public get FlyAbility(): Flyable {
        return this.flyAbility;
    }

    public set FlyAbility(newFlyAbility: Flyable) {
        this.flyAbility = newFlyAbility;
    }
    
    public tryToFly() {
        this.flyAbility.fly();
    }
}
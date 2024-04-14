import {EMPTY_STRING} from "../../../utils/string.utils";
import {CanNotFly, Flyable} from "./flyable";

export abstract class Animal {
    // composition over inheritance
    public flyAbility: Flyable = new CanNotFly(); 
    
    private name: string = EMPTY_STRING;
    
    
    public set Name(newName: string) {
        this.name = newName;
    }
    
    public get Name(): string {
        return this.name;
    }
}
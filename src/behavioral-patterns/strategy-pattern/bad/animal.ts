import {EMPTY_STRING} from "../../../utils/string.utils";

export abstract class Animal {
    private name: string = EMPTY_STRING;
    
    public set Name(newName: string) {
        this.name = newName;
    }
    
    public get Name(): string {
        return this.name;
    }
    
    // bad, we implemented the fly method directly to the Animal subclass.
    public abstract fly(): void;
}
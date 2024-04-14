import {Animal} from "./animal";

export class Dog extends Animal {
    
    // we have to throw an error, because dogs can't fly
    fly() {
        throw new Error('I can\'t fly');
    }
    
}
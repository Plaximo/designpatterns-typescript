import { Attacker } from "./attacker";

export abstract class AttackTower {
    private attacker: Attacker;
    
    constructor() {
        this.attacker = this.createAttacker();
    }
    
    protected abstract createAttacker(): Attacker;
}
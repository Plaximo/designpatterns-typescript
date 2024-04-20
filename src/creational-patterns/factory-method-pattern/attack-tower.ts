import { Attacker } from "./attacker";

// also using facade pattern
export abstract class AttackTower {
    private attacker: Attacker;
    
    constructor() {
        this.attacker = this.createAttacker();
    }
    
    protected abstract createAttacker(): Attacker;
    
    public attack() {
        this.attacker.attack();
    }
}
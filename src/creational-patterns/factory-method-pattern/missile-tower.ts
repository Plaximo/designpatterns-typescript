import {AttackTower} from "./attack-tower";
import {MissileAttacker} from "./missile-attacker";

export class MissileTower extends AttackTower {
    protected createAttacker(): MissileAttacker {
        return new MissileAttacker();
    }
    
}
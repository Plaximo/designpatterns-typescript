import {AttackTower} from "./attack-tower";
import {LaserAttacker} from "./laser-attacker";

export class LaserTower extends AttackTower {
    protected createAttacker(): LaserAttacker {
        return new LaserAttacker();
    }
}
import {AoeTower} from "../shared/towers/aoe-tower";
import {MissileTower} from "../shared/towers/missile-tower";
import {LaserTower} from "../shared/towers/laser-tower";

// creation is put into a simple method, without polymorphism
export class TowerFactory {
    public createAoeTower(): AoeTower {
        return new AoeTower(5);
    }

    public createMissileTower(): MissileTower {
        return new MissileTower(10);
    }

    public createLaserTower(): LaserTower {
        return new LaserTower(20);
    }
}
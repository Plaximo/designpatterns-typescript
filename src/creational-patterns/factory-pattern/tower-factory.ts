import {AoeTower} from "../shared/towers/aoe-tower";
import {Tower} from "../shared/towers/tower";
import {MissileTower} from "../shared/towers/missile-tower";
import {LaserTower} from "../shared/towers/laser-tower";

// With a factory class you have the object creation in one place
// createTower return the generic type tower -> uses polymorphism
export class TowerFactory {
    public createTower(name: string): Tower {
        switch (name) {
            case AoeTower.towerName:
                return new AoeTower(5);
            case MissileTower.towerName:
                return new MissileTower(10);
            case LaserTower.towerName:
                return new LaserTower(20);
            default:
                throw new Error(`Can't spawn tower with name ${name}`);
        }
    }
}
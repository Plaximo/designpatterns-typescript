// With a factory class you have the object creation in one place
import {AoeTower} from "./towers/aoe-tower";
import {Tower} from "./towers/tower";
import {MissleTower} from "./towers/missle-tower";
import {LaserTower} from "./towers/laser-tower";

export class TowerFactory {
    public spawnTower(name: string): Tower {
        switch (name) {
            case AoeTower.towerName:
                return new AoeTower(5);
            case MissleTower.towerName:
                return new MissleTower(10);
            case LaserTower.towerName:
                return new LaserTower(20);
            default:
                throw new Error(`Can't spawn tower with name ${name}`);
        }
    }
}
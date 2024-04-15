import {TowerFactory} from "./tower-factory";
import {AoeTower} from "../shared/towers/aoe-tower";
import {MissileTower} from "../shared/towers/missile-tower";
import {LaserTower} from "../shared/towers/laser-tower";

export class MedievalTowerFactory implements TowerFactory {
    createAoeTower(): AoeTower {
        return new AoeTower(10, 'Medieval Aoe Tower'); // medieval style aoe tower
    }

    createMissileTower(): MissileTower {
        return new MissileTower(10, 'Medieval Missile Tower'); // medieval style missile tower
    }

    createLaserTower(): LaserTower {
        return new LaserTower(20, 'Medieval Laser Tower'); // medieval style laser tower
    }
}
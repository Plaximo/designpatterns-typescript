import {TowerFactory} from "./tower-factory";
import {AoeTower} from "../shared/towers/aoe-tower";
import {MissileTower} from "../shared/towers/missile-tower";
import {LaserTower} from "../shared/towers/laser-tower";

export class SpaceTowerFactory implements TowerFactory {
    createAoeTower(): AoeTower {
        return new AoeTower(10, 'Space Aoe Tower'); // space style aoe tower
    }

    createMissileTower(): MissileTower {
        return new MissileTower(10, 'Space Missile Tower'); // space style missile tower
    }

    createLaserTower(): LaserTower {
        return new LaserTower(20, 'Space Laser Tower'); // space style laser tower
    }
}
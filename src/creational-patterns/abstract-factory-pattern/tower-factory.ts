import {Tower} from "../shared/towers/tower";

export interface TowerFactory {
    createAoeTower(): Tower;
    createMissileTower(): Tower;
    createLaserTower(): Tower;
}
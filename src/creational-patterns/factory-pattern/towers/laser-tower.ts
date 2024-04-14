import {Tower} from "./tower";

export class LaserTower extends Tower {
    public static towerName = 'Laser Tower';
    constructor(protected damage: number) {
        super(LaserTower.towerName, damage);
    }
}
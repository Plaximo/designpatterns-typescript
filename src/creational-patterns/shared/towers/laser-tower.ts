import {Tower} from "./tower";

export class LaserTower extends Tower {
    public static towerName = 'Laser Tower';
    constructor(protected damage: number, protected name: string = LaserTower.towerName) {
        super(name, damage);
    }
}
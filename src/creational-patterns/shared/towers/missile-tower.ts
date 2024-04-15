import {Tower} from "./tower";

export class MissileTower extends Tower {
    public static towerName = 'Missile Tower';
    constructor(protected damage: number,protected name: string = MissileTower.towerName) {
        super(name, damage);
    }
}
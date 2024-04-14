import {Tower} from "./tower";

export class MissleTower extends Tower {
    public static towerName = 'Missle Tower';
    constructor(protected damage: number) {
        super(MissleTower.towerName, damage);
    }
}
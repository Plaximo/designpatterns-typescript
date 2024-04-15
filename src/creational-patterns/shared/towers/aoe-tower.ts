import {Tower} from "./tower";

export class AoeTower extends Tower {
    public static towerName = 'Aoe Tower';
    constructor(protected damage: number, protected name: string = AoeTower.towerName) {
        super(name, damage);
    }
}
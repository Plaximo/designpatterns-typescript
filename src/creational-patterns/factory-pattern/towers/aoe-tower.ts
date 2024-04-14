import {Tower} from "./tower";

export class AoeTower extends Tower {
    public static towerName = 'Aoe Tower';
    constructor(protected damage: number) {
        super(AoeTower.towerName, damage);
    }
}
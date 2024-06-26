﻿import {Tower} from "../shared/towers/tower";
import {AoeTower} from "../shared/towers/aoe-tower";
import {TowerFactory} from "./tower-factory";
import {MissileTower} from "../shared/towers/missile-tower";
import {LaserTower} from "../shared/towers/laser-tower";
import {TowerFactory2} from "./tower-factory2";

export function runFactoryPattern() {
    // bad
    const towerToSpawn = 'Aoe Tower';
    let spawnedTower: Tower | undefined = undefined;
    
    if (towerToSpawn === 'Aoe Tower') {
        spawnedTower = new AoeTower(100);
    } else if (towerToSpawn === 'Missle Tower') {
        spawnedTower = new MissileTower(5);
    } else if (towerToSpawn === 'Laser Tower') {
        spawnedTower = new LaserTower(20);
    }
    spawnedTower?.shoot();
    
    
    // good with factory
    const towerFactory = new TowerFactory();
    spawnedTower = towerFactory.createTower(towerToSpawn);
    spawnedTower.shoot();

    // good with factory
    const towerFactory2 = new TowerFactory2();
    const goodAoeTower1 = towerFactory2.createAoeTower();
    const goodAoeTower2 = towerFactory2.createAoeTower();
}
import {Tower} from "./towers/tower";
import {AoeTower} from "./towers/aoe-tower";
import {TowerFactory} from "./tower-factory";
import {MissleTower} from "./towers/missle-tower";
import {LaserTower} from "./towers/laser-tower";

export function runFactoryPattern() {
    // bad
    const towerToSpawn = 'Aoe Tower';
    let spawnedTower: Tower | undefined = undefined;
    
    if (towerToSpawn === 'Aoe Tower') {
        spawnedTower = new AoeTower(100);
    } else if (towerToSpawn === 'Missle Tower') {
        spawnedTower = new MissleTower(5);
    } else if (towerToSpawn === 'Laser Tower') {
        spawnedTower = new LaserTower(20);
    }
    spawnedTower?.shoot();
    
    // good with factory
    const towerFactory = new TowerFactory();
    spawnedTower = towerFactory.spawnTower(towerToSpawn);
    spawnedTower.shoot();
}
import {AoeTower} from "../shared/towers/aoe-tower";
import {TowerFactory} from "./tower-factory";

export function runFactoryMethodPattern() {
    // bad
    const aoeTower1 = new AoeTower(11);
    const aoeTower2 = new AoeTower(5); // different damage?
    
    // good with factory
    const towerFactory = new TowerFactory();
    const goodAoeTower1 = towerFactory.createAoeTower();
    const goodAoeTower2 = towerFactory.createAoeTower();
}
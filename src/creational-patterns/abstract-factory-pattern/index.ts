import {MedievalTowerFactory} from "./medieval-tower-factory";
import {TowerFactory} from "./tower-factory";
import {SpaceTowerFactory} from "./space-tower-factory";

export function runAbstractFactoryPattern() {
    const medievalFactory: TowerFactory = new MedievalTowerFactory();
    const medievalAoeTower = medievalFactory.createAoeTower();
    
    const spaceFactory: TowerFactory = new SpaceTowerFactory();
    const spaceAoeTower = spaceFactory.createAoeTower();
}
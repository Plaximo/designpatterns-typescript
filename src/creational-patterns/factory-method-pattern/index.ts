import {MissileTower} from "./missile-tower";

export function runFactoryMethodPattern() {
    // good
    const missileTower = new MissileTower();
    missileTower.attack();
}
import {Dog as BadDog} from "./bad/dog";
import {Animal as BadAnimal} from "./bad/animal";
import {Bird as BadBird} from "./bad/bird";
import {Dog} from "./good/dog";
import {Bird} from "./good/bird";
import {CanFlyVeryLow} from "./good/flyable";
import {Animal} from "./good/animal";

export function runStrategyPattern() {
    console.log('START STRATEGY PATTERN')
    const badDog: BadAnimal = new BadDog();
    const badBird: BadAnimal = new BadBird();

    const goodDog: Animal = new Dog();
    const goodBird: Animal = new Bird();

    badDog.fly();
    badBird.fly();

    goodDog.tryToFly(); // can't fly
    goodBird.tryToFly();

    goodDog.FlyAbility = new CanFlyVeryLow();
    goodDog.tryToFly(); // can fly very low now
    console.log('END STRATEGY PATTERN')
}

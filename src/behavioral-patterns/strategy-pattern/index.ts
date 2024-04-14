import {Dog as BadDog} from "./bad/dog";
import {Animal as BadAnimal} from "./bad/animal";
import {Bird as BadBird} from "./bad/bird";
import {Dog} from "./good/dog";
import {Bird} from "./good/bird";

const badDog: BadAnimal = new BadDog();
const badBird: BadAnimal = new BadBird();

const goodDog = new Dog();
const goodBird = new Bird();

badDog.fly();
badBird.fly();
goodDog.flyAbility.fly();
goodBird.flyAbility.fly();

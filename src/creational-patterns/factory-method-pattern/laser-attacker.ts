import {Attacker} from "./attacker";

export class LaserAttacker implements Attacker {
    attack(): void {
        console.log('Laser Attacker attacks!');
    }
}
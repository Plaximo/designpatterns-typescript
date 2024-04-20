import {Attacker} from "./attacker";

export class MissileAttacker implements Attacker {
    attack(): void {
        console.log('Missile Attacker attacks!');
    }
}
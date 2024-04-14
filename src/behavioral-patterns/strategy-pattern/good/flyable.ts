export interface Flyable {
    fly(): void;
}

export class CanFly implements Flyable {
    fly(): void {
        console.log('I can fly.');
    }
}

export class CanFlyVeryLow implements Flyable {
    fly(): void {
        console.log('I can fly, but only very low.');
    }
}

export class CanNotFly implements Flyable {
    fly(): void {
        console.log('I can not fly.');
    }
}
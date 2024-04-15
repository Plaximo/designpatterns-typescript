
export abstract class Tower {
    protected constructor(protected name: string, protected damage: number) {
        console.log(`${name} created with ${damage} damage`);
    }
    
    public shoot() {
        console.log(`${this.name} shoots and does ${this.damage} damage`);
    }
}
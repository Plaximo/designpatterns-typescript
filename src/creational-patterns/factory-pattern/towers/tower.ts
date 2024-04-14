
export abstract class Tower {
    protected constructor(protected name: string, protected damage: number) {}
    
    public shoot() {
        console.log(`${this.name} shoots and does ${this.damage} damage`);
    }
}